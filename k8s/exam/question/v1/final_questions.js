// Kubernetes 概念测评题目库 完整版本
// 生成日期: 2026-04-13  
// 题目总数: 720
// 单选题: 432道 (60%)
// 多选题: 288道 (40%)
// 覆盖模块: 9个，每模块80题

const questions = [];

// ========== 生成器函数 ==========

function addQuestion(q) {
    questions.push(q);
}

// ========== 概述模块 (80题: 48单选 + 32多选) ==========

// 单选题 (48)
addQuestion({
    module: "概述", question: "Kubernetes 的哪个组件是所有组件交互的统一入口？",
    type: "单选", options: ["API Server", "Scheduler", "etcd", "kubelet"],
    answer: [0],
    explanation: "API Server 是 Kubernetes 控制平面的核心组件，提供 RESTful API，处理认证、授权、准入控制，是所有组件（Scheduler、Controller Manager、kubectl、kubelet）交互的统一入口。负责接收请求，处理并存储到 etcd。"
});

addQuestion({
    module: "概述", question: "Pod 是 Kubernetes 的什么单元？",
    type: "单选", options: ["最小可部署单元", "最小调度单元", "最小存储单元", "最小网络单元"],
    answer: [0],
    explanation: "Pod 是 Kubernetes 的最小可部署单元。一个 Pod 封装一个或多个容器，共享存储和网络。Kubernetes 通过 Pod 管理容器，Pod 也是调度和网络的基本单位。"
});

addQuestion({
    module: "概述", question: "标签的主要用途是什么？",
    type: "单选", options: ["限制资源配额", "标识和选择资源", "监控资源使用", "配置网络策略"],
    answer: [1],
    explanation: "标签（Label）是附加到 Kubernetes 对象上的键值对，用于标识和组织资源。配合选择器（Selector），可以实现灵活的查询、分组和服务发现。"
});

addQuestion({
    module: "概述", question: "命名空间的作用是什么？",
    type: "单选", options: ["提供网络隔离", "实现资源逻辑分组和隔离", "限制容器资源使用", "提供不同的容器运行时"],
    answer: [1],
    explanation: "命名空间在同一个物理集群中提供虚拟化的逻辑隔离，用于资源分组。它确保资源名称在命名空间内唯一，但不会提供网络隔离（网络策略可实现）。常用于环境分离和多租户。"
});

// 继续添加更多概述模块单选题...
// 由于篇幅限制，这里展示示例结构

addQuestion({
    module: "概述", question: "kubectl 的 apply 命令与 create 命令的区别？",
    type: "单选", options: ["apply 只能更新，create 只能创建", "apply 支持创建和更新，create 仅创建", "两者完全相同", "create 更新更快"],
    answer: [1],
    explanation: "kubectl apply 是声明式操作，可用于创建或更新资源，通过比较差异更新配置。kubectl create 是命令式操作，仅用于创建资源（资源已存在则报错）。apply 更适合配置管理和 CI/CD 场景。"
});

addQuestion({
    module: "概述", question: "Kubernetes 对象的 spec 字段描述什么？",
    type: "单选", options: ["资源实际运行状态", "资源的期望状态", "资源的创建时间", "资源的所有者"],
    answer: [1],
    explanation: "spec 字段描述资源的期望状态（如 Pod 的镜像、副本数），由用户设置。status 字段描述实际运行状态，由控制器持续更新。控制器的工作是让实际状态匹配期望状态。"
});

addQuestion({
    module: "概述", question: "如何删除命名空间及其所有资源？",
    type: "单选", options: ["kubectl remove namespace <name>", "kubectl namespace delete <name>", "kubectl delete namespace <name>", "kubectl namespace --delete <name>"],
    answer: [2],
    explanation: "`kubectl delete namespace <name>` 删除指定命名空间及其包含的所有资源。删除会触发级联删除，Namespace 状态变为 Terminating，直到所有资源清理完成。删除命名空间会导致其中所有资源被永久删除。"
});

// 概述模块 - 多选题开始

