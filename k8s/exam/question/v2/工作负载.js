// Kubernetes 概念测评 - 工作负载 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 64
// 覆盖: 工作负载

const questions = [
    {
        module: "工作负载",
        question: "Pod 是 Kubernetes 中最小的可部署计算对象，这意味着什么？",
        type: "单选",
        options: [
            "Pod 是最小的运行单位，包含一个或多个容器",
            "Pod 不可分割，必须作为一个整体调度和管理",
            "Pod 不能包含多个容器",
            "Pod 不是部署单位，容器才是"
        ],
        answer: [1],
        explanation: "Pod 是最小的可部署计算对象，这意味着 Pod 是作为一个整体被调度到节点上的，Pod 中的容器共享网络、存储等资源，必须作为一个整体进行管理。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Pod 的特点是什么？",
        type: "多选",
        options: [
            "有定义的生命周期",
            "节点发生严重故障时 Pod 会失散",
            "可以包含多个协作的容器",
            "IP 地址永久不变"
        ],
        answer: [0, 1, 2],
        explanation: "Pod 的特点：有定义的生命周期（从 Pending 到 Running 再到 Succeeded 或 Failed）、节点故障时 Pod 会失散需要重新创建、可以包含多个协作的容器。Pod 的 IP 地址不是永久的，重启后可能变化。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Deployment 的主要用途是什么？",
        type: "单选",
        options: [
            "管理有状态应用",
            "管理无状态应用，提供声明式更新和滚动升级",
            "运行定时任务",
            "在每个节点上运行守护进程"
        ],
        answer: [1],
        explanation: "Deployment 用于管理无状态应用，提供声明式更新和滚动升级。Deployment 通过管理 ReplicaSet 确保指定数量的 Pod 副本在运行，支持应用的版本更新和回滚。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Deployment 如何实现滚动升级？",
        type: "单选",
        options: [
            "同时删除所有 Pod，然后启动新版本 Pod",
            "逐渐替换旧版本 Pod，确保始终有可用的副本",
            "立即创建新版本 Pod，然后删除旧版本 Pod",
            "备份旧版本 Pod 的数据"
        ],
        answer: [1],
        explanation: "Deployment 通过滚动升级逐渐替换旧版本 Pod，确保应用升级过程中始终有足够的可用副本。可以通过 maxSurge（最大超出数）和 maxUnavailable（最大不可用数）控制升级速率。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "ReplicaSet 的作用是什么？",
        type: "单选",
        options: [
            "提供应用升级和回滚功能",
            "确保指定数量的 Pod 副本在运行",
            "管理有状态应用",
            "在每个节点上运行 Pod"
        ],
        answer: [1],
        explanation: "ReplicaSet 确保指定数量的 Pod 副本在运行，用于维持无状态应用的期望副本数。ReplicaSet 是 Deployment 的底层机制，Deployment 通过管理 ReplicaSet 实现版本管理、滚动升级和回滚。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "StatefulSet 的主要用途是什么？",
        type: "单选",
        options: [
            "管理无状态应用",
            "管理有状态应用，提供稳定的网络标识和持久存储",
            "运行定时任务",
            "在每个节点上运行守护进程"
        ],
        answer: [1],
        explanation: "StatefulSet 用于管理有状态应用，提供稳定的网络标识、持久存储、有序部署和扩展。适用于数据库（MySQL、PostgreSQL）、消息队列（Kafka）等有状态服务。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "StatefulSet 提供哪些特性？",
        type: "多选",
        options: [
            "稳定的网络标识（稳定的 DNS 名称）",
            "有序的部署和扩展（从 0 到 N-1）",
            "有序的终止和删除（从 N-1 到 0）",
            "与 PersistentVolume 的稳定绑定"
        ],
        answer: [0, 1, 2, 3],
        explanation: "StatefulSet 提供以下特性：稳定的网络标识（每个 Pod 有稳定的 hostname 和 DNS 名称）、有序的部署和扩展（依次启动 Pod 0 到 N-1）、有序的终止和删除（依据 N-1 到 0 顺序）、与 PersistentVolume 的稳定绑定（每个 Pod 对应单独的 PV）。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "DaemonSet 的特点是什么？",
        type: "单选",
        options: [
            "确保指定数量的 Pod 副本在运行",
            "在每个符合条件的节点上运行 Pod 的副本",
            "提供滚动升级功能",
            "管理有状态应用"
        ],
        answer: [1],
        explanation: "DaemonSet 会在每个符合条件的节点上运行 Pod 的副本，适合运行集群级别的系统服务，如网络插件、日志收集、监控代理等。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "DaemonSet 的典型应用场景是什么？",
        type: "多选",
        options: [
            "在每个节点上运行集群存储守护进程",
            "在每个节点上运行日志收集守护进程",
            "在每个节点上运行监控守护进程",
            "运行有状态的数据库应用"
        ],
        answer: [0, 1, 2],
        explanation: "DaemonSet 的典型应用场景包括：在每个节点上运行集群存储守护进程（如 glusterd、ceph）、日志收集守护进程（如 fluentd）、监控守护进程（如 node-exporter）。不适合运行有状态的数据库应用。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Job 的作用是什么？",
        type: "单选",
        options: [
            "持续运行的应用",
            "完成一次任务后停止",
            "定时执行任务",
            "在每个节点上运行守护进程"
        ],
        answer: [1],
        explanation: "Job 定义一次性任务，完成到成功状态后停止。Job 适用于批处理任务、数据处理任务等，不同于 Deployment（持续运行）和 CronJob（定时重复执行）。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Job 有哪几种完成模式？",
        type: "多选",
        options: [
            "Non-parallel Jobs（非并行 Job，一个 Pod 完成任务）",
            "Parallel Jobs with a fixed completion count（固定完成数，指定成功完成的 Pod 数量）",
            "Parallel Jobs with a work queue（工作队列，Pod 从队列中获取任务）",
            "Continuous Jobs（持续运行 Job）"
        ],
        answer: [0, 1, 2],
        explanation: "Job 有三种完成模式：非并行（一个 Pod 完成所有工作，completions 默认为 1）、并行固定完成数（指定 completions、parallelism）、工作队列模式（Pod 从外部工作队列获取任务）。没有Continuous Jobs模式。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Job 的 completions 字段表示什么？",
        type: "单选",
        options: [
            "Job 的最大运行时间",
            "Job 的并行 Pod 数量",
            "Job 成功完成的 Pod 数量",
            "Job 的重试次数"
        ],
        answer: [2],
        explanation: "Job 的 completions 字段表示 Job 成功完成的 Pod 数量。当指定数量为 N 的 Pod 成功完成时，Job 标记为完成。默认是 1，即一个 Pod 成功完成后标记 Job 完成。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Job 的 parallelism 字段表示什么？",
        type: "单选",
        options: [
            "Job 完成的总次数",
            "Job 同时运行的 Pod 副本数",
            "Job 的超时时间",
            "Job 的失败容忍数"
        ],
        answer: [1],
        explanation: "Job 的 parallelism 字段表示 Job 同时运行的 Pod 副本数。默认是 1。可以增加并行度加快 Job 完成，但需确保任务支持并行执行。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "CronJob 的作用是什么？",
        type: "单选",
        options: [
            "运行一次性任务",
            "根据时间表定期运行 Job",
            "持续运行应用",
            "在每个节点上运行守护进程"
        ],
        answer: [1],
        explanation: "CronJob 根据时间表（cron 表达式）定期运行 Job，可用于定时任务如数据库备份、日志清理、数据同步等。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "CronJob 的 schedule 字段如何使用？",
        type: "单选",
        options: [
            "使用 ISO 8601 格式",
            "使用 cron 表达式（分 时 日 月 周）",
            "使用自然语言",
            "使用间隔时间"
        ],
        answer: [1],
        explanation: "CronJob 的 schedule 字段使用 cron 表达式格式：分 时 日 月 周。例如：*/1 * * * * 表示每分钟运行一次，0 0 * * * 表示每天午夜运行一次。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "CronJob 有哪些时间策略？",
        type: "多选",
        options: [
            "Allow（允许并发执行）",
            "Forbid（禁止并发执行，跳过新执行）",
            "Replace（终止当前执行，开始新执行）",
            "Wait（等待当前执行完成后执行新任务）"
        ],
        answer: [0, 1, 2],
        explanation: "CronJob 的 concurrencyPolicy 字段支持：Allow（允许，可以并发执行多个 Job）、Forbid（禁止，如果上次执行未完成则跳过新执行）、Replace（替换，如果上次执行未完成则终止它并开始新执行）。没有 Wait 策略。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "CronJob 的 startingDeadlineSeconds 字段表示什么？",
        type: "单选",
        options: [
            "Job 的执行超时时间",
            "未执行的 Job 可以被重新调度的截止时间",
            "CronJob 的启动延迟",
            "Job 的并行时间限制"
        ],
        answer: [1],
        explanation: "CronJob 的 startingDeadlineSeconds 表示未执行的 Job 可以被重新调度的截止时间。如果错过多个计划时间，Kubernetes 会在超过此时间段后放弃已错过的执行。这有助于避免因调度问题导致雪球效应。",
        difficulty: "高级"
    },
    {
        module: "工作负载",
        question: "Horizontal Pod Autoscaler (HPA) 的作用是什么？",
        type: "单选",
        options: [
            "扩展集群节点",
            "根据指标自动调整 Pod 副本数量",
            "扩展存储容量",
            "扩展网络带宽"
        ],
        answer: [1],
        explanation: "HPA 根据 CPU 使用率或其他指标（内存、自定义指标）自动调整 Deployment、ReplicaSet、StatefulSet 等控制器的 Pod 副本数量，实现弹性伸缩。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "HPA 支持哪些指标？",
        type: "多选",
        options: [
            "Resource Metrics（CPU、内存）",
            "Custom Metrics（自定义指标，如 QPS）",
            "External Metrics（外部系统指标）",
            "Node Metrics（节点级指标）"
        ],
        answer: [0, 1, 2],
        explanation: "HPA 支持三种类型的指标：Resource Metrics（资源指标，如 CPU、内存）、Custom Metrics（自定义指标，来自 Metrics API，如 QPS、请求延迟）、External Metrics（外部系统指标，如外部消息队列长度）。HPA 不直接使用节点级指标。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "HPA 如何根据 CPU 使用率自动扩展？",
        type: "单选",
        options: [
            "当 CPU 使用率超过阈值时增加副本，低于阈值时减少副本",
            "固定扩展到指定的副本数",
            "只在节点负载高时扩展",
            "无法根据 CPU 自动扩展"
        ],
        answer: [0],
        explanation: "HPA 根据算法自动调整副本数量：当前副本数 = ceil(target平均使用率 / target使用率 * 当前副本数)。当 CPU 使用率超过阈值时增加副本，低于阈值时减少副本。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Pod 中的 Init Container（初始化容器）的作用是什么？",
        type: "多选",
        options: [
            "在应用容器启动前执行初始化任务",
            "可以运行应用程序容器不包含的工具",
            "初始化容器执行完成后才会启动应用容器",
            "初始化容器一直运行"
        ],
        answer: [0, 1, 2],
        explanation: "Init Container 初始化容器的作用：在应用容器启动前执行初始化任务（如等待依赖服务、生成配置文件），可以使用不同于应用容器的工具（如 wget、git），串行执行（一个完成后才开始下一个）。初始化容器成功完成后才会启动应用容器，执行完毕后会终止，不会一直运行。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Pod 中可以有多个 Init Container 吗？",
        type: "单选",
        options: [
            "不可以，只能有一个",
            "可以，按声明顺序串行执行",
            "可以，所有 Init Container 并发执行",
            "可以，随机执行顺序"
        ],
        answer: [1],
        explanation: "Pod 中可以有多个 Init Container，它们会按照 Pod spec.initContainers 字段中的声明顺序串行执行。只有所有 Init Container 都成功执行完成后，才会启动应用容器。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "什么是 Pod 生命周期？",
        type: "单选",
        options: [
            "Pod 的创建和删除",
            "Pod 从创建到终止的各个状态",
            "Pod 的重启策略",
            "Pod 的资源配额"
        ],
        answer: [1],
        explanation: "Pod 生命周期是 Pod 从创建到终止的各个状态，包括 Pending、Running、Succeeded、Failed、Unknown。这些状态反映了 Pod 的生命周期阶段，如调度、运行、完成或失败。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Pod 的 PodPhase 有哪些值？",
        type: "多选",
        options: [
            "Pending",
            "Running",
            "Succeeded",
            "Failed",
            "Unknown"
        ],
        answer: [0, 1, 2, 3, 4],
        explanation: "Pod 的 PodPhase（状态）有五个值：Pending（Pod 已被接收但一个或多个容器未创建或启动）、Running（至少一个容器正在运行或重启中）、Succeeded（所有容器成功终止且不会重启）、Failed（所有容器已终止且至少一个异常终止）、Unknown（无法获取 Pod 状态，如节点失联）。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "什么是 Pod 的 PodCondition？",
        type: "单选",
        options: [
            "Pod 的总状态（PodPhase）",
            "Pod 的条件状态，描述 Pod 的内部状态细节",
            "Pod 的资源使用情况",
            "Pod 的网络状态"
        ],
        answer: [1],
        explanation: "PodCondition 是 Pod 的条件状态，描述 Pod 的内部状态细节，如 PodScheduled（是否已调度）、Initialized（Init Container 是否已完成）、Ready（Pod 是否准备好接收流量）、ContainersReady（容器是否准备好）、Unschedulable（是否不可调度）等。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Pod 如何提供就绪状态信息给 Service？",
        type: "单选",
        options: [
            "通过 PodCondition 的 Ready 字段",
            "通过 Pod 的 status.phase",
            "通过 Pod 的 labels",
            "通过 Pod 的 annotations"
        ],
        answer: [0],
        explanation: "Pod 通过 PodCondition 的 Ready 字段提供就绪状态信息给 Service。当 Pod 的 Ready 条件为 True 时，Pod 会被添加到 Service 的 Endpoints 列表中；当为 False（或 Unknown）时，从 Endpoints 中移除。就绪探针（readinessProbe）会更新此状态。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "什么是 Pod 的资源请求和限制？",
        type: "多选",
        options: [
            "requests：容器需要的最小资源量",
            "limits：容器可使用的最大资源量",
            "不定义时，容器无法调度",
            "定义后容器必定获得这些资源"
        ],
        answer: [0, 1],
        explanation: "Pod 的容器可以定义资源请求和限制：requests（容器需要的最小资源量，用于调度决策）、limits（容器可使用的最大资源量，超出后会被限制或终止）。不定义时容器可以调度（QoS 为 BestEffort），但不保证获得这些资源（根据集群负载和其他 Pods 的请求）。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Pod 的重启策略有哪些？",
        type: "多选",
        options: [
            "Always（总是重启）",
            "OnFailure（失败时重启）",
            "Never（永不重启）",
            "UnlessStopped（除非手动停止）"
        ],
        answer: [0, 1, 2],
        explanation: "Pod 的重启策略有三种：Always（容器总是重启，适合 Deployment 等工作负载）、OnFailure（容器仅在失败退出时重启，适合 Job）、Never（容器永不重启，适合 Job 或一次性任务）。UnlessStopped 不是 Kubernetes 选项。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "为什么 Deployment 中 Pod 的重启策略通常设置为 Always？",
        type: "单选",
        options: [
            "为了节省资源",
            "确保应用持续运行，容器退出后自动重启",
            "为了避免应用启动失败",
            "为了保证应用性能"
        ],
        answer: [1],
        explanation: "Deployment 管理持续运行的应用（无状态应用），Pod 的重启策略通常是 Always，确保应用持续运行，容器意外退出后自动重启。Job 应用设置为 Never 或 OnFailure。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Job 为什么通常将重启策略设置为 OnFailure 或 Never？",
        type: "单选",
        options: [
            "不需要持久运行",
            "Job 是一次性任务，完成到成功状态后应停止，失败后不应无限重启",
            "因为 Job 的 Pods 不能重启",
            "因为 Deployment 不能管理 Job"
        ],
        answer: [1],
        explanation: "Job 是一次性任务，完成到成功状态后应停止。设置为 OnFailure（失败时有限次数重启）或 Never（失败后不重启，由 Job 控制器根据 backoffLimit 决定是否创建新 Pod）。设置为 Always 会无限重启 Job 的 Pods，不符合设计目标。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Job 的 backoffLimit 字段表示什么？",
        type: "单选",
        options: [
            "Job 的运行时间限制",
            "Job 的失败容忍度（失败多少次后放弃）",
            "Job 的并行数量",
            "Job 的扩展比例"
        ],
        answer: [1],
        explanation: "Job 的 backoffLimit 字段表示 Job 的失败容忍度，即失败多少次后放弃。默认值是 6。当失败的 Pod 数量达到此值时，Job 标记为 Failed，不再创建新 Pod。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "什么是 Pod 的 terminationGracePeriodSeconds？",
        type: "单选",
        options: [
            "Pod 的创建延迟",
            "Pod 删除时用于优雅关闭的最长等待时间",
            "Pod 重启的时间间隔",
            "Pod 的最大运行时间"
        ],
        answer: [1],
        explanation: "terminationGracePeriodSeconds 是 Pod 删除时用于优雅关闭的最长等待时间（默认 30 秒）。Pod 被删除时，kubelet 会发送 SIGTERM 信号到容器，等待此时间后如果容器未终止则发送 SIGKILL 强制终止。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "什么是 Pod 的 terminationMessagePolicy？",
        type: "单选",
        options: [
            "控制 Pod 的何时终止",
            "控制容器的 termination message 写入方式",
            "控制 Pod 的终止信号",
            "控制 Pod 的日志保存"
        ],
        answer: [1],
        explanation: "terminationMessagePolicy 控制容器的 termination message（应用写入容器文件系统的退出或错误消息）写入方式。可选值包括 File（默认，写入 /dev/termination-log 文件）、FallbackToLogsOnError（失败时从容器日志读取）。用于调试容器终止原因。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "什么是 Pod 的 activeDeadlineSeconds？",
        type: "单选",
        options: [
            "Pod 的最长容忍运行时间（超时后终止）",
            "Pod 的创建超时",
            "Pod 的启动延迟",
            "Pod 的重启间隔"
        ],
        answer: [0],
        explanation: "activeDeadlineSeconds 是 Pod 的最长容忍运行时间，超时后 Pod 会终止。Job 可设置此字段，确保长时间运行或挂起的 Job 能够超时终止。在超时时 Pod 会被标记为 Failed。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Deployment 的 rollback 功能如何使用？",
        type: "单选",
        options: [
            "kubectl rollback deployment <name>",
            "kubectl rollout undo deployment <name>",
            "kubectl update deployment <name>",
            "kubectl revert deployment <name>"
        ],
        answer: [1],
        explanation: "可以使用 kubectl rollout undo deployment <name> 回滚 Deployment 到上一个版本。也可以指定版本（如 --to-revision=2）。rollback 是旧版本的子命令，已不再推荐。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Deployment 的 rollback 历史记录保存在哪里？",
        type: "单选",
        options: [
            "etcd 数据库",
            "Deployment 的 revision history",
            "PersistentVolume",
            "ConfigMap"
        ],
        answer: [1],
        explanation: "Deployment 的 rollback 历史记录保存在 Deployment 的 revision history（版本历史）中。通过 .spec.revisionHistoryLimit 可以控制保留的历史版本数（默认 10）。每个 Deployment 更新会创建一个新版本。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "StatefulSet 的优势是什么？",
        type: "多选",
        options: [
            "每个 Pod 有稳定的网络标识",
            "可以与 PersistentVolume 稳定绑定",
            "有序部署和扩展",
            "Pod IP 地址不会变化"
        ],
        answer: [0, 1, 2],
        explanation: "StatefulSet 的优势：每个 Pod 有稳定的网络标识（Pod 名称和 hostname 稳定，DNS 名称格式：<statefulset-name>-<ordinal>.<service-name>）、可以与 PersistentVolume 稳定绑定（即使 Pod 被重新调度）、有序部署和扩展（从 0 到 N-1）、有序终止（从 N-1 到 0）。Pod IP 地址在不同节点间会变化。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "StatefulSet 的 scale 如何工作？",
        type: "单选",
        options: [
            "随机扩展到指定数量",
            "从当前数量顺序扩展到指定数量",
            "并行扩展到指定数量",
            "无法扩缩"
        ],
        answer: [1],
        explanation: "StatefulSet 扩展时是顺序的：从当前数量开始（如 3）逐个扩展到目标数量（如 5），依次启动 Pod 3 和 4。缩放时也是逆序的：从最高索引开始删除。确保应用能够有序处理 Pod 的增减。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "StatefulSet 和 Deployment 的区别是什么？",
        type: "多选",
        options: [
            "StatefulSet 用于有状态应用，Deployment 用于无状态应用",
            "StatefulSet Pod 有稳定的标识和存储，Deployment Pod 没有",
            "StatefulSet 支持有序部署和扩展，Deployment 支持并行",
            "StatefulSet 不支持滚动升级"
        ],
        answer: [0, 1, 2],
        explanation: "StatefulSet 和 Deployment 的区别：StatefulSet 管理有状态应用，Deployment 管理无状态应用；StatefulSet Pod 有稳定的标识和存储，Deployment Pod 没有；StatefulSet 支持有序部署、扩展和滚动升级（需配置），Deployment 支持并行快速升级。StatefulSet 可以支持滚动升级，需在 spec.updateStrategy 中配置。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "DaemonSet 如何更新？",
        type: "单选",
        options: [
            "手动删除所有 DaemonSet Pod 后创建",
            "通过更新 DaemonSet 模板，kubelet 自动更新 Pod",
            "必须删除并重新创建 DaemonSet",
            "DaemonSet 无法更新"
        ],
        answer: [1],
        explanation: "DaemonSet 可以通过更新 spec.template 模板，kubelet 节点上的 DaemonSet 控制器会自动检测变化并更新 Pod。支持 RollingUpdate（滚动更新，默认）和 OnDelete（仅手动删除 Pod 后才更新）两种更新策略。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Job 如何清理完成的 Pod？",
        type: "多选",
        options: [
            "通过设置 .spec.ttlSecondsAfterFinished 字段自动清理",
            "设置成功和失败的 Pod 数量上限",
            "手动删除 Pod",
            "无法清理"
        ],
        answer: [0, 1, 2],
        explanation: "Job 可以通过设置成功和失败的 Pod 数量上限，也可以设置 .spec.ttlSecondsAfterFinished 自动清理已完成的 Pod（Kubernetes 需开启 TTL控制器）。也可以手动删除 Pod。默认情况下，Job 完成的 Pod 不会自动清理。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "CronJob 如何防止因之前的执行未完成而堆积过多的 Job？",
        type: "单选",
        options: [
            "设置 .spec.successfulJobsHistoryLimit 和 .spec.failedJobsHistoryLimit",
            "所有 CronJob 执行完成后，失败的 Job 会被保留在集群。",
            "清理已完成 Job 的策略由 CronJob 自动完成。",
            "不能清理 CronJob 的 Job 历史"
        ],
        answer: [0],
        explanation: "通过设置 .spec.successfulJobsHistoryLimit 和 .spec.failedJobsHistoryLimit 限制保留的 Job 数量，防止 CronJob 因之前的执行未完成而堆积过多的 Job。同时，设置 .spec.concurrencyPolicy 可以控制并发策略。",
        difficulty: "高级"
    },
    {
        module: "工作负载",
        question: "HPA 缩放的最小和最大副本如何设置？",
        type: "单选",
        options: [
            "在 Deployment 中直接设置",
            "在 HPA 的 minReplicas 和 maxReplicas 字段中设置",
            "不能设置，自动决定",
            "通过kubectl annotate deployment设置"
        ],
        answer: [1],
        explanation: "HPA 通过 minReplicas 和 maxReplicas 字段设置缩放的最小和最大副本数（minReplicas 默认为 1，maxReplicas 默认无限制）。Deployment 和其他工作负载控制器通过 HPA 动态调整，不固定副本数。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "什么是 PodDisruptionBudget (PDB)？",
        type: "单选",
        options: [
            "Pod 的资源预算",
            "确保在维护期间至少有指定数量的 Pod 可用",
            "Pod 的网络安全策略",
            "Pod 的存储限额"
        ],
        answer: [1],
        explanation: "PodDisruptionBudget (PDB) 确保在维护期间（如节点升级）至少有指定数量或百分比的 Pod 可用，防止应用不可用。PDB 适用于 Voluntary Disruptions（自愿中断，如节点 drain）。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "PDB 如何定义最小可用 Pod 数量？",
        type: "多选",
        options: [
            "使用 minAvailable（指定最少可用 Pod 数量）",
            "使用 maxUnavailable（指定最大不可用 Pod 数量）",
            "使用 budget 字段",
            "使用 minReplicas 字段"
        ],
        answer: [0, 1],
        explanation: "PDB 可以使用 minAvailable（指定最少可用 Pod 数量，如 5 或 80%）或 maxUnavailable（指定最大不可用 Pod 数量）定义。这两个字段互斥，不能同时使用。没有 budget 或 minReplicas 字段。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "什么是 ReplicaSet 的 selector？",
        type: "单选",
        options: [
            "ReplicaSet 选择节点的规则",
            "ReplicaSet 管理哪些 Pod 的规则",
            "ReplicaSet 的资源限制",
            "ReplicaSet 的版本标识"
        ],
        answer: [1],
        explanation: "ReplicaSet 的 selector 是 ReplicaSet 管理哪些 Pod 的规则，通过标签选择器匹配 Pod。只有与 selector 匹配的 Pod 才会被 ReplicaSet 管理（计入期望副本数）。Deployment 通过管理 ReplicaSet 的 selector 决定管理哪些 Pod。",
        difficulty: "基础"
    },
    {
        module: "工作负载",
        question: "Deployment 的 maxSurge 和 maxUnavailable 配置有什么作用？",
        type: "多选",
        options: [
            "maxSurge 表示滚动更新时最多可以超出期望副本数的数量",
            "maxUnavailable 表示滚动更新时最多可以不可用的副本数量",
            "这两个配置可以百分比或绝对值表示",
            "这两个配置只适用于 StatefulSet"
        ],
        answer: [0, 1, 2],
        explanation: "maxSurge 和 maxUnavailable 字段控制 Deployment 滚动更新的速率：maxSurge 表示升级过程中最多可以超出期望副本数的数量（如 25% 或 2），maxUnavailable 表示升级过程中最多可以不可用的副本数量。它们可以设置为百分比（如 \"25%\"）或绝对值。配置示例：strategy: { type: RollingUpdate, rollingUpdate: { maxSurge: '25%', maxUnavailable: '25%' } }。这两个配置不适用于 StatefulSet。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "Job 的 parallelism 和 completions 字段如何配合使用？",
        type: "单选",
        options: [
            "parallelism 必须小于 completions",
            "parallelism 是同时运行的 Pod 数量，completions 是需要成功完成的 Pod 总数",
            "completions 是并行运行的 Pod 数量，parallelism 是需要成功完成的 Pod 总数",
            "这两个字段互斥，不能同时使用"
        ],
        answer: [1],
        explanation: "Job 的 parallelism 和 completions 可以配合使用：parallelism 表示同时运行的 Pod 副本数量（默认 1），completions 表示需要成功完成的 Pod 总数（默认 1）。例如：parallelism=3, completions=6 表示最多同时运行 3 个 Pod，需要成功完成 6 个任务。当 parallelism大于completions 时，同时运行的 Pod 受限于 completions 的值。",
        difficulty: "进阶"
    },
    {
        module: "工作负载",
        question: "HPA 的 behavior 字段有什么作用？",
        type: "多选",
        options: [
            "配置扩缩容的速率限制",
            "设置扩容和缩容的不同策略",
            "防止频繁的 Pod 数量变化导致的不稳定",
            "直接设置固定的 Pod 副本数"
        ],
        answer: [0, 1, 2],
        explanation: "HPA 的 behavior 字段用于配置扩缩容的稳定窗口和速率限制，包括 scaleUp（扩容策略）和 scaleDown（缩容策略）。可以设置 stabilizationWindowSeconds（稳定窗口时间，防止指标波动导致频繁调整）、policies（速率限制，如每分钟最多增加多少个或多少比例的 Pod）。这有助于防止频繁的 Pod 数量变化导致的不稳定。不能直接设置固定的 Pod 副本数。",
        difficulty: "高级"
    },
    {
        module: "工作负载",
        question: "当 StatefulSet 的 Pod 被删除时，它的网络标识会变化吗？",
        type: "单选",
        options: [
            "会，新的 Pod 会获得新的 DNS 名称",
            "不会，新的 Pod 会保留相同的网络标识",
            "取决于 Service 的配置",
            "取决于是否配置了 headless Service"
        ],
        answer: [1],
        explanation: "当 StatefulSet 的 Pod 被删除并重新创建时，新的 Pod 会保留相同的网络标识。Pod 的名称（如 web-0)、hostname 和 DNS 名称（如 web-0.default.svc.cluster.local）是稳定的，不会因为重建而变化。这是 StatefulSet 相比 Deployment 的重要优势，确保有状态应用（如数据库）能够通过稳定的标识连接。PersistentVolume 也会保持绑定（通过 persistentVolumeClaimRetentionPolicy 配置）。",
        difficulty: "进阶"
    }
];

const modules = ["工作负载"];
