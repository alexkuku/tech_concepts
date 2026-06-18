// Kubernetes 概念测评 - 容器 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 50
// 覆盖: 容器

const questions = [
    // ========== 第1部分：容器镜像 ==========

    {
        module: "容器",
        question: "容器镜像是什么？",
        type: "单选",
        options: [
            "一个运行的容器实例",
            "一个只读的模板，包含运行应用程序所需的一切：代码、运行时、库和默认值",
            "一个容器运行时",
            "一个网络配置文件"
        ],
        answer: [1],
        explanation: "容器镜像是一个只读的模板，包含运行应用程序所需的一切：代码、运行时要求、应用程序和系统库以及重要设置的默认值。镜像用于创建容器实例。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "容器镜像的特性是什么？",
        type: "多选",
        options: [
            "无状态和不可变",
            "可以更改已运行容器的镜像",
            "如需更改，应该构建新镜像并重新创建容器",
            "有状态，可动态修改"
        ],
        answer: [0, 2],
        explanation: "容器镜像是无状态和不可变的，不应该更改已运行容器的镜像。如果需要更改，应该构建包含更改的新镜像，然后重新创建容器，而不是修改运行中的容器。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "容器镜像的最佳实践是什么？",
        type: "多选",
        options: [
            "使用多阶段构建减小镜像体积",
            "避免在镜像中包含敏感信息",
            "使用特定的版本标签而非 latest",
            "将所有应用代码和依赖打包到镜像中（包括配置文件）"
        ],
        answer: [0, 1, 2],
        explanation: "容器镜像的最佳实践：使用多阶段构建减小镜像体积、避免在镜像中包含敏感信息（应使用 Secret）、使用特定的版本标签而非 latest（避免意外更新）。将配置文件打包到镜像中会导致镜像耦合配置，应使用 ConfigMap 分离。",
        difficulty: "进阶"
    },

    // ========== 第2部分：容器运行时 ==========

    {
        module: "容器",
        question: "容器运行时在 Kubernetes 中的角色是什么？",
        type: "单选",
        options: [
            "调度 Pod 到节点",
            "管理 Kubernetes 环境中容器的执行和生命周期",
            "提供持久化存储",
            "实现 Service 的负载均衡"
        ],
        answer: [1],
        explanation: "容器运行时的角色是管理 Kubernetes 环境中容器的执行和生命周期，包括下载容器镜像、启动和停止容器、管理容器网络和存储等。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "Kubernetes 支持哪些容器运行时？",
        type: "多选",
        options: [
            "containerd",
            "CRI-O",
            "Docker Engine（通过 CRI 兼容器运行时）",
            "Kata Containers（通过 CRI）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 通过容器运行时接口（CRI）支持任何实现了 CRI 的运行时，包括：containerd、CRI-O、Kata Containers（提供虚机隔离）。Docker Engine 通过 dockershim（已废弃）或直接安装 CRI 兼容组件也可使用。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "CRI（Container Runtime Interface）的作用是什么？",
        type: "单选",
        options: [
            "管理容器网络",
            "定义 kubelet 与容器运行时之间的接口",
            "管理容器存储",
            "实现容器镜像仓库"
        ],
        answer: [1],
        explanation: "CRI（Container Runtime Interface）定义了 kubelet 与容器运行时之间的接口，包括 gRPC 服务（用于运行时和镜像服务）。CRI 使得 Kubernetes 可以灵活地切换和扩展容器运行时。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "如何选择容器运行时？",
        type: "多选",
        options: [
            "基于性能需求和资源占用",
            "考虑隔离要求（进程级别 vs 虚机级别）",
            "确保兼容性（支持 Kubernetes 版本）",
            "只选择 Docker，因为它是唯一选项"
        ],
        answer: [0, 1, 2],
        explanation: "选择容器运行时应考虑：性能需求和资源占用（如 containerd 较轻量）、隔离要求（如 Kata Containers 提供虚机级别隔离）、兼容性（运行时支持的 Kubernetes API 版本）。Docker 不是唯一选项，containerd 和 CRI-O 也是常用选择。",
        difficulty: "进阶"
    },

    // ========== 第3部分：RuntimeClass ==========

    {
        module: "容器",
        question: "RuntimeClass 的用途是什么？",
        type: "单选",
        options: [
            "运行多个容器应用",
            "确保 Kubernetes 使用特定的容器运行时或运行时配置运行 Pod",
            "管理容器网络",
            "监控容器性能"
        ],
        answer: [1],
        explanation: "RuntimeClass 用于确保 Kubernetes 使用指定的容器运行时或运行时配置运行 Pod。它允许在集群中使用多个容器运行时（如普通运行时和安全运行时）或使用同一运行时但不同设置。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "如何为 Pod 指定 RuntimeClass？",
        type: "单选",
        options: [
            "在 Pod 的 annotations 中指定",
            "在 Pod 的 spec.runtimeClassName 字段中指定",
            "在容器的环境变量中指定",
            "在 Pod 的 labels 中指定"
        ],
        answer: [1],
        explanation: "在 Pod 的 spec.runtimeClassName 字段中指定使用哪个 RuntimeClass。RuntimeClass 对象在集群级别定义，包含容器运行时的配置，Pod 通过名称引用。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "RuntimeClass 的典型使用场景是什么？",
        type: "多选",
        options: [
            "需要虚机级别隔离的工作负载（使用 Kata Containers）",
            "需要特定 GPU 或硬件配置的工作负载",
            "用于安全性要求高的应用（使用 gVisor）",
            "管理所有普通应用"
        ],
        answer: [0, 1, 2],
        explanation: "RuntimeClass 的典型使用场景：需要虚机级别隔离的工作负载（使用 Kata Containers）、需要特定 GPU 或硬件配置（配置不同的运行时参数）、安全性要求高的应用（使用 gVisor 等沙箱运行时）。普通应用使用默认运行时即可。",
        difficulty: "进阶"
    },

    // ========== 第4部分：容器环境 ==========

    {
        module: "容器",
        question: "容器环境中包含哪些信息？",
        type: "多选",
        options: [
            "环境变量",
            "Service 账户信息",
            "Pod 的 IP 地址",
            "容器镜像仓库的用户名和密码"
        ],
        answer: [0, 1, 2],
        explanation: "容器环境包含：环境变量（包括自定义和系统环境变量）、Service 账户信息（token、CA 证书等）、Pod 的 IP 地址等。容器镜像仓库的用户名和密码应通过 Secret 或 ImagePullSecrets 注入，不在容器环境中直接暴露。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "容器通过哪些方式获取环境变量？",
        type: "多选",
        options: [
            "Pod 定义中的 env 字段",
            "ConfigMap",
            "Secret",
            "RuntimeClass"
        ],
        answer: [0, 1, 2],
        explanation: "容器可以通过 Pod 定义中的 env 字段直接定义环境变量、从 ConfigMap 注入（通过 configMapKeyRef）、从 Secret 注入（通过 secretKeyRef）等方式获取环境变量。RuntimeClass 用于指定容器运行时，不是环境变量来源。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "如何使用 Pod FieldRef 环境变量？",
        type: "单选",
        options: [
            "Pod FieldRef 不支持",
            "通过 Pod 的 metadata 或 spec 字段值作为环境变量",
            "通过 ConfigMap 注入",
            "通过 Secret 注入"
        ],
        answer: [1],
        explanation: "Pod FieldRef 允许将 Pod 的 metadata 或 spec 字段值（如 metadata.name、metadata.namespace、spec.nodeName、status.podIP）作为环境变量注入到容器中。不是通过 ConfigMap 或 Secret 注入的。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "如何使用 ResourceFieldRef 环境变量？",
        type: "单选",
        options: [
            "ResourceFieldRef 不支持",
            "将 Pod 的请求或限制资源值（如 CPU、内存）作为环境变量注入",
            "通过 ConfigMap 注入",
            "通过 Secret 注入"
        ],
        answer: [1],
        explanation: "ResourceFieldRef 将 Pod 的 requests 或 limits 资源值（如 CPU、内存）作为环境变量注入到容器中，例如，将 requests.memory 注入为环境变量。不是通过 ConfigMap 或 Secret 注入的。",
        difficulty: "进阶"
    },

    // ========== 第5部分：容器生命周期钩子 ==========

    {
        module: "容器",
        question: "容器生命周期钩子有哪些类型？",
        type: "多选",
        options: [
            "PostStart",
            "PreStop"
        ],
        answer: [0, 1],
        explanation: "容器生命周期钩子有两种类型：PostStart（容器启动后立即执行）和 PreStop（容器终止前执行）。这些钩子允许在容器生命周期的特定点执行操作，如在启动后执行初始化任务、在终止前清理资源。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "PostStart 钩子何时执行？",
        type: "单选",
        options: [
            "容器启动之前",
            "容器启动后立即执行",
            "容器正常运行中",
            "容器终止之后"
        ],
        answer: [1],
        explanation: "PostStart 钩子在容器启动后立即执行，但无法保证执行的时间点相对于容器 ENTRYPOINT 或 COMMAND 的执行顺序。如果钩子执行时间过长，容器可能无法进入 running 状态。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "PreStop 钩子何时执行？",
        type: "单选",
        options: [
            "容器启动之前",
            "容器运行中",
            "容器被终止之前",
            "容器终止之后"
        ],
        answer: [2],
        explanation: "PreStop 钩子在容器被终止之前执行，用于执行清理操作，如优雅关闭服务、释放资源。Pod 的 terminationGracePeriodSeconds 限制 PreStop 钩子的执行时间。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "容器生命周期钩子支持哪些处理方式？",
        type: "多选",
        options: [
            "Exec（在容器内执行命令）",
            "HTTPGet（执行 HTTP GET 请求）",
            "TCPSocket（打开 TCP 连接）",
            "GRPC"
        ],
        answer: [0],
        explanation: "容器生命周期钩子支持两种处理方式：Exec（在容器内执行命令）和 HTTPGet（向容器内的端点执行 HTTP GET 请求）。TCPSocket 和 GRPC 是探针支持的方式，不支持用于生命周期钩子。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "如果容器生命周期钩子执行失败会发生什么？",
        type: "单选",
        options: [
            "容器永远不会启动",
            "会记录日志并继续执行容器生命周期",
            "容器立即被删除",
            "Pod 被驱逐"
        ],
        answer: [1],
        explanation: "如果容器生命周期钩子执行失败，会记录日志警告并继续执行容器生命周期。PostStart 钩子失败不会阻止容器启动，PreStop 钩子失败不会阻止容器终止。",
        difficulty: "进阶"
    },

    // ========== 第6部分：容器资源 ==========

    {
        module: "容器",
        question: "容器资源请求（requests）的作用是什么？",
        type: "单选",
        options: [
            "限制容器可使用的最大资源量",
            "声明容器所需的最小资源量，用于调度",
            "容器的配额",
            "容器的网络带宽限制"
        ],
        answer: [1],
        explanation: "容器资源请求（requests）声明容器所需的最小资源量（CPU、内存等），用于调度决策：确保 Pod 被调度到有足够资源的节点。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "容器资源限制（limits）的作用是什么？",
        type: "单选",
        options: [
            "声明容器所需的最小资源量",
            "限制容器可使用的最大资源量，超出则限制或终止",
            "容器的配额控制",
            "容器的网络带宽配置"
        ],
        answer: [1],
        explanation: "容器资源限制（limits）限制容器可使用的最大资源量，当容器超出限制时（如内存超出），可能会被 OOM 终止。CPU 限制通过 cgroup 份额实现，内存限制会触发 OOM Kill。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "如何设置容器的 CPU 请求和限制？",
        type: "单选",
        options: [
            "直接设置 CPU 时间片",
            "通过 CPU 核心数或毫核表示",
            "通过 CPU 百分比",
            "无法设置"
        ],
        answer: [1],
        explanation: "容器 CPU 请求和限制通过 CPU 核心数或毫核表示，例如：250m 表示 0.25 核（250 毫核），1 表示 1 核，2 表示 2 核。不是通过时间片、百分比或无法直接设置的。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "如何设置容器的内存请求和限制？",
        type: "单选",
        options: [
            "通过内存缓存大小",
            "通过字节数表示，如 128Mi, 1Gi",
            "使用内存百分比",
            "无法设置"
        ],
        answer: [1],
        explanation: "容器内存请求和限制通过字节数表示，使用 E、P、T、G、M、K 等单位，或者 Ei、Pi、Ti、Gi、Mi、Ki（二进制单位），如 128Mi 表示 128 MiB，1Gi 表示 1 GiB。不是使用内存百分比。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "什么是容器的 QoS（服务质量）等级？",
        type: "单选",
        options: [
            "容器的网络服务质量",
            "根据容器资源的 requests 和 limits 确定的调度和驱逐优先级等级",
            "容器的配额限制",
            "容器的监控等级"
        ],
        answer: [1],
        explanation: "容器的 QoS（服务质量）等级根据容器资源的 requests 和 limits 确定，用于调度和资源回收（驱逐）时的优先级。有三个 QoS 类型：Guaranteed、Burstable、BestEffort。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "如何将容器设置为 Guaranteed QoS？",
        type: "单选",
        options: [
            "为容器设置 requests 和 limits，且 CPU 和内存的 requests 等于 limits",
            "仅设置 limits",
            "仅设置 requests",
            "不设置任何 requests 和 limits"
        ],
        answer: [0],
        explanation: "要将容器设置为 Guaranteed QoS，需要为容器设置 requests 和 limits，且 CPU 和内存的 requests 必须等于 limits。Guaranteed QoS 的容器获得最高优先级，只在系统资源不足且需要优先保证其他容器时才会被最后驱逐。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "Guaranteed、Burstable 和 BestEffort QoS 的区别是什么？",
        type: "单选",
        options: [
            "没有区别",
            "Guaranteed: requests == limits, Burstable: 定义了 requests, BestEffort: 未定义",
            "Guaranteed: 仅 limits, Burstable: 仅 requests, BestEffort: 都没有",
            "Guaranteed: 不限制, Burstable: 有限制, BestEffort: 严格限制"
        ],
        answer: [1],
        explanation: "三种 QoS 的区别：Guaranteed：为所有容器设置了 requests 和 limits，且 CPU 和内存的 requests 等于 limits；Burstable：定义了 requests 但 requests < limits；BestEffort：未定义任何 requests 或 limits。",
        difficulty: "进阶"
    },

    // ========== 第7部分：容器探针 ==========

    {
        module: "容器",
        question: "Kubernetes 提供哪些类型的探针？",
        type: "多选",
        options: [
            "livenessProbe（存活探针）",
            "readinessProbe（就绪探针）",
            "startupProbe（启动探针）",
            "performanceProbe（性能探针）"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 提供三种探针：livenessProbe（检测应用是否运行，失败则重启容器）、readinessProbe（检测应用是否准备好接收流量，失败则从 Service 中移除）、startupProbe（检测慢启动应用是否启动）。没有性能探针。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "存活探针（livenessProbe）的作用是什么？",
        type: "单选",
        options: [
            "检测应用是否准备好接收流量",
            "检测应用是否仍在运行，失败则重启容器",
            "检测应用是否已启动",
            "监控应用性能"
        ],
        answer: [1],
        explanation: "存活探针（livenessProbe）检测应用是否仍在运行，当探针失败时，kubelet 会重启容器。存活探针用于处理应用死锁等无法自动恢复的情况。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "就绪探针（readinessProbe）的作用是什么？",
        type: "单选",
        options: [
            "检测应用是否仍在运行，失败则重启容器",
            "检测应用是否准备好接收流量，失败则从 Service 的 Endpoints 中移除",
            "检测应用是否已启动",
            "监控应用性能"
        ],
        answer: [1],
        explanation: "就绪探针（readinessProbe）检测应用是否准备好接收流量，失败则从 Service 的 Endpoints 中移除，暂时停止接收流量。就绪探针失败时不会重启容器。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "启动探针（startupProbe）的用途是什么？",
        type: "单选",
        options: [
            "检测应用是否停止",
            "用于慢启动应用，在应用启动前禁用其他探针",
            "检测应用是否准备好接收流量",
            "检测应用性能"
        ],
        answer: [1],
        explanation: "启动探针（startupProbe）用于慢启动应用。在启动探针成功之前，其他探针（存活探针和就绪探针）不会执行，避免在应用启动过程中被当作失败而重启或从 Service 中移除。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "探针支持哪些处理方式？",
        type: "多选",
        options: [
            "Exec（容器内执行命令）",
            "HTTPGet（HTTP GET 请求）",
            "TCPSocket（TCP 连接检查）",
            "GRPC"
        ],
        answer: [0, 1, 2],
        explanation: "探针支持三种处理方式：Exec（在容器内执行命）、HTTPGet（向容器内的端点执行 HTTP GET 请求）、TCPSocket（打开到容器的 TCP 连接）。Kubernetes 1.24+ 支持 GRPC 探针（通过 grpcProbe）。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "什么是探针的 periodSeconds？",
        type: "单选",
        options: [
            "探针超时时间",
            "探针执行的时间间隔",
            "探针重试次数",
            "探针初始延迟"
        ],
        answer: [1],
        explanation: "探针的 periodSeconds 是探针执行的时间间隔（默认 10 秒）。探针的其他参数包括：timeoutSeconds（超时时间，默认 1 秒）、successThreshold（成功阈值，默认 1， startupProbe 默认 30）、failureThreshold（失败阈值，默认 3）、initialDelaySeconds（初始延迟）。",
        difficulty: "基础"
    },

    // ========== 第8部分：容器网络 ==========

    {
        module: "容器",
        question: "Pod 中的容器如何相互通信？",
        type: "单选",
        options: [
            "通过各自的 IP 地址",
            "通过 localhost 和端口",
            "通过 Service 名称",
            "通过节点 IP"
        ],
        answer: [1],
        explanation: "由于 Pod 中的容器共享网络命名空间（同一个 IP 地址和端口空间），它们可以通过 localhost 和端口相互通信。不需要使用各自的 IP 地址或 Service 名称通信。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "Pod 中的容器共享什么？",
        type: "多选",
        options: [
            "网络命名空间（IP 地址和端口空间）",
            "存储卷（Volume）",
            "进程命名空间（共享 PID）",
            "UTS 命名空间（共享主机名）"
        ],
        answer: [0, 1, 3],
        explanation: "Pod 中的容器共享：网络命名空间（同一个 IP 地址和端口空间）、存储卷（可以通过 emptyDir 或共享卷）、UTS 命名空间（相同的主机名）。默认情况下，容器不共享进程命名空间，除非设置了 shareProcessNamespace: true。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "如何设置容器监听的端口？",
        type: "多选",
        options: [
            "通过容器的 env 字段设置环境变量",
            "通过 Pod 的 spec.containers.ports 字段声明",
            "在容器镜像的 Dockerfile 中指定 EXPOSE",
            "在容器的 command 中指定"
        ],
        answer: [0, 1, 2, 3],
        explanation: "容器端口可以通过多种方式设置：在 POD 定义中通过 ports 字段声明（用于文档和某些网络策略）、在镜像 Dockerfile 中使用 EXPOSE（仅用于文档，实际监听由应用决定）、在容器的 command 或应用启动参数中指定、通过环境变量传递给应用。",
        difficulty: "基础"
    },

    // ========== 第9部分：容器存储 ==========

    {
        module: "容器",
        question: "emptyDir 卷的特点是什么？",
        type: "多选",
        options: [
            "当 Pod 被删除时，卷中的数据会被删除",
            "Pod 中的容器可以共享 emptyDir 卷",
            "emptyDir 数据持久化到节点上",
            "emptyDir 确保数据持久化"
        ],
        answer: [0, 1],
        explanation: "emptyDir 卷的特点：当 Pod 被删除时，emptyDir 卷中的数据会被删除、Pod 中的容器可以共享 emptyDir 卷。emptyDir 可以是节点的磁盘、内存（emptyDir.medium: Memory）等。emptyDir 不保证数据持久化，用于临时存储。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "hostPath 卷的用途是什么？",
        type: "多选",
        options: [
            "将节点上的文件或目录挂载到 Pod 中",
            "访问节点上的系统信息",
            "提供持久化存储",
            "实现 Pod 间数据共享"
        ],
        answer: [0, 1, 2],
        explanation: "hostPath 卷用于将节点上的文件或目录挂载到 Pod 中，典型应用场景包括：访问节点上的系统信息、在 Pod 内使用节点文件系统做持久化存储（与节点绑定）。hostPath 卷不适合 Pod 间数据共享，因为 Pod 被调度到不同节点时数据不会同步。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "如何选择卷类型？",
        type: "多选",
        options: [
            "emptyDir：临时存储，Pod 删除时数据删除",
            "hostPath：需要访问节点文件系统或与节点绑定的数据",
            "PVC/PV：持久化存储，独立于 Pod 和节点",
            "ConfigMap/Secret：配置和敏感信息"
        ],
        answer: [0, 1, 2, 3],
        explanation: "卷类型选择：emptyDir（临时存储，Pod 删除时数据删除）、hostPath（需要访问节点文件系统或与节点绑定的数据）、PVC/PV（持久化存储，独立于 Pod 和节点）、ConfigMap/Secret（配置和敏感信息）。应根据数据持久性要求、数据共享需求、网络需求选择。",
        difficulty: "进阶"
    },

    // ========== 第10部分：容器命令和参数 ==========

    {
        module: "容器",
        question: "Pod 中如何设置容器启动的命令和参数？",
        type: "多选",
        options: [
            "command 字段：覆盖镜像的 ENTRYPOINT",
            "args 字段：覆盖镜像的 CMD",
            "不设置：使用镜像的 ENTRYPOINT 和 CMD",
            "通过环境变量设置"
        ],
        answer: [0, 1, 2],
        explanation: "Pod 中设置容器启动命令和参数：command 字段覆盖镜像的 ENTRYPOINT、args 字段覆盖镜像的 CMD、不设置时使用镜像文件。如果不设置 command 而设置 args，args 会作为 ENTRYPOINT 的参数。不是通过环境变量设置的。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "当在 Pod 中设置 command 字段但不设置 args 字段时，会发生什么？",
        type: "单选",
        options: [
            "容器报错",
            "Command 作为 ENTRYPOINT，镜像的 CMD 完全被忽略",
            "Command 作为 CMD",
            "使用镜像的默认配置"
        ],
        answer: [1],
        explanation: "当在 Pod 中设置 command 字段但不设置 args 字段时，command 作为 ENTRYPOINT，镜像的 CMD 完全被忽略。如果只想覆盖 CMD 而不设置 ENTRYPOINT，可以在 Pod 中只设置 args。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "如何在 Kubernetes 中动态传递命令参数？",
        type: "单选",
        options: [
            "无法动态传递",
            "通过环境变量或 ConfigMap 注入，然后在 args 字段引用",
            "必须修改镜像",
            "通过 annotations"
        ],
        answer: [1],
        explanation: "可以在 args 字段中使用 env 字段引用的环境变量，这些变量可以从 EnvVarSource（如 ConfigMapKeyRef、SecretKeyRef、FieldRef、ResourceFieldRef）动态注入。无需修改镜像，也无需使用 annotations。",
        difficulty: "进阶"
    },

    // ========== 第11部分：容器终止和信号 ==========

    {
        module: "容器",
        question: "当 Pod 被删除时，容器如何终止？",
        type: "多选",
        options: [
            "容器接收到 SIGTERM 信号",
            "容器执行 PreStop 钩子（如果定义）",
            "等待 terminationGracePeriodSeconds",
            "如果容器在超时后仍不退出，会接到 SIGKILL"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Pod 删除时容器终止流程：容器接收到 SIGTERM 信号、容器执行 PreStop 钩子（如果定义）、等待 terminationGracePeriodSeconds（默认 30 秒）、如果容器在超时后仍不退出，会接到 SIGKILL 强制终止。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "terminationGracePeriodSeconds 的作用是什么？",
        type: "单选",
        options: [
            "限制容器启动时间",
            "限制 Pod 终止前等待容器优雅关闭的时长",
            "限制容器内存使用",
            "限制容器 CPU 使用"
        ],
        answer: [1],
        explanation: "terminationGracePeriodSeconds 限制 Pod 终止前等待容器优雅关闭的时长（默认 30 秒），包括 SIGTERM 信号和 PreStop 钩子的执行时间。超时后容器会被 SIGKILL 强制终止。",
        difficulty: "进阶"
    },

    // ========== 第12部分：容器镜像拉取 ==========

    {
        module: "容器",
        question: "如何配置容器镜像拉取策略？",
        type: "多选",
        options: [
            "Always：总是拉取镜像",
            "IfNotPresent：本地不存在时拉取",
            "Never：不拉取，仅使用本地镜像",
            "Once：启动时拉取一次"
        ],
        answer: [0, 1, 2],
        explanation: "容器镜像拉取策略有三种：Always（总是拉取镜像，适合使用 :latest 标签）、IfNotPresent（本地不存在时拉取，默认策略）、Never（不拉取，仅使用本地镜像）。没有 Once 选项。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "如何访问私有容器镜像仓库？",
        type: "多选",
        options: [
            "通过 imagePullSecrets 为 Pod 提供凭据",
            "在节点上配置 Docker 配置文件",
            "在节点上配置容器运行时的认证",
            "修改 Kubernetes 源码"
        ],
        answer: [0, 1, 2],
        explanation: "访问私有容器镜像仓库的方式：为 Pod 设置 imagePullSecrets（Secret 类型为 docker-registry）、在节点上配置 Docker 配置文件（适用于 dockershim）或容器运行时的认证配置。不建议修改 Kubernetes 源码。",
        difficulty: "进阶"
    },
    {
        module: "容器",
        question: "imagePullSecrets 的作用是什么？",
        type: "单选",
        options: [
            "存储容器镜像",
            "提供拉取私有容器镜像仓库的凭据",
            "公开容器镜像",
            "备份容器镜像"
        ],
        answer: [1],
        explanation: "imagePullSecrets 用于提供拉取私有容器镜像仓库（如 DockerHub、私有镜像仓库）的凭据（用户名和密码）。通过创建类型为 docker-registry 的 Secret，并在 Pod 的 imagePullSecrets 字段引用。",
        difficulty: "基础"
    },

    // ========== 第13部分：容器镜像构建优化 ==========

    {
        module: "容器",
        question: "多阶段构建（Multi-stage Build）的优势是什么？",
        type: "多选",
        options: [
            "减小最终镜像体积",
            "分离编译和运行环境",
            "提高镜像安全性（不包含源代码和编译工具）",
            "加快镜像部署速度（不需要额外步骤）"
        ],
        answer: [0, 1, 2],
        explanation: "多阶段构建的优势：减小最终镜像体积（仅包含运行时依赖和编译产物）、分离编译和运行环境（减少攻击面）、提高镜像安全性（不包含源代码、编译器和开发工具）。需要注意的是镜像构建时间不会减少，但部署速度可能因镜像体积减小而加快。",
        difficulty: "进阶"
    },

    // ========== 第14部分：容器调度和资源计算 ==========

    {
        module: "容器",
        question: "Pod 的资源请求是如何计算的？",
        type: "单选",
        options: [
            "取 Pod 中所有容器的资源请求的最大值",
            "取 Pod 中所有容器的资源请求的最小值",
            "取 Pod 中所有容器的资源请求的总和",
            "取 Pod 中第一个容器的资源请求"
        ],
        answer: [2],
        explanation: "Pod 的资源请求是其所有容器资源请求的总和。调度器根据 Pod 的总资源请求（CPU 和内存）选择资源充足的节点。确保 Pod 内所有容器能同时获得所需的资源。",
        difficulty: "进阶"
    },

    // ========== 第15部分：容器状态和重启策略 ==========

    {
        module: "容器",
        question: "容器重启策略（restartPolicy）有哪些类型？",
        type: "多选",
        options: [
            "Always：总是重启",
            "OnFailure：容器异常退出时重启（退出码非0）",
            "Never：不重启",
            "WhenError：错误时重启"
        ],
        answer: [0, 1, 2],
        explanation: "容器重启策略类型：Always（总是重启，适用于长期运行的守护进程）、OnFailure（容器异常退出时重启，退出码非0，适用于批处理任务）、Never（不重启，适用于任务失败需要手动排查）。没有 WhenError 选项。",
        difficulty: "基础"
    },
    {
        module: "容器",
        question: "当容器正常退出（退出码为 0）时，不同重启策略的行为是什么？",
        type: "单选",
        options: [
            "Always 和 OnFailure 都会重启，Never 不会重启",
            "Always 会重启，OnFailure 和 Never 不会重启",
            "所有策略都不会重启容器",
            "OnFailure 会重启，Always 和 Never 不会重启"
        ],
        answer: [1],
        explanation: "当容器正常退出（退出码为 0）时，不同重启策略的行为：Always（无论退出码如何都会重启容器，用于守护进程）、OnFailure（仅在退出码非 0 时重启，成功退出不重启）、Never（不重启容器）。restartPolicy 在 Pod 级别设置，适用于 Pod 内的所有容器。注意：对于由 Deployment 等控制器管理的 Pod，控制器会根据副本数自动重建 Pod，不依赖 restartPolicy。",
        difficulty: "进阶"
    }
];

const modules = ["容器"];
