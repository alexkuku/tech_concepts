// Kubernetes 概念测评 - 集群管理 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 50
// 覆盖: 集群管理

const questions = [
    {
        module: "集群管理",
        question: "Kubernetes 集群由哪两个主要组件组成？",
        type: "单选",
        options: [
            "API Server 和 Scheduler",
            "控制平面和工作节点",
            "etcd 和 Docker",
            "kubectl 和 Dashboard"
        ],
        answer: [1],
        explanation: "Kubernetes 集群由控制平面（Control Plane，也称 Master 节点）和工作节点（Worker Nodes）组成。控制平面负责集群决策和状态管理，工作节点运行容器应用。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
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
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "节点自动扩缩容的作用是什么？",
        type: "单选",
        options: [
            "自动扩展 Pod 数量",
            "根据负载自动添加或删除工作节点",
            "自动升级节点",
            "自动管理 Pod 生命周期"
        ],
        answer: [1],
        explanation: "节点自动扩缩容（如 Cluster Autoscaler）根据 Pod 的资源需求自动向集群添加节点或移除空闲节点，确保集群有足够资源运行 Pod。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "资源配额管理的作用是什么？",
        type: "单选",
        options: [
            "限制单个 Pod 的资源使用",
            "限制命名空间的资源使用",
            "限制节点的资源使用",
            "限制集群的资源使用"
        ],
        answer: [1],
        explanation: "资源配额用于限制命名空间内的资源使用，如限制 Pod 数量、CPU 和内存 requests/limits 总量、存储容量等。防止用户或团队占用过多资源。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "集群监控的主要指标有哪些？",
        type: "多选",
        options: [
            "节点资源使用率（CPU、内存）",
            "Pod 和容器状态",
            "自定义应用指标",
            "网络流量"
        ],
        answer: [0, 1, 2, 3],
        explanation: "集群监控主要指标：节点资源使用率（CPU、内存、磁盘、网络）、Pod 和容器状态（运行中、失败、重启次数等）、自定义应用指标（QPS、延迟等）、网络流量。Kubernetes 提供 Metrics Server、Prometheus 等监控方案。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "集群日志的作用是什么？",
        type: "多选",
        options: [
            "记录应用程序日志",
            "记录系统组件日志",
            "用于故障排查和审计",
            "替代日志管理工具"
        ],
        answer: [0, 1, 2],
        explanation: "集群日志记录应用程序日志和系统组件日志，用于故障排查、性能分析和审计。Kubernetes 支持多种日志管理方案，如 fluentd、Filebeat 结合 ELK、Loki 等日志平台，不是替代其他日志管理工具。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "集群升级时的注意事项是什么？",
        type: "多选",
        options: [
            "备份 etcd 数据",
            "逐步升级控制平面组件",
            "逐个升级工作节点",
            "一次性升级所有节点"
        ],
        answer: [0, 1, 2],
        explanation: "集群升级的注意事项：备份 etcd 数据、逐步升级控制平面组件（先升级 etcd，再升级 API Server、Controller Manager、Scheduler）、逐个升级工作节点并驱逐 Pod。不建议一次性升级所有节点，可能导致服务不可用。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "kubelet 如何向控制平面报告节点状态？",
        type: "单选",
        options: [
            "通过 gRPC 协议定期发送心跳",
            "通过 REST API 定期发送心跳",
            "通过 WebSocket 实时通信",
            "通过 UDP 广播节点状态"
        ],
        answer: [0],
        explanation: "kubelet 通过 gRPC 协议定期向控制平面发送心跳，报告节点的健康状态、资源使用情况、Pod 运行状态等信息。默认心跳间隔为 10 秒。如果控制平面在 node-monitor-period 时间（默认 40 秒）内未收到心跳，会将节点标记为 Unknown。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "节点条件 Ready 为 False 的最常见原因是什么？",
        type: "单选",
        options: [
            "节点 CPU 使用率过高",
            "kubelet 未正常运行或无法与控制平面通信",
            "节点上没有运行的 Pod",
            "节点内存使用率超过 80%"
        ],
        answer: [1],
        explanation: "节点条件 Ready 为 False 最常见的原因是 kubelet 未正常运行、kubelet 无法与控制平面通信（如网络问题）、容器运行时问题（如 Docker 守护进程故障）、磁盘压力或 PID 压力等。示例命令：kubectl get nodes -o wide 和 kubectl describe node <node-name>",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "节点驱逐 Pod 的默认阈值是多少？",
        type: "单选",
        options: [
            "节点内存使用率达到 80%",
            "节点内存使用率达到 85%，且持续 10 秒",
            "节点内存不足或磁盘压力触发",
            "节点 CPU 使用率达到 90%"
        ],
        answer: [2],
        explanation: "节点驱逐 Pod 的默认阈值由 kubelet 的 eviction-sig 参数配置。默认值：memory.available < 100Mi，nodefs.available < 10% 或 imagefs.available < 15%，PID 使用率 > 90%。当节点资源不足时，kubelet 会根据 Pod 的 QoS 优先级驱逐 Pod，示例配置：kubelet --eviction-hard=memory.available<500Mi",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "kubeadm 升级集群时，应该先升级什么组件？",
        type: "单选",
        options: [
            "kubelet",
            "kube-proxy",
            "控制平面组件（etcd、API Server 等）",
            "工作节点"
        ],
        answer: [2],
        explanation: "kubeadm 升级集群时应该先升级控制平面组件（etcd、API Server、Controller Manager、Scheduler），再升级 kubelet 和 kube-proxy，最后逐个升级工作节点。升级顺序：kubeadm upgrade plan → kubeadm upgrade apply <version> → kubeadm upgrade node → 升级 kubelet（apt-get upgrade -y kubelet）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "什么是集群的高可用架构？",
        type: "单选",
        options: [
            "所有节点都运行多个控制平面组件",
            "使用多个 Master 节点和负载均衡器确保控制平面不单点故障",
            "每个工作节点都运行备份的 Pod 副本",
            "使用分布式存储保存 etcd 数据"
        ],
        answer: [1],
        explanation: "集群高可用架构包括：3 个或更多 Master 节点（奇数个以避免脑裂）、etcd 使用 Raft 算法实现分布式一致性集群、外部负载均衡器（如 HAProxy、Nginx、云厂商 LB）转发 API Server 请求到多个 Master。控制平面任意一个节点故障，其他节点仍可提供服务。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "etcd 的重要性是什么？",
        type: "单选",
        options: [
            "它是容器运行时",
            "它是 Kubernetes 的分布式键值存储，保存所有集群状态数据",
            "它是集群监控组件",
            "它是集群日志收集组件"
        ],
        answer: [1],
        explanation: "etcd 是 Kubernetes 的分布式键值存储，保存所有集群状态数据：节点信息、Pod/Service/Deployment 等 API 对象状态、配置数据、机密信息。etcd 使用 Raft 共识算法确保数据一致性和高可用。备份 etcd 数据是集群管理的最重要的操作之一。命令：etcdctl snapshot save",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "如何备份 etcd 数据？",
        type: "单选",
        options: [
            "备份 /var/log 目录",
            "使用 etcdctl snapshot save 命令创建快照",
            "备份 /etc/kubernetes 目录",
            "使用 kubectl get 导出所有资源"
        ],
        answer: [1],
        explanation: "备份 etcd 数据使用 etcdctl snapshot save 命令创建快照。示例：ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key snapshot save /backup/etcd-snapshot.db。恢复命令：etcdctl snapshot restore。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "什么是 Kubernetes 证书管理？",
        type: "单选",
        options: [
            "管理 SSL 证书以确保通信安全",
            "管理应用的 TLS 证书",
            "管理用户登录证书",
            "管理数据库证书"
        ],
        answer: [0],
        explanation: "Kubernetes 证书管理负责管理集群各组件间的 TLS 证书：API Server 证书、etcd 证书、kube-apiserver-kubelet 客户端证书、Service Account Token（JWT）、kubeconfig 证书。证书有效期为一年，到期前需要轮换。kubeadm 自动管理证书：kubeadm init phase certs，kubeadm alpha certs renew all。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何查看节点上的 Pod 分布情况？",
        type: "单选",
        options: [
            "kubectl get nodes",
            "kubectl get pods -o wide",
            "kubectl describe nodes",
            "kubectl top nodes"
        ],
        answer: [2],
        explanation: "查看节点上的 Pod 分布使用 kubectl describe nodes 命令，它会显示每个节点的详细信息包括：Non-terminated Pods（运行中、待定、成功的 Pod 列表）、Allocated resources（已分配资源）、Capacity（总资源量）。kubectl get pods -o wide 显示 Pod 所在节点但不统计。示例：kubectl describe nodes node-1 | grep -A 20 'Non-terminated Pods'",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "如何将节点标记为不可调度？",
        type: "单选",
        options: [
            "kubectl delete node",
            "kubectl cordon <node-name>",
            "kubectl drain <node-name>",
            "kubectl taint node"
        ],
        answer: [1],
        explanation: "kubectl cordon <node-name> 将节点标记为不可调度（Unschedulable），新的 Pod 不会被调度到该节点，但现有 Pod 继续运行。kubectl drain <node-name> 除了标记不可调度外，还会驱逐所有 Pod（除了 DaemonSet Pod）。恢复调度：kubectl uncordon <node-name>。示例：kubectl cordon node-1，kubectl uncordon node-1",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "kubectl drain 和 kubectl cordon 的区别是什么？",
        type: "单选",
        options: [
            "没有区别",
            "cordon 驱逐 Pod，drain 只标记不可调度",
            "cordon 只标记不可调度，drain 还会驱逐 Pod",
            "cordon 删除节点，drain 升级节点"
        ],
        answer: [2],
        explanation: "kubectl cordon：只标记节点为 Unschedulable，不会影响现有 Pod。kubectl drain：先标记节点为 Unschedulable，再安全驱逐所有 Pod（驱逐会确保 Pod 在其他节点重建）。drain 用于节点维护（如升级、下线），示例：kubectl drain node-1 --ignore-daemonsets --delete-emptydir-data。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何监控集群中的资源使用情况？",
        type: "单选",
        options: [
            "kubectl get nodes",
            "kubectl top nodes 和 kubectl top pods",
            "kubectl describe pods",
            "kubectl logs"
        ],
        answer: [1],
        explanation: "监控集群资源使用kubectl top nodes（显示节点 CPU/内存使用率）和 kubectl top pods（显示 Pod CPU/内存使用率）。这些命令依赖 Metrics Server。示例：kubectl top nodes，kubectl top pods -A。查看详细信息：kubectl describe node <node-name> 查看资源分配，kubectl describe pod <pod-name> 查看容器资源请求和限制。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "什么是 Metrics Server？",
        type: "单选",
        options: [
            "监控集群的日志系统",
            "Kubernetes 的核心指标收集器，提供 CPU/内存使用率数据",
            "报警系统",
            "分布式跟踪系统"
        ],
        answer: [1],
        explanation: "Metrics Server 是 Kubernetes 的核心指标收集器，通过 kubelet 的 Summary API 收集节点和 Pod 的 CPU/内存使用率数据。Metrics Server 作为 API 的 metrics.k8s.io/v1beta1 资源提供服务，用于 HPA（水平 Pod 自动扩缩容）和 kubectl top 命令。安装：kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "集群日志的采集方式有哪些？",
        type: "单选",
        options: [
            "只能采集容器日志",
            "容器化日志代理节点日志",
            "只能采集系统日志",
            "只能采集应用日志"
        ],
        answer: [1],
        explanation: "Kubernetes 集群日志采集方式：1）容器化日志代理：在 Pod 中运行 Fluentd、Fluent Bit、Filebeat 等日志采集器，采集容器日志和节点日志。2）节点级日志代理：在每个节点运行日志采集器 DaemonSet，采集容器 stdout/stderr 和节点日志文件。3）应用直接发送：应用向日志系统发送日志（如 Loki、ELK）。推荐使用 DaemonSet 方式部署日志代理。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "为什么需要日志保留策略？",
        type: "单选",
        options: [
            "为了节省存储空间和成本",
            "为了满足合规要求和审计需求",
            "为了提高查询性能",
            "以上所有原因"
        ],
        answer: [3],
        explanation: "日志保留策略需要：1）保存存储空间和成本（日志快速增长占用大量存储）；2）满足合规要求（如 GDPR、HIPAA 需要保留日志一定期限）；3）审计需求（安全事件排查、运维审计）；4）提高查询性能（过多日志影响查询速度）。ELK/Logstash/Loki 等日志系统支持索引轮转、删除旧日志。示例：Elasticsearch 的 ILM 索引生命周期管理。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "Prometheus 在 Kubernetes 集群监控中的作用是什么？",
        type: "单选",
        options: [
            "收集和存储指标数据，支持查询和报警",
            "只收集应用指标",
            "只收集系统指标",
            "只用于可视化"
        ],
        answer: [0],
        explanation: "Prometheus 在 Kubernetes 中作为核心监控组件：1）自动发现 Kubernetes 资源（Service、Pod、Node）；2）从 kubelet、cAdvisor、Node Exporter 等收集指标；3）从应用通过 HTTP /metrics 端点抓取自定义指标；4）支持 PromQL 查询语言；5）通过 Alertmanager 实现报警。安装：Operator 模式部署（kube-prometheus-stack）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何进行集群的健康检查？",
        type: "单选",
        options: [
            "只检查节点状态",
            "检查节点状态、控制平面组件、关键 Pod 和资源使用率",
            "只检查 Pod 状态",
            "只检查 etcd 状态"
        ],
        answer: [1],
        explanation: "集群健康检查包括：1）节点状态（kubectl get nodes 检查 Ready）；2）控制平面组件（kubectl get cs 虽已废弃，但可检查 API Server、Controller Manager、Scheduler 是否运行）；3）核心系统 Pod（kube-system 命名空间 的 Pod）；4）资源使用率（kubectl top nodes）；5）etcd 健康状况（etcdctl endpoint health）。综合评估确保集群正常运行。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "什么是 Pod Disruption Budget (PDB)？",
        type: "单选",
        options: [
            "限制 Pod 的资源使用",
            "在维护期间确保最少可用的 Pod 副本数",
            "控制 Pod 的调度",
            "管理 Pod 的生命周期"
        ],
        answer: [1],
        explanation: "Pod Disruption Budget（PDB）定义在自愿中断（如节点维护、应用部署）期间，应用最少需要保持多少可用 Pod 副本。PDB 确保 kubectl drain 或集群自动扩缩容不会导致应用不可用。示例：minAvailable: 2 最少保持 2 个 Pod，maxUnavailable: 1 最多有 1 个 Pod 不可用。适用 Deployment、StatefulSet、ReplicaSet。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "集群联邦（Federation）的用途是什么？",
        type: "单选",
        options: [
            "在多个 Kubernetes 集群间统一管理和部署应用",
            "将多个节点组成一个集群",
            "在多个 Pod 间共享网络",
            "在多个集群间共享存储"
        ],
        answer: [0],
        explanation: "Kubernetes Federation v2（Kubefed）用于管理多个 Kubernetes 集群：1）跨集群部署应用（多地域部署）；2）跨集群服务发现（联邦 Service）；3）跨集群调度和故障转移；4）统一配置和策略管理。示例：FederationDeployment 在多个集群部署同一个应用。注意：Federation v1 已废弃，推荐使用 Karmada（CNCF 项目）或使用多集群管理工具。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "什么是集群的冷启动问题？",
        type: "单选",
        options: [
            "集群启动时 etcd 恢复问题",
            "新节点或新 Pod 需要下载镜像、初始化等，启动延迟高",
            "集群停止或重启问题",
            "节点冷启动资源预留问题"
        ],
        answer: [1],
        explanation: "集群冷启动问题是指：1）当集群扩容新节点时，新节点需要拉取容器镜像、初始化 kubelet、准备运行环境，导致 Pod 启动缓慢；2）当应用缩容到 0 后再扩容时，需要重新拉取镜像。解决方法：节点预安装镜像（使用 DaemonSet 或 kubeadm 预加载）、使用 P2P 镜像分发（如 Dragonfly）、镜像缓存加速。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何保护 Kubernetes API Server？",
        type: "单选",
        options: [
            "只使用 HTTP 访问",
            "使用 TLS 加密、认证和授权机制",
            "禁用 kubectl 访问",
            "不需要保护"
        ],
        answer: [1],
        explanation: "保护 Kubernetes API Server 的方法：1）启用 TLS 加密（HTTPS）；2）认证机制（X509 证书、Token、OpenID Connect、Webhook）；3）授权机制（RBAC、ABAC、Node Authorizer）；4）API Server 审计日志（audit-logging）；5）启用准入控制器。示例：创建 ServiceAccount 并绑定 RBAC 角色、启用 --authorization-mode=RBAC。避免直接暴露 API Server 到公网。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何查看集群的事件历史？",
        type: "单选",
        options: [
            "kubectl get events",
            "kubectl logs",
            "kubectl get pods",
            "kubectl describe"
        ],
        answer: [0],
        explanation: "查看集群事件使用 kubectl get events --sort-by=.metadata.creationTimestamp。事件记录集群中发生的重要信息：Pod 的调度、镜像拉取、容器启动失败、节点状态变化等。kubectl get 显示事件列表，kubectl show event event-name 查看详情，kubectl describe resource 也会显示相关事件。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "集群升级的回滚步骤是什么？",
        type: "单选",
        options: [
            "直接恢复快照",
            "恢复 etcd 快照，重启控制平面，恢复 kubelet",
            "删除所有节点重建",
            "使用 kubectl undo 命令"
        ],
        answer: [1],
        explanation: "集群升级回滚步骤：1）如果升级失败且没有快照，先停止控制平面组件；2）恢复 etcd 快照：etcdctl snapshot restore --data-dir <new-dir> <snapshot>；3）更新 kube-apiserver、kube-controller-manager、kube-scheduler 的 manifest 文件，使用旧的容器镜像版本（通常在 /etc/kubernetes/manifests/）；4）重启控制平面：systemctl restart kubelet；5）逐个恢复工作节点",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "节点休眠是什么？",
        type: "单选",
        options: [
            "节点自动关闭以节省资源",
            "节点上的所有 Pod 进入睡眠状态",
            "节点不再接收新的 Pod 调度且现有 Pod 不会运行",
            "节点降低 CPU 频率"
        ],
        answer: [0],
        explanation: "节点休眠（Node Sleep）指集群自动关闭空闲的节点以节省资源（尤其在云环境中避免计费成本）。当节点空闲且没有 Pod 运行时自动关闭，再次需要资源时自动启动。相关工具：Cluster Autoscaler 支持节点自动缩容，云厂商（如 AWS、GKE）支持实例休眠。最佳实践：配合节点自动扩缩容和 Pod 亲和性策略使用。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "集群证书过期会发生什么？",
        type: "单选",
        options: [
            "证书过期不影响集群运行",
            "API Server 将拒绝连接，导致集群不可用",
            "只有 kubelet 受影响",
            "只有 etcd 受影响"
        ],
        answer: [1],
        explanation: "集群证书过期会导致：1）kubelet 无法与 API Server 通信（节点状态 Unknown）；2）kubectl 等客户端无法连接 API Server；3）API Server 无法与 etcd 通信；4）控制平面停止工作。证书默认有效期为 1 年，提前查看过期时间：kubeadm certs check-expiration。轮换证书：kubeadm alpha certs renew all。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何管理集群的命名空间（Namespace）？",
        type: "多选",
        options: [
            "使用命名空间隔离不同团队或环境",
            "使用 ResourceQuota 限制命名空间资源配额",
            "命名空间之间网络隔离需要 NetworkPolicy",
            "命名空间可以防止所有资源的冲突"
        ],
        answer: [0, 1, 2],
        explanation: "命名空间用于隔离不同团队或环境（如 dev、staging、prod），命名空间资源配额使用 ResourceQuota 限制 Pod 数量、CPU/内存总量，网络隔离需要 NetworkPolicy（命名空间不能保证网络隔离），命名空间不能完全防止资源冲突（如某些资源类型如 PersistentVolume、Node 是集群级别的）。kubeadm 默认创建 kube-system、kube-public 等命名空间。命令：kubectl get ns，kubectl create namespace <name>。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "集群升级前的准备工作有哪些？",
        type: "多选",
        options: [
            "备份 etcd 和重要配置文件",
            "检查集群健康状态和资源使用情况",
            "阅读新版本的变更日志",
            "直接运行 kubeadm upgrade apply 不需要准备"
        ],
        answer: [0, 1, 2],
        explanation: "集群升级前准备：1）备份 etcd 快照；2）备份 /etc/kubernetes 配置文件；3）检查集群健康状况（kubectl get nodes，kubectl get pods -A）；4）检查资源使用情况（kubectl top）；5）阅读新版本变更日志（CHANGELOG.md）；6）测试升级流程（先在测试环境）。kubeadm 升级前可使用 kubeadm upgrade plan 查看升级计划。不要直接升级生产环境。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "Kubernetes 集群监控常用的工具有哪些？",
        type: "多选",
        options: [
            "Prometheus + Grafana",
            "Metricbeat + Kibana",
            "Zabbix",
            "Datadog、New Relic 等云监控服务"
        ],
        answer: [0, 1, 3],
        explanation: "Kubernetes 集群监控常用工具：1）Prometheus + Grafana（CNCF，开源社区流行）；2）Metricbeat + Kibana（ELK Stack）；3）云监控服务（Datadog、New Relic、AWS CloudWatch、Azure Monitor）；4）Kubernetes Dashboard（基础监控）；5）Thanos（多集群 Prometheus）。Zabbix 支持但不推荐用于 Kubernetes（缺少 Kubernetes 集成）。推荐 Prometheus + Grafana 作为默认监控方案。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "Prometheus 监控 Kubernetes 的方式有哪些？",
        type: "多选",
        options: [
            "配置静态手动抓取目标的 targets",
            "使用 ServiceMonitor CRD 自动发现服务",
            "使用 PodMonitor CRD 自动发现 Pod",
            "使用 API Server 的 /metrics 端点"
        ],
        answer: [0, 1, 2],
        explanation: "Prometheus 监控 Kubernetes 方式：1）静态配置（手动配置 targets）；2）ServiceMonitor CRD（Prometheus Operator 定义，通过 Service 选择器自动发现）；3）PodMonitor CRD（通过 Pod 标签自动发现）；4）Kubernetes 服务发现（Prometheus 内置支持：kubernetes_sd_configs）。Prometheus 不直接抓取 API Server /metrics（而是抓取 kube-proxy、kubelet、应用暴露的 /metrics）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "Kubernetes 日志管理平台包括哪些组件？",
        type: "多选",
        options: [
            "日志采集器（Fluentd、Fluent Bit、Filebeat）",
            "日志存储和索引（Elasticsearch、Loki）",
            "日志可视化（Kibana、Grafana）",
            "日志报警（Alertmanager、ElastAlert）"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 日志管理平台：1）采集器（Fluentd、Fluent Bit、Filebeat）：采集容器日志、节点日志；2）存储和索引（Elasticsearch、Loki、ClickHouse）：存储日志并支持查询；3）可视化（Kibana、Grafana）：查看和过滤日志；4）日志报警（ElastAlert、Loki Alertmanager）：日志匹配规则触发报警。Alertmanager 主要用于 Prometheus 报警而不是日志报警。常见方案：EFK（Elasticsearch + Fluentd + Kibana）、ELK（Elasticsearch + Logstash + Kibana）、ELG（Elasticsearch + Loki + Grafana）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何优化集群的日志采集性能？",
        type: "多选",
        options: [
            "使用轻量级日志采集器（Fluent Bit 代替 Fluentd）",
            "只采集必要的日志（过滤日志级别、排除无用的日志）",
            "在应用端直接发送日志到日志系统减少中间层",
            "同时使用多个日志采集器采集相同日志"
        ],
        answer: [0, 1, 2],
        explanation: "优化日志采集性能：1）使用轻量级采集器（Fluent Bit 内存占用约 5MB，Fluentd约 40MB）；2）过滤日志（只收集错误日志、按环境过滤）；3）减少日志字段（避免采集过多元数据）；4）应用端直接发送（绕过采集层，直接发送到日志系统如 Loki）；5）使用批量和压缩（减少网络传输）。不建议同时使用多个采集器重复采集（造成资源浪费和重复索引）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "集群升级过程中如何确保服务可用？",
        type: "多选",
        options: [
            "逐步升级节点，使用 Pod Disruption Budget 确保最少副本",
            "升级前先滚动升级应用 Deployment",
            "启用集群自动扩缩容和负载均衡",
            "一次性升级所有节点"
        ],
        answer: [0, 1, 2],
        explanation: "集群升级确保服务可用：1）逐步升级工作节点（逐个驱逐 Pod，等待其他节点重建）；2）使用 PDB 确保应用最少可用副本；3）升级前先滚动升级应用（确保应用可以容忍节点重启）；4）启用 HPA 和自动扩缩容（自动补充节点）；5）使用滚动升级策略。不建议一次性升级所有节点（会导致服务完全中断）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "集群容量规划需要考虑哪些因素？",
        type: "多选",
        options: [
            "业务增长预测（Pod、服务数量）",
            "资源预留（给系统组件和突发负载预留资源）",
            "高可用需求（多副本、多可用区部署）",
            "不考虑成本，直接使用无限资源"
        ],
        answer: [0, 1, 2],
        explanation: "集群容量规划因素：1）业务预测（未来 6-12 个月的 Pod 数量、服务数量）；2）资源预留（系统组件 kube-system 的 Pod、突发负载预留、节点缓冲）；3）高可用需求（多副本、多可用区、故障恢复）；4）成本管理（使用竞价实例、混合云、自动扩缩容）；5）资源峰值和平均值（应对流量高峰）。不考虑成本会导致资源浪费。工具：kubectl top、Capacity Planner、云厂商成本分析工具。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何提高集群的可用性？",
        type: "多选",
        options: [
            "使用多 Master 节点的高可用架构",
            "使用多个可用区（AWS Multi-AZ、GKE Multi-Zone）部署",
            "使用自动扩缩容和自愈机制",
            "将所有关键应用部署在同一个节点"
        ],
        answer: [0, 1, 2],
        explanation: "提高集群可用性：1）多 Master 节点架构（避免控制平面单点故障）；2）多可用区部署（避免单可用区故障）；3）自动扩缩容（Cluster Autoscaler 补充节点）；4）自愈机制（Node Controller、ReplicaSet 自动重建 Pod）；5）PDB 确保应用最小可用副本。将所有应用部署在同一个节点会导致节点故障时全部应用不可用（违反可用性原则）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何排查集群节点 NotReady 问题？",
        type: "多选",
        options: [
            "检查 kubelet 是否正常运行（systemctl status kubelet）",
            "检查节点资源使用情况和磁盘压力",
            "查看 kubelet 日志和节点事件",
            "直接删除节点重建"
        ],
        answer: [0, 1, 2],
        explanation: "排查节点 NotReady：1）检查 kubelet 运行状态（systemctl status kubelet，journalctl -u kubelet）；2）查看节点条件（kubectl describe node 检查 MemoryPressure、DiskPressure、PIDPressure）；3）查看节点事件（kubectl get events --field-selector involvedObject.kind=Node）；4）检查网络（kubelet 能否连接 API Server）；5）检查证书过期（kubeadm certs check-expiration）。不建议直接删除节点（会丢失配置和数据）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "Kubernetes 集群备份的重要性是什么？",
        type: "多选",
        options: [
            "防止 etcd 数据丢失导致集群状态不可恢复",
            "恢复误删的资源对象",
            "灾难恢复如集群损坏或攻击",
            "备份只需要备份代码不需要备份配置"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 集群备份重要性：1）备份 etcd（集群的所有状态配置包括 Pod、Service、Deployment 等对象）；2）防止误删资源对象（可恢复）；3）灾难恢复（集群损坏、恶意攻击、硬件故障）；4）合规要求（审计保留配置变更历史）；5）测试和演示（从备份恢复测试环境）。备份不只是代码，还包括资源配置和状态。工具：etcdctl snapshot、Velero、Restic。",
        difficulty: "基础"
    },
    {
        module: "集群管理",
        question: "Velero 备份工具的功能有哪些？",
        type: "多选",
        options: [
            "备份和恢复 Kubernetes 资源对象",
            "备份 PV 持久化数据",
            "跨集群迁移资源",
            "备份容器镜像仓库"
        ],
        answer: [0, 1, 2],
        explanation: "Velero（由 Heptio 开发，现为 VMware 开源）功能：1）备份和恢复 Kubernetes 资源（YAML 对象）；2）备份持久卷数据（通过 Restic 集成或 CSI Volume Snapshots）；3）跨集群迁移资源（从开发环境到生产环境）；4）定时备份和保留策略；5）备份到 S3、GCS、Azure Blob 等对象存储。Velero 不备份容器镜像（镜像由镜像仓库管理）。安装：velero install --provider aws --bucket <bucket> --plugins velero/velero-plugin-for-aws",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "集群灾难恢复的步骤是什么？",
        type: "多选",
        options: [
            "评估灾难影响和恢复时间目标（RTO/RPO）",
            "从备份恢复 etcd 和资源对象",
            "恢复持久化数据（PV）",
            "验证恢复后的集群功能"
        ],
        answer: [0, 1, 2, 3],
        explanation: "灾难恢复步骤：1）评估影响（RTO 恢复时间目标、RPO 数据丢失可接受范围）；2）恢复 etcd（etcdctl snapshot restore）；3）恢复 Kubernetes 资源（kubectl apply 备份yaml、Velero restore）；4）恢复 PersistVolume 数据（Restic、CSI 快照、对象存储）；5）验证集群健康（kubectl get nodes、kubectl get pods -A）；6）回滚服务流量（逐步切换）。必要时重新安装集群（如果集群完全损坏）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何监控集群的证书过期情况？",
        type: "多选",
        options: [
            "使用 kubeadm certs check-expiration 检查",
            "使用 Prometheus 和 cert-manager 报警",
            "设置定时任务定期检查",
            "不需要监控，证书自动续期"
        ],
        answer: [0, 1, 2],
        explanation: "监控集群证书过期：1）kubeadm certs check-expiration（显示证书过期时间）；2）Prometheus + cert-manager（cert-manager 监控指标，Prometheus 报警）；3）定时任务（CronJob 使用 openssl x509 检查证书过期时间）；4）日志监控（kubelet 日志显示证书错误）。证书不会自动续期（kubeadm alpha certs renew all 需手动运行）。cert-manager 可以自动颁发和续期证书（使用 Let's Encrypt）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "集群自动扩缩容（Cluster Autoscaler）的工作原理是什么？",
        type: "多选",
        options: [
            "监控是否有 Pod 因为资源不足无法调度（Pending）",
            "当有节点空闲时缩容节点",
            "与云厂商 API 交互动态创建/删除节点",
            "直接在现有节点上创建新的容器"
        ],
        answer: [0, 1, 2],
        explanation: "Cluster Autoscaler 工作原理：1）监控 Pending Pod（因资源不足无法调度的 Pod）；2）当有足够 Pending Pod 时，计算需要增加的节点数量；3）调用云厂商 API（如 AWS Auto Scaling Group、GKE MIG）创建新节点；4）当节点空闲超过配置时间（默认 10 分钟），驱逐节点上的 Pod 后删除节点；5）不直接在现有节点创建容器（由 kube-proxy 调度）。需要配置 Node Groups 和适当的最小/最大节点数。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何配置 Pod 优先级（PriorityClass）确保关键 Pod 优先运行？",
        type: "多选",
        options: [
            "创建 PriorityClass 并设置 priority 值",
            "给关键 Pod 添加 priorityClassName 指向高优先级类",
            "使用 PreemptionPolicy 控制抢占策略",
            "低优先级 Pod 无需配置"
        ],
        answer: [0, 1, 2],
        explanation: "配置 Pod 优先级：1）创建 PriorityClass（kubectl apply -f priorityclass.yaml）设置 priority 值（值越大优先级越高）；2）在 Pod spec 添加 priorityClassName: system-cluster-critical（内置高优先级）；3）PreemptionPolicy：PreemptLowerPriority（默认，允许抢占），Never（不允许抢占）；4）低优先级 Pod 也建议配置防止意外抢占。Priority 和 Preemption 确保关键 Pod（如 kube-system）优先运行。示例：PriorityClass value -1000000000（非抢占式系统关键类）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何优化 Kubernetes 集群的资源利用率？",
        type: "多选",
        options: [
            "为容器设置合理的 requests 和 limits",
            "使用自动扩缩容（HPA、VPA、Cluster Autoscaler）",
            "使用共享的 GPU、FPGA 等加速设备",
            "限制节点上 Pod 的数量以降低资源利用率"
        ],
        answer: [0, 1, 2],
        explanation: "优化资源利用率：1）设置合理的 requests 和 limits（requests 影响调度，limits 限制资源上限）；2）HPA 水平自动扩缩容（根据 CPU/内存/自定义指标调整 Pod 副本）；3）VPA 垂直自动扩缩容（自动调整 Pod 的资源请求）；4）Cluster Autoscaler 扩缩工作节点；5）使用 Binpacking 调度策略（优先填满节点）；6）共享加速设备（Device Plugins）。限制 Pod 数量会降低资源利用率（应优先优化 Pod 资源配置）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "Kubernetes 集群的多租户隔离机制有哪些？",
        type: "多选",
        options: [
            "命名空间（Namespace）隔离资源",
            "RBAC 授权限制访问权限",
            "NetworkPolicy 网络隔离",
            "ResourceQuota 和 LimitRange 限制资源使用"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 多租户隔离：1）命名空间（Namespace）隔离资源范围（逻辑隔离）；2）RBAC 限制不同用户的权限（用户和服务账号授权）；3）NetworkPolicy 网络隔离（控制 Pod 间通信）；4）ResourceQuota 资源配额（限制命名空间资源使用总量）；5）LimitRange（限制单个 Pod/容器最小/最大请求和限制）。注意：命名空间只做逻辑隔离，默认无法防止跨命名空间网络通信（需要 NetworkPolicy）。更高级隔离使用 Virtual Kubelet、KubeVirt 等工具。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "节点故障时 Kubernetes 如何自动恢复？",
        type: "多选",
        options: [
            "节点控制器在 node-monitor-grace-period 后标记节点 NotReady",
            "ReplicaSet 控制器自动重建故障节点上的 Pod",
            "Pod Disruption Budget 确保最少可用副本",
            "自动重启节点操作系统"
        ],
        answer: [0, 1, 2],
        explanation: "节点故障自动恢复：1）节点控制器（Node Controller）在 node-monitor-grace-period（默认 40 秒）后标记节点 NotReady，在 node-eviction-timeout（默认 5 分钟）后驱逐节点上的 Pod；2）ReplicaSet、Deployment 等控制器自动在其他节点创建新 Pod；3）Pod Disruption Budget 确保最少可用副本（防止过多 Pod 同时驱逐）；4）Cluster Autoscaler 自动补充缺失的节点。Kubernetes 不自动重启节点操作系统（需要云厂商或运维工具）。",
        difficulty: "进阶"
    },
    {
        module: "集群管理",
        question: "如何使用 kubectl 快速查看集群的问题？",
        type: "多选",
        options: [
            "kubectl get nodes -o wide 查看节点状态",
            "kubectl get pods -A 查看所有命名空间的 Pod",
            "kubectl get events --sort-by='.lastTimestamp' 查看事件",
            "直接重启集群不考虑原因"
        ],
        answer: [0, 1, 2],
        explanation: "快速集群问题排查：1）kubectl get nodes -o wide（查看节点状态 Ready、版本、IP）；2）kubectl get pods -A（查看所有 Pod 状态，关注 NotReady、CrashLoopBackOff、Pending）；3）kubectl get events --sort-by='.lastTimestamp'（按时间排序查看事件）；4）kubectl top nodes / kubectl top pods（资源使用率）；5）kubectl describe（查看详细信息和事件）。不建议直接重启集群（会导致服务中断且无法定位根本原因）。",
        difficulty: "基础"
    }
];

const modules = ["集群管理"];
