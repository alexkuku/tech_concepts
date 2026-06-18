#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""补充 Kubernetes 题目库"""

import json

# 题目定义
new_questions = []

def add_question(module, question, qtype, options, answer, explanation, difficulty="基础"):
    new_questions.append({
        "module": module,
        "question": question,
        "type": qtype,
        "options": options,
        "answer": answer,
        "difficulty": difficulty,
        "explanation": explanation
    })

# 为每个模块补充题目
module_supplement = {
    "工作负载": [
        # Pod 补充
        ("Pod 中多个容器如何通信？", "单选", ["通过网络 localhost", "通过共享内存", "通过共享文件", "无法互相通信"], [0], "Pod 中多个容器共享网络命名空间，可以通过 localhost 互相通信。共享内存需要特殊配置，共享文件通过 Volume 实现。"),
        ("Pod 的 DNS 配置是怎样的？", "单选", ["继承宿主机配置", "使用集群 DNS（CoreDNS）", "无 DNS 可用", "需要手动配置"], [1], "Pod 默认使用集群 DNS（CoreDNS），解析 Service 和 Pod DNS 名称。可以 Pod 级别自定义 DNS policy 和配置。"),
        ("Pod 的 initContainer 有什么作用？", "多选", ["在主容器启动前运行", "可以挂载共享 Volume", "用于初始化工作", "并行运行"], [0, 1, 2], "initContainer 在主容器前运行，通常用于初始化（下载文件、等待依赖）、配置共享 Volume。串行运行（前一个完成后才运行下一个）。"),
        ("Pod 的 terminationGracePeriodSeconds 是什么？", "单选", ["启动超时", "优雅关闭等待时间", "运行超时", "心跳间隔"], [1], "terminationGracePeriodSeconds 是优雅关闭等待时间，默认 30 秒。Kubernetes 发送 SIGTERM 后等待该时间，超时发送 SIGKILL。可调大给应用清理资源的时间。"),
        ("Pod 的 hostNetwork 有什么作用？", "单选", ["共享主机网络栈", "限制网络带宽", "隔离网络", "网络加速"], [0], "hostNetwork: true 让 Pod 使用宿主机网络栈，Pod 看到宿主机网络接口。适合需要直接访问主机网络的场景，但会失去网络隔离。"),

        # Deployment 补充
        ("Deployment 的 replicas 默认值是多少？", "单选", ["0", "1", "2", "3"], [1], "Deployment 的 replicas 默认为 1。0 表示不运行副本。"),
        ("Deployment 如何实现零停机更新？", "单选", ["瞬间更新", "滚动更新，逐步替换", "暂停所有 Pod 再更新", "复制一份再切换"], [1], "Deployment 使用滚动更新，逐步创建新 Pod 删除旧 Pod，保证始终有可用副本。可通过 maxUnavailable 控制。"),
        ("Deployment 的滚动更新暂停和恢复命令是？", "单选", ["kubectl pause/resume", "kubectl rollout pause/resume", "kubectl deploy pause/resume", "kubectl update pause/resume"], [1], "kubectl rollout pause deployment <name> 暂停更新，kubectl rollout resume <name> 恢复。用于渐进式更新或故障排查。"),
        ("Deployment 的 revision 可以查看吗？", "单选", ["可以（kubectl rollout history）", "不可以", "需要 etcd 查询", "只能在事件中查看"], [0], "kubectl rollout history deployment <name> 查看历史版本。也可指定版本查看详情。version 由 deployment revision history limit 控制。"),
        ("Deployment 更新失败怎么办？", "多选", ["kubectl rollout status 查看状态", "kubectl rollout undo 回滚", "kubectl describe deployment 查看事件", "增加 replicas"], [0, 1, 2], "Deployment 更新失败：kubectl rollout status 查看状态，kubectl describe 查看事件（如镜像拉取失败），kubectl rollout undo 回滚。增加 replicas 不修复失败。"),

        # StatefulSet 补充
        ("StatefulSet 的 Pod 网络标识是什么？", "单选", ["Pod 名称", "<statefulset-name>-<index>", "随机 ID", "Service 名称"], [1], "StatefulSet Pod 的 DNS 名称：<pod-name>.<service>，而 Pod 名称是 <statefulset-name>-<index>。通过 headless Service 实现稳定的网络标识。"),
        ("StatefulSet 的扩展和缩容顺序是怎样的？", "单选", ["扩展从 N 开始，缩容删除最后 N-1", "都是对齐更新", "随机", "没有顺序"], [0], "StatefulSet 扩展从当前 N 开始顺序添加 Pod（N, N+1...）。缩容从 N-1 开始逆序删除。保证稳定性和顺序性。"),
        ("StatefulSet 如何升级？", "单选", ["自动滚动更新（RollingUpdate）", "OnDelete 删除时更新", "两种策略都可用", "不能升级"], [2], "StatefulSet 支持 RollingUpdate（默认，自动滚动）和 OnDelete（删除时更新）两种更新策略（updatePolicy 字段）。"),
        ("StatefulSet 的 volumeClaimTemplates 是什么？", "单选", ["Volume 模板", "PVC 模板，为每个 Pod 创建独立 PVC", "ConfigMap 模板", "Secret 模板"], [1], "volumeClaimTemplates 定义每个 StatefulSet Pod 的 PVC，确保每个 Pod 共享存储（或有独立 PVC）。重建时保持绑定。"),
        ("StatefulSet 的删除策略是什么？", "单选", ["只删除 StatefulSet 对象", "级联删除所有 Pod", "级联删除 PVC", "以上三者"], [3], "删除 StatefulSet 级联删除：StatefulSet -> Pod（按逆序）-> 默认保留 PVC（需要手动删除）。--cascade=false 仅删除 StatefulSet。"),

        # DaemonSet 补充
        ("DaemonSet 的 Pod 如何更新？", "单选", ["同时更新", "逐节点更新", "手动删除重启", "不可更新"], [1], "DaemonSet 使用 RollingUpdate 默认逐节点更新（maxUnavailable 控制并发数）。OnDelete 策略下删除时更新。"),
        ("DaemonSet 的 maxUnavailable 默认值是多少？", "单选", ["0", "1", "10%", "没有限制"], [1], "DaemonSet RollingUpdate 的 maxUnavailable 默认为 1，表示同时最多有 1 个不可用 Pod。可以设置为 0 保证无中断，但更新较慢。"),
        ("如何限制 DaemonSet 的调度范围？", "多选", ["nodeSelector", "nodeAffinity", "tolerations", "priorityClassName"], [0, 1, 2], "可以：nodeSelector（节点标签），nodeAffinity（节点亲和性），tolerations（容忍污点）。priorityClassName 不限制调度范围。"),
        ("DaemonSet 的 Pod 会跟随节点迁移吗？", "单选", ["会自动迁移", "不会，需要手动重建", "视情况而定", "会延迟迁移"], [1], "DaemonSet Pod 与节点绑定，节点不可时 Pod 不会被重新调度（除非删除重建）。StatefulSet 有稳定标识，DaemonSet 没有。"),
        ("DaemonSet 在控制平面节点上运行吗？", "单选", ["可以，如果配置了 toleration", "不可以", "默认运行", "需要特殊配置"], [0], "DaemonSet 默认不在有污点（如 NoSchedule）的节点（如 master）运行。如果给 DaemonSet 加上对应 toleration，可以在 master 节点运行。"),

        # Job 和 CronJob 补充
        ("Job 的 backoffLimit 是什么？", "单选", ["重试次数", "超时时间", "并行数", "完成数"], [0], "backoffLimit 限制 Job 失败后重试次数（默认 6）。达到后 Job 标记为失败。设为 0 不重试。"),
        ("Job 的 activeDeadlineSeconds 是什么？", "单选", ["重试期限", "Job 整体超时", "每个 Pod 超时", "启动超时"], [1], "activeDeadlineSeconds 是 Job 整体超时，超时后所有 Pod 被终止，Job 标记失败。适合防止长时间挂起的任务。"),
        ("CronJob 的 startingDeadlineSeconds 是什么？", "单选", ["启动超时", "错过调度容忍时间", "执行期限", "启动间隔"], [1], "startingDeadlineSeconds 是错过调度的容忍时间。例如设为 100 秒，错过调度时 100 秒内仍会执行，超过则跳过。"),
        ("CronJob 的 concurrencyPolicy 有哪些？", "多选", ["Allow", "Forbid", "Replace", "Cancel"], [0, 1, 2], "concurrencyPolicy：Allow（允许并发），Forbid（禁止并发，跳过），Replace（取消上一次 Job，运行新的）。Cancel 不存在。"),
        ("Job 的 parallelism 是什么？", "单选", ["Job 重试次数", "并发 Pod 数量", "完成数", "超时"], [1], "parallelism 是并发运行的 Pod 数量，默认 1。配合 completions 定义总任务数，可以并行处理任务。"),

        # HPA 补充
        ("HPA 如何获取 CPU 使用率？", "单选", ["从 kubelet", "从 Metrics Server", "从 Kubelet + Metrics Server", "从 Docker"], [2], "HPA 从 Metrics Server 获取 CPU 使用率（聚合自 kubelet 的 cadvisor）。需要部署 Metrics Server。"),
        ("HPA 如何扩展 Deployment？", "单选", ["直接修改 replicas", "修改 Deployment 的 replicas 指标", "修改 ReplicaSet", "通过 annotation"], [0], "HPA 修改 Deployment 的 replicas 字段（由 Deployment Controller 管理 ReplicaSet）。HPA 是控制 Deployment 的外部控制器。"),
        ("HPA 的 stabilizationWindowSeconds 是什么？", "单选", ["扩展延迟", "稳定窗口，防止频繁扩缩容", "缩容延迟", "窗口大小"], [1], "stabilizationWindowSeconds 定义稳定窗口，用于 scaleDown（缩容）。在窗口内指标波动将不会触发缩容，防止频繁调整。"),
        ("HPA 支持 GPU 指标吗？", "单选", ["支持", "不支持", "需自定义指标", "需外部指标"], [2], "HPA 原生不支持 GPU，但通过自定义指标（custom metrics）和外部指标（external metrics）可以实现。需要 Prometheus 适配器等。"),
        ("为什么 HPA 无法工作？", "多选", ["未部署 Metrics Server", "Pod 未设置 requests", "指标未达到阈值", "HPA 控制器未运行"], [0, 1, 2, 3], "HPA 不工作：Metrics Server 未部署，Pod 没有 CPU/内存 requests（无法计算使用率），指标未达到目标阈值，HPA 控制器检查失败。"),
    ],

    "网络": [
        # Service 补充
        ("Service 的 sessionAffinity 如何配置？", "单选", ["annotation", "spec.sessionAffinity 字段", "env 变量", "configmap"], [1], "Service 的 sessionAffinity 在 spec.sessionAffinity 字段，可选 ClientIP（默认 None）。sessionAffinityConfig.clientIP.timeoutSeconds 可设置超时（默认 10800 秒）。"),
        ("Service 无外部选择器时如何关联后端？", "单选", ["必须有选择器", "使用 Endpoints 手动关联", "无法关联", "使用 selector 注解"], [1], "Service 没有选择器时不会自动生成 Endpoints。可以手动创建 Endpoints 对象关联后端（Service 名称与 Endpoints 名称必须相同）。"),
        ("Service 的 ports 如何配置？", "多选", ["port（Service 端口）", "targetPort（Pod 端口）", "nodePort（节点端口）", "protocol（协议）"], [0, 1, 2, 3], "Service port 指定 Service 端口，targetPort 指定 Pod 端口（默认同 port），nodePort 指定节点端口（NodePort 类型），protocol 指定 TCP/UDP/SCTP。"),
        ("LoadBalancer Service 如何工作？", "单选", ["直接暴露 Pod IP", "分配云负载均衡器并转发到 Service", "在所有节点绑定端口", "自动创建 Ingress"], [1], "LoadBalancer Service 请求云提供商分配负载均衡器（AWS ELB、GCP LB），并将流量转发到 Service（通常是 ClusterIP）。"),
        ("Service DNS 解析如何工作？", "单选", ["直接解析到 Pod IP", "解析到 ClusterIP", "解析到 endpoints", "随机分配"], [1], "Service DNS 解析到 ClusterIP（虚拟 IP）。ClusterIP 到 endpoints（后端 Pod IP）是 iptables/IPVS 规则。A 记录：<service>.<namespace>.svc.cluster.local -> ClusterIP。"),

        # Ingress 补充
        ("Ingress 与 Service 的区别？", "单选", ["Ingress 是七层路由，Service 是四层负载均衡", "没有区别", "Ingress 是 Service 的一种", "Service 是 Ingress 的一种"], [0], "Ingress 是 HTTP(S) 七层路由（主机、路径）。Service 是四层（TCP/UDP）负载均衡。Ingress 通常转发到 Service。"),
        ("如何在多个 Ingress 中配置 TLS？", "单选", ["每个 Ingress 配置单独 TLS", "共享 Secret 引用", "只能单个 TLS", "需要 Ingress Controller 配置"], [0], "每个 Ingress 可以有自己的 TLS Secret（spec.tls）。多个 Ingress 可以使用相同 Secret（如通配符证书）。"),
        ("Ingress 的默认后端是什么？", "单选", ["第一个 Service", "spec.defaultBackend 指定的 Service", "随机 Service", "无"], [1], "Ingress 的 spec.defaultBackend 指定未匹配任何规则时的默认后端。若未设置则返回 404/503。"),
        ("Ingress Path 的匹配规则是什么？", "单选", ["前缀匹配", "精确匹配", "正则匹配", "视 pathType 而定"], [3], "pathType 决定：Prefix（前缀匹配），Exact（精确匹配），ImplementationSpecific（由实现决定，通常是前缀）。默认 ImplementationSpecific。"),
        ("如何将 Ingress 暴露到外部？", "单选", ["Ingress 本身已暴露", "通过 Ingress Controller 的 Service（LoadBalancer/NodePort）暴露", "需要额外 Service", "无需 Service"], [1], "Ingress Controller 需要一个 Service（LoadBalancer 或 NodePort）暴露到外部。Ingress 是路由规则，需要通过 Controller 的 Service 访问。"),

        # NetworkPolicy 补充
        ("NetworkPolicy 的作用范围？", "单选", ["仅限 Pod 出站", "仅限 Pod 入站", "可限制入站出站", "仅限 Service"], [2], "NetworkPolicy 可限制 Pod 的入站和出站。单独限制。Pod 有任何匹配的 NetworkPolicy 时，未在策略中允许的流量（任何方向）将被拒绝。"),
        ("NetworkPolicy 的 policyTypes 有哪些？", "多选", ["Ingress", "Egress", "Both", "None"], [0, 1], "policyTypes 限制策略类型：Ingress（入站），Egress（出站），Both（两者）。策略必须至少一个 Ingress 或 Egress 条目。"),
        ("NetworkPolicy 可以限制 Service 流量吗？", "单选", ["可以", "不行，只控制 Pod 流量", "可以，通过 annotation", "需要额外配置"], [1], "NetworkPolicy 控制的是 Pod 的流量，不直接控制 Service。但可以通过控制 Service 后端的 Pod 流量间接实现。"),
        ("如何创建 NetworkPolicy？", "单选", ["kubectl create netpolicy", "kubectl apply -f networkpolicy.yaml", "kubectl policy create", "kubectl create network"], [1], "NetworkPolicy 通过 YAML 文件创建（kubectl apply）。也可使用 Kubectl create networkpolicy（但不如 YAML 灵活）。"),
        ("Kubernetes 默认网络是全连通吗？", "单选", ["是，除非限制了", "否，需要显式允许", "取决于网络插件", "默认无网络"], [2], "默认网络行为取决于网络插件。许多 CNI 插件提供全连通（除非用 NetworkPolicy 限制），但有些（如 Cilium）默认不连通。但若创建了 NetworkPolicy，未允许的流量将被拒绝。"),

        # DNS 补充
        ("Pod 如何访问外部域名？", "单选", ["必须配置 Service", "使用集群 DNS 转发", "无法访问", "通过 hostNetwork"], [1], "Pod 的 DNS 配置指向 CoreDNS，CoreDNS 转发外部查询到上游 DNS（宿主机或配置的 nameserver）。Pod 直接使用域名访问外部服务。"),
        ("CoreDNS 的 Forward 有什么用？", "单选", ["转发到其他 CoreDNS", "将特定域名查询转发到其他 DNS", "缓存 DNS 记录", "生成 DNS 记录"], [1], "CoreDNS Forward 插件将特定域名的查询转发到其他 DNS 服务器。用于存根域名、自定义转发（如 .local、内部 DNS）。"),
        ("Pod 的 hosts 文件可以修改吗？", "单选", ["不能", "可以，通过 Pod spec.hostAliases", "自动同步 Service DNS", "只在 hostNetwork 下可修改"], [1], "Pod 可通过 spec.hostAliases 修改 hosts 文件（添加条目）。hostNetwork 下使用宿主机 hosts。Service DNS 自动生成（不影响 hosts）。"),
        ("如何调试 CoreDNS？", "多选", ["查看 CoreDNS Pod 日志", "使用 nslookup/dig 测试解析", "检查 CoreDNS ConfigMap", "查看 DNS 记录"], [0, 1, 2], "调试 CoreDNS：kubectl logs 查看 pod 日志，nslookup/dig 从 Pod 测试 DNS 解析，检查 CoreDNS ConfigMap 配置（hosts、forward 等）。"),
        ("CoreDNS 的 hosts 插件有什么作用？", "单选", ["生成所有 Pod 的静态 A 记录", "提供静态 DNS 记录（如自定义域）", "同步 /etc/hosts", "限制网络访问"], [1], "CoreDNS hosts 插件提供静态 DNS 记录，类似 /etc/hosts。用于映射内部域名到 IP（如 localhost、web.example.com）。"),

        # 拓扑路由补充
        ("拓扑感知路由有什么好处？", "多选", ["降低跨区域延迟", "减少跨区域流量成本", "提高可用性", "简化配置"], [0, 1, 2], "拓扑感知路由好处：优先路由到同一拓扑区域（AZ），跨区域延迟和流量成本降低（避免数据传输费用）。提高可用性（隔离故障影响）。"),
        ("启用拓扑感知路由的前提条件？", "多选", ["启用 topologies-aware-hints annotation", "启用 endpointSlices", "服务使用 LoadBalancer 类型", "启用 Service topology keys"], [0, 1], "启用拓扑感知路由：Service annotation: service.kubernetes.io/topology-aware-hints=auto，启用 EndpointSlice（默认启用）。"),
        ("topology-aware-hints 值有哪些？", "多选", ["Auto（自动）", "Disabled（禁用）", "Enabled（启用）", "Custom"], [0, 1], "topology-aware-hints 值有 auto（自动，默认）和 disabled（禁用）。Service 没有该 annotation 时为 auto（取决于默认配置）。"),
        ("拓扑感知路由的提示如何生成？", "单选", ["手动创建 EndpointSlice", "由 EndpointSlice 控制器自动生成", "由 Scheduler 生成", "无需生成"], [1], "拓扑感知路由的 hints 由 EndpointSlice 控制器基于节点拓扑（标签如 topology.kubernetes.io/zone）自动生成。包含在 EndpointSlice 的 hints 字段。"),
        ("拓扑感知路由适用于哪些场景？", "单选", ["仅本地开发", "云上跨可用区（AZ）服务", "单节点集群", "仅 DaemonSet"], [1], "拓扑感知路由主要用于云上跨可用区（AZ）的服务（如 AWS、GCP）。本地单节点集群无需（只有一个 zone）。"),
    ],

    "存储": [
        # Volume 补充
        ("Pod 删除后 emptyDir 数据会怎样？", "单选", ["保留", "删除", "备份到 etcd", "迁移到其他节点"], [1], "Pod 删除后 emptyDir 数据丢失。emptyDir 是临时存储，生命周期与 Pod 绑定。若容器重启，emptyDir 数据保留（除非 Pod 重建）。"),
        ("如何使用 NFS 作为 Pod 存储？", "单选", ["hostPath 指向 NFS 挂载点", "nfs Volume 类型", "必须使用 PVC", "无法使用"], [1], "使用 nfs Volume 类型的 Pod 可以直接挂载 NFS（直接挂载），无需 PVC。但生产环境推荐用 PV/PVC 管理资源。"),
        ("configMap 和 secret Volume 有什么特点？", "多选", ["默认运行时更新", "文件是只读的", "数据存储在 etcd", "支持挂载指定 key"], [0, 1, 2, 3], "ConfigMap 和 Secret Volume：默认运行时更新（自动同步到 Pod），仅挂载的文件只读，数据存储在 etcd（不在节点），可支持挂载单个 key（items）。"),
        ("为什么 emptyDir 无法持久化？", "单选", ["因为太慢", "因为绑定 Pod 生命周期", "因为无 PV", "因为不支持权限控制"], [1], "emptyDir 绑定 Pod 生命周期，Pod 删除时数据销毁。持久化需要 PV/PVC 或 hostPath（但 hostPath 绑定节点）。"),
        ("ceph / rados 作为 Volume 如何使用？", "单选", ["通过 ceph Volume（已废弃）", "通过 RBD CSI / PVC", "通过 configMap", "无法使用"], [1], "Ceph RBD 现在通过 CSI driver（RBD CSI）和 PVC 使用。直接使用 RBD Volume 已废弃。RBD CSI 提供动态配置和快照。"),

        # PVC 和 PV 补充
        ("PVC 能否直接绑定 PV 的名称？", "单选", ["不能，只能自动匹配", "可以，通过 volumeName 字段", "只能使用 StorageClass 自动配置", "需要 annotation"], [1], "PVC 可通过 volumeName 字段绑定特定 PV。但需要 PV 未绑定、PVC 容量和访问模式匹配。多用于静态 PV（管理员准备）。"),
        ("PV 的 status 有哪些？", "多选", ["Available", "Bound", "Released", "Failed"], [0, 1, 2], "PV status：Available（可用），Bound（已绑定），Released（绑定 PVC 删除但 PV 保留，取决于回收策略），Failed（PV 自动删除失败）。"),
        ("为什么 PVC 一直 Pending？", "多选", ["没有可用 PV 或 StorageClass", "资源不足", "PVC 太大", "没有权限"], [0, 1], "PVC Pending 原因：StorageClass 没有 provisioner（无法动态创建），PVC 容量超过可用 PV，存储资源不足。PVC 大小不会导致 Pending（只影响调度）。"),
        ("如何删除绑定 PVC 的 PV？", "单选", ["直接 kubectl delete pv", "必须先删除 PVC（除非 reclaimPolicy=Retain]", "无法删除", "需要重启集群"], [1], "PV 被 PVC 绑定时无法删除。删除 PVC 后（或改 reclaimPolicy=Retain）才可删除 PV。PersistentVolume protection 机制防止意外删除。"),
        ("PVC 绑定 PV 后可以修改容量吗？", "单选", ["可以，直接编辑 PVC 容量", "可以，通过 Patch 增加容量", "不可以，需重建 PVC", "可以，但依赖后端支持"], [3], "PVC 容量扩展：可通过修改 spec.resources.requests.storage 大小扩大容量，但需要 StorageClass 的 allowVolumeExpansion=true 且后端支持（如某些 CSI）。缩小容量不被支持。"),

        # StorageClass 补充
        ("StorageClass 的 mountOptions 有什么作用？", "单选", ["控制卷挂载行为（如性能）", "设置回收策略", "动态配置参数", "配置 Provisioner"], [0], "mountOptions 是卷挂载选项（如读写、缓存、性能优化），适用于某些存储后端（如 NFS）。不是回收策略。PVC 不需要关心。"),
        ("如何创建本地存储的 StorageClass？", "单选", ["使用 provisioner: kubernetes.io/no-provisioner", "使用 local-provisioner", "无法创建", "使用 hostPath"], [0], "本地存储使用 no-provisioner（不动态创建 PV，需管理员创建 local PV）。StorageClass 仅提供 topologyBinding 等，不支持动态配置。"),
        ("如何指定默认 StorageClass？", "单选", ["annotation: storageclass.kubernetes.io/is-default-class='true'", "label: default=true", "修改 PVC 默认值", "无法指定"], [0], "StorageClass 添加 annotation: storageclass.kubernetes.io/is-default-class='true' 即为默认类。PVC 未指定 storageClassName 时会使用类（存在默认类）。"),
        ("StorageClass 的 volumeBindingMode 有哪些？", "多选", ["Immediate", "WaitForFirstConsumer", "Both", "None"], [0, 1], "volumeBindingMode：Immediate（立即绑定，默认，可能跨区域），WaitForFirstConsumer（等待有 Pod 后才绑定，可优化拓扑）。"),
        ("为什么使用 WaitForFirstConsumer？", "单选", ["节省成本", "延迟绑定，优化拓扑（如同区域）", "避免 PV 浪费", "自动修复故障"], [1], "WaitForFirstConsumer 使得 Scheduler 可选择匹配的节点拓扑后再创建 PV，避免创建在错误区域。适合动态配置（如云 PV，有拓扑约束）。"),

        # 快照补充
        ("VolumeSnapshot 依赖什么？", "单选", ["存储卷 CSI 支持快照", "Kubernetes 内置", "特定云平台", "无需依赖"], [0], "VolumeSnapshot 需要存储后端 CSI 驱动支持 VolumeSnapshot 功能。并非所有 CSI 都支持。支持快照的 CSI 会通过 Snapshotter（V1.28 后内置）创建/删除快照。"),
        ("如何恢复 VolumeSnapshot 到新 PV？", "单选", ["直接修改 PV", "创建 PVC 时设置 dataSource 指向快照", "使用快照的名称", "无法恢复"], [1], "创建 PVC 时在 spec.dataSource 指定快照（API 和 kind），Kubernetes 会从快照恢复 PV/PVC。快照数据不直接修改。"),
        ("VolumeSnapshot 是否支持增量快照？", "单选", ["不支持", "支持，依赖存储后端", "需手动配置", "不支持动态快照"], [1], "VolumeSnapshot 支持增量快照，但由存储后端实现决定。Kubernetes 侧只需请求快照，后端可创建增量快照以节省时间和存储。"),
        ("VolumeSnapshot 如何删除？", "单选", ["kubectl delete volumesnapshot", "删除相关 PVC", "自动删除当 PVC 删除时", "手动删除快照数据"], [0], "kubectl delete volumesnapshot 删除快照对象。快照数据是否删除由快照内容处理（通常是存储后端删除快照资源）。删除快照不会影响 PV/PVC。"),
        ("为什么要备份 PV/PVC？", "多选", ["防止数据丢失", "灾难恢复", "迁移", "PV 历久"], [0, 1, 3], "PV/PVC 备份可防止数据丢失（如错误删除）、灾难恢复（节点故障、存储损坏）、数据迁移。PV 不自动备份（需手动或工具如 Velero）。"),

        # 动态配置补充
        ("如何禁止动态配置 PV？", "单选", ["无法禁止", "PVC 的 storageClassName 设为空", "删除所有 StorageClass", "修改 Provisioner"], [1], "PVC 的 storageClassName 设置为空（""）则禁用动态配置，只匹配静态 PV（未绑定 StorageClass 的 PV）。"),
        ("动态配置失败如何排查？", "多选", ["查看 PVC 事件", "查看 Provisioner Pod 日志", "检查 StorageClass 配置", "查看调度器日志"], [0, 1, 2], "动态配置失败排查：kubectl describe pvc 查看事件（如 ProvisionFailure），查看 external provisioner 日志（CSI/云 provider），检查 StorageClass 的 provisioner 和参数。"),
        ("StorageClass 参数（parameters）有什么作用？", "单选", ["定义回收策略", "传递给 provisioner 的参数", "配置挂载选项", "限制容量"], [1], "StorageClass parameters 传递给 provisioner，用于创建 PV（如 AWS 的 IOPS、GCP 的类型、文件系统大小、快照 ID 等）。"),
        ("默认 StorageClass 可以改吗？", "单选", ["不能", "可以，改 annotation 或删除后设新默认", "必须删除所有 PVC", "需要重建集群"], [1], "可修改默认 StorageClass（改 annotation 或标记新类）。已有 PVC 使用哪个类不受影响，新 PVC 使用新默认类。"),
        ("动态配置的回收策略默认是什么？", "单选", ["Retain", "Recycle", "Delete", "没有默认"], [2], "动态配置的 PV（通过 StorageClass 创建）的 reclaimPolicy 默认 Delete。即删除 PVC 时自动删除 PV 和数据，适合临时数据或快照备份的环境。"),
    ],

    "配置": [
        # ConfigMap 补充
        ("ConfigMap 如何在 Pod 中作为环境变量使用？", "多选", ["envFrom 直接导入所有键", "env + valueFrom 注入单个键", "作为命令行参数引用 env", "作为 Volume 挂载文件"], [0, 1], "ConfigMap 作为环境变量：envFrom 导入所有键（前缀可过滤），env + valueFrom 引用单个键（configMapKeyRef）。也可以通过 env 变量在 command/args 中引用。"),
        ("ConfigMap 更新后如何触发 Pod 重启？", "多选", ["无法自动触发", "使用 checksum annotation", "手动删除 Pod", "修改 Pod spec 触发滚动更新"], [1, 2], "ConfigMap 更新不自动重启 Pod 可：添加 checksum annotation 到 Pod（checksum/config.value: ...），修改 annotation 触发滚动更新；手动删除 Pod（由控制器重建）。"),
        ("ConfigVolume 支持挂载时修改权限吗？", "单选", ["不允许", "可通过 defaultMode 设置权限", "自动调整权限", "需要 annotation"], [1], "ConfigMap/Secret Volume 支持配置 defaultMode（8 进制，如 0600），设置挂载文件的权限。可全局也可 items 单独配置。默认 0644。"),
        ("ConfigMap 文件过多（1000+）有问题吗？", "单选", ["无限制", "会降低性能", "无法挂载", "禁止使用"], [1], "ConfigMap 中条目过多会轻微降低性能（Kubelet 同步大量文件到容器）。但在合理范围内（100+）通常没问题。过大可拆分多个 ConfigMap。"),
        ("ConfigMap 如何处理二进制数据？", "单选", ["不能，仅文本", "使用 base64 编码存储", "直接二进制存储", "通过 annotation"], [1], "ConfigMap 支持二进制数据，但值需要是 base64 编码字符串。解码后的数据在挂载文件中是原始二进制。适合存储证书、密钥等。"),

        # Secret 补充
        ("Secret 如何挂载为文件？", "单选", ["使用 secret Volume", "使用 envFrom", "直接复制文件", "无法挂载"], [0], "Secret 通过 secret Volume 挂载为文件（类似于 ConfigMap）。适合挂载证书、密钥文件，避免 env 暴露。可通过 items 挂载单个 key。"),
        ("Docker 镜像仓库 Secret 如何使用？", "多选", ["在 Pod 的 spec.imagePullSecrets 引用", "全局配置到 ServiceAccount", " annotation 到 Deployment", "无法使用"], [0, 1], "Docker 镜像仓库认证 Secret：imagePullSecrets 在 Pod/Deployment 中引用；或者 ServiceAccount 的 imagePullSecrets 引用（全局）。"),
        ("kubernetes.io/dockercjson Secret 的内容是什么？", "单选", ["用户名密码明文", "Docker 配置文件（~/.docker/config.json）内容", "CA 证书", "无特殊格式"], [1], "kubernetes.io/dockercjson Secret 内容为 JSON 格式的 Docker config（包含 auth、auths 等）。可用于镜像仓库认证。"),
        ("TLS Secret（kubernetes.io/tls）包含什么？", "多选", ["tls.crt", "tls.key", "ca.crt", "password"], [0, 1], "TLS Secret 包含 tls.crt（证书）和 tls.key（私钥）。可包含 ca.crt（可选，但 TLS Secret 不包含），password 不存在。"),
        ("Secret 与 etcd 中存储安全吗？", "单选", ["明文不安全", "base64 编码后安全", "等价明文（base64 易解码）", "自动加密"], [2], "Secret 默认在 etcd 中存储为 base64 编码。base64 可轻松解码，因此不真正加密。需启用 etcd 静态加密（KMS）或使用外部保密管理器（如 AWS KMS）。"),

        # 探针补充
        ("探针检测失败后 Pod 行为是什么？", "单选", ["自动删除 Pod", "根据失败类型和重启策略决定", "立即重启容器", "忽略"], [1], "探针失败后行为：liveness 失败触发容器重启（根据 restartPolicy）；readiness 失败移出 Service（不影响 Pod 运行）；startup 失败 liveness 不执行（继续重试）。"),
        ("HTTP 探针如何配置？", "单选", ["仅支持 GET", "支持 GET/POST", "支持 GET/HEAD", "支持任意 HTTP 方法"], [2], "HTTP 探针支持 GET 和 HEAD 请求（默认 GET），可通过 httpGet.method（HEAD）指定。不支持 POST 等，因为健康检查通常是 GET。"),
        ("探针的初始延迟（initialDelaySeconds）是什么？", "单选", ["探针失败后重试间隔", "容器启动后等待多久才开始检测", "探针超时时间", "最大重试次数"], [1], "initialDelaySeconds 是容器启动后等待多久才开始检测。例如应用需要 10 秒启动，可以设置 15 秒避免启动失败被误判为失败。"),
        ("如何配置探针超时（timeoutSeconds）？", "单选", ["默认 1 秒，可设置更长", "不可配置", "与 periodSeconds 相同", "等于 initialDelaySeconds"], [0], "timeoutSeconds 可配置，默认 1 秒。如果应用响应慢，增加超时（如 5 秒）。超时后将判定为失败。"),
        ("探针的 periodSeconds 和 successThreshold 怎么用？", "单选", ["periodSeconds: 检测间隔，successThreshold: 连续成功多少次才算成功", "两者都表示重试次数", "固定不可改", "successThreshold 必须大于 10"], [0], "periodSeconds 是检测间隔（默认 10 秒）。successThreshold 是连续成功多少次才算成功（默认 1，liveness 通常不需设置），可用于 startup 过渡期避免不稳定失败误判。"),

        # 资源管理补充
        ("如何查看节点资源容量？", "单选", ["kubectl get nodes", "kubectl describe node", "以上两者都可以", "kubectl capacity"], [2], "kubectl get nodes 显示基本容量（allocatable）；kubectl describe node 更详细显示分配、requests、limits。capacity 是节点总容量。"),
        ("Pod 的容器未设置 requests 会怎样？", "单选", ["默认 0，无法调度", "使用 limits（若设置）", "自动分配", "无法启动"], [1], "容器未设置 requests 时默认等于 limits（若设置了），即请求量=上限。若无 limits 也无 requests，requests 默认 0，可能调度到资源不足节点导致资源竞争。"),
        ("Pod 的内存 limit 与 request 的区别？", "单选", ["两者相同", "request 是下限，limit 是上限", "request 是上限，limit 是下限", "只有 request 有效"], [1], "request 是保证的资源下限（调度用），limit 是上限（限制）。内存超限会 OOM Kill，CPU 超限被限流。"),
        ("为何避免 OOM Kill？", "多选", ["设置合适的 limits/requests", "监控内存使用", "优化应用内存消耗", "取消 limits（避免过限）"], [0, 1, 2], "避免 OOM Kill：设置合理的容器内存 limit（不要太小或太大），监控内存使用（如 Prometheus），优化应用（避免内存泄漏，及时释放）。取消 limit 不推荐（资源竞争）。"),
        ("LimitRange 和 ResourceQuota 配合使用吗？", "单选", ["可以配合，通常一起使用", "只能二选一", "没有关系", "不能共同使用"], [0], "LimitRange 和 ResourceQuota 可配合：前者限制资源范围（默认值、最大最小）防止滥用；后者限制总和（总 CPU、内存、对象数）。先设置 LimitRange 再 ResourceQuota 默认值生效。"),
        ("如何监控容器资源使用？", "多选", ["kubectl top pods", "kubectl describe pod 显示配置但不实时", "Prometheus + cAdvisor", "Pod 日志"], [0, 1, 2], "监控容器资源：kubectl top pods（需要 Metrics Server）显示 CPU/内存使用率；Prometheus 从 cAdvisor 抓取历史指标；kubectl describe pod 显示配置信息但非实时使用。"),
        ("为何设置 ephemeral-storage？", "单选", ["临时存储无影响", "防止容器日志/可写层耗尽节点存储导致驱逐", "加速容器启动", "提高性能"], [1], "设置容器 ephemeral-storage 限制可防止日志、临时文件、镜像层占满节点存储（导致节点被驱逐、Pod 被杀）。需要监控存储使用（如 Prometheus）。"),
    ],

    "调度": [
        # 调度器补充
        ("为什么调度器无法调度 Pod？", "多选", ["资源不足", "亲和性限制", "污点不匹配", "PVC 未绑定"], [0, 1, 2], "Pod Pending（未调度）的可能原因：资源不足（CPU/内存/Pod 数），亲和性未满足（nodeAffinity、podAffinity），污点不匹配（无 toleration），PVC 未绑 PV，调度器未运行，网络插件问题。"),
        ("调度器在哪里运行？", "单选", ["控制平面节点（master）", "每个工作节点", "控制平面可选部署", "外部"], [0], "调度器（kube-scheduler）运行在控制平面节点（通常作为 Deployment，多个副本）。通过 API Server 监听未调度 Pod。"),
        ("如何禁用默认调度器？", "单选", ["无法禁用", "在 Pod 设置 schedulerName 为自定义调度器", "删除控制器", "修改 API Server"], [1], "Pod 可设置 schedulerName 为自定义调度器名称，由指定调度器调度。不影响全局（其他 Pod 使用默认调度）。如需禁用全局调度器需编辑 Deployment/etc。"),
        ("调度器的调度目标是什么？", "单选", ["分配到资源最多节点", "平衡资源利用", "满足所有约束（资源、亲和性、污点）", "最快调度"], [2], "调度器目标：找到一个节点满足所有约束（资源请求、亲和性、污点容忍度），然后（可选）通过打分选择最优（通常基于资源平衡等策略）。不追求最快（先过滤后打分）。"),
        ("如何查看调度器日志？", "单选", ["kubectl logs scheduler", "kubectl logs -n kube-system -l component=kube-scheduler", "在节点查看", "无法查看"], [1], "调度器日志在 kube-scheduler Pod：kubectl logs -n kube-system -l component=kube-scheduler。查看调度决策、过滤节点、失败原因。"),

        # 亲和性/反亲和性补充
        ("podAffinity 的 topologyKey 是什么？", "单选", ["标签键，表示拓扑域（如 hostname", "Pod 的标签键", "Node 的标签键", "PVC 的属性"], [0], "podAffinity 的 topologyKey 是节点标签键，表示拓扑域（如 kubernetes.io/hostname 是节点级，topology.kubernetes.io/zone 是区域级）。Pod affinity 会在同一拓扑域内（同一节点或同一 AZ）。"),
        ("required vs preferred 亲和性的区别？", "单选", ["required 必须满足，preferred 优先但可选", "无区别", "preferred 有更高权重", "required 只用于 nodeAffinity"], [0], "required（硬性要求）必须满足，否则无法调度。preferred 有 weight，尝试满足（不满足时仍可调度）。同时可配置多个（匹配任一即可）。"),
        ("nodeAffinity 与 nodeSelector 能同时使用吗？", "单选", ["能，但 nodeSelector 更简单", "能，两者可以共存", "不能，冲突", "不能，只能选一个"], [2], "nodeSelector 和 nodeAffinity 不能同时使用（冲突）。使用 nodeAffinity 即可。nodeSelector 是简单标签相等匹配的子集。"),
        ("如何确保不同应用的 Pod 不在同一节点？", "单选", ["nodeSelector 标签不同", "使用 podAntiAffinity", "设置污点", "无法保证"], [1], "使用 podAntiAffinity（required with topologyKey=kubernetes.io/hostname）确保不同应用的 Pod 不在同一个节点。适合高可用场景（避免单点故障）。"),
        ("nodeAffinity 可以基于节点标签吗？", "单选", ["不能", "可以，任何节点标签都可", "只能是某些特定标签", "只在 master 节点可用"], [1], "nodeAffinity 可基于任何节点标签（由管理员添加，如 region、zone、disk-type、node-selector）。支持匹配操作（In, NotIn, Exists, Gt, Lt 等）。"),

        # 污点/容忍度补充
        ("污点的 key 可以省略吗？", "单选", ["不能，必须指定", "可以（为空）", "可以，使用 *", "自动填充"], [0], "Taint 的 key 必须指定。但 value 可以省略（此时 operator 只能用 Exists）。key 为空时不合法。例如 key=special-hardware。"),
        ("多个 toleration 如何匹配污点？", "单选", ["必须匹配所有污点", "匹配任一个污点", "按序匹配", "无法匹配多个"], [1], "Pod 可以有多个 toleration，每个 toleration 匹配一个污点（key、value、effect、operator）。若容忍了所有运行节点的所有污点，则可以调度该节点。"),
        ("容忍度的 operator 有哪些？", "多选", ["Equal", "Exists", "NotExists", "Regex"], [0, 1], "toleration operator 有 Equal（key=value 必需），Exists（仅匹配 key 可省略 value），以及 NotExists（不存在）。没有 Regex。"),
        ("如何给 DaemonSet 添加 toleration？", "单选", ["在 Pod template 的 spec.tolerations", "在 spec.template.tolerations", "在 spec.daemonSet.tolerations", "无法添加"], [1], "DaemonSet 的 toleration 在 spec.template.spec.tolerations（Pod template）。因为 DaemonSet 管理 Pod，设置 Pod 的 toleration。"),
        ("NoExecute 污点的 tolerationSeconds 是什么？", "单选", ["容忍污点多久", "驱逐前等待多久", "Taint 超时时间", "污点创建时间"], [1], "tolerationSeconds（仅 NoExecute 有效）是当污点出现在已调度的节点时（如给节点加污点），Pod 在此秒数后会被驱逐。默认为 0（立即），-1 表示不驱逐（永久容忍）。"),
        ("为什么主控节点有 NoSchedule 污点？", "单选", ["限制 Pod 调度到主控节点", "防止资源不足", "标记不可用", "安全原因"], [0], "通常给控制平面节点（master) 加上 NoSchedule 或 NoExecute 污点，避免一般工作负载（普通 Pod）调度到控制节点，保持控制节点资源充足稳定。可通过 toleration 允许 system 组件（如监控、日志）在此运行。"),

        # 优先级和抢占补充
        ("PriorityClass 有默认吗？", "单选", ["有，global-default", "无默认", "default-system", "有但不可修改"], [0], "PriorityClass 有 global-default（默认 priority:0），未指定 priorityClassName 的 Pod 使用此类。可修改 global-default 但不建议（可能影响集群）。"),
        ("为什么高优先级 Pod 抢占失败？", "多选", ["没有可抢占的低优先级 Pod", "抢占被禁用（PriorityClass preemptionPolicy=Never）", "Pod 有 NoExecute 污点", "其他 Pod 也在抢占"], [0, 1], "抢占失败：高优先级 Pod 无法调度且没有可抢占的低优先级 Pod（没有合适节点或 Pod），PriorityClass 的 preemptionPolicy=Never 禁用抢占。"),
        ("优先级影响调度顺序吗？", "单选", ["高优先级先调度", "优先级仅用于抢占，不影响顺序", "反顺序（低先）", "随机"], [1], "高优先级 Pod 不一定比低优先级先调度（先到先调度）。优先级只影响抢占决策（资源不足时决定是否驱逐低优先级 Pod）。"),
        ("如何保护 Pod 不被抢占？", "多选", ["设置高优先级", "通过 annotation", "kube-system 命名空间", "无保护"], [1, 2], "保护 Pod 不被抢占：在 kube-system 的 Pod 自动保护（不被抢占），添加 annotation: cluster-autoscaler.kubernetes.io/safe-to-evict=false 可防止被驱逐/抢占（部分调度器/自动扩容器适用）。"),
        ("PriorityClass 的 globalDefault 有什么用？", "单选", ["设置默认优先级", "设置最高优先级", "定义抢占策略", "无作用"], [0], "PriorityClass 的 globalDefault=true 指定为默认类（未设置 priorityClassName 的 Pod 使用）。default PriorityClass 的 value 定义默认优先级（通常为 0）。"),
    ],

    "集群管理": [
        # 节点管理补充
        ("节点 Unreachable 怎么处理？", "多选", ["检查网络（节点与 API）", "检查 kubelet 是否运行", "检查容器运行时", "重启集群"], [0, 1, 2], "节点 Unreachable 处理：检查网络（节点与 API Server 是否连通），检查节点上 kubelet 是否运行（kubectl logs node 不存在），检查容器运行时（docker/containerd）。"),
        ("如何标记节点为不可用（维护前）？", "单选", ["kubectl unschedule node", "kubectl cordon node", "kubectl drain node", "kubectl node delete"], [1], "kubectl cordon <node> 标记节点不可调度（新 pod 不调度到此节点，现存的不受影响）。维护前用 kubectl drain 驱逐所有 Pod（包含 cordon）。"),
        ("如何快速检查节点状态？", "单选", ["kubectl get nodes", "kubectl describe node", "以上两者都不行", "需要 API"], [0], "kubectl get nodes 快速查看节点状态（READY/NotReady）。kubectl describe 更详细（容量、分配、事件）。"),
        ("节点内存压力（MemoryPressure）有什么影响？", "单选", ["节点立即被标记 NotReady", "影响调度（可能不调度新 Pod），但 Pod 不会被驱逐", "节点重启", "无影响"], [1], "节点在 MemoryPressure 状态下影响调度（MemoryPressure condition 影响调度决策），可能导致新 Pod 不调度到此节点。已调度的 Pod 不一定被驱逐（若内存不足可能会）。"),
        ("如何给节点打标签？", "单选", ["kubectl label node <node> key=value", "kubectl annotate node", "kubectl tag node", "nodeconfig set"], [0], "kubectl label node <name> key=value 给节点打标签，可用于亲和性（nodeAffinity、nodeSelector）。例如 kubectl label nodes node1 region=us-west-1。"),
        ("污点和节点标签的区别是什么？", "单选", ["无区别", "污点控制调度，标签用于亲和性/选择器", "标签控制调度，污点用于亲和性", "污点只能用于 master"], [1], "污点（Taint）用于控制调度（不调度容忍的 Pod），标签（Label）用于选择器亲和性（调度时选择有特定标签的节点）。标签也可用于识别/组织。"),
        ("节点无法升级怎么办？", "多选", ["检查 kubeadm 版本", "检查控制平面版本", "检查镜像版本", "直接跳过升级"], [0, 1], "节点无法升级：检查 kubeadm 版本是否最新（先升级工具），检查控制平面是否已升级后工作节点再升级（版本兼容性）。"),
        ("如何删除节点？", "单选", ["直接 kubectl delete node", "kubectl drain 后删除节点", "无法删除", "需要重启集群"], [1], "删除节点：先 kubectl drain（驱逐 Pod），然后 kubectl delete node <name>。直接删除会留下孤儿 Pod（kubelet 不会删除）。也需从 kubelet 移除节点信息（kubeadm reset）。"),

        # 集群升级补充
        ("升级集群前需要备份什么？", "多选", ["etcd 快照", "集群配置（YAML）", "版本信息", "节点镜像"], [0, 1, 3], "升级前备份：etcd（kubeadm etcd）快照，集群配置（部署 YAML、证书），版本信息（当前集群版本、节点版本）。节点镜像在云环境或本地已有。"),
        ("kubeadm 升级步骤是什么？", "单选", ["kubeadm upgrade apply <version> -> 升级各节点", "直接升级节点", "无需操作", "自动升级"], [0], "kubeadm 升级流程：先升级 kubeadm 工具 -> 控制平面节点执行 kubeadm upgrade apply -> 各工作节点升级 kubeadm -> kubeadm upgrade node。"),
        ("升级失败如何处理？", "多选", ["检查升级日志", "查看节点状态", "回滚到上一版本", "删除集群重建"], [0, 1, 2], "升级失败：检查升级日志（kubeadm 的输出或日志），检查节点状态（kubectl get nodes），尝试回滚（需 etcd 备份）。必要时手动修复（如重建 API Server 容器）。"),
        ("版本更新时主要检查什么？", "多选", ["兼容性（跨版本）", "API 弃用/废弃", "性能变化", "安全更新"], [0, 1, 3], "版本更新检查：版本跨版本兼容性（从 v1.28 到 v1.29），是否有 API 弃用（alpha -> beta -> GA），安全更新（CVE），性能变化（如调度器、API Server 改进）。"),
        ("Kubernetes 支持小版本跨多版本升级吗？", "单选", ["支持，可从 v1.27 升到 v1.30", "不支持，只能逐个升级（v1.27->v1.28->v1.29", "不确定", "不能跨版本"], [1], "通常支持小版本跨版本升级，但建议逐次升级（如 1.27->1.28->1.29）以减少问题。跨版本（例如 1.26->1.29）可能存在兼容性、弃用 API 问题。"),

        # 监控补充
        ("如何监控 Kubernetes 集群？", "多选", ["Prometheus + Grafana", "Metrics Server", "云厂商监控", "手动检查"], [0, 1, 2], "集群监控常用 Prometheus + Grafana（完整指标采集和可视化），Metrics Server 提供基础指标（支持 HPA/kubectl top），云厂商（EKS、GKE）提供默认监控。手动不适合生产环境。"),
        ("Prometheus 如何抓取 Kubernetes 指标？", "单选", ["直接访问 API Server", "使用 ServiceMonitor/Endpoint", "通过 kubectl 代理", "读取 etcd"], [1], "Prometheus 通过 ServiceMonitor（Prometheus Operator 提供）或 annotations 发现 Service/Pod 的指标端点，然后抓取。Kubelet 提供的 /metrics 端点暴露 cAdvisor 指标。"),
        ("哪些指标需要重点监控？", "多选", ["API Server 延迟/QPS", "节点资源（CPU/内存）", "Pod 调度失败", "etcd 延迟"], [0, 1, 2], "重点监控：API Server 延迟/QPS（反映集群负载/瓶颈），节点资源（CPU/内存使用，可否调度更多 Pod），Pod 调度失败（Pending 数量、原因），etcd 延迟（影响所有组件）。"),
        ("如何告警 Pod NotReady？", "单选", ["Prometheus Alertmanager 规则", "手动检查", "无法告警", "只用 kubectl watch"], [0], "使用 Prometheus Alertmanager 配置告警规则（如 kube_pod_status_phase != 1 超过 5 分钟），匹配标签后发送通知（邮件/钉钉/Slack）。"),
        ("为何需要 Metrics Server？", "单选", ["存储指标", "提供 HPA/kubectl top 所需的基础指标", "替代 Prometheus", "控制平面组件"], [1], "Metrics Server 提供实时 CPU/内存使用数据，用于 HPA 自动伸缩和 kubectl top 命令。它不存储历史（由 Prometheus 存储），仅聚合当前值。"),

        # 日志管理补充
        ("容器日志默认存储在节点哪里？", "单选", ["etcd", "/var/log/containers/<container-id>.log", "容器内", "内存"], [1], "容器日志存储在节点 /var/log/containers/ 目录（通过 kubelet 收集），文件由容器运行时（containerd）管理。kubectl logs 从此文件读取。"),
        ("日志收集 DaemonSet 适合什么？", "单选", ["小规模集群日志收集", "不需要日志外发", "无需容器日志", "不适用"], [0], "DaemonSet（每节点运行一个）适合收集集群容器日志（如 Fluentd、Logstash）到集中式日志系统（ELK、Elasticsearch、CloudWatch）。"),
        ("ELK 在 Kubernetes 中如何部署？", "单选", ["Pod 运行", "StatefulSet", "DaemonSet", "以上都可以"], [3], "ELK 可灵活部署：Elasticsearch 可用 StatefulSet（持久化），Filebeat/Fluentd 用 DaemonSet 收集日志，Kibana 作为前端 Service（LoadBalancer/NodePort）。"),
        ("如何处理日志过大占满磁盘？", "多选", ["配置日志轮转", "限制日志大小（限制容器存储）", "转发到外存储", "定期清空日志"], [0, 1, 2], "日志大处理：配置 LogRotation（节点容器运行时如 docker 日志轮转），限制容器日志大小（limit ephemeral-storage），转发到外存储（避免本地磁盘满），设置日志保留期等。"),
        ("如何收集应用日志？", "多选", ["应用写 stdout（默认收集）", "Fluentd DaemonSet", "Filebeat Sidecar", "直接本地查看"], [0, 1], "应用写标准输出（stdout），容器运行时收集到节点 /var/log/containers；通过 Fluentd 或文件转发到日志系统（ELK、Kafka）；或 Sidecar（Filebeat）日志采集。"),

        # 备份恢复补充
        ("etcd 备份恢复的限制是什么？", "单选", ["无限制", "仅恢复集群状态，无法恢复 PVC 数据", "无法恢复集群", "需离线"], [1], "etcd 备份恢复的是集群状态（对象、配置），无法恢复 PVC 数据（数据在存储卷）。PVC 数据需要通过快照、备份工具（如 Velero）、同步复制。"),
        ("Velero 如何工作？", "单选", ["直接备份 etcd", "备份 Kubernetes 资源（API 对象）和持久卷数据", "仅备份 PVC", "备份数据库"], [1], "Velero 备份：Kubernetes 资源（API 对象）和 PVC 数据（通过 Snapshot 或数据复制）。支持定时备份、迁移、灾难恢复。可以恢复到新集群。"),
        ("灾难恢复流程是什么？", "多选", ["恢复 etcd（集群状态）", "恢复 PVC（数据卷）", "验证应用是否恢复运行", "通知"], [0, 1, 2], "灾难恢复流程：先恢复 etcd（恢复集群状态，对象、配置），然后恢复 PVC 数据（从快照、备份或复制），验证应用运行和功能，最后通知用户。"),
        ("如何备份节点配置？", "单选", ["拷贝 /etc/kubernetes", "kubeadm 提供备份", "手动记录", "无需备份"], [0], "节点配置（证书、kubelet 配置、kubeadm 配置）通常在 /etc/kubernetes。备份该目录。也可使用 kubeadm 的配置备份。"),
        ("备份策略如何制定？", "多选", ["制定备份频率（定时）", "备份内容（etcd、PVC、配置）", "测试恢复流程", "存储备份位置（本地/云）"], [0, 1, 2], "备份策略：定时备份频率（每日、每周），备份内容（etcd、PVC、证书），测试恢复（确保备份可用），备份位置（云存储、异地）。遵循 3-2-1 原则（3份、2介质、1离线）。"),
    ],
}

# 生成题目
for module, items in module_supplement.items():
    difficulty = ["进阶", "高级", "进阶"]
    for i, (question, qtype, options, answer, explanation) in enumerate(items):
        diff = difficulty[i % 3]
        add_question(module, question, qtype, options, answer, explanation, diff)

# 输出
output = "// 补充题目\nconst extraQuestions = [\n"
for q in new_questions:
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
output += "];\n\nmodule.exports = extraQuestions;"

with open("./extra_questions.js", "w", encoding="utf-8") as f:
    f.write(output)

print(f"生成 {len(new_questions)} 道补充题目!")
