// Kubernetes 概念测评 - 概述 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 65
// 覆盖: 概述

const questions = [
    // ========== 第1部分：Kubernetes基础概念 ==========

    {
        module: "概述",
        question: "Kubernetes 这个名称的希腊语原意是什么？",
        type: "单选",
        options: [
            "舵手或领航员",
            "管理者或控制者",
            "编排者或组织者",
            "守护者或护航者"
        ],
        answer: [0],
        explanation: "Kubernetes 来源于希腊语，意为舵手或领航员，这反映了它在容器编排中的导航作用。K8s 是 Kubernetes 的缩写，因为 K 和 s 之间有8个字母。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "Kubernetes 是何时由 Google 开源的？",
        type: "单选",
        options: [
            "2012年",
            "2014年",
            "2016年",
            "2018年"
        ],
        answer: [1],
        explanation: "Kubernetes 于2014年由 Google 开源，它结合了 Google 超过15年的生产环境经验，基于 Google 内部使用的 Borg 系统演化而来。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "Kubernetes 的核心设计目标是什么？",
        type: "多选",
        options: [
            "简化容器的编排和管理",
            "实现应用的自动化部署、扩展和管理",
            "提供声明式的配置和自动化",
            "完全替代 Docker 成为唯一的容器运行时"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 的核心目标是简化容器的编排和管理，实现应用的自动化部署、扩展和管理。它提供声明式的配置和自动化，但并不试图完全替代 Docker，而是作为容器编排平台工作在各种容器运行时之上。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "以下哪些是 Kubernetes 支持的核心特性？",
        type: "多选",
        options: [
            "服务发现和负载均衡",
            "存储编排",
            "自动化部署和回滚",
            "自动资源打包",
            "自愈能力",
            "水平扩展"
        ],
        answer: [0, 1, 2, 3, 4, 5],
        explanation: "Kubernetes 支持的核心特性包括：服务发现和负载均衡、存储编排、自动化部署和回滚、自动资源打包、自愈能力、密钥和配置管理、批量执行以及水平扩展。这些特性使得 Kubernetes 成为强大的容器编排平台。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "Kubernetes 是什么？",
        type: "单选",
        options: [
            "一个容器运行时",
            "一个可移植、可扩展的开源平台，用于管理容器化工作负载和服务",
            "一个云服务平台",
            "一个容器镜像仓库"
        ],
        answer: [1],
        explanation: "Kubernetes 是一个可移植、可扩展的开源平台，用于管理容器化工作负载和服务，它支持声明式配置和自动化。它不是容器运行时（如 Docker 或 containerd），也不是云服务商本身。",
        difficulty: "基础"
    },

    // ========== 第2部分：Kubernetes 对象和组件 ==========

    {
        module: "概述",
        question: "Pod 是什么？",
        type: "单选",
        options: [
            "Kubernetes 中最小的可部署计算对象，代表一组共享资源的容器",
            "一个容器运行时",
            "一个网络策略对象",
            "一个存储卷对象"
        ],
        answer: [0],
        explanation: "Pod 是 Kubernetes 中最小的可部署计算对象，代表一组共享存储和网络资源的容器。Pod 是 Kubernetes 执行、调度的基本单位，而不是单个容器。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "Kubernetes 标签的主要用途是什么？",
        type: "多选",
        options: [
            "组织和分类 Kubernetes 对象",
            "标识对象的重要特性",
            "用于选择器和查询对象",
            "加密敏感数据"
        ],
        answer: [0, 1, 2],
        explanation: "标签是键值对，用于组织和分类 Kubernetes 对象，标识对象的重要特性，并用于选择器和查询对象。标签使得集群管理和运维更加灵活和高效。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "命名空间的主要作用是什么？",
        type: "单选",
        options: [
            "隔离网络流量",
            "为跨多个团队提供资源隔离，避免资源命名冲突",
            "提高容器性能",
            "提供高可用性"
        ],
        answer: [1],
        explanation: "命名空间的主要作用是为多个团队或项目提供逻辑隔离机制，避免资源命名冲突。不同命名空间内的资源可以使用相同的名称，命名空间是集群级别的逻辑划分。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "以下哪些是 Kubernetes 对象必须具备的？",
        type: "多选",
        options: [
            "唯一的标识符",
            "Pod",
            "标签",
            "注解"
        ],
        answer: [0],
        explanation: "Kubernetes 对象必须拥有唯一的标识符。标签和注解是可选的，用于存储元数据。Pod 只是一个对象类型，不是所有对象都必须具备的。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "注解和标签的主要区别是什么？",
        type: "单选",
        options: [
            "注解用于标识对象，标签用于存储元数据",
            "标签用于组织和选择对象，注解用于存储非标识性元数据",
            "没有区别，可以互换使用",
            "注解是必需的，标签是可选的"
        ],
        answer: [1],
        explanation: "标签用于组织和选择对象，支持选择器查询。注解用于存储任意非标识性元数据，不能用于选择器，通常用于存储工具、库等使用的配置信息。",
        difficulty: "进阶"
    },

    // ========== 第3部分：控制平面组件 ==========

    {
        module: "概述",
        question: "kube-apiserver 的主要作用是什么？",
        type: "单选",
        options: [
            "调度 Pod 到节点",
            "管理容器运行时",
            "作为 Kubernetes 控制平面的前端，暴露 Kubernetes API",
            "监控集群健康状况"
        ],
        answer: [2],
        explanation: "kube-apiserver 是 Kubernetes 控制平面的前端，负责暴露 Kubernetes API，处理 REST 操作，并提供集群状态的权威视图。所有其他组件都通过 API Server 进行通信。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "etcd 在 Kubernetes 集群中的角色是什么？",
        type: "单选",
        options: [
            "容器运行时",
            "网络插件",
            "集群数据的一致性、高可用键值存储后端",
            "日志收集器"
        ],
        answer: [2],
        explanation: "etcd 是 Kubernetes 所有集群数据的一致性、高可用键值存储后端，用于存储集群的配置数据和状态信息。etcd 是 Kubernetes 控制平面的核心组件，确保数据的可靠性和一致性。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "kube-scheduler 的主要职责是什么？",
        type: "单选",
        options: [
            "管理容器生命周期",
            "监控新创建且未分配节点的 Pod，为其选择运行节点",
            "存储集群配置",
            "管理网络策略"
        ],
        answer: [1],
        explanation: "kube-scheduler 监控新创建且未分配节点的 Pod，根据资源需求、策略约束、亲和性等规则为其选择最适合的运行节点，并调度到该节点上。",
        difficulty: "基础"
    },
    {
        module: "概述",
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
        explanation: "kube-controller-manager 运行控制器进程，包括节点控制器、Job 控制器、EndpointSlice 控制器、ServiceAccount 控制器等。网络控制器通常属于 cloud-controller-manager 或网络插件。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "cloud-controller-manager 的用途是什么？",
        type: "单选",
        options: [
            "管理所有网络策略",
            "嵌入特定云供应商控制逻辑，将控制平面与特定云平台解耦",
            "替代 kube-apiserver",
            "提供本地存储管理"
        ],
        answer: [1],
        explanation: "cloud-controller-manager 嵌入特定云供应商控制逻辑，如节点控制器、路由控制器、服务控制器等，将控制平面与特定云平台解耦，便于在不同云平台间迁移。",
        difficulty: "进阶"
    },

    // ========== 第4部分：工作节点组件 ==========

    {
        module: "概述",
        question: "kubelet 在 Kubernetes 集群中的作用是什么？",
        type: "单选",
        options: [
            "管理集群网络",
            "每个节点上的代理，确保 PodSpec 中描述的容器正常运行",
            "调度 Pod 到节点",
            "存储集群数据"
        ],
        answer: [1],
        explanation: "kubelet 是运行在每个节点上的代理，负责确保 PodSpec 中描述的容器正常运行，包括下载容器镜像、启动容器、监控容器健康等。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "kube-proxy 的主要功能是什么？",
        type: "单选",
        options: [
            "管理容器运行时",
            "在每个节点上运行的网络代理，维护网络规则以允许 Pod 的网络通信",
            "存储集群配置",
            "监控节点健康状况"
        ],
        answer: [1],
        explanation: "kube-proxy 是在每个节点上运行的网络代理，维护节点上的网络规则（如 iptables 或 ipvs），实现 Service 的负载均衡和网络代理功能。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "Kubernetes 支持哪些容器运行时？",
        type: "多选",
        options: [
            "containerd",
            "CRI-O",
            "Docker Engine",
            "任何实现 CRI 的运行时"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 支持多种容器运行时，包括 containerd、CRI-O 以及任何实现容器运行时接口（CRI）的其他运行时。Docker Engine 通过 dockershim 或直接安装的 CRI 兼容组件也可以使用。",
        difficulty: "进阶"
    },

    // ========== 第5部分：Kubernetes API ==========

    {
        module: "概述",
        question: "Kubernetes API 的主要特点是什么？",
        type: "多选",
        options: [
            "RESTful 风格",
            "支持声明式 API 验证",
            "提供服务器端应用",
            "仅支持 JSON 格式",
            "不提供任何客户端库"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes API 是 RESTful 风格的，支持声明式 API 验证和服务器端应用。提供多种官方客户端库，支持 JSON 和 YAML 格式，是 Kubernetes 系统的核心交互接口。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "kubectl 是什么？",
        type: "单选",
        options: [
            "Kubernetes 的核心控制器",
            "Kubernetes 的主要命令行工具，用于管理和操作集群资源",
            "容器运行时",
            "网络插件"
        ],
        answer: [1],
        explanation: "kubectl 是 Kubernetes 的主要命令行工具，允许用户部署应用、检查和管理集群资源、查看日志等。它是与 Kubernetes API 交互的主要方式。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "以下哪些kubectl命令可以列出集群中的Pod？",
        type: "多选",
        options: [
            "kubectl get pods",
            "kubectl list pods",
            "kubectl get pod",
            "kubectl show pods"
        ],
        answer: [0, 2],
        explanation: "可以使用 'kubectl get pods' 或 'kubectl get pod' 列出集群中的 Pod。kubectl list pods 和 kubectl show pods 不是有效的命令。注意资源名称可以用单数或复数形式。",
        difficulty: "基础"
    },

    // ========== 第6部分：容器和Pod ==========

    {
        module: "概述",
        question: "Pod 中的容器共享什么资源？",
        type: "多选",
        options: [
            "网络命名空间（IP 地址、端口）",
            "存储卷",
            "进程命名空间",
            "UTS 命名空间",
            "PID 命名空间"
        ],
        answer: [0, 1, 3],
        explanation: "Pod 中的容器共享网络命名空间（同一个 IP 和端口空间）、存储卷和 UTS 命名空间（相同的 hostname）。默认情况下不共享进程命名空间和 PID 命名空间。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "Pod 中容器之间如何相互通信？",
        type: "单选",
        options: [
            "通过各自的 IP 地址和端口",
            "通过 localhost 和端口",
            "通过节点 IP",
            "通过 Service 名称"
        ],
        answer: [1],
        explanation: "由于 Pod 中的容器共享网络命名空间，它们可以通过 localhost 和端口相互通信。这是 Pod 设计的重要特性，使得容器之间能够紧密协作。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "为什么 Pod 是 Kubernetes 中最小的可部署计算对象？",
        type: "多选",
        options: [
            "Pod 中的容器共享网络和存储",
            "Pod 作为一个整体进行调度和管理",
            "Pod 具有生命周期，可以被创建、删除和替换",
            "Pod 可以直接访问容器镜像仓库"
        ],
        answer: [0, 1, 2],
        explanation: "Pod 是最小的可部署计算对象，因为：Pod 中的容器共享网络和存储、作为一个整体进行调度和管理、具有完整生命周期。访问容器镜像仓库是容器运行时的功能，不是 Pod 的特性。",
        difficulty: "进阶"
    },

    // ========== 第7部分：标签和选择器 ==========

    {
        module: "概述",
        question: "如何使用标签选择器选择带有特定标签的 Pod？",
        type: "单选",
        options: [
            "kubectl select pods --key=value",
            "kubectl get pods -l key=value",
            "kubectl filter pods key=value",
            "kubectl match pods key=value"
        ],
        answer: [1],
        explanation: "可以使用 'kubectl get pods -l key=value' 过滤带有特定标签的 Pod。-l 选项用于指定标签选择器。其他命令格式不正确。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "标签选择器支持哪些匹配类型？",
        type: "多选",
        options: [
            "等值匹配（=、==）",
            "不等值匹配（!=）",
            "集合匹配（in、notin）",
            "正则表达式匹配",
            "模糊匹配"
        ],
        answer: [0, 1, 2],
        explanation: "标签选择器支持等值匹配（=、== 表示相等，!= 表示不等）、集合匹配（in、notin、exists）。不支持正则表达式匹配和模糊匹配。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "以下哪些标签键和值是有效的？",
        type: "多选",
        options: [
            "app=nginx",
            "app.v1=web",
            "kubernetes.io/managed-by=helm",
            "123/invalid=value"
        ],
        answer: [0, 1, 2],
        explanation: "有效的标签键和值遵循这些规则：键由前缀和名称组成（可选前缀/名称）、名称最多253字符、前缀是DNS子域名、值最多63字符。'123/invalid' 以数字开头，不符合 DNS 子域名格式。",
        difficulty: "进阶"
    },

    // ========== 第8部分：注解和选择器 ==========

    {
        module: "概述",
        question: "注解可以用于什么场景？",
        type: "多选",
        options: [
            "记录对象的创建者信息",
            "存储工具和库的配置信息",
            "用于选择和筛选对象",
            "存储任意非标识性元数据"
        ],
        answer: [0, 1, 3],
        explanation: "注解可以存储任意非标识性元数据，如创建者信息、工具和库的配置信息等。注解不能用于选择和筛选对象，这是标签的功能。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "字段选择器和标签选择器的区别是什么？",
        type: "单选",
        options: [
            "没有区别，可以互换使用",
            "字段选择器基于对象的字段值筛选，标签选择器基于标签筛选",
            "字段选择器更加精确，标签选择器更简单",
            "字段选择器只能用于 Pod，标签选择器用于所有对象"
        ],
        answer: [1],
        explanation: "字段选择器基于对象的字段值（如 metadata.name、spec.nodeName）进行筛选，标签选择器基于标签进行筛选。它们是不同的选择机制，适用于不同的场景。",
        difficulty: "进阶"
    },

    // ========== 第9部分：命名空间 ==========

    {
        module: "概述",
        question: "默认情况下，Kubernetes 集群会创建哪些命名空间？",
        type: "多选",
        options: [
            "default",
            "kube-system",
            "kube-public",
            "kube-node-lease"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 集群默认创建四个命名空间：default（未指定命名空间的资源）、kube-system（Kubernetes 系统对象）、kube-public（所有用户可读）、kube-node-lease（节点租约）。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "命名空间和节点的区别是什么？",
        type: "单选",
        options: [
            "没有区别，是同一个概念",
            "命名空间是物理隔离，节点是逻辑隔离",
            "命名空间是多租户隔离的边界，节点是物理资源",
            "命名空间用于网络隔离，节点用于存储隔离"
        ],
        answer: [2],
        explanation: "命名空间是多租户隔离的逻辑边界，用于资源隔离和避免命名冲突。节点是物理或虚拟机，是运行的物理资源。它们是不同层次的隔离概念。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "以下哪些资源属于命名空间级别？",
        type: "多选",
        options: [
            "Pod",
            "Deployment",
            "Service",
            "Node",
            "Namespace",
            "PersistentVolume"
        ],
        answer: [0, 1, 2],
        explanation: "Pod、Deployment、Service 属于命名空间级别的资源。Node、Namespace、PersistentVolume 是集群级别的资源，不属于任何命名空间。",
        difficulty: "进阶"
    },

    // ========== 第10部分：持久卷和声明 ==========

    {
        module: "概述",
        question: "PersistentVolume 和 PersistentVolumeClaim 的关系是什么？",
        type: "单选",
        options: [
            "PV 和 PVC 是同一个概念的不同名称",
            "PV 是集群级别的存储资源，PVC 是用户对存储的请求",
            "PVC 是集群级别的存储资源，PV 是用户对存储的请求",
            "PV 和 PVC 没有关系，独立使用"
        ],
        answer: [1],
        explanation: "PersistentVolume（PV）是集群级别的存储资源，独立于 Pod 生命周期。PersistentVolumeClaim（PVC）是用户对存储的请求，用于绑定 PV 和 Pod 之间的存储需求。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "以下哪些是 Kubernetes 支持的 PV 访问模式？",
        type: "多选",
        options: [
            "ReadWriteOnce",
            "ReadOnlyMany",
            "ReadWriteMany",
            "ReadWriteOncePod"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 支持的 PV 访问模式包括：ReadWriteOnce（单节点读写）、ReadOnlyMany（多节点只读）、ReadWriteMany（多节点读写）、ReadWriteOncePod（单 Pod 读写）。",
        difficulty: "进阶"
    },

    // ========== 第11部分：ConfigMap和Secret ==========

    {
        module: "概述",
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
        module: "概述",
        question: "Secret 的特点是什么？",
        type: "多选",
        options: [
            "数据以 base64 编码存储",
            "比 ConfigMap 更安全",
            "可以通过卷挂载或环境变量注入 Pod",
            "数据以明文存储，不提供加密"
        ],
        answer: [0, 1, 2],
        explanation: "Secret 存储敏感信息如密码、OAuth 令牌等，数据以 base64 编码存储，比 ConfigMap 更安全。可以通过卷挂载或环境变量注入 Pod。注意 base64 不是加密，是编码。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "ConfigMap 和 Secret 的主要区别是什么？",
        type: "多选",
        options: [
            "Secret 用于存储敏感信息，ConfigMap 用于非机密数据",
            "Secret 数据以 base64 编码，ConfigMap 数据以明文存储",
            "Secret 有大小限制，ConfigMap 没有限制",
            "Secret 不能作为环境变量，ConfigMap 可以"
        ],
        answer: [0, 1],
        explanation: "Secret 和 ConfigMap 的主要区别：Secret 用于存储敏感信息，ConfigMap 用于非机密数据；Secret 数据以 base64 编码。两者都可以作为环境变量或文件挂载，都有 1MB 大小限制。",
        difficulty: "进阶"
    },

    // ========== 第12部分：服务发现 ==========

    {
        module: "概述",
        question: "Service 在 Kubernetes 中的作用是什么？",
        type: "多选",
        options: [
            "提供稳定的 IP 地址或主机名",
            "支持一个或多个后端 Pod",
            "实现负载数均衡网络流量",
            "管理容器的生命周期"
        ],
        answer: [0, 1, 2],
        explanation: "Service 提供稳定的 IP 地址或主机名，支持一个或多个后端 Pod（动态变化），实现负载均衡网络流量。它不负责管理容器的生命周期。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "Service 有哪些类型？",
        type: "多选",
        options: [
            "ClusterIP",
            "NodePort",
            "LoadBalancer",
            "ExternalName"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Service 主要有四种类型：ClusterIP（集群内部访问）、NodePort（通过节点端口暴露）、LoadBalancer（通过云提供商负载均衡器暴露）、ExternalName（映射到外部 DNS 名称）。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "如何在集群内部通过 DNS 名称发现服务？",
        type: "单选",
        options: [
            "通过节点的 IP 地址",
            "使用 <service-name>.<namespace>.svc.cluster.local 格式",
            "通过容器的 IP 地址",
            "使用 http://<service-ip> 格式"
        ],
        answer: [1],
        explanation: "在集群内部，可以通过 DNS 名称使用 <service-name>.<namespace>.svc.cluster.local 格式发现服务。ClusterDNS 是 Kubernetes 的默认 DNS 服务，提供服务发现功能。",
        difficulty: "基础"
    },

    // ========== 第13部分：控制器和部署 ==========

    {
        module: "概述",
        question: "Deployment 的主要用途是什么？",
        type: "单选",
        options: [
            "管理有状态应用",
            "管理无状态应用，提供声明式更新",
            "调度 Pod 到节点",
            "管理存储资源"
        ],
        answer: [1],
        explanation: "Deployment 用于管理无状态应用，提供声明式更新，支持滚动更新和回滚。它通过管理 ReplicaSet 来确保指定数量的 Pod 副本在运行。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "StatefulSet 的主要用途是什么？",
        type: "单选",
        options: [
            "管理无状态应用",
            "管理有状态应用，提供稳定的网络标识和持久存储",
            "管理定时任务",
            "管理守护进程"
        ],
        answer: [1],
        explanation: "StatefulSet 用于管理有状态应用，提供稳定的网络标识、持久存储、有序部署和扩展。适用于数据库、消息队列等需要持久状态的场景。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "DaemonSet 的典型应用场景是什么？",
        type: "多选",
        options: [
            "在每个节点上运行集群存储守护进程",
            "在每个节点上运行日志收集守护进程",
            "在每个节点上运行监控守护进程",
            "运行有状态的数据库应用"
        ],
        answer: [0, 1, 2],
        explanation: "DaemonSet 用于在每个节点上运行 Pod 的副本，典型应用场景包括：集群存储守护进程、日志收集守护进程、监控守护进程等。不适合运行有状态的数据库应用。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "Job 和 CronJob 的区别是什么？",
        type: "单选",
        options: [
            "没有区别，是同一个资源",
            "Job 运行一次到完成，CronJob 根据时间表重复运行",
            "Job 用于定时任务，CronJob 运行一次",
            "Job 用于无状态应用，CronJob 用于有状态应用"
        ],
        answer: [1],
        explanation: "Job 定义仅运行一次到完成的任务。CronJob 根据时间表（cron 表达式）多次运行相同的 Job，适用于定时任务如备份、数据清理等。",
        difficulty: "基础"
    },

    // ========== 第14部分：自愈和自动扩展 ==========

    {
        module: "概述",
        question: "Kubernetes 的自愈能力包括哪些？",
        type: "多选",
        options: [
            "重启失败的容器",
            "替换不健康的容器",
            "健康检查管理",
            "自动修复硬件故障"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 的自愈能力包括：重启失败的容器、替换不健康的容器、健康检查管理。它不能自动修复硬件故障，但可以处理软件层面的故障。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: " Horizontal Pod Autoscaler (HPA) 的作用是什么？",
        type: "单选",
        options: [
            "自动扩展集群节点",
            "根据 CPU 使用率等指标自动扩展 Pod 副本数量",
            "自动增加存储容量",
            "自动扩展网络带宽"
        ],
        answer: [1],
        explanation: "Horizontal Pod Autoscaler (HPA) 根据 CPU 使用率或其他指标自动扩展 Deployment、ReplicaSet、StatefulSet 等控制器的 Pod 副本数量，实现弹性伸缩。",
        difficulty: "基础"
    },

    // ========== 第15部分：资源管理和限流 ==========

    {
        module: "概述",
        question: "Kubernetes 识别哪些 QoS等级？",
        type: "多选",
        options: [
            "Guaranteed",
            "Burstable",
            "BestEffort"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 根据 Pod 中容器的 requests 和 limits 定义三个 QoS（服务质量）等级：Guaranteed（requests == limits，最高优先级）、Burstable（定义了 requests）、BestEffort（未定义 requests 和 limits，最低优先级）。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "如何定义 Guaranteed QoS 的 Pod？",
        type: "单选",
        options: [
            "只定义 limits",
            "只定义 requests",
            "定义 requests 和 limits，且 CPU 和内存的 requests 等于 limits",
            "不定义任何 requests 或 limits"
        ],
        answer: [2],
        explanation: "要定义 Guaranteed QoS 的 Pod，需要为所有容器定义 requests 和 limits，且 CPU 和内存的 requests 必须等于 limits。此时 Pod 获得最高优先级，只有在系统资源不足时才会被最后驱逐。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "探针有哪几种类型？",
        type: "多选",
        options: [
            "存活探针",
            "就绪探针",
            "启动探针",
            "性能探针"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 提供三种探针：存活探针（检测容器是否运行，失败则重启）、就绪探针（检测容器是否准备好接收流量）、启动探针（检测慢启动应用是否启动）。没有性能探针。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "存活探针和就绪探针的区别是什么？",
        type: "多选",
        options: [
            "存活探针失败会重启容器，就绪探针失败从 Service 中移除",
            "存活探针检测应用是否运行，就绪探针检测应用是否准备好接收流量",
            "存活探针用于快速响应，就绪探针用于慢启动应用",
            "没有区别，功能相同"
        ],
        answer: [0, 1],
        explanation: "存活探针检测应用是否运行，失败会重启容器。就绪探针检测应用是否准备好接收流量，失败会从 Service 的 Endpoints 中移除，但不会重启容器。",
        difficulty: "进阶"
    },

    // ========== 第16部分：网络和存储 ==========

    {
        module: "概述",
        question: "Kubernetes 网络模型的基本要求是什么？",
        type: "多选",
        options: [
            "所有 Pod 都可以不经过 NAT 直接相互通信",
            "所有节点都可以与所有 Pod 通信",
            "Pod 看到的自己的 IP 与其他 Pod 看到的相同",
            "Pod IP 地址可以在整个集群中路由"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 网络模型要求：所有 Pod 可以不经过 NAT 直接相互通信、所有节点可以与所有 Pod 通信、Pod 看到的自己的 IP 与其他 Pod 看到的相同。Pod IP 地址不一定在整个集群中路由。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "以下哪些是 Kubernetes 支持的卷类型？",
        type: "多选",
        options: [
            "emptyDir",
            "hostPath",
            "configMap",
            "persistentVolumeClaim",
            "nfs"
        ],
        answer: [0, 1, 2, 3, 4],
        explanation: "Kubernetes 支持多种卷类型，包括：emptyDir（临时存储）、hostPath（主机路径）、configMap、secret、persistentVolumeClaim（PVC）、nfs 等多种存储后端。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "StorageClass 的主要用途是什么？",
        type: "单选",
        options: [
            "定义 Pod 的存储需求",
            "定义不同类型的存储，用于动态卷配置",
            "管理容器镜像存储",
            "监控存储使用情况"
        ],
        answer: [1],
        explanation: "StorageClass 定义不同类型的存储，包含存储提供者、参数、回收策略等，用于动态卷配置。无需预先创建 PV，系统会根据 StorageClass 自动创建存储资源。",
        difficulty: "进阶"
    },

    // ========== 第17部分：调度和亲和性 ==========

    {
        module: "概述",
        question: "节点亲和性有哪几种类型？",
        type: "多选",
        options: [
            "requiredDuringSchedulingIgnoredDuringExecution",
            "preferredDuringSchedulingIgnoredDuringExecution",
            "requiredDuringSchedulingRequiredDuringExecution",
            "softAffinity"
        ],
        answer: [0, 1],
        explanation: "节点亲和性有两种类型：requiredDuringSchedulingIgnoredDuringExecution（硬性要求，调度时必须满足的规则）和 preferredDuringSchedulingIgnoredDuringExecution（软性偏好，尽量满足的规则）。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "污点和容忍度的用途是什么？",
        type: "单选",
        options: [
            "实现负载均衡",
            "限制或允许 Pod 调度到特定节点",
            "管理存储资源",
            "监控容器健康"
        ],
        answer: [1],
        explanation: "污点和容忍度用于控制 Pod 的调度：污点应用于节点，让 Pod 无法调度到该节点（除非 Pod 有对应的容忍度）；容忍度设置在 Pod 上，允许 Pod 调度到带有匹配污点的节点。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "Pod 优先级和抢占的作用是什么？",
        type: "单选",
        options: [
            "延长 Pod 的运行时间",
            "确保关键 Pod 在资源不足时有更高的调度优先级",
            "限制 Pod 的资源使用",
            "实现 Pod 间的负载均衡"
        ],
        answer: [1],
        explanation: "Pod 优先级表示 Pod 相对于其他 Pod 的重要性。当集群资源不足时，高优先级的 Pod 可以抢占（终止）低优先级的 Pod，确保关键应用能够调度和运行。",
        difficulty: "高级"
    },

    // ========== 第18部分：扩展和最佳实践 ==========

    {
        module: "概述",
        question: "Kubernetes 支持哪些云平台？",
        type: "多选",
        options: [
            "AWS",
            "Google Cloud",
            "Azure",
            "阿里云",
            "所有主流云平台"
        ],
        answer: [4],
        explanation: "Kubernetes 是云原生的、与云提供商无关的平台，可以在所有主流云平台（AWS、Azure、Google Cloud、阿里云等）以及裸金属、本地数据中心等环境运行。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "以下哪些是 Kubernetes 的优势？",
        type: "多选",
        options: [
            "可移植性",
            "可扩展性",
            "声明式配置",
            "与云提供商紧密绑定"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 的优势包括：可移植性（跨环境运行）、可扩展性（通过自定义资源扩展功能）、声明式配置（简化管理）。它是云提供商无关的，不是与云提供商紧密绑定。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "以下哪个描述符合 Kubernetes 的设计理念？",
        type: "单选",
        options: [
            "命令式配置，手动管理",
            "声明式 API，自动化的控制循环",
            "集中式管理，单一控制点",
            "只能运行在特定的云平台"
        ],
        answer: [1],
        explanation: "Kubernetes 的设计理念是基于声明式 API 和自动化的控制循环。用户声明期望状态，Kubernetes 控制器负责将实际状态调整到期望状态。这是 Kubernetes 的核心设计思想。",
        difficulty: "进阶"
    },
    {
        module: "概述",
        question: "如何访问 Kubernetes 集群？",
        type: "多选",
        options: [
            "通过 kubectl 命令行工具",
            "通过 RESTful API",
            "通过官方和第三方客户端库",
            "通过 Web UI（Dashboard）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "可以通过多种方式访问 Kubernetes 集群：kubectl 命令行工具、RESTful API、官方和第三方客户端库（Go、Python、Java 等）、Web UI（Dashboard）等。",
        difficulty: "基础"
    },
    {
        module: "概述",
        question: "在 Kubernetes 中，如何实现配置管理？",
        type: "多选",
        options: [
            "使用 ConfigMap 存储非机密配置",
            "使用 Secret 存储敏感信息",
            "将配置文件打包到容器镜像中",
            "使用环境变量和命令行参数"
        ],
        answer: [0, 1, 4],
        explanation: "Kubernetes 配置管理最佳实践：使用 ConfigMap 存储非机密配置、使用 Secret 存储敏感信息、使用环境变量和命令行参数。不推荐将配置文件打包到容器镜像中，这会导致镜像耦合配置。",
        difficulty: "进阶"
    }
];

const modules = ["概述"];