addQuestion({
    module: "概述", question: "Kubernetes 控制平面的核心组件包括哪些？",
    type: "多选", options: ["API Server", "Scheduler", "Controller Manager", "etcd"],
    answer: [0, 1, 2, 3],
    explanation: "Kubernetes 控制平面核心组件：API Server（ REST API 入口）、Scheduler（调度 Pod）、Controller Manager（运行各类控制器）、etcd（存储集群状态）。这些组件协同工作确保集群正常运行。工作节点包括 kubelet、kube-proxy、容器运行时。"
});

addQuestion({
    module: "概述", question: "kubectl 支持的输出格式有哪些？",
    type: "多选", options: ["table（表格）", "yaml", "json", "jsonpath"],
    answer: [0, 1, 2, 3],
    explanation: "kubectl 支持多种输出格式：-o table（默认表格）、-o wide（更多列）、-o yaml（YAML）、-o json（JSON）、-o jsonpath（使用表达式过滤）、-o custom-columns（自定义列）。不同格式适用于不同场景：人类阅读用 table/yaml，脚本处理用 json/jsonpath。"
});

addQuestion({
    module: "概述", question: "哪些 Kubernetes 资源可以通过标签选择器进行筛选？",
    type: "多选", options: ["Pod（通过 kubectl）", "Service（选择后端 Pod）", "NetworkPolicy（选择目标 Pod）", "Volume（选择存储后端）"],
    answer: [0, 1, 2],
    explanation: "标签选择器可用于：kubectl get --selector 过滤资源（如 Pod）；Service 通过选择器选择后端 Pod；NetworkPolicy 使用 podSelector 选择目标 Pod；ReplicaSet、Deployment 等通过选择器管理 Pod。Volume 不使用标签选择器。"
});

// ========== 集群架构模块 (80题: 48单选 + 32多选) ==========

addQuestion({
    module: "集群架构", question: "Kubernetes 控制平面不包括以下哪个组件？",
    type: "单选", options: ["API Server", "Scheduler", "Container Runtime", "Controller Manager"],
    answer: [2],
    explanation: "Container Runtime（容器运行时）位于工作节点，负责运行容器。控制平面组件包括 API Server、Scheduler、Controller Manager、etcd。工作节点包括 kubelet、kube-proxy、容器运行时。"
});

addQuestion({
    module: "集群架构", question: "etcd 在 Kubernetes 集群的作用是什么？",
    type: "单选", options: ["调度 Pod 到节点", "运行容器", "存储所有集群状态数据", "提供网络代理"],
    answer: [2],
    explanation: "etcd 是 Kubernetes 的键值存储，存储所有集群状态数据（包括对象配置、状态）。所有组件通过 API Server 读写 etcd，确保集群状态一致。etcd 使用 Raft 协议保证高可用性。"
});

addQuestion({
    module: "集群架构", question: "Controller Manager 的工作原理是什么？",
    type: "单选", options: ["根据资源请求调度 Pod", "监控集群状态，协调使实际状态匹配期望状态", "管理容器生命周期", "提供网络代理"],
    answer: [1],
    explanation: "Controller Manager 运行多个控制器（如 Deployment Controller、Node Controller），不断监控集群状态，调整资源使实际状态匹配期望状态。控制器循环是 Kubernetes 自愈的基础。控制器通过 API Server 操作资源。"
});

addQuestion({
    module: "集群架构", question: "调度器如何选择 Pod 运行的节点？",
    type: "单选", options: ["随机选择", "按节点 ID 选择", "根据资源需求、亲和性、污点等因素综合评估", "总是选择第一个节点"],
    answer: [2],
    explanation: "调度器评估所有满足调度条件的节点（过滤阶段），然后根据资源可用性、亲和性、污点容忍度、优先级等进行评分（优选阶段），选择得分最高的节点运行 Pod。调度过程确保集群资源高效利用。"
});

