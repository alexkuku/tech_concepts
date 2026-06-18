// Kubernetes 概念测评 - 调度 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 50
// 覆盖: 调度

const questions = [
    {
        module: "调度",
        question: "Kubernetes 调度器的作用是什么？",
        type: "单选",
        options: [
            "管理容器运行时",
            "监控新创建且未分配节点的 Pod，为其选择最合适的运行节点",
            "存储集群配置",
            "管理网络策略"
        ],
        answer: [1],
        explanation: "Kubernetes 调度器监控新创建且未分配节点的 Pod，根据资源需求、策略约束、亲和性等规则为 Pod 选择最合适的运行节点，并将其绑定到该节点。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "调度器如何选择节点？",
        type: "多选",
        options: [
            "根据资源需求和节点可用资源",
            "考虑亲和性和反亲和性",
            "考虑污点和容忍度",
            "随机选择"
        ],
        answer: [0, 1, 2],
        explanation: "调度器根据多个因素选择节点：资源需求（CPU、内存等）和节点可用资源、亲和性和反亲和性（节点和 Pod）、污点和容忍度、优先级与抢占等。不是随机选择。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "节点亲和性有哪两种类型？",
        type: "多选",
        options: [
            "requiredDuringSchedulingIgnoredDuringExecution（硬性要求）",
            "preferredDuringSchedulingIgnoredDuringExecution（软性偏好）",
            "requiredDuringSchedulingRequiredDuringExecution",
            "optionalDuringSchedulingIgnoredDuringExecution"
        ],
        answer: [0, 1],
        explanation: "节点亲和性有两种类型：requiredDuringSchedulingIgnoredDuringExecution（硬性要求，必须满足才能调度）和 preferredDuringSchedulingIgnoredDuringExecution（软性偏好，尝试满足，可选）。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "污点和容忍度的作用是什么？",
        type: "单选",
        options: [
            "实现负载均衡",
            "限制或允许 Pod 调度到特定节点",
            "管理存储资源",
            "监控容器健康"
        ],
        answer: [1],
        explanation: "污点和容忍度用于控制 Pod 的调度：污点应用于节点，让 Pod 无法调度到该节点（除非 Pod 有对应的容忍度）；容忍度设置在 Pod 上，允许 Pod 调度到带有匹配污点的节点。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "常见的污点效果有哪些？",
        type: "多选",
        options: [
            "NoSchedule（除非有容忍度，否则不调度）",
            "PreferNoSchedule（尽量避免调度）",
            "NoExecute（调度后驱逐没有容忍度的 Pod）",
            "NoBlock"
        ],
        answer: [0, 1, 2],
        explanation: "污点效果：NoSchedule（除非 Pod 有对应的容忍度，否则不调度到此节点）、PreferNoSchedule（尽量避免调度，如果其他节点资源充足）、NoExecute（不仅影响新 Pod 调度，还会驱逐运行在此节点的没有容忍度的 Pod）。没有 NoBlock 效果。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "Pod 优先级和抢占的作用是什么？",
        type: "单选",
        options: [
            "延长 Pod 的运行时间",
            "确保关键 Pod 在资源不足时有更高的调度优先级",
            "限制 Pod 的资源使用",
            "实现 Pod 间的负载均衡"
        ],
        answer: [1],
        explanation: "Pod 优先级表示 Pod 相对于其他 Pod 的重要性。当集群资源不足时，高优先级的 Pod 可以抢占（终止）低优先级的 Pod，确保关键应用能够调度和运行。优先级通过 PriorityClass 定义。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "如何创建 PriorityClass（优先级类）？",
        type: "多选",
        options: [
            "定义 GlobalDefault 和 value 字段",
            "设置 PreemptionPolicy（默认 PreemptLowerPriority）",
            "通过 kubectl create priorityclass 创建",
            "只能手动编辑 YAML 创建"
        ],
        answer: [0, 1, 2],
        explanation: "创建 PriorityClass：定义 value（数字，值越大优先级越高）、可选设置 GlobalDefault 为 true（使未指定优先级的 Pod 使用此类）、可选设置 PreemptionPolicy（PreemptLowerPriority 或 Never）。可通过 YAML 或 kubectl create priorityclass 创建。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "PodDisruptionBudget (PDB) 的作用是什么？",
        type: "单选",
        options: [
            "限制 Pod 的网络访问",
            "确保在自愿中断期间有最小数量的 Pod 可用",
            "管理 Pod 的存储资源",
            "控制 Pod 的重启策略"
        ],
        answer: [1],
        explanation: "PodDisruptionBudget 确保在自愿中断期间（如节点维护、集群升级），有最小数量的 Pod 保持运行。这对于保证服务可用性非常重要，特别是在需要多个副本的场景下。PDB 不适用于非自愿中断（节点故障、OOMKilled 等）。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "PDB 可以配置哪些策略？",
        type: "多选",
        options: [
            "minAvailable（最小可用副本数）",
            "maxUnavailable（最大不可用副本数）",
            "healthyPercentage（健康百分比）",
            "replicaCount（副本总数）"
        ],
        answer: [0, 1],
        explanation: "PDB 支持两种策略：minAvailable 指定中断期间必须保持的最小可用 Pod 数量（可以是绝对数字或百分比），maxUnavailable 指定允许同时不可用的最大 Pod 数量（同样支持数字或百分比）。不可同时使用两个策略。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "以下哪些是 Kubernetes 调度器的工作阶段？",
        type: "多选",
        options: [
            "过滤阶段（Filter）",
            "打分阶段（Score）",
            "分配阶段（Assume）",
            "验证阶段（Validate）"
        ],
        answer: [0, 1, 2],
        explanation: "调度器主要工作阶段：1）过滤阶段（Filter）：应用预选策略，筛选出满足所有条件的节点；2）打分阶段（Score）：对过滤后的节点进行评分，选择最优节点；3）分配阶段（Assume）：将 Pod 绑定到选定节点。Validate 在各阶段都有应用。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "节点选择器（nodeSelector）的工作机制是什么？",
        type: "单选",
        options: [
            "完全禁止 Pod 调度到特定节点",
            "通过键值对强制 Pod 调度到匹配标签的节点",
            "自动选择负载最低的节点",
            "基于 Pod 运行时间进行选择"
        ],
        answer: [1],
        explanation: "nodeSelector 是最简单的节点调度约束，通过指定节点的标签键值对，强制调度器将 Pod 调度到拥有匹配标签的节点。它是节点亲和性的简化版本，不支持复杂的逻辑操作。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "nodeSelector 和节点亲和性的主要区别是什么？",
        type: "多选",
        options: [
            "nodeSelector 是简单匹配，亲和性支持复杂表达式",
            "亲和性区分硬性要求和软性偏好",
            "亲和性支持 matchExpressions 操作符",
            "nodeSelector 性能更好"
        ],
        answer: [0, 1, 2],
        explanation: "区别：1）nodeSelector 只支持简单等值匹配，亲和性支持复杂表达式（In, NotIn, Exists, NotExists 等）；2）亲和性区分硬性要求（required）和软性偏好（preferred）；3）亲和性更灵活，可以编写复杂的匹配规则。两者的调度性能差异可忽略。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "Pod 间亲和性（Pod Affinity）的调度规则有哪些类型？",
        type: "多选",
        options: [
            "podAffinity（同一节点或拓扑域内调度）",
            "podAntiAffinity（避开同一节点或拓扑域）",
            "nodeAffinity（节点标签亲和性）",
            "serviceAffinity（服务亲和性）"
        ],
        answer: [0, 1],
        explanation: "Pod 间亲和性有两种类型：podAffinity（将 Pod 调度到与特定 Pod 在同一节点或拓扑域），podAntiAffinity（将 Pod 调度到远离特定 Pod 的节点或拓扑域）。nodeAffinity 是节点亲和性，serviceAffinity 不是原生概念。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "Pod 间拓扑域（topologyKey）的作用是什么？",
        type: "单选",
        options: [
            "指定 Pod 可以运行的 CPU 核心数",
            "定义节点标签作为拓扑域的划分依据",
            "限制 Pod 的网络带宽",
            "设置 Pod 的存储路径"
        ],
        answer: [1],
        explanation: "topologyKey 指定节点标签作为拓扑域的划分依据，如 'kubernetes.io/hostname'（每个节点是一个域）、'topology.kubernetes.io/zone'（每个可用区是一个域）。调度器根据拓扑域的标签，确保 Pod 在满足要求的节点集合内调度。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "以下哪些场景适合使用 Pod 间反亲和性（Pod Anti-Affinity）？",
        type: "多选",
        options: [
            "服务需要在多个节点冗余部署",
            "Pod 耗尽大量 CPU，需要分散到不同节点",
            "避免单点故障",
            "需要 Pod 紧密协作，低延迟通信"
        ],
        answer: [0, 1, 2],
        explanation: "Pod Anti-Affinity 应用场景：1）服务冗余：确保多个副本分散在不同节点，提高可用性；2）资源分离：高资源消耗的 Pod 分散到不同节点；3）单点故障避免：避免关键 Pod 的多个副本在同一节点。紧密协作场景应使用亲和性。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "污点效果 NoExecute 与 NoSchedule 的主要区别是什么？",
        type: "单选",
        options: [
            "NoExecute 强制驱逐所有 Pod",
            "NoExecute 会驱逐运行中且没有容忍度的 Pod",
            "NoSchedule 只影响优先级较低的 Pod",
            "没有区别，可以互换使用"
        ],
        answer: [1],
        explanation: "NoExecute 与 NoSchedule 的区别：NoSchedule 只影响新 Pod 的调度，不驱逐已运行的 Pod；NoExecute 不仅阻止新 Pod 调度，还会驱逐运行在此节点上且没有对应容忍度的 Pod。NoExecute 常用于节点故障或维护场景。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "Kubernetes 内置哪些节点调度约束策略？",
        type: "多选",
        options: [
            "NodeName",
            "NodeSelector",
            "NodeAffinity",
            "PodAffinity/PodAntiAffinity"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 支持多种节点调度约束：1）nodeName（直接指定节点名称）；2）nodeSelector（通过标签选择节点）；3）NodeAffinity（节点亲和性）；4）PodAffinity/PodAntiAffinity（Pod 间亲和性和反亲和性）。这些约束从简单到复杂，逐步提供更强大的调度能力。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "默认情况下，kubelet 会给节点添加哪些污点？",
        type: "多选",
        options: [
            "node.kubernetes.io/not-ready（节点未就绪）",
            "node.kubernetes.io/unreachable（节点不可达）",
            "node.kubernetes.io/memory-pressure（内存压力大）",
            "node.kubernetes.io/pid-pressure（进程数压力大）"
        ],
        answer: [0, 1],
        explanation: "默认情况下，kubelet 会添加污点：node.kubernetes.io/not-ready（节点 NotReady 状态，NoExecute 效果，容忍度 300 秒）、node.kubernetes.io/unreachable（节点控制器不可达，NoExecute 效果，容忍度 300 秒）。内存压力和 PID 压力污点需要手动启用或通过控制器添加。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "优先级和抢占的 PreemptionPolicy 有哪些选项？",
        type: "单选",
        options: [
            "Always 和 Sometimes",
            "PreemptLowerPriority 和 Never",
            "Enforce 和 Allow",
            "Enable 和 Disable"
        ],
        answer: [1],
        explanation: "PriorityClass 中的 PreemptionPolicy 有两个选项：PreemptLowerPriority（默认，允许抢占低优先级 Pod）、Never（禁止抢占，允许优先级影响排序但不触发抢占）。PreemptLowerPriority 确保高优先级任务在资源不足时能获得资源。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "以下哪些是自定义调度器的使用场景？",
        type: "多选",
        options: [
            "特殊硬件资源调度（如 GPU、FPGA）",
            "跨可用区成本优化",
            "特定应用的网络延迟要求",
            "负载均衡算法不适合的复杂场景"
        ],
        answer: [0, 1, 2, 3],
        explanation: "自定义调度器适用于：1）特殊硬件调度（如 GPU、FPGA、RDMA 等专用设备）；2）跨可用区成本优化（基于云计算实例价格）；3）网络延迟敏感应用（考虑拓扑和路由）；4）无法通过简单算法实现的复杂调度逻辑。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "如何为 Pod 指定自定义调度器？",
        type: "单选",
        options: [
            "使用 schedulerName 字段",
            "设置 annotations 的 scheduler-key",
            "通过 priorityClass 定义",
            "修改 Deployment 的 replicas"
        ],
        answer: [0],
        explanation: "为 Pod 指定自定义调度器：在 Pod 规范中设置 spec.schedulerName 字段，值为调度器的名称。如果不指定，使用默认的 default-scheduler。多个自定义调度器可以并行运行，每个 Pod 选择一个调度器。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "调度器在调度决策时会检查哪些资源类型？",
        type: "多选",
        options: [
            "CPU 和内存",
            "临时存储（Ephemeral Storage）",
            "可扩展资源（如 GPU）",
            "持久卷（PV）"
        ],
        answer: [0, 1, 2],
        explanation: "调度器检查的资源类型：1）请求（request）和限制（limit）的 CPU；2）内存（Memory）；3）临时存储（Ephemeral Storage）；4）可扩展资源，如 nvidia.com/gpu、amd.com/gpu 等设备插件提供的资源。PV 存储（PV）不直接由调度器检查，它通过 PVC 绑定到节点上的存储类。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "什么是'优雅降级'（Graceful Degradation）在调度中的体现？",
        type: "单选",
        options: [
            "直接删除所有低优先级 Pod",
            "根据 Pod 优先级逐步抢占，尽量减少影响",
            "忽略优先级，随机选择 Pod",
            "系统崩溃时自动停止调度"
        ],
        answer: [1],
        explanation: "优雅降级在调度中指：根据 Pod 优先级逐步抢占资源，调度器先尝试调度到有空闲资源的地方，如果必须抢占，优先选择低优先级且已运行较长时间的 Pod，尽量减少对应用的影响。避免突然大规模驱逐.",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "调度器支持的多调度器（Multiple Schedulers）模式下，Pod 会出现什么情况？",
        type: "多选",
        options: [
            "每个 Pod 只能被一个调度器调度",
            "未经调度的 Pod 可能不被任何调度器关注",
            "多个调度器可能竞争同一个 Pod",
            "调度失败不会自动重试"
        ],
        answer: [0, 1],
        explanation: "多调度器模式：1）每个 Pod 的 spec.schedulerName 决定它由哪个调度器处理；2）如果调度器名称无效或指定调度器未运行，Pod 会保持 Pending；3）不同调度器不会竞争同一个 Pod（由 schedulerName 解耦）；4）调度失败通常会重试。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "VolumeBindingWaitForFirstConsumer 策略的作用是什么？",
        type: "单选",
        options: [
            "立即绑定 PVC 到 PV",
            "等待 Pod 调度到节点后才绑定存储",
            "限制 Pod 的存储大小",
            "强制使用本地存储"
        ],
        answer: [1],
        explanation: "VolumeBindingWaitForFirstConsumer 是 StorageClass 的绑定策略，让调度器先选择节点，然后在该节点上动态配置 PV。这确保了 PV 的拓扑位置与 Pod 的位置匹配，避免了跨区域挂载问题。默认策略是 VolumeBinding Immediate。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "PodDNSPolicy 如何影响调度？",
        type: "多选",
        options: [
            "ClusterFirst（默认，使用集群 DNS）",
            "Default（使用节点 DNS）",
            "ClusterFirstWithHostNet（主机网络 + 集群 DNS）",
            "None（手动配置 DNS）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "PodDNSPolicy 影响 Pod 的 DNS 配置：ClusterFirst（使用集群 DNS，忽略节点的 resolv.conf）；Default（继承节点的 DNS 设置）；ClusterFirstWithHostNet（使用 hostNetwork 时也使用集群 DNS）；None（通过 Pod 的 dnsConfig 手动配置）。不影响节点调度，但影响网络行为。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "当节点出现'DiskPressure'（磁盘压力）污点时，会发生什么？",
        type: "单选",
        options: [
            "所有 Pod 立即被驱逐",
            "不调度新 Pod，已运行 Pod 保留",
            "只有高优先级 Pod 能调度",
            "节点自动重启"
        ],
        answer: [1],
        explanation: "节点出现 DiskPressure 污点时效果为 NoSchedule：阻止新 Pod 调度到该节点，但已运行的 Pod 不受影响（除非 Pod 被 NoExecute 效果的污点驱逐，如 NotReady）。这为节点释放磁盘空间提供了缓冲时间。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "亲和性的 matchExpressions 支持哪些操作符？",
        type: "多选",
        options: [
            "In 和 NotIn",
            "Exists 和 DoesNotExist",
            "Gt 和 Lt",
            "Contains 和 Prefix"
        ],
        answer: [0, 1, 2],
        explanation: "matchExpressions 支持的操作符：In（等于列表中的任一值）、NotIn（不等于列表中的任何值）、Exists（标签存在）、DoesNotExist（标签不存在）、Gt（大于）、Lt（小于）。Gt 和 Lt 只适用于数字类型的标签值。没有 Contains 和 Prefix 操作符。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "调度器如何处理 Pod 的 requests 和 limits 资源声明？",
        type: "多选",
        options: [
            "requests 用于节点资源过滤判断",
            "limits 用于过载保护（OOM）",
            "未设置 requests 时默认等于 limits",
            "limits 影响调度决策"
        ],
        answer: [0, 1, 2],
        explanation: "requests 和 limits 的处理：requests 用于调度器判断节点是否有足够资源；limits 用于运行时资源限制（如 OOMKilled）；未设置 requests 时默认等于 limits（反之不是）。limits 不直接影响调度决策，但可能影响 QoS 等级从而影响驱逐优先级。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "什么是'调度失败'（Schedule Failed）的常见原因？",
        type: "多选",
        options: [
            "没有可用节点满足资源需求",
            "节点亲和性/污点约束无法满足",
            "PVC 无法绑定到 PV",
            "Pod 指定的节点名称不存在"
        ],
        answer: [0, 1, 2, 3],
        explanation: "调度失败常见原因：1）所有节点资源不足（CPU/内存/存储等）；2）约束无法满足（亲和性、污点、nodeSelector）；3）PVC 挂起；4）指定的 nodeName 不存在或 NotReady；5）自定义调度器未运行；6）节点选择器错误。可通过 kubectl describe pod 查看。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "调度器的'默认过滤策略'包括哪些？",
        type: "多选",
        options: [
            "NodeResourcesFit（资源检查）",
            "TaintToleration（污点容忍）",
            "NodeUnschedulable（节点调度禁用）",
            "PodDisruptionBudgetCheck"
        ],
        answer: [0, 1, 2],
        explanation: "调度器默认过滤策略：NodeResourcesFit（检查 CPU、内存等资源是否满足）、TaintToleration（检查污点容忍）、NodeUnschedulable（检查节点是否标记为不可调度）、NodeAffinity、NodePort、VolumeBinding 等。PodDisruptionBudget 在驱逐时检查，非调度时。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "在多可用区集群中，确保 Pod 分散到不同区域的最佳实践是什么？",
        type: "单选",
        options: [
            "仅使用 nodeSelector 选择单个区域",
            "使用 Pod Anti-Affinity 配合 topologyKey：topology.kubernetes.io/zone",
            "手动为每个区域创建 Deployment",
            "设置污点阻止 Pod 跨区域"
        ],
        answer: [1],
        explanation: "最佳实践：使用 Pod Anti-Affinity 配合 topologyKey: topology.kubernetes.io/zone，确保同一应用的副本分散到不同可用区，避免单区域故障影响。也可以结合 topologySpreadConstraints 控制更精细的分布策略。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "topologySpreadConstraints 的作用是什么？",
        type: "多选",
        options: [
            "控制 Pod 在拓扑域中的分布均匀度",
            "支持 maxSkew（最大偏差）和 minDomains（最小域数）约束",
            "适用于 Pod 间亲和性增强版",
            "只能用于 Service"
        ],
        answer: [0, 1, 2],
        explanation: "topologySpreadConstraints 可指定 Pod 在拓扑域（如节点、区域）中的分布策略：maxSkew 定义允许的最大分布偏差（不均匀度），minDomains 定义最小可用域数，whenUnsatisfiable 指定不满足时的行为。是 Pod Anti-Affinity 的更灵活替代方案，适用于任何 Pod。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "PriorityClass 的 globalDefault 为 true 意味着什么？",
        type: "单选",
        options: [
            "所有 Pod 强制使用此优先级",
            "未指定 priorityClassName 的 Pod 默认使用此优先级",
            "此优先级最高，始终优先",
            "此优先级只能用于系统 Pod"
        ],
        answer: [1],
        explanation: "globalDefault: true 表示此 PriorityClass 为全局默认类，未在 Pod 中显式指定 priorityClassName 的 Pod 将自动使用此类。一个集群只能有一个 PriorityClass 的 globalDefault 为 true。设置了 priorityClassName 的 Pod 不会受此默认值影响。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "调度器如何处理 DaemonSet 的 Pod？",
        type: "多选",
        options: [
            "DaemonSet Pod 调度到所有符合条件的节点",
            "DaemonSet 的 Pod 可以通过污点排除特定节点",
            "DaemonSet 忽略节点资源限制",
            "DaemonSet Pod 不受 PodAnti-Affinity 影响"
        ],
        answer: [0, 1],
        explanation: "DaemonSet Pod 调度行为：1）DaemonSet Controller 创建 Pod，调度器确保 Pod 调度到所有匹配节点选择器且未调度污点的节点；2）可以使用污点排除节点（NoSchedule/NoExecute 没有对应容忍度的节点）；3）受资源限制约束，否则无法调度；4）受 PodAffinity/Anti-Affinity 影响。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "当集群扩展新节点后，Pod 会自动调度到新节点吗？",
        type: "单选",
        options: [
            "会，调度器立即重新调度所有 Pod",
            "不会，只有新建的 Pod 和未调度的 Pod 会考虑新节点",
            "只有 DaemonSet Pod 会自动调度",
            "不会，需要手动重启所有 Pod"
        ],
        answer: [1],
        explanation: "调度器不会主动重新调度已运行的 Pod。新节点加入后：1）新建的、未调度的和被驱逐的 Pod 会考虑新节点；2）DaemonSet Pod 会自动调度到符合条件的节点；3）已有 Pod 不会自动调度到新节点。如需重新均衡，可使用驱逐工具或手动删除重建。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "PDB 的 minAvailable 设置为 '50%' 意味着什么？",
        type: "多选",
        options: [
            "中断期间至少保持一半的 Pod 运行",
            "每次最多可以中断一半的 Pod",
            "必须要有至少 50 个 Pod 才能生效",
            "PDB 会阻止任何中断操作"
        ],
        answer: [0, 1],
        explanation: "minAvailable: '50%' 表示在自愿中断期间，至少保持 50% 的 Pod 处于运行状态。例如，有 10 个副本，maxUnavailable 为 5（或 50%）。如果只有一个副本，50% 向上取整为 1。百分比计算基于 Deployment 的期望副本数，PDB 不阻止中断，只是限制并发中断量。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "kube-scheduler 的扩展方式有哪些？",
        type: "多选",
        options: [
            "调度框架（Scheduling Framework）插件",
            "自定义调度器（Custom Scheduler）",
            "修改调度器配置文件覆盖策略",
            "通过 CRD 定义调度规则"
        ],
        answer: [0, 1, 2],
        explanation: "支持扩展方式：1）调度框架插件：扩展点包括 Filter、Score、Bind、PreBind 等；2）自定义调度器：实现独立调度逻辑，通过 schedulerName 选择；3）配置文件：修改 KubeSchedulerConfiguration 的策略插件配置。CRD 主要用于定义资源，调度规则通过调度器配置定义。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "nodeName 字段适用于什么场景？",
        type: "单选",
        options: [
            "需要精确控制调度但接受单点故障",
            "要求高可用性的生产服务",
            "需要动态负载均衡",
            "跨区域自动分布"
        ],
        answer: [0],
        explanation: "nodeName 直接指定节点，绕过调度器。适用场景：1）专用节点的特殊应用（如 GPU 节点上的机器学习）；2）调试或测试；3）已知节点且能接受单点风险。不适用于需要高可用、负载均衡或动态场景，因为节点不可用时 Pod 会失败。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "在调度过程中，'可扩展资源'（如 GPU）的特殊之处是什么？",
        type: "多选",
        options: [
            "必须在节点上通过设备插件暴露",
            "调度器检查节点的可扩展资源容量",
            "容器声明时必须指定 limits"
        ],
        answer: [0, 1, 2],
        explanation: "可扩展资源（如 NVIDIA GPU）特殊处理：1）节点通过设备插件（Device Plugin）暴露资源；2）调度器在过滤阶段检查节点的可用可扩展资源；3）必须设置 limits（requests 默认等于 limits）；4）资源通常是整数类型（如 1 个 GPU）。不支持 fractions（如 0.5 GPU）。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "调度器的'缓存调度'（Scheduler Cache）有什么作用？",
        type: "单选",
        options: [
            "直接在内存中缓存节点信息，减少 API Server 访问",
            "存储所有历史调度决策",
            "永久保存 Pod 的调度状态",
            "预加载所有 Pod 的镜像"
        ],
        answer: [0],
        explanation: "Scheduler Cache 在调度器本地缓存节点信息（资源、标签、污点等）、Pod 信息和集群状态。这显著减少了与 API Server 的交互，提高调度性能。缓存会定期与 API Server 同步，过期的信息会在调度前被刷新。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "容忍度（Toleration）的 operator 支持哪些类型？",
        type: "多选",
        options: [
            "Equal（污点键、值、效果完全匹配）",
            "Exists（仅污点键匹配，不检查值）",
            "NotEqual（值不匹配）",
            "Regex（正则表达式匹配）"
        ],
        answer: [0, 1],
        explanation: "容忍度的 operator 类型：Equal（默认，键、值、效果都匹配）、Exists（只要键存在即可，值字段会被忽略，常用于非固定值污点）。没有 NotEqual 或 Regex 操作符。操作符配合 effect 字段（NoSchedule、PreferNoSchedule、NoExecute、空表示所有效果）使用。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "如何让 Pod 驱逐后自动重新调度到其他节点？",
        type: "多选",
        options: [
            "设置 Pod 的 RestartPolicy 为 Always 或 OnFailure",
            "确保控制器（Deployment/StatefulSet）管理 Pod",
            "使用 nodeName 锁定特定节点",
            "设置 Pod 的 terminationGracePeriodSeconds"
        ],
        answer: [0, 1],
        explanation: "Pod 自动重新调度机制：1）由控制器（Deployment、StatefulSet、DaemonSet 等）管理，确保期望副本数；2）设置合理的 RestartPolicy（Always 或 OnFailure）；3）使用 nodeName 会限制调度，不适合自动重新调度；4）terminationGracePeriodSeconds 控制优雅终止时间，不影响调度。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "Pod 调度到节点后立即失败（如镜像拉取错误），调度器会做什么？",
        type: "单选",
        options: [
            "自动将其重新调度到其他节点",
            "不干预，由控制器决定是否重建",
            "立即标记节点为不可调度",
            "删除整个节点的所有 Pod"
        ],
        answer: [1],
        explanation: "调度器在 Pod 绑定到节点后完成工作。如果 Pod 启动失败（如镜像问题），由控制器（如 Deployment）负责重建 Pod。调度器不会自动将失败 Pod 调度到其他节点，除非 Pod 被 Controller 重新创建且保持 Pending 状态。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "节点临时维护时，推荐使用哪种方式？",
        type: "多选",
        options: [
            "给节点添加 NoSchedule 污点",
            "使用 kubectl cordon 或 kubectl drain 命令",
            "直接停止节点上的 kubelet",
            "不操作，让 Pod 运行失败后自动迁移"
        ],
        answer: [0, 1],
        explanation: "节点临时维护推荐方式：1）kubectl cordon：标记节点为不可调度，阻止新 Pod；2）kubectl drain：驱逐所有 Pod（除了 DaemonSet）并标记不可调度；3）添加 NoSchedule 污点：阻止新 Pod，但需要手动驱逐；4）直接停止 kubelet 会导致 NotReady，不推荐。",
        difficulty: "基础"
    },
    {
        module: "调度",
        question: "调度器的'抢占候选者'（Preemption Candidates）选择算法是什么？",
        type: "单选",
        options: [
            "选择优先级最低的一个 Pod",
            "选择能够满足高优先级 Pod 的最小集合",
            "随机选择节点上的所有有状态 Pod",
            "不选择，直接拒绝高优先级 Pod"
        ],
        answer: [1],
        explanation: "抢占候选者选择：当高优先级 Pod 需要从节点抢占资源时，调度器尝试找到一组能释放足够资源的低优先级 Pod，使得集合大小（Pod 数量）最小。这减少了对应用的影响。每个节点都会尝试找到这样的集合，然后选择最佳节点。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "Kubernetes 支持的存储拓扑感知调度包括哪些？",
        type: "多选",
        options: [
            "区域（Zone）拓扑感知",
            "节点（Node）拓扑感知",
            "快照（Snapshot）拓扑感知",
            "跨集群（Multi-Cluster）拓扑感知"
        ],
        answer: [0, 1],
        explanation: "存储拓扑感知调度：1）区域拓扑感知：PV 绑定到可用区，确保 Pod 调度到同一区域；2）节点拓扑感知：使用本地存储（Local PV）时，PV 绑定到特定节点，Pod 必须调度到此节点。这两个通过 StorageClass 的 volumeBindingMode 策略（WaitForFirstConsumer）和 NodeAffinity 实现。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "默认调度器调度失败事件（Events）的消息格式是什么？",
        type: "多选",
        options: [
            "0/3 nodes are available",
            "Insufficient CPU",
            "node(s) had taint {node.kubernetes.io/not-ready}",
            "Pending in Scheduler"
        ],
        answer: [0, 1, 2],
        explanation: "调度失败事件消息示例：1）'0/3 nodes are available'（无节点满足条件）；2）'Insufficient CPU' 或 'Insufficient memory'（资源不足）；3）'node(s) had taint'（污点不满足）；4）'didn't match node selector'（节点选择器不匹配）等。Pending in Scheduler 不是标准消息。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "Pod 的 QoS（服务质量）等级如何影响调度和驱逐？",
        type: "多选",
        options: [
            "Guaranteed（requests 等于 limits）优先级最高",
            "Burstable（设置 requests）中等优先级",
            "BestEffort（无 requests、无 limits）最低优先级",
            "QoS 直接影响调度决策"
        ],
        answer: [0, 1, 2],
        explanation: "QoS 影响运行时优先级而非调度：Guaranteed（资源请求等于限制）在内存压力时最后被驱逐；Burstable（有 requests 但不等或无 limits）中等优先级；BestEffort（无 requests 和 limits）最先被驱逐。这些等级不影响调度器的调度决策，但影响 OOM 行为。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "如何在 Kubernetes 中实现批处理任务的资源预留？",
        type: "单选",
        options: [
            "使用高优先级的 Guaranteed QoS Pod",
            "创建一个低优先级的 BestEffort Pod 预留资源",
            "使用 ResourceQuota 限制总资源",
            "手动调度到专用节点"
        ],
        answer: [0],
        explanation: "批处理任务资源预留：优先使用高优先级的 Guaranteed QoS Pod（requests 等于 limits），确保在资源竞争时优先调度并保持运行。也可使用专用节点（污点+容忍）或结合控制器确保所需资源。ResourceQuota 限制但无法预留，BestEffort 会被优先驱逐，不适合预留。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "StatefulSet Pod 的调度有什么特殊要求？",
        type: "多选",
        options: [
            "Pod 名字包含唯一序号，依次创建",
            "每个 Pod 可以有稳定的网络标识和存储",
            "必须严格按序号顺序调度",
            "StatefulSet Pod 不支持亲和性配置"
        ],
        answer: [0, 1],
        explanation: "StatefulSet 提供稳定身份：1）Pod 有顺序编号（如 web-0, web-1），依次创建；2）保证稳定的网络标识（Pod 名称）和存储（PVC）；3）调度器不强制严格顺序，但控制器保证按序创建；4）StatefulSet Pod 完全支持亲和性、污点等调度配置。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "Kubernetes 中的'就地升级'（In-place Update）对调度有什么影响？",
        type: "单选",
        options: [
            "必须删除旧 Pod 并重新调度新版本",
            "Pod 可以原地升级某些字段，无需重新调度",
            "调度器自动选择最佳升级时机",
            "就地升级不可用"
        ],
        answer: [1],
        explanation: "Kubernetes 逐步支持就地升级（In-place Update），对于某些字段（如 container.image），可以在不终止和重新调度 Pod 的情况下更新。这减少了调度开销和中断时间。不过，完整功能仍在演进中，多数变更仍需重建 Pod。",
        difficulty: "高级"
    },
    {
        module: "调度",
        question: "调度器如何处理 NodePort 类型的服务调度？",
        type: "多选",
        options: [
            "NodePort 不影响 Pod 的调度位置",
            "NodePort 使用 kube-proxy 在每个节点开放端口",
            "可以通过 nodeSelector 限制 NodePort 服务的节点",
            "NodePort 强制 Pod 调度到所有节点"
        ],
        answer: [0, 1, 2],
        explanation: "NodePort 与调度：1）NodePort 服务在每个节点通过 kube-proxy 开放端口，不限制 Pod 的调度位置；2）可以通过节点选择器或亲和性将 NodePort 服务的 Pod 集中在特定节点，减少端口冲突；3）NodePort 不强制 Pod 调度到所有节点（那是 DaemonSet 的行为）。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "在 Kubernetes 中，防止关键应用被抢占的最佳实践是什么？",
        type: "多选",
        options: [
            "使用最高优先级的 PriorityClass",
            "设置高 value 值，确保低优先级 Pod 无法抢占",
            "使用 Guaranteed QoS 设置requests等于limits",
            "设置 nodeName 锁定到特定节点"
        ],
        answer: [0, 2],
        explanation: "防止关键应用被抢占：1）使用高优先级的 PriorityClass（value 大于其他 Pod）；2）使用 Guaranteed QoS（requests 等于 limits），在资源压力时最后被驱逐；3）不要依赖 nodeName 锁定（会限制调度和可用性）；4）确保集群有足够资源，避免触发抢占。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "调度器的'调度周期'（Scheduling Cycle）包括哪些步骤？",
        type: "多选",
        options: [
            "从队列获取未调度 Pod",
            "过滤阶段（Filter）筛选节点",
            "打分阶段（Score）排序节点",
            "绑定阶段（Bind）并设置状态"
        ],
        answer: [0, 1, 2, 3],
        explanation: "调度器的调度周期：1）从调度队列 Pending Pods 获取需要调度的 Pod；2）过滤阶段应用预选策略，筛选出满足所有条件的节点；3）打分阶段应用优选策略，对节点评分排序；4）绑定阶段将 Pod 绑定到最高分节点，更新 API Server。整个过程通过缓存优化性能。",
        difficulty: "进阶"
    },
    {
        module: "调度",
        question: "在 HPA 水平扩展中，新创建的 Pod 如何被调度？",
        type: "单选",
        options: [
            "由自定义调度器专门处理",
            "由默认调度器按正常流程调度",
            "调度到现有 Pod 所在的同一节点",
            "不经过调度器，直接运行"
        ],
        answer: [1],
        explanation: "HPA 产生的 Pod 由 Deployment 或 StatefulSet 等控制器管理，这些控制器创建的 Pod 由默认调度器正常调度。调度器会基于资源需求、亲和性、污点等因素选择节点。如果需要特殊调度行为，可以在 Controller 的 Pod 模板中设置调度相关配置，而不是单独处理 HPA 的 Pod。",
        difficulty: "基础"
    }
];

const modules = ["调度"];
