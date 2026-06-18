// Kubernetes 概念测评题目库
const questions = [
    // ==================== 概述 ====================
    {
        module: "概述",
        question: "Kubernetes 的核心目标不包括以下哪项？",
        type: "单选",
        options: [
            "提供容器编排的高效管理",
            "实现应用程序的自动化部署和扩展",
            "支持负载均衡和服务发现",
            "直接管理物理网络设备"
        ],
        answer: [3],
        explanation: "Kubernetes 是容器编排平台，专注于容器管理，不直接管理物理网络设备。"
    },
    {
        module: "概述",
        question: "Kubernetes 这个名字中间有几个字母？",
        type: "单选",
        options: [
            "6个",
            "8个",
            "10个",
            "12个"
        ],
        answer: [1],
        explanation: "Kubernetes 这个名字中间有 8 个字母（ubernete），所以常被称为 K8s。"
    },
    {
        module: "概述",
        question: "以下哪些是控制平面的核心组件？",
        type: "多选",
        options: [
            "API Server",
            "etcd",
            "Scheduler",
            "Kubelet"
        ],
        answer: [0, 1, 2],
        explanation: "Kubelet 是工作节点组件，不是控制平面组件。控制平面包括 API Server、etcd、Scheduler、Controller Manager。"
    },
    {
        module: "概述",
        question: "etcd 的主要作用是什么？",
        type: "单选",
        options: [
            "管理容器网络",
            "存储集群所有的配置和状态数据",
            "调度 Pod 到节点",
            "提供负载均衡"
        ],
        answer: [1],
        explanation: "etcd 是 Kubernetes 的后端数据库，存储整个集群的配置和状态信息。"
    },
    {
        module: "概述",
        question: "标签（Labels）的主要用途包括哪些？",
        type: "多选",
        options: [
            "标识和选择对象",
            "组织和分组资源",
            "存储密钥密码",
            "实施访问控制"
        ],
        answer: [0, 1],
        explanation: "标签用于标识、选择和分组对象。存储密钥应该使用 Secret，访问控制使用 RBAC。"
    },
    {
        module: "概述",
        question: "以下哪些命名空间是 Kubernetes 默认创建的？",
        type: "多选",
        options: [
            "default",
            "kube-system",
            "kube-public",
            "my-namespace"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 默认创建 default、kube-system、kube-public 和 kube-node-lease 命名空间。my-namespace 是用户创建的。"
    },
    {
        module: "概述",
        question: "注解（Annotations）与标签（Labels）的主要区别是什么？",
        type: "多选",
        options: [
            "标签支持选择器，注解不支持",
            "注解可以存储更大的数据",
            "标签用于选择和分组，注解用于存储元数据",
            "注解会被用来进行流量路由"
        ],
        answer: [0, 1, 2],
        explanation: "注解不用于选择，可以存储更多数据，主要用途是存储元数据。"
    },
    {
        module: "概述",
        question: "控制器（Controllers）通过什么机制确保集群实际状态与期望状态一致？",
        type: "单选",
        options: [
            "一次性执行",
            "调谐循环（Reconciliation Loop）",
            "定时检查",
            "用户手动干预"
        ],
        answer: [1],
        explanation: "控制器通过持续运行的调谐循环监控集群状态，并在实际状态与期望状态不一致时进行调整。"
    },
    {
        module: "概述",
        question: "kubectl 命令行工具的主要用途是什么？",
        type: "多选",
        options: [
            "部署应用程序",
            "检查和管理集群资源",
            "查看日志",
            "直接编辑 etcd 数据"
        ],
        answer: [0, 1, 2],
        explanation: "kubectl 用于与 Kubernetes 集群交互，不能直接编辑 etcd。"
    },
    {
        module: "概述",
        question: "以下哪些 API 版本是稳定的，推荐在生产环境使用？",
        type: "多选",
        options: [
            "v1alpha1",
            "v1beta1",
            "v1",
            "v2alpha1"
        ],
        answer: [2],
        explanation: "v1 是稳定版本，保证向后兼容。alpha 和 beta 版本不建议在生产环境使用。"
    },

    // ==================== 集群架构 ====================
    {
        module: "集群架构",
        question: "Kubernetes 集群由哪两种主要类型的节点组成？",
        type: "多选",
        options: [
            "控制平面节点（Master）",
            "工作节点（Worker）",
            "存储节点",
            "计算节点"
        ],
        answer: [0, 1],
        explanation: "Kubernetes 集群由控制平面（Master）和工作节点（Worker）组成。"
    },
    {
        module: "集群架构",
        question: "API Server 是 Kubernetes 系统的统一入口，它负责以下哪些功能？",
        type: "多选",
        options: [
            "提供 RESTful API 接口",
            "认证和授权",
            "持久化数据到 etcd",
            "运行容器"
        ],
        answer: [0, 1, 2],
        explanation: "API Server 提供 API 接口、认证授权，并将数据持久化到 etcd。运行容器由容器运行时负责。"
    },
    {
        module: "集群架构",
        question: "Scheduler 将 Pod 分配到节点时，会考虑以下哪些因素？",
        type: "多选",
        options: [
            "资源需求",
            "节点选择器",
            "污点和容忍度",
            "容器镜像大小"
        ],
        answer: [0, 1, 2],
        explanation: "容器镜像大小通常不是调度考虑的主要因素。"
    },
    {
        module: "集群架构",
        question: "Kubelet 是节点的主要代理，它负责以下哪些任务？",
        type: "多选",
        options: [
            "从控制平面接收 Pod 分配和更新指令",
            "通过容器运行时创建和管理容器",
            "维护节点上的网络规则",
            "为 Service 提供负载均衡"
        ],
        answer: [0, 1],
        explanation: "Kubelet 管理节点上的容器。网络规则由 Kube-proxy 负责。"
    },
    {
        module: "集群架构",
        question: "Kube-proxy 支持哪些工作模式？",
        type: "多选",
        options: [
            "iptables",
            "ipvs",
            "userspace",
            "Docker"
        ],
        answer: [0, 1, 2],
        explanation: "Kube-proxy 支持 userspace、iptables、ipvs 模式。Docker 不是 Kube-proxy 的工作模式。"
    },
    {
        module: "集群架构",
        question: "租约（Leases）的主要用途包括哪些？",
        type: "多选",
        options: [
            "节点心跳",
            "控制器领导选举",
            "存储 Pod 配置",
            "备份 etcd 数据"
        ],
        answer: [0, 1],
        explanation: "租约用于节点心跳和领导者选举。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 自愈能力可以在以下哪些情况下自动恢复？",
        type: "多选",
        options: [
            "节点故障",
            "容器崩溃",
            "Pod 被删除",
            "用户有意删除 Deployment"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 可以自动恢复节点故障、容器崩溃和 Pod 被删除的情况。"
    },
    {
        module: "集群架构",
        question: "垃圾回收机制包括以下哪些类型？",
        type: "多选",
        options: [
            "容器垃圾回收",
            "镜像垃圾回收",
            "对象垃圾回收",
            "网络垃圾回收"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 垃圾回收包括容器、镜像和对象垃圾回收。"
    },
    {
        module: "集群架构",
        question: "etcd 的以下哪些特性使其适合作为 Kubernetes 的存储引擎？",
        type: "多选",
        options: [
            "基于 Raft 协议保证一致性",
            "支持高可用集群模式",
            "提供 Watch 机制",
            "自动备份数据到云存储"
        ],
        answer: [0, 1, 2],
        explanation: "etcd 基于 Raft 协议、支持高可用、提供 Watch 机制。自动备份到云存储不是其内置功能。"
    },
    {
        module: "集群架构",
        question: "Controller Manager 包含以下哪些控制器？",
        type: "多选",
        options: [
            "Node Controller",
            "Replication Controller",
            "Endpoints Controller",
            "Network Controller"
        ],
        answer: [0, 1, 2],
        explanation: "Network Controller 不是 Controller Manager 的一部分。"
    },

    // ==================== 容器 ====================
    {
        module: "容器",
        question: "容器与虚拟机相比，具有哪些优势？",
        type: "多选",
        options: [
            "启动速度快",
            "资源开销小",
            "隔离性更强",
            "便携性高"
        ],
        answer: [0, 1, 3],
        explanation: "虚拟机的隔离性比容器强，但容器的启动速度、资源开销和便携性更优。"
    },
    {
        module: "容器",
        question: "Kubernetes 中支持以下哪些容器镜像拉取策略？",
        type: "多选",
        options: [
            "Always",
            "IfNotPresent",
            "Never",
            "Random"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 支持 Always、IfNotPresent、Never 三种拉取策略，不支持 Random。"
    },
    {
        module: "容器",
        question: "Init 容器具有哪些特性？",
        type: "多选",
        options: [
            "顺序执行",
            "成功即退出",
            "与主容器共享网络命名空间",
            "失败后自动跳过"
        ],
        answer: [0, 1, 2],
        explanation: "Init 容器失败后会重试，不会自动跳过。"
    },
    {
        module: "容器",
        question: "探针（Probes）包括以下哪些类型？",
        type: "多选",
        options: [
            "Liveness Probe",
            "Readiness Probe",
            "Startup Probe",
            "Health Probe"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 提供三种探针：Liveness、Readiness 和 Startup。"
    },
    {
        module: "容器",
        question: "探针可以通过以下哪些方式执行？",
        type: "多选",
        options: [
            "ExecAction",
            "HTTPGetAction",
            "TCPSocketAction",
            "gRPC"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 支持 Exec、HTTPGet、TCPSocket 和 gRPC（v1.24+）四种探针执行方式。"
    },
    {
        module: "容器",
        question: "生命周期钩子包括以下哪些类型？",
        type: "多选",
        options: [
            "PostStart",
            "PreStop",
            "PostStop",
            "PreStart"
        ],
        answer: [0, 1],
        explanation: "Kubernetes 只提供 PostStart 和 PreStop 两种生命周期钩子。"
    },
    {
        module: "容器",
        question: "RuntimeClass 的主要用途包括哪些？",
        type: "多选",
        options: [
            "支持多种容器运行时",
            "配置隔离",
            "为不同工作负载提供不同配置",
            "直接管理容器镜像"
        ],
        answer: [0, 1, 2],
        explanation: "RuntimeClass 用于管理容器运行时，不直接管理容器镜像。"
    },
    {
        module: "容器",
        question: "容器状态包括以下哪些？",
        type: "多选",
        options: [
            "Waiting",
            "Running",
            "Terminated",
            "Creating"
        ],
        answer: [0, 1, 2],
        explanation: "容器状态包括 Waiting、Running 和 Terminated。"
    },
    {
        module: "容器",
        question: "以下哪些是常见的容器运行时？",
        type: "多选",
        options: [
            "containerd",
            "CRI-O",
            "gVisor",
            "Swarm"
        ],
        answer: [0, 1, 2],
        explanation: "containerd、CRI-O 和 gVisor 都是容器运行时，Swarm 是 Docker 的编排工具。"
    },
    {
        module: "容器",
        question: "CRI（容器运行时接口）提供以下哪些功能？",
        type: "多选",
        options: [
            "Pod/容器生命周期管理",
            "镜像拉取和管理",
            "状态查询和执行命令",
            "直接管理容器网络"
        ],
        answer: [0, 1, 2],
        explanation: "CRI 管理 Pod/容器生命周期、镜像和状态查询，容器网络由 CNI 负责。"
    },

    // ==================== 工作负载 ====================
    {
        module: "工作负载",
        question: " Pod 是 Kubernetes 中的什么单位？",
        type: "单选",
        options: [
            "最小的部署单元",
            "最大的逻辑单元",
            "网络隔离单元",
            "存储隔离单元"
        ],
        answer: [0],
        explanation: "Pod 是 Kubernetes 中最小和最简单的部署单元。"
    },
    {
        module: "工作负载",
        question: "Pod 的特性包括哪些？",
        type: "多选",
        options: [
            "同一 Pod 中的容器共享网络命名空间",
            "容器可以通过 Volume 共享数据",
            "Pod 通常是持久的，不会自动重建",
            "每个 Pod 都有独立的集群 IP 地址"
        ],
        answer: [0, 1, 3],
        explanation: "Pod 是临时的，可以被任意创建、销毁和替换。"
    },
    {
        module: "工作负载",
        question: "Pod 的生命周期状态包括哪些？",
        type: "多选",
        options: [
            "Pending",
            "Running",
            "Succeeded",
            "Failed"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Pod 的生命周期状态包括 Pending、Running、Succeeded、Failed 和 Unknown。"
    },
    {
        module: "工作负载",
        question: "Deployment 是最常用的控制器，它具有哪些特性？",
        type: "多选",
        options: [
            "声明式更新",
            "滚动更新",
            "回滚能力",
            "管理有状态应用"
        ],
        answer: [0, 1, 2],
        explanation: "Deployment 用于管理无状态应用，有状态应用应使用 StatefulSet。"
    },
    {
        module: "工作负载",
        question: "StatefulSet 适用于以下哪些场景？",
        type: "多选",
        options: [
            "数据库",
            "消息队列",
            "无状态 Web 应用",
            "定时任务"
        ],
        answer: [0, 1],
        explanation: "StatefulSet 用于有状态应用，如数据库和消息队列。"
    },
    {
        module: "工作负载",
        question: "StatefulSet 与 Deployment 的主要区别包括哪些？",
        type: "多选",
        options: [
            "Pod 名称有序索引",
            "独立的持久化存储",
            "有序部署和扩展",
            "自动支持多副本"
        ],
        answer: [0, 1, 2],
        explanation: "Deployment 也支持多副本。"
    },
    {
        module: "工作负载",
        question: "DaemonSet 的主要用途包括哪些？",
        type: "多选",
        options: [
            "日志收集",
            "监控代理",
            "存储插件",
            "运行有状态应用"
        ],
        answer: [0, 1, 2],
        explanation: "DaemonSet 用于在每个节点运行系统守护进程，不适合运行有状态应用。"
    },
    {
        module: "工作负载",
        question: "Job 的完成策略包括哪些？",
        type: "单选",
        options: [
            "OnFailure 和 Never",
            "OnSuccess 和 Never",
            "OnFailure 和 Always",
            "Always 和 Never"
        ],
        answer: [0],
        explanation: "Job 的 backoff 策略包括 OnFailure（失败时重启）和 Never（失败时不重启）。"
    },
    {
        module: "工作负载",
        question: "CronJob 支持以下哪些类型的定时任务？",
        type: "多选",
        options: [
            "每分钟执行",
            "每日执行",
            "每月执行",
            "随机时间执行"
        ],
        answer: [0, 1, 2],
        explanation: "CronJob 支持基于 Cron 表达式的定时任务，不能随机执行。"
    },
    {
        module: "工作负载",
        question: "Pod Disruption Budget (PDB) 的作用是？",
        type: "单选",
        options: [
            "限制 Pod 的资源使用",
            "保护关键应用，限制同时中断的 Pod 数量",
            "配置 Pod 的重启策略",
            "管理 Pod 的优先级"
        ],
        answer: [1],
        explanation: "PDB 用于保护关键应用，限制可以同时中断的 Pod 数量。"
    },
    {
        module: "工作负载",
        question: "HPA (Horizontal Pod Autoscaler) 支持哪些类型的指标？",
        type: "多选",
        options: [
            "Resource 指标",
            "Pods 指标",
            "Object 指标",
            "Network 指标"
        ],
        answer: [0, 1, 2],
        explanation: "HPA 支持 Resource、Pods 和 Object 三种指标类型。"
    },
    {
        module: "工作负载",
        question: "以下哪些是 Deployment 更新策略？",
        type: "多选",
        options: [
            "RollingUpdate",
            "Recreate",
            "BlueGreen",
            "Canary"
        ],
        answer: [0, 1],
        explanation: "Deployment 支持 RollingUpdate 和 Recreate 两种更新策略。"
    },

    // ==================== 网络 ====================
    {
        module: "网络",
        question: "Kubernetes 网络模型的原则包括哪些？",
        type: "多选",
        options: [
            "所有 Pod 不运行在 NAT 后面",
            "所有 Pod 可以直接与任何其他 Pod 通信",
            "每个 Pod 需要独特的网络配置",
            "Pod 看到的 IP 不一定是它们自己的 IP"
        ],
        answer: [0, 1],
        explanation: "Kubernetes 网络模型强调扁平网络，所有 Pod 直接通信，看到自己的 IP。"
    },
    {
        module: "网络",
        question: "Service 有哪些类型？",
        type: "多选",
        options: [
            "ClusterIP",
            "NodePort",
            "LoadBalancer",
            "Headless"
        ],
        answer: [0, 1, 2],
        explanation: "Service 类型包括 ClusterIP、NodePort、LoadBalancer 和 ExternalName。Headless 是一种特殊的 Service 配置。"
    },
    {
        module: "网络",
        question: "ClusterIP Service 的访问范围是？",
        type: "单选",
        options: [
            "仅集群内部",
            "集群内和外部",
            "仅通过节点 IP",
            "仅通过 Ingress"
        ],
        answer: [0],
        explanation: "ClusterIP Service 只能在集群内部访问。"
    },
    {
        module: "网络",
        question: "Headless Service 的主要特点是什么？",
        type: "多选",
        options: [
            "不分配 ClusterIP",
            "DNS 直接返回 Pod IP",
            "用于有状态服务",
            "自动负载均衡"
        ],
        answer: [0, 1, 2],
        explanation: "Headless Service 不分配 ClusterIP，DNS 直接返回 Pod IP，用于有状态服务。"
    },
    {
        module: "网络",
        question: "Ingress 的主要用途是？",
        type: "单选",
        options: [
            "提供 TCP/UDP 端口转发",
            "提供 HTTP/HTTPS 路由",
            "管理存储卷",
            "调度 Pod"
        ],
        answer: [1],
        explanation: "Ingress 用于 HTTP/HTTPS 路由。"
    },
    {
        module: "网络",
        question: "Ingress 的 PathType 包括哪些？",
        type: "多选",
        options: [
            "Exact",
            "Prefix",
            "ImplementationSpecific",
            "Wildcard"
        ],
        answer: [0, 1, 2],
        explanation: "PathType 包括 Exact、Prefix 和 ImplementationSpecific。"
    },
    {
        module: "网络",
        question: "网络策略（Network Policy）可以控制哪些流量？",
        type: "多选",
        options: [
            "入站流量",
            "出站流量",
            "Pod 间流量",
            "节点间流量"
        ],
        answer: [0, 1, 2],
        explanation: "网络策略控制 Pod 的入站和出站流量。"
    },
    {
        module: "网络",
        question: "CoreDNS 的作用是什么？",
        type: "单选",
        options: [
            "提供负载均衡",
            "提供服务发现和名称解析",
            "管理网络策略",
            "监控集群状态"
        ],
        answer: [1],
        explanation: "CoreDNS 是 Kubernetes 的 DNS 服务器，提供服务发现和名称解析。"
    },
    {
        module: "网络",
        question: "Kubernetes 支持以下哪些 DNS 记录类型？",
        type: "多选",
        options: [
            "A 记录",
            "SRV 记录",
            "PTR 记录",
            "MX 记录"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes DNS 主要提供 A、SRV 和 PTR 记录。"
    },
    {
        module: "网络",
        question: "拓扑感知路由的优势包括哪些？",
        type: "多选",
        options: [
            "降低延迟",
            "减少跨区域流量成本",
            "提高性能",
            "增加网络复杂度"
        ],
        answer: [0, 1, 2],
        explanation: "拓扑感知路由可以降低延迟、减少成本、提高性能。"
    },
    {
        module: "网络",
        question: "IPv4/IPv6 双栈网络支持以下哪些特性？",
        type: "多选",
        options: [
            "Pod 可以同时拥有 IPv4 和 IPv6 地址",
            "Service 可以监听 IPv4 和 IPv6",
            "客户端自动选择协议族",

            "只能使用一种协议"
        ],
        answer: [0, 1, 2],
        explanation: "双栈网络支持 Pod 同时使用 IPv4 和 IPv6，Service 监听两个协议，客户端自动选择。"
    },

    // ==================== 存储 ====================
    {
        module: "存储",
        question: "Volume 的生命周期与什么相同？",
        type: "单选",
        options: [
            "Pod",
            "Deployment",
            "Node",
            "Service"
        ],
        answer: [0],
        explanation: "Volume 的生命周期与 Pod 相同。"
    },
    {
        module: "存储",
        question: "emptyDir Volume 的主要用途包括哪些？",
        type: "多选",
        options: [
            "共享数据",
            "临时文件",
            "缓存",
            "持久化数据库",
        ],
        answer: [0, 1, 2],
        explanation: "emptyDir 是临时存储，不适合持久化数据库。"
    },
    {
        module: "存储",
        question: "PV 的访问模式包括哪些？",
        type: "多选",
        options: [
            "ReadWriteOnce (RWO)",
            "ReadOnlyMany (ROX)",
            "ReadWriteMany (RWX)",
            "ReadWriteOncePod (RWOP)"
        ],
        answer: [0, 1, 2, 3],
        explanation: "PV 支持多种访问模式，包括 RWO、ROX、RWX 和 RWOP。"
    },
    {
        module: "存储",
        question: "PV 的回收策略包括哪些？",
        type: "单选",
        options: [
            "Retain 和 Delete",
            "Retain、Delete 和 Recycle",
            "Delete 和 Recycle",
            "Retain 和 Recycle"
        ],
        answer: [1],
        explanation: "PV 回收策略包括 Retain、Delete 和 Recycle（已废弃）。"
    },
    {
        module: "存储",
        question: "静态供给和动态供给的区别是什么？",
        type: "单选",
        options: [
            "静态供给速度快",
            "动态供给需要手动创建 PV",
            "静态供给需要管理员预先创建 PV",
            "没有区别"
        ],
        answer: [2],
        explanation: "静态供给需要管理员预先创建 PV，动态供给通过 StorageClass 自动创建。"
    },
    {
        module: "存储",
        question: "StorageClass 的字段包括哪些？",
        type: "多选",
        options: [
            "provisioner",
            "parameters",
            "reclaimPolicy",
            "volumeBindingMode"
        ],
        answer: [0, 1, 2, 3],
        explanation: "StorageClass 包含 provisioner、parameters、reclaimPolicy、volumeBindingMode 等字段。"
    },
    {
        module: "存储",
        question: "volumeBindingMode 有哪些选项？",
        type: "多选",
        options: [
            "Immediate",
            "WaitForFirstConsumer",
            "Async",
            "Manual"
        ],
        answer: [0, 1],
        explanation: "volumeBindingMode 包括 Immediate 和 WaitForFirstConsumer。"
    },
    {
        module: "存储",
        question: "卷快照（Volume Snapshot）的用途包括哪些？",
        type: "多选",
        options: [
            "备份",
            "恢复",
            "克隆",
            "加密"
        ],
        answer: [0, 1, 2],
        explanation: "卷快照用于备份、恢复和克隆卷，不用于加密。"
    },
    {
        module: "存储",
        question: "本地临时存储（Ephemeral Storage）的来源包括哪些？",
        type: "多选",
        options: [
            "容器镜像层",
            "可写容器层",
            "日志",
            "持久化卷"
        ],
        answer: [0, 1, 2],
        explanation: "本地临时存储包括容器镜像层、可写层和日志。"
    },
    {
        module: "存储",
        question: "PVC 的特点包括哪些？",
        type: "多选",
        options: [
            "命名空间资源",
            "自动绑定到满足条件的 PV",
            "声明式请求存储",
            "跨命名空间共享"
        ],
        answer: [0, 1, 2],
        explanation: "PVC 是命名空间资源，不能跨命名空间共享。"
    },

    // ==================== 配置 ====================
    {
        module: "配置",
        question: "ConfigMap 和 Secret 的主要区别是什么？",
        type: "多选",
        options: [
            "Secret 数据经过 Base64 编码",
            "Secret 用于存储敏感数据",
            "ConfigMap 不支持加密",
            "Secret 比 ConfigMap 大"
        ],
        answer: [0, 1],
        explanation: "Secret 用于存储敏感数据，数据经过 Base64 编码。ConfigMap 也可以配置加密，不是主要区别。"
    },
    {
        module: "配置",
        question: "ConfigMap 可以通过以下哪些方式注入到 Pod？",
        type: "多选",
        options: [
            "作为环境变量",
            "挂载为配置文件",
            "命令行参数",
            "直接修改镜像"
        ],
        answer: [0, 1, 2],
        explanation: "ConfigMap 可以作为环境变量、挂载为文件或命令行参数，不能直接修改镜像。"
    },
    {
        module: "配置",
        question: "Secret 的类型包括哪些？",
        type: "多选",
        options: [
            "Opaque",
            "kubernetes.io/service-account-token",
            "kubernetes.io/tls",
            "kubernetes.io/json"
        ],
        answer: [0, 1, 2],
        explanation: "Secret 类型包括 Opaque、service-account-token、dockerconfigjson、basic-auth、ssh-auth、tls 等。"
    },
    {
        module: "配置",
        question: "探针（Probes）包括 Liveness、Readiness 和 Startup 探针，它们的用途是什么？",
        type: "多选",
        options: [
            "Liveness：检测容器是否正常运行",
            "Readiness：检测容器是否准备好接收流量",
            "Startup：检测容器是否启动完成",
            "Health：检测应用整体健康"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 只有 Liveness、Readiness 和 Startup 三种探针。"
    },
    {
        module: "配置",
        question: "资源的 Requests 和 Limits 的作用是什么？",
        type: "多选",
        options: [
            "Requests 用于调度决策",
            "Limits 限制资源使用",
            "两者都设置可以提高 QoS",
            "只设置 Limit 就可以保证资源",

        ],
        answer: [0, 1, 2],
        explanation: "设置 Request 可以保证资源，两者都设置可以获得更高的 QoS。"
    },
    {
        module: "配置",
        question: "Kubernetes 的 QoS（服务质量）类包括哪些？",
        type: "多选",
        options: [
            "Guaranteed",
            "Burstable",
            "BestEffort",
            "Critical"
        ],
        answer: [0, 1, 2],
        explanation: "QoS 类包括 Guaranteed、Burstable 和 BestEffort。"
    },
    {
        module: "配置",
        question: "Downward API 允许容器获取哪些信息？",
        type: "多选",
        options: [
            "Pod 名称",
            "Pod IP",
            "Pod 标签和注解",
            "节点物理硬件信息"
        ],
        answer: [0, 1, 2],
        explanation: "Downward API 可以获取 Pod 的元数据，不包含节点的物理硬件信息。"
    },
    {
        module: "配置",
        question: "ConfigMap 挂载为文件时，更新行为如何？",
        type: "单选",
        options: [
            "不自动更新",
            "自动更新",
            "需要重启 Pod 才能更新",
            "不支持更新"
        ],
        answer: [1],
        explanation: "ConfigMap 作为文件挂载时会自动更新。作为环境变量时需要重启 Pod。"
    },
    {
        module: "配置",
        question: "Secret 的安全性措施包括哪些？",
        type: "多选",
        options: [
            "Base64 编码",
            "etcd 加密",
            "RBAC 访问控制",
            "最小权限挂载"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Secret 通过多种措施提高安全性。"
    },
    {
        module: "配置",
        question: "探针的 timeoutSeconds 参数的作用是什么？",
        type: "单选",
        options: [
            "探测间隔时间",
            "探测超时时间",
            "探针启动延迟",
            "失败阈值"
        ],
        answer: [1],
        explanation: "timeoutSeconds 是探测的超时时间。"
    },

    // ==================== 调度 ====================
    {
        module: "调度",
        question: "Kubernetes 调度器通过哪两个阶段完成调度？",
        type: "多选",
        options: [
            "预选阶段（Filtering）",
            "优选阶段（Scoring）",
            "分配阶段",
            "执行阶段"
        ],
        answer: [0, 1],
        explanation: "调度器通过预选和优选阶段完成调度。"
    },
    {
        module: "调度",
        question: "节点选择器（Node Selector）的局限性是什么？",
        type: "多选",
        options: [
            "只能基于标签的精确匹配",
            "不支持复杂的条件表达式",
            "不支持优先级",
            "不能与亲和性同时使用"
        ],
        answer: [0, 1, 2],
        explanation: "节点选择器可以与亲和性同时使用。"
    },
    {
        module: "调度",
        question: "节点亲和性类型包括哪些？",
        type: "单选",
        options: [
            "required 和 preferred",
            "hard 和 soft",
            "must and should",
            "strict and loose"
        ],
        answer: [0],
        explanation: "节点亲和性类型包括 requiredDuringScheduling 和 preferredDuringScheduling。"
    },
    {
        module: "调度",
        question: "Pod 亲和性操作符包括哪些？",
        type: "多选",
        options: [
            "In",
            "NotIn",
            "Exists",
            "DoesNotExist"
        ],
        answer: [0, 1, 2, 3],
        explanation: "操作符包括 In、NotIn、Exists、DoesNotExist、Gt、Lt。"
    },
    {
        module: "调度",
        question: "污点效果（Taint Effect）包括哪些？",
        type: "多选",
        options: [
            "NoSchedule",
            "PreferNoSchedule",
            "NoExecute",
            "NoTolerate"
        ],
        answer: [0, 1, 2],
        explanation: "污点效果包括 NoSchedule、PreferNoSchedule 和 NoExecute。"
    },
    {
        module: "调度",
        question: "默认的节点污点包括哪些？",
        type: "多选",
        options: [
            "node-role.kubernetes.io/master",
            "node-role.kubernetes.io/control-plane",
            "node.kubernetes.io/not-ready",
            "node.kubernetes.io/ready"
        ],
        answer: [0, 1, 2],
        explanation: "默认污点包括 master、control-plane、not-ready、unreachable 等。"
    },
    {
        module: "调度",
        question: "拓扑传播约束的参数包括哪些？",
        type: "多选",
        options: [
            "maxSkew",
            "topologyKey",
            "whenUnsatisfiable",
            "minSkew"
        ],
        answer: [0, 1, 2],
        explanation: "拓扑传播约束的参数包括 maxSkew、topologyKey 和 whenUnsatisfiable。"
    },
    {
        module: "调度",
        question: "Pod 优先级和抢占的作用是什么？",
        type: "多选",
        options: [
            "确保重要 Pod 能够运行",
            "高优先级可以抢占低优先级资源",
            "提高集群资源利用率",
            "降低网络延迟"
        ],
        answer: [0, 1],
        explanation: "优先级和抢占确保重要 Pod 能够运行，不一定提高资源利用率。"
    },
    {
        module: "调度",
        question: "系统保留的优先级类有哪些？",
        type: "多选",
        options: [
            "system-cluster-critical",
            "system-node-critical",
            "system-pod-critical",
            "system-application-critical"
        ],
        answer: [0, 1],
        explanation: "系统保留的优先级类包括 system-cluster-critical 和 system-node-critical。"
    },
    {
        module: "调度",
        question: "拓扑域（Topology Key）包括哪些？",
        type: "多选",
        options: [
            "kubernetes.io/hostname",
            "topology.kubernetes.io/zone",
            "topology.kubernetes.io/region",
            "node.kubernetes.io/disk"
        ],
        answer: [0, 1, 2],
        explanation: "常用拓扑域包括 hostname、zone、region。"
    },

    // ==================== 集群管理 ====================
    {
        module: "集群管理",
        question: "节点状态包括哪些？",
        type: "多选",
        options: [
            "Ready",
            "NotReady",
            "Unknown",
            "Running"
        ],
        answer: [0, 1, 2],
        explanation: "节点状态包括 Ready、NotReady 和 Unknown。Running 是 Pod 的状态。"
    },
    {
        module: "集群管理",
        question: "排空节点（drain）的作用是什么？",
        type: "单选",
        options: [
            "关闭节点",
            "驱逐节点上所有 Pod（DaemonSet 除外）",
            "重启节点服务",
            "清理节点缓存"
        ],
        answer: [1],
        explanation: "drain 会驱逐节点上所有 Pod，DaemonSet 除外。"
    },
    {
        module: "集群管理",
        question: "集群升级的最佳实践包括哪些？",
        type: "多选",
        options: [
            "一次升级一个小版本",
            "升级前备份 etcd",
            "充分测试后再升级",
            "跨版本升级以节省时间"
        ],
        answer: [0, 1, 2],
        explanation: "不应该跨版本升级。"
    },
    {
        module: "集群管理",
        question: "Kubernetes 监控包括哪些层次？",
        type: "多选",
        options: [
            "基础设施层",
            "集群层",
            "应用层",
            "网络层"
        ],
        answer: [0, 1, 2],
        explanation: "监控包括基础设施、集群和应用三个层次。"
    },
    {
        module: "集群管理",
        question: "常用的监控工具包括哪些？",
        type: "多选",
        options: [
            "Prometheus",
            "Grafana",
            "Metrics Server",
            "ElasticSearch"
        ],
        answer: [0, 1, 2],
        explanation: "常用的监控工具包括 Prometheus、Grafana、Metrics Server、Kube-state-metrics 等。"
    },
    {
        module: "集群管理",
        question: "Kubernetes 日志类型包括哪些？",
        type: "多选",
        options: [
            "容器日志",
            "系统日志",
            "审计日志",
            "节点日志（容器日志）"
        ],
        answer: [0, 1, 2],
        explanation: "日志类型包括容器日志、系统日志、审计日志和事件日志。"
    },
    {
        module: "集群管理",
        question: "常用的日志收集工具包括哪些？",
        type: "多选",
        options: [
            "Fluentd",
            "Fluent Bit",
            "Logstash",
            "MySQL"
        ],
        answer: [0, 1, 2],
        explanation: "日志收集工具包括 Fluentd、Fluent Bit、Logstash、Filebeat 等。"
    },
    {
        module: "集群管理",
        question: "常见的 Pod 状态问题有哪些？",
        type: "多选",
        options: [
            "ImagePullBackOff",
            "CrashLoopBackOff",
            "OOMKilled",
            "Ready"
        ],
        answer: [0, 1, 2],
        explanation: "Ready 是正常状态，其他是问题状态。"
    },
    {
        module: "集群管理",
        question: "ImagePullBackOff 的常见原因有哪些？",
        type: "多选",
        options: [
            "镜像名称错误",
            "镜像仓库凭证问题",
            "网络问题",
            "节点资源不足"
        ],
        answer: [0, 1, 2],
        explanation: "镜像拉取失败通常是镜像名称、凭证或网络问题，资源不足会导致其他状态。"
    },
    {
        module: "集群管理",
        question: "etcd 备份和恢复的重要性是什么？",
        type: "多选",
        options: [
            "etcd 存储集群所有状态",
            "备份用于灾难恢复",
            "支持集群迁移",
            "提高集群性能"
        ],
        answer: [0, 1, 2],
        explanation: "etcd 备份有助于灾难恢复和集群迁移，不直接提高性能。"
    },
    {
        module: "集群管理",
        question: "Velero 是什么工具？",
        type: "单选",
        options: [
            "监控工具",
            "日志收集工具",
            "备份和恢复工具",
            "网络策略工具"
        ],
        answer: [2],
        explanation: "Velero 是 Kubernetes 的备份和恢复工具。"
    },
    {
        module: "集群管理",
        question: "查看 Pod 日志的常用命令是什么？",
        type: "单选",
        options: [
            "kubectl get logs",
            "kubectl logs",
            "kubectl show logs",
            "kubectl view logs"
        ],
        answer: [1],
        explanation: "kubectl logs 用于查看 Pod 日志。"
    }
];

// 模块列表
const modules = [...new Set(questions.map(q => q.module))];

// 导出数据
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { questions, modules };
}