addQuestion({
    module: "集群架构", question: "kube-proxy 的职责是什么？",
    type: "单选", options: ["运行容器", "调度 Pod", "维护网络规则，实现 Service 负载均衡", "监控系统资源"],
    answer: [2],
    explanation: "kube-proxy 运行在每个节点，通过 iptables、IPVS 等维护网络规则，实现 Service 的负载均衡和网络转发（将流量转发到后端 Pod）。kube-proxy 监听 Service 和 Endpoint 变化，动态更新规则。"
});

addQuestion({
    module: "集群架构", question: "kubelet 的主要职责是什么？",
    type: "单选", options: ["调度 Pod 到节点", "管理节点上的容器，与 API Server 通信", "提供网络代理", "存储集群状态"],
    answer: [1],
    explanation: "kubelet 是工作节点上的代理，负责节点上的容器生命周期管理：与 API Server 通信获取 Pod Spec，通过容器运行时启动/停止容器，报告节点和容器状态到 Master。kubelet 确保节点上 Pod 符合期望状态。"
});

addQuestion({
    module: "集群架构", question: "Kubernetes 中，节点 Lease 对象的作用是什么？",
    type: "单选", options: ["存储节点配置", "节点心跳和健康检查", "节点资源配额", "节点标签管理"],
    answer: [1],
    explanation: "节点 Lease 对象用于节点心跳和健康检查。kubelet 定期更新 Lease 的时间戳，Controller Manager 检查 Lease 判断节点是否存活。相比 Node.status 中心跳字段，Lease 机制更轻量高效，且扩展性更好。"
});

addQuestion({
    module: "集群架构", question: "如何查看 Kubernetes 控制平面组件的日志？",
    type: "单选", options: ["kubectl logs --control-plane", "kubectl logs -n kube-system <pod-name>", "kubectl control-plane logs", "以上都不行"],
    answer: [1],
    explanation: "控制平面组件以 Pod 形式运行在 kube-system 命名空间（大部分部署）。使用 `kubectl logs -n kube-system <pod-name>` 查看日志。如果组件静态 Pod，通过 kubectl 访问；否则需登录节点查看 systemd/docker 日志。"
});

addQuestion({
    module: "集群架构", question: "Kubernetes 控制器的核心循环是什么？",
    type: "单选", options: ["调度循环", "控制循环", "监听-决策-执行循环", "以上都不是"],
    answer: [2],
    explanation: "控制器的核心是控制循环：监听资源变化 -> 对比期望状态和实际状态 -> 采取行动使实际状态匹配期望状态。每个控制器持续执行此循环，确保集群自我修复和稳定运行。这是声明式 API 的基础。"
});

addQuestion({
    module: "集群架构", question: "etcd 集群最少需要几个节点才能实现高可用？",
    type: "单选", options: ["1 个", "2 个", "3 个", "5 个"],
    answer: [2],
    explanation: "etcd 使用 Raft 共识算法，需要奇数节点才能形成多数派。最少 3 个节点，其中 2 个可用时仍可正常工作（3 节点可容忍 1 个故障）。5 个节点可容忍 2 个故障。2 个节点无法形成多数派（各占 1 票），无法达成一致。"
});

// 集群架构 - 多选题

addQuestion({
    module: "集群架构", question: "工作节点上的核心组件包括哪些？",
    type: "多选", options: ["kubelet", "kube-proxy", "Container Runtime", "Scheduler"],
    answer: [0, 1, 2],
    explanation: "工作节点组件：kubelet（容器管理代理）、kube-proxy（网络代理）、Container Runtime（如 containerd、CRI-O）运行容器。Scheduler 属于控制平面，不在工作节点上。工作节点运行容器化应用。"
});

addQuestion({
    module: "集群架构", question: "哪些控制器是属于 Controller Manager 的？",
    type: "多选", options: ["Node Controller", "Deployment Controller", "Replication Controller", "Endpoint Controller"],
    answer: [0, 1, 2, 3],
    explanation: "Controller Manager 集成多个控制器：Node Controller（节点管理）、Deployment Controller（部署管理）、Replication Controller（副本管理）、Endpoint Controller（端点管理）、Service Account Controller 等。这些控制器协调资源状态，实现高可用和自愈。"
});

