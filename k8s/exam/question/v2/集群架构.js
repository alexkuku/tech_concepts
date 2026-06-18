// Kubernetes 概念测评 - 集群架构 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 66
// 覆盖: 集群架构

const questions = [
    // ========== 第1部分：控制平面组件 ==========

    {
        module: "集群架构",
        question: "Kubernetes 控制平面的主要作用是什么？",
        type: "多选",
        options: [
            "对集群做出全局决策",
            "检测和响应集群事件",
            "调度 Pod 到合适的节点",
            "管理容器运行时"
        ],
        answer: [0, 1, 2],
        explanation: "控制平面的主要作用包括：对集群做出全局决策（如调度）、检测和响应集群事件（如启动新 Pod）、调度 Pod 到合适的节点。管理容器运行时是工作节点的职责。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "kube-apiserver 作为 Kubernetes 控制平面的前端，具有哪些特性？",
        type: "多选",
        options: [
            "暴露 Kubernetes API",
            "支持水平扩展",
            "处理 RESTful 操作",
            "存储集群数据"
        ],
        answer: [0, 1, 2],
        explanation: "kube-apiserver 暴露 Kubernetes API，支持水平扩展（可运行多个实例），处理 RESTful 操作。它不存储集群数据，数据存储在 etcd 中。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "etcd 在 Kubernetes 架构中的作用是什么？",
        type: "单选",
        options: [
            "容器运行时",
            "集群数据的一致性、高可用键值存储",
            "网络代理",
            "日志收集器"
        ],
        answer: [1],
        explanation: "etcd 是 Kubernetes 所有集群数据的一致性、高可用键值存储后端。它存储配置数据、状态信息和集群元数据，是控制平面的核心组件。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "kube-scheduler 如何选择 Pod 的运行节点？",
        type: "单选",
        options: [
            "随机选择可用节点",
            "基于资源需求、策略约束、亲和性等规则选择最合适的节点",
            "选择资源最多的节点",
            "选择负载最低的节点"
        ],
        answer: [1],
        explanation: "kube-scheduler 基于资源需求（CPU、内存）、策略约束（亲和性、污点和容忍度）、数据局部性、QoS 等规则，为未分配的 Pod 选择最合适的运行节点。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "kube-controller-manager 包含哪些控制器？",
        type: "多选",
        options: [
            "节点控制器",
            "Job 控制器",
            "EndpointSlice 控制器",
            "ServiceAccount 控制器",
            "网络控制器"
        ],
        answer: [0, 1, 2, 3],
        explanation: "kube-controller-manager 运行多种控制器进程，包括：节点控制器（监控节点状态）、Job 控制器（管理 Job）、EndpointSlice 控制器（管理 Service 端点）、ServiceAccount 控制器（管理服务账户）。",
        difficulty: "进阶"
    },

    // ========== 第2部分：工作节点组件 ==========

    {
        module: "集群架构",
        question: "kubelet 的主要职责是什么？",
        type: "多选",
        options: [
            "确保 PodSpec 中描述的容器正常运行",
            "定期向 API Server 报告节点状态",
            "下载容器镜像",
            "管理容器生命周期"
        ],
        answer: [0, 1, 2, 3],
        explanation: "kubelet 是运行在每个节点上的代理，主要职责包括：确保 PodSpec 中描述的容器正常运行、定期向 API Server 报告节点状态、下载容器镜像、启动和停止容器、监控容器健康。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "kube-proxy 是如何实现 Serviceload balancing 的？",
        type: "多选",
        options: [
            "维护 iptables 或 ipvs 规则",
            "处理 Service 和 EndpointSlice 对象的变更",
            "在每个节点上运行网络代理",
            "与容器运行时直接通信"
        ],
        answer: [0, 1, 2],
        explanation: "kube-proxy 在每个节点上运行，通过维护 iptables 或 ipvs 规则实现负载均衡。它监听 Service 和 EndpointSlice 对象的变更，并相应地更新数据平面的网络规则。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "容器运行时在 Kubernetes 中的角色是什么？",
        type: "单选",
        options: [
            "调度 Pod 到节点",
            "管理 Kubernetes 环境中容器的执行和生命周期",
            "存储集群数据",
            "管理网络策略"
        ],
        answer: [1],
        explanation: "容器运行时负责运行容器，下载容器镜像、管理容器生命周期、提供容器联网等。Kubernetes 通过容器运行时接口（CRI）与容器运行时交互。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "Kubernetes 支持哪些容器运行时？",
        type: "多选",
        options: [
            "containerd",
            "CRI-O",
            "Docker Engine（通过 CRI 兼容器运行时）",
            "rkt"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 支持任何实现了容器运行时接口（CRI）的运行时，包括 containerd、CRI-O。Docker Engine 通过 dockershim（已废弃）或直接安装 CRI 兼容组件也可使用。rkt 曾支持但已移除。",
        difficulty: "进阶"
    },

    // ========== 第3部分：节点（Node） ==========

    {
        module: "集群架构",
        question: "Kubernetes 中的节点是什么？",
        type: "单选",
        options: [
            "一个容器",
            "集群中的工作机器（虚拟机或物理机）",
            "一个控制器",
            "一个存储卷"
        ],
        answer: [1],
        explanation: "节点是 Kubernetes 集群中的工作机器，可以是虚拟机或物理机。节点运行容器化应用，由控制平面管理。节点之前称为 Minion。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "节点向控制平面报告状态的方式是什么？",
        type: "多选",
        options: [
            "kubelet 定期向 API Server 发送心跳",
            "kubelet 报告节点上的 Pod 状态",
            "节点控制器监测节点健康状态",
            "kube-proxy 报告网络状态"
        ],
        answer: [0, 1, 2],
        explanation: "kubelet 定期向 API Server 发送心跳报告节点状态，同时报告节点上运行的 Pod 状态。控制平面的节点控制器监测节点健康状态，当节点不健康时进行相应的处理。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "当节点被标记为 NotReady 时，可能的原因是什么？",
        type: "多选",
        options: [
            "kubelet 守护进程停止",
            "节点磁盘压力",
            "节点网络不可达",
            "节点内存不足"
        ],
        answer: [0, 1, 2, 3],
        explanation: "节点可能因以下原因被标记为 NotReady：kubelet 守护进程停止、节点磁盘压力过大、节点网络不可达、节点内存不足（内存压力）。kubelet 会报告节点状况，控制器会做出相应的决策。",
        difficulty: "进阶"
    },

    // ========== 第4部分：控制器 ==========

    {
        module: "集群架构",
        question: "Kubernetes 控制器的工作原理是什么？",
        type: "单选",
        options: [
            "命令式执行任务",
            "监视集群期望状态和当前状态，驱使当前状态向期望状态移动",
            "定期清理无用资源",
            "根据用户命令直接执行操作"
        ],
        answer: [1],
        explanation: "Kubernetes 控制器的工作原理是：监视集群的期望状态（用户定义）和当前状态（集群实际状态），通过控制循环驱使当前状态向期望状态移动。这是声明式 API 的核心。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "以下哪些是 Kubernetes 控制器的例子？",
        type: "多选",
        options: [
            "ReplicaSet 控制器",
            "Deployment 控制器",
            "Job 控制器",
            "CronJob 控制器"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 的所有控制器都遵循相同的工作模式，例子包括：ReplicaSet 控制器（确保指定数量的 Pod 副本运行）、Deployment 控制器（管理 Deployment）、Job 控制器（管理一次性任务）、CronJob 控制器（管理定时任务）。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "控制器如何使用最终一致性协调集群状态？",
        type: "单选",
        options: [
            "通过手动干预",
            "通过持续的 Reconciliation 循环"
        ],
        answer: [1],
        explanation: "控制器通过持续的 Reconciliation（协调）循环工作：观察资源的当前状态，将其与期望状态比较，然后执行操作以使实际状态匹配期望状态。这种模式保证了最终一致性。",
        difficulty: "高级"
    },

    // ========== 第5部分：租约（Lease） ==========

    {
        module: "集群架构",
        question: "Kubernetes 中的租约（Lease）机制用于什么？",
        type: "多选",
        options: [
            "节点健康检查",
            "领导选举",
            "资源配额管理",
            "存储配额监控"
        ],
        answer: [0, 1],
        explanation: "租约（Lease）机制用于节点健康检查和领导选举。节点通过更新租约对象报告其健康状态，控制器（如 kube-controller-manager）使用租约进行领导者选举，确保只有一个实例作为主控制器运行。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "节点租约（Node Lease）的工作方式是什么？",
        type: "单选",
        options: [
            "节点定期更新 Lease 对象以报告其活跃状态",
            "节点向所有其他节点发送心跳",
            "API Server 定期 ping 节点",
            "kube-proxy 报告节点状态"
        ],
        answer: [0],
        explanation: "节点租约的工作方式是：kubelet 定期更新该节点的 Lease 对象以报告其活跃状态。如果 Lease 对象长时间未更新，控制平面会认为节点不健康并做出相应的处理。",
        difficulty: "进阶"
    },

    // ========== 第6部分：云控制器管理器 ==========

    {
        module: "集群架构",
        question: "cloud-controller-manager 的作用是什么？",
        type: "单选",
        options: [
            "管理所有网络策略",
            "嵌入特定云供应商控制逻辑，将控制平面与特定云平台解耦",
            "替代 kube-apiserver",
            "提供本地存储管理"
        ],
        answer: [1],
        explanation: "cloud-controller-manager 嵌入特定云供应商控制逻辑（如节点生命周期管理、路由管理、负载均衡器管理），将控制平面与特定云平台解耦，便于 Kubernetes 在不同云平台间移植。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "cloud-controller-manager 包含哪些控制器？",
        type: "多选",
        options: [
            "节点控制器",
            "路由控制器",
            "服务控制器",
            "Ingress 控制器"
        ],
        answer: [0, 1, 2],
        explanation: "cloud-controller-manager 包含：节点控制器（针对云平台的节点管理）、路由控制器（管理路由）、服务控制器（管理负载均衡器等云服务）。Ingress 控制器通常属于网络插件。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "在裸金属环境或本地部署中，cloud-controller-manager 的作用是什么？",
        type: "单选",
        options: [
            "仍然必需，无法移除",
            "可以省略或使用无云实现，因为不需要云提供商特定的逻辑",
            "必须使用某个云提供商的实现",
            "只用于网络管理"
        ],
        answer: [1],
        explanation: "在裸金属环境或本地部署中，cloud-controller-manager 可以省略或使用无云实现（如 cloud-provider 中的 none 模式），因为没有云提供商特定的逻辑需要处理。",
        difficulty: "进阶"
    },

    // ========== 第7部分：自愈（Self-healing） ==========

    {
        module: "集群架构",
        question: "Kubernetes 的自愈能力包括哪些？",
        type: "多选",
        options: [
            "重启失败的容器",
            "重新调度节点上失效的 Pod",
            "替换不健康的节点",
            "监控和修复网络问题"
        ],
        answer: [0, 1],
        explanation: "Kubernetes 的自愈能力包括：重启失败的容器（通过 kubelet）、重新调度节点上失效的 Pod（通过控制器）。它不自动替换不健康的节点，也不修复网络问题。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "当容器退出时，kubelet 如何处理？",
        type: "单选",
        options: [
            "立即删除 Pod",
            "根据容器的 restartPolicy 决定是否重启",
            "只记录日志",
            "向用户发送通知"
        ],
        answer: [1],
        explanation: "当容器退出时，kubelet 根据 Pod 中定义的 restartPolicy 决定是否重启容器：Always（总是重启）、OnFailure（失败时重启）、Never（不重启）。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "Pod 有哪些重启策略？",
        type: "多选",
        options: [
            "Always",
            "OnFailure",
            "Never",
            "UnlessStopped"
        ],
        answer: [0, 1, 2],
        explanation: "Pod 的重启策略包括：Always（总是重启，适合工作负载）、OnFailure（仅在失败时重启）、Never（永不重启，适合 Job）。UnlessStopped 不是 Kubernetes 中的选项。",
        difficulty: "基础"
    },

    // ========== 第8部分：垃圾回收（Garbage Collection） ==========

    {
        module: "集群架构",
        question: "Kubernetes 的垃圾回收机制用于什么？",
        type: "单选",
        options: [
            "回收容器内存",
            "清理未使用的资源和删除关联的从属对象",
            "清理日志文件",
            "监控 CPU 使用率"
        ],
        answer: [1],
        explanation: "Kubernetes 的垃圾回收机制用于清理未使用的资源以及删除所有者对象时自动删除关联的从属对象（如删除 Deployment 时删除其管理的 Pod）。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "以下哪些情况会触发垃圾回收？",
        type: "多选",
        options: [
            "删除所有者对象时，自动删除从属对象",
            "设置 ownerReference 字段建立依赖关系",
            "使用 finalizer 阻止删除",
            "手动删除孤立 Pod"
        ],
        answer: [0, 1],
        explanation: "垃圾回收在删除所有者对象时自动删除从属对象，前提是建立了 ownerReference 字段。finalizer 用于控制删除行为，延迟删除。孤立 Pod 指当所有者资源被删除后未删除的从属对象，需要手动处理或垃圾回收。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "ownerReference 字段的作用是什么？",
        type: "单选",
        options: [
            "标识对象的创建者",
            "建立对象间的依赖关系，用于垃圾回收",
            "记录对象的修改历史",
            "控制对象的访问权限"
        ],
        answer: [1],
        explanation: "ownerReference 字段用于建立对象间的从属关系，让垃圾回收机制在删除所有者对象时能够自动删除从属对象。这是 Kubernetes 中管理对象生命周期的重要机制。",
        difficulty: "进阶"
    },

    // ========== 第9部分：混合版本代理 ==========

    {
        module: "集群架构",
        question: "混合版本代理（Mixed Version Proxy）的作用是什么？",
        type: "单选",
        options: [
            "加速集群升级",
            "允许控制平面和节点运行不同的 Kubernetes 版本",
            "提供负载均衡",
            "管理网络通信"
        ],
        answer: [1],
        explanation: "混合版本代理允许控制平面和节点运行不同的 Kubernetes 版本，支持集群的滚动升级。通过 API 的兼容性保证，不同版本的组件可以协同工作。",
        difficulty: "高级"
    },
    {
        module: "集群架构",
        question: "集群升级过程中，如何保证服务不中断？",
        type: "多选",
        options: [
            "逐个节点升级，确保有足够的可用节点",
            "使用混合版本代理支持多版本共存",
            "设置 PodDisruptionBudget 保护关键应用",
            "直接升级所有节点"
        ],
        answer: [0, 1, 2],
        explanation: "集群升级可以通过：逐个节点滚动升级，确保有足够的可用节点运行 Pods；使用混合版本代理支持多版本共存；设置 PodDisruptionBudget 保护关键应用，确保升级期间有足够的副本在运行。直接升级所有节点会导致服务中断。",
        difficulty: "进阶"
    },

    // ========== 第10部分：cgroup v2 ==========

    {
        module: "集群架构",
        question: "cgroup v2 对 Kubernetes 的影响是什么？",
        type: "多选",
        options: [
            "提供更好的资源隔离",
            "改进容器资源管理和调度",
            "需要特定的配置和内核版本",
            "完全替代 cgroup v1"
        ],
        answer: [0, 1, 2],
        explanation: "cgroup v2 提供更好的资源隔离、改进容器资源管理和调度（如内存控制器）。Kubernetes 支持使用 cgroup v2，但需要较高版本的内核（通常 5.x+）和正确的配置。cgroup v1 和 v2 可以共存，但系统只能使用其中一种。",
        difficulty: "高级"
    },
    {
        module: "集群架构",
        question: "如何为 Kubernetes 集群启用 cgroup v2？",
        type: "单选",
        options: [
            "通过 kubectl 命令启用",
            "在内核参数和容器运行时配置中启用",
            "自动启用，无需配置",
            "无法启用，不支持"
        ],
        answer: [1],
        explanation: "启用 cgroup v2 需要在内核启动参数（如 GRUB 配置）中设置 systemd.unified_cgroup_hierarchy=1，并确保容器运行时（如 containerd、CRI-O）支持 cgroup v2。不是通过 kubectl 启用的。",
        difficulty: "高级"
    },

    // ========== 第11部分：控制器细节 ==========

    {
        module: "集群架构",
        question: "节点控制器的主要职责是什么？",
        type: "单选",
        options: [
            "创建和删除节点",
            "监控节点状态，在节点不健康时做出反应",
            "调度 Pod 到节点",
            "管理节点上的容器"
        ],
        answer: [1],
        explanation: "节点控制器监控节点状态，检查节点是否健康（如 kubelet 是否响应），在节点不健康时做出反应（如标记节点为 NotReady、驱逐该节点上的 Pod）。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "端点切片（EndpointSlice）控制器的作用是什么？",
        type: "单选",
        options: [
            "创建和管理 EndpointSlice 对象",
            "管理 Pod 生命周期",
            "调度 Pod 到节点",
            "存储集群数据"
        ],
        answer: [0],
        explanation: "EndpointSlice 控制器创建和管理 EndpointSlice 对象，用于跟踪 Service 后端的 Pod。它根据 Service 和 Pod 的变更（如 Pod IP 变化、Pod 上下线）动态更新终端点信息。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "ServiceAccount 控制器的职责是什么？",
        type: "单选",
        options: [
            "管理用户账户",
            "为每个命名空间创建默认的 ServiceAccount",
            "管理节点身份认证",
            "管理存储卷权限"
        ],
        answer: [1],
        explanation: "ServiceAccount 控制器为每个命名空间创建默认的 ServiceAccount，并维护 ServiceAccount 的 Secret（包含 token）。ServiceAccount 用于 Pod 在集群内部的认证和授权。",
        difficulty: "进阶"
    },

    // ========== 第12部分：kubelet 细节 ==========

    {
        module: "集群架构",
        question: "kubelet 如何与 API Server 通信？",
        type: "多选",
        options: [
            "通过 kubeconfig 文件中的凭证认证",
            "使用 Kubernetes API",
            "通过 TLS 加密通信",
            "通过 SSH 连接"
        ],
        answer: [0, 1, 2],
        explanation: "kubelet 通过 kubeconfig 文件中的凭证（如 token 或证书）认证，使用 HTTPS 与 Kubernetes API Server 安全通信。kubelet 使用 TLS 进行加密，确保通信安全。不使用 SSH。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "kubelet 如何监控 Pod 健康状态？",
        type: "多选",
        options: [
            "通过探针（Probe）：存活探针、就绪探针",
            "监听容器运行时的状态",
            "向 API Server 定期报告容器状态",
            "通过检查容器日志"
        ],
        answer: [0, 1, 2],
        explanation: "kubelet 通过探针（Probe）监控容器健康：存活探针检测应用是否运行，就绪探针检测应用是否准备好接收流量。同时，kubelet 监听容器运行时的状态，并定期向 API Server 报告容器状态。检查容器日志不是主要手段。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "kubelet 如何处理资源配额？",
        type: "单选",
        options: [
            "忽略配额，由控制平面管理",
            "基于 Pod 的 requests 和 limits 管理容器资源使用",
            "由容器运行时限制",
            "定期清理资源"
        ],
        answer: [1],
        explanation: "kubelet 基于 Pod 中定义的 requests（资源需求）和 limits（资源限制）管理容器的资源使用，通过 cgroups 限制容器对 CPU 和内存的使用。控制平面决定调度，kubelet 负责实际执行资源限制。",
        difficulty: "进阶"
    },

    // ========== 第13部分：API Server 细节 ==========

    {
        module: "集群架构",
        question: "kube-apiserver 支持哪些认证方式？",
        type: "多选",
        options: [
            "客户端证书",
            "Bearer Token",
            "HTTP Basic 认证",
            "OpenID Connect"
        ],
        answer: [0, 1, 2, 3],
        explanation: "kube-apiserver 支持多种认证方式：客户端证书、Bearer Token、HTTP Basic 认证、OpenID Connect、Webhook 认证等。可以根据集群的安全需求配置多种认证插件。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "kube-apiserver 支持哪些授权方式？",
        type: "多选",
        options: [
            "Node 授权",
            "ABAC（基于属性的访问控制）",
            "RBAC（基于角色的访问控制）",
            "Webhook 授权"
        ],
        answer: [0, 1, 2, 3],
        explanation: "kube-apiserver 支持多种授权方式：Node 授权（用于 kubelet）、ABAC、RBAC（推荐）、Webhook 授权。RBAC 是 Kubernetes 推荐的授权方式，提供灵活的权限管理。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: " Admission Controller 在 kube-apiserver 中起什么作用？",
        type: "多选",
        options: [
            "在持久化对象之前拦截请求",
            "验证和修改请求内容",
            "实现准入控制策略",
            "提供负载均衡"
        ],
        answer: [0, 1, 2],
        explanation: "Admission Controller 在对象持久化到 etcd 之前拦截 API Server 请求，验证和修改请求内容，实现准入控制策略。可以用于强制执行配置规则、资源限制、配额等。",
        difficulty: "高级"
    },

    // ========== 第14部分：etcd 细节 ==========

    {
        module: "集群架构",
        question: "etcd 集群的配置要求是什么？",
        type: "单选",
        options: [
            "必须只使用一个 etcd 实例",
            "建议使用奇数个实例（如3、5、7）组成 etcd 集群",
            "必须使用偶数个实例",
            "实例数量无限制"
        ],
        answer: [1],
        explanation: "etcd 集群建议使用奇数个实例（如3、5、7）组成集群，以实现高可用和一致性。奇数个实例可以在大多数实例故障时仍然工作（Raft 共识算法要求）。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "etcd 如何保证数据一致性？",
        type: "单选",
        options: [
            "通过主从复制",
            "使用 Raft 共识算法实现强一致性",
            "通过最终一致性",
            "通过两阶段提交"
        ],
        answer: [1],
        explanation: "etcd 使用 Raft 共识算法实现强一致性，确保在大多数节点故障时集群仍然可用且数据一致。Raft 是分布式一致性算法，提供线性一致性的读写。",
        difficulty: "高级"
    },
    {
        module: "集群架构",
        question: "如何备份和恢复 etcd 数据？",
        type: "多选",
        options: [
            "使用 etcdctl 提供的snapshot 命令备份",
            "定期备份 etcd 数据目录",
            "通过备份 Kubernetes 资源实现",
            "无法备份 etcd 数据"
        ],
        answer: [0, 1],
        explanation: "可以使用 etcdctl 提供的 snapshot 命令（如 etcdctl snapshot save）备份 etcd 数据，也可以定期备份 etcd 数据目录。备份 Kubernetes 资源（如保存 YAML 文件）是额外的保护措施，不能替代 etcd 备份。",
        difficulty: "高级"
    },

    // ========== 第15部分：部署架构 ==========

    {
        module: "集群架构",
        question: "生产环境中控制平面的部署方式是什么？",
        type: "单选",
        options: [
            "使用单台计算机运行所有控制平面组件",
            "跨多台计算机运行控制平面组件以实现高可用",
            "使用容器的控制平面部署",
            "使用云托管服务的控制平面"
        ],
        answer: [1],
        explanation: "在生产环境中，控制平面通常跨多台计算机运行，每个组件多个实例，实现高可用和容错。单台计算机或容器的部署方式用于开发和测试，不适合生产环境。",
        difficulty: "基础"
    },
    {
        module: "集群架构",
        question: "为什么控制平面需要高可用配置？",
        type: "多选",
        options: [
            "避免单点故障导致整个集群不可用",
            "提高集群的可扩展性",
            "保证持续的服务能力和控制能力",
            "减少资源消耗"
        ],
        answer: [0, 2],
        explanation: "控制平面高可用配置的原因：避免单点故障导致整个集群不可用（如控制器停止后 Pod 失效后无法恢复）、保证持续的服务能力和控制能力。可扩展性与负载均衡有关，不是高可用的直接原因。高可用通常会增加资源消耗。",
        difficulty: "基础"
    },

    // ========== 第16部分：控制器故障场景 ==========
    {
        module: "集群架构",
        question: "当 kube-scheduler 进程停止运行时，会对集群产生什么影响？",
        type: "单选",
        options: [
            "已运行的 Pod 会立即停止",
            "Pod 状态更新会失败",
            "新创建的 Pod 不会被调度到节点上",
            "节点会进入 NotReady 状态"
        ],
        answer: [2],
        explanation: "当 kube-scheduler 停止时，调度功能不可用，新创建的 Pod 无法被分配到节点，会一直处于 Pending 状态。已运行的 Pod 不受影响，节点状态更新由 kubelet 负责，不受调度器影响。这突出了单一控制平面组件故障的影响范围。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "以下哪些组件停止运行会直接影响 Pod 初始调度？",
        type: "多选",
        options: [
            "kube-apiserver",
            "kube-scheduler",
            "kube-controller-manager",
            "kube-proxy"
        ],
        answer: [0, 1],
        explanation: "kube-apiserver 停止时，无法创建 Pod 对象，自然无法调度；kube-scheduler 停止时，无法为未分配的 Pod 选择节点，无法完成初始调度。kube-controller-manager 主要负责维护期望状态，不影响初始调度；kube-proxy 负责服务负载均衡，与调度无关。",
        difficulty: "进阶"
    },

    // ========== 第17部分：节点资源管理 ==========
    {
        module: "集群架构",
        question: "kubelet 如何避免节点资源被过度使用？",
        type: "多选",
        options: [
            "根据 Pod 的资源 requests 进行调度决策",
            "根据 Pod 的资源 limits 通过 cgroups 限制容器资源",
            "监控节点的资源使用率并报告给控制平面",
            "自动删除内存占用高的容器"
        ],
        answer: [1, 2],
        explanation: "kubelet 通过 Pod 定义的 limits 使用 cgroups 限制容器资源使用（CPU、内存），防止单个容器占用过多资源；同时监控节点资源使用率，将资源压力状态报告给控制平面。调度决策由 kube-scheduler 基于 requests 完成，不是 kubelet 的职责。kubelet 不会自动删除容器。",
        difficulty: "进阶"
    },
    {
        module: "集群架构",
        question: "当节点出现内存压力（MemoryPressure）时，会发生什么？",
        type: "单选",
        options: [
            "Pod 立即被强制终止",
            "节点会根据 Pod 的优先级和 QoS 等级进行驱逐",
            "所有新建的 Pod 都会被拒绝",
            "节点会立即从集群中删除"
        ],
        answer: [1],
        explanation: "当节点内存压力过大（NodeCondition MemoryPressure 为 True）时，kubelet 会根据 Pod 的优先级和 QoS 等级驱逐部分 Pod，释放内存。低优先级、低 QoS 的 Pod 优先被驱逐。新建的 Pod 默认不会被调度到有压力的节点，除非其优先级足够高。",
        difficulty: "高级"
    },

    // ========== 第18部分：Controller Manager 与 Leader 选举 ==========
    {
        module: "集群架构",
        question: "当运行多个 kube-controller-manager 实例时，如何确保只有一个实例作为活跃领导者？",
        type: "多选",
        options: [
            "通过租约（Lease）机制进行领导选举",
            "通过 etcd 的键值竞争实现",
            "通过手动指定主实例",
            "通过负载均衡器分配请求"
        ],
        answer: [0, 1],
        explanation: "kube-controller-manager 运行多个实例时，通过租 Lease 机制在 etcd 中进行领导选举，确保只有一个实例作为主控制器。其他实例处于待命状态，在主实例故障时接管。这不是通过手动指定或负载均衡器实现的。",
        difficulty: "高级"
    },

    // ========== 第19部分：控制器与自愈 ==========
    {
        module: "集群架构",
        question: "哪些因素会触发 Deployment 控制器创建新的 ReplicaSet？",
        type: "单选",
        options: [
            "Pod 启动失败",
            " Deployment 的 Pod 模板发生变化",
            "节点进入 NotReady 状态",
            "Service 的选择器发生变化"
        ],
        answer: [1],
        explanation: "Deployment 控制器在 Pod 模板（deployment.spec.template）发生变化时会创建新的 ReplicaSet，执行滚动更新。Pod 启动失败会触发重启而不是新 ReplicaSet；节点 NotReady 会触发重新调度；Service 选择器变化与 Deployment 无关。这展示了控制器对配置变更的响应机制。",
        difficulty: "高级"
    }
];

const modules = ["集群架构"];
