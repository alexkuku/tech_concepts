// Kubernetes 概念测评题目库
// 生成日期: 2026-04-13
// 覆盖：概述、集群架构、容器、工作负载、网络、存储、配置、调度、集群管理

const questions = [
// ========== 概述模块 (35题) ==========
    {
        module: "概述",
        question: "Kubernetes 的核心设计目标是什么？",
        type: "单选",
        options: [
            "简化容器编排，实现应用的自动化部署、扩展和管理",
            "替代 Docker 成为主要的容器运行时",
            "提供一个完全托管云服务的解决方案",
            "创建一个虚拟机编排平台"
        ],
        answer: [0],
        explanation: "Kubernetes 的核心目标是简化容器编排，让应用的部署、扩展和管理能够自动化。它不是替代 Docker，而是作为一个容器编排平台工作在这些容器运行时之上。Kubernetes 可以部署在各种环境中（本地、云、混合云），提供自动化的应用管理和弹性伸缩。"
    },
    {
        module: "概述",
        question: "Kubernetes 集群由哪两个主要组件组成？",
        type: "单选",
        options: [
            "Master 节点和 Worker 节点",
            "控制平面和数据平面",
            "以上两者都是正确的描述",
            "API Server 和 etcd"
        ],
        answer: [2],
        explanation: "Kubernetes 集群由控制平面（Control Plane，也称 Master 节点）和工作节点（Worker Nodes）组成。控制平面负责任务调度、集群状态管理等；工作节点运行容器化的应用。控制平面和数据平面也是对同一个架构的另一种描述方式，其中控制平面负责决策和数据平面负责执行。"
    },
    {
        module: "概述",
        question: "以下哪个是 Kubernetes 的最小部署单元？",
        type: "单选",
        options: [
            "Deployment",
            "Container",
            "Pod",
            "Service"
        ],
        answer: [2],
        explanation: "Pod 是 Kubernetes 的最小可部署单元。一个 Pod 包含一个或多个共享存储和网络的容器。虽然 Deployment、Service 都是很重要的概念，但它们是用来管理 Pod 或提供网络服务的抽象，不是最小部署单元。Container 是更底层的概念，Kubernetes 通过 Pod 来管理容器。"
    },
    {
        module: "概述",
        question: "Kubernetes 标签（Label）和选择器（Selector）的主要作用是什么？",
        type: "单选",
        options: [
            "标识 Pod 的所有者",
            "组织、选择和管理 Kubernetes 对象",
            "控制 Pod 的网络访问",
            "定义 Pod 的资源限制"
        ],
        answer: [1],
        explanation: "标签（Label）是附加到对象上的键值对，用于标识对象的属性；选择器（Selector）用于根据标签查询和筛选对象。它们主要用于组织和分组对象，让 Deployment、Service 等控制器能够精确地选择目标 Pod。网络访问由网络策略控制，资源限制通过 requests/limits 配置。"
    },
    {
        module: "概述",
        question: "命名空间（Namespace）在 Kubernetes 中的作用是什么？",
        type: "单选",
        options: [
            "隔离不同用户的网络流量",
            "提供资源配额和访问控制的多租户环境",
            "强制执行 Pod 间的安全策略",
            "提高 Pod 的网络性能"
        ],
        answer: [1],
        explanation: "命名空间将集群资源划分为多个虚拟集群，实现资源隔离和访问控制。通过命名空间，可以为不同团队或项目创建独立的工作空间，结合 ResourceQuota 实现资源配额，结合 RBAC 实现权限控制。命名空间不隔离网络流量（不同命名空间的默认网络策略允许互相访问），网络隔离需要使用 NetworkPolicy。"
    },
    {
        module: "概述",
        question: "kubectl 命令中，`kubectl apply -f deployment.yaml` 的作用是什么？",
        type: "单选",
        options: [
            "删除 deployment.yaml 中定义的资源",
            "创建或更新 deployment.yaml 中定义的资源",
            "查看 deployment.yaml 的内容",
            "获取 Pod 的日志"
        ],
        answer: [1],
        explanation: "`kubectl apply` 命令用于应用配置文件，如果资源不存在则创建，如果已存在则更新。它是声明式的管理方式，通过对比当前状态和期望状态来决定创建还是更新。删除资源使用 `kubectl delete`，查看内容使用 `cat`，获取日志使用 `kubectl logs`。"
    },
    {
        module: "概述",
        question: "Kubernetes API Server 的主要职责是什么？",
        type: "单选",
        options: [
            "运行容器化的应用",
            "存储集群状态数据",
            "提供集群管理的 REST API 接口",
            "调度 Pod 到合适的节点"
        ],
        answer: [2],
        explanation: "API Server 是 Kubernetes 控制平面的核心组件，提供 REST API 接口供所有内部组件（如 Scheduler、Controller Manager）和用户工具（如 kubectl）使用。它是唯一可以直接与 etcd 通信的组件，负责认证、授权、准入控制等。运行容器由 kubelet 负责，存储状态由 etcd 负责，调度由 Scheduler 负责。"
    },
    {
        module: "概述",
        question: "以下哪个命令可以查看集群中所有命名空间的 Pod？",
        type: "单选",
        options: [
            "kubectl get pod",
            "kubectl get pods -all-namespaces",
            "kubectl get pods --all",
            "kubectl list pods"
        ],
        answer: [1],
        explanation: "`kubectl get pods -all-namespaces` 或 `kubectl get pods -A` 可以查看所有命名空间中的 Pod。`kubectl get pod` 默认只查看当前命名空间（如果没有通过 context 或 --namespace 指定则是 default 命名空间）。`kubectl list pods` 不是有效的命令。"
    },
    {
        module: "概述",
        question: "Kubernetes 对象的期望状态是指什么？",
        type: "单选",
        options: [
            "对象当前的运行状态",
            "用户通过 YAML 或 JSON 配置文件定义的对象目标状态",
            "对象的历史状态",
            "对象的物理状态"
        ],
        answer: [1],
        explanation: "期望状态（Desired State）是用户通过 YAML 或 JSON 配置文件定义的、希望对象达到的目标状态。Kubernetes 的控制器会持续工作，确保实际状态与期望状态一致。当前运行状态是实际状态，历史状态存储在 etcd 中，物理状态不是 Kubernetes 的概念。"
    },
    {
        module: "概述",
        question: "Pod 中的容器共享什么资源？",
        type: "多选",
        options: [
            "网络命名空间（IP 地址、端口）",
            "存储卷（Volume）",
            "进程命名空间（可以看到彼此的进程）",
            "UTS 命名空间（ hostname）"
        ],
        answer: [0, 1, 3],
        explanation: "Pod 中的容器共享网络命名空间（同一个 IP 和端口空间）、存储卷（可以共享数据）和 UTS 命名空间（相同的 hostname）。但它们默认不共享进程命名空间（彼此看不到进程），除非使用 shareProcessNamespace 特性。这种共享机制使得 Pod 内的容器能够紧密协作。"
    },
    {
        module: "概述",
        question: "kubectl 命令中，以下哪些可以用于调试 Pod？",
        type: "多选",
        options: [
            "kubectl logs <pod-name>",
            "kubectl describe pod <pod-name>",
            "kubectl exec -it <pod-name> -- /bin/bash",
            "kubectl delete pod <pod-name>"
        ],
        answer: [0, 1, 2],
        explanation: "调试 Pod 的常用命令包括：`kubectl logs` 查看容器日志，`kubectl describe` 查看对象详细信息和事件，`kubectl exec` 进入容器执行命令。`kubectl delete` 是删除 Pod 的命令，不是调试命令。这些命令帮助诊断 Pod 启动失败、应用错误等问题。"
    },
    {
        module: "概述",
        question: "Kubernetes 对象的 spec 字段和 status 字段的区别是什么？",
        type: "多选",
        options: [
            "spec 是用户定义的期望状态",
            "status 是系统记录的实际状态",
            "spec 由控制器自动更新",
            "status 由控制器自动更新"
        ],
        answer: [0, 1],
        explanation: "spec（规格）字段是用户定义的期望状态，描述资源应该是什么样子的；status（状态）字段是 Kubernetes 系统记录的实际状态，由控制器持续更新。spec 由用户通过配置文件设置，status 由 Kubernetes 控制器自动维护。控制器的工作就是通过调整实际状态来匹配期望的 spec。"
    },
    {
        module: "概述",
        question: "以下哪些是 Kubernetes 对象常见的元数据字段？",
        type: "多选",
        options: [
            "name",
            "namespace",
            "labels",
            "spec"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 对象的元数据字段包括：name（对象名称）、namespace（所属命名空间）、labels（标签）、annotations（注解）等。spec 不是元数据字段，而是规格字段，定义对象的期望配置。元数据用于标识、组织和选择对象。"
    },
    {
        module: "概述",
        question: "kubectl 的 context 包括哪些信息？",
        type: "多选",
        options: [
            "集群地址",
            "用户认证信息",
            "默认命名空间",
            "Pod 数量"
        ],
        answer: [0, 1, 2],
        explanation: "kubectl context 是一组连接参数的集合，包括：cluster（集群 API Server 地址）、user（认证凭证信息）、namespace（默认操作的命名空间）。Pod 数量不是 context 的一部分，它是运行时状态。使用 `kubectl config use-context` 可以切换不同的 context 来管理多个集群或环境。"
    },
    {
        module: "概述",
        question: "Kubernetes API 的版本策略包括哪些？",
        type: "多选",
        options: [
            "alpha（内部测试版本，可能被移除）",
            "beta（已测试但可能变更）",
            "stable（稳定版本，保证向后兼容）",
            "deprecated（已废弃但暂时可用）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes API 版本策略包括：alpha（早期版本，错误可能不被修复，特性可能被移除，不启用默认）、beta（已测试，功能完整但详细信息可能变更，默认启用）、stable（稳定版本，保证向后兼容）、deprecated（已废弃，将在未来版本移除）。这些级别帮助用户了解 API 的稳定性和生命周期。"
    },
    {
        module: "概述",
        question: "Deployment 对象的主要作用是什么？",
        type: "单选",
        options: [
            "管理无状态应用，支持滚动更新和回滚",
            "管理有状态应用，保证持久化标识",
            "在每个节点上运行一个 Pod",
            "定时执行任务"
        ],
        answer: [0],
        explanation: "Deployment 管理（通常是无状态的）应用，支持声明式更新、滚动更新、暂停和恢复、回滚等特性。有状态应用应该使用 StatefulSet，在节点上运行 Pod 使用 DaemonSet，定时任务使用 CronJob 或 Job。Deployment 是最常用的控制器之一。"
    },
    {
        module: "概述",
        question: "Service 在 Kubernetes 中的作用是什么？",
        type: "单选",
        options: [
            "监控 Pod 的健康状态",
            "为一组 Pod 提供稳定的网络访问入口",
            "存储 Pod 的配置信息",
            "自动扩展 Pod 数量"
        ],
        answer: [1],
        explanation: "Service 为一组功能相同的 Pod 提供稳定的网络访问入口。当 Pod 因为重启或更新而变化时，Service 会自动更新其对应的 Pod 列表，确保服务可用性。监控 Pod 由探针和控制器负责，配置存储使用 ConfigMap/Secret，自动扩展使用 HPA。"
    },
    {
        module: "概述",
        question: "以下哪个 kubectl 命令可以实时查看 Pod 的日志？",
        type: "单选",
        options: [
            "kubectl logs --follow <pod-name>",
            "kubectl logs --tail -f <pod-name>",
            "kubectl logs --stream <pod-name>",
            "kubectl logs --watch <pod-name>"
        ],
        answer: [0],
        explanation: "`kubectl logs --follow <pod-name>` 或 `kubectl logs -f <pod-name>` 可以实时跟踪 Pod 的日志输出。`--tail` 选项可以指定显示最后 N 行，但 `-f` 才是实时跟踪的标志。`--stream` 和 `--watch` 不是 logs 命令的有效参数。"
    },
    {
        module: "概述",
        question: "Kubernetes 对象的注解（Annotations）和标签（Labels）的主要区别是什么？",
        type: "多选",
        options: [
            "注解用于存储任意非标识性数据",
            "标签用于选择和分组对象",
            "注解不能用于对象选择",
            "标签必须符合严格的大小写和格式要求"
        ],
        answer: [0, 1, 2],
        explanation: "注解用于存储任意非标识性元数据（如构建信息、工具信息等），不用于对象选择。标签用于选择和分组对象（如 Service 的 Selector）。注解不能用于选择器。标签有严格的格式限制（最多 63 个字符，只能是字母数字、-、_.，且必须以字母数字开头结尾）。两者都是键值对，但用途不同。"
    },
    {
        module: "概述",
        question: "kubectl 的主要用途包括哪些？",
        type: "多选",
        options: [
            "部署和管理应用",
            "查看集群资源",
            "调试和故障排查",
            "修改底层操作系统"
        ],
        answer: [0, 1, 2],
        explanation: "kubectl 是 Kubernetes 的命令行工具，主要用途包括：部署和管理应用（apply/create/delete）、查看集群资源（get/describe）、调试和故障排查（logs/exec/top/port-forward）等。kubectl 不能直接修改底层操作系统，它通过 API Server 管理集群资源。"
    },
    {
        module: "概述",
        question: "etcd 在 Kubernetes 中扮演什么角色？",
        type: "单选",
        options: [
            "容器运行时",
            "集群状态存储数据库",
            "网络代理",
            "负载均衡器"
        ],
        answer: [1],
        explanation: "etcd 是 Kubernetes 的状态存储数据库，保存所有集群配置和状态信息。它是一个分布式的键值存储系统，提供高可用性和一致性。API Server 是唯一可以直接访问 etcd 的组件，所有其他组件通过 API Server 读写数据。容器运行时是 Docker/containerd 等，网络代理是 kube-proxy/ kube-proxy 的一部分。"
    },
    {
        module: "概述",
        question: "kubectl config view 命令的作用是什么？",
        type: "单选",
        options: [
            "查看当前 Pod 的配置",
            "查看 kubectl 配置文件的内容",
            "查看集群的配置文件",
            "验证 kubectl 配置是否正确"
        ],
        answer: [1],
        explanation: "`kubectl config view` 显示合并后的 kubectl 配置文件（默认是 ~/.kube/config）内容，包括集群、用户、上下文等信息。它不查看 Pod 配置，也不验证配置正确性（只是显示内容）。查看 Pod 配置使用 `kubectl get pod -o yaml`。"
    },
    {
        module: "概述",
        question: "Kubernetes 中的控制器模式（Controller Pattern）的核心思想是什么？",
        type: "单选",
        options: [
            "直接管理 Pod 的生命周期",
            "不断观察实际状态，调整系统使其达到期望状态",
            "让用户手动管理所有资源",
            "根据时间触发操作"
        ],
        explanation: "控制器模式的核心思想是：声明期望状态，控制器持续观察实际状态，并通过调整系统来使实际状态与期望状态一致。这是一个循环过程（Reconciliation Loop）。Deployment、ReplicaSet、StatefulSet 等都是控制器的实现。用户不需要关心具体如何达到目标，只需要声明期望状态。"
    },
    {
        module: "概述",
        question: "Pod 的生命周期包括哪些阶段？",
        type: "多选",
        options: [
            "Pending（等待调度）",
            "Running（运行中）",
            "Succeeded（成功完成）",
            "Failed（失败）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Pod 的生命周期阶段包括：Pending（等待调度或镜像拉取）、Running（至少有一个容器正在运行）、Succeeded（所有容器成功终止）、Failed（至少有一个容器异常终止）、Unknown（无法获取状态）。还有终止中（Terminating）等过渡状态。了解这些阶段有助于监控和调试应用。"
    },
    {
        module: "概述",
        question: "kubectl apply 和 kubectl create 的主要区别是什么？",
        type: "单选",
        options: [
            "没有区别，功能完全相同",
            "apply 可以更新已存在的资源，create 只能创建新资源",
            "create 可以更新资源，apply 只能创建",
            "apply 用于删除资源，create 用于查看资源"
        ],
        answer: [1],
        explanation: "kubectl apply 是声明式操作，可以创建或更新已有资源（根据当前状态和期望状态决定）；kubectl create 是命令式操作，只能创建新资源，如果资源已存在会报错。推荐使用 apply，因为它支持配置文件的版本控制和团队协作。create 适合快速创建测试资源。"
    },
    {
        module: "概述",
        question: "Kubernetes API Server 的认证机制包括哪些？",
        type: "多选",
        options: [
            "客户端证书",
            "Bearer Token",
            "基本认证（用户名密码）",
            "OpenID Connect"
        ],
        answer: [0, 1, 3],
        explanation: "Kubernetes API Server 支持多种认证方式：客户端证书（X.509）、Bearer Token（ServiceAccount 或者静态 Token）、OpenID Connect（集成企业身份提供商）。基本认证（用户名密码）虽然技术上支持但不推荐。认证是第一步的访问控制，之后还有授权和准入控制。"
    },
    {
        module: "概述",
        question: "使用 kubectl edit 命令可以做什么？",
        type: "单选",
        options: [
            "编辑本地的 YAML 文件",
            "直接编辑集群中运行的对象",
            "只编辑 Deployment 对象",
            "编辑多个对象"
        ],
        answer: [1],
        explanation: "`kubectl edit` 命令直接在集群中编辑对象（打开默认编辑器），保存后自动更新到集群。它不编辑本地文件，而是编辑运行时对象的当前状态。可以编辑任何支持 GET/UPDATE 的对象，不仅限于 Deployment。编辑多个对象需要分别 edit 每个。"
    },
    {
        module: "概述",
        question: "Kubernetes 对象名称的命名规则是什么？",
        type: "多选",
        options: [
            "最多 253 个字符",
            "只能包含小写字母、数字、-、.",
            "必须以字母或数字开头结尾",
            "不能有大写字母"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 对象名称规则：最多 253 个字符，只能包含小写字母、数字、- 和 .，必须以字母或数字开头和结尾。不能使用大写字母、下划线或其他特殊字符。子域名（DNS 子域名格式）遵循更严格的规则。注解的键值也有类似的命名规范。"
    },
    {
        module: "概述",
        question: "Kubernetes 中什么是不可变基础设施（Immutable Infrastructure）？",
        type: "单选",
        options: [
            "无法修改的集群配置",
            "部署后不再修改，而是替换为新的实例",
            "使用只读的存储卷",
            "禁止使用 update 命令"
        ],
        explanation: "不可变基础设施是一种部署模式：应用部署后不再修改现有实例，而是使用新的配置部署新实例，然后切换流量。在 Kubernetes 中，这表现为 Deployment 滚动更新时创建新 Pod，而不是修改现有 Pod 的配置。这种模式减少了配置漂移、提高了可预测性、简化了回滚。"
    },
    {
        module: "概述",
        question: "kubectl port-forward 命令的主要用途是什么？",
        type: "单选",
        options: [
            "转发本地端口到集群中的 Pod",
            "创建一个持久化的 Service",
            "修改 Pod 的端口配置",
            "设置网络的端口转发规则"
        ],
        explanation: "`kubectl port-forward` 将本地端口转发到集群中的 Pod 或 Service，用于本地开发和调试。它是临时的端口转发，不会创建持久化的 Service。修改 Pod 端口需要更新 Pod 配置。设置网络规则使用 NetworkPolicy。例如：`kubectl port-forward pod/mypod 8080:80` 将本地 8080 转发到 Pod 的 80 端口。"
    },
    {
        module: "概述",
        question: "以下哪些是 Kubernetes 中常见的控制器？",
        type: "多选",
        options: [
            "Deployment",
            "StatefulSet",
            "DaemonSet",
            "Service"
        ],
        answer: [0, 1, 2],
        explanation: "Deployment、StatefulSet、DaemonSet 都是控制器，负责管理 Pod 的生命周期和期望状态。Service 不是控制器，它是一个服务抽象，提供固定的网络入口。Deployment 管理无状态应用，StatefulSet 管理有状态应用，DaemonSet 确保每个节点运行一个副本。"
    },
    {
        module: "概述",
        question: "Kubernetes 中的资源配额（ResourceQuota）的主要作用是什么？",
        type: "单选",
        options: [
            "限制单个 Pod 的资源使用",
            "限制命名空间级别的资源使用",
            "限制集群级别的资源使用",
            "监控资源使用情况"
        ],
        answer: [1],
        explanation: "ResourceQuota 限制命名空间级别的资源使用，可以限制 Pod 数量、CPU/内存请求和限制、持久化存储等。单个 Pod 的资源限制通过 Pod 的 resource 字段设置。ClusterResourceQuota 限制集群级别（跨命名空间）。监控资源使用使用 metrics-server。"
    },
    {
        module: "概述",
        question: "kubectl 的 --namespace 和 -n 选项是什么关系？",
        type: "单选",
        options: [
            "完全不同的功能",
            "-n 是 --namespace 的简写，功能相同",
            "-n 优先级高于 --namespace",
            "--namespace 会被忽略，必须使用 -n"
        ],
        answer: [1],
        explanation: "`-n` 是 `--namespace` 的简写形式，功能完全相同。例如 `kubectl get pod -n kube-system` 和 `kubectl get pod --namespace kube-system` 效果一样。kubectl 有多个常用选项的简写形式（如 `-o` for `--output`），但完整形式更明确。"
    },
    {
        module: "概述",
        question: "Kubernetes 中什么是最终一致性（Eventual Consistency）？",
        type: "单选",
        options: [
            "所有操作立即生效",
            "系统最终会达到一致状态，但可能有短暂的不一致",
            "数据永远不会一致",
            "需要手动同步数据"
        ],
        explanation: "最终一致性是分布式系统的特性：系统最终会达到一致状态，但期间可能存在短暂的不一致。在 Kubernetes 中，当你提交期望状态后，控制器会逐步调整系统，但中间状态可能不完全符合预期。这种设计提高了系统的可扩展性和容错性。Kubernetes 通过持续调和循环保证最终一致性。"
    },
    {
        module: "概述",
        question: "kubectl rollout 命令族的主要用途是什么？",
        type: "多选",
        options: [
            "查看部署历史",
            "回滚到之前的版本",
            "暂停和恢复部署",
            "直接删除部署"
        ],
        answer: [0, 1, 2],
        explanation: "kubectl rollout 命令族用于管理 Deployment、StatefulSet、DaemonSet 的滚动更新：`rollout history` 查看版本历史，`rollout undo` 回滚到之前版本，`rollout pause`/`resume` 暂停/恢复部署。删除部署不使用 rollout，而是使用 `delete` 命令。"
    },
    {
        module: "概述",
        question: "Kubernetes 中什么是声明式 API（Declarative API）？",
        type: "单选",
        options: [
            "只支持查询不支持的写入",
            "声明期望状态而非具体操作步骤",
            "使用 SQL 语法的 API",
            "不支持修改的 API"
        ],
        answer: [1],
        explanation: "声明式 API 让用户声明期望状态，而不是指定具体的操作步骤。例如创建 Deployment 时，你声明需要 3 个副本，控制器负责实际创建和管理。这与命令式 API（如 `kubectl scale`）形成对比。声明式 API 提供了更好的幂等性、可预测性和可维护性。"
    },
    {
        module: "概述",
        question: "Kubernetes 对象的 UID 和 name 的区别是什么？",
        type: "多选",
        options: [
            "name 是用户可读的标识符",
            "UID 是系统生成的唯一标识符",
            "name 可以更改",
            "UID 不会更改"
        ],
        answer: [0, 1, 3],
        explanation: "name 是用户提供的可读名称，用于在同一个命名空间内唯一标识对象；UID 是 Kubernetes 系统生成的唯一标识符，在集群生命周期内不变。name 在对象删除后可以被复用，UID 绝不会复用。name 可以通过 `metadata.name` 设置，UID 由 K8s 系统生成。"
    },

    // ========== 集群架构模块 (35题) ==========
    {
        module: "集群架构",
        question: "控制平面的主要组件包括哪些？",
        type: "多选",
        options: [
            "kube-apiserver",
            "etcd",
            "kube-scheduler",
            "kubelet"
        ],
        answer: [0, 1, 2],
        explanation: "控制平面主要组件包括：kube-apiserver（API 服务器）、etcd（状态存储）、kube-scheduler（调度器）、kube-controller-manager（控制器管理器）。kubelet 是工作节点的组件，负责管理容器运行时。cloud-controller-manager（如果是云环境）也是控制平面组件。"
    },
    {
        module: "集群架构",
        question: "kubelet 的主要职责是什么？",
        type: "单选",
        options: [
            "分配 Pod 到节点",
            "确保容器在 Pod 中运行",
            "管理网络规则",
            "提供集群配置存储"
        ],
        answer: [1],
        explanation: "kubelet 是每个工作节点上运行的代理，负责确保 Pod 中定义的容器正常运行。它与 API Server 交互获取 Pod 定义，与容器运行时接口（CRI）交互管理容器生命周期。分配 Pod 到节点是 kube-scheduler 的职责，管理网络规则是 kube-proxy 的职责，存储是 etcd 的职责。"
    },
    {
        module: "集群架构",
        question: "kube-proxy 的工作模式有哪几种？",
        type: "多选",
        options: [
            "iptables 模式",
            "IPVS 模式",
            "userspace 模式",
            "nftables 模式"
        ],
        answer: [0, 1, 2],
        explanation: "kube-proxy 支持 iptables、IPVS 和 userspace 三种模式。iptables 模式使用 Linux iptables 规则实现负载均衡；IPVS 模式使用 Linux IPVS 提供更高性能；userspace 模式（已废弃但存在）在用户空间处理流量。nftables 不是 kube-proxy 支持的独立模式（但 iptables 可以使用 nftables 后端）。推荐使用 IPVS 模式以获得更好的性能。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 集群的自愈能力基于什么机制？",
        type: "单选",
        options: [
            "手动重启失败的 Pod",
            "控制器持续监控和调整",
            "定时检查节点状态",
            "外部监控系统通知"
        ],
        answer: [1],
        explanation: "Kubernetes 的自愈能力基于控制器模式：控制器持续监控实际状态与期望状态的差异，并通过创建新 Pod、重启容器、驱逐节点等方式进行调整。这个过程是自动持续的，不需要手动干预。定时检查只提供监控，不能自动修复。外部监控可以告警但不直接参与自愈。"
    },
    {
        module: "集群架构",
        question: "垃圾回收器的作用是什么？",
        type: "单选",
        options: [
            "回收镜像文件磁盘空间",
            "清理未使用的容器和 Pod",
            "删除过期的配置文件",
            "清理被依赖对象移除后的孤立对象"
        ],
        answer: [3],
        explanation: "垃圾回收器（Garbage Collector）负责清理被依赖对象删除后留下的孤立对象。例如删除 Deployment 时，会自动删除它管理的 ReplicaSet 和 Pod。这些关联关系通过 metadata.ownerReferences 定义。回收镜像文件和容器是容器运行时的职责，删除配置文件不是系统职责。"
    },
    {
        module: "集群架构",
        question: "租约（Lease）在 Kubernetes 中的作用是什么？",
        type: "单选",
        options: [
            "分配节点资源",
            "标识节点或 kubelet 的存活状态",
            "锁定 Pod 防止被调度",
            "限制 Pod 数量"
        ],
        answer: [1],
        explanation: "Lease 对象用于心跳机制，标识 kube-scheduler、kubelet 等组件的活跃状态。这些组件定期更新 Lease 时间戳，如果 Lease 过期表示组件可能失效。节点健康以前使用 NodeCondition，现在主要使用 Lease。它不分配资源、锁定 Pod 或限制数量。"
    },
    {
        module: "集群架构",
        question: "控制器管理器包含哪些控制器？",
        type: "多选",
        options: [
            "节点控制器（Node Controller）",
            "副本控制器（Replication Controller）",
            "端点控制器（Endpoints Controller）",
            "命名空间控制器（Namespace Controller）"
        ],
        answer: [0, 1, 2],
        explanation: "kube-controller-manager 包含多个控制器：节点控制器（管理节点状态）、副本控制器（管理副本数量）、端点控制器（管理 Service 的端点）、服务账号控制器（管理服务账号令牌）等。命名空间控制器不包含在 kube-controller-manager 中（如果存在也是在云控制器管理器）。这些控制器协同工作维持集群状态。"
    },
    {
        module: "集群架构",
        question: "工作节点上应该运行哪些组件？",
        type: "多选",
        options: [
            "kubelet",
            "kube-proxy",
            "容器运行时（Docker/containerd）",
            "kube-scheduler"
        ],
        answer: [0, 1, 2],
        explanation: "工作节点运行 kubelet（管理容器）、kube-proxy（网络代理）、容器运行时（如 Docker、containerd、CRI-O）。kube-scheduler 是控制平面组件，只在控制平面节点运行，不工作节点。有些部署中控制平面节点也可能运行工作负载（tainted 但可以容忍）。"
    },
    {
        module: "集群架构",
        question: "节点控制器的主要作用是什么？",
        type: "单选",
        options: [
            "调度 Pod 到节点",
            "监控节点状态并在节点失效时响应",
            "管理节点的网络配置",
            "分配节点的资源配额"
        ],
        answer: [1],
        explanation: "节点控制器监控节点状态，当节点变为 NotReady 时，它会将 Pod 标记为失效并可能重新调度这些 Pod。调度 Pod 是 kube-scheduler 的职责，网络配置通过 CNI 插件实现，资源配额由 ResourceQuota 管理。节点控制器还管理节点的心跳超时时间（默认 40s）和驱逐宽限期（默认 5 min）。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 集群的高可用部署需要什么？",
        type: "多选",
        options: [
            "多个控制平面节点",
            "负载均衡器",
            "共享的 etcd 集群",
            "多个工作节点"
        ],
        answer: [0, 1, 2],
        explanation: "控制平面高可用需要：多个控制平面节点（避免单点故障）、负载均衡器（分发 API 请求）、共享的 etcd 集群（确保状态一致）。多个工作节点对高可用也有帮助（特别是对于运行 Pod 的高可用），但不是控制平面高可用的根本要求。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 的云控制器管理器的作用是什么？",
        type: "单选",
        options: [
            "管理容器的生命周期",
            "管理特定云提供商的集成",
            "管理存储卷",
            "管理网络路由"
        ],
        answer: [1],
        explanation: "云控制器管理器将特定云提供商的逻辑集成到 Kubernetes 中，包括节点控制器（与云 API 交互）、路由控制器（管理云路由表）、服务负载均衡器控制器（创建云 LB）等。管理容器是 kubelet 的职责，存储由存储插件和 CSI 驱动管理，网络路由由 CNI 和云路由控制器共同负责。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 调度器在调度 Pod 时会考虑哪些因素？",
        type: "多选",
        options: [
            "资源请求和限制",
            "硬件/软件/策略约束",
            "亲和性和反亲和性",
            "数据局部性"
        ],
        answer: [0, 1, 2, 3],
        explanation: "调度器会考虑多种因素：资源请求和限制（CPU、内存等）、硬件/软件/策略约束（如 taints、tolerations、节点选择器）、亲和性和反亲和性（节点亲和、Pod 亲和）、数据局部性（在存储附近调度）等。调度算法分过滤阶段（不合适的节点）和打分阶段（选择最合适的节点）。"
    },
    {
        module: "集群架构",
        question: "容器运行时接口（CRI）的作用是什么？",
        type: "单选",
        options: [
            "管理容器镜像",
            "让 Kubernetes 支持不同的容器运行时",
            "定义容器网络的标准",
            "提供容器监控接口"
        ],
        answer: [1],
        explanation: "CRI（Container Runtime Interface）是一组插件接口，让 Kubernetes 可以支持多种容器运行时（Docker、containerd、CRI-O 等），而无需修改核心代码。kubelet 通过 CRI 与容器运行时交互。镜像管理是运行时的功能的一部分，CNI 定义网络标准，监控不是 CRI 的范围。"
    },
    {
        module: "集群架构",
        question: "etcd 的关键特性不包括以下哪项？",
        type: "单选",
        options: [
            "强一致性",
            "分布式键值存储",
            "内置容器运行时",
            "支持事务和租赁"
        ],
        answer: [2],
        explanation: "etcd 是一个分布式键值存储系统，具有强一致性、支持事务、租赁（Lease）等特性。它不内置容器运行时功能。容器运行时由 Docker、containerd 等特定组件提供。etcd 的强一致性保证 Kubernetes 的状态始终一致和准确。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中什么是控制器的调和循环（Reconciliation Loop）？",
        type: "单选",
        options: [
            "一次性创建任务",
            "持续观察实际状态并调整以匹配期望状态",
            "定时清理任务",
            "负载均衡算法"
        ],
        answer: [1],
        explanation: "调和循环是控制器的核心工作模式：持续获取对象的实际状态（Status），与期望状态（Spec）对比，如果存在差异则执行操作调整系统，然后循环继续。这个过程确保系统始终趋向期望状态，即使中间出现故障也能最终恢复。这是声明式管理的基础。"
    },
    {
        module: "集群架构",
        question: "API Server 的准入控制包括哪几个阶段？",
        type: "多选",
        options: [
            "认证（Authentication）",
            "授权（Authorization）",
            "准入（Admission）",
            "资源验证（Validation）"
        ],
        answer: [0, 1, 2],
        explanation: "API Server 的访问控制分为三个阶段：认证（确定用户身份）、授权（确认用户权限）、准入（高级控制，可以修改或拒绝请求）。验证包含在准入阶段（ValidatingWebhook），修改包含在准入阶段（MutatingWebhook）。资源验证是准入控制的一部分，不是独立阶段。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 集群的证书轮换是如何处理的？",
        type: "单选",
        options: [
            "需要手动更新所有证书",
            "某些证书自动轮换，其他需要手动更新",
            "所有证书自动轮换",
            "不需要轮换证书"
        ],
        answer: [1],
        explanation: "Kubernetes 中某些证书（如 kubelet 服务证书）支持自动轮换，而其他证书（如 API Server 证书）需要手动更新。Kubeadm 提供了证书轮换命令 `kubeadm certs renew`。证书轮换很重要，因为过期会导致服务中断。自动轮换主要针对组件证书，CA 证书通常需要手动干预。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中 Node 对象的 Taint 和 Toleration 的作用是什么？",
        type: "单选",
        options: [
            "设置节点的标签和选择器",
            "控制哪些 Pod 可以调度到该节点",
            "限制节点的网络带宽",
            "监控节点的资源使用"
        ],
        answer: [1],
        explanation: "Node 的 Taint（污点）和 Toleration（容忍度）机制用于控制 Pod 调度：含有 Taint 的节点会拒绝没有对应 Toleration 的 Pod，但允许有匹配 Toleration 的 Pod。这用于标记专用节点（如 master 节点）或硬件节点。Pod 可以通过 tolerations 字段声明容忍特定污点。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中的端点切片（EndpointSlice）相比端点（Endpoints）有什么优势？",
        type: "多选",
        options: [
            "可扩展性更好",
            "支持较大的 Service",
            "减少 API Server 负载",
            "自动替换 Endpoints"
        ],
        answer: [0, 1, 2],
        explanation: "EndpointSlice 是 Endpoint 的替代品，具有更好的可扩展性：每个 EndpointSlice 最多包含 100 个端点（而不是单个 Endpoints 对象包含所有端点），支持更大的 Service。这减少了单个对象的大小，降低了 API Server 存储、网络传输和 etcd 压力。EndpointSlice 是默认启用的，不直接替换 Endpoints（Endpoints 仍然作为 Service 的 Endpoints 字段存在）。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 控制器中，什么是 Deployment 的滚动更新？",
        type: "单选",
        options: [
            "一次性删除所有旧 Pod 并创建新 Pod",
            "逐步替换旧 Pod 为新 Pod，确保始终有可用副本",
            "暂停所有 Pod 然后一起更新",
            "不更新 Pod，只更新配置"
        ],
        answer: [1],
        explanation: "滚动更新是 Deployment 默认的更新策略：逐步用新 Pod 替换旧 Pod，保证在整个过程中始终有足够数量的可用副本。这是通过创建新 ReplicaSet，然后逐步增加其副本数同时减少旧 ReplicaSet 的副本数实现的。相比一次性替换，滚动更新减少服务中断时间，支持回滚。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 集群水平扩展的常用方法是什么？",
        type: "多选",
        options: [
            "增加工作节点",
            "增加控制平面节点",
            "使用自动伸缩组（云平台）",
            "增加 Pod 副本数"
        ],
        answer: [0, 1, 2],
        explanation: "集群水平扩展（增加集群容量）的方法包括：增加工作节点（运行更多 Pod）、增加控制平面节点（提高控制平面处理能力）、使用云平台的自动伸缩组（根据负载自动增减节点）。增加 Pod 副本数是应用扩容，不是集群扩容（它建立在集群有足够节点的基础上）。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中什么是服务账号（ServiceAccount）？",
        type: "单选",
        options: [
            "对用户提供身份标识的账号",
            "为 Pod 中运行的进程提供身份标识的账号",
            "对容器进行计费的账号",
            "对 API Server 进行认证的账号"
        ],
        answer: [1],
        explanation: "ServiceAccount 是为 Pod 中运行的进程提供身份标识的账号。每个 Pod 默认关联一个命名空间内的 ServiceAccount，并使用其访问 API Server。这与用户账号（UserAccount）不同，用户账号用于人或其他外部系统。ServiceAccount 的 token 挂载在 Pod 中。"
    },
    {
        module: "集群架构",
        question: "Kubernetes API Server 的授权模式有哪些？",
        type: "多选",
        options: [
            "AlwaysAllow",
            "AlwaysDeny",
            "ABAC（基于属性的访问控制）",
            "RBAC（基于角色的访问控制）"
        ],
        answer: [0, 2, 3],
        explanation: "Kubernetes API Server 支持多种授权模式：AlwaysAllow（允许所有请求，测试用）、AlwaysDeny（禁止所有请求）、ABAC（基于属性的访问控制，较早且复杂）、RBAC（基于角色的访问控制，推荐且默认）、Webhook（调用外部服务）。Node 授权模式也是一种。AlwaysDeny 虽然存在但极少使用。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中 kube-proxy 的用户空间模式有什么缺点？",
        type: "多选",
        options: [
            "性能较低",
            "在大规模集群中不可扩展",
            "流量需要多次在用户空间和内核空间之间切换",
            "不满足某些 Service 需求（如 session）"
        ],
        answer: [0, 1, 2],
        explanation: "kube-proxy 的 userspace 模式缺点：性能低（流量经过用户空间）、不可扩展（大量 Service 时高延迟），流量在用户空间和内核空间间多次切换导致开销。iptables/IPVS 模式在内核层处理，性能更好。userspace 模式已不推荐使用，默认是 iptables，推荐用 IPVS。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中什么是最终一致性（Eventual Consistency）的一个实际例子？",
        type: "单选",
        options: [
            "创建 Pod 后立即可以查询到",
            "创建后 Pod 立即开始运行",
            "创建 Deployment 时，可能短暂出现期望副本数与实际副本数不匹配",
            "删除 Pod 后立即被垃圾回收"
        ],
        answer: [2],
        explanation: "最终一致性实际例子：创建 Deployment 指定 3 个副本，但查询时刻可能只有 2 个 Pod 处于 Running，1 个仍在 Pending。系统会继续调整，直到实际状态与期望一致。这不等于立即查询到或立即运行（这些是时序问题，不是最终一致性）。删除后垃圾回收也不是例子。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 集群的启动顺序（kubeadm 初始化）是什么？",
        type: "单选",
        options: [
            "先启动 kubelet，再启动控制平面组件，然后加入工作节点",
            "先启动控制平面组件，再启动 kubelet，然后加入工作节点",
            "先启动 etcd，再启动 kubelet，然后启动控制平面组件",
            "先启动工作节点，再启动控制平面组件"
        ],
        answer: [0],
        explanation: "Kubernetes 集群启动顺序：首先 kubelet 在所有节点（包括控制平面节点）启动，然后控制平面组件（API Server、Scheduler、Controller Manager）在控制平面节点启动，最后工作节点加入集群。kubelet 是基础组件，必须先于控制平面运行。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中什么是 kubelet 的镜像垃圾回收？",
        type: "单选",
        options: [
            "自动下载镜像",
            "清理未使用的容器镜像以释放磁盘空间",
            "镜像加密存储",
            "镜像签名验证"
        ],
        answer: [1],
        explanation: "kubelet 的镜像垃圾回收机制清理节点上未使用的容器镜像，释放磁盘空间。当磁盘使用率超过阈值时，根据镜像的使用情况和创建时间删除旧镜像。kubelet 通过 ImagePullPolicy 确定镜像拉取策略，垃圾回收是独立的。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中什么是 kubelet 的容器垃圾回收？",
        type: "单选",
        options: [
            "自动创建容器",
            "清理已停止的容器以释放资源",
            "容器备份",
            "容器审计"
        ],
        answer: [1],
        explanation: "kubelet 的容器垃圾回收清理已停止的容器以释放系统资源。包括终止的 Pod 中的容器、容器运行时管理的容器等。这不同于镜像垃圾回收（清理镜像）。两者共同维持节点的资源可用性。容器回收策略在 kubelet 配置中定义（PodGCThreshold、ContainerGC等）。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中什么是控制平面租期（Leader Election）？",
        type: "单选",
        options: [
            "限制控制平面节点的运行时间",
            "确保只有一个 controller manager/scheduler 实例在工作",
            "给控制平面节点分配资源",
            "控制平面升级的时间限制"
        ],
        answer: [1],
        explanation: "Leader Election 是控制平面高可用的关键机制：当运行多个 controller manager 或 scheduler 实例时，通过租期确保只有一个实例在工作（Leader），其他实例（Candidate）在备用状态。如果 Leader 失败，其他实例竞选成为 Leader。这通过 Lease 或 ConfigMap 实现（默认是 Lease）。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 控制器中，什么是 StatefulSet 的特点之一？",
        type: "单选",
        options: [
            "Pod 随机命名",
            "Pod 有稳定的网络标识和存储",
            "Pod 可以被任意调度",
            "不支持滚动更新"
        ],
        answer: [1],
        explanation: "StatefulSet 的关键特点：Pod 有稳定的网络标识（pod-0, pod-1 等）和稳定的持久化存储。这基于 StatefulSet 的有序启动/删除策略。这与 Deployment 不同（Deployment 的 Pod 命名随机）。StatefulSet 支持滚动更新，更新从最高序号开始。"
    },
    {
        module: "集群架构",
        question: "Kubernetes API Server 的准入 Webhook 有哪几种？",
        type: "多选",
        options: [
            "MutatingAdmissionWebhook",
            "ValidatingAdmissionWebhook",
            "AuthorizingWebhook",
            "AuthenticatingWebhook"
        ],
        answer: [0, 1],
        explanation: "API Server 的准入 Webhook 有两种：MutatingAdmissionWebhook（修改传入请求，如注入 sidecar）和 ValidatingAdmissionWebhook（验证请求，如检查规则）。后两者不是准入 Webhook（虽然 Kubernetes 支持认证 Authorization Webhook，但那是授权阶段，不是准入阶段）。两者配合可以灵活扩展 Kubernetes 功能。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中什么是 CRD（Custom Resource Definition）？",
        type: "单选",
        options: [
            "自定义存储驱动",
            "定义自定义 API 资源类型",
            "自定义网络策略",
            "自定义调度器"
        ],
        answer: [1],
        explanation: "CRD（自定义资源定义）允许用户定义自己的 API 资源类型，就像 Pod、Deployment 一样。一旦定义，可以通过 kubectl 创建和管理这些资源，配合控制器实现业务逻辑。这用于扩展 Kubernetes 能力（如 Operator 模式）。存储驱动是 CSI/StorageClass，网络策略是 NetworkPolicy，调度器是自定义调度器。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中什么是 Operator 模式？",
        type: "单选",
        options: [
            "手动操作 Kubernetes 对象的方法",
            "使用 CRD 和控制器管理应用生命周期",
            "优化 Kubernetes 网络路由的模式",
            "调度 Pod 的策略"
        ],
        answer: [1],
        explanation: "Operator 模式：使用 CRD 定义应用资源，编写控制器（运行在集群中）管理应用的生命周期（部署、升级、备份、恢复等）。这把运维知识编码到软件中，实现应用的自动化运维。例如 Etcd Operator 管理 etcd 集群，Prometheus Operator 管理 Prometheus。"
    },
    {
        module: "集群架构",
        question: "Kubernetes 中 kube-scheduler 的调度流程包括哪些阶段？",
        type: "多选",
        options: [
            "Filtering（过滤阶段）",
            "Scoring（打分阶段）",
            "Binding（绑定阶段）",
            "Verification（验证阶段）"
        ],
        answer: [0, 1],
        explanation: "kube-scheduler 的调度流程主要包括两个阶段：Filtering 根据约束过滤掉不合适的节点（如资源不足、不满足亲和性），Scoring 对剩余节点打分选择最合适的。Binding 是由 API Server 完成的（将 Pod 的 nodeName 字段更新为目标节点）。"
    },

    // ========== 容器模块 (35题) ==========
    {
        module: "容器",
        question: "Kubernetes 支持的容器运行时包括哪些？",
        type: "多选",
        options: [
            "containerd",
            "CRI-O",
            "Docker（通过 dockershim）",
            "runc"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 支持多种容器运行时：containerd（推荐，独立 OCI 兼容运行时）、CRI-O（专为 Kubernetes 优化的容器运行时）、Docker（通过 dockershim，已废弃，最终移除）。runc 是底层 OCI 运行时（如 containerd 底层使用），不是 Kubernetes 直接管理的运行时。"
    },
    {
        module: "容器",
        question: "Pod 的生命周期钩子包括哪些？",
        type: "多选",
        options: [
            "PostStart",
            "PreStop",
            "PostStop",
            "PreStart"
        ],
        answer: [0, 1],
        explanation: "Pod 支持两种生命周期钩子：PostStart（容器启动后立即执行）和 PreStop（容器终止前执行）。这些钩子用于执行初始化或清理工作。没有 PostStop 和 PreStart 钩子。钩子可以执行命令或调用 HTTP 端点。"
    },
    {
        module: "容器",
        question: "Kubernetes 中容器的镜像拉取策略有哪些？",
        type: "多选",
        options: [
            "Always",
            "IfNotPresent",
            "Never",
            "OnFailure"
        ],
        answer: [0, 1, 2],
        explanation: "镜像拉取策略（imagePullPolicy）包括：Always（总是拉取镜像，适用于 latest 标签）、IfNotPresent（本地没有镜像时拉取，默认用于非 latest 标签）、Never（只使用本地镜像，从不拉取）。OnFailure 不是镜像拉取策略（它是 Job 重启策略之一）。"
    },
    {
        module: "容器",
        question: "Pod 中容器的环境变量可以从哪些来源获取？",
        type: "多选",
        options: [
            "直接定义",
            "ConfigMap",
            "Secret",
            "字段引用（Downward API）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Pod 容器的环境变量可以从多种来源获取：直接在 Pod YAML 中定义、从 ConfigMap 引入、从 Secret 引入（安全敏感信息）、通过 Downward API 引用 Pod 自身的字段（如 Pod 名称、IP、标签等）。这提供了灵活的配置方式。"
    },
    {
        module: "容器",
        question: "Kubernetes 中什么是运行时类（RuntimeClass）？",
        type: "单选",
        options: [
            "容器的类定义",
            "为 Pod 选择不同的容器运行时配置",
            "Pod 的资源类别",
            "容器镜像的类别"
        ],
        answer: [1],
        explanation: "RuntimeClass 定义了不同的容器运行时配置，允许 Pod 选择不同的运行时（如 gVisor、Kata Containers 等安全容器运行时）。通过设置 Pod 的 runtimeClassName 字段，Pod 将使用该运行时类定义的运行时配置。这在同一个集群内混合使用不同运行时场景很有用。"
    },
    {
        module: "容器",
        question: "Pod 中容器终止后的重启策略有哪些？",
        type: "多选",
        options: [
            "Always",
            "OnFailure",
            "Never",
            "UnlessStopped"
        ],
        answer: [0, 1, 2],
        explanation: "容器的重启策略（restartPolicy）包括：Always（总是重启，默认）、OnFailure（失败时重启，退出码非零）、Never（从不重启）。UnlessStopped 不是 Kubernetes 的重启策略（这是 Docker 的策略之一）。重启策略应用于 Pod 级别，作用于所有容器。"
    },
    {
        module: "容器",
        question: "Kubernetes 中什么是容器资源请求（Request）和限制（Limit）？",
        type: "多选",
        options: [
            "Request 是容器保证可用的最小资源量",
            "Limit 是容器可以使用的最大资源量",
            "Request 必须大于 Limit",
            "如果没有设置 Limit，容器可以使用节点所有可用资源"
        ],
        answer: [0, 1, 3],
        explanation: "Request 是容器保证可以使用的最小资源量，用于调度决策。Limit 是容器可以使用资源的上限，超过时可能被 OOM 杀掉。Request 不一定要大于 Limit（通常相反）。如果没有设置 Limit，容器可以使用节点上所有可用资源（可能导致资源竞争和影响其他 Pod）。"
    },
    {
        module: "容器",
        question: "Kubernetes 中的 Init 容器是什么？",
        type: "单选",
        options: [
            "第一个启动的应用容器",
            "在应用容器启动前运行的初始化容器",
            "始终运行的监控容器",
            "用于调试的容器"
        ],
        answer: [1],
        explanation: "Init 容器在主应用容器启动前运行，用于执行初始化任务（如等待依赖、设置配置、下载数据等）。Init 容器按顺序执行，必须成功完成后才会启动应用容器。它有自己的镜像和资源配置，与普通容器一样但生命周期不同。"
    },
    {
        module: "容器",
        question: "Kubernetes 中什么是容器运行时接口（CRI）？",
        type: "单选",
        options: [
            "定义容器镜像格式的接口",
            "定义 kubelet 与容器运行时交互的接口",
            "定义容器网络的接口",
            "定义容器存储的接口"
        ],
        answer: [1],
        explanation: "CRI 定义 kubelet 与容器运行时交互的接口，包括镜像服务和运行服务两个主要接口。这使 Kubernetes 无需修改核心代码就可支持新的容器运行时。镜像格式是 OCI 规范，网络接口是 CNI，存储接口是 CSI。"
    },
    {
        module: "容器",
        question: "Pod 中容器可以访问哪些信息（Downward API）？",
        type: "多选",
        options: [
            "Pod 名称",
            "Pod IP",
            "Pod 标签",
            "节点的 IP 地址"
        ],
        answer: [0, 1, 2],
        explanation: "Downward API 允许 Pod 在不调用 API Server 的情况下访问自身的元数据：Pod 名称、IP、标签、注解、命名空间、资源限制等。节点的 IP 地址不能直接通过 Downward API 获取（但可以通过环境变量或 HostNetwork 模式访问）。"
    },
    {
        module: "容器",
        question: "Pod 中容器的安全上下文包括哪些设置？",
        type: "多选",
        options: [
            "运行用户 ID",
            "特权模式",
            "只读根文件系统",
            "Capabilities"
        ],
        answer: [0, 1, 2, 3],
        explanation: "容器安全上下文（securityContext）包括：运行用户 ID（runAsUser）、特权模式（privileged）、只读根文件系统（readOnlyRootFilesystem）、Linux Capabilities（add/drop）。这些设置增强容器安全性，最小化权限原则。其他选项还有 SELinux 上下文、AppArmor 配置等。"
    },
    {
        module: "容器",
        question: "Kubernetes 中什么是容器镜像名称的摘要（Digest）？",
        type: "单选",
        options: [
            "镜像标签，如 latest",
            "基于镜像内容的唯一标识符，如 sha256:...",
            "镜像仓库地址",
            "镜像的版本号"
        ],
        answer: [1],
        explanation: "镜像摘要（digest）是基于镜像内容计算的唯一标识符，格式为 `sha256:...`。相比标签（如 v1.0、latest）， digest 更可靠（不会被复用或修改）。在 Kubernetes 中可以使用 `image: nginx@sha256:...` 的形式指定镜像。推送镜像到仓库时会生成摘要。"
    },
    {
        module: "容器",
        question: "Pod 在节点上如何访问主机文件系统？",
        type: "单选",
        options: [
            "默认可以访问",
            "通过 hostPath 卷挂载",
            "通过配置 volumeClaimTemplates",
            "通过 downward API"
        ],
        answer: [1],
        explanation: "Pod 访问主机文件系统通过 hostPath 卷挂载。注意这有安全风险（特别是有特权容器时），要谨慎使用。默认情况下 Pod 无法访问主机文件系统。volumeClaimTemplates 用于 StatefulSet 的持久化存储，downward API 用于访问 Pod 元数据。"
    },
    {
        module: "容器",
        question: "Kubernetes 中容器的就绪态探针（Readiness Probe）用于什么？",
        type: "单选",
        options: [
            "判断容器是否存活",
            "判断容器是否准备好接收流量",
            "定期检查容器健康状态",
            "定时重启容器"
        ],
        answer: [1],
        explanation: "就绪态探针（readinessProbe）判断容器是否准备好接收流量（应用已初始化并正常工作）。如果探测失败，Service 会将该 Pod 从端点列表中移除。存活态探针（livenessProbe）判断容器是否存活，失败时重启容器。定期检查是探测机制，启动探针（startupProbe）用于启动慢的容器。"
    },
    {
        module: "容器",
        question: "Kubernetes 中容器的启动探针（Startup Probe）的作用是什么？",
        type: "单选",
        options: [
            "判断容器是否启动完成",
            "判断容器是否存活",
            "判断容器是否准备好接收流量",
            "定期重启容器"
        ],
        answer: [0],
        explanation: "启动探针（startupProbe）判断容器是否启动完成。对于启动时间很长的容器，可以使用启动探针防止被存活探针误杀。如果启动期间启动探测失败，容器会被重启。存活态探针（livenessProbe）判断是否存活，就绪态探针（readinessProbe）判断是否准备好。"
    },
    {
        module: "容器",
        question: "Kubernetes 中当 Pod 内存超过 Limit 时会发生什么？",
        type: "单选",
        options: [
            "Pod 被重新调度",
            "容器可能被 OOM Killer 杀掉",
            "Pod 会被删除",
            "容器被暂停"
        ],
        answer: [1],
        explanation: "当容器内存使用超过 Limit 时，容器可能被 Linux OOM Killer 杀掉（根据 OOM 分值）。这会导致容器重启（如果重启策略是 Always 或 OnFailure）。Pod 不会被重新调度（除非节点资源不足或失效）。删除 Pod 需要手动或控制器操作。容器不会暂停，是直接被杀掉。"
    },
    {
        module: "容器",
        question: "Kubernetes 中当 Pod CPU 超过 Limit 时会发生什么？",
        type: "单选",
        options: [
            "Pod 被重新调度",
            "容器被限制到 Limit，但不会被杀掉",
            "Pod 会被删除",
            "容器被强制停止"
        ],
        answer: [1],
        explanation: "当容器 CPU 使用超过 Limit 时，容器会被节流（throttled）到 Limit 值，不会被杀掉（CPU 是可压缩资源）。这与内存不同（不可压缩，会被 OOM 杀掉）。节流可能导致应用性能下降，但不会中断服务。"
    },
    {
        module: "容器",
        question: "Kubernetes 中Pod 可以与节点共享哪些网络命名空间？",
        type: "多选",
        options: [
            "网络命名空间（Network Namespace）- hostNetwork",
            "PID 命名空间 - hostPID",
            "IPC 命名空间 - hostIPC",
            "UTS 命名空间 - hostIPC"
        ],
        answer: [0, 1, 2],
        explanation: "Pod 可以配置 hostNetwork: true 共享节点的网络命名空间（ Pod 与节点共享网络栈），hostPID 共享 PID 命名空间（可以看到节点上的进程），hostIPC 共享 IPC 命名空间（共享 IPC 资源）。注意这些选项有安全风险（特别是 hostPID）。UTS 命名空间共享通过 hostNetwork 或 Pod 内自动共享。"
    },
    {
        module: "容器",
        question: "Kubernetes 中什么是 Pause 容器？",
        type: "单选",
        options: [
            "用于暂停 Pod 的容器",
            "Pod 基础设施容器，负责共享网络和存储命名空间",
            "用于调试的容器",
            "在 Pod 启动前运行的容器"
        ],
        answer: [1],
        explanation: "Pause 容器（或称为 sandbox 容器）是 Pod 的基础设施容器，负责持有网络和存储命名空间，Pod 中的其他容器共享这些命名空间。Pause 容器始终处于暂停状态（Pause 命令），不执行任何应用逻辑。当所有应用容器停止时，Pause 容器才会停止（ Pod 也就终止）。"
    },
    {
        module: "容器",
        question: "Kubernetes 中如何优雅地终止容器？",
        type: "多选",
        options: [
            "发送 SIGTERM 信号",
            "等待 terminationGracePeriodSeconds",
            "如果超时发送 SIGKILL",
            "直接强制删除 Pod"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 优雅终止流程：发送 SIGTERM 信号给容器主进程（PID 1）、等待 terminationGracePeriodSeconds（默认 30 秒）、如果容器未停止则发送 SIGKILL。期间可以调用 PreStop 钩子执行清理。直接强制删除（kubectl delete --force=true）跳过优雅终止。"
    },
    {
        module: "容器",
        question: "Kubernetes 中容器镜像的私有仓库认证如何配置？",
        type: "多选",
        options: [
            "在 Pod 的 imagePullSecrets 字段中指定 Secret",
            "在 ServiceAccount 的 imagePullSecrets 中指定（Pod 自动继承）",
            "在每个节点上配置 docker config.json",
            "使用 Docker Hub 公共镜像"
        ],
        answer: [0, 1],
        explanation: "私有仓库认证可以通过两种方式配置：Pod 的 imagePullSecrets 字段（针对该 Pod）、ServiceAccount 的 imagePullSecrets（使用该 SA 的 Pod 自动继承）。Secret 类型为 kubernetes.io/dockerconfigjson。在每个节点上配置 docker config.json 是手动方式，不推荐也不直接支持（除非使用特定 CRI）。公开镜像无需认证。"
    },
    {
        module: "容器",
        question: "Kubernetes 中容器镜像的仓库密钥（Secret）类型是什么？",
        type: "单选",
        options: [
            "Opaque",
            "kubernetes.io/dockercfg",
            "kubernetes.io/dockerconfigjson",
            "kubernetes.io/tls"
        ],
        answer: [2],
        explanation: "私有 Docker 仓库认证使用的 Secret 类型是 `kubernetes.io/dockerconfigjson`。它包含 ~/.docker/config.json 的 Base64 编码内容（包含认证信息）。kubernetes.io/dockercfg 是旧版本类型（支持旧版 docker 配置格式），Opaque 是通用 Secret 类型，kubernetes.io/tls 用于 TLS 证书。"
    },
    {
        module: "容器",
        question: "Kubernetes 中如何限制容器可以使用节点的哪些设备？",
        type: "多选",
        options: [
            "使用 Device Plugins",
            "使用安全上下文的 capabilities",
            "使用 hostPath 挂载设备",
            "使用 Privileged 模式"
        ],
        answer: [0, 2],
        explanation: "容器可以使用节点的设备通过 Device Plugins（如 NVIDIA GPU 设备插件）或 hostPath 挂载设备节点（如 /dev/sda）。capabilities 用于权限控制（不是访问设备），Privileged 模式获得所有设备访问权限但不推荐（风险高）。"
    },
    {
        module: "容器",
        question: "Kubernetes 中 Docker 与 Kubernetes 的关系是什么？",
        type: "单选",
        options: [
            "Docker 是 Kubernetes 的唯一运行时",
            "Kubernetes 曾经使用 Docker 作为容器运行时，现在通过 CRI 支持多种运行时",
            "Kubernetes 和 Docker 竞争关系",
            "Kubernetes 是 Docker 的组件"
        ],
        answer: [1],
        explanation: "Kubernetes 通过 CRI 接口支持多种容器运行时，包括 Docker（通过 dockershim）、containerd、CRI-O 等。Docker 曾经是主要运行时，现在 dockershim 已废弃（Kubernetes 1.24 移除）。它们不是竞争关系：Kubernetes 是容器编排系统，Docker 是容器运行时/平台。"
    },
    {
        module: "容器",
        question: "Pod 中容器通过 DNS 访问其他 Service 时，使用什么域名？",
        type: "单选",
        options: [
            "<service-name>",
            "<service-name>.<namespace>.svc.cluster.local",
            "<service-name>.svc",
            "任意域名"
        ],
        answer: [1],
        explanation: "Pod 访问同一命名空间的 Service 使用域名 `<service-name>.<namespace>.svc.cluster.local`，但由于搜索配置，可以简写为 `<service-name>`（同一命名空间）、`<service-name>.<namespace>`（跨命名空间）。完整格式最可靠。格式说明：service-name 是服务名称，namespace 是命名空间，svc 是固定子域，cluster.local 是集群域。"
    },
    {
        module: "容器",
        question: "Kubernetes 中如何查看 Pod 中容器的日志？",
        type: "多选",
        options: [
            "kubectl logs <pod-name>",
            "kubectl logs <pod-name> -c <container-name>",
            "进入容器后查看日志文件",
            "直接查看节点日志目录"
        ],
        answer: [0, 1, 2],
        explanation: "查看容器日志的方式：`kubectl logs <pod-name>`（查看默认容器日志）、`kubectl logs <pod-name> -c <container-name>`（多容器 Pod 指定容器）、进入容器后查看日志文件（`kubectl exec`）。直接查看节点日志目录可以但不是标准方式（路径与运行时相关）。"
    },
    {
        module: "容器",
        question: "Kubernetes 中如何实现 Pod 中容器间的通信？",
        type: "单选",
        options: [
            "通过 Service",
            "通过 localhost:端口（本地回环）",
            "通过主机 IP",
            "通过节点端口"
        ],
        answer: [1],
        explanation: "Pod 中容器间通信通过 localhost + 端口，因为它们共享网络命名空间。例如容器 A 监听 8000 端口，容器 B 可以通过 `http://localhost:8000` 访问。Service 用于跨 Pod 通信，主机 IP 用于 HostNetwork 模式或访问节点网络，节点端口是 NodePort Service 的类型。"
    },
    {
        module: "容器",
        question: "Kubernetes 中 Pod 的 DNS 策略有哪些？",
        type: "多选",
        options: [
            "Default（继承节点的 DNS）",
            "ClusterFirst（默认，使用集群 DNS）",
            "ClusterFirstWithHostNet（使用集群 DNS 但主机网络）",
            "None（不配置 DNS，使用自定义配置）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "DNS 策略包括：Default（继承节点 DNS）、ClusterFirst（使用集群 DNS，Pod 域名解析优先用集群 DNS）、ClusterFirstWithHostNet（与 ClusterFirst 类似，适用于 hostNetwork Pod）、None（不配置 DNS，支持自定义 DNS）。Default 策略通常不用于 Kubernetes，因为无法解析 Service 域名。"
    },
    {
        module: "容器",
        question: "Kubernetes 中容器可以设置哪些级别的安全策略？",
        type: "多选",
        options: [
            "容器级别的 securityContext",
            "Pod 级别的 securityContext",
            "Pod Security Policy（已废弃）",
            "Pod Security Standards（Pod 安全标准）"
        ],
        answer: [0, 1, 3],
        explanation: "容器安全策略可以从多个级别设置：容器级别的 securityContext（针对单个容器）、Pod 级别的 securityContext（应用于所有容器）、Pod Security Standards（PSC，定义安全基准：privileged、baseline、restricted）。Pod Security Policy 已在 Kubernetes 1.25 废弃，使用 PSC 替代。"
    },
    {
        module: "容器",
        question: "Kubernetes 中容器镜像的分层结构有什么优势？",
        type: "多选",
        options: [
            "节省存储空间",
            "加快镜像拉取速度（共享层）",
            "便于维护和更新",
            "提高容器性能"
        ],
        answer: [0, 1, 2],
        explanation: "容器镜像分层结构优势：节省存储空间（共享相同层）、加快拉取速度（跳过已存在的层）、便于维护和更新（只更新变动的层）。分层不提高容器运行性能（镜像与运行时无关）。每一层是只读的，容器启动时添加可写层。"
    },
    {
        module: "容器",
        question: "Kubernetes 中如何调试启动失败的容器？",
        type: "多选",
        options: [
            "kubectl describe pod",
            "kubectl logs",
            "kubectl exec 进入其他容器",
            "查看节点日志"
        ],
        answer: [0, 1, 2],
        explanation: "调试启动失败容器的方法：`kubectl describe pod` 查看事件（容器启动失败原因）、`kubectl logs --previous` 查看上一个容器日志（如果容器已重启）、`kubectl exec` 进入同一 Pod 的其他容器调试（如果其他容器正常运行）、进入节点查看。"
    },
    {
        module: "容器",
        question: "Kubernetes 中容器的健康检查有哪些类型？",
        type: "多选",
        options: [
            "Liveness Probe（存活探针）",
            "Readiness Probe（就绪探针）",
            "Startup Probe（启动探针）",
            "Health Probe（健康探针）"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 有三种健康检查探针：存活探针（判断容器是否存活，失败时重启）、就绪探针（判断容器是否准备好，失败时移除 Service 端点）、启动探针（判断容器是否启动，防止存活探针误杀启动慢的容器）。没有 Health Probe 这一类（可能命名混淆）。"
    },
    {
        module: "容器",
        question: "Kubernetes 中如何设置容器的端口？",
        type: "单选",
        options: [
            "在 spec.containers.ports 字段中设置",
            "在 Pod spec.ports 字段中设置",
            "通过环境变量设置",
            "自动分配"
        ],
        answer: [0],
        explanation: "容器端口在 spec.containers.ports 中设置，包括 containerPort（容器端口）、protocol（协议）、name（名称）等。Pod 没有 spec.ports（那是 Service 的）。环境变量用于应用配置，不能设置端口。端口不会自动分配（除非使用 hostPort 和可用端口）。"
    },
    {
        module: "容器",
        question: "Kubernetes 中什么是容器的退出码？",
        type: "单选",
        options: [
            "容器的 ID",
            "容器退出时返回给系统的状态码",
            "容器的进程 ID",
            "容器的名称"
        ],
        answer: [1],
        explanation: "容器退出码是容器主进程退出时返回的状态码。0 表示成功，非零表示失败。Kubernetes 根据退出码和重启策略决定是否重启容器。可以通过 `kubectl describe pod` 查看容器的退出码和最后退出时间。退出码是调试容器失败原因的重要信息。"
    },
    {
        module: "容器",
        question: "Kubernetes 中如何从 Pod 内部访问 API Server？",
        type: "多选",
        options: [
            "使用 ServiceAccount Token（挂载在 /var/run/secrets/kubernetes.io/serviceaccount）",
            "使用 https://kubernetes.default.svc",
            "使用 localhost:6443",
            "使用集群外部地址"
        ],
        answer: [0, 1],
        explanation: "Pod 访问 API Server 使用 ServiceAccount Token（自动挂载）和服务 kubernetes（地址 https://kubernetes.default.svc 或 kubernetes.default），通过 ServiceAccount 的 ClusterRole 有相应的权限。不能使用 localhost:6443（除非配置 hostNetwork），可以但通常不用外部地址。"
    },
{
        module: "工作负载",
        question: "Pod 的最小调度单元是什么？",
        type: "单选",
        options: [
            "容器",
            "Pod",
            "Deployment",
            "Service",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Pod 是 Kubernetes 的最小调度单元，它封装一个或多个容器，共享存储和网络。容器是更底层的概念，Kubernetes 通过调度 Pod 来调度容器。"
    },
    {
        module: "工作负载",
        question: "Pod 中的容器如何共享存储？",
        type: "单选",
        options: [
            "通过 Volume 共享",
            "无法共享",
            "通过网络共享",
            "通过容器间直接通信",
        ],
        answer: [0],
        difficulty: "进阶",
        explanation: "Pod 中的容器可以通过 Volume 共享存储。Volume 定义在 Pod 级别，可以被同一个 Pod 中的所有容器挂载和访问。"
    },
    {
        module: "工作负载",
        question: "Pod 的生命周期包括哪些阶段？",
        type: "多选",
        options: [
            "Pending",
            "Running",
            "Succeeded",
            "Failed",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "高级",
        explanation: "Pod 的生命周期包括：Pending（等待调度）、Running（运行中）、Succeeded（成功完成）、Failed（失败）、Unknown（未知状态）等。"
    },
    {
        module: "工作负载",
        question: "如何查看 Pod 的详细状态？",
        type: "单选",
        options: [
            "kubectl status pod",
            "kubectl describe pod",
            "kubectl show pod",
            "kubectl info pod",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "kubectl describe pod 显示 Pod 的详细状态，包括事件、容器状态、资源分配等。kubectl status、show、info 不是标准命令。"
    },
    {
        module: "工作负载",
        question: "Pod 的重启策略有哪几种？",
        type: "多选",
        options: [
            "Always",
            "OnFailure",
            "Never",
            "Automatic",
        ],
        answer: [0, 1, 2],
        difficulty: "进阶",
        explanation: "Pod 的 restartPolicy 有三种：Always（总是重启）、OnFailure（失败时重启）、Never（从不重启）。没有 Automatic 这个选项。"
    },
    {
        module: "工作负载",
        question: "Pod 中容器的终止消息是什么？",
        type: "单选",
        options: [
            "容器退出时写入的文件内容",
            "容器的退出码",
            "容器最后的日志",
            "容器的运行时长",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "terminationMessagePath 指定容器退出时写入终止消息的路径，默认为 /dev/termination-log。这有助于调试容器退出原因。"
    },
    {
        module: "工作负载",
        question: "Deployment 的主要作用是什么？",
        type: "单选",
        options: [
            "管理无状态应用",
            "管理有状态应用",
            "存储数据",
            "网络通信",
        ],
        answer: [0],
        difficulty: "基础",
        explanation: "Deployment 管理无状态应用，提供声明式更新、滚动更新、回滚等功能。有状态应用由 StatefulSet 管理。"
    },
    {
        module: "工作负载",
        question: "如何扩容 Deployment？",
        type: "单选",
        options: [
            "kubectl scale deployment <name> --replicas=N",
            "kubectl resize deployment <name> --replicas=N",
            "kubectl expand deployment <name> --replicas=N",
            "kubectl deployment scale <name> N",
        ],
        answer: [0],
        difficulty: "进阶",
        explanation: "kubectl scale deployment <name> --replicas=N 扩缩容 Deployment。resize、expand 不是标准命令。也可以直接编辑 YAML 文件的 replicas 字段。"
    },
    {
        module: "工作负载",
        question: "Deployment 的滚动更新策略包括哪些？",
        type: "多选",
        options: [
            "RollingUpdate",
            "Recreate",
            "MaxUnavailable",
            "MaxSurge",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "高级",
        explanation: "更新策略 RollingUpdate 逐步替换，Recreate 先全删再创建。MaxUnavailable 和 MaxSurge 控制更新过程中不可用和额外的 Pod 数量限制。"
    },
    {
        module: "工作负载",
        question: "如何回滚 Deployment？",
        type: "单选",
        options: [
            "kubectl rollback deployment <name>",
            "kubectl rollout undo deployment <name>",
            "kubectl back deployment <name>",
            "kubectl revert deployment <name>",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "kubectl rollout undo deployment <name> 回滚 Deployment 到上一版本。也可以使用 --to-revision 指定版本。rollback 是旧版别名。"
    },
    {
        module: "工作负载",
        question: "Deployment 的 revisionHistoryLimit 有什么作用？",
        type: "单选",
        options: [
            "限制保留的 Pod 数量",
            "限制保留的历史版本数",
            "限制更新的频率",
            "限制 Pod 的重启次数",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "revisionHistoryLimit 限制保留的 ReplicaSet 历史版本数，用于回滚。默认为 10。设置得更小可节省资源，设为 0 则不可回滚。"
    },
    {
        module: "工作负载",
        question: "StatefulSet 适用于什么类型的应用？",
        type: "单选",
        options: [
            "无状态应用",
            "有状态应用",
            "批处理任务",
            "定时任务",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "StatefulSet 适用于有状态应用，提供稳定的网络标识、持久化存储、有序部署和扩展。无状态应用使用 Deployment。"
    },
    {
        module: "工作负载",
        question: "StatefulSet 的 Pod 名称有什么特点？",
        type: "单选",
        options: [
            "随机生成",
            "包含序号，如 web-0, web-1",
            "固定命名",
            "使用哈希值",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "StatefulSet 的 Pod 名称包含序号：web-0, web-1, web-2 等。这确保稳定的网络标识，即使 Pod 重建也会保持相同的名称。"
    },
    {
        module: "工作负载",
        question: "StatefulSet 的部署顺序是怎样的？",
        type: "单选",
        options: [
            "从 0 到 N-1 有序部署",
            "同时部署所有 Pod",
            "从 N-1 到 0 倒序部署",
            "随机部署",
        ],
        answer: [0],
        difficulty: "进阶",
        explanation: "StatefulSet 的 Pod 按从 0 到 N-1 的顺序有序部署，前一个 Pod 变为 Running 后才部署下一个。扩展时从 N 开始向后添加，缩容时从 N-1 开始向前删除。"
    },
    {
        module: "工作负载",
        question: "StatefulSet 如何管理存储？",
        type: "单选",
        options: [
            "使用临时存储",
            "为每个 Pod 创建独立的 PVC",
            "共享 PVC",
            "不管理存储",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "StatefulSet 可以为每个 Pod 创建独立的 PersistentVolumeClaim，即使 Pod 重建，存储也保持绑定，确保数据持久化。"
    },
    {
        module: "工作负载",
        question: "StatefulSet 的 headless Service 有什么作用？",
        type: "单选",
        options: [
            "负载均衡",
            "提供稳定的网络标识和 DNS",
            "暴露集群外部访问",
            "健康检查",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "StatefulSet 需要创建 headless Service（ClusterIP: None），这为每个 Pod 提供稳定的 DNS 记录，如 web-0.default.svc.cluster.local。"
    },
    {
        module: "工作负载",
        question: "DaemonSet 保证什么？",
        type: "单选",
        options: [
            "每个节点运行一个 Pod",
            "至少运行 N 个副本",
            "所有节点共享存储",
            "自动回滚",
        ],
        answer: [0],
        difficulty: "进阶",
        explanation: "DaemonSet 保证每个（或匹配选择器的）节点运行一个 Pod。适用于集群范围的后台任务，如日志收集、监控代理等。"
    },
    {
        module: "工作负载",
        question: "如何在特定节点上运行 DaemonSet Pod？",
        type: "多选",
        options: [
            "使用 nodeSelector",
            "使用 nodeAffinity",
            "使用 toleration",
            "使用 annotation",
        ],
        answer: [0, 1, 2],
        difficulty: "高级",
        explanation: "可以使用 nodeSelector、nodeAffinity 控制调度到哪些节点，使用 toleration 允许调度到有特定污点的节点。annotation 不影响调度。"
    },
    {
        module: "工作负载",
        question: "DaemonSet 的更新策略有哪些？",
        type: "多选",
        options: [
            "RollingUpdate",
            "OnDelete",
            "Recreate",
            "Automatic",
        ],
        answer: [0, 1],
        difficulty: "基础",
        explanation: "DaemonSet 的 updateStrategy 可以是 RollingUpdate（滚动更新）或 OnDelete（删除时更新）。没有 Recreate 和 Automatic 选项。"
    },
    {
        module: "工作负载",
        question: "删除 DaemonSet 会怎样？",
        type: "单选",
        options: [
            "只删除控制器，Pod 保留",
            "删除控制器和 Pod",
            "只删除 Pod",
            "什么都不做",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "删除 DaemonSet 会级联删除它管理的 Pod。如果只想删除控制器而保留 Pod，可以使用 --cascade=false（已废弃）或停止后再删除。"
    },
    {
        module: "工作负载",
        question: "如何确保 DaemonSet Pod 调度到 master 节点？",
        type: "单选",
        options: [
            "配置 toleration 匹配 master 污点",
            "修改 master 为工作节点",
            "使用 nodeScheduler",
            "直接标注 master",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "Master 节点通常有 NoSchedule 或 NoExecute 污点，需要给 DaemonSet 添加相应的 toleration。也可以移除污点但不推荐生产环境使用。"
    },
    {
        module: "工作负载",
        question: "Job 的作用是什么？",
        type: "单选",
        options: [
            "管理长期运行的服务",
            "管理一次性任务",
            "管理定时任务",
            "管理有状态应用",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Job 管理一次性任务，确保指定数量的 Pod 成功完成。长期运行服务使用 Deployment，定时任务使用 CronJob。"
    },
    {
        module: "工作负载",
        question: "CronJob 的 schedule 字段使用什么格式？",
        type: "单选",
        options: [
            "cron 表达式",
            "系统时间戳",
            "ISO 8601",
            "自定义格式",
        ],
        answer: [0],
        difficulty: "进阶",
        explanation: "CronJob 的 schedule 使用标准 cron 表达式，如 */5 * * * * 表示每 5 分钟运行一次。"
    },
    {
        module: "工作负载",
        question: "如何查看已完成的 Job？",
        type: "单选",
        options: [
            "kubectl get completed-jobs",
            "kubectl get jobs",
            "kubectl show jobs",
            "kubectl jobs --completed",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "kubectl get jobs 列出所有 Job，包括已完成的。使用 kubectl get job <name> 查看特定 Job。已完成的 Job 会被保留，除非设置 TTL。"
    },
    {
        module: "工作负载",
        question: "Job 的 completions 字段表示什么？",
        type: "单选",
        options: [
            "任务必须完成的次数",
            "最大并发数",
            "超时时间",
            "重试次数",
        ],
        answer: [0],
        difficulty: "基础",
        explanation: "completions 表示任务必须成功完成的次数。parallelism 表示并发运行的 Pod 数量。默认 completions=1，parallelism=1。"
    },
    {
        module: "工作负载",
        question: "CronJob 的 failedJobsHistoryLimit 有什么作用？",
        type: "单选",
        options: [
            "限制保留成功的历史任务",
            "限制保留失败的历史任务",
            "限制任务重试次数",
            "限制任务并发数",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "failedJobsHistoryLimit 限制保留多少失败的历史任务记录，用于调试和历史查看。类似地，successfulJobsHistoryLimit 控制成功任务。"
    },
    {
        module: "工作负载",
        question: "HPA 的全称是什么？",
        type: "单选",
        options: [
            "Horizontal Pod Autoscaler",
            "High Performance Application",
            "Host Port Availability",
            "Hardware Provisioning Agent",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "HPA (Horizontal Pod Autoscaler) 自动调整工作负载（Deployment、StatefulSet 等）的 Pod 数量，基于 CPU、内存或自定义指标。"
    },
    {
        module: "工作负载",
        question: "HPA 基于哪些指标自动扩展？",
        type: "多选",
        options: [
            "CPU 利用率",
            "内存利用率",
            "自定义指标",
            "磁盘使用量",
        ],
        answer: [0, 1, 2],
        difficulty: "基础",
        explanation: "HPA 支持 CPU、内存资源指标，以及自定义指标（通过自定义指标 API 或外部指标 API）。磁盘使用量不是标准的 HPA 指标。"
    },
    {
        module: "工作负载",
        question: "如何创建 HPA？",
        type: "单选",
        options: [
            "kubectl autoscale deployment <name> --cpu-percent=80 --min=2 --max=10",
            "kubectl hpa create deployment <name>",
            "kubectl create hpa --deployment <name>",
            "kubectl scale auto deployment <name>",
        ],
        answer: [0],
        difficulty: "进阶",
        explanation: "kubectl autoscale deployment <name> --cpu-percent=80 --min=2 --max=10 创建 HPA。也可以使用 YAML 文件创建 HorizontalPodAutoscaler 对象。"
    },
    {
        module: "工作负载",
        question: "HPA 的 scaling 行为（behavior）可以配置什么？",
        type: "多选",
        options: [
            "scaleUp",
            "scaleDown",
            "stabilityWindow",
            "policies",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "高级",
        explanation: "HPA behavior 配置扩缩容行为：scaleUp 和 scaleDown 限制扩缩容速度，stabilityWindow 设置稳定窗口避免波动，policies 定义具体的扩缩容策略。"
    },
    {
        module: "工作负载",
        question: "为什么 HPA 可能不扩展？",
        type: "多选",
        options: [
            "没有设置 requests",
            "指标未达到阈值",
            "处于稳定窗口内",
            "已达到 maxReplicas",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "基础",
        explanation: "HPA 不扩展可能原因：没有设置容器资源 requests（无法计算使用率）、指标未到达目标阈值、处于稳定窗口内避免抖动、已达到最大副本数。"
    },
    {
        module: "网络",
        question: "Service 的类型有哪几种？",
        type: "多选",
        options: [
            "ClusterIP",
            "NodePort",
            "LoadBalancer",
            "ExternalName",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "基础",
        explanation: "Service 类型包括：ClusterIP（集群内部，默认）、NodePort（通过节点端口暴露）、LoadBalancer（云负载均衡器）、ExternalName（映射到外部 DNS 名称）。"
    },
    {
        module: "网络",
        question: "ClusterIP 类型的 Service 可以从哪里访问？",
        type: "单选",
        options: [
            "集群外部",
            "所有节点",
            "只能在集群内部",
            "只能从 master 节点",
        ],
        answer: [2],
        difficulty: "进阶",
        explanation: "ClusterIP Service 提供集群内部访问，从 Pod 内部或其他 Service 可以访问。从集群外部访问需要 NodePort、LoadBalancer 或 Ingress。"
    },
    {
        module: "网络",
        question: "Service 如何选择后端 Pod？",
        type: "单选",
        options: [
            "使用 Pod 名称",
            "使用 label selector",
            "使用 Pod IP",
            "使用容器端口",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "Service 通过 label selector 选择后端 Pod。当多个 Pod 匹配标签时，流量会负载均衡到这些 Pod。"
    },
    {
        module: "网络",
        question: "Service 的 sessionAffinity 有什么作用？",
        type: "单选",
        options: [
            "限制并发连接",
            "保持会话亲和性（同一客户端到同一 Pod）",
            "定义超时时间",
            "监控会话状态",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "sessionAffinity 控制是否保持会话亲和性。ClientIP 表示来自同一客户端 IP 的请求路由到同一后端 Pod。None 表示不保持（默认负载均衡）。"
    },
    {
        module: "网络",
        question: "如何暴露 Service 到集群外部？",
        type: "多选",
        options: [
            "NodePort",
            "LoadBalancer",
            "Ingress",
            "kubectl port-forward",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "进阶",
        explanation: "暴露 Service 到外部的方法：NodePort 节点端口、LoadBalancer 云负载均衡器、Ingress HTTP(S) 路由。kubectl port-forward 适合本地临时转发。"
    },
    {
        module: "网络",
        question: "Ingress 的主要作用是什么？",
        type: "单选",
        options: [
            "提供外部负载均衡",
            "管理 HTTP(S) 路由规则",
            "管理 TCP/UDP 流量",
            "存储静态文件",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "Ingress 管理 HTTP(S) 路由规则，将外部流量路由到 Service。TCP/UDP 使用 Service 的 NodePort 或 LoadBalancer。需要 Ingress Controller 实现。"
    },
    {
        module: "网络",
        question: "Ingress Controller 是什么？",
        type: "单选",
        options: [
            "Kubernetes 控制平面组件",
            "实现 Ingress 规则的负载均衡器",
            "调度 Ingress 的控制器",
            "监控 Ingress 的服务",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Ingress Controller 是实现 Ingress API 的负载均衡器（如 Nginx、Traefik、HAProxy）。它监听 Ingress 资源变化并配置底层的负载均衡器。"
    },
    {
        module: "网络",
        question: "Ingress 可以配置哪些内容？",
        type: "多选",
        options: [
            "主机名路由（host）",
            "路径路由（path）",
            "TLS 证书",
            "HTTP 超时",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "进阶",
        explanation: "Ingress 可以配置：host（主机名路由），path（路径路由），TLS（证书配置），annotations（超时、重定向等高级配置）。"
    },
    {
        module: "网络",
        question: "如何为 Ingress 配置 TLS？",
        type: "单选",
        options: [
            "在 Ingress spec 中添加证书",
            "创建 Secret 并在 Ingress spec 中引用",
            "在 Pod 中配置",
            "自动生成",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "Ingress TLS 通过创建 Secret（类型 kubernetes.io/tls），包含证书和私钥，然后在 Ingress spec.tls 中引用 Secret。"
    },
    {
        module: "网络",
        question: "Ingress 的 pathType 有哪些选项？",
        type: "多选",
        options: [
            "Prefix",
            "Exact",
            "ImplementationSpecific",
            "Wildcard",
        ],
        answer: [0, 1, 2],
        difficulty: "基础",
        explanation: "Ingress pathType 可以是：Prefix（路径前缀匹配）、Exact（精确匹配）、ImplementationSpecific（由实现决定）。没有 Wildcard 选项。"
    },
    {
        module: "网络",
        question: "NetworkPolicy 的作用是什么？",
        type: "单选",
        options: [
            "管理 DNS 配置",
            "控制 Pod 间网络流量",
            "负载均衡",
            "存储管理",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "NetworkPolicy 控制 Pod 间网络流量，定义允许或拒绝的入站和出站规则。实现由网络插件（CNI）提供。"
    },
    {
        module: "网络",
        question: "NetworkPolicy 的 podSelector 选择什么？",
        type: "单选",
        options: [
            "源 Pod",
            "目标 Pod",
            "所有 Pod",
            "Service",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "NetworkPolicy 在策略定义的 podSelector 选择目标 Pod（要应用策略的 Pod）。From/To 部分的 podSelector 选择流量来源/目标。"
    },
    {
        module: "网络",
        question: "默认情况下，Pod 之间可以互访吗？",
        type: "单选",
        options: [
            "可以，除非 NetworkPolicy 阻止",
            "不可以，需要显式允许",
            "只能在同一命名空间",
            "需要设置标签",
        ],
        answer: [0],
        difficulty: "基础",
        explanation: "默认情况下，所有 Pod 可以互相访问（取决于网络插件实现）。NetworkPolicy 用于限制流量，显式定义允许或拒绝的规则。"
    },
    {
        module: "网络",
        question: "NetworkPolicy 可以匹配哪些流量来源？",
        type: "多选",
        options: [
            "Pod selector",
            "Namespace selector",
            "IP block (CIDR)",
            "Service selector",
        ],
        answer: [0, 1, 2],
        difficulty: "进阶",
        explanation: "NetworkPolicy from 可以匹配：podSelector（特定 Pod）、namespaceSelector（命名空间中的 Pod）、ipBlock（IP 段）。Service 不直接匹配（通过 Pod selector）。"
    },
    {
        module: "网络",
        question: "如何查看 Pod 的 NetworkPolicy？",
        type: "单选",
        options: [
            "kubectl get networkpolicy",
            "kubectl describe pod 查看关联策略",
            "kubectl netpolicies",
            "kubectl policy",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "kubectl describe pod 会显示关联的 NetworkPolicy。也可以用 kubectl get networkpolicy -A 查看所有策略。Netpolicies、policy 不是标准命令。"
    },
    {
        module: "网络",
        question: "Kubernetes DNS 服务的名称是什么？",
        type: "单选",
        options: [
            "kube-dns",
            "coredns",
            "bind",
            "unbound",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Kubernetes 默认的 DNS 服务是 CoreDNS。旧版本使用 kube-dns（已废弃）。它们提供集群内 DNS 解析。"
    },
    {
        module: "网络",
        question: "Pod 的 DNS 策略有哪些？",
        type: "多选",
        options: [
            "Default",
            "ClusterFirst",
            "ClusterFirstWithHostNet",
            "None",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "进阶",
        explanation: "DNS policy：Default（继承宿主机配置）、ClusterFirst（使用集群 DNS，默认）、ClusterFirstWithHostNet（hostNetwork 下使用集群 DNS）、None（自定义配置）。"
    },
    {
        module: "网络",
        question: "如何从 Pod 内访问另一个 Pod？",
        type: "单选",
        options: [
            "只能使用 IP",
            "使用 DNS 名称：<pod-name>.<namespace>.svc.cluster.local",
            "使用 Service 名称",
            "以上都可以",
        ],
        answer: [3],
        difficulty: "高级",
        explanation: "可以使用 Pod IP（不稳定）、Pod DNS（有 headless Service）、Service DNS（常用）。最佳实践是通过 Service 访问。"
    },
    {
        module: "网络",
        question: "如何在集群内访问 Service？",
        type: "单选",
        options: [
            "cluster.local.<namespace>.<service-name>",
            "<service-name>.<namespace>.svc.cluster.local",
            "<namespace>.<service-name> 以上两者都可",
        ],
        answer: [2],
        difficulty: "基础",
        explanation: "Service DNS 格式：<service-name>.<namespace>.svc.cluster.local（完全限定名），<service-name>.<namespace>（同一命名空间可省略 namespace）。"
    },
    {
        module: "网络",
        question: "CoreDNS ConfigMap 配置什么？",
        type: "多选",
        options: [
            "存根域名（stubDomains）",
            "上游 DNS（upstream）",
            "正向解析（hosts）",
            "反向解析",
        ],
        answer: [0, 1, 2],
        difficulty: "进阶",
        explanation: "CoreDNS ConfigMap 可以配置：stubDomains（存根域名）、upstream（上游 DNS）、hosts（自定义域名映射、正向解析）。反向解析由 CoreDNS 自动处理。"
    },
    {
        module: "网络",
        question: "拓扑感知路由的目的是什么？",
        type: "单选",
        options: [
            "优化跨区域流量",
            "优先路由到同一区域的 Pod",
            "限制网络带宽",
            "强制加密通信",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "拓扑感知路由（topology-aware hints）使 Service 优先将流量路由到同一区域/拓扑域的 Pod，减少跨区域延迟和成本。"
    },
    {
        module: "网络",
        question: "拓扑感知路由依赖什么？",
        type: "单选",
        options: [
            "Service annotation",
            "PVC 拓扑约束",
            "节点标签",
            "Ingress 配置",
        ],
        answer: [0],
        difficulty: "基础",
        explanation: "拓扑感知路由需要 Service 添加 annotation: service.kubernetes.io/topology-aware-hints=auto。EndpointSlice 控制器基于节点拓扑生成 hints。"
    },
    {
        module: "网络",
        question: "拓扑感知路由适用于哪些 Service？",
        type: "单选",
        options: [
            "所有 Service",
            "LoadBalancer 类型 Service",
            "externalTrafficPolicy: Local 的 Service",
            "ClusterIP 类型 Service",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "拓扑感知路由主要用于云上的 LoadBalancer Service，优化跨可用区（AZ）流量。也可以用于其他类型，但最常用于 LoadBalancer。"
    },
    {
        module: "网络",
        question: "topologyKey 是什么？",
        type: "单选",
        options: [
            "节点标签键，表示拓扑域",
            "Pod 标签键",
            "Service 标签键",
            "PVC 标签键",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "topologyKey 是节点标签键，如 kubernetes.io/hostname（主机）或 topology.kubernetes.io/zone（区域），用于定义拓扑域。"
    },
    {
        module: "存储",
        question: "Kubernetes Volume 的生命周期是什么？",
        type: "单选",
        options: [
            "与容器绑定",
            "与 Pod 绑定",
            "与节点绑定",
            "永久存在",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Volume 生命周期与 Pod 绑定。Pod 删除时，临时 Volume 被删除。持久化 Volume（如 hostPath、某些 CSI）保留数据。"
    },
    {
        module: "存储",
        question: "常见的 Volume 类型有哪些？",
        type: "多选",
        options: [
            "emptyDir",
            "hostPath",
            "configMap",
            "secret",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "进阶",
        explanation: "常见 Volume：emptyDir（临时），hostPath（主机路径），configMap/secret（配置和密钥），persistentVolumeClaim（持久化），nfs、csi 等网络存储。"
    },
    {
        module: "存储",
        question: "emptyDir Volume 的作用是什么？",
        type: "单选",
        options: [
            "持久化数据",
            "Pod 容器间的临时共享存储",
            "跨节点共享",
            "备份恢复",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "emptyDir 在 Pod 创建时创建，Pod 删除时删除，适合容器间临时共享数据，不持久化。"
    },
    {
        module: "存储",
        question: "hostPath Volume 有什么特点？",
        type: "单选",
        options: [
            "自动分配存储",
            "挂载宿主机目录到 Pod",
            "跨节点共享",
            "自动备份",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "hostPath 挂载宿主机目录到 Pod，适合需要访问主机文件系统（日志、监控等），但不推荐生产环境使用（节点绑定）。"
    },
    {
        module: "存储",
        question: "如何持久化容器数据？",
        type: "单选",
        options: [
            "使用 emptyDir",
            "使用 persistentVolumeClaim",
            "使用 configMap",
            "不需要特别配置",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "持久化数据使用 PersistentVolumeClaim (PVC) 申请持久化存储。emptyDir 临时，configMap 存储配置。"
    },
    {
        module: "存储",
        question: "PV 和 PVC 的区别是什么？",
        type: "单选",
        options: [
            "没有区别",
            "PV 是存储资源，PVC 是用户请求",
            "PV 用户可写，PVC 系统管理",
            "PV 仅存在集群内",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "PersistentVolume (PV) 是集群的存储资源（管理员创建或动态配置）。PersistentVolumeClaim (PVC) 是用户对存储的请求，绑定到 PV。"
    },
    {
        module: "存储",
        question: "PVC 的 accessModes 有哪些？",
        type: "多选",
        options: [
            "ReadWriteOnce",
            "ReadOnlyMany",
            "ReadWriteMany",
            "ReadWriteOncePod",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "基础",
        explanation: "accessModes：ReadWriteOnce（RWO，单读写），ReadOnlyMany（ROX，多只读），ReadWriteMany（RWX，多读写），ReadWriteOncePod（RWOP，单 Pod 读写）。"
    },
    {
        module: "存储",
        question: "如何删除 PVC？",
        type: "单选",
        options: [
            "kubectl delete persistentvolumeclaim <name>",
            "kubectl remove pvc <name>",
            "kubectl pvc delete <name>",
            "直接删除 PV",
        ],
        answer: [0],
        difficulty: "进阶",
        explanation: "kubectl delete persistentvolumeclaim <name> 或 kubectl delete pvc <name> 删除 PVC。PVC 删除后，PV 的回收策略决定是否删除底层数据。"
    },
    {
        module: "存储",
        question: "PV 的回收策略有哪些？",
        type: "多选",
        options: [
            "Retain",
            "Recycle",
            "Delete",
            "Dynamic",
        ],
        answer: [0, 2],
        difficulty: "高级",
        explanation: "PV reclaimPolicy：Retain（保留数据，需手动清理），Delete（删除数据），Recycle（已废弃，现在用 Delete）。Dynamic 是配置方式，不是回收策略。"
    },
    {
        module: "存储",
        question: "PVC 如何绑定 PV？",
        type: "单选",
        options: [
            "手动指定 PV 名称",
            "通过容量和访问模式自动匹配",
            "随机匹配",
            "按创建时间绑定",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "PVC 通过容量、访问模式、存储类等需求自动匹配 PV（称为绑定）。也可以通过 volumeName 字段手动指定 PV。"
    },
    {
        module: "存储",
        question: "StorageClass 的作用是什么？",
        type: "单选",
        options: [
            "定义存储配额",
            "提供动态存储配置",
            "监控存储使用",
            "备份存储",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "StorageClass 提供不同类型的动态存储配置，定义如何动态创建 PV（使用哪个 provisioner、参数、回收策略等）。"
    },
    {
        module: "存储",
        question: "如何使用 StorageClass 配置 PV？",
        type: "单选",
        options: [
            "在 PVC spec.storageClassName 指定",
            "在 Pod spec 中设置",
            "在 StorageClass 中绑定 PVC",
            "自动匹配",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "在 PVC 的 spec.storageClassName 指定 StorageClass 名称，集群的动态配置系统会根据该 StorageClass 创建 PV。"
    },
    {
        module: "存储",
        question: "StorageClass 的 default 注解有什么作用？",
        type: "单选",
        options: [
            "强制所有 PVC 使用该类",
            "未指定 storageClassName 的 PVC 默认使用",
            "设置回收策略",
            "定义访问模式",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "标注为 is-default-class=true 的 StorageClass 是默认类，PVC 未指定 storageClassName 时使用该类创建 PV。"
    },
    {
        module: "存储",
        question: "provisioner 是什么？",
        type: "单选",
        options: [
            "存储后端驱动",
            "动态创建 PV 的组件",
            "存储管理系统",
            "备份工具",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "provisioner 是动态创建 PV 的组件（通常由存储驱动提供），如 kubernetes.io/aws-ebs、kubernetes.io/gce-pd、外部 CSI driver 等。"
    },
    {
        module: "存储",
        question: "Local StorageClass 有什么特点？",
        type: "单选",
        options: [
            "提供云存储",
            "提供节点本地存储",
            "自动备份",
            "跨节点共享",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "Local StorageClass 提供节点本地存储（local PV），延迟低、带宽高，但节点绑定，适合本地缓存或有状态应用。需要使用 topologyKey 调度到特定节点。"
    },
    {
        module: "存储",
        question: "VolumeSnapshot 的作用是什么？",
        type: "单选",
        options: [
            "监控存储使用",
            "创建存储卷的快照用于备份",
            "自动扩展存储",
            "压缩数据",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "VolumeSnapshot 创建存储卷的快照，用于备份、恢复或复制数据。快照由存储插件（CSI）实现。"
    },
    {
        module: "存储",
        question: "如何恢复 VolumeSnapshot？",
        type: "单选",
        options: [
            "直接使用快照",
            "创建新 PVC 并引用卷快照数据源",
            "重启 Pod",
            "没有直接恢复方法",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "恢复快照需要创建新 PVC，在 dataSource 中引用 VolumeSnapshot。新 PVC 会从快照恢复数据。"
    },
    {
        module: "存储",
        question: "VolumeSnapshotClass 是什么？",
        type: "单选",
        options: [
            "快照的默认类",
            "用于创建快照的存储类",
            "快照回收策略",
            "快照元数据",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "VolumeSnapshotClass 定义如何创建快照（使用哪个 driver、删除策略等），类似 StorageClass 但用于快照。"
    },
    {
        module: "存储",
        question: "VolumeSnapshot 的状态有哪些？",
        type: "多选",
        options: [
            "Creating",
            "ReadyToUse",
            "Deleting",
            "Error",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "基础",
        explanation: "快照状态：Creating（创建中）、ReadyToUse（可用于恢复）、Deleting（删除中）、Error（错误）。快照创建后状态变为 ReadyToUse。"
    },
    {
        module: "存储",
        question: "动态配置（Dynamic Provisioning）是什么？",
        type: "单选",
        options: [
            "管理员手动创建 PV",
            "根据 PVC 自动创建 PV",
            "自动扩展存储",
            "自动备份",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "动态配置：当用户创建 PVC 时，如果 StorageClass 定义了 provisioner，系统会自动创建匹配的 PV。无需管理员提前准备存储。"
    },
    {
        module: "存储",
        question: "如何启用动态配置？",
        type: "单选",
        options: [
            "在 PVC spec 中设置 dynamic: true",
            "指定 StorageClass（有 provisioner）",
            "配置 PV reclaimPolicy",
            "修改 Pod 参数",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "启用动态配置需要：PVC 指定 StorageClass（或使用默认类），StorageClass 有 provisioner。动态配置无需设置 dynamic 字段。"
    },
    {
        module: "存储",
        question: "静态配置和动态配置的区别是什么？",
        type: "单选",
        options: [
            "没有区别",
            "静态手动创建 PV，动态自动创建 PV",
            "静态自动，动态手动",
            "静态快，动态慢",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "静态：管理员提前创建 PV，PVC 匹配绑定。动态：PVC 创建时，StorageClass 的 provisioner 自动创建 PV。动态更灵活。"
    },
    {
        module: "存储",
        question: "如何禁用 PVC 动态配置？",
        type: "单选",
        options: [
            "删除 StorageClass",
            "PVC 设置 storageClassName 为空",
            "不使用 provisioner",
            "无法禁用",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "PVC 的 storageClassName 设置为空字符串，则不使用动态配置，只能匹配静态 PV（不绑定 StorageClass）。"
    },
    {
        module: "存储",
        question: "动态配置的好处是什么？",
        type: "多选",
        options: [
            "自动化存储管理",
            "用户无需了解底层存储",
            "避免存储浪费",
            "性能更好",
        ],
        answer: [0, 1, 2],
        difficulty: "高级",
        explanation: "动态配置好处：自动创建和管理 PV，用户只需声明需求，管理员无需提前准备，按需分配避免浪费。性能取决于存储类型，与动态配置无关。"
    },
    {
        module: "配置",
        question: "ConfigMap 的主要作用是什么？",
        type: "单选",
        options: [
            "容器镜像管理",
            "存储非敏感配置数据",
            "存储密码和密钥",
            "网络通信",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "ConfigMap 存储非敏感配置数据（如配置文件、命令行参数、环境变量等），与 Pod 分离，便于管理。敏感数据使用 Secret。"
    },
    {
        module: "配置",
        question: "如何创建 ConfigMap？",
        type: "多选",
        options: [
            "kubectl create configmap <name> --from-file=file.yaml",
            "kubectl create configmap <name> --from-literal=key=value",
            "kubectl apply -f configmap.yaml",
            "kubectl config create <name>",
        ],
        answer: [0, 1, 2],
        difficulty: "进阶",
        explanation: "创建 ConfigMap 方式：命令行（--from-file、--from-literal）、YAML 文件（kubectl apply）。kubectl config 管理 kubeconfig。"
    },
    {
        module: "配置",
        question: "ConfigMap 如何挂载到 Pod？",
        type: "多选",
        options: [
            "作为环境变量",
            "作为 Volume 挂载",
            "作为命令行参数",
            "直接访问 ConfigMap API",
        ],
        answer: [0, 1],
        difficulty: "高级",
        explanation: "ConfigMap 可以：作为环境变量注入容器（valueFrom.configMapKeyRef），作为 Volume 挂载（configMap Volume）。命令行参数可以通过环境变量间接设置。"
    },
    {
        module: "配置",
        question: "ConfigMap 有大小限制吗？",
        type: "单选",
        options: [
            "没有限制",
            "1MB",
            "1MiB",
            "10MB",
        ],
        answer: [2],
        difficulty: "基础",
        explanation: "ConfigMap 最大 1MiB。超过限制会导致创建失败。大型配置应拆分多个 ConfigMap 或使用其他方法（如 Volume）。"
    },
    {
        module: "配置",
        question: "ConfigMap 更新后 Pod 如何生效？",
        type: "单选",
        options: [
            "需要重启 Pod",
            "会自动更新",
            "需要删除并重建 Pod",
            "取决于挂载方式",
        ],
        answer: [3],
        difficulty: "进阶",
        explanation: "ConfigMap 更新后：环境变量注入的不生效（需重建 Pod），Volume 挂载的会自动更新（ConfigMap 有更新机制），使用 subPath 的不会自动更新。"
    },
    {
        module: "配置",
        question: "Secret 与 ConfigMap 的主要区别是什么？",
        type: "单选",
        options: [
            "没有区别",
            "Secret 存储敏感数据，ConfigMap 存储非敏感数据",
            "Secret 更大",
            "ConfigMap 自动加密",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "Secret 存储敏感数据（密码、密钥、证书等），值 base64 编码（非加密）。ConfigMap 存储非敏感数据。Secret 有额外的访问控制。"
    },
    {
        module: "配置",
        question: "Secret 的值如何存储？",
        type: "单选",
        options: [
            "明文存储",
            "base64 编码存储",
            "自动加密存储",
            "压缩存储",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Secret 的值在 etcd 中以 base64 编码存储。不是加密（除非启用 etcd 加密），也不是明文。使用 base64 是为了兼容性和易操作性。"
    },
    {
        module: "配置",
        question: "Secret 类型有哪些？",
        type: "多选",
        options: [
            "Opaque",
            "kubernetes.io/service-account-token",
            "kubernetes.io/dockerconfigjson",
            "kubernetes.io/tls",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "进阶",
        explanation: "Secret 类型：Opaque（通用），ServiceAccountToken（服务账户令牌），Dockerconfigjson（Docker 镜像仓库凭证），TLS（证书），BasicAuth 等。"
    },
    {
        module: "配置",
        question: "如何创建 Docker 镜像仓库的 Secret？",
        type: "单选",
        options: [
            "kubectl create secret docker-registry",
            "kubectl create secret generic",
            "kubectl create secret image",
            "kubectl create secret config",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "kubectl create secret docker-registry <name> --docker-server=... --docker-username=... --docker-password=... 创建镜像仓库认证 Secret。"
    },
    {
        module: "配置",
        question: "Secret 有大小限制吗？",
        type: "单选",
        options: [
            "没有限制",
            "1MB",
            "1MiB",
            "更大",
        ],
        answer: [2],
        difficulty: "基础",
        explanation: "Secret 最大 1MiB，与 ConfigMap 相同。大型证书等可以拆分多个 Secret 或使用其他存储方法。"
    },
    {
        module: "配置",
        question: "Pod 的探针有哪些？",
        type: "多选",
        options: [
            "livenessProbe（存活探针）",
            "readinessProbe（就绪探针）",
            "startupProbe（启动探针）",
            "failureProbe",
        ],
        answer: [0, 1, 2],
        difficulty: "进阶",
        explanation: "Pod 有三种探针：liveness（存活，失败重启），readiness（就绪，失败移出 Service），startup（启动，失败后 liveness 不执行）。没有 failureProbe。"
    },
    {
        module: "配置",
        question: "存活探针（livenessProbe）的作用是什么？",
        type: "单选",
        options: [
            "容器启动时检查",
            "判断容器是否存活，失败时重启容器",
            "判断容器是否就绪，失败时移出 Service",
            "监控资源使用",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "存活探针判断容器是否健康，失败时 kubelet 重启容器（根据 restartPolicy）。适合检测死锁、无限循环等问题。"
    },
    {
        module: "配置",
        question: "就绪探针（readinessProbe）的作用是什么？",
        type: "单选",
        options: [
            "重启容器",
            "判断容器是否准备好服务，未就绪时移出 Service",
            "启动检查",
            "资源监控",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "就绪探针判断容器是否准备接收流量，未就绪时 Service 将其从端点列表移除。适合应用启动慢、需要初始化的场景。"
    },
    {
        module: "配置",
        question: "启动探针（startupProbe）的作用是什么？",
        type: "单选",
        options: [
            "定期检查容器",
            "防止启动慢的容器被存活探针误杀",
            "就绪检查",
            "扩展容器",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "启动探针用于启动特别慢的容器，在启动成功前失效存活探针，避免启动慢导致重启。成功后存活和就绪探针开始工作。"
    },
    {
        module: "配置",
        question: "探针的检测方式有哪些？",
        type: "多选",
        options: [
            "HTTP GET",
            "TCP Socket",
            "Exec 命令",
            "gRPC",
        ],
        answer: [0, 1, 2],
        difficulty: "高级",
        explanation: "探针检测方式：HTTP GET（HTTP GET 请求检测），TCP Socket（TCP 连接检测），Exec（执行命令检测）。gRPC 是某些自定义实现，不原生支持。"
    },
    {
        module: "配置",
        question: "容器的资源请求（requests）表示什么？",
        type: "单选",
        options: [
            "资源的上限",
            "保证的资源下限",
            "当前使用量",
            "平均使用量",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "requests 是容器保证获得的资源下限，用于调度决策（选择有足够资源的节点）。limits 是上限，禁止超过。"
    },
    {
        module: "配置",
        question: "容器的资源限制（limits）表示什么？",
        type: "单选",
        options: [
            "保证的资源",
            "资源使用上限",
            "平均值",
            "建议值",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "limits 是容器资源使用的上限。CPU 限制是配额，超限会被限流。内存超限会被 OOM Kill。"
    },
    {
        module: "配置",
        question: "如何设置容器 CPU 请求和限制？",
        type: "单选",
        options: [
            "在容器 spec 中设置 resources.requests.cpu 和 resources.limits.cpu",
            "在 Pod 级别设置",
            "在 Node 级别设置",
            "自动设置",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "在 spec.containers [].resources 中设置 requests 和 limits，包括 cpu、memory（ephemeral-storage 可选）。单位：CPU 的 cores、m，memory 的 Mi、Gi 等。"
    },
    {
        module: "配置",
        question: "Kubernetes 如何处理超限 CPU？",
        type: "单选",
        options: [
            "杀死容器",
            "限制 CPU 时间片分配",
            "重启 Pod",
            "不处理",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "CPU 超限不会杀死容器，而是限制时间片分配（CPU 限流），使用量不超过 limits。内存超限会被 OOM Kill。"
    },
    {
        module: "配置",
        question: "ResourceQuota 的作用是什么？",
        type: "单选",
        options: [
            "限制单个 Pod 的资源",
            "限制命名空间的总资源使用和对象数量",
            "监控资源使用",
            "自动扩展资源",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "ResourceQuota 限制命名空间的总资源（requests.cpu、requests.memory、persistentvolumeclaims 等）和对象数量（pods、services 等）。"
    },
    {
        module: "配置",
        question: "LimitRange 的作用是什么？",
        type: "单选",
        options: [
            "限制命名空间总量",
            "限制资源默认值、最小/最大值",
            "监控所有 Pod",
            "自动配置 ResourceQuota",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "LimitRange 限制资源（CPU、内存）的默认值、最小/最大值，以及限制 Pod/容器数量。防止资源滥用，设置合理默认值。"
    },
    {
        module: "配置",
        question: "如何查看 Pod 的资源使用？",
        type: "单选",
        options: [
            "kubectl describe pod",
            "kubectl top pod",
            "kubectl ps",
            "kubectl resources pod",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "kubectl top pod 显示 Pod 当前 CPU/内存使用（需要 Metrics Server）。kubectl describe 也显示资源配置但不包含实时使用。"
    },
    {
        module: "配置",
        question: "什么是 ephemeral-storage？",
        type: "单选",
        options: [
            "持久存储",
            "容器可写层的临时存储（包括 emptyDir",
            "网络存储",
            "外部存储",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "ephemeral-storage 是容器可写层的临时存储（容器文件系统），包括 emptyDir、容器镜像层。超限可能被驱逐。"
    },
    {
        module: "调度",
        question: "Kubernetes 调度器的作用是什么？",
        type: "单选",
        options: [
            "运行容器",
            "管理存储",
            "将 Pod 调度到合适的节点",
            "监控集群状态",
        ],
        answer: [2],
        difficulty: "基础",
        explanation: "Scheduler 观察未调度的 Pod，根据资源需求、策略、约束选择合适的节点，将 Pod 分配给该节点的 kubelet。"
    },
    {
        module: "调度",
        question: "调度器的调度流程是什么？",
        type: "单选",
        options: [
            "随机选择节点",
            "过滤 -> 打分 -> 选择",
            "打分 -> 过滤",
            "只过滤不选择",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "调度：1）过滤（预选，Predicate）：排除不满足条件的节点。2）打分（优选，Score）：给节点打分。3）选择最高分节点。"
    },
    {
        module: "调度",
        question: "什么是自定义调度器？",
        type: "单选",
        options: [
            "系统自带的调度器",
            "用户实现的调度逻辑",
            "随机调度",
            "无调度",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "自定义调度器是实现调度接口的用户程序，可以替换默认调度器或使用多个调度器（通过 Pod 的 schedulerName 指定）。适合特殊调度需求。"
    },
    {
        module: "调度",
        question: "如何查看 Pod 调度到哪个节点？",
        type: "单选",
        options: [
            "kubectl pod info",
            "kubectl describe pod 查看 Node",
            "kubectl get pods -o wide",
            "以上都可以",
        ],
        answer: [3],
        difficulty: "基础",
        explanation: "都可以查看：kubectl get pods -o wide 显示 NODE 列，kubectl describe pod 的 Node 字段。"
    },
    {
        module: "调度",
        question: "为什么 Pod 一直 Pending？",
        type: "多选",
        options: [
            "资源不足",
            "调度器未运行",
            "调度失败（亲和性、污点不匹配）",
            "镜像拉取失败",
        ],
        answer: [0, 1, 2],
        difficulty: "进阶",
        explanation: "Pod Pending 可能原因：资源不足（CPU/内存）、调度失败（亲和性、污点容忍度）、调度器未运行（查看 Scheduler Pod）、PVC 未绑定等。镜像拉取失败是 ImagePullBackOff。"
    },
    {
        module: "调度",
        question: "节点亲和性（nodeAffinity）有哪几种类型？",
        type: "多选",
        options: [
            "requiredDuringSchedulingIgnoredDuringExecution",
            "preferredDuringSchedulingIgnoredDuringExecution",
            "requiredDuringSchedulingRequiredDuringExecution",
            "none",
        ],
        answer: [0, 1],
        difficulty: "高级",
        explanation: "nodeAffinity 类型：required（必须满足）：requiredDuringSchedulingIgnoredDuringExecution；preferred（尽量满足）：preferredDuringSchedulingIgnoredDuringExecution。"
    },
    {
        module: "调度",
        question: "Pod 亲和性（podAffinity）有什么作用？",
        type: "单选",
        options: [
            "控制 Pod 调度到特定节点类型",
            "控制 Pod 调度到与某些 Pod 相同或不同的节点",
            "限制 Pod 数量",
            "控制 Pod 网络",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Pod 亲和性控制 Pod 与其他 Pod 的拓扑关系：与特定 Pod 共同节点（podAffinity）或避免（podAntiAffinity）。适合部署协同组件或高可用分散。"
    },
    {
        module: "调度",
        question: "如何设置 Pod 必须在特定节点上？",
        type: "单选",
        options: [
            "使用 nodeAffinity",
            "使用 nodeName",
            "使用 nodeSelector",
            "以上都可以",
        ],
        answer: [3],
        difficulty: "进阶",
        explanation: "都可以指定节点：nodeAffinity（灵活选择），nodeName（直接指定），nodeSelector（简单标签匹配）。 nodeName 最直接但僵硬。"
    },
    {
        module: "调度",
        question: "Pod 反亲和性（podAntiAffinity）用于什么？",
        type: "单选",
        options: [
            "让 Pod 聚集到同一节点",
            "让 Pod 分散到不同节点",
            "控制 Pod 启动顺序",
            "限制 Pod 资源",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "Pod 反亲和性让 Pod 分散到不同拓扑域（如节点、可用区），提高高可用。适合无状态应用避免单点。"
    },
    {
        module: "调度",
        question: "节点选择器和亲和性的区别？",
        type: "单选",
        options: [
            "没有区别",
            "nodeSelector 简单标签匹配，nodeAffinity 更灵活",
            "nodeAffinity 刚性",
            "亲和性只能用于 Pod",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "nodeSelector 是简单相等匹配标签。nodeAffinity 支持更复杂的规则：集合匹配、权重、软性要求。亲和性也支持 Pod 关系而节点选择器不支持。"
    },
    {
        module: "调度",
        question: "节点污点（Taint）的作用是什么？",
        type: "单选",
        options: [
            "标记节点资源不足",
            "标记节点不调度特定 Pod",
            "修复节点问题",
            "监控节点",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "Taint 标记节点，只有有对应 Toleration 的 Pod 才能调度上去。用于专用节点、控制平面特殊用途（如 master 节点）。"
    },
    {
        module: "调度",
        question: "污点包括哪些动作？",
        type: "多选",
        options: [
            "NoSchedule",
            "NoExecute",
            "PreferNoSchedule",
            "ForceSchedule",
        ],
        answer: [0, 1, 2],
        difficulty: "高级",
        explanation: "Taint effect：NoSchedule（不调度），NoExecute（不调度并驱逐不匹配的已有 Pod），PreferNoSchedule（尽量避免，非硬性）。没有 ForceSchedule。"
    },
    {
        module: "调度",
        question: "Pod 如何容忍污点？",
        type: "单选",
        options: [
            "自动容忍",
            "在 Pod spec 设置 tolerations",
            "修改节点",
            "无法容忍",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Pod 在 spec.tolerations 中设置容忍度。每个 tolerations 匹配一个污点（key、operator、value、effect 匹配）。tolerationSeconds（NoExecute 时多久驱逐）。"
    },
    {
        module: "调度",
        question: "NoExecute 污点有什么特殊作用？",
        type: "单选",
        options: [
            "仅影响调度",
            "驱逐已有不匹配的 Pod",
            "自动修复节点",
            "加速调度",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "NoExecute 不仅阻止新 Pod 调度，还会驱逐已经运行但没匹配 tolerations 的 Pod。可设置 tolerationSeconds 延迟驱逐。非常适合优雅迁移。"
    },
    {
        module: "调度",
        question: "如何给节点添加污点？",
        type: "单选",
        options: [
            "kubectl taint node <name> key=value:effect",
            "kubectl label node <name>",
            "kubectl annotate node <name>",
            "修改节点配置文件",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "kubectl taint node <name> key=value:effect 添加污点。例如添加 master 污点：kubectl taint nodes node-role.kubernetes.io/control-plane=:NoSchedule。"
    },
    {
        module: "调度",
        question: "移除污点的命令是什么？",
        type: "单选",
        options: [
            "kubectl taint node <name> key:effect-",
            "kubectl untaint node <name>",
            "kubectl remove taint",
            "手动编辑",
        ],
        answer: [0],
        difficulty: "基础",
        explanation: "kubectl taint node <name> key:effect- 移除污点。例如移除：kubectl taint node node1 key:NoExecute-。"
    },
    {
        module: "调度",
        question: "Pod 污点如何应用？",
        type: "单选",
        options: [
            "给 Pod 加污点",
            "给其他节点加污点",
            "Pod 本身没有污点，给节点加污点",
            "通过 ConfigMap 设置",
        ],
        answer: [2],
        difficulty: "进阶",
        explanation: "污点是节点属性，给节点添加。Pod 通过 tolerations 匹配。Pod 本身不设置污点（有污点的是节点）。"
    },
    {
        module: "调度",
        question: "Pod 优先级（PriorityClass）的作用是什么？",
        type: "单选",
        options: [
            "限制 Pod 启动顺序",
            "定义 Pod 优先级用于抢占决策",
            "监控 Pod 状态",
            "限制 Pod 数量",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "PriorityClass 定义优先级值，分配给 Pod 后，高优先级的 Pod 在资源不足时可以抢占低优先级 Pod。"
    },
    {
        module: "调度",
        question: "如何设置 Pod 优先级？",
        type: "单选",
        options: [
            "在 metadata.priorityClass 中指定",
            "在 spec.priorityClassName 中指定",
            "自动分配",
            "通过 annotation 设置",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Pod 在 spec.priorityClassName 中指定 PriorityClass 名称。PriorityClass 的 value 决定优先级（值越大越高）。默认是 default。"
    },
    {
        module: "调度",
        question: "什么是抢占（Preemption）？",
        type: "单选",
        options: [
            "限制 Pod 数量",
            "高优先级 Pod 赶走低优先级 Pod（驱逐）",
            "控制 Pod 启动",
            "保护 Pod",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "抢占是：高优先级 Pod 无法调度时，系统驱逐低优先级 Pod 获得资源。被驱逐 Pod 可能调度到其他节点。需要 PriorityClass 和 enable=true。"
    },
    {
        module: "调度",
        question: "系统保护的是哪些 Pod？",
        type: "多选",
        options: [
            "kube-system 命名空间的 Pod",
            "DaemonSet Pod",
            "低优先级 Pod",
            "没有优先级的 Pod",
        ],
        answer: [0, 1],
        difficulty: "高级",
        explanation: "系统保护DaemonSet的Pod和 kube-system 命名空间的 Pod不被抢占（保护关键系统组件）。也可以通过 annotation 保护。"
    },
    {
        module: "调度",
        question: "如何禁用抢占？",
        type: "单选",
        options: [
            "删除 PriorityClass",
            "在 PriorityClass 设置 preemptionPolicy: Never",
            "设置 annotation",
            "无法禁用",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "PriorityClass 设置 preemptionPolicy: Never 禁用抢占。默认是 PreemptLowerPriority（可以抢占）。设置为 Never 后，高优先级不会抢占低优先级。"
    },
    {
        module: "集群管理",
        question: "如何标记节点为不可调度？",
        type: "单选",
        options: [
            "kubectl cordon <node>",
            "kubectl drain <node>",
            "kubectl uncordon <node>",
            "kubectl unschedule <node>",
        ],
        answer: [0],
        difficulty: "基础",
        explanation: "kubectl cordon <node> 标记节点 Unschedulable，不调度新 Pod，现有 Pod 不受影响。drain 会驱逐所有 Pod。"
    },
    {
        module: "集群管理",
        question: "如何驱逐节点上的所有 Pod？",
        type: "单选",
        options: [
            "kubectl cordon <node>",
            "kubectl drain <node>",
            "kubectl delete pods --node=<node>",
            "kubectl evacuate <node>",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "kubectl drain <node> 安全驱逐所有 Pod（包括 DaemonSet 管理的忽略），用于维护前清空节点。内部包含 cordon + 删除 Pod。"
    },
    {
        module: "集群管理",
        question: "如何恢复节点调度？",
        type: "单选",
        options: [
            "kubectl cordon <node>",
            "kubectl uncordon <node>",
            "kubectl drain --undo <node>",
            "kubectl schedule <node>",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "kubectl uncordon <node> 解除 Unschedulable 污点，恢复正常调度。是 cordon 的逆操作。"
    },
    {
        module: "集群管理",
        question: "节点 NotReady 的可能原因？",
        type: "多选",
        options: [
            "kubelet 未运行",
            "网络问题",
            "节点资源耗尽",
            "节点被污点",
        ],
        answer: [0, 1, 2],
        difficulty: "基础",
        explanation: "节点 NotReady 可能原因：kubelet 未运行或挂掉（检查节点进程）、网络问题（API 通信中断）、容器运行时问题、节点资源耗尽（磁盘等）。污点不影响节点状态。"
    },
    {
        module: "集群管理",
        question: "如何查看节点详细信息？",
        type: "单选",
        options: [
            "kubectl node info",
            "kubectl describe node <name>",
            "kubectl show node",
            "kubectl get node -o yaml",
        ],
        answer: [2],
        difficulty: "进阶",
        explanation: "以上都可以查看节点信息，其中 kubectl describe node <name> 最详细（包括条件、资源、资源分配、事件等）。也可以用 get -o yaml 查看配置。"
    },
    {
        module: "集群管理",
        question: "节点 Condition 包含哪些？",
        type: "多选",
        options: [
            "Ready",
            "MemoryPressure",
            "DiskPressure",
            "NetworkUnavailable",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "高级",
        explanation: "节点状态条件：Ready（可用），Memory/Disk/PID Pressure（资源压力），Vulnerable（内核问题），NetworkUnavailable（网络未就绪等）。"
    },
    {
        module: "集群管理",
        question: "如何安全重启节点？",
        type: "单选",
        options: [
            "直接重启",
            "kubectl drain 后再重启",
            "kubectl cordon 后再重启",
            "不需要操作",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "安全重启节点：kubectl drain 驱逐所有 Pod，然后重启节点，重启后 kubectl uncordon。drain 处理不中断正在运行的任务。cordon 不驱逐 Pod 不安全。"
    },
    {
        module: "集群管理",
        question: "如何控制 Pod 调度到特定节点？",
        type: "多选",
        options: [
            "nodeSelector",
            "nodeAffinity",
            "nodeName",
            "toleration",
        ],
        answer: [0, 1, 2],
        difficulty: "进阶",
        explanation: "控制调度：nodeSelector（标签），nodeAffinity（亲和性），nodeName（直接指定）。toleration 是容忍污点，不单独控制调度。"
    },
    {
        module: "集群管理",
        question: "如何给节点添加标签？",
        type: "单选",
        options: [
            "kubectl label node <name> key=value",
            "kubectl annotate node <name>",
            "kubectl tag node <name>",
            "nodeconfig label",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "kubectl label node <name> key=value 给节点添加标签。标签用于亲和性、调度选择等。annotate 添加注解。"
    },
    {
        module: "集群管理",
        question: "kubeadm 如何升级控制平面？",
        type: "单选",
        options: [
            "kubeadm upgrade apply",
            "kubeadm upgrade control-plane",
            "kubeadm upgrade master",
            "直接更新镜像",
        ],
        answer: [0],
        difficulty: "基础",
        explanation: "kubeadm 升级：先升级 kubeadm 工具，然后在 control-plane 执行 kubeadm upgrade apply <version>，再升级工作节点。"
    },
    {
        module: "集群管理",
        question: "滚动升级集群的步骤是什么？",
        type: "单选",
        options: [
            "直接升级所有节点",
            "逐个节点升级，先控制平面再工作节点",
            "先工作节点再控制平面",
            "随机升级",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "滚动升级：先升级控制平面节点（一个一个，保持 API 可用），再逐个升级工作节点。确保每个节点升级完成后再继续下一个。"
    },
    {
        module: "集群管理",
        question: "如何检查集群版本？",
        type: "单选",
        options: [
            "kubectl version",
            "kubectl cluster-version",
            "kubeadm version",
            "kubectl info",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "kubectl version 显示客户端和服务器版本。kubeadm version 显示 kubeadm 版本。"
    },
    {
        module: "集群管理",
        question: "升级失败如何回滚？",
        type: "单选",
        options: [
            "kubeadm upgrade rollback",
            "kubeadm upgrade --undo",
            "没有自动回滚，需要手动恢复",
            "kubectl rollback cluster",
        ],
        answer: [2],
        difficulty: "基础",
        explanation: "kubeadm 没有自动回滚。需要在升级前备份 etcd（kubeadm etcd），失败后通过备份恢复。建议先在测试环境验证。"
    },
    {
        module: "集群管理",
        question: "Metrics Server 的作用是什么？",
        type: "单选",
        options: [
            "存储集群状态",
            "提供 CPU/内存使用指标",
            "处理 API 请求",
            "调度 Pod",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "Metrics Server 从 kubelet 收集 CPU/内存指标，提供 HPA、kubectl top 使用。不存储历史数据。"
    },
    {
        module: "集群管理",
        question: "如何查看节点资源使用？",
        type: "单选",
        options: [
            "kubectl top node",
            "kubectl get node resources",
            "kubectl monitor node",
            "kubectl node stats",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "kubectl top node 显示节点 CPU/内存使用率（需要 Metrics Server）。"
    },
    {
        module: "集群管理",
        question: "集群组件监控指标有哪些？",
        type: "多选",
        options: [
            "CPU 使用率",
            "内存使用率",
            "QPS（每秒请求数）",
            "延迟",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "基础",
        explanation: "监控指标：CPU、内存、API Server QPS、延迟、etcd 延迟、kubelet 延迟、调度延迟、对象数量等。Prometheus 常用于抓取和分析。"
    },
    {
        module: "集群管理",
        question: "Prometheus 如何集成 Kubernetes？",
        type: "单选",
        options: [
            "直接访问 API Server",
            "使用 ServiceMonitor",
            "无集成",
            "通过 kubectl 监控",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "Prometheus 通过 ServiceMonitor（CRD）或 annotations 发现和抓取 Kubernetes Pod 的指标。Prometheus Operator 管理这些资源。"
    },
    {
        module: "集群管理",
        question: "Grafana 与 Kubernetes 集成用于什么？",
        type: "单选",
        options: [
            "集群部署",
            "可视化监控仪表板",
            "备份恢复",
            "日志管理",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "Grafana 可视化 Prometheus 数据，为 Kubernetes 提供仪表板（Pod、Node、集群指标等）。通过数据源连接 Prometheus。"
    },
    {
        module: "集群管理",
        question: "容器日志存储在哪里？",
        type: "单选",
        options: [
            "集中存储",
            "容器可写层（节点磁盘）",
            "etcd",
            "内存",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "容器日志存储在容器可写层（节点磁盘）。容器重启不会清空，Pod 重建后清空。永久存储需要日志系统（如 ELK、FLuentd）。"
    },
    {
        module: "集群管理",
        question: "如何查看 Pod 日志？",
        type: "单选",
        options: [
            "kubectl logs",
            "docker logs",
            "进入节点查看目录",
            "以上都可以",
        ],
        answer: [3],
        difficulty: "进阶",
        explanation: "都可以：kubectl logs <pod> 显示日志，docker logs <container>（在节点上），也可进入节点查看 /var/log/containers/ 目录。kubectl 日志最常用。"
    },
    {
        module: "集群管理",
        question: "Fluentd 在 Kubernetes 中如何收集日志？",
        type: "单选",
        options: [
            "作为 DaemonSet 运行在每个节点",
            "运行在控制平面",
            "运行在 Pod 内",
            "外部集中",
        ],
        answer: [0],
        difficulty: "高级",
        explanation: "Fluentd 作为 DaemonSet 每节点运行，监听容器日志文件，转发到 Elasticsearch、日志服务等。"
    },
    {
        module: "集群管理",
        question: "如何收集应用日志？",
        type: "多选",
        options: [
            "kubectl logs 收集",
            "日志聚合系统（Fluentd、Filebeat）",
            "应用输出日志到标准输出",
            "本地文件需配置共享卷",
        ],
        answer: [0, 1, 2],
        difficulty: "基础",
        explanation: "日志收集：应用输出到 stdout（默认），kubectl logs 查看；Fluentd（DaemonSet）聚合；应用写文件需要 hostPath 或共享卷配置。"
    },
    {
        module: "集群管理",
        question: "etcd 备份有什么作用？",
        type: "单选",
        options: [
            "备份容器数据",
            "备份集群状态（对象、配置）",
            "备份镜像",
            "备份网络配置",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "etcd 存储集群所有状态数据。备份 etcd 可以在集群故障时恢复。容器数据需要 PVC 备份（如 Velero）。"
    },
    {
        module: "集群管理",
        question: "如何备份 etcd？",
        type: "单选",
        options: [
            "kubeadm etcd backup",
            "etcdctl snapshot save",
            "kubectl backup cluster",
            "复制 etcd 目录",
        ],
        answer: [1],
        difficulty: "高级",
        explanation: "etcdctl snapshot save 备份 etcd 快照。kubeadm 工具也提供 kubeadm etcd。备份需要 etcd 的证书和地址。"
    },
    {
        module: "集群管理",
        question: "Velero 的作用是什么？",
        type: "单选",
        options: [
            "监控集群",
            "备份和恢复 Kubernetes 资源和持久卷",
            "集群管理",
            "日志收集",
        ],
        answer: [1],
        difficulty: "基础",
        explanation: "Velero 备份和恢复 Kubernetes 资源（包括 PV），支持定时备份、迁移、灾难恢复。也可以使用 velero plugin 备份到云存储。"
    },
    {
        module: "集群管理",
        question: "如何备份 PVC 数据？",
        type: "单选",
        options: [
            "快照",
            "Velero",
            "复制 PV 数据",
            "以上都可以",
        ],
        answer: [3],
        difficulty: "进阶",
        explanation: "都可以：VolumeSnapshot（快照），Velero（支持快照和备份工具），数据复制（rsync、数据库导出）。具体取决于存储支持（如 CSI 支持快照）。"
    },
    {
        module: "集群管理",
        question: "备份的最佳实践是什么？",
        type: "多选",
        options: [
            "定期备份 etcd",
            "备份 PVC 数据（快照/Velero）",
            "测试恢复流程",
            "备份配置文件",
        ],
        answer: [0, 1, 2, 3],
        difficulty: "高级",
        explanation: "备份最佳实践：定期备份 etcd（集群状态），备份 PVC 数据（快照、工具），测试恢复（确保备份可用），备份配置文件（YAML 清单、证书）。"
    },
    {
        module: "集群管理",
        question: "如何扩容节点？",
        type: "多选",
        options: [
            "kubeadm join 加入新节点",
            "云上创建新节点",
            "修改节点配置",
            "不需要操作",
        ],
        answer: [0, 1],
        difficulty: "基础",
        explanation: "扩容节点：在云环境创建新节点后加入集群（kubeadm join），或云平台自动扩容集群（如 EKS、GKE 托管服务）。修改节点配置不扩容。"
    },
    {
        module: "集群管理",
        question: "如何查看事件（Events）？",
        type: "单选",
        options: [
            "kubectl events",
            "kubectl get events",
            "kubectl describe resource 查看事件部分",
            "kubectl logs",
        ],
        answer: [1],
        difficulty: "进阶",
        explanation: "kubectl get events 列出所有事件。也可在 kubectl describe <resource> 的 Events 部分查看特定资源的事件。事件包含错误、警告、状态变化。"
    },
    {
        module: "集群管理",
        question: "如何排障 Pending 的 Pod？",
        type: "多选",
        options: [
            "kubectl describe pod 查看事件",
            "检查是否缺少 PVC",
            "检查调度器状态",
            "检查节点资源",
        ],
        answer: [0, 1, 2],
        difficulty: "高级",
        explanation: "排障 Pending：kubectl describe pod 查看事件（调度失败、镜像拉取失败等），检查 PVC 是否绑定，检查调度器运行状态，检查节点资源是否足够。"
    },
    {
        module: "集群管理",
        question: "资源使用高怎么处理？",
        type: "多选",
        options: [
            "HPA 自动扩展",
            "手动扩展 Deployment/StatefulSet",
            "增加节点",
            "限制无关应用",
        ],
        answer: [0, 1, 2],
        difficulty: "基础",
        explanation: "处理高资源使用：配置 HPA 自动扩展（针对应用），手动扩展 replicas（kubectl scale），扩容集群（增加节点），限制或停止非关键应用。"
    },
    {module:"工作负载",question:"Pod 中多个容器如何通信？",type:"单选",options:["通过网络 localhost","通过共享内存","通过共享文件","无法互相通信"],answer:[0],difficulty:"进阶",explanation:"Pod 中多个容器共享网络命名空间，可以通过 localhost 互相通信。共享内存需要特殊配置，共享文件通过 Volume 实现。"},
{module:"工作负载",question:"Pod 的 DNS 配置是怎样的？",type:"单选",options:["继承宿主机配置","使用集群 DNS（CoreDNS）","无 DNS 可用","需要手动配置"],answer:[1],difficulty:"高级",explanation:"Pod 默认使用集群 DNS，解析 Service 和 Pod DNS 名称。可以 Pod 级别自定义 DNS policy 和配置。"},
{module:"工作负载",question:"Pod 的 initContainer 有什么作用？",type:"多选",options:["在主容器启动前运行","可以挂载共享 Volume","用于初始化工作","并行运行"],answer:[0,1,2],difficulty:"进阶",explanation:"initContainer 在主容器前运行，通常用于初始化（下载文件、等待依赖）、配置共享 Volume。串行运行（前一个完成后才运行下一个）。"},
{module:"工作负载",question:"Pod 的 terminationGracePeriodSeconds 是什么？",type:"单选",options:["启动超时","优雅关闭等待时间","运行超时","心跳间隔"],answer:[1],difficulty:"进阶",explanation:"terminationGracePeriodSeconds 是优雅关闭等待时间，默认 30 秒。Kubernetes 发送 SIGTERM 后等待该时间，超时发送 SIGKILL。可调大给应用清理资源的时间。"},
{module:"工作负载",question:"Pod 的 hostNetwork 有什么作用？",type:"单选",options:["共享主机网络栈","限制网络带宽","隔离网络","网络加速"],answer:[0],difficulty:"进阶",explanation:"hostNetwork: true 让 Pod 使用宿主机网络栈，Pod 看到宿主机网络接口。适合需要直接访问主机网络的场景，但会失去网络隔离。"},
{module:"工作负载",question:"Deployment 的 replicas 默认值是多少？",type:"单选",options:["0","1","2","3"],answer:[1],difficulty:"进阶",explanation:"Deployment 的 replicas 默认为 1。0 表示不运行副本。"},
{module:"工作负载",question:"Deployment 如何实现零停机更新？",type:"单选",options:["瞬间更新","滚动更新，逐步替换","暂停所有 Pod 再更新","复制一份再切换"],answer:[1],difficulty:"进阶",explanation:"Deployment 使用滚动更新，逐步创建新 Pod 删除旧 Pod，保证始终有可用副本。可通过 maxUnavailable 控制。"},
{module:"工作负载",question:"Deployment 的滚动更新暂停和恢复命令是？",type:"单选",options:["kubectl pause/resume","kubectl rollout pause/resume","kubectl deploy pause/resume","kubectl update pause/resume"],answer:[1],difficulty:"进阶",explanation:"kubectl rollout pause deployment <name> 暂停更新，kubectl rollout resume <name> 恢复。用于渐进式更新或故障排查。"},
{module:"工作负载",question:"Deployment 的 revision 可以查看吗？",type:"单选",options:["可以（kubectl rollout history）","不可以","需要 etcd 查询","只能在事件中查看"],answer:[0],difficulty:"高级",explanation:"kubectl rollout history deployment <name> 查看历史版本。也可指定版本查看详情。version 由 deployment revision history limit 控制。"},
{module:"工作负载",question:"Deployment 更新失败怎么办？",type:"多选",options:["kubectl rollout status 查看状态","kubectl rollout undo 回滚","kubectl describe deployment 查看事件","增加 replicas"],answer:[0,1,2],difficulty:"进阶",explanation:"Deployment 更新失败：kubectl rollout status 查看状态，kubectl describe 查看事件（如镜像拉取失败），kubectl rollout undo 回滚。增加 replicas 不修复失败。"},
{module:"工作负载",question:"StatefulSet 的 Pod 网络标识是什么？",type:"单选",options:["Pod 名称","<statefulset-name>-<index>","随机 ID","Service 名称"],answer:[1],difficulty:"高级",explanation:"StatefulSet Pod 的 DNS 名称：<pod-name>.<service>，而 Pod 名称是 <statefulset-name>-<index>。通过 headless Service 实现稳定的网络标识。"},
{module:"工作负载",question:"StatefulSet 的扩展和缩容顺序是怎样的？",type:"单选",options:["扩展从 N 开始，缩容删除最后 N-1","都是对齐更新","随机","没有顺序"],answer:[0],difficulty:"高级",explanation:"StatefulSet 扩展从当前 N 开始顺序添加 Pod，缩容从 N-1 开始逆序删除。保证稳定性和顺序性。"},
{module:"工作负载",question:"StatefulSet 如何升级？",type:"单选",options:["自动滚动更新（RollingUpdate）","OnDelete 删除时更新","两种策略都可用","不能升级"],answer:[2],difficulty:"高级",explanation:"StatefulSet 支持 RollingUpdate（默认，自动滚动）和 OnDelete（删除时更新）两种更新策略（updatePolicy 字段）。"},
{module:"工作负载",question:"StatefulSet 的 volumeClaimTemplates 是什么？",type:"单选",options:["Volume 模板","PVC 模板，为每个 Pod 创建独立 PVC","ConfigMap 模板","Secret 模板"],answer:[1],difficulty:"高级",explanation:"volumeClaimTemplates 定义每个 StatefulSet Pod 的 PVC，确保每个 Pod 共享存储（或有独立 PVC）。重建时保持绑定。"},
{module:"工作负载",question:"StatefulSet 的删除策略是什么？",type:"单选",options:["只删除 StatefulSet 对象","级联删除所有 Pod","级联删除 PVC","以上三者"],answer:[3],difficulty:"高级",explanation:"删除 StatefulSet 级联删除：StatefulSet -> Pod（按逆序）-> 默认保留 PVC（需要手动删除）。--cascade=false 仅删除 StatefulSet。"},
{module:"工作负载",question:"DaemonSet 的 Pod 如何更新？",type:"单选",options:["同时更新","逐节点更新","手动删除重启","不可更新"],answer:[1],difficulty:"进阶",explanation:"DaemonSet 使用 RollingUpdate 默认逐节点更新（maxUnavailable 控制并发数）。OnDelete 策略下删除时更新。"},
{module:"工作负载",question:"DaemonSet 的 maxUnavailable 默认值是多少？",type:"单选",options:["0","1","10%","没有限制"],answer:[1],difficulty:"进阶",explanation:"DaemonSet RollingUpdate 的 maxUnavailable 默认为 1，表示同时最多有 1 个不可用 Pod。可以设置为 0 保证无中断，但更新较慢。"},
{module:"工作负载",question:"如何限制 DaemonSet 的调度范围？",type:"多选",options:["nodeSelector","nodeAffinity","tolerations","priorityClassName"],answer:[0,1,2],difficulty:"进阶",explanation:"可以：nodeSelector（节点标签），nodeAffinity（节点亲和性），tolerations（容忍污点）。priorityClassName 不限制调度范围。"},
{module:"工作负载",question:"DaemonSet 的 Pod 会跟随节点迁移吗？",type:"单选",options:["会自动迁移","不会，需要手动重建","视情况而定","会延迟迁移"],answer:[1],difficulty:"进阶",explanation:"DaemonSet Pod 与节点绑定，节点不可时 Pod 不会被重新调度（除非删除重建）。StatefulSet 有稳定标识，DaemonSet 没有。"},
{module:"工作负载",question:"DaemonSet 在控制平面节点上运行吗？",type:"单选",options:["可以，如果配置了 toleration","不可以","默认运行","需要特殊配置"],answer:[0],difficulty:"进阶",explanation:"DaemonSet 默认不在有污点（如 NoSchedule）的节点（如 master）运行。如果给 DaemonSet 加上对应 toleration，可以在 master 节点运行。"},
{module:"工作负载",question:"Job 的 backoffLimit 是什么？",type:"单选",options:["重试次数","超时时间","并行数","完成数"],answer:[0],difficulty:"进阶",explanation:"backoffLimit 限制 Job 失败后重试次数（默认 6）。达到后 Job 标记为失败。设为 0 不重试。"},
{module:"工作负载",question:"Job 的 activeDeadlineSeconds 是什么？",type:"单选",options:["重试期限","Job 整体超时","每个 Pod 超时","启动超时"],answer:[1],difficulty:"进阶",explanation:"activeDeadlineSeconds 是 Job 整体超时，超时后所有 Pod 被终止，Job 标记失败。适合防止长时间挂起的任务。"},
{module:"工作负载",question:"CronJob 的 startingDeadlineSeconds 是什么？",type:"单选",options:["启动超时","错过调度容忍时间","执行期限","启动间隔"],answer:[1],difficulty:"高级",explanation:"startingDeadlineSeconds 是错过调度的容忍时间。例如设为 100 秒，错过调度时 100 秒内仍会执行，超过则跳过。"},
{module:"工作负载",question:"CronJob 的 concurrencyPolicy 有哪些？",type:"多选",options:["Allow","Forbid","Replace","Cancel"],answer:[0,1,2],difficulty:"高级",explanation:"concurrencyPolicy：Allow（允许并发），Forbid（禁止并发，跳过），Replace（取消上一次 Job，运行新的）。Cancel 不存在。"},
{module:"工作负载",question:"Job 的 parallelism 是什么？",type:"单选",options:["Job 重试次数","并发 Pod 数量","完成数","超时"],answer:[1],difficulty:"进阶",explanation:"parallelism 是并发运行的 Pod 数量，默认 1。配合 completions 定义总任务数，可以并行处理任务。"},
{module:"工作负载",question:"HPA 如何获取 CPU 使用率？",type:"单选",options:["从 kubelet","从 Metrics Server","从 Kubelet + Metrics Server","从 Docker"],answer:[2],difficulty:"进阶",explanation:"HPA 从 Metrics Server 获取 CPU 使用率（聚合自 kubelet 的 cadvisor）。需要部署 Metrics Server。"},
{module:"工作负载",question:"HPA 如何扩展 Deployment？",type:"单选",options:["直接修改 replicas","修改 Deployment 的 replicas 指标","修改 ReplicaSet","通过 annotation"],answer:[0],difficulty:"进阶",explanation:"HPA 修改 Deployment 的 replicas 字段（由 Deployment Controller 管理 ReplicaSet）。HPA 是控制 Deployment 的外部控制器。"},
{module:"工作负载",question:"HPA 的 stabilizationWindowSeconds 是什么？",type:"单选",options:["扩展延迟","稳定窗口，防止频繁扩缩容","缩容延迟","窗口大小"],answer:[1],difficulty:"高级",explanation:"stabilizationWindowSeconds 定义稳定窗口，用于 scaleDown（缩容）。在窗口内指标波动将不会触发缩容，防止频繁调整。"},
{module:"工作负载",question:"HPA 支持 GPU 指标吗？",type:"单选",options:["支持","不支持","需自定义指标","需外部指标"],answer:[2],difficulty:"高级",explanation:"HPA 原生不支持 GPU，但通过自定义指标（custom metrics）和外部指标（external metrics）可以实现。需要 Prometheus 适配器等。"},
{module:"工作负载",question:"为什么 HPA 无法工作？",type:"多选",options:["未部署 Metrics Server","Pod 未设置 requests","指标未达到阈值","HPA 控制器未运行"],answer:[0,1,2,3],difficulty:"进阶",explanation:"HPA 不工作：Metrics Server 未部署，Pod 没有 CPU/内存 requests（无法计算使用率），指标未达到目标阈值，HPA 控制器检查失败。"},
{module:"网络",question:"Service 的 sessionAffinity 如何配置？",type:"单选",options:["annotation","spec.sessionAffinity 字段","env 变量","configmap"],answer:[1],difficulty:"进阶",explanation:"Service 的 sessionAffinity 在 spec.sessionAffinity 字段，可选 ClientIP（默认 None）。sessionAffinityConfig.clientIP.timeoutSeconds 可设置超时（默认 10800 秒）。"},
{module:"网络",question:"Service 无外部选择器时如何关联后端？",type:"单选",options:["必须有选择器","使用 Endpoints 手动关联","无法关联","使用 selector 注解"],answer:[1],difficulty:"进阶",explanation:"Service 没有选择器时不会自动生成 Endpoints。可以手动创建 Endpoints 对象关联后端（Service 名称与 Endpoints 名称必须相同）。"},
{module:"网络",question:"Service 的 ports 如何配置？",type:"多选",options:["port（Service 端口）","targetPort（Pod 端口）","nodePort（节点端口）","protocol（协议）"],answer:[0,1,2,3],difficulty:"进阶",explanation:"Service port 指定 Service 端口，targetPort 指定 Pod 端口（默认同 port），nodePort 指定节点端口（NodePort 类型），protocol 指定 TCP/UDP/SCTP。"},
{module:"网络",question:"LoadBalancer Service 如何工作？",type:"单选",options:["直接暴露 Pod IP","分配云负载均衡器并转发到 Service","在所有节点绑定端口","自动创建 Ingress"],answer:[1],difficulty:"进阶",explanation:"LoadBalancer Service 请求云提供商分配负载均衡器（AWS ELB、GCP LB），并将流量转发到 Service（通常是 ClusterIP）。"},
{module:"网络",question:"Service DNS 解析如何工作？",type:"单选",options:["直接解析到 Pod IP","解析到 ClusterIP","解析到 endpoints","随机分配"],answer:[1],difficulty:"进阶",explanation:"Service DNS 解析到 ClusterIP（虚拟 IP）。ClusterIP 到 endpoints（后端 Pod IP）是 iptables/IPVS 规则。A 记录：<service>.<namespace>.svc.cluster.local -> ClusterIP。"},
{module:"网络",question:"Ingress 与 Service 的区别？",type:"单选",options:["Ingress 是七层路由，Service 是四层负载均衡","没有区别","Ingress 是 Service 的一种","Service 是 Ingress 的一种"],answer:[0],difficulty:"进阶",explanation:"Ingress 是 HTTP(S) 七层路由（主机、路径）。Service 是四层（TCP/UDP）负载均衡。Ingress 通常转发到 Service。"},
{module:"网络",question:"如何在多个 Ingress 中配置 TLS？",type:"单选",options:["每个 Ingress 配置单独 TLS","共享 Secret 引用","只能单个 TLS","需要 Ingress Controller 配置"],answer:[0],difficulty:"高级",explanation:"每个 Ingress 可以有自己的 TLS Secret（spec.tls）。多个 Ingress 可以使用相同 Secret（如通配符证书）。"},
{module:"网络",question:"Ingress 的默认后端是什么？",type:"单选",options:["第一个 Service","spec.defaultBackend 指定的 Service","随机 Service","无"],answer:[1],difficulty:"进阶",explanation:"Ingress 的 spec.defaultBackend 指定未匹配任何规则时的默认后端。若未设置则返回 404/503。"},
{module:"网络",question:"Ingress Path 的匹配规则是什么？",type:"单选",options:["前缀匹配","精确匹配","正则匹配","视 pathType 而定"],answer:[3],difficulty:"高级",explanation:"pathType 决定：Prefix（前缀匹配），Exact（精确匹配），ImplementationSpecific（由实现决定，通常是前缀）。默认 ImplementationSpecific。"},
{module:"网络",question:"如何将 Ingress 暴露到外部？",type:"单选",options:["Ingress 本身已暴露","通过 Ingress Controller 的 Service（LoadBalancer/NodePort）暴露","需要额外 Service","无需 Service"],answer:[1],difficulty:"进阶",explanation:"Ingress Controller 需要一个 Service（LoadBalancer 或 NodePort）暴露到外部。Ingress 是路由规则，需要通过 Controller 的 Service 访问。"},
{module:"网络",question:"NetworkPolicy 的作用范围？",type:"单选",options:["仅限 Pod 出站","仅限 Pod 入站","可限制入站出站","仅限 Service"],answer:[2],difficulty:"进阶",explanation:"NetworkPolicy 可限制 Pod 的入站和出站。单独限制。Pod 有任何匹配的 NetworkPolicy 时，未在策略中允许的流量（任何方向）将被拒绝。"},
{module:"网络",question:"NetworkPolicy 的 policyTypes 有哪些？",type:"多选",options:["Ingress","Egress","Both","None"],answer:[0,1],difficulty:"高级",explanation:"policyTypes 限制策略类型：Ingress（入站），Egress（出站），Both（两者）。策略必须至少一个 Ingress 或 Egress 条目。"},
{module:"网络",question:"NetworkPolicy 可以限制 Service 流量吗？",type:"单选",options:["可以", "不行，只控制 Pod 流量","可以，通过 annotation","需要额外配置"],answer:[1],difficulty:"进阶",explanation:"NetworkPolicy 控制的是 Pod 的流量，不直接控制 Service。但可以通过控制 Service 后端的 Pod 流量间接实现。"},
{module:"网络",question:"如何创建 NetworkPolicy？",type:"单选",options:["kubectl create netpolicy","kubectl apply -f networkpolicy.yaml","kubectl policy create","kubectl create network"],answer:[1],difficulty:"进阶",explanation:"NetworkPolicy 通过 YAML 文件创建（kubectl apply）。也可使用 Kubectl create networkpolicy（但不如 YAML 灵活）。"},
{module:"网络",question:"Kubernetes 默认网络是全连通吗？",type:"单选",options:["是，除非限制了","否，需要显式允许","取决于网络插件","默认无网络"],answer:[2],difficulty:"高级",explanation:"默认网络行为取决于网络插件。许多 CNI 插件提供全连通（除非用 NetworkPolicy 限制），但有些（如 Cilium）默认不连通。但若创建了 NetworkPolicy，未允许的流量将被拒绝。"},
{module:"网络",question:"Pod 如何访问外部域名？",type:"单选",options:["必须配置 Service","使用集群 DNS 转发","无法访问","通过 hostNetwork"],answer:[1],difficulty:"进阶",explanation:"Pod 的 DNS 配置指向 CoreDNS，CoreDNS 转发外部查询到上游 DNS（宿主机或配置的 nameserver）。Pod 直接使用域名访问外部服务。"},
{module:"网络",question:"CoreDNS 的 Forward 有什么用？",type:"单选",options:["转发到其他 CoreDNS","将特定域名查询转发到其他 DNS","缓存 DNS 记录","生成 DNS 记录"],answer:[1],difficulty:"高级",explanation:"CoreDNS Forward 插件将特定域名的查询转发到其他 DNS 服务器。用于存根域名、自定义转发（如 .local、内部 DNS）。"},
{module:"网络",question:"Pod 的 hosts 文件可以修改吗？",type:"单选",options:["不能","可以，通过 Pod spec.hostAliases","自动同步 Service DNS","只在 hostNetwork 下可修改"],answer:[1],difficulty:"进阶",explanation:"Pod 可通过 spec.hostAliases 修改 hosts 文件（添加条目）。hostNetwork 下使用宿主机 hosts。Service DNS 自动生成（不影响 hosts）。"},
{module:"网络",question:"如何调试 CoreDNS？",type:"多选",options:["查看 CoreDNS Pod 日志","使用 nslookup/dig 测试解析","检查 CoreDNS ConfigMap","查看 DNS 记录"],answer:[0,1,2],difficulty:"高级",explanation:"调试 CoreDNS：kubectl logs 查看 pod 日志，nslookup/dig 从 Pod 测试 DNS 解析，检查 CoreDNS ConfigMap 配置（hosts、forward 等）。"},
{module:"网络",question:"CoreDNS 的 hosts 插件有什么作用？",type:"单选",options:["生成所有 Pod 的静态 A 记录","提供静态 DNS 记录（如自定义域）","同步 /etc/hosts","限制网络访问"],answer:[1],difficulty:"进阶",explanation:"CoreDNS hosts 插件提供静态 DNS 记录，类似 /etc/hosts。用于映射内部域名到 IP（如 localhost、web.example.com）。"},
{module:"网络",question:"拓扑感知路由有什么好处？",type:"多选",options:["降低跨区域延迟","减少跨区域流量成本","提高可用性","简化配置"],answer:[0,1,2],difficulty:"高级",explanation:"拓扑感知路由好处：优先路由到同一拓扑区域（AZ），跨区域延迟和流量成本降低（避免数据传输费用）。提高可用性（隔离故障影响）。"},
{module:"网络",question:"启用拓扑感知路由的前提条件？",type:"多选",options:["启用 topologies-aware-hints annotation","启用 endpointSlices","服务使用 LoadBalancer 类型","启用 Service topology keys"],answer:[0,1],difficulty:"高级",explanation:"启用拓扑感知路由：Service annotation: service.kubernetes.io/topology-aware-hints=auto，启用 EndpointSlice（默认启用）。"},
{module:"网络",question:"topology-aware-hints 值有哪些？",type:"多选",options:["Auto（自动）","Disabled（禁用）","Enabled（启用）","Custom"],answer:[0,1],difficulty:"高级",explanation:"topology-aware-hints 值有 auto（自动，默认）和 disabled（禁用）。Service 没有该 annotation 时为 auto（取决于默认配置）。"},
{module:"网络",question:"拓扑感知路由的提示如何生成？",type:"单选",options:["手动创建 EndpointSlice","由 EndpointSlice 控制器自动生成","由 Scheduler 生成","无需生成"],answer:[1],difficulty:"高级",explanation:"拓扑感知路由的 hints 由 EndpointSlice 控制器基于节点拓扑（标签如 topology.kubernetes.io/zone）自动生成。包含在 EndpointSlice 的 hints 字段。"},
{module:"网络",question:"拓扑感知路由适用于哪些场景？",type:"单选",options:["仅本地开发","云上跨可用区（AZ）服务","单节点集群","仅 DaemonSet"],answer:[1],difficulty:"高级",explanation:"拓扑感知路由主要用于云上跨可用区（AZ）的服务（如 AWS、GCP）。本地单节点集群无需（只有一个 zone）。"},
{module:"存储",question:"Pod 删除后 emptyDir 数据会怎样？",type:"单选",options:["保留","删除","备份到 etcd","迁移到其他节点"],answer:[1],difficulty:"进阶",explanation:"Pod 删除后 emptyDir 数据丢失。emptyDir 是临时存储，生命周期与 Pod 绑定。若容器重启，emptyDir 数据保留（除非 Pod 重建）。"},
{module:"存储",question:"如何使用 NFS 作为 Pod 存储？",type:"单选",options:["hostPath 指向 NFS 挂载点","nfs Volume 类型","必须使用 PVC","无法使用"],answer:[1],difficulty:"进阶",explanation:"使用 nfs Volume 类型的 Pod 可以直接挂载 NFS（直接挂载），无需 PVC。但生产环境推荐用 PV/PVC 管理资源。"},
{module:"存储",question:"configMap 和 secret Volume 有什么特点？",type:"多选",options:["默认运行时更新","文件是只读的","数据存储在 etcd","支持挂载指定 key"],answer:[0,1,2,3],difficulty:"进阶",explanation:"ConfigMap 和 Secret Volume：默认运行时更新（自动同步到 Pod），仅挂载的文件只读，数据存储在 etcd（不在节点），可支持挂载单个 key（items）。"},
{module:"存储",question:"为什么 emptyDir 无法持久化？",type:"单选",options:["因为太慢","因为绑定 Pod 生命周期","因为无 PV","因为不支持权限控制"],answer:[1],difficulty:"进阶",explanation:"emptyDir 绑定 Pod 生命周期，Pod 删除时数据销毁。持久化需要 PV/PVC 或 hostPath（但 hostPath 绑定节点）。"},
{module:"存储",question:"ceph / rados 作为 Volume 如何使用？",type:"单选",options:["通过 ceph Volume（已废弃）","通过 RBD CSI / PVC","通过 configMap","无法使用"],answer:[1],difficulty:"高级",explanation:"Ceph RBD 现在通过 CSI driver（RBD CSI）和 PVC 使用。直接使用 RBD Volume 已废弃。RBD CSI 提供动态配置和快照。"},
{module:"存储",question:"PVC 能否直接绑定 PV 的名称？",type:"单选",options:["不能，只能自动匹配","可以，通过 volumeName 字段","只能使用 StorageClass 自动配置","需要 annotation"],answer:[1],difficulty:"进阶",explanation:"PVC 可通过 volumeName 字段绑定特定 PV。但需要 PV 未绑定、PVC 容量和访问模式匹配。多用于静态 PV（管理员准备）。"},
{module:"存储",question:"PV 的 status 有哪些？",type:"多选",options:["Available","Bound","Released","Failed"],answer:[0,1,2],difficulty:"高级",explanation:"PV status：Available（可用），Bound（已绑定），Released（绑定 PVC 删除但 PV 保留，取决于回收策略），Failed（PV 自动删除失败）。"},
{module:"存储",question:"为什么 PVC 一直 Pending？",type:"多选",options:["没有可用 PV 或 StorageClass","资源不足","PVC 太大","没有权限"],answer:[0,1],difficulty:"进阶",explanation:"PVC Pending 原因：StorageClass 没有 provisioner（无法动态创建），PVC 容量超过可用 PV，存储资源不足。PVC 大小不会导致 Pending（只影响调度）。"},
{module:"存储",question:"如何删除绑定 PVC 的 PV？",type:"单选",options:["直接 kubectl delete pv","必须先删除 PVC（除非 reclaimPolicy=Retain]","无法删除","需要重启集群"],answer:[1],difficulty:"高级",explanation:"PV 被 PVC 绑定时无法删除。删除 PVC 后（或改 reclaimPolicy=Retain）才可删除 PV。PersistentVolume protection 机制防止意外删除。"},
{module:"存储",question:"PVC 绑定 PV 后可以修改容量吗？",type:"单选",options:["可以，直接编辑 PVC 容量","可以，通过 Patch 增加容量","不可以，需重建 PVC","可以，但依赖后端支持"],answer:[3],difficulty:"高级",explanation:"PVC 容量扩展：可通过修改 spec.resources.requests.storage 大小扩大容量，但需要 StorageClass 的 allowVolumeExpansion=true 且后端支持（如某些 CSI）。缩小容量不被支持。"},
{module:"存储",question:"StorageClass 的 mountOptions 有什么作用？",type:"单选",options:["控制卷挂载行为（如性能）","设置回收策略","动态配置参数","配置 Provisioner"],answer:[0],difficulty:"高级",explanation:"mountOptions 是卷挂载选项（如读写、缓存、性能优化），适用于某些存储后端（如 NFS）。不是回收策略。PVC 不需要关心。"},
{module:"存储",question:"如何创建本地存储的 StorageClass？",type:"单选",options:["使用 provisioner: kubernetes.io/no-provisioner","使用 local-provisioner","无法创建","使用 hostPath"],answer:[0],difficulty:"高级",explanation:"本地存储使用 no-provisioner（不动态创建 PV，需管理员创建 local PV）。StorageClass 仅提供 topologyBinding 等，不支持动态配置。"},
{module:"存储",question:"如何指定默认 StorageClass？",type:"单选",options:["annotation: storageclass.kubernetes.io/is-default-class='true'","label: default=true","修改 PVC 默认值","无法指定"],answer:[0],difficulty:"进阶",explanation:"StorageClass 添加 annotation: storageclass.kubernetes.io/is-default-class='true' 即为默认类。PVC 未指定 storageClassName 时会使用类（存在默认类）。"},
{module:"存储",question:"StorageClass 的 volumeBindingMode 有哪些？",type:"多选",options:["Immediate","WaitForFirstConsumer","Both","None"],answer:[0,1],difficulty:"高级",explanation:"volumeBindingMode：Immediate（立即绑定，默认，可能跨区域），WaitForFirstConsumer（等待有 Pod 后才绑定，可优化拓扑）。"},
{module:"存储",question:"为什么使用 WaitForFirstConsumer？",type:"单选",options:["节省成本","延迟绑定，优化拓扑（如同区域）","避免 PV 浪费","自动修复故障"],answer:[1],difficulty:"高级",explanation:"WaitForFirstConsumer 使得 Scheduler 可选择匹配的节点拓扑后再创建 PV，避免创建在错误区域。适合动态配置（如云 PV，有拓扑约束）。"},
{module:"存储",question:"VolumeSnapshot 依赖什么？",type:"单选",options:["存储卷 CSI 支持快照","Kubernetes 内置","特定云平台","无需依赖"],answer:[0],difficulty:"高级",explanation:"VolumeSnapshot 需要存储后端 CSI 驱动支持 VolumeSnapshot 功能。并非所有 CSI 都支持。支持快照的 CSI 会通过 Snapshotter（V1.28 后内置）创建/删除快照。"},
{module:"存储",question:"如何恢复 VolumeSnapshot 到新 PV？",type:"单选",options:["直接修改 PV","创建 PVC 时设置 dataSource 指向快照","使用快照的名称","无法恢复"],answer:[1],difficulty:"高级",explanation:"创建 PVC 时在 spec.dataSource 指定快照（API 和 kind），Kubernetes 会从快照恢复 PV/PVC。快照数据不直接修改。"},
{module:"存储",question:"VolumeSnapshot 是否支持增量快照？",type:"单选",options:["不支持","支持，依赖存储后端","需手动配置","不支持动态快照"],answer:[1],difficulty:"高级",explanation:"VolumeSnapshot 支持增量快照，但由存储后端实现决定。Kubernetes 侧只需请求快照，后端可创建增量快照以节省时间和存储。"},
{module:"存储",question:"VolumeSnapshot 如何删除？",type:"单选",options:["kubectl delete volumesnapshot","删除相关 PVC","自动删除当 PVC 删除时","手动删除快照数据"],answer:[0],difficulty:"高级",explanation:"kubectl delete volumesnapshot 删除快照对象。快照数据是否删除由快照内容处理（通常是存储后端删除快照资源）。删除快照不会影响 PV/PVC。"},
{module:"存储",question:"为什么要备份 PV/PVC？",type:"多选",options:["防止数据丢失","灾难恢复","迁移","PV 历久"],answer:[0,1,3],difficulty:"进阶",explanation:"PV/PVC 备份可防止数据丢失（如错误删除）、灾难恢复（节点故障、存储损坏）、数据迁移。PV 不自动备份（需手动或工具如 Velero）。"},
{module:"存储",question:"如何禁止动态配置 PV？",type:"单选",options:["无法禁止","PVC 的 storageClassName 设为空","删除所有 StorageClass","修改 Provisioner"],answer:[1],difficulty:"进阶",explanation:"PVC 的 storageClassName 设置为空则禁用动态配置，只匹配静态 PV（未绑定 StorageClass 的 PV）。"},
{module:"存储",question:"动态配置失败如何排查？",type:"多选",options:["查看 PVC 事件","查看 Provisioner Pod 日志","检查 StorageClass 配置","查看调度器日志"],answer:[0,1,2],difficulty:"高级",explanation:"动态配置失败排查：kubectl describe pvc 查看事件（如 ProvisionFailure），查看 external provisioner 日志（CSI/云 provider），检查 StorageClass 的 provisioner 和参数。"},
{module:"存储",question:"StorageClass 参数（parameters）有什么作用？",type:"单选",options:["定义回收策略","传递给 provisioner 的参数","配置挂载选项","限制容量"],answer:[1],difficulty:"高级",explanation:"StorageClass parameters 传递给 provisioner，用于创建 PV（如 AWS 的 IOPS、GCP 的类型、文件系统大小、快照 ID 等）。"},
{module:"存储",question:"默认 StorageClass 可以改吗？",type:"单选",options:["不能","可以，改 annotation 或删除后设新默认","必须删除所有 PVC","需要重建集群"],answer:[1],difficulty:"进阶",explanation:"可修改默认 StorageClass（改 annotation 或标记新类）。已有 PVC 使用哪个类不受影响，新 PVC 使用新默认类。"},
{module:"存储",question:"动态配置的回收策略默认是什么？",type:"单选",options:["Retain","Recycle","Delete","没有默认"],answer:[2],difficulty:"高级",explanation:"动态配置的 PV（通过 StorageClass 创建）的 reclaimPolicy 默认 Delete。即删除 PVC 时自动删除 PV 和数据，适合临时数据或快照备份的环境。"},
{module:"配置",question:"ConfigMap 如何在 Pod 中作为环境变量使用？",type:"多选",options:["envFrom 直接导入所有键","env + valueFrom 注入单个键","作为命令行参数引用 env","作为 Volume 挂载文件"],answer:[0,1],difficulty:"进阶",explanation:"ConfigMap 作为环境变量：envFrom 导入所有键（前缀可过滤），env + valueFrom 引用单个键。也可以通过 env 变量在 command/args 中引用。"},
{module:"配置",question:"ConfigMap 更新后如何触发 Pod 重启？",type:"多选",options:["无法自动触发","使用 checksum annotation","手动删除 Pod","修改 Pod spec 触发滚动更新"],answer:[1,2],difficulty:"高级",explanation:"ConfigMap 更新不自动重启 Pod 可：添加 checksum annotation 到 Pod（checksum/config.value: ...），修改 annotation 触发滚动更新；手动删除 Pod（由控制器重建）。"},
{module:"配置",question:"ConfigVolume 支持挂载时修改权限吗？",type:"单选",options:["不允许","可通过 defaultMode 设置权限","自动调整权限","需要 annotation"],answer:[1],difficulty:"进阶",explanation:"ConfigMap/Secret Volume 支持配置 defaultMode（8 进制，如 0600），设置挂载文件的权限。可全局也可 items 单独配置。默认 0644。"},
{module:"配置",question:"ConfigMap 文件过多（1000+）有问题吗？",type:"单选",options:["无限制","会降低性能","无法挂载","禁止使用"],answer:[1],difficulty:"高级",explanation:"ConfigMap 中条目过多会轻微降低性能（Kubelet 同步大量文件到容器）。但在合理范围内（100+）通常没问题。过大可拆分多个 ConfigMap。"},
{module:"配置",question:"ConfigMap 如何处理二进制数据？",type:"单选",options:["不能，仅文本","使用 base64 编码存储","直接二进制存储","通过 annotation"],answer:[1],difficulty:"高级",explanation:"ConfigMap 支持二进制数据，但值需要是 base64 编码字符串。解码后的数据在挂载文件中是原始二进制。适合存储证书、密钥等。"},
{module:"配置",question:"Secret 如何挂载为文件？",type:"单选",options:["使用 secret Volume","使用 envFrom","直接复制文件","无法挂载"],answer:[0],difficulty:"进阶",explanation:"Secret 通过 secret Volume 挂载为文件（类似于 ConfigMap）。适合挂载证书、密钥文件，避免 env 暴露。可通过 items 挂载单个 key。"},
{module:"配置",question:"Docker 镜像仓库 Secret 如何使用？",type:"多选",options:["在 Pod 的 spec.imagePullSecrets 引用","全局配置到 ServiceAccount"," annotation 到 Deployment","无法使用"],answer:[0,1],difficulty:"进阶",explanation:"Docker 镜像仓库认证 Secret：imagePullSecrets 在 Pod/Deployment 中引用；或者 ServiceAccount 的 imagePullSecrets 引用（全局）。"},
{module:"配置",question:"kubernetes.io/dockercjson Secret 的内容是什么？",type:"单选",options:["用户名密码明文","Docker 配置文件（~/.docker/config.json）内容","CA 证书","无特殊格式"],answer:[1],difficulty:"高级",explanation:"kubernetes.io/dockercjson Secret 内容为 JSON 格式的 Docker config（包含 auth、auths 等）。可用于镜像仓库认证。"},
{module:"配置",question:"TLS Secret（kubernetes.io/tls）包含什么？",type:"多选",options:["tls.crt","tls.key","ca.crt","password"],answer:[0,1],difficulty:"高级",explanation:"TLS Secret 包含 tls.crt（证书）和 tls.key（私钥）。可包含 ca.crt（可选，但 TLS Secret 不包含），password 不存在。"},
{module:"配置",question:"Secret 与 etcd 中存储安全吗？",type:"单选",options:["明文不安全","base64 编码后安全","等价明文（base64 易解码）","自动加密"],answer:[2],difficulty:"高级",explanation:"Secret 默认在 etcd 中存储为 base64 编码。base64 可轻松解码，因此不真正加密。需启用 etcd 静态加密（KMS）或使用外部保密管理器（如 AWS KMS）。"},
{module:"配置",question:"探针检测失败后 Pod 行为是什么？",type:"单选",options:["自动删除 Pod","根据失败类型和重启策略决定","立即重启容器","忽略"],answer:[1],difficulty:"进阶",explanation:"探针失败后行为：liveness 失败触发容器重启（根据 restartPolicy）；readiness 失败移出 Service（不影响 Pod 运行）；startup 失败 liveness 不执行（继续重试）。"},
{module:"配置",question:"HTTP 探针如何配置？",type:"单选",options:["仅支持 GET","支持 GET/POST","支持 GET/HEAD","支持任意 HTTP 方法"],answer:[2],difficulty:"进阶",explanation:"HTTP 探针支持 GET 和 HEAD 请求（默认 GET），可通过 httpGet.method（HEAD）指定。不支持 POST 等，因为健康检查通常是 GET。"},
{module:"配置",question:"探针的初始延迟（initialDelaySeconds）是什么？",type:"单选",options:["探针失败后重试间隔","容器启动后等待多久才开始检测","探针超时时间","最大重试次数"],answer:[1],difficulty:"进阶",explanation:"initialDelaySeconds 是容器启动后等待多久才开始检测。例如应用需要 10 秒启动，可以设置 15 秒避免启动失败被误判为失败。"},
{module:"配置",question:"如何配置探针超时（timeoutSeconds）？",type:"单选",options:["默认 1 秒，可设置更长","不可配置","与 periodSeconds 相同","等于 initialDelaySeconds"],answer:[0],difficulty:"进阶",explanation:"timeoutSeconds 可配置，默认 1 秒。如果应用响应慢，增加超时（如 5 秒）。超时后将判定为失败。"},
{module:"配置",question:"探针的 periodSeconds 和 successThreshold 怎么用？",type:"单选",options:["periodSeconds: 检测间隔，successThreshold: 连续成功多少次才算成功","两者都表示重试次数","固定不可改","successThreshold 必须大于 10"],answer:[0],difficulty:"高级",explanation:"periodSeconds 是检测间隔（默认 10 秒）。successThreshold 是连续成功多少次才算成功（默认 1，liveness 通常不需设置），可用于 startup 过渡期避免不稳定失败误判。"},
{module:"配置",question:"如何查看节点资源容量？",type:"单选",options:["kubectl get nodes","kubectl describe node","以上两者都可以","kubectl capacity"],answer:[2],difficulty:"进阶",explanation:"kubectl get nodes 显示基本容量（allocatable）；kubectl describe node 更详细显示分配、requests、limits。capacity 是节点总容量。"},
{module:"配置",question:"Pod 的容器未设置 requests 会怎样？",type:"单选",options:["默认 0，无法调度","使用 limits（若设置）","自动分配","无法启动"],answer:[1],difficulty:"进阶",explanation:"容器未设置 requests 时默认等于 limits（若设置了），即请求量=上限。若无 limits 也无 requests，requests 默认 0，可能调度到资源不足节点导致资源竞争。"},
{module:"配置",question:"Pod 的内存 limit 与 request 的区别？",type:"单选",options:["两者相同","request 是下限，limit 是上限","request 是上限，limit 是下限","只有 request 有效"],answer:[1],difficulty:"进阶",explanation:"request 是保证的资源下限（调度用），limit 是上限（限制）。内存超限会 OOM Kill，CPU 超限被限流。"},
{module:"配置",question:"为何避免 OOM Kill？",type:"多选",options:["设置合适的 limits/requests","监控内存使用","优化应用内存消耗","取消 limits（避免过限）"],answer:[0,1,2],difficulty:"进阶",explanation:"避免 OOM Kill：设置合理的容器内存 limit（不要太小或太大），监控内存使用（如 Prometheus），优化应用（避免内存泄漏，及时释放）。取消 limit 不推荐（资源竞争）。"},
{module:"配置",question:"LimitRange 和 ResourceQuota 配合使用吗？",type:"单选",options:["可以配合，通常一起使用","只能二选一","没有关系","不能共同使用"],answer:[0],difficulty:"高级",explanation:"LimitRange 和 ResourceQuota 可配合：前者限制资源范围（默认值、最大最小）防止滥用；后者限制总和（总 CPU、内存、对象数）。先设置 LimitRange 再 ResourceQuota 默认值生效。"},
{module:"配置",question:"如何监控容器资源使用？",type:"多选",options:["kubectl top pods","kubectl describe pod 显示配置但不实时","Prometheus + cAdvisor","Pod 日志"],answer:[0,1,2],difficulty:"高级",explanation:"监控容器资源：kubectl top pods（需要 Metrics Server）显示 CPU/内存使用率；Prometheus 从 cAdvisor 抓取历史指标；kubectl describe pod 显示配置信息但非实时使用。"},
{module:"配置",question:"为何设置 ephemeral-storage？",type:"单选",options:["临时存储无影响","防止容器日志/可写层耗尽节点存储导致驱逐","加速容器启动","提高性能"],answer:[1],difficulty:"高级",explanation:"设置容器 ephemeral-storage 限制可防止日志、临时文件、镜像层占满节点存储（导致节点被驱逐、Pod 被杀）。需要监控存储使用（如 Prometheus）。"},
{module:"调度",question:"为什么调度器无法调度 Pod？",type:"多选",options:["资源不足","亲和性限制","污点不匹配","PVC 未绑定"],answer:[0,1,2],difficulty:"进阶",explanation:"Pod Pending（未调度）的可能原因：资源不足（CPU/内存/Pod 数），亲和性未满足（nodeAffinity、podAffinity），污点不匹配（无 toleration），PVC 未绑 PV，调度器未运行，网络插件问题。"},
{module:"调度",question:"调度器在哪里运行？",type:"单选",options:["控制平面节点（master）","每个工作节点","控制平面可选部署","外部"],answer:[0],difficulty:"进阶",explanation:"调度器（kube-scheduler）运行在控制平面节点（通常作为 Deployment，多个副本）。通过 API Server 监听未调度 Pod。"},
{module:"调度",question:"如何禁用默认调度器？",type:"单选",options:["无法禁用","在 Pod 设置 schedulerName 为自定义调度器","删除控制器","修改 API Server"],answer:[1],difficulty:"高级",explanation:"Pod 可设置 schedulerName 为自定义调度器名称，由指定调度器调度。不影响全局（其他 Pod 使用默认调度）。如需禁用全局调度器需编辑 Deployment/etc。"},
{module:"调度",question:"调度器的调度目标是什么？",type:"单选",options:["分配到资源最多节点","平衡资源利用","满足所有约束（资源、亲和性、污点）","最快调度"],answer:[2],difficulty:"进阶",explanation:"调度器目标：找到一个节点满足所有约束（资源请求、亲和性、污点容忍度），然后（可选）通过打分选择最优（通常基于资源平衡等策略）。不追求最快（先过滤后打分）。"},
{module:"调度",question:"如何查看调度器日志？",type:"单选",options:["kubectl logs scheduler","kubectl logs -n kube-system -l component=kube-scheduler","在节点查看","无法查看"],answer:[1],difficulty:"高级",explanation:"调度器日志在 kube-scheduler Pod：kubectl logs -n kube-system -l component=kube-scheduler。查看调度决策、过滤节点、失败原因。"},
{module:"调度",question:"podAffinity 的 topologyKey 是什么？",type:"单选",options:["标签键，表示拓扑域（如 hostname)","Pod 的标签键","Node 的标签键","PVC 的属性"],answer:[0],difficulty:"高级",explanation:"podAffinity 的 topologyKey 是节点标签键，表示拓扑域（如 kubernetes.io/hostname 是节点级，topology.kubernetes.io/zone 是区域级）。Pod affinity 会在同一拓扑域内（同一节点或同一 AZ）。"},
{module:"调度",question:"required vs preferred 亲和性的区别？",type:"单选",options:["required 必须满足，preferred 优先但可选","无区别","preferred 有更高权重","required 只用于 nodeAffinity"],answer:[0],difficulty:"进阶",explanation:"required（硬性要求）必须满足，否则无法调度。preferred 有 weight，尝试满足（不满足时仍可调度）。同时可配置多个（匹配任一即可）。"},
{module:"调度",question:"nodeAffinity 与 nodeSelector 能同时使用吗？",type:"单选",options:["能，但 nodeSelector 更简单","能，两者可以共存","不能，冲突","不能，只能选一个"],answer:[2],difficulty:"进阶",explanation:"nodeSelector 和 nodeAffinity 不能同时使用（冲突）。使用 nodeAffinity 即可。nodeSelector 是简单标签相等匹配的子集。"},
{module:"调度",question:"如何确保不同应用的 Pod 不在同一节点？",type:"单选",options:["nodeSelector 标签不同","使用 podAntiAffinity","设置污点","无法保证"],answer:[1],difficulty:"高级",explanation:"使用 podAntiAffinity（required with topologyKey=kubernetes.io/hostname）确保不同应用的 Pod 不在同一个节点。适合高可用场景（避免单点故障）。"},
{module:"调度",question:"nodeAffinity 可以基于节点标签吗？",type:"单选",options:["不能","可以，任何节点标签都可","只能是某些特定标签","只在 master 节点可用"],answer:[1],difficulty:"高级",explanation:"nodeAffinity 可基于任何节点标签（由管理员添加，如 region、zone、disk-type、node-selector）。支持匹配操作（In, NotIn, Exists, Gt, Lt 等）。"},
{module:"调度",question:"污点的 key 可以省略吗？",type:"单选",options:["不能，必须指定","可以（为空）","可以，使用 *","自动填充"],answer:[0],difficulty:"进阶",explanation:"Taint 的 key 必须指定。但 value 可以省略（此时 operator 只能用 Exists）。key 为空时不合法。例如 key=special-hardware。"},
{module:"调度",question:"多个 toleration 如何匹配污点？",type:"单选",options:["必须匹配所有污点","匹配任一个污点","按序匹配","无法匹配多个"],answer:[1],difficulty:"进阶",explanation:"Pod 可以有多个 toleration，每个 toleration 匹配一个污点（key、value、effect、operator）。若容忍了所有运行节点的所有污点，则可以调度该节点。"},
{module:"调度",question:"容忍度的 operator 有哪些？",type:"多选",options:["Equal","Exists","NotExists","Regex"],answer:[0,1],difficulty:"高级",explanation:"toleration operator 有 Equal（key=value 必需），Exists（仅匹配 key 可省略 value），以及 NotExists（不存在）。没有 Regex。"},
{module:"调度",question:"如何给 DaemonSet 添加 toleration？",type:"单选",options:["在 Pod template 的 spec.tolerations","在 spec.template.tolerations","在 spec.daemonSet.tolerations","无法添加"],answer:[1],difficulty:"高级",explanation:"DaemonSet 的 toleration 在 spec.template.spec.tolerations（Pod template）。因为 DaemonSet 管理 Pod，设置 Pod 的 toleration。"},
{module:"调度",question:"NoExecute 污点的 tolerationSeconds 是什么？",type:"单选",options:["容忍污点多久","驱逐前等待多久","Taint 超时时间","污点创建时间"],answer:[1],difficulty:"高级",explanation:"tolerationSeconds（仅 NoExecute 有效）是当污点出现在已调度的节点时（如给节点加污点），Pod 在此秒数后会被驱逐。默认为 0（立即），-1 表示不驱逐（永久容忍）。"},
{module:"调度",question:"为什么主控节点有 NoSchedule 污点？",type:"单选",options:["限制 Pod 调度到主控节点","防止资源不足","标记不可用","安全原因"],answer:[0],difficulty:"进阶",explanation:"通常给控制平面节点（master) 加上 NoSchedule 或 NoExecute 污点，避免一般工作负载（普通 Pod）调度到控制节点，保持控制节点资源充足稳定。可通过 toleration 允许 system 组件（如监控、日志）在此运行。"},
{module:"调度",question:"PriorityClass 有默认吗？",type:"单选",options:["有，global-default","无默认","default-system","有但不可修改"],answer:[0],difficulty:"高级",explanation:"PriorityClass 有 global-default（默认 priority:0），未指定 priorityClassName 的 Pod 使用此类。可修改 global-default 但不建议（可能影响集群）。"},
{module:"调度",question:"为什么高优先级 Pod 抢占失败？",type:"多选",options:["没有可抢占的低优先级 Pod","抢占被禁用（PriorityClass preemptionPolicy=Never）","Pod 有 NoExecute 污点","其他 Pod 也在抢占"],answer:[0,1],difficulty:"高级",explanation:"抢占失败：高优先级 Pod 无法调度且没有可抢占的低优先级 Pod（没有合适节点或 Pod），PriorityClass 的 preemptionPolicy=Never 禁用抢占。"},
{module:"调度",question:"优先级影响调度顺序吗？",type:"单选",options:["高优先级先调度","优先级仅用于抢占，不影响顺序","反顺序（低先）","随机"],answer:[1],difficulty:"高级",explanation:"高优先级 Pod 不一定比低优先级先调度（先到先调度）。优先级只影响抢占决策（资源不足时决定是否驱逐低优先级 Pod）。"},
{module:"调度",question:"如何保护 Pod 不被抢占？",type:"多选",options:["设置高优先级","通过 annotation","kube-system 命名空间","无保护"],answer:[1,2],difficulty:"高级",explanation:"保护 Pod 不被抢占：在 kube-system 的 Pod 自动保护（不被抢占），添加 annotation: cluster-autoscaler.kubernetes.io/safe-to-evict=false 可防止被驱逐/抢占（部分调度器/自动扩容器适用）。"},
{module:"调度",question:"PriorityClass 的 globalDefault 有什么用？",type:"单选",options:["设置默认优先级","设置最高优先级","定义抢占策略","无作用"],answer:[0],difficulty:"高级",explanation:"PriorityClass 的 globalDefault=true 指定为默认类（未设置 priorityClassName 的 Pod 使用）。default PriorityClass 的 value 定义默认优先级（通常为 0）。"},
{module:"集群管理",question:"节点 Unreachable 怎么处理？",type:"多选",options:["检查网络（节点与 API）","检查 kubelet 是否运行","检查容器运行时","重启集群"],answer:[0,1,2],difficulty:"进阶",explanation:"节点 Unreachable 处理：检查网络（节点与 API Server 是否连通），检查节点上 kubelet 是否运行（kubectl logs node 不存在），检查容器运行时（docker/containerd）。"},
{module:"集群管理",question:"如何标记节点为不可用（维护前）？",type:"单选",options:["kubectl unschedule node","kubectl cordon node","kubectl drain node","kubectl node delete"],answer:[1],difficulty:"进阶",explanation:"kubectl cordon <node> 标记节点不可调度（新 pod 不调度到此节点，现存的不受影响）。维护前用 kubectl drain 驱逐所有 Pod（包含 cordon）。"},
{module:"集群管理",question:"如何快速检查节点状态？",type:"单选",options:["kubectl get nodes","kubectl describe node","以上两者都不行","需要 API"],answer:[0],difficulty:"进阶",explanation:"kubectl get nodes 快速查看节点状态（READY/NotReady）。kubectl describe 更详细（容量、分配、事件）。"},
{module:"集群管理",question:"节点内存压力（MemoryPressure）有什么影响？",type:"单选",options:["节点立即被标记 NotReady","影响调度（可能不调度新 Pod），但 Pod 不会被驱逐","节点重启","无影响"],answer:[1],difficulty:"进阶",explanation:"节点在 MemoryPressure 状态下影响调度（MemoryPressure condition 影响调度决策），可能导致新 Pod 不调度到此节点。已调度的 Pod 不一定被驱逐（若内存不足可能会）。"},
{module:"集群管理",question:"如何给节点打标签？",type:"单选",options:["kubectl label node <node> key=value","kubectl annotate node","kubectl tag node","nodeconfig set"],answer:[0],difficulty:"进阶",explanation:"kubectl label node <name> key=value 给节点打标签，可用于亲和性（nodeAffinity、nodeSelector）。例如 kubectl label nodes node1 region=us-west-1。"},
{module:"集群管理",question:"污点和节点标签的区别是什么？",type:"单选",options:["无区别","污点控制调度，标签用于亲和性/选择器","标签控制调度，污点用于亲和性","污点只能用于 master"],answer:[1],difficulty:"进阶",explanation:"污点（Taint）用于控制调度（不调度容忍的 Pod），标签（Label）用于选择器亲和性（调度时选择有特定标签的节点）。标签也可用于识别/组织。"},
{module:"集群管理",question:"节点无法升级怎么办？",type:"多选",options:["检查 kubeadm 版本","检查控制平面版本","检查镜像版本","直接跳过升级"],answer:[0,1],difficulty:"高级",explanation:"节点无法升级：检查 kubeadm 版本是否最新（先升级工具），检查控制平面是否已升级后工作节点再升级（版本兼容性）。"},
{module:"集群管理",question:"如何删除节点？",type:"单选",options:["直接 kubectl delete node","kubectl drain 后删除节点","无法删除","需要重启集群"],answer:[1],difficulty:"进阶",explanation:"删除节点：先 kubectl drain（驱逐 Pod），然后 kubectl delete node <name>。直接删除会留下孤儿 Pod（kubelet 不会删除）。也需从 kubelet 移除节点信息（kubeadm reset）。"},
{module:"集群管理",question:"升级集群前需要备份什么？",type:"多选",options:["etcd 快照","集群配置（YAML）","版本信息","节点镜像"],answer:[0,1],difficulty:"高级",explanation:"升级前备份：etcd（kubeadm etcd）快照，集群配置（部署 YAML、证书），版本信息（当前集群版本、节点版本）。节点镜像在云环境或本地已有。"},
{module:"集群管理",question:"kubeadm 升级步骤是什么？",type:"单选",options:["kubeadm upgrade apply <version> -> 升级各节点","直接升级节点","无需操作","自动升级"],answer:[0],difficulty:"高级",explanation:"kubeadm 升级流程：先升级 kubeadm 工具 -> 控制平面节点执行 kubeadm upgrade apply -> 各工作节点升级 kubeadm -> kubeadm upgrade node。"},
{module:"集群管理",question:"升级失败如何处理？",type:"多选",options:["检查升级日志","查看节点状态","回滚到上一版本","删除集群重建"],answer:[0,1,2],difficulty:"高级",explanation:"升级失败：检查升级日志（kubeadm 的输出或日志），检查节点状态（kubectl get nodes），尝试回滚（需 etcd 备份）。必要时手动修复（如重建 API Server 容器）。"},
{module:"集群管理",question:"版本更新时主要检查什么？",type:"多选",options:["兼容性（跨版本）","API 弃用/废弃","性能变化","安全更新"],answer:[0,1,3],difficulty:"高级",explanation:"版本更新检查：版本跨版本兼容性（从 v1.28 到 v1.29），是否有 API 弃用（alpha -> beta -> GA），安全更新（CVE），性能变化（如调度器、API Server 改进）。"},
{module:"集群管理",question:"Kubernetes 支持小版本跨多版本升级吗？",type:"单选",options:["支持，可从 v1.27 升到 v1.30","不支持，只能逐个升级（v1.27->v1.28->v1.29","不确定","不能跨版本"],answer:[1],difficulty:"高级",explanation:"通常支持小版本跨版本升级，但建议逐次升级（如 1.27->1.28->1.29）以减少问题。跨版本（例如 1.26->1.29）可能存在兼容性、弃用 API 问题。"},
{module:"集群管理",question:"如何监控 Kubernetes 集群？",type:"多选",options:["Prometheus + Grafana","Metrics Server","云厂商监控","手动检查"],answer:[0,1,2],difficulty:"进阶",explanation:"集群监控常用 Prometheus + Grafana（完整指标采集和可视化），Metrics Server 提供基础指标（支持 HPA/kubectl top），云厂商（EKS、GKE）提供默认监控。手动不适合生产环境。"},
{module:"集群管理",question:"Prometheus 如何抓取 Kubernetes 指标？",type:"单选",options:["直接访问 API Server","使用 ServiceMonitor/Endpoint","通过 kubectl 代理","读取 etcd"],answer:[1],difficulty:"高级",explanation:"Prometheus 通过 ServiceMonitor（Prometheus Operator 提供）或 annotations 发现 Service/Pod 的指标端点，然后抓取。Kubelet 提供的 /metrics 端点暴露 cAdvisor 指标。"},
{module:"集群管理",question:"哪些指标需要重点监控？",type:"多选",options:["API Server 延迟/QPS","节点资源（CPU/内存）","Pod 调度失败","etcd 延迟"],answer:[0,1,2],difficulty:"高级",explanation:"重点监控：API Server 延迟/QPS（反映集群负载/瓶颈），节点资源（CPU/内存使用，可否调度更多 Pod），Pod 调度失败（Pending 数量、原因），etcd 延迟（影响所有组件）。"},
{module:"集群管理",question:"如何告警 Pod NotReady？",type:"单选",options:["Prometheus Alertmanager 规则","手动检查","无法告警","只用 kubectl watch"],answer:[0],difficulty:"高级",explanation:"使用 Prometheus Alertmanager 配置告警规则（如 kube_pod_status_phase != 1 超过 5 分钟），匹配标签后发送通知（邮件/钉钉/Slack）。"},
{module:"集群管理",question:"为何需要 Metrics Server？",type:"单选",options:["存储指标","提供 HPA/kubectl top 所需的基础指标","替代 Prometheus","控制平面组件"],answer:[1],difficulty:"进阶",explanation:"Metrics Server 提供实时 CPU/内存使用数据，用于 HPA 自动伸缩和 kubectl top 命令。它不存储历史（由 Prometheus 存储），仅聚合当前值。"},
{module:"集群管理",question:"容器日志默认存储在节点哪里？",type:"单选",options:["etcd","/var/log/containers/<container-id>.log","容器内","内存"],answer:[1],difficulty:"进阶",explanation:"容器日志存储在节点 /var/log/containers/ 目录（通过 kubelet 收集），文件由容器运行时（containerd）管理。kubectl logs 从此文件读取。"},
{module:"集群管理",question:"日志收集 DaemonSet 适合什么？",type:"单选",options:["小规模集群日志收集","不需要日志外发","无需容器日志","不适用"],answer:[0],difficulty:"进阶",explanation:"DaemonSet（每节点运行一个）适合收集集群容器日志（如 Fluentd、Logstash）到集中式日志系统（ELK、Elasticsearch、CloudWatch）。"},
{module:"集群管理",question:"ELK 在 Kubernetes 中如何部署？",type:"单选",options:["Pod 运行","StatefulSet","DaemonSet","以上都可以"],answer:[3],difficulty:"高级",explanation:"ELK 可灵活部署：Elasticsearch 可用 StatefulSet（持久化），Filebeat/Fluentd 用 DaemonSet 收集日志，Kibana 作为前端 Service（LoadBalancer/NodePort）。"},
{module:"集群管理",question:"如何处理日志过大占满磁盘？",type:"多选",options:["配置日志轮转","限制日志大小（限制容器存储）","转发到外存储","定期清空日志"],answer:[0,1,2],difficulty:"高级",explanation:"日志大处理：配置 LogRotation（节点容器运行时如 docker 日志轮转），限制容器日志大小（limit ephemeral-storage），转发到外存储（避免本地磁盘满），设置日志保留期等。"},
{module:"集群管理",question:"如何收集应用日志？",type:"多选",options:["应用写 stdout（默认收集）","Fluentd DaemonSet","Filebeat Sidecar","直接本地查看"],answer:[0,1],difficulty:"进阶",explanation:"应用写标准输出（stdout），容器运行时收集到节点 /var/log/containers；通过 Fluentd 或文件转发到日志系统（ELK、Kafka）；或 Sidecar（Filebeat）日志采集。"},
{module:"集群管理",question:"etcd 备份恢复的限制是什么？",type:"单选",options:["无限制","仅恢复集群状态，无法恢复 PVC 数据","无法恢复集群","需离线"],answer:[1],difficulty:"高级",explanation:"etcd 备份恢复的是集群状态（对象、配置），无法恢复 PVC 数据（数据在存储卷）。PVC 数据需要通过快照、备份工具（如 Velero）、同步复制。"},
{module:"集群管理",question:"Velero 如何工作？",type:"单选",options:["直接备份 etcd","备份 Kubernetes 资源（API 对象）和持久卷数据","仅备份 PVC","备份数据库"],answer:[1],difficulty:"高级",explanation:"Velero 备份：Kubernetes 资源（API 对象）和 PVC 数据（通过 Snapshot 或数据复制）。支持定时备份、迁移、灾难恢复。可以恢复到新集群。"},
{module:"集群管理",question:"灾难恢复流程是什么？",type:"多选",options:["恢复 etcd（集群状态）","恢复 PVC（数据卷）","验证应用是否恢复运行","通知"],answer:[0,1,2],difficulty:"高级",explanation:"灾难恢复流程：先恢复 etcd（恢复集群状态，对象、配置），然后恢复 PVC 数据（从快照、备份或复制），验证应用运行和功能，最后通知用户。"},
{module:"集群管理",question:"如何备份节点配置？",type:"单选",options:["拷贝 /etc/kubernetes","kubeadm 提供备份","手动记录","无需备份"],answer:[0],difficulty:"进阶",explanation:"节点配置（证书、kubelet 配置、kubeadm 配置）通常在 /etc/kubernetes。备份该目录。也可使用 kubeadm 的配置备份。"},
{module:"集群管理",question:"备份策略如何制定？",type:"多选",options:["制定备份频率（定时）","备份内容（etcd、PVC、配置）","测试恢复流程","存储备份位置（本地/云）"],answer:[0,1,2],difficulty:"高级",explanation:"备份策略：定时备份频率（每日、每周），备份内容（etcd、PVC、证书），测试恢复（确保备份可用），备份位置（云存储、异地）。遵循 3-2-1 原则（3份、2介质、1离线）。"}
];

// 提取唯一模块列表
const modules = [...new Set(questions.map(q => q.module))];