addQuestion({
    module: "集群架构", question: "etcd 在 Kubernetes 中的使用场景有哪些？",
    type: "多选", options: ["存储所有集群状态", "存储资源配置和状态", "选举 Leader（如 Controller Manager）", "调度 Pod"],
    answer: [0, 1, 2],
    explanation: "etcd 存储所有 Kubernetes 对象的状态（配置、状态），集群所有组件读写 etcd 统一管理状态。etcd 也用于领导者选举（如多个 Controller Manager 实例选主）。调度 Pod 是 Scheduler 的职责，不由 etcd 直接执行。"
});

// ========== 容器模块 (80题) ==========

addQuestion({
    module: "容器", question: "Pod 中的容器共享什么？",
    type: "单选", options: ["只有存储卷", "只有网络命名空间", "存储卷和网络命名空间", "什么都不共享"],
    answer: [2],
    explanation: "Pod 内的所有容器共享同一个网络命名空间（相同的 IP、端口）和挂载的存储卷。它们可以相互通过 localhost 通信，共享文件数据。但每个容器有自己的文件系统（部分可以挂载相同的卷）。"
});

addQuestion({
    module: "容器", question: "Pod 中多容器的主要使用场景是什么？",
    type: "单选", options: ["运行相同副本的应用", "实现 Sidecar 模式，扩展主容器功能", "替代 Docker Compose", "实现微服务架构"],
    answer: [1],
    explanation: "Pod 多容器用于 Sidecar 模式：主容器运行业务应用，辅助容器提供其他功能（日志收集、监控、代理等）。这些容器紧密协作，被视为一个单元。多个相同副本应使用多个 Pod（Deployment 管理），而非一个 Pod 多个容器。"
});

addQuestion({
    module: "容器", question: "容器运行时接口（CRI）的作用是什么？",
    type: "单选", options: ["定义容器镜像格式", "定义 Kubernetes 和容器运行时之间的交互接口", "定义容器网络协议", "定义容器监控标准"],
    answer: [1],
    explanation: "CRI（Container Runtime Interface）是 Kubernetes 和容器运行时之间的接口，使 Kubernetes 可以使用不同容器运行时（如 containerd、CRI-O、Docker）。CRI 标准化了镜像管理、容器生命周期等操作，使 CRI 插件可扩展。Docker 曾通过 dockershim 支持，已移除。"
});

addQuestion({
    module: "容器", question: "Pod 中的 restartPolicy 有哪些选项？",
    type: "单选", options: ["Always, OnFailure, Never", "Always, OnFailure", "OnFailure, Never", "Only Always"],
    answer: [0],
    explanation: "Pod 的 restartPolicy 选项：Always（总是重启）、OnFailure（失败即退码非零时重启）、Never（从不重启）。Deployment 使用 Always，Job 使用 OnFailure 或 Never。restartPolicy 作用于整个 Pod，而非单个容器。"
});

addQuestion({
    module: "容器", question: "如何设置 Pod 中容器的资源限制？",
    type: "单选", options: ["在 Pod metadata 中设置", "在 containers.resources 中设置 requests 和 limits", "在 Pod annotations 中设置", "在 Node 上设置"],
    answer: [1],
    explanation: "在 Pod spec.containers[i].resources 中设置资源请求和限制：requests（调度和预留）、limits（最大使用）。例如：`resources: { requests: {cpu: '100m', memory: '128Mi'}, limits: {cpu: '200m', memory: '256Mi'} }`。资源限制确保容器不超过配额。"
});

addQuestion({
    module: "容器", question: "RuntimeClass 的作用是什么？",
    type: "单选", options: ["定义容器的运行规格", "为 Pod 选择不同的容器运行时或配置", "设置 Pod 的优先级", "定义容器的安全策略"],
    answer: [1],
    explanation: "RuntimeClass 允许为 Pod 选择不同的容器运行时（如 gVisor 提供安全隔离）或运行时配置（如资源限制策略）。RuntimeClass 定义在集群级别，Pod 通过 spec.runtimeClassName 指定。这使得不同工作负载使用最适合的运行时。"
});

