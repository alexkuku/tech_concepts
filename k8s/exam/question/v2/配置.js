// Kubernetes 概念测评 - 配置 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 45
// 覆盖: 配置

const questions = [
    {
        module: "配置",
        question: "ConfigMap 的主要用途是什么？",
        type: "单选",
        options: [
            "存储敏感密码信息",
            "存储非机密数据，如配置信息",
            "管理网络策略",
            "监控容器健康"
        ],
        answer: [1],
        explanation: "ConfigMap 用于存储非机密数据，如配置信息，以键值对形式存在。可以挂载到 Pod 中作为环境变量或文件，实现配置与容器镜像的分离。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "ConfigMap 如何注入到 Pod？",
        type: "多选",
        options: [
            "作为环境变量",
            "通过 envFrom 将所有键值作为环境变量注入",
            "作为卷挂载为文件",
            "通过 annotations"
        ],
        answer: [0, 1, 2],
        explanation: "ConfigMap 可以通过：作为环境变量（使用 valueFrom.configMapKeyRef）、envFrom 将所有键值作为环境变量注入、作为卷挂载为文件。不通过 annotations 注入。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "Secret 的特点是什么？",
        type: "多选",
        options: [
            "数据以 base64 编码存储",
            "比 ConfigMap 更安全",
            "可以通过卷挂载或环境变量注入 Pod",
            "数据以明文存储"
        ],
        answer: [0, 1, 2],
        explanation: "Secret 存储敏感信息如密码、OAuth 令牌等，数据以 base64 编码存储，比 ConfigMap 更安全。可以通过卷挂载或环境变量注入 Pod。注意 base64 是编码不是加密。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "Secret 可以存储哪些类型的数据？",
        type: "多选",
        options: [
            "Docker Registry 凭据",
            "TLS 证书和私钥",
            "OAuth 令牌",
            "用户密码"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Secret 可以存储多种类型敏感数据：Docker Registry 凭据（imagePullSecret）、TLS 证书和私钥（type: kubernetes.io/tls）、OAuth 令牌、普通用户密码等。通过 base64 编码存储。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "ConfigMap 数据更新后，使用它的 Pod 会自动更新吗？",
        type: "单选",
        options: [
            "是的，自动更新",
            "只有挂载为文件时自动更新，环境变量不会更新",
            "需要重启 Pod 才能更新",
            "无法更新，必须删除重建"
        ],
        answer: [1],
        explanation: "ConfigMap 挂载为文件时会自动更新（kubelet 定期同步更改），但作为环境变量注入的不会更新（需要重启 Pod）。如需环境变量更新，可以通过 restart 容器或滚动更新策略。",
        detail: "自动挂载更新由 kubelet 的 syncPeriod 控制（默认 1 分钟）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "存活探针的作用是什么？",
        type: "单选",
        options: [
            "检测应用是否准备好接收流量",
            "检测应用是否仍在运行，失败则重启容器",
            "检测应用是否已启动",
            "监控应用性能"
        ],
        answer: [1],
        explanation: "存活探针检测应用是否仍在运行，失败则重启容器。适用于检测死锁或应用崩溃等无法自动恢复的情况。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "就绪探针与存活探针的区别是什么？",
        type: "多选",
        options: [
            "存活探针失败会重启容器，就绪探针失败从 Service 中移除",
            "存活探针检测运行状态，就绪探针检测流量就绪状态",
            "就绪探针用于流量控制，存活探针用于故障恢复",
            "没有区别"
        ],
        answer: [0, 1, 2],
        explanation: "区别：存活探针检测运行状态，失败重启容器；就绪探针检测流量就绪状态，失败从 Service 中移除，可用于启动期间或临时性故障后控制流量。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "容器资源请求和限制的作用是什么？",
        type: "单选",
        options: [
            "限制容器 CPU 使用",
            "声明容器资源需求和限制，用于调度和资源控制",
            "容器的网络限制",
            "容器的存储配额"
        ],
        answer: [1],
        explanation: "资源请求和限制：声明容器需要的最小资源量（用于调度）和最大资源量（用于控制）。Kubernetes 根据 requests 决定 Pod 调度到有足够资源的节点。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "什么是 QoS（服务质量）等级？",
        type: "单选",
        options: [
            "网络服务质量",
            "根据容器资源请求和限制确定优先级",
            "存储质量",
            "服务性能等级"
        ],
        answer: [1],
        explanation: "QoS（服务质量）等级根据容器的 requests 和 limits 确定，用于资源回收（驱逐）时的优先级。有三个等级：Guaranteed（最高优先级）、Burstable、BestEffort（最低优先级）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "kubeconfig 文件有什么用途？",
        type: "多选",
        options: [
            "存储集群访问配置",
            "存储用户认证信息",
            "组织多个集群和上下文",
            "管理容器镜像配置"
        ],
        answer: [0, 1, 2],
        explanation: "kubeconfig 文件用于存储集群访问配置、用户认证信息、上下文（cluster 和 user 的关联）。可以配置多个集群和用户，无需手动输入配置。不是管理容器镜像配置。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "如何使用 kubectl 切换上下文？",
        type: "单选",
        options: [
            "kubectl use-context <context>",
            "kubectl config use-context <context>",
            "kubectl switch-context <context>",
            "kubectl context <context>"
        ],
        answer: [1],
        explanation: "使用 kubectl config use-context <context> 切换上下文。上下文是 cluster、user 和 namespace 的组合。常用命令：kubectl config get-contexts（列出上下文）、kubectl config current-context（显示当前上下文）。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "ConfigMap 的 data 字段和 binaryData 字段有什么区别？",
        type: "单选",
        options: [
            "没有区别",
            "data 以字符串形式存储，binaryData 以 base64 存储二进制数据",
            "binaryData 自动解密",
            "data 不能被挂载为文件"
        ],
        answer: [1],
        explanation: "data 字段存储字符串形式的配置，binaryData 存储二进制数据（如图片、压缩包）以 base64 编码。两者都可以挂载为文件，但 data 更适合文本配置。binaryData 的大小有 1MB 限制。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何从 ConfigMap 中只选择部分键挂载到容器？",
        type: "多选",
        options: [
            "使用 volumeMounts 的 subPath 指定单个文件",
            "使用 volume 的 items 列表指定需要挂载的键",
            "使用 envFrom 时可以指定 prefix",
            "无法选择，必须全部挂载"
        ],
        answer: [1, 2],
        explanation: "从 ConfigMap 选择部分键：使用 volume 的 items 列表（items: - key: app.properties, path: config.properties）、使用 envFrom 指定 prefix（添加前缀到环境变量名）。subPath 是用来挂载单个文件但不覆盖目录其他内容的。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何查看 Secret 中存储的数据？",
        type: "多选",
        options: [
            "kubectl get secret <name> -o yaml 显示原始的 base64 数据",
            "kubectl get secret <name> -o jsonpath='{.data.<key>}' 显示键的 base64 数据",
            "kubectl describe secret <name> 不显示实际数据（只显示大小和类型）",
            "直接查看 secret 文件"
        ],
        answer: [0, 1, 2],
        explanation: "查看 Secret 数据：kubectl get secret <name> -o yaml（显示原始 base64）、kubectl get secret <name> -o jsonpath（显示指定键的 base64）、kubectl describe secret（不显示实际数据）。base64 数据可以通过 echo <base64> | base64 -d 解码。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "如何使用 Secret 拉取私有镜像仓库的镜像？",
        type: "单选",
        options: [
            "在 Pod 中设置 imagePullSecrets 字段",
            "在 ConfigMap 中设置",
            "自动从 .docker/config.json 读取",
            "无法使用 Secret 拉取镜像"
        ],
        answer: [0],
        explanation: "在 Pod 中设置 imagePullSecrets 字段引用 Secret（type: kubernetes.io/dockerconfigjson），Secret 包含 Docker registry（如 Docker Hub）的认证信息。也可以在 ServiceAccount 中设置默认 imagePullSecret。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "Kubernetes 探针类型有哪些？",
        type: "多选",
        options: [
            "HTTP 探针",
            "TCP 探针",
            "Exec 探针",
            "gRPC 探针"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 支持四种探针类型：HTTP（httpGet 检测 HTTP 端点）、TCP（tcpSocket 检测端口可连接性）、Exec（exec 执行命令）、gRPC（grpcAction 检查 gRPC 服务，Kubernetes 1.24+）。不同的应用程序类型适合不同的探针类型。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "配置探针的 initialDelaySeconds 参数作用是什么？",
        type: "单选",
        options: [
            "探针失败后的等待时间",
            "容器启动后初次执行探针前的等待时间",
            "探针执行的超时时间",
            "两次探针之间的间隔"
        ],
        answer: [1],
        explanation: "initialDelaySeconds 指定容器启动后首次执行探针前的等待时间（默认 0），用于给容器时间启动应用。如果设置过短（低于应用启动时间），可能导致探针检测失败（重启容器）。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "配置探针的 periodSeconds 参数作用是什么？",
        type: "单选",
        options: [
            "初次执行探针前的等待时间",
            "两次探针之间的间隔（默认 10 秒）",
            "探针失败后的等待时间",
            "探针执行的超时时间"
        ],
        answer: [1],
        explanation: "periodSeconds 指定探针执行的间隔时间（默认 10 秒）。对于高频检测应用健康可以设置较小的值（如 1-5 秒），但会增加 kubelet 的压力。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "配置探针的 timeoutSeconds 参数作用是什么？",
        type: "单选",
        options: [
            "两次探针之间的间隔",
            "探针执行的超时时间（默认 1 秒）",
            "初次探针前的等待时间",
            "连续失败多少次触发动作"
        ],
        answer: [1],
        explanation: "timeoutSeconds 指定探针执行的超时时间（默认 1 秒），超时视为失败。对于慢响应的应用可以适当增加（如 5 秒）。注意超时时间应小于 periodSeconds。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "配置探针的 successThreshold 参数作用是什么？",
        type: "单选",
        options: [
            "连续多少次成功视为容器恢复就绪",
            "连续多少次失败视为探针失败",
            "执行探针的最小次数",
            "探针的权重"
        ],
        answer: [0],
        explanation: "successThreshold 指定连续多少次成功视为容器通过探针（默认 1）。适用于就绪探针和启动探针，例如应用启动时需要几次数据库连接尝试。存活探针通常设置为 1。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "配置探针的 failureThreshold 参数作用是什么？",
        type: "单选",
        options: [
            "连续多少次成功视为通过",
            "连续多少次失败视为容器不健康（默认 3）",
            "探针失败后的等待时间",
            "探针的权重"
        ],
        answer: [1],
        explanation: "failureThreshold 指定连续多少次失败视为容器不健康（默认 3）。可以调整容错率（如设置为 5 允许更宽容的网络波动）。设置为 1 时探针立即触发重启或从 Service 移除。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "什么是启动探针（startupProbe）？",
        type: "单选",
        options: [
            "检测容器是否准备好接收流量",
            "检测容器是否仍在运行",
            "检测容器是否启动完成，期间禁用其他探针",
            "检测应用逻辑"
        ],
        answer: [2],
        explanation: "启动探针用于检测容器是否启动完成。在启动探针成功前，禁用存活探针和就绪探针，避免启动慢的应用被不必要地重启。适用于启动时间长（超过 initialDelaySeconds）的应用。",
        detail: "不设置 startupProbe 则所有探针立即开始执行。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "为什么需要同时配置存活探针和就绪探针？",
        type: "多选",
        options: [
            "存活探针保证应用运行，就绪探针控制流量",
            "存活探针失败重启容器，就绪探针失败从 Service 移除",
            "应用启动期间可能需要处理初始化流量",
            "没有区别，只需配置一个"
        ],
        answer: [0, 1, 2],
        explanation: "同时配置两者的原因：存活探针保证应用运行（如重启应用死锁）、就绪探针控制流量（如启动期间不加流量或移除不稳定的实例）。两者结合实现健康检查和流量控制。仅配置存活探针会导致不健康的服务继续接收流量（应用可能响应错误）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何选择适合的探针类型（HTTP/TCP/Exec）？",
        type: "多选",
        options: [
            "HTTP 检测适合提供 HTTP 站点的应用",
            "TCP 检测适合需要验证端口可连接（但不提供 HTTP）的应用",
            "Exec 执行命令适合自定义检测逻辑",
            "gRPC 适合 gRPC 服务"
        ],
        answer: [0, 1, 2, 3],
        explanation: "探针类型选择：HTTP 检测适合 Web 应用（检测健康端点如 /health）、TCP 检测适合需要验证端口可连接（如数据库应用）、Exec 适合自定义检测逻辑（如检查特定文件存在）、gRPC 适合 gRPC 服务（HealthCheck）。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "容器资源 requests（请求）的作用是什么？",
        type: "多选",
        options: [
            "声明容器需要的最小资源量",
            "用于调度决策",
            "决定 QoS 等级",
            "不能超过 limits"
        ],
        answer: [0, 1, 2],
        explanation: "requests 的作用：声明容器需要的最小资源量（CPU、内存）、用于调度决策（确保节点有足够资源）、影响 QoS 等级。requests 可以小于 limits，影响容器在资源紧张时的行为。",
        detail: "未设置 requests 默认为等于 limits 或零（取决于后端配置）。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "容器资源 limits（限制）的作用是什么？",
        type: "多选",
        options: [
            "限制容器最大资源使用",
            "CPU 限制可以被超过（受 CFS 配额影响）",
            "内存限制超出会被 OOM Kill",
            "决定了容器的 QoS 等级",
        ],
        answer: [0, 1, 2, 3],
        explanation: "limits 的作用：限制容器最大资源使用、CPU 限制可以被超出一定时间（CFS 机制）、内存限制超出被 OOM Kill（重启容器）、影响 QoS 等级（与 requests 比较确定）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "Guaranteed QoS 等级是如何确定的？",
        type: "单选",
        options: [
            "容器只设置了 requests",
            "容器设置了 requests 且 requests 等于 limits",
            "容器只设置了 limits",
            "容器未设置 requests 和 limits"
        ],
        answer: [1],
        explanation: "Guaranteed QoS 等级要求：容器的 CPU 和内存都设置了 requests 且 requests 等于 limits（即精确的资源分配）。Guaranteed 具有最高优先级，在资源回收时最后被驱逐。",
        detail: "Pod 中所有容器都满足条件则 Pod 为 Guaranteed，否则降级为 Burstable 或 BestEffort。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "BestEffort QoS 等级是如何确定的？",
        type: "单选",
        options: [
            "容器设置了 requests 等于 limits",
            "容器只设置了 requests",
            "容器未设置任何 requests 和 limits",
            "容器只设置了 limits"
        ],
        answer: [2],
        explanation: "BestEffort QoS 等级要求：容器未设置任何 requests 和 limits（即不限制资源）。BestEffort 优先级最低，在资源回收时优先被驱逐（如内存不足、CPU 紧张）。",
        detail: "BestEffort 适合不关心资源控制的临时任务或测试应用。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "Burstable QoS 等级适用于什么场景？",
        type: "单选",
        options: [
            "容器资源需求精确且固定",
            "容器资源需求波动或未设置全部 requests 和 limits",
            "容器无需任何资源限制",
            "无法确定的场景"
        ],
        answer: [1],
        explanation: "Burstable QoS 等级适用于资源需求波动或设置了 requests 但未设置 limits / requests 不等于 limits 的场景。Burstable 在资源紧张时有中等优先级。",
        detail: "大多数应用适合使用 Burstable（如设置了内存 requests 但未设置 limits 以允许内存弹性增长）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何通过 limitRange 配置默认资源限制？",
        type: "多选",
        options: [
            "在命名空间中创建 LimitRange 对象",
            "设置 default 字段为未设置 limits 的容器提供默认限制",
            "设置 defaultRequest 字段为未设置 requests 的容器提供默认请求",
            "LimitRange 作用于整个集群"
        ],
        answer: [0, 1, 2],
        explanation: "LimitRange 在命名空间中配置资源默认值：default 字段为未设置 limits 的容器提供默认限制、defaultRequest 字段为未设置 requests 的容器提供默认请求。LimitRange 作用于命名空间，避免未配置资源的容器使用过多资源。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何通过 ResourceQuota 配置命名空间的资源限额？",
        type: "多选",
        options: [
            "在命名空间中创建 ResourceQuota 对象",
            "设置 requests.cpu 限制 CPU 请求总量",
            "设置 limits.memory 限制内存限制总量",
            "设置 pods 数量限制"
        ],
        answer: [0, 1, 2, 3],
        explanation: "ResourceQuota 配置命名空间资源上限：requests.cpu/memory 限制资源请求总量（防止过度预留）、limits.cpu/memory 限制资源限制总量（防止过度分配）、配置对象数量限制（pods、services 等）。资源消耗超出 Quota 后对象创建失败（Pending）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何使用 kubectl 创建 ConfigMap？",
        type: "多选",
        options: [
            "kubectl create configmap <name> --from-file=<path>",
            "kubectl create configmap <name> --from-literal=<key>=<value>",
            "kubectl create -f configmap.yaml",
            "kubectl create cm <name> --from-env-file=<file>"
        ],
        answer: [0, 1, 2, 3],
        explanation: "创建 ConfigMap 方法：--from-file 指定文件或目录（文件名作为键）、--from-literal 指定键值对（适合少量配置）、--from-env-file 从 .env 文件读取、create -f 从 YAML 文件创建。适合配置管理（如应用配置文件）。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "如何使用 kubectl 创建 Secret？",
        type: "多选",
        options: [
            "kubectl create secret generic <name> --from-literal=<key>=<value>",
            "kubectl create secret generic <name> --from-file=<path>",
            "kubectl create secret tls <name> --cert=<cert> --key=<key>",
            "kubectl create secret docker-registry <name> --docker-server=<server> --docker-username=<user> --docker-password=<password>"
        ],
        answer: [0, 1, 2, 3],
        explanation: "创建 Secret 方法：create secret generic（通用 secret，支持 --from-literal --from-file）、tls（创建 TLS 证书）、docker-registry（创建 Docker 认证 secret 可以用作 imagePullSecrets）。注意输入的值自动编码为 base64。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "如何使用 ConfigMap 作为命令行参数注入容器？",
        type: "单选",
        options: [
            "直接在 args 中引用 ConfigMap 键",
            "通过 env 引用 ConfigMap 键后在 args 中使用 $(VAR_NAME) 引用环境变量",
            "无法使用 ConfigMap 作为命令行参数",
            "通过 command 引用 ConfigMap"
        ],
        answer: [1],
        explanation: "通过 env 从 ConfigMap 键生成环境变量，然后在 command 或 args 中使用 $(VAR_NAME) 引用环境变量。示例：env: - name: DB_URL, valueFrom: configMapKeyRef: ...; args: - '--db-url=$(DB_URL)'。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何使用 Secret 挂载为文件到容器？",
        type: "单选",
        options: [
            "通过 env 指定 Secret 键",
            "通过 volume 和 volumeMounts 挂载 Secret",
            "通过 annotations",
            "无法挂载为文件"
        ],
        answer: [1],
        explanation: "通过 volume 定义 secret 卷，volumeMounts 挂载到容器路径。示例：volumes: - name: secret-vol, secret: secretName: my-secret; volumeMounts: - name: secret-vol, mountPath: /etc/secrets。Secret 中的每对键值成为挂载目录下的文件。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "ConfigMap 和 Secret 的数据大小限制是多少？",
        type: "单选",
        options: [
            "没有限制",
            "1 MiB",
            "5 MiB",
            "10 MiB"
        ],
        answer: [1],
        explanation: "ConfigMap 和 Secret 的数据大小限制为 1 MiB（1,048,576 字节）。超过限制的创建会失败。超过 1 MiB 的配置或密钥应考虑其他存储方式（如挂载外部存储或使用 ConfigMap 分割多个键值对）。",
        detail: "限制由 etcd 的最大对象大小决定（默认 1.5 MiB）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何在 Pod 中引用默认的 ServiceAccount Secret？",
        type: "单选",
        options: [
            "在每个 Pod 中设置 serviceAccountName",
            "默认自动挂载，不需要手动配置",
            "通过 envFrom 引用 serviceAccount",
            "无法引用"
        ],
        answer: [1],
        explanation: "Pod 默认自动挂载所在命名空间的 default ServiceAccount 的 Secret 到 /var/run/secrets/kubernetes.io/serviceaccount/，包含 token、ca.crt 和 namespace。可用于与 API Server 通信（如 in-cluster 配置）。",
        detail: "可通过 automountServiceAccountToken=false 关闭。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何配置 Pod 不自动挂载 ServiceAccount token？",
        type: "多选",
        options: [
            "设置 automountServiceAccountToken: false",
            "设置 serviceAccountName 引用手动配置的 ServiceAccount",
            "在 Pod spec 中设置"
        ],
        answer: [0, 2],
        explanation: "在 Pod spec 中设置 automountServiceAccountToken: false 禁用默认 ServiceAccount Secret 挂载。也可引用一个设置了 automountServiceAccountToken: false 的 ServiceAccount。适用于不需要与 API Server 通信的工作负载（如纯后端任务）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何查看 Pod 的资源使用情况？",
        type: "多选",
        options: [
            "kubectl top pod <pod>",
            "kubectl describe pod <pod> 中查看资源",
            "Metrics Server 提供资源使用指标",
            "kubectl get pod -o wide"
        ],
        answer: [0, 1, 2],
        explanation: "查看 Pod 资源使用：kubectl top pod 显示实时 CPU 和内存使用（需要 Metrics Server）、kubectl describe pod 显示配置信息（包括 requests、limits、QoS）、Metrics Server 提供指标（kubectl top 命令使用）。",
        detail: "kubectl top pods -A 显示所有命名空间的 Pod 使用情况。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "如何设置 Pod 优雅终止？",
        type: "多选",
        options: [
            "设置 terminationGracePeriodSeconds 字段",
            "在容器中处理 SIGTERM 信号",
            "使用 preStop Hook 在终止前清理资源",
            "默认立即终止，无法配置"
        ],
        answer: [0, 1, 2],
        explanation: "Pod 优雅终止：设置 terminationGracePeriodSeconds（默认 30 秒）指定宽限期、在容器中监听并处理 SIGTERM 信号（执行清理），超时后发送 SIGTERM（Kubernetes 1.18+ 改为 SIGTERM 立即发送）、使用 preStop hook 在终止前执行命令。",
        detail: "terminationGracePeriodSeconds 超时后强制终止（SIGKILL）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "Pod 的 preStop Hook 有什么作用？",
        type: "单选",
        options: [
            "启动前验证容器是否可用",
            "终止前执行清理或注册下线操作",
            "定期检测容器健康",
            "控制流量"
        ],
        answer: [1],
        explanation: "preStop Hook 在容器终止前执行（在删除请求到达后），用于执行优雅的下线操作（如通知外部服务停止发送新流量、清理临时资源、关闭连接）。preStop 超时时间受 terminationGracePeriodSeconds 限制。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "Pod 的 postStart Hook 有什么作用？",
        type: "单选",
        options: [
            "终止前清理资源",
            "容器启动后立即执行命令",
            "定期检测容器健康",
            "控制流量"
        ],
        answer: [1],
        explanation: "postStart Hook 在容器创建后立即执行（在容器 ENTRYPOINT 之前），用于执行初始化操作（如启动辅助进程、加载配置）。注意 postStart 执行失败不会阻止容器启动，但可能影响应用正常运行。",
        detail: "postStart 和启动探针结合使用可覆盖复杂启动流程。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何配置多个容器共享同一 ConfigMap？",
        type: "单选",
        options: [
            "为每个容器分别定义 volume",
            "在 Pod 级别定义 volume，多个 volumeMounts 引用同一名",
            "无法共享",
            "需要复制 ConfigMap"
        ],
        answer: [1],
        explanation: "在 Pod 级别定义 volume，多个容器的 volumeMounts 可以引用同一名。容器间的挂载路径可以不同（实现不同容器访问同一数据）。ConfigMap 更新后挂载的文件会同步（kubelet 更新挂载点）。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何在部署中使用 ConfigMap 和 Secret 管理环境差异？",
        type: "多选",
        options: [
            "通过命名空间隔离不同环境的 ConfigMap",
            "使用 Helm 或 Kustomize 管理环境配置",
            "在每个部署中设置不同的 ConfigMap 名称",
            "直接将配置嵌入 Deployment"
        ],
        answer: [0, 1, 2],
        explanation: "管理环境差异：通过命名空间隔离（如 dev、prod 命名空间各自有 ConfigMap）、使用 Helm 或 Kustomize 模板化配置（环境变量或文件替换）、部署中引用不同同名 ConfigMap（不同命名空间）。不建议直接嵌入配置（无法灵活更新）。",
        difficulty: "高级"
    },
    {
        module: "配置",
        question: "如何使用 kubectl 从环境变量创建 ConfigMap？",
        type: "单选",
        options: [
            "kubectl create configmap <name> --from-env</source>",
            "kubectl create configmap <name> --from-env-file=<file>",
            "无法直接从环境创建，需要手动编辑",
            "kubectl create cm --env <name>"
        ],
        answer: [1],
        explanation: "使用 kubectl create configmap <name> --from-env-file=<file> 从 .env 文件创建 ConfigMap（每行为 KEY=VALUE 格式）。无法从 Shell 环境变量直接创建，可先将环境变量导出到文件再创建。",
        detail: "--from-env-file 支持多个文件，会合并键值（重复键后者覆盖前者）。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "如何使用 LimitRange 限制容器资源最小值？",
        type: "单选",
        options: [
            "设置 min 字段",
            "设置 maxLimitRequestRatio 字段",
            "设置 default 字段",
            "defaultRequest 字段"
        ],
        answer: [0],
        explanation: "LimitRange 的 min 字段设置容器资源请求的最小值（如 min: cpu: 100m, memory: 128Mi）。低于最小值的请求会拒绝创建（报错）。max 字段设置资源限制的最大值，default/maxLimitRequestRatio 限制请求与限制的比例。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "ResourceQuota 的 scope（作用域）字段有什么作用？",
        type: "多选",
        options: [
            "限制 Quota 只适用于指定资源（如 pods）",
            "通过 scope 字段可以设置 Quota 仅作用于特定 QoS 等级",
            "通过 scope 字段可以设置 Quota 仅作用于持久化存储",
            "未设置 scope 则默认作用于所有资源"
        ],
        answer: [1, 2, 3],
        explanation: "ResourceQuota 的 scope 字段设置作用域限制：Terminating（作用于有 activeDeadlineSeconds 的 Pod）、NotTerminating（作用于无 activeDeadlineSeconds 的 Pod）、BestEffort（只作用于 BestEffort QoS 的 Pod）、NotBestEffort（只作用于 Burstable 或 Guaranteed QoS）、StorageClass（限制使用特定存储类的 PVC）。",
        difficulty: "高级"
    },
    {
        module: "配置",
        question: "如何防止 CPU 节流影响应用性能？",
        type: "多选",
        options: [
            "设置 CPU requests 保证最小 CPU 时间",
            "设置 CPU limits 足够大或为 max",
            "使用 Guaranteed QoS 等级（requests = limits）",
            "监控 CPU 使用率并调整 requests"
        ],
        answer: [0, 1, 2],
        explanation: "防止 CPU 节流：设置 CPU requests 保证最小 CPU 时间（调度到有足够 CPU 的节点）、设置 CPU limits 足够大（或不设置，允许弹性使用）、使用 Guaranteed QoS 保证 CPU 资源（但需要精确控制）。监控 CPU 使用率可帮助调优 requests。",
        detail: "CPU requests 影响 CFS 配额分配，limits 影响 burst 能力。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "Kubernetes 的 ConfigMap 有哪些限制？",
        type: "多选",
        options: [
            "数据大小限制 1 MiB",
            "不支持挂载为环境变量的二进制数据",
            "更新后挂载为文件的 ConfigMap 不会自动同步",
            "不能跨命名空间引用"
        ],
        answer: [0, 3],
        explanation: "ConfigMap 限制：数据大小限制 1 MiB、不能跨命名空间引用（同一个命名空间内使用）。支持挂载为文件（支持自动同步）、支持环境变量（支持 binaryData）。跨命名空间引用需要通过复制或使用多命名空间工具。",
        difficulty: "进阶"
    },
    {
        module: "配置",
        question: "如何通过配置管理实现应用的金丝雀部署？",
        type: "多选",
        options: [
            "使用 ConfigMap 管理应用配置（如切换 API 版本）",
            "使用滚动更新逐步增加金丝雀副本",
            "使用 Service 或 Ingress 控制流量分配",
            "完全更新 ConfigMap 后再部署"
        ],
        answer: [0, 1, 2],
        explanation: "金丝雀部署：使用 ConfigMap 管理应用配置（如开关新功能点），使用滚动更新逐步增加金丝雀副本（如 Deployment replicas: 10 -> 金丝雀副本 2），使用 Service 或 Ingress（Header/权重）控制流量分配。完全更新 ConfigMap 会导致所有实例变化，不适合金丝雀。",
        difficulty: "高级"
    },
    {
        module: "配置",
        question: "如何使用 kubectl 从文件创建 Secret（自动 base64 编码）？",
        type: "单选",
        options: [
            "kubectl create secret generic <name> --from-file=<path>",
            "kubectl create secret generic <name> --file=<path>",
            "无需手动编码，kubectl 自动编码",
            "需要手动 base64 编码"
        ],
        answer: [0],
        explanation: "使用 kubectl create secret generic <name> --from-file=<path> 从文件创建 Secret，kubectl 会自动将文件内容进行 base64 编码。支持目录（读取目录下所有文件）。无需手动编码。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "探针的 exec 命令如何判断成功或失败？",
        type: "单选",
        options: [
            "命令退出码为 0 表示成功，非 0 表示失败",
            "命令有输出表示成功",
            "命令执行时间不超过 timeoutSeconds 表示成功",
            "命令执行完毕即表示成功"
        ],
        answer: [0],
        explanation: "exec 探针中，命令退出码为 0 表示成功（容器健康），非 0 表示失败（容器不健康）。适用于需要自定义检测逻辑的应用（如检查进程状态、验证文件存在）。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "kubeconfig 文件中的 clusters 字段表示什么？",
        type: "单选",
        options: [
            "用户信息",
            "上下文",
            "集群 API Server 配置",
            "命名空间"
        ],
        answer: [2],
        explanation: "kubeconfig 文件的 clusters 字段定义集群的 API Server 配置（server 地址、CA 证书）。contexts 字段关联 cluster 和 user。users 字段定义用户认证信息（客户端证书、token、用户名密码）。",
        detail: "kubectl config view 显示 kubeconfig 内容。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "如何使用 kubectl 设置默认命名空间？",
        type: "单选",
        options: [
            "kubectl config set namespace <namespace>",
            "kubectl set-context --namespace=<namespace>",
            "kubectl config set-context --current --namespace=<namespace>",
            "无法设置默认命名空间"
        ],
        answer: [2],
        explanation: "使用 kubectl config set-context --current --namespace=<namespace> 设置当前上下文的默认命名空间。后续 kubectl 命令（如果未指定 -n）会自动使用此命名空间。也可在 kubeconfig 中手动修改。",
        difficulty: "基础"
    },
    {
        module: "配置",
        question: "limitRange 的 maxLimitRequestRatio 有什么作用？",
        type: "单选",
        options: [
            "限制容器的 requests 最大值",
            "限制容器的 limits 最大值",
            "限制容器的 limits 与 requests 比例（防止过度分配）",
            "限制 Pod 副本数量"
        ],
        answer: [2],
        explanation: "maxLimitRequestRatio 限制容器的 limits 与 requests 比例（如 ratio: 2 表示 limits 不能超过 requests 的 2 倍）。用于防止用户请求少量资源但使用大量 limits 的过度分配行为。影响 QoS 等级。",
        difficulty: "高级"
    },
    {
        module: "配置",
        question: "如何查看命名空间的资源使用额限制？",
        type: "单选",
        options: [
            "kubectl describe namespace <namespace>",
            "kubectl get resourcequota",
            "kubectl get limitrange",
            "kubectl describe resourcequota"
        ],
        answer: [3],
        explanation: "使用 kubectl describe resourcequota 查看命名空间的 ResourceQuota 状态（已使用和总限额）。kubectl get resourcequota 列出所有 ResourceQuota。kubectl describe namespace 显示命名空间状态但不显示资源限制。",
        detail: "kubectl get resourcequota -A 显示所有命名空间的 ResourceQuota。",
        difficulty: "基础"
    }
];

const modules = ["配置"];
