#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Kubernetes 概念测评题目生成器"""

import json
import random

# 题目定义
questions = []

def add_question(module, question, qtype, options, answer, explanation, difficulty="基础"):
    questions.append({
        "module": module,
        "question": question,
        "type": qtype,
        "options": options,
        "answer": answer,
        "difficulty": difficulty,
        "explanation": explanation
    })

module_questions = {
    "工作负载": [
        # Pod 相关
        ("Pod 的最小调度单元是什么？", "单选", ["容器", "Pod", "Deployment", "Service"], [1], "Pod 是 Kubernetes 的最小调度单元，它封装一个或多个容器，共享存储和网络。容器是更底层的概念，Kubernetes 通过调度 Pod 来调度容器。"),
        ("Pod 中的容器如何共享存储？", "单选", ["通过 Volume 共享", "无法共享", "通过网络共享", "通过容器间直接通信"], [0], "Pod 中的容器可以通过 Volume 共享存储。Volume 定义在 Pod 级别，可以被同一个 Pod 中的所有容器挂载和访问。"),
        ("Pod 的生命周期包括哪些阶段？", "多选", ["Pending", "Running", "Succeeded", "Failed"], [0, 1, 2, 3], "Pod 的生命周期包括：Pending（等待调度）、Running（运行中）、Succeeded（成功完成）、Failed（失败）、Unknown（未知状态）等。"),
        ("如何查看 Pod 的详细状态？", "单选", ["kubectl status pod", "kubectl describe pod", "kubectl show pod", "kubectl info pod"], [1], "kubectl describe pod 显示 Pod 的详细状态，包括事件、容器状态、资源分配等。kubectl status、show、info 不是标准命令。"),
        ("Pod 的重启策略有哪几种？", "多选", ["Always", "OnFailure", "Never", "Automatic"], [0, 1, 2], "Pod 的 restartPolicy 有三种：Always（总是重启）、OnFailure（失败时重启）、Never（从不重启）。没有 Automatic 这个选项。"),
        ("Pod 中容器的终止消息是什么？", "单选", ["容器退出时写入的文件内容", "容器的退出码", "容器最后的日志", "容器的运行时长"], [0], "terminationMessagePath 指定容器退出时写入终止消息的路径，默认为 /dev/termination-log。这有助于调试容器退出原因。"),

        # Deployment 相关
        ("Deployment 的主要作用是什么？", "单选", ["管理无状态应用", "管理有状态应用", "存储数据", "网络通信"], [0], "Deployment 管理无状态应用，提供声明式更新、滚动更新、回滚等功能。有状态应用由 StatefulSet 管理。"),
        ("如何扩容 Deployment？", "单选", ["kubectl scale deployment <name> --replicas=N", "kubectl resize deployment <name> --replicas=N", "kubectl expand deployment <name> --replicas=N", "kubectl deployment scale <name> N"], [0], "kubectl scale deployment <name> --replicas=N 扩缩容 Deployment。resize、expand 不是标准命令。也可以直接编辑 YAML 文件的 replicas 字段。"),
        ("Deployment 的滚动更新策略包括哪些？", "多选", ["RollingUpdate", "Recreate", "MaxUnavailable", "MaxSurge"], [0, 1, 2, 3], "更新策略 RollingUpdate 逐步替换，Recreate 先全删再创建。MaxUnavailable 和 MaxSurge 控制更新过程中不可用和额外的 Pod 数量限制。"),
        ("如何回滚 Deployment？", "单选", ["kubectl rollback deployment <name>", "kubectl rollout undo deployment <name>", "kubectl back deployment <name>", "kubectl revert deployment <name>"], [1], "kubectl rollout undo deployment <name> 回滚 Deployment 到上一版本。也可以使用 --to-revision 指定版本。rollback 是旧版别名。"),
        ("Deployment 的 revisionHistoryLimit 有什么作用？", "单选", ["限制保留的 Pod 数量", "限制保留的历史版本数", "限制更新的频率", "限制 Pod 的重启次数"], [1], "revisionHistoryLimit 限制保留的 ReplicaSet 历史版本数，用于回滚。默认为 10。设置得更小可节省资源，设为 0 则不可回滚。"),

        # StatefulSet 相关
        ("StatefulSet 适用于什么类型的应用？", "单选", ["无状态应用", "有状态应用", "批处理任务", "定时任务"], [1], "StatefulSet 适用于有状态应用，提供稳定的网络标识、持久化存储、有序部署和扩展。无状态应用使用 Deployment。"),
        ("StatefulSet 的 Pod 名称有什么特点？", "单选", ["随机生成", "包含序号，如 web-0, web-1", "固定命名", "使用哈希值"], [1], "StatefulSet 的 Pod 名称包含序号：web-0, web-1, web-2 等。这确保稳定的网络标识，即使 Pod 重建也会保持相同的名称。"),
        ("StatefulSet 的部署顺序是怎样的？", "单选", ["从 0 到 N-1 有序部署", "同时部署所有 Pod", "从 N-1 到 0 倒序部署", "随机部署"], [0], "StatefulSet 的 Pod 按从 0 到 N-1 的顺序有序部署，前一个 Pod 变为 Running 后才部署下一个。扩展时从 N 开始向后添加，缩容时从 N-1 开始向前删除。"),
        ("StatefulSet 如何管理存储？", "单选", ["使用临时存储", "为每个 Pod 创建独立的 PVC", "共享 PVC", "不管理存储"], [1], "StatefulSet 可以为每个 Pod 创建独立的 PersistentVolumeClaim，即使 Pod 重建，存储也保持绑定，确保数据持久化。"),
        ("StatefulSet 的 headless Service 有什么作用？", "单选", ["负载均衡", "提供稳定的网络标识和 DNS", "暴露集群外部访问", "健康检查"], [1], "StatefulSet 需要创建 headless Service（ClusterIP: None），这为每个 Pod 提供稳定的 DNS 记录，如 web-0.default.svc.cluster.local。"),

        # DaemonSet 相关
        ("DaemonSet 保证什么？", "单选", ["每个节点运行一个 Pod", "至少运行 N 个副本", "所有节点共享存储", "自动回滚"], [0], "DaemonSet 保证每个（或匹配选择器的）节点运行一个 Pod。适用于集群范围的后台任务，如日志收集、监控代理等。"),
        ("如何在特定节点上运行 DaemonSet Pod？", "多选", ["使用 nodeSelector", "使用 nodeAffinity", "使用 toleration", "使用 annotation"], [0, 1, 2], "可以使用 nodeSelector、nodeAffinity 控制调度到哪些节点，使用 toleration 允许调度到有特定污点的节点。annotation 不影响调度。"),
        ("DaemonSet 的更新策略有哪些？", "多选", ["RollingUpdate", "OnDelete", "Recreate", "Automatic"], [0, 1], "DaemonSet 的 updateStrategy 可以是 RollingUpdate（滚动更新）或 OnDelete（删除时更新）。没有 Recreate 和 Automatic 选项。"),
        ("删除 DaemonSet 会怎样？", "单选", ["只删除控制器，Pod 保留", "删除控制器和 Pod", "只删除 Pod", "什么都不做"], [1], "删除 DaemonSet 会级联删除它管理的 Pod。如果只想删除控制器而保留 Pod，可以使用 --cascade=false（已废弃）或停止后再删除。"),
        ("如何确保 DaemonSet Pod 调度到 master 节点？", "单选", ["配置 toleration 匹配 master 污点", "修改 master 为工作节点", "使用 nodeScheduler", "直接标注 master"], [0], "Master 节点通常有 NoSchedule 或 NoExecute 污点，需要给 DaemonSet 添加相应的 toleration。也可以移除污点但不推荐生产环境使用。"),

        # Job 和 CronJob 相关
        ("Job 的作用是什么？", "单选", ["管理长期运行的服务", "管理一次性任务", "管理定时任务", "管理有状态应用"], [1], "Job 管理一次性任务，确保指定数量的 Pod 成功完成。长期运行服务使用 Deployment，定时任务使用 CronJob。"),
        ("CronJob 的 schedule 字段使用什么格式？", "单选", ["cron 表达式", "系统时间戳", "ISO 8601", "自定义格式"], [0], "CronJob 的 schedule 使用标准 cron 表达式，如 */5 * * * * 表示每 5 分钟运行一次。"),
        ("如何查看已完成的 Job？", "单选", ["kubectl get completed-jobs", "kubectl get jobs", "kubectl show jobs", "kubectl jobs --completed"], [1], "kubectl get jobs 列出所有 Job，包括已完成的。使用 kubectl get job <name> 查看特定 Job。已完成的 Job 会被保留，除非设置 TTL。"),
        ("Job 的 completions 字段表示什么？", "单选", ["任务必须完成的次数", "最大并发数", "超时时间", "重试次数"], [0], "completions 表示任务必须成功完成的次数。parallelism 表示并发运行的 Pod 数量。默认 completions=1，parallelism=1。"),
        ("CronJob 的 failedJobsHistoryLimit 有什么作用？", "单选", ["限制保留成功的历史任务", "限制保留失败的历史任务", "限制任务重试次数", "限制任务并发数"], [1], "failedJobsHistoryLimit 限制保留多少失败的历史任务记录，用于调试和历史查看。类似地，successfulJobsHistoryLimit 控制成功任务。"),

        # HPA 相关
        ("HPA 的全称是什么？", "单选", ["Horizontal Pod Autoscaler", "High Performance Application", "Host Port Availability", "Hardware Provisioning Agent"], [0], "HPA (Horizontal Pod Autoscaler) 自动调整工作负载（Deployment、StatefulSet 等）的 Pod 数量，基于 CPU、内存或自定义指标。"),
        ("HPA 基于哪些指标自动扩展？", "多选", ["CPU 利用率", "内存利用率", "自定义指标", "磁盘使用量"], [0, 1, 2], "HPA 支持 CPU、内存资源指标，以及自定义指标（通过自定义指标 API 或外部指标 API）。磁盘使用量不是标准的 HPA 指标。"),
        ("如何创建 HPA？", "单选", ["kubectl autoscale deployment <name> --cpu-percent=80 --min=2 --max=10", "kubectl hpa create deployment <name>", "kubectl create hpa --deployment <name>", "kubectl scale auto deployment <name>"], [0], "kubectl autoscale deployment <name> --cpu-percent=80 --min=2 --max=10 创建 HPA。也可以使用 YAML 文件创建 HorizontalPodAutoscaler 对象。"),
        ("HPA 的 scaling 行为（behavior）可以配置什么？", "多选", ["scaleUp", "scaleDown", "stabilityWindow", "policies"], [0, 1, 2, 3], "HPA behavior 配置扩缩容行为：scaleUp 和 scaleDown 限制扩缩容速度，stabilityWindow 设置稳定窗口避免波动，policies 定义具体的扩缩容策略。"),
        ("为什么 HPA 可能不扩展？", "多选", ["没有设置 requests", "指标未达到阈值", "处于稳定窗口内", "已达到 maxReplicas"], [0, 1, 2, 3], "HPA 不扩展可能原因：没有设置容器资源 requests（无法计算使用率）、指标未到达目标阈值、处于稳定窗口内避免抖动、已达到最大副本数。"),
    ],

    "网络": [
        # Service 相关
        ("Service 的类型有哪几种？", "多选", ["ClusterIP", "NodePort", "LoadBalancer", "ExternalName"], [0, 1, 2, 3], "Service 类型包括：ClusterIP（集群内部，默认）、NodePort（通过节点端口暴露）、LoadBalancer（云负载均衡器）、ExternalName（映射到外部 DNS 名称）。"),
        ("ClusterIP 类型的 Service 可以从哪里访问？", "单选", ["集群外部", "所有节点", "只能在集群内部", "只能从 master 节点"], [2], "ClusterIP Service 提供集群内部访问，从 Pod 内部或其他 Service 可以访问。从集群外部访问需要 NodePort、LoadBalancer 或 Ingress。"),
        ("Service 如何选择后端 Pod？", "单选", ["使用 Pod 名称", "使用 label selector", "使用 Pod IP", "使用容器端口"], [1], "Service 通过 label selector 选择后端 Pod。当多个 Pod 匹配标签时，流量会负载均衡到这些 Pod。"),
        ("Service 的 sessionAffinity 有什么作用？", "单选", ["限制并发连接", "保持会话亲和性（同一客户端到同一 Pod）", "定义超时时间", "监控会话状态"], [1], "sessionAffinity 控制是否保持会话亲和性。ClientIP 表示来自同一客户端 IP 的请求路由到同一后端 Pod。None 表示不保持（默认负载均衡）。"),
        ("如何暴露 Service 到集群外部？", "多选", ["NodePort", "LoadBalancer", "Ingress", "kubectl port-forward"], [0, 1, 2, 3], "暴露 Service 到外部的方法：NodePort 节点端口、LoadBalancer 云负载均衡器、Ingress HTTP(S) 路由。kubectl port-forward 适合本地临时转发。"),

        # Ingress 相关
        ("Ingress 的主要作用是什么？", "单选", ["提供外部负载均衡", "管理 HTTP(S) 路由规则", "管理 TCP/UDP 流量", "存储静态文件"], [1], "Ingress 管理 HTTP(S) 路由规则，将外部流量路由到 Service。TCP/UDP 使用 Service 的 NodePort 或 LoadBalancer。需要 Ingress Controller 实现。"),
        ("Ingress Controller 是什么？", "单选", ["Kubernetes 控制平面组件", "实现 Ingress 规则的负载均衡器", "调度 Ingress 的控制器", "监控 Ingress 的服务"], [1], "Ingress Controller 是实现 Ingress API 的负载均衡器（如 Nginx、Traefik、HAProxy）。它监听 Ingress 资源变化并配置底层的负载均衡器。"),
        ("Ingress 可以配置哪些内容？", "多选", ["主机名路由（host）", "路径路由（path）", "TLS 证书", "HTTP 超时"], [0, 1, 2, 3], "Ingress 可以配置：host（主机名路由），path（路径路由），TLS（证书配置），annotations（超时、重定向等高级配置）。"),
        ("如何为 Ingress 配置 TLS？", "单选", ["在 Ingress spec 中添加证书", "创建 Secret 并在 Ingress spec 中引用", "在 Pod 中配置", "自动生成"], [1], "Ingress TLS 通过创建 Secret（类型 kubernetes.io/tls），包含证书和私钥，然后在 Ingress spec.tls 中引用 Secret。"),
        ("Ingress 的 pathType 有哪些选项？", "多选", ["Prefix", "Exact", "ImplementationSpecific", "Wildcard"], [0, 1, 2], "Ingress pathType 可以是：Prefix（路径前缀匹配）、Exact（精确匹配）、ImplementationSpecific（由实现决定）。没有 Wildcard 选项。"),

        # NetworkPolicy 相关
        ("NetworkPolicy 的作用是什么？", "单选", ["管理 DNS 配置", "控制 Pod 间网络流量", "负载均衡", "存储管理"], [1], "NetworkPolicy 控制 Pod 间网络流量，定义允许或拒绝的入站和出站规则。实现由网络插件（CNI）提供。"),
        ("NetworkPolicy 的 podSelector 选择什么？", "单选", ["源 Pod", "目标 Pod", "所有 Pod", "Service"], [1], "NetworkPolicy 在策略定义的 podSelector 选择目标 Pod（要应用策略的 Pod）。From/To 部分的 podSelector 选择流量来源/目标。"),
        ("默认情况下，Pod 之间可以互访吗？", "单选", ["可以，除非 NetworkPolicy 阻止", "不可以，需要显式允许", "只能在同一命名空间", "需要设置标签"], [0], "默认情况下，所有 Pod 可以互相访问（取决于网络插件实现）。NetworkPolicy 用于限制流量，显式定义允许或拒绝的规则。"),
        ("NetworkPolicy 可以匹配哪些流量来源？", "多选", ["Pod selector", "Namespace selector", "IP block (CIDR)", "Service selector"], [0, 1, 2], "NetworkPolicy from 可以匹配：podSelector（特定 Pod）、namespaceSelector（命名空间中的 Pod）、ipBlock（IP 段）。Service 不直接匹配（通过 Pod selector）。"),
        ("如何查看 Pod 的 NetworkPolicy？", "单选", ["kubectl get networkpolicy", "kubectl describe pod 查看关联策略", "kubectl netpolicies", "kubectl policy"], [1], "kubectl describe pod 会显示关联的 NetworkPolicy。也可以用 kubectl get networkpolicy -A 查看所有策略。Netpolicies、policy 不是标准命令。"),

        # DNS 相关
        ("Kubernetes DNS 服务的名称是什么？", "单选", ["kube-dns", "coredns", "bind", "unbound"], [1], "Kubernetes 默认的 DNS 服务是 CoreDNS。旧版本使用 kube-dns（已废弃）。它们提供集群内 DNS 解析。"),
        ("Pod 的 DNS 策略有哪些？", "多选", ["Default", "ClusterFirst", "ClusterFirstWithHostNet", "None"], [0, 1, 2, 3], "DNS policy：Default（继承宿主机配置）、ClusterFirst（使用集群 DNS，默认）、ClusterFirstWithHostNet（hostNetwork 下使用集群 DNS）、None（自定义配置）。"),
        ("如何从 Pod 内访问另一个 Pod？", "单选", ["只能使用 IP", "使用 DNS 名称：<pod-name>.<namespace>.svc.cluster.local", "使用 Service 名称", "以上都可以"], [3], "可以使用 Pod IP（不稳定）、Pod DNS（有 headless Service）、Service DNS（常用）。最佳实践是通过 Service 访问。"),
        ("如何在集群内访问 Service？", "单选", ["cluster.local.<namespace>.<service-name>", "<service-name>.<namespace>.svc.cluster.local", "<namespace>.<service-name> 以上两者都可"], [2], "Service DNS 格式：<service-name>.<namespace>.svc.cluster.local（完全限定名），<service-name>.<namespace>（同一命名空间可省略 namespace）。"),
        ("CoreDNS ConfigMap 配置什么？", "多选", ["存根域名（stubDomains）", "上游 DNS（upstream）", "正向解析（hosts）", "反向解析"], [0, 1, 2], "CoreDNS ConfigMap 可以配置：stubDomains（存根域名）、upstream（上游 DNS）、hosts（自定义域名映射、正向解析）。反向解析由 CoreDNS 自动处理。"),

        # 拓扑感知路由
        ("拓扑感知路由的目的是什么？", "单选", ["优化跨区域流量", "优先路由到同一区域的 Pod", "限制网络带宽", "强制加密通信"], [1], "拓扑感知路由（topology-aware hints）使 Service 优先将流量路由到同一区域/拓扑域的 Pod，减少跨区域延迟和成本。"),
        ("拓扑感知路由依赖什么？", "单选", ["Service annotation", "PVC 拓扑约束", "节点标签", "Ingress 配置"], [0], "拓扑感知路由需要 Service 添加 annotation: service.kubernetes.io/topology-aware-hints=auto。EndpointSlice 控制器基于节点拓扑生成 hints。"),
        ("拓扑感知路由适用于哪些 Service？", "单选", ["所有 Service", "LoadBalancer 类型 Service", "externalTrafficPolicy: Local 的 Service", "ClusterIP 类型 Service"], [1], "拓扑感知路由主要用于云上的 LoadBalancer Service，优化跨可用区（AZ）流量。也可以用于其他类型，但最常用于 LoadBalancer。"),
        ("topologyKey 是什么？", "单选", ["节点标签键，表示拓扑域", "Pod 标签键", "Service 标签键", "PVC 标签键"], [0], "topologyKey 是节点标签键，如 kubernetes.io/hostname（主机）或 topology.kubernetes.io/zone（区域），用于定义拓扑域。"),
    ],

    "存储": [
        # Volume 相关
        ("Kubernetes Volume 的生命周期是什么？", "单选", ["与容器绑定", "与 Pod 绑定", "与节点绑定", "永久存在"], [1], "Volume 生命周期与 Pod 绑定。Pod 删除时，临时 Volume 被删除。持久化 Volume（如 hostPath、某些 CSI）保留数据。"),
        ("常见的 Volume 类型有哪些？", "多选", ["emptyDir", "hostPath", "configMap", "secret"], [0, 1, 2, 3], "常见 Volume：emptyDir（临时），hostPath（主机路径），configMap/secret（配置和密钥），persistentVolumeClaim（持久化），nfs、csi 等网络存储。"),
        ("emptyDir Volume 的作用是什么？", "单选", ["持久化数据", "Pod 容器间的临时共享存储", "跨节点共享", "备份恢复"], [1], "emptyDir 在 Pod 创建时创建，Pod 删除时删除，适合容器间临时共享数据，不持久化。"),
        ("hostPath Volume 有什么特点？", "单选", ["自动分配存储", "挂载宿主机目录到 Pod", "跨节点共享", "自动备份"], [1], "hostPath 挂载宿主机目录到 Pod，适合需要访问主机文件系统（日志、监控等），但不推荐生产环境使用（节点绑定）。"),
        ("如何持久化容器数据？", "单选", ["使用 emptyDir", "使用 persistentVolumeClaim", "使用 configMap", "不需要特别配置"], [1], "持久化数据使用 PersistentVolumeClaim (PVC) 申请持久化存储。emptyDir 临时，configMap 存储配置。"),

        # PVC 和 PV 相关
        ("PV 和 PVC 的区别是什么？", "单选", ["没有区别", "PV 是存储资源，PVC 是用户请求", "PV 用户可写，PVC 系统管理", "PV 仅存在集群内"], [1], "PersistentVolume (PV) 是集群的存储资源（管理员创建或动态配置）。PersistentVolumeClaim (PVC) 是用户对存储的请求，绑定到 PV。"),
        ("PVC 的 accessModes 有哪些？", "多选", ["ReadWriteOnce", "ReadOnlyMany", "ReadWriteMany", "ReadWriteOncePod"], [0, 1, 2, 3], "accessModes：ReadWriteOnce（RWO，单读写），ReadOnlyMany（ROX，多只读），ReadWriteMany（RWX，多读写），ReadWriteOncePod（RWOP，单 Pod 读写）。"),
        ("如何删除 PVC？", "单选", ["kubectl delete persistentvolumeclaim <name>", "kubectl remove pvc <name>", "kubectl pvc delete <name>", "直接删除 PV"], [0], "kubectl delete persistentvolumeclaim <name> 或 kubectl delete pvc <name> 删除 PVC。PVC 删除后，PV 的回收策略决定是否删除底层数据。"),
        ("PV 的回收策略有哪些？", "多选", ["Retain", "Recycle", "Delete", "Dynamic"], [0, 2], "PV reclaimPolicy：Retain（保留数据，需手动清理），Delete（删除数据），Recycle（已废弃，现在用 Delete）。Dynamic 是配置方式，不是回收策略。"),
        ("PVC 如何绑定 PV？", "单选", ["手动指定 PV 名称", "通过容量和访问模式自动匹配", "随机匹配", "按创建时间绑定"], [1], "PVC 通过容量、访问模式、存储类等需求自动匹配 PV（称为绑定）。也可以通过 volumeName 字段手动指定 PV。"),

        # StorageClass 相关
        ("StorageClass 的作用是什么？", "单选", ["定义存储配额", "提供动态存储配置", "监控存储使用", "备份存储"], [1], "StorageClass 提供不同类型的动态存储配置，定义如何动态创建 PV（使用哪个 provisioner、参数、回收策略等）。"),
        ("如何使用 StorageClass 配置 PV？", "单选", ["在 PVC spec.storageClassName 指定", "在 Pod spec 中设置", "在 StorageClass 中绑定 PVC", "自动匹配"], [0], "在 PVC 的 spec.storageClassName 指定 StorageClass 名称，集群的动态配置系统会根据该 StorageClass 创建 PV。"),
        ("StorageClass 的 default 注解有什么作用？", "单选", ["强制所有 PVC 使用该类", "未指定 storageClassName 的 PVC 默认使用", "设置回收策略", "定义访问模式"], [1], "标注为 is-default-class=true 的 StorageClass 是默认类，PVC 未指定 storageClassName 时使用该类创建 PV。"),
        ("provisioner 是什么？", "单选", ["存储后端驱动", "动态创建 PV 的组件", "存储管理系统", "备份工具"], [1], "provisioner 是动态创建 PV 的组件（通常由存储驱动提供），如 kubernetes.io/aws-ebs、kubernetes.io/gce-pd、外部 CSI driver 等。"),
        ("Local StorageClass 有什么特点？", "单选", ["提供云存储", "提供节点本地存储", "自动备份", "跨节点共享"], [1], "Local StorageClass 提供节点本地存储（local PV），延迟低、带宽高，但节点绑定，适合本地缓存或有状态应用。需要使用 topologyKey 调度到特定节点。"),

        # 快照相关
        ("VolumeSnapshot 的作用是什么？", "单选", ["监控存储使用", "创建存储卷的快照用于备份", "自动扩展存储", "压缩数据"], [1], "VolumeSnapshot 创建存储卷的快照，用于备份、恢复或复制数据。快照由存储插件（CSI）实现。"),
        ("如何恢复 VolumeSnapshot？", "单选", ["直接使用快照", "创建新 PVC 并引用卷快照数据源", "重启 Pod", "没有直接恢复方法"], [1], "恢复快照需要创建新 PVC，在 dataSource 中引用 VolumeSnapshot。新 PVC 会从快照恢复数据。"),
        ("VolumeSnapshotClass 是什么？", "单选", ["快照的默认类", "用于创建快照的存储类", "快照回收策略", "快照元数据"], [1], "VolumeSnapshotClass 定义如何创建快照（使用哪个 driver、删除策略等），类似 StorageClass 但用于快照。"),
        ("VolumeSnapshot 的状态有哪些？", "多选", ["Creating", "ReadyToUse", "Deleting", "Error"], [0, 1, 2, 3], "快照状态：Creating（创建中）、ReadyToUse（可用于恢复）、Deleting（删除中）、Error（错误）。快照创建后状态变为 ReadyToUse。"),

        # 动态配置
        ("动态配置（Dynamic Provisioning）是什么？", "单选", ["管理员手动创建 PV", "根据 PVC 自动创建 PV", "自动扩展存储", "自动备份"], [1], "动态配置：当用户创建 PVC 时，如果 StorageClass 定义了 provisioner，系统会自动创建匹配的 PV。无需管理员提前准备存储。"),
        ("如何启用动态配置？", "单选", ["在 PVC spec 中设置 dynamic: true", "指定 StorageClass（有 provisioner）", "配置 PV reclaimPolicy", "修改 Pod 参数"], [1], "启用动态配置需要：PVC 指定 StorageClass（或使用默认类），StorageClass 有 provisioner。动态配置无需设置 dynamic 字段。"),
        ("静态配置和动态配置的区别是什么？", "单选", ["没有区别", "静态手动创建 PV，动态自动创建 PV", "静态自动，动态手动", "静态快，动态慢"], [1], "静态：管理员提前创建 PV，PVC 匹配绑定。动态：PVC 创建时，StorageClass 的 provisioner 自动创建 PV。动态更灵活。"),
        ("如何禁用 PVC 动态配置？", "单选", ["删除 StorageClass", "PVC 设置 storageClassName 为空", "不使用 provisioner", "无法禁用"], [1], "PVC 的 storageClassName 设置为空字符串，则不使用动态配置，只能匹配静态 PV（不绑定 StorageClass）。"),
        ("动态配置的好处是什么？", "多选", ["自动化存储管理", "用户无需了解底层存储", "避免存储浪费", "性能更好"], [0, 1, 2], "动态配置好处：自动创建和管理 PV，用户只需声明需求，管理员无需提前准备，按需分配避免浪费。性能取决于存储类型，与动态配置无关。"),
    ],

    "配置": [
        # ConfigMap 相关
        ("ConfigMap 的主要作用是什么？", "单选", ["容器镜像管理", "存储非敏感配置数据", "存储密码和密钥", "网络通信"], [1], "ConfigMap 存储非敏感配置数据（如配置文件、命令行参数、环境变量等），与 Pod 分离，便于管理。敏感数据使用 Secret。"),
        ("如何创建 ConfigMap？", "多选", ["kubectl create configmap <name> --from-file=file.yaml", "kubectl create configmap <name> --from-literal=key=value", "kubectl apply -f configmap.yaml", "kubectl config create <name>"], [0, 1, 2], "创建 ConfigMap 方式：命令行（--from-file、--from-literal）、YAML 文件（kubectl apply）。kubectl config 管理 kubeconfig。"),
        ("ConfigMap 如何挂载到 Pod？", "多选", ["作为环境变量", "作为 Volume 挂载", "作为命令行参数", "直接访问 ConfigMap API"], [0, 1], "ConfigMap 可以：作为环境变量注入容器（valueFrom.configMapKeyRef），作为 Volume 挂载（configMap Volume）。命令行参数可以通过环境变量间接设置。"),
        ("ConfigMap 有大小限制吗？", "单选", ["没有限制", "1MB", "1MiB", "10MB"], [2], "ConfigMap 最大 1MiB。超过限制会导致创建失败。大型配置应拆分多个 ConfigMap 或使用其他方法（如 Volume）。"),
        ("ConfigMap 更新后 Pod 如何生效？", "单选", ["需要重启 Pod", "会自动更新", "需要删除并重建 Pod", "取决于挂载方式"], [3], "ConfigMap 更新后：环境变量注入的不生效（需重建 Pod），Volume 挂载的会自动更新（ConfigMap 有更新机制），使用 subPath 的不会自动更新。"),

        # Secret 相关
        ("Secret 与 ConfigMap 的主要区别是什么？", "单选", ["没有区别", "Secret 存储敏感数据，ConfigMap 存储非敏感数据", "Secret 更大", "ConfigMap 自动加密"], [1], "Secret 存储敏感数据（密码、密钥、证书等），值 base64 编码（非加密）。ConfigMap 存储非敏感数据。Secret 有额外的访问控制。"),
        ("Secret 的值如何存储？", "单选", ["明文存储", "base64 编码存储", "自动加密存储", "压缩存储"], [1], "Secret 的值在 etcd 中以 base64 编码存储。不是加密（除非启用 etcd 加密），也不是明文。使用 base64 是为了兼容性和易操作性。"),
        ("Secret 类型有哪些？", "多选", ["Opaque", "kubernetes.io/service-account-token", "kubernetes.io/dockerconfigjson", "kubernetes.io/tls"], [0, 1, 2, 3], "Secret 类型：Opaque（通用），ServiceAccountToken（服务账户令牌），Dockerconfigjson（Docker 镜像仓库凭证），TLS（证书），BasicAuth 等。"),
        ("如何创建 Docker 镜像仓库的 Secret？", "单选", ["kubectl create secret docker-registry", "kubectl create secret generic", "kubectl create secret image", "kubectl create secret config"], [0], "kubectl create secret docker-registry <name> --docker-server=... --docker-username=... --docker-password=... 创建镜像仓库认证 Secret。"),
        ("Secret 有大小限制吗？", "单选", ["没有限制", "1MB", "1MiB", "更大"], [2], "Secret 最大 1MiB，与 ConfigMap 相同。大型证书等可以拆分多个 Secret 或使用其他存储方法。"),

        # 探针相关
        ("Pod 的探针有哪些？", "多选", ["livenessProbe（存活探针）", "readinessProbe（就绪探针）", "startupProbe（启动探针）", "failureProbe"], [0, 1, 2], "Pod 有三种探针：liveness（存活，失败重启），readiness（就绪，失败移出 Service），startup（启动，失败后 liveness 不执行）。没有 failureProbe。"),
        ("存活探针（livenessProbe）的作用是什么？", "单选", ["容器启动时检查", "判断容器是否存活，失败时重启容器", "判断容器是否就绪，失败时移出 Service", "监控资源使用"], [1], "存活探针判断容器是否健康，失败时 kubelet 重启容器（根据 restartPolicy）。适合检测死锁、无限循环等问题。"),
        ("就绪探针（readinessProbe）的作用是什么？", "单选", ["重启容器", "判断容器是否准备好服务，未就绪时移出 Service", "启动检查", "资源监控"], [1], "就绪探针判断容器是否准备接收流量，未就绪时 Service 将其从端点列表移除。适合应用启动慢、需要初始化的场景。"),
        ("启动探针（startupProbe）的作用是什么？", "单选", ["定期检查容器", "防止启动慢的容器被存活探针误杀", "就绪检查", "扩展容器"], [1], "启动探针用于启动特别慢的容器，在启动成功前失效存活探针，避免启动慢导致重启。成功后存活和就绪探针开始工作。"),
        ("探针的检测方式有哪些？", "多选", ["HTTP GET", "TCP Socket", "Exec 命令", "gRPC"], [0, 1, 2], "探针检测方式：HTTP GET（HTTP GET 请求检测），TCP Socket（TCP 连接检测），Exec（执行命令检测）。gRPC 是某些自定义实现，不原生支持。"),

        # 资源管理
        ("容器的资源请求（requests）表示什么？", "单选", ["资源的上限", "保证的资源下限", "当前使用量", "平均使用量"], [1], "requests 是容器保证获得的资源下限，用于调度决策（选择有足够资源的节点）。limits 是上限，禁止超过。"),
        ("容器的资源限制（limits）表示什么？", "单选", ["保证的资源", "资源使用上限", "平均值", "建议值"], [1], "limits 是容器资源使用的上限。CPU 限制是配额，超限会被限流。内存超限会被 OOM Kill。"),
        ("如何设置容器 CPU 请求和限制？", "单选", ["在容器 spec 中设置 resources.requests.cpu 和 resources.limits.cpu", "在 Pod 级别设置", "在 Node 级别设置", "自动设置"], [0], "在 spec.containers [].resources 中设置 requests 和 limits，包括 cpu、memory（ephemeral-storage 可选）。单位：CPU 的 cores、m，memory 的 Mi、Gi 等。"),
        ("Kubernetes 如何处理超限 CPU？", "单选", ["杀死容器", "限制 CPU 时间片分配", "重启 Pod", "不处理"], [1], "CPU 超限不会杀死容器，而是限制时间片分配（CPU 限流），使用量不超过 limits。内存超限会被 OOM Kill。"),
        ("ResourceQuota 的作用是什么？", "单选", ["限制单个 Pod 的资源", "限制命名空间的总资源使用和对象数量", "监控资源使用", "自动扩展资源"], [1], "ResourceQuota 限制命名空间的总资源（requests.cpu、requests.memory、persistentvolumeclaims 等）和对象数量（pods、services 等）。"),
        ("LimitRange 的作用是什么？", "单选", ["限制命名空间总量", "限制资源默认值、最小/最大值", "监控所有 Pod", "自动配置 ResourceQuota"], [1], "LimitRange 限制资源（CPU、内存）的默认值、最小/最大值，以及限制 Pod/容器数量。防止资源滥用，设置合理默认值。"),
        ("如何查看 Pod 的资源使用？", "单选", ["kubectl describe pod", "kubectl top pod", "kubectl ps", "kubectl resources pod"], [1], "kubectl top pod 显示 Pod 当前 CPU/内存使用（需要 Metrics Server）。kubectl describe 也显示资源配置但不包含实时使用。"),
        ("什么是 ephemeral-storage？", "单选", ["持久存储", "容器可写层的临时存储（包括 emptyDir", "网络存储", "外部存储"], [1], "ephemeral-storage 是容器可写层的临时存储（容器文件系统），包括 emptyDir、容器镜像层。超限可能被驱逐。"),
    ],

    "调度": [
        # 调度器相关
        ("Kubernetes 调度器的作用是什么？", "单选", ["运行容器", "管理存储", "将 Pod 调度到合适的节点", "监控集群状态"], [2], "Scheduler 观察未调度的 Pod，根据资源需求、策略、约束选择合适的节点，将 Pod 分配给该节点的 kubelet。"),
        ("调度器的调度流程是什么？", "单选", ["随机选择节点", "过滤 -> 打分 -> 选择", "打分 -> 过滤", "只过滤不选择"], [1], "调度：1）过滤（预选，Predicate）：排除不满足条件的节点。2）打分（优选，Score）：给节点打分。3）选择最高分节点。"),
        ("什么是自定义调度器？", "单选", ["系统自带的调度器", "用户实现的调度逻辑", "随机调度", "无调度"], [1], "自定义调度器是实现调度接口的用户程序，可以替换默认调度器或使用多个调度器（通过 Pod 的 schedulerName 指定）。适合特殊调度需求。"),
        ("如何查看 Pod 调度到哪个节点？", "单选", ["kubectl pod info", "kubectl describe pod 查看 Node", "kubectl get pods -o wide", "以上都可以"], [3], "都可以查看：kubectl get pods -o wide 显示 NODE 列，kubectl describe pod 的 Node 字段。"),
        ("为什么 Pod 一直 Pending？", "多选", ["资源不足", "调度器未运行", "调度失败（亲和性、污点不匹配）", "镜像拉取失败"], [0, 1, 2], "Pod Pending 可能原因：资源不足（CPU/内存）、调度失败（亲和性、污点容忍度）、调度器未运行（查看 Scheduler Pod）、PVC 未绑定等。镜像拉取失败是 ImagePullBackOff。"),

        # 亲和性和反亲和性
        ("节点亲和性（nodeAffinity）有哪几种类型？", "多选", ["requiredDuringSchedulingIgnoredDuringExecution", "preferredDuringSchedulingIgnoredDuringExecution", "requiredDuringSchedulingRequiredDuringExecution", "none"], [0, 1], "nodeAffinity 类型：required（必须满足）：requiredDuringSchedulingIgnoredDuringExecution；preferred（尽量满足）：preferredDuringSchedulingIgnoredDuringExecution。"),
        ("Pod 亲和性（podAffinity）有什么作用？", "单选", ["控制 Pod 调度到特定节点类型", "控制 Pod 调度到与某些 Pod 相同或不同的节点", "限制 Pod 数量", "控制 Pod 网络"], [1], "Pod 亲和性控制 Pod 与其他 Pod 的拓扑关系：与特定 Pod 共同节点（podAffinity）或避免（podAntiAffinity）。适合部署协同组件或高可用分散。"),
        ("如何设置 Pod 必须在特定节点上？", "单选", ["使用 nodeAffinity", "使用 nodeName", "使用 nodeSelector", "以上都可以"], [3], "都可以指定节点：nodeAffinity（灵活选择），nodeName（直接指定），nodeSelector（简单标签匹配）。 nodeName 最直接但僵硬。"),
        ("Pod 反亲和性（podAntiAffinity）用于什么？", "单选", ["让 Pod 聚集到同一节点", "让 Pod 分散到不同节点", "控制 Pod 启动顺序", "限制 Pod 资源"], [1], "Pod 反亲和性让 Pod 分散到不同拓扑域（如节点、可用区），提高高可用。适合无状态应用避免单点。"),
        ("节点选择器和亲和性的区别？", "单选", ["没有区别", "nodeSelector 简单标签匹配，nodeAffinity 更灵活", "nodeAffinity 刚性", "亲和性只能用于 Pod"], [1], "nodeSelector 是简单相等匹配标签。nodeAffinity 支持更复杂的规则：集合匹配、权重、软性要求。亲和性也支持 Pod 关系而节点选择器不支持。"),

        # 污点和容忍度
        ("节点污点（Taint）的作用是什么？", "单选", ["标记节点资源不足", "标记节点不调度特定 Pod", "修复节点问题", "监控节点"], [1], "Taint 标记节点，只有有对应 Toleration 的 Pod 才能调度上去。用于专用节点、控制平面特殊用途（如 master 节点）。"),
        ("污点包括哪些动作？", "多选", ["NoSchedule", "NoExecute", "PreferNoSchedule", "ForceSchedule"], [0, 1, 2], "Taint effect：NoSchedule（不调度），NoExecute（不调度并驱逐不匹配的已有 Pod），PreferNoSchedule（尽量避免，非硬性）。没有 ForceSchedule。"),
        ("Pod 如何容忍污点？", "单选", ["自动容忍", "在 Pod spec 设置 tolerations", "修改节点", "无法容忍"], [1], "Pod 在 spec.tolerations 中设置容忍度。每个 tolerations 匹配一个污点（key、operator、value、effect 匹配）。tolerationSeconds（NoExecute 时多久驱逐）。"),
        ("NoExecute 污点有什么特殊作用？", "单选", ["仅影响调度", "驱逐已有不匹配的 Pod", "自动修复节点", "加速调度"], [1], "NoExecute 不仅阻止新 Pod 调度，还会驱逐已经运行但没匹配 tolerations 的 Pod。可设置 tolerationSeconds 延迟驱逐。非常适合优雅迁移。"),
        ("如何给节点添加污点？", "单选", ["kubectl taint node <name> key=value:effect", "kubectl label node <name>", "kubectl annotate node <name>", "修改节点配置文件"], [0], "kubectl taint node <name> key=value:effect 添加污点。例如添加 master 污点：kubectl taint nodes node-role.kubernetes.io/control-plane=:NoSchedule。"),
        ("移除污点的命令是什么？", "单选", ["kubectl taint node <name> key:effect-", "kubectl untaint node <name>", "kubectl remove taint", "手动编辑"], [0], "kubectl taint node <name> key:effect- 移除污点。例如移除：kubectl taint node node1 key:NoExecute-。"),
        ("Pod 污点如何应用？", "单选", ["给 Pod 加污点", "给其他节点加污点", "Pod 本身没有污点，给节点加污点", "通过 ConfigMap 设置"], [2], "污点是节点属性，给节点添加。Pod 通过 tolerations 匹配。Pod 本身不设置污点（有污点的是节点）。"),

        # 优先级和抢占
        ("Pod 优先级（PriorityClass）的作用是什么？", "单选", ["限制 Pod 启动顺序", "定义 Pod 优先级用于抢占决策", "监控 Pod 状态", "限制 Pod 数量"], [1], "PriorityClass 定义优先级值，分配给 Pod 后，高优先级的 Pod 在资源不足时可以抢占低优先级 Pod。"),
        ("如何设置 Pod 优先级？", "单选", ["在 metadata.priorityClass 中指定", "在 spec.priorityClassName 中指定", "自动分配", "通过 annotation 设置"], [1], "Pod 在 spec.priorityClassName 中指定 PriorityClass 名称。PriorityClass 的 value 决定优先级（值越大越高）。默认是 default。"),
        ("什么是抢占（Preemption）？", "单选", ["限制 Pod 数量", "高优先级 Pod 赶走低优先级 Pod（驱逐）", "控制 Pod 启动", "保护 Pod"], [1], "抢占是：高优先级 Pod 无法调度时，系统驱逐低优先级 Pod 获得资源。被驱逐 Pod 可能调度到其他节点。需要 PriorityClass 和 enable=true。"),
        ("系统保护的是哪些 Pod？", "多选", ["kube-system 命名空间的 Pod", "DaemonSet Pod", "低优先级 Pod", "没有优先级的 Pod"], [0, 1], "系统保护DaemonSet的Pod和 kube-system 命名空间的 Pod不被抢占（保护关键系统组件）。也可以通过 annotation 保护。"),
        ("如何禁用抢占？", "单选", ["删除 PriorityClass", "在 PriorityClass 设置 preemptionPolicy: Never", "设置 annotation", "无法禁用"], [1], "PriorityClass 设置 preemptionPolicy: Never 禁用抢占。默认是 PreemptLowerPriority（可以抢占）。设置为 Never 后，高优先级不会抢占低优先级。"),
    ],

    "集群管理": [
        # 节点管理
        ("如何标记节点为不可调度？", "单选", ["kubectl cordon <node>", "kubectl drain <node>", "kubectl uncordon <node>", "kubectl unschedule <node>"], [0], "kubectl cordon <node> 标记节点 Unschedulable，不调度新 Pod，现有 Pod 不受影响。drain 会驱逐所有 Pod。"),
        ("如何驱逐节点上的所有 Pod？", "单选", ["kubectl cordon <node>", "kubectl drain <node>", "kubectl delete pods --node=<node>", "kubectl evacuate <node>"], [1], "kubectl drain <node> 安全驱逐所有 Pod（包括 DaemonSet 管理的忽略），用于维护前清空节点。内部包含 cordon + 删除 Pod。"),
        ("如何恢复节点调度？", "单选", ["kubectl cordon <node>", "kubectl uncordon <node>", "kubectl drain --undo <node>", "kubectl schedule <node>"], [1], "kubectl uncordon <node> 解除 Unschedulable 污点，恢复正常调度。是 cordon 的逆操作。"),
        ("节点 NotReady 的可能原因？", "多选", ["kubelet 未运行", "网络问题", "节点资源耗尽", "节点被污点"], [0, 1, 2], "节点 NotReady 可能原因：kubelet 未运行或挂掉（检查节点进程）、网络问题（API 通信中断）、容器运行时问题、节点资源耗尽（磁盘等）。污点不影响节点状态。"),
        ("如何查看节点详细信息？", "单选", ["kubectl node info", "kubectl describe node <name>", "kubectl show node", "kubectl get node -o yaml"], [2], "以上都可以查看节点信息，其中 kubectl describe node <name> 最详细（包括条件、资源、资源分配、事件等）。也可以用 get -o yaml 查看配置。"),
        ("节点 Condition 包含哪些？", "多选", ["Ready", "MemoryPressure", "DiskPressure", "NetworkUnavailable"], [0, 1, 2, 3], "节点状态条件：Ready（可用），Memory/Disk/PID Pressure（资源压力），Vulnerable（内核问题），NetworkUnavailable（网络未就绪等）。"),
        ("如何安全重启节点？", "单选", ["直接重启", "kubectl drain 后再重启", "kubectl cordon 后再重启", "不需要操作"], [1], "安全重启节点：kubectl drain 驱逐所有 Pod，然后重启节点，重启后 kubectl uncordon。drain 处理不中断正在运行的任务。cordon 不驱逐 Pod 不安全。"),
        ("如何控制 Pod 调度到特定节点？", "多选", ["nodeSelector", "nodeAffinity", "nodeName", "toleration"], [0, 1, 2], "控制调度：nodeSelector（标签），nodeAffinity（亲和性），nodeName（直接指定）。toleration 是容忍污点，不单独控制调度。"),
        ("如何给节点添加标签？", "单选", ["kubectl label node <name> key=value", "kubectl annotate node <name>", "kubectl tag node <name>", "nodeconfig label"], [0], "kubectl label node <name> key=value 给节点添加标签。标签用于亲和性、调度选择等。annotate 添加注解。"),

        # 集群升级
        ("kubeadm 如何升级控制平面？", "单选", ["kubeadm upgrade apply", "kubeadm upgrade control-plane", "kubeadm upgrade master", "直接更新镜像"], [0], "kubeadm 升级：先升级 kubeadm 工具，然后在 control-plane 执行 kubeadm upgrade apply <version>，再升级工作节点。"),
        ("滚动升级集群的步骤是什么？", "单选", ["直接升级所有节点", "逐个节点升级，先控制平面再工作节点", "先工作节点再控制平面", "随机升级"], [1], "滚动升级：先升级控制平面节点（一个一个，保持 API 可用），再逐个升级工作节点。确保每个节点升级完成后再继续下一个。"),
        ("如何检查集群版本？", "单选", ["kubectl version", "kubectl cluster-version", "kubeadm version", "kubectl info"], [0], "kubectl version 显示客户端和服务器版本。kubeadm version 显示 kubeadm 版本。"),
        ("升级失败如何回滚？", "单选", ["kubeadm upgrade rollback", "kubeadm upgrade --undo", "没有自动回滚，需要手动恢复", "kubectl rollback cluster"], [2], "kubeadm 没有自动回滚。需要在升级前备份 etcd（kubeadm etcd），失败后通过备份恢复。建议先在测试环境验证。"),

        # 监控
        ("Metrics Server 的作用是什么？", "单选", ["存储集群状态", "提供 CPU/内存使用指标", "处理 API 请求", "调度 Pod"], [1], "Metrics Server 从 kubelet 收集 CPU/内存指标，提供 HPA、kubectl top 使用。不存储历史数据。"),
        ("如何查看节点资源使用？", "单选", ["kubectl top node", "kubectl get node resources", "kubectl monitor node", "kubectl node stats"], [0], "kubectl top node 显示节点 CPU/内存使用率（需要 Metrics Server）。"),
        ("集群组件监控指标有哪些？", "多选", ["CPU 使用率", "内存使用率", "QPS（每秒请求数）", "延迟"], [0, 1, 2, 3], "监控指标：CPU、内存、API Server QPS、延迟、etcd 延迟、kubelet 延迟、调度延迟、对象数量等。Prometheus 常用于抓取和分析。"),
        ("Prometheus 如何集成 Kubernetes？", "单选", ["直接访问 API Server", "使用 ServiceMonitor", "无集成", "通过 kubectl 监控"], [1], "Prometheus 通过 ServiceMonitor（CRD）或 annotations 发现和抓取 Kubernetes Pod 的指标。Prometheus Operator 管理这些资源。"),
        ("Grafana 与 Kubernetes 集成用于什么？", "单选", ["集群部署", "可视化监控仪表板", "备份恢复", "日志管理"], [1], "Grafana 可视化 Prometheus 数据，为 Kubernetes 提供仪表板（Pod、Node、集群指标等）。通过数据源连接 Prometheus。"),

        # 日志管理
        ("容器日志存储在哪里？", "单选", ["集中存储", "容器可写层（节点磁盘）", "etcd", "内存"], [1], "容器日志存储在容器可写层（节点磁盘）。容器重启不会清空，Pod 重建后清空。永久存储需要日志系统（如 ELK、FLuentd）。"),
        ("如何查看 Pod 日志？", "单选", ["kubectl logs", "docker logs", "进入节点查看目录", "以上都可以"], [3], "都可以：kubectl logs <pod> 显示日志，docker logs <container>（在节点上），也可进入节点查看 /var/log/containers/ 目录。kubectl 日志最常用。"),
        ("Fluentd 在 Kubernetes 中如何收集日志？", "单选", ["作为 DaemonSet 运行在每个节点", "运行在控制平面", "运行在 Pod 内", "外部集中"], [0], "Fluentd 作为 DaemonSet 每节点运行，监听容器日志文件，转发到 Elasticsearch、日志服务等。"),
        ("如何收集应用日志？", "多选", ["kubectl logs 收集", "日志聚合系统（Fluentd、Filebeat）", "应用输出日志到标准输出", "本地文件需配置共享卷"], [0, 1, 2], "日志收集：应用输出到 stdout（默认），kubectl logs 查看；Fluentd（DaemonSet）聚合；应用写文件需要 hostPath 或共享卷配置。"),

        # 备份恢复
        ("etcd 备份有什么作用？", "单选", ["备份容器数据", "备份集群状态（对象、配置）", "备份镜像", "备份网络配置"], [1], "etcd 存储集群所有状态数据。备份 etcd 可以在集群故障时恢复。容器数据需要 PVC 备份（如 Velero）。"),
        ("如何备份 etcd？", "单选", ["kubeadm etcd backup", "etcdctl snapshot save", "kubectl backup cluster", "复制 etcd 目录"], [1], "etcdctl snapshot save 备份 etcd 快照。kubeadm 工具也提供 kubeadm etcd。备份需要 etcd 的证书和地址。"),
        ("Velero 的作用是什么？", "单选", ["监控集群", "备份和恢复 Kubernetes 资源和持久卷", "集群管理", "日志收集"], [1], "Velero 备份和恢复 Kubernetes 资源（包括 PV），支持定时备份、迁移、灾难恢复。也可以使用 velero plugin 备份到云存储。"),
        ("如何备份 PVC 数据？", "单选", ["快照", "Velero", "复制 PV 数据", "以上都可以"], [3], "都可以：VolumeSnapshot（快照），Velero（支持快照和备份工具），数据复制（rsync、数据库导出）。具体取决于存储支持（如 CSI 支持快照）。"),
        ("备份的最佳实践是什么？", "多选", ["定期备份 etcd", "备份 PVC 数据（快照/Velero）", "测试恢复流程", "备份配置文件"], [0, 1, 2, 3], "备份最佳实践：定期备份 etcd（集群状态），备份 PVC 数据（快照、工具），测试恢复（确保备份可用），备份配置文件（YAML 清单、证书）。"),

        # 集群运维
        ("如何扩容节点？", "多选", ["kubeadm join 加入新节点", "云上创建新节点", "修改节点配置", "不需要操作"], [0, 1], "扩容节点：在云环境创建新节点后加入集群（kubeadm join），或云平台自动扩容集群（如 EKS、GKE 托管服务）。修改节点配置不扩容。"),
        ("如何查看事件（Events）？", "单选", ["kubectl events", "kubectl get events", "kubectl describe resource 查看事件部分", "kubectl logs"], [1], "kubectl get events 列出所有事件。也可在 kubectl describe <resource> 的 Events 部分查看特定资源的事件。事件包含错误、警告、状态变化。"),
        ("如何排障 Pending 的 Pod？", "多选", ["kubectl describe pod 查看事件", "检查是否缺少 PVC", "检查调度器状态", "检查节点资源"], [0, 1, 2], "排障 Pending：kubectl describe pod 查看事件（调度失败、镜像拉取失败等），检查 PVC 是否绑定，检查调度器运行状态，检查节点资源是否足够。"),
        ("资源使用高怎么处理？", "多选", ["HPA 自动扩展", "手动扩展 Deployment/StatefulSet", "增加节点", "限制无关应用"], [0, 1, 2], "处理高资源使用：配置 HPA 自动扩展（针对应用），手动扩展 replicas（kubectl scale），扩容集群（增加节点），限制或停止非关键应用。"),
    ],
}