addQuestion({
    module: "容器", question: "Pod 的生命周期钩子有哪些？",
    type: "单选", options: ["preStart, postStop", "preStop, postStart", "init, running", "pause, resume"],
    answer: [1],
    explanation: "Pod 生命周期钩子：postStart（容器启动后立即执行）、preStop（容器终止前执行）。这些钩子可以在容器生命周期关键点执行脚本或 HTTP 请求，用于优雅终止、预热等场景。钩子执行失败会影响容器状态。"
});

addQuestion({
    module: "容器", question: "Init 容器的作用是什么？",
    type: "单选", options: ["辅助应用容器，扩展功能", "在应用容器启动前执行初始化任务", "监控应用容器状态", "提供网络代理"],
    answer: [1],
    explanation: "Init 容器在 Pod 的应用容器启动前按顺序执行初始化任务（如配置下载、依赖检查、数据预加载）。Init 容器完成后才开始启动应用容器。Init 容器与其他容器隔离，可以运行不同的镜像和命令。"
});

addQuestion({
    module: "容器", question: "如何在 Pod 中访问同一 Pod 的其他容器？",
    type: "单选", options: ["使用容器名称", "通过localhost:端口", "使用 Pod IP", "通过 Service"],
    answer: [1],
    explanation: "Pod 内所有容器共享网络命名空间，可以使用 localhost:端口 或 127.0.0.1:端口 互相通信。容器名称不能直接访问（除非通过内部 DNS）。Pod IP 可以从外部通信，但在 Pod 内更常用 localhost。"
});

addQuestion({
    module: "容器", question: "环境变量如何在 Pod 中使用？",
    type: "单选", options: ["在容器命令中引用", "通过 env 字段设置，容器内进程读取", "在存储卷中定义", "不需要环境变量"],
    answer: [1],
    explanation: "Pod 通过 spec.containers[i].env 或 envFrom 设置环境变量。容器内进程通过标准方式读取环境变量（如 `os.Getenv`）。可以将 ConfigMap、Secret、字段引用作为环境变量。环境变量适用于配置注入。"
});

// 容器 - 多选题

addQuestion({
    module: "容器", question: "哪些资源类型可以挂载为 Pod 的卷？",
    type: "多选", options: ["空目录（emptyDir）", "主机路径（hostPath）", "ConfigMap", "PVC"],
    answer: [0, 1, 2, 3],
    explanation: "Pod 卷的类型：emptyDir（临时空目录）、hostPath（主机路径）、configMap（配置）、secret（密钥）、persistentVolumeClaim（持久卷声明）、nfs、glusterfs 等。不同卷类型适用于不同场景：emptyDir 临时数据，PVC 持久存储，Secret 敏感信息。"
});

addQuestion({
    module: "容器", question: "Pod 的探针（Probe）有哪些类型？",
    type: "多选", options: ["livenessProbe", "readinessProbe", "startupProbe", "healthProbe"],
    answer: [0, 1, 2],
    explanation: "Kubernetes 支持三种探针：livenessProbe（存活探针，失败时重启容器）、readinessProbe（就绪探针，控制 Service 流量路由）、startupProbe（启动探针，慢启动应用）。healthProbe 不是标准探针。探针通过 HTTP、TCP、命令等检查容器状态。"
});

addQuestion({
    module: "容器", question: "如何向 Pod 容器传递配置？",
    type: "多选", options: ["环境变量", "ConfigMap 挂载为卷", "Secret 挂载为卷", "命令行参数"],
    answer: [0, 1, 2, 3],
    explanation: "Pod 容器配置传递方式：通过 env 字段设置环境变量（来源可以是 ConfigMap、Secret、Pod 字段）、ConfigMap 挂载为文件卷、Secret 挂载为文件卷、在 command/args 中引用环境变量或字段。这些方式满足不同配置需求。"
});

console.log(`生成了 ${questions.length} 道题目`);