# 生成题目
for module, items in module_questions.items():
    # 分配难度
    difficulty = ["基础", "进阶", "高级"]
    for i, (question, qtype, options, answer, explanation) in enumerate(items):
        diff = "基础" if i % 3 == 0 else ("进阶" if i % 3 == 1 else "高级")
        add_question(module, question, qtype, options, answer, explanation, diff)

# 读取现有题目（来自概述、集群架构、容器模块）
existing_questions_content = ""
try:
    with open("./exam/questions.js", "r", encoding="utf-8") as f:
        existing_questions_content = f.read()
except FileNotFoundError:
    pass

# 写入输出
output = "// Kubernetes 概念测评题目库\n"
output += "// 生成日期: 2026-04-13\n"
output += f"// 题目总数: {len(questions)}\n"

single = sum(1 for q in questions if q['type'] == '单选')
multi = sum(1 for q in questions if q['type'] == '多选')
s_pct = int(single / len(questions) * 100) if questions else 0
m_pct = int(multi / len(questions) * 100) if questions else 0

output += f"// 单选题: {single}道 ({s_pct}%)\n"
output += f"// 多选题: {multi}道 ({m_pct}%)\n\n"

output += "const questions = [\n"

for q in questions:
    output += "    {\n"
    output += f'        module: "{q["module"]}",\n'
    output += f'        question: "{q["question"]}",\n'
    output += f'        type: "{q["type"]}",\n'
    output += "        options: [\n"
    for opt in q["options"]:
        output += f'            "{opt}",\n'
    output += "        ],\n"
    output += f'        answer: {q["answer"]},\n'
    output += f'        difficulty: "{q["difficulty"]}",\n'
    output += f'        explanation: "{q["explanation"]}"\n'
    output += "    },\n"

output += "];\n\n"
output += "// 提取唯一模块列表\n"
output += "const modules = [...new Set(questions.map(q => q.module))];\n"

with open("./exam/questions_new.js", "w", encoding="utf-8") as f:
    f.write(output)

print(f"生成 {len(questions)} 道题目!")
print("单选题:", single)
print("多选题:", multi)
print("目标位置: ./exam/questions_new.js")
