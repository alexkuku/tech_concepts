// Kubernetes 概念测评题目库
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 477
// 覆盖模块: 概述、集群架构、容器、工作负载、网络、存储、配置、调度、集群管理

const questions = [
    {
        "module": "概述",
        "question": "Kubernetes 这个名称的希腊语原意是什么？",
        "type": "单选",
        "options": [
            "舵手或领航员",
            "管理者或控制者",
            "编排者或组织者",
            "守护者或护航者"
        ],
        "answer": [
            0
        ],
        "explanation": "Kubernetes 来源于希腊语，意为舵手或领航员，这反映了它在容器编排中的导航作用。K8s 是 Kubernetes 的缩写，因为 K 和 s 之间有8个字母。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Kubernetes 是何时由 Google 开源的？",
        "type": "单选",
        "options": [
            "2012年",
            "2014年",
            "2016年",
            "2018年"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 于2014年由 Google 开源，它结合了 Google 超过15年的生产环境经验，基于 Google 内部使用的 Borg 系统演化而来。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Kubernetes 的核心设计目标是什么？",
        "type": "多选",
        "options": [
            "简化容器的编排和管理",
            "实现应用的自动化部署、扩展和管理",
            "提供声明式的配置和自动化",
            "完全替代 Docker 成为唯一的容器运行时"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 的核心目标是简化容器的编排和管理，实现应用的自动化部署、扩展和管理。它提供声明式的配置和自动化，但并不试图完全替代 Docker，而是作为容器编排平台工作在各种容器运行时之上。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "以下哪些是 Kubernetes 支持的核心特性？",
        "type": "多选",
        "options": [
            "服务发现和负载均衡",
            "存储编排",
            "自动化部署和回滚",
            "自动资源打包",
            "自愈能力",
            "水平扩展"
        ],
        "answer": [
            0,
            1,
            2,
            3,
            4,
            5
        ],
        "explanation": "Kubernetes 支持的核心特性包括：服务发现和负载均衡、存储编排、自动化部署和回滚、自动资源打包、自愈能力、密钥和配置管理、批量执行以及水平扩展。这些特性使得 Kubernetes 成为强大的容器编排平台。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Kubernetes 是什么？",
        "type": "单选",
        "options": [
            "一个容器运行时",
            "一个可移植、可扩展的开源平台，用于管理容器化工作负载和服务",
            "一个云服务平台",
            "一个容器镜像仓库"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 是一个可移植、可扩展的开源平台，用于管理容器化工作负载和服务，它支持声明式配置和自动化。它不是容器运行时（如 Docker 或 containerd），也不是云服务商本身。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Pod 是什么？",
        "type": "单选",
        "options": [
            "Kubernetes 中最小的可部署计算对象，代表一组共享资源的容器",
            "一个容器运行时",
            "一个网络策略对象",
            "一个存储卷对象"
        ],
        "answer": [
            0
        ],
        "explanation": "Pod 是 Kubernetes 中最小的可部署计算对象，代表一组共享存储和网络资源的容器。Pod 是 Kubernetes 执行、调度的基本单位，而不是单个容器。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Kubernetes 标签的主要用途是什么？",
        "type": "多选",
        "options": [
            "组织和分类 Kubernetes 对象",
            "标识对象的重要特性",
            "用于选择器和查询对象",
            "加密敏感数据"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "标签是键值对，用于组织和分类 Kubernetes 对象，标识对象的重要特性，并用于选择器和查询对象。标签使得集群管理和运维更加灵活和高效。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "命名空间的主要作用是什么？",
        "type": "单选",
        "options": [
            "隔离网络流量",
            "为跨多个团队提供资源隔离，避免资源命名冲突",
            "提高容器性能",
            "提供高可用性"
        ],
        "answer": [
            1
        ],
        "explanation": "命名空间的主要作用是为多个团队或项目提供逻辑隔离机制，避免资源命名冲突。不同命名空间内的资源可以使用相同的名称，命名空间是集群级别的逻辑划分。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "以下哪些是 Kubernetes 对象必须具备的？",
        "type": "多选",
        "options": [
            "唯一的标识符",
            "Pod",
            "标签",
            "注解"
        ],
        "answer": [
            0
        ],
        "explanation": "Kubernetes 对象必须拥有唯一的标识符。标签和注解是可选的，用于存储元数据。Pod 只是一个对象类型，不是所有对象都必须具备的。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "注解和标签的主要区别是什么？",
        "type": "单选",
        "options": [
            "注解用于标识对象，标签用于存储元数据",
            "标签用于组织和选择对象，注解用于存储非标识性元数据",
            "没有区别，可以互换使用",
            "注解是必需的，标签是可选的"
        ],
        "answer": [
            1
        ],
        "explanation": "标签用于组织和选择对象，支持选择器查询。注解用于存储任意非标识性元数据，不能用于选择器，通常用于存储工具、库等使用的配置信息。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "kube-apiserver 的主要作用是什么？",
        "type": "单选",
        "options": [
            "调度 Pod 到节点",
            "管理容器运行时",
            "作为 Kubernetes 控制平面的前端，暴露 Kubernetes API",
            "监控集群健康状况"
        ],
        "answer": [
            2
        ],
        "explanation": "kube-apiserver 是 Kubernetes 控制平面的前端，负责暴露 Kubernetes API，处理 REST 操作，并提供集群状态的权威视图。所有其他组件都通过 API Server 进行通信。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "etcd 在 Kubernetes 集群中的角色是什么？",
        "type": "单选",
        "options": [
            "容器运行时",
            "网络插件",
            "集群数据的一致性、高可用键值存储后端",
            "日志收集器"
        ],
        "answer": [
            2
        ],
        "explanation": "etcd 是 Kubernetes 所有集群数据的一致性、高可用键值存储后端，用于存储集群的配置数据和状态信息。etcd 是 Kubernetes 控制平面的核心组件，确保数据的可靠性和一致性。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "kube-scheduler 的主要职责是什么？",
        "type": "单选",
        "options": [
            "管理容器生命周期",
            "监控新创建且未分配节点的 Pod，为其选择运行节点",
            "存储集群配置",
            "管理网络策略"
        ],
        "answer": [
            1
        ],
        "explanation": "kube-scheduler 监控新创建且未分配节点的 Pod，根据资源需求、策略约束、亲和性等规则为其选择最适合的运行节点，并调度到该节点上。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "kube-controller-manager 包含哪些控制器？",
        "type": "多选",
        "options": [
            "节点控制器",
            "Job 控制器",
            "EndpointSlice 控制器",
            "ServiceAccount 控制器",
            "网络控制器"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "kube-controller-manager 运行控制器进程，包括节点控制器、Job 控制器、EndpointSlice 控制器、ServiceAccount 控制器等。网络控制器通常属于 cloud-controller-manager 或网络插件。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "cloud-controller-manager 的用途是什么？",
        "type": "单选",
        "options": [
            "管理所有网络策略",
            "嵌入特定云供应商控制逻辑，将控制平面与特定云平台解耦",
            "替代 kube-apiserver",
            "提供本地存储管理"
        ],
        "answer": [
            1
        ],
        "explanation": "cloud-controller-manager 嵌入特定云供应商控制逻辑，如节点控制器、路由控制器、服务控制器等，将控制平面与特定云平台解耦，便于在不同云平台间迁移。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "kubelet 在 Kubernetes 集群中的作用是什么？",
        "type": "单选",
        "options": [
            "管理集群网络",
            "每个节点上的代理，确保 PodSpec 中描述的容器正常运行",
            "调度 Pod 到节点",
            "存储集群数据"
        ],
        "answer": [
            1
        ],
        "explanation": "kubelet 是运行在每个节点上的代理，负责确保 PodSpec 中描述的容器正常运行，包括下载容器镜像、启动容器、监控容器健康等。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "kube-proxy 的主要功能是什么？",
        "type": "单选",
        "options": [
            "管理容器运行时",
            "在每个节点上运行的网络代理，维护网络规则以允许 Pod 的网络通信",
            "存储集群配置",
            "监控节点健康状况"
        ],
        "answer": [
            1
        ],
        "explanation": "kube-proxy 是在每个节点上运行的网络代理，维护节点上的网络规则（如 iptables 或 ipvs），实现 Service 的负载均衡和网络代理功能。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Kubernetes 支持哪些容器运行时？",
        "type": "多选",
        "options": [
            "containerd",
            "CRI-O",
            "Docker Engine",
            "任何实现 CRI 的运行时"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 支持多种容器运行时，包括 containerd、CRI-O 以及任何实现容器运行时接口（CRI）的其他运行时。Docker Engine 通过 dockershim 或直接安装的 CRI 兼容组件也可以使用。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "Kubernetes API 的主要特点是什么？",
        "type": "多选",
        "options": [
            "RESTful 风格",
            "支持声明式 API 验证",
            "提供服务器端应用",
            "仅支持 JSON 格式",
            "不提供任何客户端库"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes API 是 RESTful 风格的，支持声明式 API 验证和服务器端应用。提供多种官方客户端库，支持 JSON 和 YAML 格式，是 Kubernetes 系统的核心交互接口。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "kubectl 是什么？",
        "type": "单选",
        "options": [
            "Kubernetes 的核心控制器",
            "Kubernetes 的主要命令行工具，用于管理和操作集群资源",
            "容器运行时",
            "网络插件"
        ],
        "answer": [
            1
        ],
        "explanation": "kubectl 是 Kubernetes 的主要命令行工具，允许用户部署应用、检查和管理集群资源、查看日志等。它是与 Kubernetes API 交互的主要方式。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "以下哪些kubectl命令可以列出集群中的Pod？",
        "type": "多选",
        "options": [
            "kubectl get pods",
            "kubectl list pods",
            "kubectl get pod",
            "kubectl show pods"
        ],
        "answer": [
            0,
            2
        ],
        "explanation": "可以使用 'kubectl get pods' 或 'kubectl get pod' 列出集群中的 Pod。kubectl list pods 和 kubectl show pods 不是有效的命令。注意资源名称可以用单数或复数形式。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Pod 中的容器共享什么资源？",
        "type": "多选",
        "options": [
            "网络命名空间（IP 地址、端口）",
            "存储卷",
            "进程命名空间",
            "UTS 命名空间",
            "PID 命名空间"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "Pod 中的容器共享网络命名空间（同一个 IP 和端口空间）、存储卷和 UTS 命名空间（相同的 hostname）。默认情况下不共享进程命名空间和 PID 命名空间。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "Pod 中容器之间如何相互通信？",
        "type": "单选",
        "options": [
            "通过各自的 IP 地址和端口",
            "通过 localhost 和端口",
            "通过节点 IP",
            "通过 Service 名称"
        ],
        "answer": [
            1
        ],
        "explanation": "由于 Pod 中的容器共享网络命名空间，它们可以通过 localhost 和端口相互通信。这是 Pod 设计的重要特性，使得容器之间能够紧密协作。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "为什么 Pod 是 Kubernetes 中最小的可部署计算对象？",
        "type": "多选",
        "options": [
            "Pod 中的容器共享网络和存储",
            "Pod 作为一个整体进行调度和管理",
            "Pod 具有生命周期，可以被创建、删除和替换",
            "Pod 可以直接访问容器镜像仓库"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Pod 是最小的可部署计算对象，因为：Pod 中的容器共享网络和存储、作为一个整体进行调度和管理、具有完整生命周期。访问容器镜像仓库是容器运行时的功能，不是 Pod 的特性。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "如何使用标签选择器选择带有特定标签的 Pod？",
        "type": "单选",
        "options": [
            "kubectl select pods --key=value",
            "kubectl get pods -l key=value",
            "kubectl filter pods key=value",
            "kubectl match pods key=value"
        ],
        "answer": [
            1
        ],
        "explanation": "可以使用 'kubectl get pods -l key=value' 过滤带有特定标签的 Pod。-l 选项用于指定标签选择器。其他命令格式不正确。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "标签选择器支持哪些匹配类型？",
        "type": "多选",
        "options": [
            "等值匹配（=、==）",
            "不等值匹配（!=）",
            "集合匹配（in、notin）",
            "正则表达式匹配",
            "模糊匹配"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "标签选择器支持等值匹配（=、== 表示相等，!= 表示不等）、集合匹配（in、notin、exists）。不支持正则表达式匹配和模糊匹配。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "以下哪些标签键和值是有效的？",
        "type": "多选",
        "options": [
            "app=nginx",
            "app.v1=web",
            "kubernetes.io/managed-by=helm",
            "123/invalid=value"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "有效的标签键和值遵循这些规则：键由前缀和名称组成（可选前缀/名称）、名称最多253字符、前缀是DNS子域名、值最多63字符。'123/invalid' 以数字开头，不符合 DNS 子域名格式。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "注解可以用于什么场景？",
        "type": "多选",
        "options": [
            "记录对象的创建者信息",
            "存储工具和库的配置信息",
            "用于选择和筛选对象",
            "存储任意非标识性元数据"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "注解可以存储任意非标识性元数据，如创建者信息、工具和库的配置信息等。注解不能用于选择和筛选对象，这是标签的功能。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "字段选择器和标签选择器的区别是什么？",
        "type": "单选",
        "options": [
            "没有区别，可以互换使用",
            "字段选择器基于对象的字段值筛选，标签选择器基于标签筛选",
            "字段选择器更加精确，标签选择器更简单",
            "字段选择器只能用于 Pod，标签选择器用于所有对象"
        ],
        "answer": [
            1
        ],
        "explanation": "字段选择器基于对象的字段值（如 metadata.name、spec.nodeName）进行筛选，标签选择器基于标签进行筛选。它们是不同的选择机制，适用于不同的场景。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "默认情况下，Kubernetes 集群会创建哪些命名空间？",
        "type": "多选",
        "options": [
            "default",
            "kube-system",
            "kube-public",
            "kube-node-lease"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 集群默认创建四个命名空间：default（未指定命名空间的资源）、kube-system（Kubernetes 系统对象）、kube-public（所有用户可读）、kube-node-lease（节点租约）。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "命名空间和节点的区别是什么？",
        "type": "单选",
        "options": [
            "没有区别，是同一个概念",
            "命名空间是物理隔离，节点是逻辑隔离",
            "命名空间是多租户隔离的边界，节点是物理资源",
            "命名空间用于网络隔离，节点用于存储隔离"
        ],
        "answer": [
            2
        ],
        "explanation": "命名空间是多租户隔离的逻辑边界，用于资源隔离和避免命名冲突。节点是物理或虚拟机，是运行的物理资源。它们是不同层次的隔离概念。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "以下哪些资源属于命名空间级别？",
        "type": "多选",
        "options": [
            "Pod",
            "Deployment",
            "Service",
            "Node",
            "Namespace",
            "PersistentVolume"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Pod、Deployment、Service 属于命名空间级别的资源。Node、Namespace、PersistentVolume 是集群级别的资源，不属于任何命名空间。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "PersistentVolume 和 PersistentVolumeClaim 的关系是什么？",
        "type": "单选",
        "options": [
            "PV 和 PVC 是同一个概念的不同名称",
            "PV 是集群级别的存储资源，PVC 是用户对存储的请求",
            "PVC 是集群级别的存储资源，PV 是用户对存储的请求",
            "PV 和 PVC 没有关系，独立使用"
        ],
        "answer": [
            1
        ],
        "explanation": "PersistentVolume（PV）是集群级别的存储资源，独立于 Pod 生命周期。PersistentVolumeClaim（PVC）是用户对存储的请求，用于绑定 PV 和 Pod 之间的存储需求。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "以下哪些是 Kubernetes 支持的 PV 访问模式？",
        "type": "多选",
        "options": [
            "ReadWriteOnce",
            "ReadOnlyMany",
            "ReadWriteMany",
            "ReadWriteOncePod"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 支持的 PV 访问模式包括：ReadWriteOnce（单节点读写）、ReadOnlyMany（多节点只读）、ReadWriteMany（多节点读写）、ReadWriteOncePod（单 Pod 读写）。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "ConfigMap 的主要用途是什么？",
        "type": "单选",
        "options": [
            "存储敏感密码信息",
            "存储非机密数据，如配置信息",
            "管理网络策略",
            "监控容器健康"
        ],
        "answer": [
            1
        ],
        "explanation": "ConfigMap 用于存储非机密数据，如配置信息，以键值对形式存在。可以挂载到 Pod 中作为环境变量或文件，实现配置与容器镜像的分离。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Secret 的特点是什么？",
        "type": "多选",
        "options": [
            "数据以 base64 编码存储",
            "比 ConfigMap 更安全",
            "可以通过卷挂载或环境变量注入 Pod",
            "数据以明文存储，不提供加密"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Secret 存储敏感信息如密码、OAuth 令牌等，数据以 base64 编码存储，比 ConfigMap 更安全。可以通过卷挂载或环境变量注入 Pod。注意 base64 不是加密，是编码。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "ConfigMap 和 Secret 的主要区别是什么？",
        "type": "多选",
        "options": [
            "Secret 用于存储敏感信息，ConfigMap 用于非机密数据",
            "Secret 数据以 base64 编码，ConfigMap 数据以明文存储",
            "Secret 有大小限制，ConfigMap 没有限制",
            "Secret 不能作为环境变量，ConfigMap 可以"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "Secret 和 ConfigMap 的主要区别：Secret 用于存储敏感信息，ConfigMap 用于非机密数据；Secret 数据以 base64 编码。两者都可以作为环境变量或文件挂载，都有 1MB 大小限制。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "Service 在 Kubernetes 中的作用是什么？",
        "type": "多选",
        "options": [
            "提供稳定的 IP 地址或主机名",
            "支持一个或多个后端 Pod",
            "实现负载数均衡网络流量",
            "管理容器的生命周期"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Service 提供稳定的 IP 地址或主机名，支持一个或多个后端 Pod（动态变化），实现负载均衡网络流量。它不负责管理容器的生命周期。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Service 有哪些类型？",
        "type": "多选",
        "options": [
            "ClusterIP",
            "NodePort",
            "LoadBalancer",
            "ExternalName"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Service 主要有四种类型：ClusterIP（集群内部访问）、NodePort（通过节点端口暴露）、LoadBalancer（通过云提供商负载均衡器暴露）、ExternalName（映射到外部 DNS 名称）。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "如何在集群内部通过 DNS 名称发现服务？",
        "type": "单选",
        "options": [
            "通过节点的 IP 地址",
            "使用 <service-name>.<namespace>.svc.cluster.local 格式",
            "通过容器的 IP 地址",
            "使用 http://<service-ip> 格式"
        ],
        "answer": [
            1
        ],
        "explanation": "在集群内部，可以通过 DNS 名称使用 <service-name>.<namespace>.svc.cluster.local 格式发现服务。ClusterDNS 是 Kubernetes 的默认 DNS 服务，提供服务发现功能。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Deployment 的主要用途是什么？",
        "type": "单选",
        "options": [
            "管理有状态应用",
            "管理无状态应用，提供声明式更新",
            "调度 Pod 到节点",
            "管理存储资源"
        ],
        "answer": [
            1
        ],
        "explanation": "Deployment 用于管理无状态应用，提供声明式更新，支持滚动更新和回滚。它通过管理 ReplicaSet 来确保指定数量的 Pod 副本在运行。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "StatefulSet 的主要用途是什么？",
        "type": "单选",
        "options": [
            "管理无状态应用",
            "管理有状态应用，提供稳定的网络标识和持久存储",
            "管理定时任务",
            "管理守护进程"
        ],
        "answer": [
            1
        ],
        "explanation": "StatefulSet 用于管理有状态应用，提供稳定的网络标识、持久存储、有序部署和扩展。适用于数据库、消息队列等需要持久状态的场景。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "DaemonSet 的典型应用场景是什么？",
        "type": "多选",
        "options": [
            "在每个节点上运行集群存储守护进程",
            "在每个节点上运行日志收集守护进程",
            "在每个节点上运行监控守护进程",
            "运行有状态的数据库应用"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "DaemonSet 用于在每个节点上运行 Pod 的副本，典型应用场景包括：集群存储守护进程、日志收集守护进程、监控守护进程等。不适合运行有状态的数据库应用。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "Job 和 CronJob 的区别是什么？",
        "type": "单选",
        "options": [
            "没有区别，是同一个资源",
            "Job 运行一次到完成，CronJob 根据时间表重复运行",
            "Job 用于定时任务，CronJob 运行一次",
            "Job 用于无状态应用，CronJob 用于有状态应用"
        ],
        "answer": [
            1
        ],
        "explanation": "Job 定义仅运行一次到完成的任务。CronJob 根据时间表（cron 表达式）多次运行相同的 Job，适用于定时任务如备份、数据清理等。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Kubernetes 的自愈能力包括哪些？",
        "type": "多选",
        "options": [
            "重启失败的容器",
            "替换不健康的容器",
            "健康检查管理",
            "自动修复硬件故障"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 的自愈能力包括：重启失败的容器、替换不健康的容器、健康检查管理。它不能自动修复硬件故障，但可以处理软件层面的故障。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": " Horizontal Pod Autoscaler (HPA) 的作用是什么？",
        "type": "单选",
        "options": [
            "自动扩展集群节点",
            "根据 CPU 使用率等指标自动扩展 Pod 副本数量",
            "自动增加存储容量",
            "自动扩展网络带宽"
        ],
        "answer": [
            1
        ],
        "explanation": "Horizontal Pod Autoscaler (HPA) 根据 CPU 使用率或其他指标自动扩展 Deployment、ReplicaSet、StatefulSet 等控制器的 Pod 副本数量，实现弹性伸缩。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "Kubernetes 识别哪些 QoS等级？",
        "type": "多选",
        "options": [
            "Guaranteed",
            "Burstable",
            "BestEffort"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 根据 Pod 中容器的 requests 和 limits 定义三个 QoS（服务质量）等级：Guaranteed（requests == limits，最高优先级）、Burstable（定义了 requests）、BestEffort（未定义 requests 和 limits，最低优先级）。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "如何定义 Guaranteed QoS 的 Pod？",
        "type": "单选",
        "options": [
            "只定义 limits",
            "只定义 requests",
            "定义 requests 和 limits，且 CPU 和内存的 requests 等于 limits",
            "不定义任何 requests 或 limits"
        ],
        "answer": [
            2
        ],
        "explanation": "要定义 Guaranteed QoS 的 Pod，需要为所有容器定义 requests 和 limits，且 CPU 和内存的 requests 必须等于 limits。此时 Pod 获得最高优先级，只有在系统资源不足时才会被最后驱逐。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "探针有哪几种类型？",
        "type": "多选",
        "options": [
            "存活探针",
            "就绪探针",
            "启动探针",
            "性能探针"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 提供三种探针：存活探针（检测容器是否运行，失败则重启）、就绪探针（检测容器是否准备好接收流量）、启动探针（检测慢启动应用是否启动）。没有性能探针。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "存活探针和就绪探针的区别是什么？",
        "type": "多选",
        "options": [
            "存活探针失败会重启容器，就绪探针失败从 Service 中移除",
            "存活探针检测应用是否运行，就绪探针检测应用是否准备好接收流量",
            "存活探针用于快速响应，就绪探针用于慢启动应用",
            "没有区别，功能相同"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "存活探针检测应用是否运行，失败会重启容器。就绪探针检测应用是否准备好接收流量，失败会从 Service 的 Endpoints 中移除，但不会重启容器。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "Kubernetes 网络模型的基本要求是什么？",
        "type": "多选",
        "options": [
            "所有 Pod 都可以不经过 NAT 直接相互通信",
            "所有节点都可以与所有 Pod 通信",
            "Pod 看到的自己的 IP 与其他 Pod 看到的相同",
            "Pod IP 地址可以在整个集群中路由"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 网络模型要求：所有 Pod 可以不经过 NAT 直接相互通信、所有节点可以与所有 Pod 通信、Pod 看到的自己的 IP 与其他 Pod 看到的相同。Pod IP 地址不一定在整个集群中路由。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "以下哪些是 Kubernetes 支持的卷类型？",
        "type": "多选",
        "options": [
            "emptyDir",
            "hostPath",
            "configMap",
            "persistentVolumeClaim",
            "nfs"
        ],
        "answer": [
            0,
            1,
            2,
            3,
            4
        ],
        "explanation": "Kubernetes 支持多种卷类型，包括：emptyDir（临时存储）、hostPath（主机路径）、configMap、secret、persistentVolumeClaim（PVC）、nfs 等多种存储后端。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "StorageClass 的主要用途是什么？",
        "type": "单选",
        "options": [
            "定义 Pod 的存储需求",
            "定义不同类型的存储，用于动态卷配置",
            "管理容器镜像存储",
            "监控存储使用情况"
        ],
        "answer": [
            1
        ],
        "explanation": "StorageClass 定义不同类型的存储，包含存储提供者、参数、回收策略等，用于动态卷配置。无需预先创建 PV，系统会根据 StorageClass 自动创建存储资源。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "节点亲和性有哪几种类型？",
        "type": "多选",
        "options": [
            "requiredDuringSchedulingIgnoredDuringExecution",
            "preferredDuringSchedulingIgnoredDuringExecution",
            "requiredDuringSchedulingRequiredDuringExecution",
            "softAffinity"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "节点亲和性有两种类型：requiredDuringSchedulingIgnoredDuringExecution（硬性要求，调度时必须满足的规则）和 preferredDuringSchedulingIgnoredDuringExecution（软性偏好，尽量满足的规则）。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "污点和容忍度的用途是什么？",
        "type": "单选",
        "options": [
            "实现负载均衡",
            "限制或允许 Pod 调度到特定节点",
            "管理存储资源",
            "监控容器健康"
        ],
        "answer": [
            1
        ],
        "explanation": "污点和容忍度用于控制 Pod 的调度：污点应用于节点，让 Pod 无法调度到该节点（除非 Pod 有对应的容忍度）；容忍度设置在 Pod 上，允许 Pod 调度到带有匹配污点的节点。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "Pod 优先级和抢占的作用是什么？",
        "type": "单选",
        "options": [
            "延长 Pod 的运行时间",
            "确保关键 Pod 在资源不足时有更高的调度优先级",
            "限制 Pod 的资源使用",
            "实现 Pod 间的负载均衡"
        ],
        "answer": [
            1
        ],
        "explanation": "Pod 优先级表示 Pod 相对于其他 Pod 的重要性。当集群资源不足时，高优先级的 Pod 可以抢占（终止）低优先级的 Pod，确保关键应用能够调度和运行。",
        "difficulty": "高级"
    },
    {
        "module": "概述",
        "question": "Kubernetes 支持哪些云平台？",
        "type": "多选",
        "options": [
            "AWS",
            "Google Cloud",
            "Azure",
            "阿里云",
            "所有主流云平台"
        ],
        "answer": [
            4
        ],
        "explanation": "Kubernetes 是云原生的、与云提供商无关的平台，可以在所有主流云平台（AWS、Azure、Google Cloud、阿里云等）以及裸金属、本地数据中心等环境运行。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "以下哪些是 Kubernetes 的优势？",
        "type": "多选",
        "options": [
            "可移植性",
            "可扩展性",
            "声明式配置",
            "与云提供商紧密绑定"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 的优势包括：可移植性（跨环境运行）、可扩展性（通过自定义资源扩展功能）、声明式配置（简化管理）。它是云提供商无关的，不是与云提供商紧密绑定。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "以下哪个描述符合 Kubernetes 的设计理念？",
        "type": "单选",
        "options": [
            "命令式配置，手动管理",
            "声明式 API，自动化的控制循环",
            "集中式管理，单一控制点",
            "只能运行在特定的云平台"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 的设计理念是基于声明式 API 和自动化的控制循环。用户声明期望状态，Kubernetes 控制器负责将实际状态调整到期望状态。这是 Kubernetes 的核心设计思想。",
        "difficulty": "进阶"
    },
    {
        "module": "概述",
        "question": "如何访问 Kubernetes 集群？",
        "type": "多选",
        "options": [
            "通过 kubectl 命令行工具",
            "通过 RESTful API",
            "通过官方和第三方客户端库",
            "通过 Web UI（Dashboard）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "可以通过多种方式访问 Kubernetes 集群：kubectl 命令行工具、RESTful API、官方和第三方客户端库（Go、Python、Java 等）、Web UI（Dashboard）等。",
        "difficulty": "基础"
    },
    {
        "module": "概述",
        "question": "在 Kubernetes 中，如何实现配置管理？",
        "type": "多选",
        "options": [
            "使用 ConfigMap 存储非机密配置",
            "使用 Secret 存储敏感信息",
            "将配置文件打包到容器镜像中",
            "使用环境变量和命令行参数"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "Kubernetes 配置管理最佳实践：使用 ConfigMap 存储非机密配置、使用 Secret 存储敏感信息、使用环境变量和命令行参数。不推荐将配置文件打包到容器镜像中，这会导致镜像耦合配置。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "Kubernetes 控制平面的主要作用是什么？",
        "type": "多选",
        "options": [
            "对集群做出全局决策",
            "检测和响应集群事件",
            "调度 Pod 到合适的节点",
            "管理容器运行时"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "控制平面的主要作用包括：对集群做出全局决策（如调度）、检测和响应集群事件（如启动新 Pod）、调度 Pod 到合适的节点。管理容器运行时是工作节点的职责。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "kube-apiserver 作为 Kubernetes 控制平面的前端，具有哪些特性？",
        "type": "多选",
        "options": [
            "暴露 Kubernetes API",
            "支持水平扩展",
            "处理 RESTful 操作",
            "存储集群数据"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "kube-apiserver 暴露 Kubernetes API，支持水平扩展（可运行多个实例），处理 RESTful 操作。它不存储集群数据，数据存储在 etcd 中。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "etcd 在 Kubernetes 架构中的作用是什么？",
        "type": "单选",
        "options": [
            "容器运行时",
            "集群数据的一致性、高可用键值存储",
            "网络代理",
            "日志收集器"
        ],
        "answer": [
            1
        ],
        "explanation": "etcd 是 Kubernetes 所有集群数据的一致性、高可用键值存储后端。它存储配置数据、状态信息和集群元数据，是控制平面的核心组件。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "kube-scheduler 如何选择 Pod 的运行节点？",
        "type": "单选",
        "options": [
            "随机选择可用节点",
            "基于资源需求、策略约束、亲和性等规则选择最合适的节点",
            "选择资源最多的节点",
            "选择负载最低的节点"
        ],
        "answer": [
            1
        ],
        "explanation": "kube-scheduler 基于资源需求（CPU、内存）、策略约束（亲和性、污点和容忍度）、数据局部性、QoS 等规则，为未分配的 Pod 选择最合适的运行节点。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "kube-controller-manager 包含哪些控制器？",
        "type": "多选",
        "options": [
            "节点控制器",
            "Job 控制器",
            "EndpointSlice 控制器",
            "ServiceAccount 控制器",
            "网络控制器"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "kube-controller-manager 运行多种控制器进程，包括：节点控制器（监控节点状态）、Job 控制器（管理 Job）、EndpointSlice 控制器（管理 Service 端点）、ServiceAccount 控制器（管理服务账户）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "kubelet 的主要职责是什么？",
        "type": "多选",
        "options": [
            "确保 PodSpec 中描述的容器正常运行",
            "定期向 API Server 报告节点状态",
            "下载容器镜像",
            "管理容器生命周期"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "kubelet 是运行在每个节点上的代理，主要职责包括：确保 PodSpec 中描述的容器正常运行、定期向 API Server 报告节点状态、下载容器镜像、启动和停止容器、监控容器健康。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "kube-proxy 是如何实现 Serviceload balancing 的？",
        "type": "多选",
        "options": [
            "维护 iptables 或 ipvs 规则",
            "处理 Service 和 EndpointSlice 对象的变更",
            "在每个节点上运行网络代理",
            "与容器运行时直接通信"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "kube-proxy 在每个节点上运行，通过维护 iptables 或 ipvs 规则实现负载均衡。它监听 Service 和 EndpointSlice 对象的变更，并相应地更新数据平面的网络规则。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "容器运行时在 Kubernetes 中的角色是什么？",
        "type": "单选",
        "options": [
            "调度 Pod 到节点",
            "管理 Kubernetes 环境中容器的执行和生命周期",
            "存储集群数据",
            "管理网络策略"
        ],
        "answer": [
            1
        ],
        "explanation": "容器运行时负责运行容器，下载容器镜像、管理容器生命周期、提供容器联网等。Kubernetes 通过容器运行时接口（CRI）与容器运行时交互。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "Kubernetes 支持哪些容器运行时？",
        "type": "多选",
        "options": [
            "containerd",
            "CRI-O",
            "Docker Engine（通过 CRI 兼容器运行时）",
            "rkt"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 支持任何实现了容器运行时接口（CRI）的运行时，包括 containerd、CRI-O。Docker Engine 通过 dockershim（已废弃）或直接安装 CRI 兼容组件也可使用。rkt 曾支持但已移除。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "Kubernetes 中的节点是什么？",
        "type": "单选",
        "options": [
            "一个容器",
            "集群中的工作机器（虚拟机或物理机）",
            "一个控制器",
            "一个存储卷"
        ],
        "answer": [
            1
        ],
        "explanation": "节点是 Kubernetes 集群中的工作机器，可以是虚拟机或物理机。节点运行容器化应用，由控制平面管理。节点之前称为 Minion。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "节点向控制平面报告状态的方式是什么？",
        "type": "多选",
        "options": [
            "kubelet 定期向 API Server 发送心跳",
            "kubelet 报告节点上的 Pod 状态",
            "节点控制器监测节点健康状态",
            "kube-proxy 报告网络状态"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "kubelet 定期向 API Server 发送心跳报告节点状态，同时报告节点上运行的 Pod 状态。控制平面的节点控制器监测节点健康状态，当节点不健康时进行相应的处理。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "当节点被标记为 NotReady 时，可能的原因是什么？",
        "type": "多选",
        "options": [
            "kubelet 守护进程停止",
            "节点磁盘压力",
            "节点网络不可达",
            "节点内存不足"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "节点可能因以下原因被标记为 NotReady：kubelet 守护进程停止、节点磁盘压力过大、节点网络不可达、节点内存不足（内存压力）。kubelet 会报告节点状况，控制器会做出相应的决策。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "Kubernetes 控制器的工作原理是什么？",
        "type": "单选",
        "options": [
            "命令式执行任务",
            "监视集群期望状态和当前状态，驱使当前状态向期望状态移动",
            "定期清理无用资源",
            "根据用户命令直接执行操作"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 控制器的工作原理是：监视集群的期望状态（用户定义）和当前状态（集群实际状态），通过控制循环驱使当前状态向期望状态移动。这是声明式 API 的核心。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "以下哪些是 Kubernetes 控制器的例子？",
        "type": "多选",
        "options": [
            "ReplicaSet 控制器",
            "Deployment 控制器",
            "Job 控制器",
            "CronJob 控制器"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 的所有控制器都遵循相同的工作模式，例子包括：ReplicaSet 控制器（确保指定数量的 Pod 副本运行）、Deployment 控制器（管理 Deployment）、Job 控制器（管理一次性任务）、CronJob 控制器（管理定时任务）。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "控制器如何使用最终一致性协调集群状态？",
        "type": "单选",
        "options": [
            "通过手动干预",
            "通过持续的 Reconciliation 循环"
        ],
        "answer": [
            1
        ],
        "explanation": "控制器通过持续的 Reconciliation（协调）循环工作：观察资源的当前状态，将其与期望状态比较，然后执行操作以使实际状态匹配期望状态。这种模式保证了最终一致性。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "Kubernetes 中的租约（Lease）机制用于什么？",
        "type": "多选",
        "options": [
            "节点健康检查",
            "领导选举",
            "资源配额管理",
            "存储配额监控"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "租约（Lease）机制用于节点健康检查和领导选举。节点通过更新租约对象报告其健康状态，控制器（如 kube-controller-manager）使用租约进行领导者选举，确保只有一个实例作为主控制器运行。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "节点租约（Node Lease）的工作方式是什么？",
        "type": "单选",
        "options": [
            "节点定期更新 Lease 对象以报告其活跃状态",
            "节点向所有其他节点发送心跳",
            "API Server 定期 ping 节点",
            "kube-proxy 报告节点状态"
        ],
        "answer": [
            0
        ],
        "explanation": "节点租约的工作方式是：kubelet 定期更新该节点的 Lease 对象以报告其活跃状态。如果 Lease 对象长时间未更新，控制平面会认为节点不健康并做出相应的处理。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "cloud-controller-manager 的作用是什么？",
        "type": "单选",
        "options": [
            "管理所有网络策略",
            "嵌入特定云供应商控制逻辑，将控制平面与特定云平台解耦",
            "替代 kube-apiserver",
            "提供本地存储管理"
        ],
        "answer": [
            1
        ],
        "explanation": "cloud-controller-manager 嵌入特定云供应商控制逻辑（如节点生命周期管理、路由管理、负载均衡器管理），将控制平面与特定云平台解耦，便于 Kubernetes 在不同云平台间移植。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "cloud-controller-manager 包含哪些控制器？",
        "type": "多选",
        "options": [
            "节点控制器",
            "路由控制器",
            "服务控制器",
            "Ingress 控制器"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "cloud-controller-manager 包含：节点控制器（针对云平台的节点管理）、路由控制器（管理路由）、服务控制器（管理负载均衡器等云服务）。Ingress 控制器通常属于网络插件。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "在裸金属环境或本地部署中，cloud-controller-manager 的作用是什么？",
        "type": "单选",
        "options": [
            "仍然必需，无法移除",
            "可以省略或使用无云实现，因为不需要云提供商特定的逻辑",
            "必须使用某个云提供商的实现",
            "只用于网络管理"
        ],
        "answer": [
            1
        ],
        "explanation": "在裸金属环境或本地部署中，cloud-controller-manager 可以省略或使用无云实现（如 cloud-provider 中的 none 模式），因为没有云提供商特定的逻辑需要处理。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "Kubernetes 的自愈能力包括哪些？",
        "type": "多选",
        "options": [
            "重启失败的容器",
            "重新调度节点上失效的 Pod",
            "替换不健康的节点",
            "监控和修复网络问题"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "Kubernetes 的自愈能力包括：重启失败的容器（通过 kubelet）、重新调度节点上失效的 Pod（通过控制器）。它不自动替换不健康的节点，也不修复网络问题。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "当容器退出时，kubelet 如何处理？",
        "type": "单选",
        "options": [
            "立即删除 Pod",
            "根据容器的 restartPolicy 决定是否重启",
            "只记录日志",
            "向用户发送通知"
        ],
        "answer": [
            1
        ],
        "explanation": "当容器退出时，kubelet 根据 Pod 中定义的 restartPolicy 决定是否重启容器：Always（总是重启）、OnFailure（失败时重启）、Never（不重启）。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "Pod 有哪些重启策略？",
        "type": "多选",
        "options": [
            "Always",
            "OnFailure",
            "Never",
            "UnlessStopped"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Pod 的重启策略包括：Always（总是重启，适合工作负载）、OnFailure（仅在失败时重启）、Never（永不重启，适合 Job）。UnlessStopped 不是 Kubernetes 中的选项。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "Kubernetes 的垃圾回收机制用于什么？",
        "type": "单选",
        "options": [
            "回收容器内存",
            "清理未使用的资源和删除关联的从属对象",
            "清理日志文件",
            "监控 CPU 使用率"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 的垃圾回收机制用于清理未使用的资源以及删除所有者对象时自动删除关联的从属对象（如删除 Deployment 时删除其管理的 Pod）。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "以下哪些情况会触发垃圾回收？",
        "type": "多选",
        "options": [
            "删除所有者对象时，自动删除从属对象",
            "设置 ownerReference 字段建立依赖关系",
            "使用 finalizer 阻止删除",
            "手动删除孤立 Pod"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "垃圾回收在删除所有者对象时自动删除从属对象，前提是建立了 ownerReference 字段。finalizer 用于控制删除行为，延迟删除。孤立 Pod 指当所有者资源被删除后未删除的从属对象，需要手动处理或垃圾回收。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "ownerReference 字段的作用是什么？",
        "type": "单选",
        "options": [
            "标识对象的创建者",
            "建立对象间的依赖关系，用于垃圾回收",
            "记录对象的修改历史",
            "控制对象的访问权限"
        ],
        "answer": [
            1
        ],
        "explanation": "ownerReference 字段用于建立对象间的从属关系，让垃圾回收机制在删除所有者对象时能够自动删除从属对象。这是 Kubernetes 中管理对象生命周期的重要机制。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "混合版本代理（Mixed Version Proxy）的作用是什么？",
        "type": "单选",
        "options": [
            "加速集群升级",
            "允许控制平面和节点运行不同的 Kubernetes 版本",
            "提供负载均衡",
            "管理网络通信"
        ],
        "answer": [
            1
        ],
        "explanation": "混合版本代理允许控制平面和节点运行不同的 Kubernetes 版本，支持集群的滚动升级。通过 API 的兼容性保证，不同版本的组件可以协同工作。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "集群升级过程中，如何保证服务不中断？",
        "type": "多选",
        "options": [
            "逐个节点升级，确保有足够的可用节点",
            "使用混合版本代理支持多版本共存",
            "设置 PodDisruptionBudget 保护关键应用",
            "直接升级所有节点"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "集群升级可以通过：逐个节点滚动升级，确保有足够的可用节点运行 Pods；使用混合版本代理支持多版本共存；设置 PodDisruptionBudget 保护关键应用，确保升级期间有足够的副本在运行。直接升级所有节点会导致服务中断。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "cgroup v2 对 Kubernetes 的影响是什么？",
        "type": "多选",
        "options": [
            "提供更好的资源隔离",
            "改进容器资源管理和调度",
            "需要特定的配置和内核版本",
            "完全替代 cgroup v1"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "cgroup v2 提供更好的资源隔离、改进容器资源管理和调度（如内存控制器）。Kubernetes 支持使用 cgroup v2，但需要较高版本的内核（通常 5.x+）和正确的配置。cgroup v1 和 v2 可以共存，但系统只能使用其中一种。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "如何为 Kubernetes 集群启用 cgroup v2？",
        "type": "单选",
        "options": [
            "通过 kubectl 命令启用",
            "在内核参数和容器运行时配置中启用",
            "自动启用，无需配置",
            "无法启用，不支持"
        ],
        "answer": [
            1
        ],
        "explanation": "启用 cgroup v2 需要在内核启动参数（如 GRUB 配置）中设置 systemd.unified_cgroup_hierarchy=1，并确保容器运行时（如 containerd、CRI-O）支持 cgroup v2。不是通过 kubectl 启用的。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "节点控制器的主要职责是什么？",
        "type": "单选",
        "options": [
            "创建和删除节点",
            "监控节点状态，在节点不健康时做出反应",
            "调度 Pod 到节点",
            "管理节点上的容器"
        ],
        "answer": [
            1
        ],
        "explanation": "节点控制器监控节点状态，检查节点是否健康（如 kubelet 是否响应），在节点不健康时做出反应（如标记节点为 NotReady、驱逐该节点上的 Pod）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "端点切片（EndpointSlice）控制器的作用是什么？",
        "type": "单选",
        "options": [
            "创建和管理 EndpointSlice 对象",
            "管理 Pod 生命周期",
            "调度 Pod 到节点",
            "存储集群数据"
        ],
        "answer": [
            0
        ],
        "explanation": "EndpointSlice 控制器创建和管理 EndpointSlice 对象，用于跟踪 Service 后端的 Pod。它根据 Service 和 Pod 的变更（如 Pod IP 变化、Pod 上下线）动态更新终端点信息。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "ServiceAccount 控制器的职责是什么？",
        "type": "单选",
        "options": [
            "管理用户账户",
            "为每个命名空间创建默认的 ServiceAccount",
            "管理节点身份认证",
            "管理存储卷权限"
        ],
        "answer": [
            1
        ],
        "explanation": "ServiceAccount 控制器为每个命名空间创建默认的 ServiceAccount，并维护 ServiceAccount 的 Secret（包含 token）。ServiceAccount 用于 Pod 在集群内部的认证和授权。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "kubelet 如何与 API Server 通信？",
        "type": "多选",
        "options": [
            "通过 kubeconfig 文件中的凭证认证",
            "使用 Kubernetes API",
            "通过 TLS 加密通信",
            "通过 SSH 连接"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "kubelet 通过 kubeconfig 文件中的凭证（如 token 或证书）认证，使用 HTTPS 与 Kubernetes API Server 安全通信。kubelet 使用 TLS 进行加密，确保通信安全。不使用 SSH。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "kubelet 如何监控 Pod 健康状态？",
        "type": "多选",
        "options": [
            "通过探针（Probe）：存活探针、就绪探针",
            "监听容器运行时的状态",
            "向 API Server 定期报告容器状态",
            "通过检查容器日志"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "kubelet 通过探针（Probe）监控容器健康：存活探针检测应用是否运行，就绪探针检测应用是否准备好接收流量。同时，kubelet 监听容器运行时的状态，并定期向 API Server 报告容器状态。检查容器日志不是主要手段。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "kubelet 如何处理资源配额？",
        "type": "单选",
        "options": [
            "忽略配额，由控制平面管理",
            "基于 Pod 的 requests 和 limits 管理容器资源使用",
            "由容器运行时限制",
            "定期清理资源"
        ],
        "answer": [
            1
        ],
        "explanation": "kubelet 基于 Pod 中定义的 requests（资源需求）和 limits（资源限制）管理容器的资源使用，通过 cgroups 限制容器对 CPU 和内存的使用。控制平面决定调度，kubelet 负责实际执行资源限制。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "kube-apiserver 支持哪些认证方式？",
        "type": "多选",
        "options": [
            "客户端证书",
            "Bearer Token",
            "HTTP Basic 认证",
            "OpenID Connect"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "kube-apiserver 支持多种认证方式：客户端证书、Bearer Token、HTTP Basic 认证、OpenID Connect、Webhook 认证等。可以根据集群的安全需求配置多种认证插件。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "kube-apiserver 支持哪些授权方式？",
        "type": "多选",
        "options": [
            "Node 授权",
            "ABAC（基于属性的访问控制）",
            "RBAC（基于角色的访问控制）",
            "Webhook 授权"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "kube-apiserver 支持多种授权方式：Node 授权（用于 kubelet）、ABAC、RBAC（推荐）、Webhook 授权。RBAC 是 Kubernetes 推荐的授权方式，提供灵活的权限管理。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": " Admission Controller 在 kube-apiserver 中起什么作用？",
        "type": "多选",
        "options": [
            "在持久化对象之前拦截请求",
            "验证和修改请求内容",
            "实现准入控制策略",
            "提供负载均衡"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Admission Controller 在对象持久化到 etcd 之前拦截 API Server 请求，验证和修改请求内容，实现准入控制策略。可以用于强制执行配置规则、资源限制、配额等。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "etcd 集群的配置要求是什么？",
        "type": "单选",
        "options": [
            "必须只使用一个 etcd 实例",
            "建议使用奇数个实例（如3、5、7）组成 etcd 集群",
            "必须使用偶数个实例",
            "实例数量无限制"
        ],
        "answer": [
            1
        ],
        "explanation": "etcd 集群建议使用奇数个实例（如3、5、7）组成集群，以实现高可用和一致性。奇数个实例可以在大多数实例故障时仍然工作（Raft 共识算法要求）。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "etcd 如何保证数据一致性？",
        "type": "单选",
        "options": [
            "通过主从复制",
            "使用 Raft 共识算法实现强一致性",
            "通过最终一致性",
            "通过两阶段提交"
        ],
        "answer": [
            1
        ],
        "explanation": "etcd 使用 Raft 共识算法实现强一致性，确保在大多数节点故障时集群仍然可用且数据一致。Raft 是分布式一致性算法，提供线性一致性的读写。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "如何备份和恢复 etcd 数据？",
        "type": "多选",
        "options": [
            "使用 etcdctl 提供的snapshot 命令备份",
            "定期备份 etcd 数据目录",
            "通过备份 Kubernetes 资源实现",
            "无法备份 etcd 数据"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "可以使用 etcdctl 提供的 snapshot 命令（如 etcdctl snapshot save）备份 etcd 数据，也可以定期备份 etcd 数据目录。备份 Kubernetes 资源（如保存 YAML 文件）是额外的保护措施，不能替代 etcd 备份。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "生产环境中控制平面的部署方式是什么？",
        "type": "单选",
        "options": [
            "使用单台计算机运行所有控制平面组件",
            "跨多台计算机运行控制平面组件以实现高可用",
            "使用容器的控制平面部署",
            "使用云托管服务的控制平面"
        ],
        "answer": [
            1
        ],
        "explanation": "在生产环境中，控制平面通常跨多台计算机运行，每个组件多个实例，实现高可用和容错。单台计算机或容器的部署方式用于开发和测试，不适合生产环境。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "为什么控制平面需要高可用配置？",
        "type": "多选",
        "options": [
            "避免单点故障导致整个集群不可用",
            "提高集群的可扩展性",
            "保证持续的服务能力和控制能力",
            "减少资源消耗"
        ],
        "answer": [
            0,
            2
        ],
        "explanation": "控制平面高可用配置的原因：避免单点故障导致整个集群不可用（如控制器停止后 Pod 失效后无法恢复）、保证持续的服务能力和控制能力。可扩展性与负载均衡有关，不是高可用的直接原因。高可用通常会增加资源消耗。",
        "difficulty": "基础"
    },
    {
        "module": "集群架构",
        "question": "当 kube-scheduler 进程停止运行时，会对集群产生什么影响？",
        "type": "单选",
        "options": [
            "已运行的 Pod 会立即停止",
            "Pod 状态更新会失败",
            "新创建的 Pod 不会被调度到节点上",
            "节点会进入 NotReady 状态"
        ],
        "answer": [
            2
        ],
        "explanation": "当 kube-scheduler 停止时，调度功能不可用，新创建的 Pod 无法被分配到节点，会一直处于 Pending 状态。已运行的 Pod 不受影响，节点状态更新由 kubelet 负责，不受调度器影响。这突出了单一控制平面组件故障的影响范围。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "以下哪些组件停止运行会直接影响 Pod 初始调度？",
        "type": "多选",
        "options": [
            "kube-apiserver",
            "kube-scheduler",
            "kube-controller-manager",
            "kube-proxy"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "kube-apiserver 停止时，无法创建 Pod 对象，自然无法调度；kube-scheduler 停止时，无法为未分配的 Pod 选择节点，无法完成初始调度。kube-controller-manager 主要负责维护期望状态，不影响初始调度；kube-proxy 负责服务负载均衡，与调度无关。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "kubelet 如何避免节点资源被过度使用？",
        "type": "多选",
        "options": [
            "根据 Pod 的资源 requests 进行调度决策",
            "根据 Pod 的资源 limits 通过 cgroups 限制容器资源",
            "监控节点的资源使用率并报告给控制平面",
            "自动删除内存占用高的容器"
        ],
        "answer": [
            1,
            2
        ],
        "explanation": "kubelet 通过 Pod 定义的 limits 使用 cgroups 限制容器资源使用（CPU、内存），防止单个容器占用过多资源；同时监控节点资源使用率，将资源压力状态报告给控制平面。调度决策由 kube-scheduler 基于 requests 完成，不是 kubelet 的职责。kubelet 不会自动删除容器。",
        "difficulty": "进阶"
    },
    {
        "module": "集群架构",
        "question": "当节点出现内存压力（MemoryPressure）时，会发生什么？",
        "type": "单选",
        "options": [
            "Pod 立即被强制终止",
            "节点会根据 Pod 的优先级和 QoS 等级进行驱逐",
            "所有新建的 Pod 都会被拒绝",
            "节点会立即从集群中删除"
        ],
        "answer": [
            1
        ],
        "explanation": "当节点内存压力过大（NodeCondition MemoryPressure 为 True）时，kubelet 会根据 Pod 的优先级和 QoS 等级驱逐部分 Pod，释放内存。低优先级、低 QoS 的 Pod 优先被驱逐。新建的 Pod 默认不会被调度到有压力的节点，除非其优先级足够高。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "当运行多个 kube-controller-manager 实例时，如何确保只有一个实例作为活跃领导者？",
        "type": "多选",
        "options": [
            "通过租约（Lease）机制进行领导选举",
            "通过 etcd 的键值竞争实现",
            "通过手动指定主实例",
            "通过负载均衡器分配请求"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "kube-controller-manager 运行多个实例时，通过租 Lease 机制在 etcd 中进行领导选举，确保只有一个实例作为主控制器。其他实例处于待命状态，在主实例故障时接管。这不是通过手动指定或负载均衡器实现的。",
        "difficulty": "高级"
    },
    {
        "module": "集群架构",
        "question": "哪些因素会触发 Deployment 控制器创建新的 ReplicaSet？",
        "type": "单选",
        "options": [
            "Pod 启动失败",
            " Deployment 的 Pod 模板发生变化",
            "节点进入 NotReady 状态",
            "Service 的选择器发生变化"
        ],
        "answer": [
            1
        ],
        "explanation": "Deployment 控制器在 Pod 模板（deployment.spec.template）发生变化时会创建新的 ReplicaSet，执行滚动更新。Pod 启动失败会触发重启而不是新 ReplicaSet；节点 NotReady 会触发重新调度；Service 选择器变化与 Deployment 无关。这展示了控制器对配置变更的响应机制。",
        "difficulty": "高级"
    },
    {
        "module": "容器",
        "question": "容器镜像是什么？",
        "type": "单选",
        "options": [
            "一个运行的容器实例",
            "一个只读的模板，包含运行应用程序所需的一切：代码、运行时、库和默认值",
            "一个容器运行时",
            "一个网络配置文件"
        ],
        "answer": [
            1
        ],
        "explanation": "容器镜像是一个只读的模板，包含运行应用程序所需的一切：代码、运行时要求、应用程序和系统库以及重要设置的默认值。镜像用于创建容器实例。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "容器镜像的特性是什么？",
        "type": "多选",
        "options": [
            "无状态和不可变",
            "可以更改已运行容器的镜像",
            "如需更改，应该构建新镜像并重新创建容器",
            "有状态，可动态修改"
        ],
        "answer": [
            0,
            2
        ],
        "explanation": "容器镜像是无状态和不可变的，不应该更改已运行容器的镜像。如果需要更改，应该构建包含更改的新镜像，然后重新创建容器，而不是修改运行中的容器。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "容器镜像的最佳实践是什么？",
        "type": "多选",
        "options": [
            "使用多阶段构建减小镜像体积",
            "避免在镜像中包含敏感信息",
            "使用特定的版本标签而非 latest",
            "将所有应用代码和依赖打包到镜像中（包括配置文件）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "容器镜像的最佳实践：使用多阶段构建减小镜像体积、避免在镜像中包含敏感信息（应使用 Secret）、使用特定的版本标签而非 latest（避免意外更新）。将配置文件打包到镜像中会导致镜像耦合配置，应使用 ConfigMap 分离。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "容器运行时在 Kubernetes 中的角色是什么？",
        "type": "单选",
        "options": [
            "调度 Pod 到节点",
            "管理 Kubernetes 环境中容器的执行和生命周期",
            "提供持久化存储",
            "实现 Service 的负载均衡"
        ],
        "answer": [
            1
        ],
        "explanation": "容器运行时的角色是管理 Kubernetes 环境中容器的执行和生命周期，包括下载容器镜像、启动和停止容器、管理容器网络和存储等。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "Kubernetes 支持哪些容器运行时？",
        "type": "多选",
        "options": [
            "containerd",
            "CRI-O",
            "Docker Engine（通过 CRI 兼容器运行时）",
            "Kata Containers（通过 CRI）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 通过容器运行时接口（CRI）支持任何实现了 CRI 的运行时，包括：containerd、CRI-O、Kata Containers（提供虚机隔离）。Docker Engine 通过 dockershim（已废弃）或直接安装 CRI 兼容组件也可使用。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "CRI（Container Runtime Interface）的作用是什么？",
        "type": "单选",
        "options": [
            "管理容器网络",
            "定义 kubelet 与容器运行时之间的接口",
            "管理容器存储",
            "实现容器镜像仓库"
        ],
        "answer": [
            1
        ],
        "explanation": "CRI（Container Runtime Interface）定义了 kubelet 与容器运行时之间的接口，包括 gRPC 服务（用于运行时和镜像服务）。CRI 使得 Kubernetes 可以灵活地切换和扩展容器运行时。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如何选择容器运行时？",
        "type": "多选",
        "options": [
            "基于性能需求和资源占用",
            "考虑隔离要求（进程级别 vs 虚机级别）",
            "确保兼容性（支持 Kubernetes 版本）",
            "只选择 Docker，因为它是唯一选项"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "选择容器运行时应考虑：性能需求和资源占用（如 containerd 较轻量）、隔离要求（如 Kata Containers 提供虚机级别隔离）、兼容性（运行时支持的 Kubernetes API 版本）。Docker 不是唯一选项，containerd 和 CRI-O 也是常用选择。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "RuntimeClass 的用途是什么？",
        "type": "单选",
        "options": [
            "运行多个容器应用",
            "确保 Kubernetes 使用特定的容器运行时或运行时配置运行 Pod",
            "管理容器网络",
            "监控容器性能"
        ],
        "answer": [
            1
        ],
        "explanation": "RuntimeClass 用于确保 Kubernetes 使用指定的容器运行时或运行时配置运行 Pod。它允许在集群中使用多个容器运行时（如普通运行时和安全运行时）或使用同一运行时但不同设置。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如何为 Pod 指定 RuntimeClass？",
        "type": "单选",
        "options": [
            "在 Pod 的 annotations 中指定",
            "在 Pod 的 spec.runtimeClassName 字段中指定",
            "在容器的环境变量中指定",
            "在 Pod 的 labels 中指定"
        ],
        "answer": [
            1
        ],
        "explanation": "在 Pod 的 spec.runtimeClassName 字段中指定使用哪个 RuntimeClass。RuntimeClass 对象在集群级别定义，包含容器运行时的配置，Pod 通过名称引用。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "RuntimeClass 的典型使用场景是什么？",
        "type": "多选",
        "options": [
            "需要虚机级别隔离的工作负载（使用 Kata Containers）",
            "需要特定 GPU 或硬件配置的工作负载",
            "用于安全性要求高的应用（使用 gVisor）",
            "管理所有普通应用"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "RuntimeClass 的典型使用场景：需要虚机级别隔离的工作负载（使用 Kata Containers）、需要特定 GPU 或硬件配置（配置不同的运行时参数）、安全性要求高的应用（使用 gVisor 等沙箱运行时）。普通应用使用默认运行时即可。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "容器环境中包含哪些信息？",
        "type": "多选",
        "options": [
            "环境变量",
            "Service 账户信息",
            "Pod 的 IP 地址",
            "容器镜像仓库的用户名和密码"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "容器环境包含：环境变量（包括自定义和系统环境变量）、Service 账户信息（token、CA 证书等）、Pod 的 IP 地址等。容器镜像仓库的用户名和密码应通过 Secret 或 ImagePullSecrets 注入，不在容器环境中直接暴露。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "容器通过哪些方式获取环境变量？",
        "type": "多选",
        "options": [
            "Pod 定义中的 env 字段",
            "ConfigMap",
            "Secret",
            "RuntimeClass"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "容器可以通过 Pod 定义中的 env 字段直接定义环境变量、从 ConfigMap 注入（通过 configMapKeyRef）、从 Secret 注入（通过 secretKeyRef）等方式获取环境变量。RuntimeClass 用于指定容器运行时，不是环境变量来源。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "如何使用 Pod FieldRef 环境变量？",
        "type": "单选",
        "options": [
            "Pod FieldRef 不支持",
            "通过 Pod 的 metadata 或 spec 字段值作为环境变量",
            "通过 ConfigMap 注入",
            "通过 Secret 注入"
        ],
        "answer": [
            1
        ],
        "explanation": "Pod FieldRef 允许将 Pod 的 metadata 或 spec 字段值（如 metadata.name、metadata.namespace、spec.nodeName、status.podIP）作为环境变量注入到容器中。不是通过 ConfigMap 或 Secret 注入的。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如何使用 ResourceFieldRef 环境变量？",
        "type": "单选",
        "options": [
            "ResourceFieldRef 不支持",
            "将 Pod 的请求或限制资源值（如 CPU、内存）作为环境变量注入",
            "通过 ConfigMap 注入",
            "通过 Secret 注入"
        ],
        "answer": [
            1
        ],
        "explanation": "ResourceFieldRef 将 Pod 的 requests 或 limits 资源值（如 CPU、内存）作为环境变量注入到容器中，例如，将 requests.memory 注入为环境变量。不是通过 ConfigMap 或 Secret 注入的。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "容器生命周期钩子有哪些类型？",
        "type": "多选",
        "options": [
            "PostStart",
            "PreStop"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "容器生命周期钩子有两种类型：PostStart（容器启动后立即执行）和 PreStop（容器终止前执行）。这些钩子允许在容器生命周期的特定点执行操作，如在启动后执行初始化任务、在终止前清理资源。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "PostStart 钩子何时执行？",
        "type": "单选",
        "options": [
            "容器启动之前",
            "容器启动后立即执行",
            "容器正常运行中",
            "容器终止之后"
        ],
        "answer": [
            1
        ],
        "explanation": "PostStart 钩子在容器启动后立即执行，但无法保证执行的时间点相对于容器 ENTRYPOINT 或 COMMAND 的执行顺序。如果钩子执行时间过长，容器可能无法进入 running 状态。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "PreStop 钩子何时执行？",
        "type": "单选",
        "options": [
            "容器启动之前",
            "容器运行中",
            "容器被终止之前",
            "容器终止之后"
        ],
        "answer": [
            2
        ],
        "explanation": "PreStop 钩子在容器被终止之前执行，用于执行清理操作，如优雅关闭服务、释放资源。Pod 的 terminationGracePeriodSeconds 限制 PreStop 钩子的执行时间。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "容器生命周期钩子支持哪些处理方式？",
        "type": "多选",
        "options": [
            "Exec（在容器内执行命令）",
            "HTTPGet（执行 HTTP GET 请求）",
            "TCPSocket（打开 TCP 连接）",
            "GRPC"
        ],
        "answer": [
            0
        ],
        "explanation": "容器生命周期钩子支持两种处理方式：Exec（在容器内执行命令）和 HTTPGet（向容器内的端点执行 HTTP GET 请求）。TCPSocket 和 GRPC 是探针支持的方式，不支持用于生命周期钩子。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如果容器生命周期钩子执行失败会发生什么？",
        "type": "单选",
        "options": [
            "容器永远不会启动",
            "会记录日志并继续执行容器生命周期",
            "容器立即被删除",
            "Pod 被驱逐"
        ],
        "answer": [
            1
        ],
        "explanation": "如果容器生命周期钩子执行失败，会记录日志警告并继续执行容器生命周期。PostStart 钩子失败不会阻止容器启动，PreStop 钩子失败不会阻止容器终止。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "容器资源请求（requests）的作用是什么？",
        "type": "单选",
        "options": [
            "限制容器可使用的最大资源量",
            "声明容器所需的最小资源量，用于调度",
            "容器的配额",
            "容器的网络带宽限制"
        ],
        "answer": [
            1
        ],
        "explanation": "容器资源请求（requests）声明容器所需的最小资源量（CPU、内存等），用于调度决策：确保 Pod 被调度到有足够资源的节点。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "容器资源限制（limits）的作用是什么？",
        "type": "单选",
        "options": [
            "声明容器所需的最小资源量",
            "限制容器可使用的最大资源量，超出则限制或终止",
            "容器的配额控制",
            "容器的网络带宽配置"
        ],
        "answer": [
            1
        ],
        "explanation": "容器资源限制（limits）限制容器可使用的最大资源量，当容器超出限制时（如内存超出），可能会被 OOM 终止。CPU 限制通过 cgroup 份额实现，内存限制会触发 OOM Kill。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "如何设置容器的 CPU 请求和限制？",
        "type": "单选",
        "options": [
            "直接设置 CPU 时间片",
            "通过 CPU 核心数或毫核表示",
            "通过 CPU 百分比",
            "无法设置"
        ],
        "answer": [
            1
        ],
        "explanation": "容器 CPU 请求和限制通过 CPU 核心数或毫核表示，例如：250m 表示 0.25 核（250 毫核），1 表示 1 核，2 表示 2 核。不是通过时间片、百分比或无法直接设置的。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "如何设置容器的内存请求和限制？",
        "type": "单选",
        "options": [
            "通过内存缓存大小",
            "通过字节数表示，如 128Mi, 1Gi",
            "使用内存百分比",
            "无法设置"
        ],
        "answer": [
            1
        ],
        "explanation": "容器内存请求和限制通过字节数表示，使用 E、P、T、G、M、K 等单位，或者 Ei、Pi、Ti、Gi、Mi、Ki（二进制单位），如 128Mi 表示 128 MiB，1Gi 表示 1 GiB。不是使用内存百分比。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "什么是容器的 QoS（服务质量）等级？",
        "type": "单选",
        "options": [
            "容器的网络服务质量",
            "根据容器资源的 requests 和 limits 确定的调度和驱逐优先级等级",
            "容器的配额限制",
            "容器的监控等级"
        ],
        "answer": [
            1
        ],
        "explanation": "容器的 QoS（服务质量）等级根据容器资源的 requests 和 limits 确定，用于调度和资源回收（驱逐）时的优先级。有三个 QoS 类型：Guaranteed、Burstable、BestEffort。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如何将容器设置为 Guaranteed QoS？",
        "type": "单选",
        "options": [
            "为容器设置 requests 和 limits，且 CPU 和内存的 requests 等于 limits",
            "仅设置 limits",
            "仅设置 requests",
            "不设置任何 requests 和 limits"
        ],
        "answer": [
            0
        ],
        "explanation": "要将容器设置为 Guaranteed QoS，需要为容器设置 requests 和 limits，且 CPU 和内存的 requests 必须等于 limits。Guaranteed QoS 的容器获得最高优先级，只在系统资源不足且需要优先保证其他容器时才会被最后驱逐。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "Guaranteed、Burstable 和 BestEffort QoS 的区别是什么？",
        "type": "单选",
        "options": [
            "没有区别，只是名称不同",
            "Guaranteed: requests == limits；Burstable: 设置了 requests，且至少一个容器 requests < limits；BestEffort: 未设置任何 requests 或 limits",
            "Guaranteed: 仅设置 limits；Burstable: 仅设置 requests；BestEffort: requests 和 limits 都没有",
            "Guaranteed: 不限制资源；Burstable: 限制资源；BestEffort: 严格限制资源"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 中容器 QoS 分为三类：\n1) **Guaranteed**：为所有容器设置了 requests 和 limits，且 CPU 和内存的 requests 必须等于 limits（例如：requests: 500m, limits: 500m）。\n2) **Burstable**：至少设置了一个容器的 requests，且至少有一个容器的 requests < limits（例如：requests: 500m, limits: 1000m）。\n3) **BestEffort**：未设置任何 requests 或 limits，可以使用节点的所有空闲资源。\n\nQoS 影响 Pod 的调度和驱逐优先级：Guaranteed 优先级最高，其次是 Burstable，最后是 BestEffort。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "Kubernetes 提供哪些类型的探针？",
        "type": "多选",
        "options": [
            "livenessProbe（存活探针）",
            "readinessProbe（就绪探针）",
            "startupProbe（启动探针）",
            "performanceProbe（性能探针）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 提供三种探针：livenessProbe（检测应用是否运行，失败则重启容器）、readinessProbe（检测应用是否准备好接收流量，失败则从 Service 中移除）、startupProbe（检测慢启动应用是否启动）。没有性能探针。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "存活探针（livenessProbe）的作用是什么？",
        "type": "单选",
        "options": [
            "检测应用是否准备好接收流量",
            "检测应用是否仍在运行，失败则重启容器",
            "检测应用是否已启动",
            "监控应用性能"
        ],
        "answer": [
            1
        ],
        "explanation": "存活探针（livenessProbe）检测应用是否仍在运行，当探针失败时，kubelet 会重启容器。存活探针用于处理应用死锁等无法自动恢复的情况。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "就绪探针（readinessProbe）的作用是什么？",
        "type": "单选",
        "options": [
            "检测应用是否仍在运行，失败则重启容器",
            "检测应用是否准备好接收流量，失败则从 Service 的 Endpoints 中移除",
            "检测应用是否已启动",
            "监控应用性能"
        ],
        "answer": [
            1
        ],
        "explanation": "就绪探针（readinessProbe）检测应用是否准备好接收流量，失败则从 Service 的 Endpoints 中移除，暂时停止接收流量。就绪探针失败时不会重启容器。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "启动探针（startupProbe）的用途是什么？",
        "type": "单选",
        "options": [
            "检测应用是否停止",
            "用于慢启动应用，在应用启动前禁用其他探针",
            "检测应用是否准备好接收流量",
            "检测应用性能"
        ],
        "answer": [
            1
        ],
        "explanation": "启动探针（startupProbe）用于慢启动应用。在启动探针成功之前，其他探针（存活探针和就绪探针）不会执行，避免在应用启动过程中被当作失败而重启或从 Service 中移除。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "探针支持哪些处理方式？",
        "type": "多选",
        "options": [
            "Exec（容器内执行命令）",
            "HTTPGet（HTTP GET 请求）",
            "TCPSocket（TCP 连接检查）",
            "GRPC"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "探针支持三种处理方式：Exec（在容器内执行命）、HTTPGet（向容器内的端点执行 HTTP GET 请求）、TCPSocket（打开到容器的 TCP 连接）。Kubernetes 1.24+ 支持 GRPC 探针（通过 grpcProbe）。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "什么是探针的 periodSeconds？",
        "type": "单选",
        "options": [
            "探针超时时间",
            "探针执行的时间间隔",
            "探针重试次数",
            "探针初始延迟"
        ],
        "answer": [
            1
        ],
        "explanation": "探针的 periodSeconds 是探针执行的时间间隔（默认 10 秒）。探针的其他参数包括：timeoutSeconds（超时时间，默认 1 秒）、successThreshold（成功阈值，默认 1， startupProbe 默认 30）、failureThreshold（失败阈值，默认 3）、initialDelaySeconds（初始延迟）。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "Pod 中的容器如何相互通信？",
        "type": "单选",
        "options": [
            "通过各自的 IP 地址",
            "通过 localhost 和端口",
            "通过 Service 名称",
            "通过节点 IP"
        ],
        "answer": [
            1
        ],
        "explanation": "由于 Pod 中的容器共享网络命名空间（同一个 IP 地址和端口空间），它们可以通过 localhost 和端口相互通信。不需要使用各自的 IP 地址或 Service 名称通信。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "Pod 中的容器共享什么？",
        "type": "多选",
        "options": [
            "网络命名空间（IP 地址和端口空间）",
            "存储卷（Volume）",
            "进程命名空间（共享 PID）",
            "UTS 命名空间（共享主机名）"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "Pod 中的容器共享：网络命名空间（同一个 IP 地址和端口空间）、存储卷（可以通过 emptyDir 或共享卷）、UTS 命名空间（相同的主机名）。默认情况下，容器不共享进程命名空间，除非设置了 shareProcessNamespace: true。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如何设置容器监听的端口？",
        "type": "多选",
        "options": [
            "通过容器的 env 字段设置环境变量",
            "通过 Pod 的 spec.containers.ports 字段声明",
            "在容器镜像的 Dockerfile 中指定 EXPOSE",
            "在容器的 command 中指定"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "容器端口可以通过多种方式设置：在 POD 定义中通过 ports 字段声明（用于文档和某些网络策略）、在镜像 Dockerfile 中使用 EXPOSE（仅用于文档，实际监听由应用决定）、在容器的 command 或应用启动参数中指定、通过环境变量传递给应用。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "emptyDir 卷的特点是什么？",
        "type": "多选",
        "options": [
            "当 Pod 被删除时，卷中的数据会被删除",
            "Pod 中的容器可以共享 emptyDir 卷",
            "emptyDir 数据持久化到节点上",
            "emptyDir 确保数据持久化"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "emptyDir 卷的特点：当 Pod 被删除时，emptyDir 卷中的数据会被删除、Pod 中的容器可以共享 emptyDir 卷。emptyDir 可以是节点的磁盘、内存（emptyDir.medium: Memory）等。emptyDir 不保证数据持久化，用于临时存储。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "hostPath 卷的用途是什么？",
        "type": "多选",
        "options": [
            "将节点上的文件或目录挂载到 Pod 中",
            "访问节点上的系统信息",
            "提供持久化存储",
            "实现 Pod 间数据共享"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "hostPath 卷用于将节点上的文件或目录挂载到 Pod 中，典型应用场景包括：访问节点上的系统信息、在 Pod 内使用节点文件系统做持久化存储（与节点绑定）。hostPath 卷不适合 Pod 间数据共享，因为 Pod 被调度到不同节点时数据不会同步。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如何选择卷类型？",
        "type": "多选",
        "options": [
            "emptyDir：临时存储，Pod 删除时数据删除",
            "hostPath：需要访问节点文件系统或与节点绑定的数据",
            "PVC/PV：持久化存储，独立于 Pod 和节点",
            "ConfigMap/Secret：配置和敏感信息"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "卷类型选择：emptyDir（临时存储，Pod 删除时数据删除）、hostPath（需要访问节点文件系统或与节点绑定的数据）、PVC/PV（持久化存储，独立于 Pod 和节点）、ConfigMap/Secret（配置和敏感信息）。应根据数据持久性要求、数据共享需求、网络需求选择。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "Pod 中如何设置容器启动的命令和参数？",
        "type": "多选",
        "options": [
            "command 字段：覆盖镜像的 ENTRYPOINT",
            "args 字段：覆盖镜像的 CMD",
            "不设置：使用镜像的 ENTRYPOINT 和 CMD",
            "通过环境变量设置"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Pod 中设置容器启动命令和参数：command 字段覆盖镜像的 ENTRYPOINT、args 字段覆盖镜像的 CMD、不设置时使用镜像文件。如果不设置 command 而设置 args，args 会作为 ENTRYPOINT 的参数。不是通过环境变量设置的。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "当在 Pod 中设置 command 字段但不设置 args 字段时，会发生什么？",
        "type": "单选",
        "options": [
            "容器报错",
            "Command 作为 ENTRYPOINT，镜像的 CMD 完全被忽略",
            "Command 作为 CMD",
            "使用镜像的默认配置"
        ],
        "answer": [
            1
        ],
        "explanation": "当在 Pod 中设置 command 字段但不设置 args 字段时，command 作为 ENTRYPOINT，镜像的 CMD 完全被忽略。如果只想覆盖 CMD 而不设置 ENTRYPOINT，可以在 Pod 中只设置 args。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如何在 Kubernetes 中动态传递命令参数？",
        "type": "单选",
        "options": [
            "无法动态传递",
            "通过环境变量或 ConfigMap 注入，然后在 args 字段引用",
            "必须修改镜像",
            "通过 annotations"
        ],
        "answer": [
            1
        ],
        "explanation": "可以在 args 字段中使用 env 字段引用的环境变量，这些变量可以从 EnvVarSource（如 ConfigMapKeyRef、SecretKeyRef、FieldRef、ResourceFieldRef）动态注入。无需修改镜像，也无需使用 annotations。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "当 Pod 被删除时，容器如何终止？",
        "type": "多选",
        "options": [
            "容器接收到 SIGTERM 信号",
            "容器执行 PreStop 钩子（如果定义）",
            "等待 terminationGracePeriodSeconds",
            "如果容器在超时后仍不退出，会接到 SIGKILL"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Pod 删除时容器终止流程：容器接收到 SIGTERM 信号、容器执行 PreStop 钩子（如果定义）、等待 terminationGracePeriodSeconds（默认 30 秒）、如果容器在超时后仍不退出，会接到 SIGKILL 强制终止。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "terminationGracePeriodSeconds 的作用是什么？",
        "type": "单选",
        "options": [
            "限制容器启动时间",
            "限制 Pod 终止前等待容器优雅关闭的时长",
            "限制容器内存使用",
            "限制容器 CPU 使用"
        ],
        "answer": [
            1
        ],
        "explanation": "terminationGracePeriodSeconds 限制 Pod 终止前等待容器优雅关闭的时长（默认 30 秒），包括 SIGTERM 信号和 PreStop 钩子的执行时间。超时后容器会被 SIGKILL 强制终止。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "如何配置容器镜像拉取策略？",
        "type": "多选",
        "options": [
            "Always：总是拉取镜像",
            "IfNotPresent：本地不存在时拉取",
            "Never：不拉取，仅使用本地镜像",
            "Once：启动时拉取一次"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "容器镜像拉取策略有三种：Always（总是拉取镜像，适合使用 :latest 标签）、IfNotPresent（本地不存在时拉取，默认策略）、Never（不拉取，仅使用本地镜像）。没有 Once 选项。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "如何访问私有容器镜像仓库？",
        "type": "多选",
        "options": [
            "通过 imagePullSecrets 为 Pod 提供凭据",
            "在节点上配置 Docker 配置文件",
            "在节点上配置容器运行时的认证",
            "修改 Kubernetes 源码"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "访问私有容器镜像仓库的方式：为 Pod 设置 imagePullSecrets（Secret 类型为 docker-registry）、在节点上配置 Docker 配置文件（适用于 dockershim）或容器运行时的认证配置。不建议修改 Kubernetes 源码。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "imagePullSecrets 的作用是什么？",
        "type": "单选",
        "options": [
            "存储容器镜像",
            "提供拉取私有容器镜像仓库的凭据",
            "公开容器镜像",
            "备份容器镜像"
        ],
        "answer": [
            1
        ],
        "explanation": "imagePullSecrets 用于提供拉取私有容器镜像仓库（如 DockerHub、私有镜像仓库）的凭据（用户名和密码）。通过创建类型为 docker-registry 的 Secret，并在 Pod 的 imagePullSecrets 字段引用。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "多阶段构建（Multi-stage Build）的优势是什么？",
        "type": "多选",
        "options": [
            "减小最终镜像体积",
            "分离编译和运行环境",
            "提高镜像安全性（不包含源代码和编译工具）",
            "加快镜像部署速度（不需要额外步骤）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "多阶段构建的优势：减小最终镜像体积（仅包含运行时依赖和编译产物）、分离编译和运行环境（减少攻击面）、提高镜像安全性（不包含源代码、编译器和开发工具）。需要注意的是镜像构建时间不会减少，但部署速度可能因镜像体积减小而加快。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "Pod 的资源请求是如何计算的？",
        "type": "单选",
        "options": [
            "取 Pod 中所有容器的资源请求的最大值",
            "取 Pod 中所有容器的资源请求的最小值",
            "取 Pod 中所有容器的资源请求的总和",
            "取 Pod 中第一个容器的资源请求"
        ],
        "answer": [
            2
        ],
        "explanation": "Pod 的资源请求是其所有容器资源请求的总和。调度器根据 Pod 的总资源请求（CPU 和内存）选择资源充足的节点。确保 Pod 内所有容器能同时获得所需的资源。",
        "difficulty": "进阶"
    },
    {
        "module": "容器",
        "question": "容器重启策略（restartPolicy）有哪些类型？",
        "type": "多选",
        "options": [
            "Always：总是重启",
            "OnFailure：容器异常退出时重启（退出码非0）",
            "Never：不重启",
            "WhenError：错误时重启"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "容器重启策略类型：Always（总是重启，适用于长期运行的守护进程）、OnFailure（容器异常退出时重启，退出码非0，适用于批处理任务）、Never（不重启，适用于任务失败需要手动排查）。没有 WhenError 选项。",
        "difficulty": "基础"
    },
    {
        "module": "容器",
        "question": "当容器正常退出（退出码为 0）时，不同重启策略的行为是什么？",
        "type": "单选",
        "options": [
            "Always 和 OnFailure 都会重启，Never 不会重启",
            "Always 会重启，OnFailure 和 Never 不会重启",
            "所有策略都不会重启容器",
            "OnFailure 会重启，Always 和 Never 不会重启"
        ],
        "answer": [
            1
        ],
        "explanation": "当容器正常退出（退出码为 0）时，不同重启策略的行为：Always（无论退出码如何都会重启容器，用于守护进程）、OnFailure（仅在退出码非 0 时重启，成功退出不重启）、Never（不重启容器）。restartPolicy 在 Pod 级别设置，适用于 Pod 内的所有容器。注意：对于由 Deployment 等控制器管理的 Pod，控制器会根据副本数自动重建 Pod，不依赖 restartPolicy。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Pod 是 Kubernetes 中最小的可部署计算对象，这意味着什么？",
        "type": "单选",
        "options": [
            "Pod 是最小的运行单位，包含一个或多个容器",
            "Pod 不可分割，必须作为一个整体调度和管理",
            "Pod 不能包含多个容器",
            "Pod 不是部署单位，容器才是"
        ],
        "answer": [
            1
        ],
        "explanation": "Pod 是最小的可部署计算对象，这意味着 Pod 是作为一个整体被调度到节点上的，Pod 中的容器共享网络、存储等资源，必须作为一个整体进行管理。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Pod 的特点是什么？",
        "type": "多选",
        "options": [
            "有定义的生命周期",
            "节点发生严重故障时 Pod 会失散",
            "可以包含多个协作的容器",
            "IP 地址永久不变"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Pod 的特点：有定义的生命周期（从 Pending 到 Running 再到 Succeeded 或 Failed）、节点故障时 Pod 会失散需要重新创建、可以包含多个协作的容器。Pod 的 IP 地址不是永久的，重启后可能变化。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Deployment 的主要用途是什么？",
        "type": "单选",
        "options": [
            "管理有状态应用",
            "管理无状态应用，提供声明式更新和滚动升级",
            "运行定时任务",
            "在每个节点上运行守护进程"
        ],
        "answer": [
            1
        ],
        "explanation": "Deployment 用于管理无状态应用，提供声明式更新和滚动升级。Deployment 通过管理 ReplicaSet 确保指定数量的 Pod 副本在运行，支持应用的版本更新和回滚。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Deployment 如何实现滚动升级？",
        "type": "单选",
        "options": [
            "同时删除所有 Pod，然后启动新版本 Pod",
            "逐渐替换旧版本 Pod，确保始终有可用的副本",
            "立即创建新版本 Pod，然后删除旧版本 Pod",
            "备份旧版本 Pod 的数据"
        ],
        "answer": [
            1
        ],
        "explanation": "Deployment 通过滚动升级逐渐替换旧版本 Pod，确保应用升级过程中始终有足够的可用副本。可以通过 maxSurge（最大超出数）和 maxUnavailable（最大不可用数）控制升级速率。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "ReplicaSet 的作用是什么？",
        "type": "单选",
        "options": [
            "提供应用升级和回滚功能",
            "确保指定数量的 Pod 副本在运行",
            "管理有状态应用",
            "在每个节点上运行 Pod"
        ],
        "answer": [
            1
        ],
        "explanation": "ReplicaSet 确保指定数量的 Pod 副本在运行，用于维持无状态应用的期望副本数。ReplicaSet 是 Deployment 的底层机制，Deployment 通过管理 ReplicaSet 实现版本管理、滚动升级和回滚。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "StatefulSet 的主要用途是什么？",
        "type": "单选",
        "options": [
            "管理无状态应用",
            "管理有状态应用，提供稳定的网络标识和持久存储",
            "运行定时任务",
            "在每个节点上运行守护进程"
        ],
        "answer": [
            1
        ],
        "explanation": "StatefulSet 用于管理有状态应用，提供稳定的网络标识、持久存储、有序部署和扩展。适用于数据库（MySQL、PostgreSQL）、消息队列（Kafka）等有状态服务。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "StatefulSet 提供哪些特性？",
        "type": "多选",
        "options": [
            "稳定的网络标识（稳定的 DNS 名称）",
            "有序的部署和扩展（从 0 到 N-1）",
            "有序的终止和删除（从 N-1 到 0）",
            "与 PersistentVolume 的稳定绑定"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "StatefulSet 提供以下特性：稳定的网络标识（每个 Pod 有稳定的 hostname 和 DNS 名称）、有序的部署和扩展（依次启动 Pod 0 到 N-1）、有序的终止和删除（依据 N-1 到 0 顺序）、与 PersistentVolume 的稳定绑定（每个 Pod 对应单独的 PV）。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "DaemonSet 的特点是什么？",
        "type": "单选",
        "options": [
            "确保指定数量的 Pod 副本在运行",
            "在每个符合条件的节点上运行 Pod 的副本",
            "提供滚动升级功能",
            "管理有状态应用"
        ],
        "answer": [
            1
        ],
        "explanation": "DaemonSet 会在每个符合条件的节点上运行 Pod 的副本，适合运行集群级别的系统服务，如网络插件、日志收集、监控代理等。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "DaemonSet 的典型应用场景是什么？",
        "type": "多选",
        "options": [
            "在每个节点上运行集群存储守护进程",
            "在每个节点上运行日志收集守护进程",
            "在每个节点上运行监控守护进程",
            "运行有状态的数据库应用"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "DaemonSet 的典型应用场景包括：在每个节点上运行集群存储守护进程（如 glusterd、ceph）、日志收集守护进程（如 fluentd）、监控守护进程（如 node-exporter）。不适合运行有状态的数据库应用。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Job 的作用是什么？",
        "type": "单选",
        "options": [
            "持续运行的应用",
            "完成一次任务后停止",
            "定时执行任务",
            "在每个节点上运行守护进程"
        ],
        "answer": [
            1
        ],
        "explanation": "Job 定义一次性任务，完成到成功状态后停止。Job 适用于批处理任务、数据处理任务等，不同于 Deployment（持续运行）和 CronJob（定时重复执行）。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Job 有哪几种完成模式？",
        "type": "多选",
        "options": [
            "Non-parallel Jobs（非并行 Job，一个 Pod 完成任务）",
            "Parallel Jobs with a fixed completion count（固定完成数，指定成功完成的 Pod 数量）",
            "Parallel Jobs with a work queue（工作队列，Pod 从队列中获取任务）",
            "Continuous Jobs（持续运行 Job）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Job 有三种完成模式：非并行（一个 Pod 完成所有工作，completions 默认为 1）、并行固定完成数（指定 completions、parallelism）、工作队列模式（Pod 从外部工作队列获取任务）。没有Continuous Jobs模式。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Job 的 completions 字段表示什么？",
        "type": "单选",
        "options": [
            "Job 的最大运行时间",
            "Job 的并行 Pod 数量",
            "Job 成功完成的 Pod 数量",
            "Job 的重试次数"
        ],
        "answer": [
            2
        ],
        "explanation": "Job 的 completions 字段表示 Job 成功完成的 Pod 数量。当指定数量为 N 的 Pod 成功完成时，Job 标记为完成。默认是 1，即一个 Pod 成功完成后标记 Job 完成。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Job 的 parallelism 字段表示什么？",
        "type": "单选",
        "options": [
            "Job 完成的总次数",
            "Job 同时运行的 Pod 副本数",
            "Job 的超时时间",
            "Job 的失败容忍数"
        ],
        "answer": [
            1
        ],
        "explanation": "Job 的 parallelism 字段表示 Job 同时运行的 Pod 副本数。默认是 1。可以增加并行度加快 Job 完成，但需确保任务支持并行执行。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "CronJob 的作用是什么？",
        "type": "单选",
        "options": [
            "运行一次性任务",
            "根据时间表定期运行 Job",
            "持续运行应用",
            "在每个节点上运行守护进程"
        ],
        "answer": [
            1
        ],
        "explanation": "CronJob 根据时间表（cron 表达式）定期运行 Job，可用于定时任务如数据库备份、日志清理、数据同步等。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "CronJob 的 schedule 字段如何使用？",
        "type": "单选",
        "options": [
            "使用 ISO 8601 格式",
            "使用 cron 表达式（分 时 日 月 周）",
            "使用自然语言",
            "使用间隔时间"
        ],
        "answer": [
            1
        ],
        "explanation": "CronJob 的 schedule 字段使用 cron 表达式格式：分 时 日 月 周。例如：*/1 * * * * 表示每分钟运行一次，0 0 * * * 表示每天午夜运行一次。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "CronJob 有哪些时间策略？",
        "type": "多选",
        "options": [
            "Allow（允许并发执行）",
            "Forbid（禁止并发执行，跳过新执行）",
            "Replace（终止当前执行，开始新执行）",
            "Wait（等待当前执行完成后执行新任务）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "CronJob 的 concurrencyPolicy 字段支持：Allow（允许，可以并发执行多个 Job）、Forbid（禁止，如果上次执行未完成则跳过新执行）、Replace（替换，如果上次执行未完成则终止它并开始新执行）。没有 Wait 策略。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "CronJob 的 startingDeadlineSeconds 字段表示什么？",
        "type": "单选",
        "options": [
            "Job 的执行超时时间",
            "未执行的 Job 可以被重新调度的截止时间",
            "CronJob 的启动延迟",
            "Job 的并行时间限制"
        ],
        "answer": [
            1
        ],
        "explanation": "CronJob 的 startingDeadlineSeconds 表示未执行的 Job 可以被重新调度的截止时间。如果错过多个计划时间，Kubernetes 会在超过此时间段后放弃已错过的执行。这有助于避免因调度问题导致雪球效应。",
        "difficulty": "高级"
    },
    {
        "module": "工作负载",
        "question": "Horizontal Pod Autoscaler (HPA) 的作用是什么？",
        "type": "单选",
        "options": [
            "扩展集群节点",
            "根据指标自动调整 Pod 副本数量",
            "扩展存储容量",
            "扩展网络带宽"
        ],
        "answer": [
            1
        ],
        "explanation": "HPA 根据 CPU 使用率或其他指标（内存、自定义指标）自动调整 Deployment、ReplicaSet、StatefulSet 等控制器的 Pod 副本数量，实现弹性伸缩。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "HPA 支持哪些指标？",
        "type": "多选",
        "options": [
            "Resource Metrics（CPU、内存）",
            "Custom Metrics（自定义指标，如 QPS）",
            "External Metrics（外部系统指标）",
            "Node Metrics（节点级指标）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "HPA 支持三种类型的指标：Resource Metrics（资源指标，如 CPU、内存）、Custom Metrics（自定义指标，来自 Metrics API，如 QPS、请求延迟）、External Metrics（外部系统指标，如外部消息队列长度）。HPA 不直接使用节点级指标。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "HPA 如何根据 CPU 使用率自动扩展？",
        "type": "单选",
        "options": [
            "当 CPU 使用率超过阈值时增加副本，低于阈值时减少副本",
            "固定扩展到指定的副本数",
            "只在节点负载高时扩展",
            "无法根据 CPU 自动扩展"
        ],
        "answer": [
            0
        ],
        "explanation": "HPA 根据算法自动调整副本数量：当前副本数 = ceil(target平均使用率 / target使用率 * 当前副本数)。当 CPU 使用率超过阈值时增加副本，低于阈值时减少副本。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Pod 中的 Init Container（初始化容器）的作用是什么？",
        "type": "多选",
        "options": [
            "在应用容器启动前执行初始化任务",
            "可以运行应用程序容器不包含的工具",
            "初始化容器执行完成后才会启动应用容器",
            "初始化容器一直运行"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Init Container 初始化容器的作用：在应用容器启动前执行初始化任务（如等待依赖服务、生成配置文件），可以使用不同于应用容器的工具（如 wget、git），串行执行（一个完成后才开始下一个）。初始化容器成功完成后才会启动应用容器，执行完毕后会终止，不会一直运行。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Pod 中可以有多个 Init Container 吗？",
        "type": "单选",
        "options": [
            "不可以，只能有一个",
            "可以，按声明顺序串行执行",
            "可以，所有 Init Container 并发执行",
            "可以，随机执行顺序"
        ],
        "answer": [
            1
        ],
        "explanation": "Pod 中可以有多个 Init Container，它们会按照 Pod spec.initContainers 字段中的声明顺序串行执行。只有所有 Init Container 都成功执行完成后，才会启动应用容器。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "什么是 Pod 生命周期？",
        "type": "单选",
        "options": [
            "Pod 的创建和删除",
            "Pod 从创建到终止的各个状态",
            "Pod 的重启策略",
            "Pod 的资源配额"
        ],
        "answer": [
            1
        ],
        "explanation": "Pod 生命周期是 Pod 从创建到终止的各个状态，包括 Pending、Running、Succeeded、Failed、Unknown。这些状态反映了 Pod 的生命周期阶段，如调度、运行、完成或失败。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Pod 的 PodPhase 有哪些值？",
        "type": "多选",
        "options": [
            "Pending",
            "Running",
            "Succeeded",
            "Failed",
            "Unknown"
        ],
        "answer": [
            0,
            1,
            2,
            3,
            4
        ],
        "explanation": "Pod 的 PodPhase（状态）有五个值：Pending（Pod 已被接收但一个或多个容器未创建或启动）、Running（至少一个容器正在运行或重启中）、Succeeded（所有容器成功终止且不会重启）、Failed（所有容器已终止且至少一个异常终止）、Unknown（无法获取 Pod 状态，如节点失联）。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "什么是 Pod 的 PodCondition？",
        "type": "单选",
        "options": [
            "Pod 的总状态（PodPhase）",
            "Pod 的条件状态，描述 Pod 的内部状态细节",
            "Pod 的资源使用情况",
            "Pod 的网络状态"
        ],
        "answer": [
            1
        ],
        "explanation": "PodCondition 是 Pod 的条件状态，描述 Pod 的内部状态细节，如 PodScheduled（是否已调度）、Initialized（Init Container 是否已完成）、Ready（Pod 是否准备好接收流量）、ContainersReady（容器是否准备好）、Unschedulable（是否不可调度）等。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Pod 如何提供就绪状态信息给 Service？",
        "type": "单选",
        "options": [
            "通过 PodCondition 的 Ready 字段",
            "通过 Pod 的 status.phase",
            "通过 Pod 的 labels",
            "通过 Pod 的 annotations"
        ],
        "answer": [
            0
        ],
        "explanation": "Pod 通过 PodCondition 的 Ready 字段提供就绪状态信息给 Service。当 Pod 的 Ready 条件为 True 时，Pod 会被添加到 Service 的 Endpoints 列表中；当为 False（或 Unknown）时，从 Endpoints 中移除。就绪探针（readinessProbe）会更新此状态。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "什么是 Pod 的资源请求和限制？",
        "type": "多选",
        "options": [
            "requests：容器需要的最小资源量",
            "limits：容器可使用的最大资源量",
            "不定义时，容器无法调度",
            "定义后容器必定获得这些资源"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "Pod 的容器可以定义资源请求和限制：requests（容器需要的最小资源量，用于调度决策）、limits（容器可使用的最大资源量，超出后会被限制或终止）。不定义时容器可以调度（QoS 为 BestEffort），但不保证获得这些资源（根据集群负载和其他 Pods 的请求）。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Pod 的重启策略有哪些？",
        "type": "多选",
        "options": [
            "Always（总是重启）",
            "OnFailure（失败时重启）",
            "Never（永不重启）",
            "UnlessStopped（除非手动停止）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Pod 的重启策略有三种：Always（容器总是重启，适合 Deployment 等工作负载）、OnFailure（容器仅在失败退出时重启，适合 Job）、Never（容器永不重启，适合 Job 或一次性任务）。UnlessStopped 不是 Kubernetes 选项。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "为什么 Deployment 中 Pod 的重启策略通常设置为 Always？",
        "type": "单选",
        "options": [
            "为了节省资源",
            "确保应用持续运行，容器退出后自动重启",
            "为了避免应用启动失败",
            "为了保证应用性能"
        ],
        "answer": [
            1
        ],
        "explanation": "Deployment 管理持续运行的应用（无状态应用），Pod 的重启策略通常是 Always，确保应用持续运行，容器意外退出后自动重启。Job 应用设置为 Never 或 OnFailure。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Job 为什么通常将重启策略设置为 OnFailure 或 Never？",
        "type": "单选",
        "options": [
            "不需要持久运行",
            "Job 是一次性任务，完成到成功状态后应停止，失败后不应无限重启",
            "因为 Job 的 Pods 不能重启",
            "因为 Deployment 不能管理 Job"
        ],
        "answer": [
            1
        ],
        "explanation": "Job 是一次性任务，完成到成功状态后应停止。设置为 OnFailure（失败时有限次数重启）或 Never（失败后不重启，由 Job 控制器根据 backoffLimit 决定是否创建新 Pod）。设置为 Always 会无限重启 Job 的 Pods，不符合设计目标。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Job 的 backoffLimit 字段表示什么？",
        "type": "单选",
        "options": [
            "Job 的运行时间限制",
            "Job 的失败容忍度（失败多少次后放弃）",
            "Job 的并行数量",
            "Job 的扩展比例"
        ],
        "answer": [
            1
        ],
        "explanation": "Job 的 backoffLimit 字段表示 Job 的失败容忍度，即失败多少次后放弃。默认值是 6。当失败的 Pod 数量达到此值时，Job 标记为 Failed，不再创建新 Pod。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "什么是 Pod 的 terminationGracePeriodSeconds？",
        "type": "单选",
        "options": [
            "Pod 的创建延迟",
            "Pod 删除时用于优雅关闭的最长等待时间",
            "Pod 重启的时间间隔",
            "Pod 的最大运行时间"
        ],
        "answer": [
            1
        ],
        "explanation": "terminationGracePeriodSeconds 是 Pod 删除时用于优雅关闭的最长等待时间（默认 30 秒）。Pod 被删除时，kubelet 会发送 SIGTERM 信号到容器，等待此时间后如果容器未终止则发送 SIGKILL 强制终止。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "什么是 Pod 的 terminationMessagePolicy？",
        "type": "单选",
        "options": [
            "控制 Pod 的何时终止",
            "控制容器的 termination message 写入方式",
            "控制 Pod 的终止信号",
            "控制 Pod 的日志保存"
        ],
        "answer": [
            1
        ],
        "explanation": "terminationMessagePolicy 控制容器的 termination message（应用写入容器文件系统的退出或错误消息）写入方式。可选值包括 File（默认，写入 /dev/termination-log 文件）、FallbackToLogsOnError（失败时从容器日志读取）。用于调试容器终止原因。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "什么是 Pod 的 activeDeadlineSeconds？",
        "type": "单选",
        "options": [
            "Pod 的最长容忍运行时间（超时后终止）",
            "Pod 的创建超时",
            "Pod 的启动延迟",
            "Pod 的重启间隔"
        ],
        "answer": [
            0
        ],
        "explanation": "activeDeadlineSeconds 是 Pod 的最长容忍运行时间，超时后 Pod 会终止。Job 可设置此字段，确保长时间运行或挂起的 Job 能够超时终止。在超时时 Pod 会被标记为 Failed。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Deployment 的 rollback 功能如何使用？",
        "type": "单选",
        "options": [
            "kubectl rollback deployment <name>",
            "kubectl rollout undo deployment <name>",
            "kubectl update deployment <name>",
            "kubectl revert deployment <name>"
        ],
        "answer": [
            1
        ],
        "explanation": "可以使用 kubectl rollout undo deployment <name> 回滚 Deployment 到上一个版本。也可以指定版本（如 --to-revision=2）。rollback 是旧版本的子命令，已不再推荐。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Deployment 的 rollback 历史记录保存在哪里？",
        "type": "单选",
        "options": [
            "etcd 数据库",
            "Deployment 的 revision history",
            "PersistentVolume",
            "ConfigMap"
        ],
        "answer": [
            1
        ],
        "explanation": "Deployment 的 rollback 历史记录保存在 Deployment 的 revision history（版本历史）中。通过 .spec.revisionHistoryLimit 可以控制保留的历史版本数（默认 10）。每个 Deployment 更新会创建一个新版本。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "StatefulSet 的优势是什么？",
        "type": "多选",
        "options": [
            "每个 Pod 有稳定的网络标识",
            "可以与 PersistentVolume 稳定绑定",
            "有序部署和扩展",
            "Pod IP 地址不会变化"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "StatefulSet 的优势：每个 Pod 有稳定的网络标识（Pod 名称和 hostname 稳定，DNS 名称格式：<statefulset-name>-<ordinal>.<service-name>）、可以与 PersistentVolume 稳定绑定（即使 Pod 被重新调度）、有序部署和扩展（从 0 到 N-1）、有序终止（从 N-1 到 0）。Pod IP 地址在不同节点间会变化。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "StatefulSet 的 scale 如何工作？",
        "type": "单选",
        "options": [
            "随机扩展到指定数量",
            "从当前数量顺序扩展到指定数量",
            "并行扩展到指定数量",
            "无法扩缩"
        ],
        "answer": [
            1
        ],
        "explanation": "StatefulSet 扩展时是顺序的：从当前数量开始（如 3）逐个扩展到目标数量（如 5），依次启动 Pod 3 和 4。缩放时也是逆序的：从最高索引开始删除。确保应用能够有序处理 Pod 的增减。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "StatefulSet 和 Deployment 的区别是什么？",
        "type": "多选",
        "options": [
            "StatefulSet 用于有状态应用，Deployment 用于无状态应用",
            "StatefulSet Pod 有稳定的标识和存储，Deployment Pod 没有",
            "StatefulSet 支持有序部署和扩展，Deployment 支持并行",
            "StatefulSet 不支持滚动升级"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "StatefulSet 和 Deployment 的区别：StatefulSet 管理有状态应用，Deployment 管理无状态应用；StatefulSet Pod 有稳定的标识和存储，Deployment Pod 没有；StatefulSet 支持有序部署、扩展和滚动升级（需配置），Deployment 支持并行快速升级。StatefulSet 可以支持滚动升级，需在 spec.updateStrategy 中配置。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "DaemonSet 如何更新？",
        "type": "单选",
        "options": [
            "手动删除所有 DaemonSet Pod 后创建",
            "通过更新 DaemonSet 模板，kubelet 自动更新 Pod",
            "必须删除并重新创建 DaemonSet",
            "DaemonSet 无法更新"
        ],
        "answer": [
            1
        ],
        "explanation": "DaemonSet 可以通过更新 spec.template 模板，kubelet 节点上的 DaemonSet 控制器会自动检测变化并更新 Pod。支持 RollingUpdate（滚动更新，默认）和 OnDelete（仅手动删除 Pod 后才更新）两种更新策略。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Job 如何清理完成的 Pod？",
        "type": "多选",
        "options": [
            "通过设置 .spec.ttlSecondsAfterFinished 字段自动清理",
            "设置成功和失败的 Pod 数量上限",
            "手动删除 Pod",
            "无法清理"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Job 可以通过设置成功和失败的 Pod 数量上限，也可以设置 .spec.ttlSecondsAfterFinished 自动清理已完成的 Pod（Kubernetes 需开启 TTL控制器）。也可以手动删除 Pod。默认情况下，Job 完成的 Pod 不会自动清理。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "CronJob 如何防止因之前的执行未完成而堆积过多的 Job？",
        "type": "单选",
        "options": [
            "设置 .spec.successfulJobsHistoryLimit 和 .spec.failedJobsHistoryLimit",
            "所有 CronJob 执行完成后，失败的 Job 会被保留在集群。",
            "清理已完成 Job 的策略由 CronJob 自动完成。",
            "不能清理 CronJob 的 Job 历史"
        ],
        "answer": [
            0
        ],
        "explanation": "通过设置 .spec.successfulJobsHistoryLimit 和 .spec.failedJobsHistoryLimit 限制保留的 Job 数量，防止 CronJob 因之前的执行未完成而堆积过多的 Job。同时，设置 .spec.concurrencyPolicy 可以控制并发策略。",
        "difficulty": "高级"
    },
    {
        "module": "工作负载",
        "question": "HPA 缩放的最小和最大副本如何设置？",
        "type": "单选",
        "options": [
            "在 Deployment 中直接设置",
            "在 HPA 的 minReplicas 和 maxReplicas 字段中设置",
            "不能设置，自动决定",
            "通过kubectl annotate deployment设置"
        ],
        "answer": [
            1
        ],
        "explanation": "HPA 通过 minReplicas 和 maxReplicas 字段设置缩放的最小和最大副本数（minReplicas 默认为 1，maxReplicas 默认无限制）。Deployment 和其他工作负载控制器通过 HPA 动态调整，不固定副本数。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "什么是 PodDisruptionBudget (PDB)？",
        "type": "单选",
        "options": [
            "Pod 的资源预算",
            "确保在维护期间至少有指定数量的 Pod 可用",
            "Pod 的网络安全策略",
            "Pod 的存储限额"
        ],
        "answer": [
            1
        ],
        "explanation": "PodDisruptionBudget (PDB) 确保在维护期间（如节点升级）至少有指定数量或百分比的 Pod 可用，防止应用不可用。PDB 适用于 Voluntary Disruptions（自愿中断，如节点 drain）。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "PDB 如何定义最小可用 Pod 数量？",
        "type": "多选",
        "options": [
            "使用 minAvailable（指定最少可用 Pod 数量）",
            "使用 maxUnavailable（指定最大不可用 Pod 数量）",
            "使用 budget 字段",
            "使用 minReplicas 字段"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "PDB 可以使用 minAvailable（指定最少可用 Pod 数量，如 5 或 80%）或 maxUnavailable（指定最大不可用 Pod 数量）定义。这两个字段互斥，不能同时使用。没有 budget 或 minReplicas 字段。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "什么是 ReplicaSet 的 selector？",
        "type": "单选",
        "options": [
            "ReplicaSet 选择节点的规则",
            "ReplicaSet 管理哪些 Pod 的规则",
            "ReplicaSet 的资源限制",
            "ReplicaSet 的版本标识"
        ],
        "answer": [
            1
        ],
        "explanation": "ReplicaSet 的 selector 是 ReplicaSet 管理哪些 Pod 的规则，通过标签选择器匹配 Pod。只有与 selector 匹配的 Pod 才会被 ReplicaSet 管理（计入期望副本数）。Deployment 通过管理 ReplicaSet 的 selector 决定管理哪些 Pod。",
        "difficulty": "基础"
    },
    {
        "module": "工作负载",
        "question": "Deployment 的 maxSurge 和 maxUnavailable 配置有什么作用？",
        "type": "多选",
        "options": [
            "maxSurge 表示滚动更新时最多可以超出期望副本数的数量",
            "maxUnavailable 表示滚动更新时最多可以不可用的副本数量",
            "这两个配置可以百分比或绝对值表示",
            "这两个配置只适用于 StatefulSet"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "maxSurge 和 maxUnavailable 字段控制 Deployment 滚动更新的速率：maxSurge 表示升级过程中最多可以超出期望副本数的数量（如 25% 或 2），maxUnavailable 表示升级过程中最多可以不可用的副本数量。它们可以设置为百分比（如 '25%'）或绝对值。配置示例：strategy: { type: RollingUpdate, rollingUpdate: { maxSurge: '25%', maxUnavailable: '25%' } }。这两个配置不适用于 StatefulSet。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "Job 的 parallelism 和 completions 字段如何配合使用？",
        "type": "单选",
        "options": [
            "parallelism 必须小于 completions",
            "parallelism 是同时运行的 Pod 数量，completions 是需要成功完成的 Pod 总数",
            "completions 是并行运行的 Pod 数量，parallelism 是需要成功完成的 Pod 总数",
            "这两个字段互斥，不能同时使用"
        ],
        "answer": [
            1
        ],
        "explanation": "Job 的 parallelism 和 completions 可以配合使用：parallelism 表示同时运行的 Pod 副本数量（默认 1），completions 表示需要成功完成的 Pod 总数（默认 1）。例如：parallelism=3, completions=6 表示最多同时运行 3 个 Pod，需要成功完成 6 个任务。当 parallelism大于completions 时，同时运行的 Pod 受限于 completions 的值。",
        "difficulty": "进阶"
    },
    {
        "module": "工作负载",
        "question": "HPA 的 behavior 字段有什么作用？",
        "type": "多选",
        "options": [
            "配置扩缩容的速率限制",
            "设置扩容和缩容的不同策略",
            "防止频繁的 Pod 数量变化导致的不稳定",
            "直接设置固定的 Pod 副本数"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "HPA 的 behavior 字段用于配置扩缩容的稳定窗口和速率限制，包括 scaleUp（扩容策略）和 scaleDown（缩容策略）。可以设置 stabilizationWindowSeconds（稳定窗口时间，防止指标波动导致频繁调整）、policies（速率限制，如每分钟最多增加多少个或多少比例的 Pod）。这有助于防止频繁的 Pod 数量变化导致的不稳定。不能直接设置固定的 Pod 副本数。",
        "difficulty": "高级"
    },
    {
        "module": "工作负载",
        "question": "当 StatefulSet 的 Pod 被删除时，它的网络标识会变化吗？",
        "type": "单选",
        "options": [
            "会，新的 Pod 会获得新的 DNS 名称",
            "不会，新的 Pod 会保留相同的网络标识",
            "取决于 Service 的配置",
            "取决于是否配置了 headless Service"
        ],
        "answer": [
            1
        ],
        "explanation": "当 StatefulSet 的 Pod 被删除并重新创建时，新的 Pod 会保留相同的网络标识。Pod 的名称（如 web-0)、hostname 和 DNS 名称（如 web-0.default.svc.cluster.local）是稳定的，不会因为重建而变化。这是 StatefulSet 相比 Deployment 的重要优势，确保有状态应用（如数据库）能够通过稳定的标识连接。PersistentVolume 也会保持绑定（通过 persistentVolumeClaimRetentionPolicy 配置）。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "Kubernetes 网络模型的基本要求是什么？",
        "type": "多选",
        "options": [
            "所有 Pod 可以不经过 NAT 直接相互通信",
            "所有节点可以与所有 Pod 通信",
            "Pod 看到的自己的 IP 与其他 Pod 看到的相同",
            "Pod IP 可以在整个集群中路由"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 网络模型要求：所有 Pod 可以不经过 NAT 直接相互通信、所有节点可以与所有 Pod 通信、Pod 看到的自己的 IP 与其他 Pod 看到的相同（不经过 NAT）。Pod IP 不一定可以在整个集群中路由（取决于 CNI 实现）。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "Pod 中的容器如何相互通信？",
        "type": "单选",
        "options": [
            "通过各自的 IP 地址",
            "通过 localhost 和端口",
            "通过 Service 名称",
            "通过节点 IP"
        ],
        "answer": [
            1
        ],
        "explanation": "由于 Pod 中的容器共享网络命名空间（同一个 IP 地址和端口空间），它们可以通过 localhost 和端口相互通信。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "服务（Service）在 Kubernetes 中的作用是什么？",
        "type": "多选",
        "options": [
            "提供稳定的 IP 地址和 DNS 名称",
            "在一个或多个后端 Pod 之间实现负载均衡",
            "实现服务发现",
            "管理容器生命周期"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "服务（Service）的作用：提供稳定的 IP 地址和 DNS 名称，在一个或多个后端 Pod 之间实现负载均衡，实现服务发现。Service 不负责管理容器生命周期。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "Kubernetes 支持哪些 Service 类型？",
        "type": "多选",
        "options": [
            "ClusterIP（集群内部访问）",
            "NodePort（通过节点端口暴露服务）",
            "LoadBalancer（通过云提供商负载均衡器暴露服务）",
            "ExternalName（映射到外部 DNS 名称）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 支持四种 Service 类型：ClusterIP（默认，仅在集群内部可访问）、NodePort（通过 <节点IP>:<端口> 暴露服务）、LoadBalancer（通过云提供商负载均衡器暴露服务）、ExternalName（DNS CNAME 映射到外部 DNS 名称）。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "ClusterIP Service 如何在集群内访问？",
        "type": "单选",
        "options": [
            "通过节点 IP 和端口",
            "通过虚拟 IP（VIP）在集群内访问",
            "通过外部 DNS 名称",
            "无法在集群内访问"
        ],
        "answer": [
            1
        ],
        "explanation": "ClusterIP Service 通过虚拟 IP（VIP）在集群内访问，该 IP 仅在集群内有效。kube-proxy 通过 iptables 或 ipvs 规则将流量路由到后端 Pod。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "NodePort Service 有什么特点？",
        "type": "多选",
        "options": [
            "在每个节点上打开一个端口",
            "通过 <节点IP>:<端口> 从外部访问",
            "与 ClusterIP 相同，多暴露一个 NodePort",
            "端口号范围：30000-32767"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "NodePort Service 的特点：在每个节点上打开一个端口（默认范围：30000-32767），通过 <节点IP>:<端口> 从外部访问。NodePort Service 会自动创建一个 ClusterIP Service，多暴露一个 NodePort。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "LoadBalancer Service 有什么特点？",
        "type": "多选",
        "options": [
            "依赖于云提供商",
            "自动创建外部负载均衡器",
            "分配一个外部 IP",
            "支持任何云平台"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "LoadBalancer Service 的特点：依赖云提供商（如 GCP、AWS、Azure），自动创建外部负载均衡器（如 GCP 的 Cloud Load Balancing、AWS 的 ELB），分配一个外部 IP。需要在云平台环境使用，裸金属环境需 MetalLB 等方案。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "Ingress 与 Service 的区别是什么？",
        "type": "单选",
        "options": [
            "没有区别",
            "Ingress 基于 HTTP/HTTPS 协议和规则（主机名、路径），Service 基于 IP 和端口",
            "Service 仅支持 HTTP/HTTPS，Ingress 支持所有协议",
            "Ingress 只能暴露到集群内"
        ],
        "answer": [
            1
        ],
        "explanation": "Ingress 基于 HTTP/HTTPS 协议和规则（主机名、路径、TLS），是一个七层代理。Service 基于 IP 和端口，是四层负载均衡。Ingress 通常暴露到集群外，Service 有 ClusterIP（集群内）、NodePort 和 LoadBalancer 类型。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "Ingress 控制器是什么？",
        "type": "单选",
        "options": [
            "管理 Ingress 资源的控制器",
            "Ingress 对象本身",
            "Service 的负载均衡器",
            "网络策略控制器"
        ],
        "answer": [
            0
        ],
        "explanation": "Ingress 控制器是管理 Ingress 资源的控制器，负责根据 Ingress 资源配置路由规则并实现 HTTP/HTTPS 代理。常见的 Ingress 控制器包括 NGINX Ingress Controller、Traefik、HAProxy Ingress 等。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "Ingress 资源的作用是什么？",
        "type": "多选",
        "options": [
            "定义 HTTP/HTTPS 路由规则",
            "根据主机名和路径将流量路由到不同的 Service",
            "配置 TLS 终止",
            "自动创建外部 IP"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Ingress 资源用于定义 HTTP/HTTPS 路由规则，根据主机名（如 api.example.com）和路径（如 /api）将流量路由到不同的 Service。Ingress 也支持配置 TLS 终止（指定 Secret 作为证书）。外部 IP 由 LoadBalancer Service 或 Ingress 控制器提供，非 Ingress 直接分配。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "什么是 EndpointSlice？",
        "type": "单选",
        "options": [
            "Service 的后端 Pod 列表",
            "一种网络策略对象",
            "Service 的负载均衡器",
            "Pod 的网络接口切片"
        ],
        "answer": [
            0
        ],
        "explanation": "EndpointSlice 是 Service 的后端 Pod 列表，跟踪提供服务的 IP 地址和端口。EndpointSlice 分片存储（每个 EndpointSlice 包含部分 Pod），支持大规模 Service（支持超过 1000 个后端 Pod）。EndpointSlice 控制器动态更新 EndpointSlice。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "kube-proxy 的作用是什么？",
        "type": "多选",
        "options": [
            "在每个节点上运行网络代理",
            "维护 iptables 或 ipvs 规则",
            "实现 Service 的负载均衡",
            "管理 Pod 的生命周期"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "kube-proxy 在每个节点上运行网络代理，监听 Service 和 EndpointSlice 的变化，更新 iptables 或 ipvs 规则，实现 Service 的负载均衡。不管理 Pod 的生命周期。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "kube-proxy 使用哪些代理模式？",
        "type": "多选",
        "options": [
            "userspace（用户空间）",
            "iptables（旧版）",
            "ipvs（新版，性能更好）",
            "kernelspace"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "kube-proxy 支持三种代理模式：userspace（用户空间代理，已过时）、iptables（使用 iptables 规则）、ipvs（使用 IPVS，性能更好，支持更复杂的负载均衡算法）。没有 kernelspace 模式。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "Service 的 sessionAffinity 作用是什么？",
        "type": "单选",
        "options": [
            "Service 的亲和性调度策略",
            "将来自同一客户端的流量路由到同一个 Pod（会话亲和性）",
            "Service 的负载均衡算法",
            "Service 的地址选择策略"
        ],
        "answer": [
            1
        ],
        "explanation": "Service 的 sessionAffinity（会话亲和性）用于将来自同一客户端的流量路由到同一个 Pod。默认是 None（无会话亲和性），可选 ClientIP（基于客户端 IP 的会话亲和性），可设置 sessionAffinityConfig.clientIP.timeoutSeconds。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "DNS Service 在 Kubernetes 中的作用是什么？",
        "type": "单选",
        "options": [
            "提供外部 DNS 服务",
            "为集群内的服务和 Pod 提供内部 DNS 解析",
            "管理网络策略",
            "实现负载均衡"
        ],
        "answer": [
            1
        ],
        "explanation": "DNS Service（通常是 CoreDNS）为集群内的服务和 Pod 提供内部 DNS 解析。Service 通过 DNS 名称 <service-name>.<namespace>.svc.cluster.local 访问，Pod 通过 <pod-ip-address>.<namespace>.pod.cluster.local（默认不启用）访问。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "如何访问 Service？",
        "type": "多选",
        "options": [
            "通过 DNS 名称",
            "通过环境变量",
            "通过 Service 的 ClusterIP",
            "通过外部 IP（LoadBalancer Service 或 ExternalName）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Service 的访问方式：通过 DNS 名称（如 my-service.default.svc.cluster.local）、通过环境变量（Kubernetes 自动注入，如 MY_SERVICE_SERVICE_HOST 和 MY_SERVICE_SERVICE_PORT）、通过 Service 的 ClusterIP、通过外部 IP（LoadBalancer Service 分配的外部 IP 或 ExternalName）。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "什么是 NetworkPolicy（网络策略）？",
        "type": "单选",
        "options": [
            "网络配置策略",
            "控制 Pod 之间或 Pod 与外部之间流量的规则",
            "网络负载均衡策略",
            "网络安全认证策略"
        ],
        "answer": [
            1
        ],
        "explanation": "NetworkPolicy 是控制 Pod 之间或 Pod 与外部之间流量的规则，用于实现 Pod 间的网络隔离。NetworkPolicy 默认不创建任何限制（除非有其他网络策略），需要在 CNI 插件支持（如 Calico、Cilium）下生效。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "NetworkPolicy 支持哪些流量方向？",
        "type": "多选",
        "options": [
            "ingress（入站流量）",
            "egress（出站流量）",
            "multicast（多播流量）",
            "broadcast（广播流量）"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "NetworkPolicy 支持两种流量方向：ingress（入站流量）和 egress（出站流量）。可以分别配置规则，实现双向网络隔离。不支持多播和广播流量。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "NetworkPolicy 的 podSelector 作用是什么？",
        "type": "单选",
        "options": [
            "选择节点的 Pod",
            "选择受 NetworkPolicy 规则限制的 Pod",
            "选择 Service",
            "选择 Ingress 控制器"
        ],
        "answer": [
            1
        ],
        "explanation": "NetworkPolicy 的 podSelector 是标签选择器，用于选择受 NetworkPolicy 规则限制的 Pod。只有匹配此选择器的 Pod 才会应用 NetworkPolicy 定义的网络规则。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "CNI 是什么？",
        "type": "单选",
        "options": [
            "容器网络接口标准",
            "一个网络策略控制器",
            "一个 Service 类型",
            "一个 DNS 服务"
        ],
        "answer": [
            0
        ],
        "explanation": "CNI（Container Network Interface）是一个容器网络接口标准，定义了容器运行时与网络插件之间的接口。Kubernetes 通过 CNI 与网络插件交互，实现 Pod 网络。常见的 CNI 插件包括 Flannel、Calico、Cilium、Weave Net 等。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "常见的 CNI 插件有哪些？",
        "type": "多选",
        "options": [
            "Flannel",
            "Calico",
            "Cilium",
            "Weave Net"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "常见的 CNI 插件包括：Flannel（简单 overlay 网络）、Calico（支持网络策略的 Layer 3 网络）、Cilium（基于 eBPF，支持高级网络策略）、Weave Net、Canal、Multus（多 CNI 插件组合）等。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "Flannel CNI 插件有什么特点？",
        "type": "多选",
        "options": [
            "简单易用",
            "使用 overlay 网络（VXLAN）",
            "不支持网络策略",
            "支持 IPsec 加密"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Flannel 的特点：简单易用，使用 overlay 网络（默认 VXLAN，也可选 Host-GW、VTEP 等），不支持网络策略（可结合 Calico 或使用其他插件实现）。不支持 IPsec 加密。适合简单的 Kubernetes 集群。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "Calico CNI 插件有什么特点？",
        "type": "多选",
        "options": [
            "提供 NetworkPolicy 支持",
            "支持Layer 3 网络（无 overlay）",
            "支持 BGP 路由",
            "只支持小规模集群"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Calico 的特点：提供 NetworkPolicy 支持、支持 Layer 3 网络（无 overlay，使用纯路由，性能好）、支持 BGP 路由（与数据中心网络集成）、支持大规模集群。适用于需要网络策略或高性能网络的场景。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "什么是多 CNI 插件（如 Multus）？",
        "type": "单选",
        "options": [
            "同时安装多个 CNI 插件",
            "支持 Pod 同时连接多个网络",
            "多个 CNI 插件互为备份",
            "不支持"
        ],
        "answer": [
            1
        ],
        "explanation": "多 CNI 插件（如 Multus）支持 Pod 同时连接多个网络，例如，一个 Pod 可同时连接集群网络、存储网络和外部网络。Multus 充当 CNI 元插件，调用其他 CNI 插件并组合网络接口。",
        "difficulty": "高级"
    },
    {
        "module": "网络",
        "question": "什么是 Headless Service？",
        "type": "单选",
        "options": [
            "没有后端 Service",
            "ClusterIP 设置为 None 的 Service",
            "没有负载均衡策略的 Service",
            "不配置 Ingress 的 Service"
        ],
        "answer": [
            1
        ],
        "explanation": "Headless Service 是 ClusterIP 设置为 None 的 Service，不会为 Service 分配虚拟 IP。Headless Service 的 DNS 会直接返回所有后端 Pod 的 IP 列表，不需要代理或负载均衡。适用于 StatefulSet 实现 DNS 稳定标识、服务发现（客户端直接选择后端 Pod）等场景。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "如何访问外部服务？",
        "type": "多选",
        "options": [
            "使用 ExternalName Service",
            "使用 ExternalIP（手动设置 Service 的外部 IP）",
            "服务直接使用外部 IP（非 Kubernetes 网络）",
            "使用 LoadBalancer Service（云提供商）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "访问外部服务的方式：ExternalName Service（映射到外部 DNS 名称）、ExternalIP（设置 Service 的 externalIPs 字段）、服务直接使用外部 IP（非 Kubernetes 管理，如数据库服务直接使用 IP）和 LoadBalancer Service（云提供商）。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "Pod 如何访问外部（Kubernetes 集群外）服务？",
        "type": "单选",
        "options": [
            "通过节点 NAT",
            "通过 Pod NAT",
            "无法访问",
            "需要 Service"
        ],
        "answer": [
            0
        ],
        "explanation": "Pod 访问外部服务时，流量通过节点 NAT 出去（使用节点的 IP 作为源 IP），外部服务响应时通过节点路由回 Pod。这是 Kubernetes 网络模型的默认行为。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "什么是 Service 的 externalIPs 字段？",
        "type": "单选",
        "options": [
            "自动分配的外部 IP",
            "手动配置 Service 的外部 IP",
            "云提供商分配的 IP",
            "NodePort 使用的端口"
        ],
        "answer": [
            1
        ],
        "explanation": "Service 的 externalIPs 字段用于手动配置 Service 的外部 IP，可以通过这些 IP 访问 Service（类似于 LoadBalancer 但不依赖云提供商）。externalIPs 需要外部网络有路由到节点的配置。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "什么是 Service 的 internalTrafficPolicy？",
        "type": "单选",
        "options": [
            "Service 的内部网络安全策略",
            "控制流量路由到本地的 Pod",
            "Service 的网络流量限制",
            "Service 的内部 DNS 名称"
        ],
        "answer": [
            1
        ],
        "explanation": "Service 的 internalTrafficPolicy（Kubernetes 1.22+）控制内部流量是否路由到本地的 Pod（Cluster：默认路由到任何可用 Pod，Local：仅在本地节点的后端 Pod 之间路由，可减少跨节点流量）。",
        "difficulty": "高级"
    },
    {
        "module": "网络",
        "question": "什么是 DNS 记录的 TTL？",
        "type": "单选",
        "options": [
            "DNS 查询超时时间",
            "DNS 记录的有效期",
            "DNS 记录的更新频率",
            "DNS 服务的运行时间"
        ],
        "answer": [
            1
        ],
        "explanation": "DNS 记录的 TTL（Time To Live）是 DNS 记录的有效期（以秒为单位）。CoreDNS 默认 TTL 为 5 秒。由于 Kubernetes Service 和 Pod 可能频繁变化（如 Pod 重新调度），TTL 较短以确保 DNS 解析的及时性。过长会导致 DNS 缓存旧记录。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "如何发现 Pod？",
        "type": "多选",
        "options": [
            "通过 DNS（需要 CoreDNS 配置）",
            "通过 API Server 查询",
            "直接使用 Pod IP（不稳定，非推荐）",
            "通过 Service 直接访问"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "Pod 的发现方式：通过 DNS（CoreDNS 支持 Pod 解析，需要在 CoreDNS 配置中启用，格式为 <pod-ip-address>.<namespace>.pod.cluster.local）、通过 API Server 查询、通过 Service 直接访问（推荐）。直接使用 Pod IP 不稳定（Pod 重新调度后 IP 可能变化）。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "EndpointSlices 和 Endpoints 的区别是什么？",
        "type": "多选",
        "options": [
            "EndpointSlices 是新的实现，性能更好",
            "EndpointSlices 支持超过 1000 个后端 Pod",
            "Endpoints 只支持小规模 Service",
            "没有区别，只是名称不同"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "区别：EndpointSlices 是新的实现，性能更好（分片存储，每个 EndpointSlice 包含最多 100 个 Pod）、EndpointSlices 支持超过 1000 个后端 Pod（Endpoints 对象有大小限制）。Endpoints 是旧实现，仍在使用中。两个不同。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "什么是 Service 的 topologyAwareHints（拓扑感知）？",
        "type": "单选",
        "options": [
            "Service 的分布式拓扑",
            "根据拓扑（如区域、可用区）优化流量路由",
            "配置 Service 的跨区域",
            "配置 Service 的跨地域"
        ],
        "answer": [
            1
        ],
        "explanation": "Service 的 topologyAwareHints（Kubernetes 1.21+）根据拓扑（如区域、可用区、节点）优化流量路由，将流量路由到本地的后端 Pod，减少跨节点、跨区域的延迟，提高性能。适用于跨区域大型集群。",
        "difficulty": "高级"
    },
    {
        "module": "网络",
        "question": "什么是 IPv4/IPv6 双栈支持？",
        "type": "多选",
        "options": [
            "Pod 同时分配 IPv4 和 IPv6 地址",
            "Service 同时分配 IPv4 和 IPv6 ClusterIP",
            "集群同时使用 IPv4 和 IPv6 网络",
            "只支持 IPv4"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 的 IPv4/IPv6 双栈支持：Pod 同时分配 IPv4 和 IPv6 地址（Pod 可以通过任一网络访问，或仅使用一个）、Service 同时分配 IPv4 和 IPv6 ClusterIP、集群同时使用 IPv4 和 IPv6 网络（需要在 kube-controller-manager、kube-apiserver、kubelet 配置中启用双栈）。Kubernetes 同时支持 IPv4 和 IPv6，不是只支持 IPv4。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "如何启用 IPVS 模式为 kube-proxy 后端？",
        "type": "单选",
        "options": [
            "kubectl set kube-proxy --mode=ipvs",
            "在 kube-proxy 启动参数中设置 --proxy-mode=ipvs",
            "在 kubelet 配置中设置",
            "无法启用"
        ],
        "answer": [
            1
        ],
        "explanation": "在 kube-proxy 启动参数中设置 --proxy-mode=ipvs 启用 IPVS 模式（默认是 iptables，可用 --proxy-mode 指定为 iptables）。IPVS 提供更好的性能和更复杂的负载均衡算法（如轮询、最少连接、源地址哈希等）。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "如何检查 Pod 的网络连接问题？",
        "type": "多选",
        "options": [
            "通过 kubectl exec 进入 Pod 执行网络检查（ping、curl）",
            "检查 Pod 的网络配置（IP, DNS）",
            "查看 NetworkPolicy 是否限制流量",
            "检查节点网络（iptables, ipvs）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "检查 Pod 网络连接问题的方式：kubectl exec 进入 Pod 执行网络命令、检查 Pod 的 IP 和 DNS 配置、查看 NetworkPolicy 是否限制 Pod 的流量、检查节点网络配置（iptables、ipvs、路由等）和 CNI 插件日志。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "如何禁用 Pod 间通信？",
        "type": "单选",
        "options": [
            "无法禁用，可以创建 NetworkPolicy 限制特定通信",
            "删除所有 Service",
            "禁用 kube-proxy",
            "在节点上配置防火墙"
        ],
        "answer": [
            0
        ],
        "explanation": "可以通过 NetworkPolicy 禁用特定 Pod 间通信（通过 label selector 选择特定 Pod，不配置允许的规则）。也可以在节点或云提供商网络层配置防火墙规则。删除所有 Service 会禁用 Service 访问，但 Pod 间仍能直接通信。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "Pod 的 DNS 策略有哪些？",
        "type": "多选",
        "options": [
            "Default（使用节点 DNS）",
            "ClusterFirst（先查询集群 DNS，查不到则用节点 DNS）",
            "ClusterFirstWithHostNet（主机网络模式使用 ClusterFirst）",
            "None（仅使用 Pod 的 dnsConfig，不使用集群或节点 DNS）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Pod 的 DNS 策略：Default（使用节点 DNS）、ClusterFirst（先查询集群 DNS，查不到则用节点 DNS）、ClusterFirstWithHostNet（hostNetwork 使用 ClusterFirst）、None（仅使用 Pod 的 dnsConfig，不使用集群或节点 DNS）。默认是 ClusterFirst。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "什么是 Kubernetes 的网络服务质量？",
        "type": "单选",
        "options": [
            "Service 的负载均衡性能",
            "基于带宽的网络限制",
            "不支持",
            "NetworkPolicy 的 QoS"
        ],
        "answer": [
            2
        ],
        "explanation": "Kubernetes 不直接提供网络服务质量（QoS，如带宽限制）。可以通过 NetworkPolicy、网络插件（如 Calico 的 egressBandwidth limit）或节点网络工具（如 tc）实现。不是 Service 的负载均衡性能或 NetworkPolicy 的 QoS。",
        "difficulty": "高级"
    },
    {
        "module": "网络",
        "question": "如何限制 Pod 的 DNS 查询？",
        "type": "多选",
        "options": [
            "设置 Pod 的 dnsPolicy 为 None",
            "设置 Pod 的 dnsConfig（nameservers, searches, options）",
            "使用 NetworkPolicy 限制 DNS 端口到集群 DNS",
            "无法限制"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "限制 Pod 的 DNS 查询：设置 Pod 的 dnsPolicy 为 None 并配置 dnsConfig（指定 nameservers、searches、options）可以限制 DNS 查询到特定 DNS 服务器。使用 NetworkPolicy 限制 DNS 端口（如 TCP/UDP 53）到集群 DNS（如 CoreDNS 服务的 Pod 和 Service）也可以限制 DNS 查询。",
        "difficulty": "高级"
    },
    {
        "module": "网络",
        "question": "什么是 Kubernetes 的 DNS 服务的搜索域（Search Domains）？",
        "type": "单选",
        "options": [
            "DNS 查询超时时间",
            "DNS 解析时自动添加的后缀",
            "DNS 服务的 IP 地址",
            "DNS 记录的缓存时间"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 的 DNS 服务的搜索域（Search Domains）是 DNS 解析时自动添加的后缀，如 default.svc.cluster.local、svc.cluster.local、cluster.local。当解析 Service 时，可以使用短名称（如 my-service），DNS 解析器会依次尝试加上搜索域进行解析（my-service.default.svc.cluster.local、my-service.svc.cluster.local、my-service.cluster.local）。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "Service 的 externalTrafficPolicy 字段有什么作用？",
        "type": "单选",
        "options": [
            "配置 Service 的外部 IP 策略",
            "控制外部流量如何路由到节点和 Pod",
            "限制外部流量的带宽",
            "配置 Service 的 TLS 策略"
        ],
        "answer": [
            1
        ],
        "explanation": "Service 的 externalTrafficPolicy 字段控制外部流量如何路由到节点和 Pod。值为 Cluster（默认）时：外部流量可以路由到任何节点的后端 Pod，可能经过两次 NAT（客户端到节点，节点到其他节点的 Pod），客户端 IP 会被 SNAT 为节点 IP。值为 Local 时：外部流量只路由到本地节点的后端 Pod，确保客户端源 IP 不被 NAT，但可能流量不均衡（只有有本地后端 Pod 的节点才接收流量）。适用于需要保留客户端源 IP 的场景，如日志分析、访问控制。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "Ingress 的 pathType 字段有哪些类型？",
        "type": "多选",
        "options": [
            "Exact（精确匹配路径）",
            "Prefix（前缀匹配路径）",
            "ImplementationSpecific（由 Ingress 控制器决定匹配逻辑）",
            "Regex（正则表达式匹配）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Ingress 的 pathType 字段定义路径匹配类型：Exact（精确匹配路径，如 /app 精确匹配 /app，不匹配 /app/ 或 /app/health）、Prefix（前缀匹配路径，如 /app 匹配 /app、/app/、/app/health，匹配最长前缀优先）、ImplementationSpecific（匹配逻辑取决于 Ingress 控制器的实现）。Kubernetes 不支持正则表达式匹配路径（需要 Ingress 控制器自定义配置）。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "如何为 Service 配置会话亲和性（Session Affinity）？",
        "type": "单选",
        "options": [
            "设置 sessionAffinity 为 ClientIP 并配置超时时间",
            "设置 sessionAffinity 为 Sticky 并配置 cookie",
            "设置 sessionAffinity 为 Local 并配置节点",
            "Service 默认启用会话亲和性，无需配置"
        ],
        "answer": [
            0
        ],
        "explanation": "为 Service 配置会话亲和性：设置 sessionAffinity 为 ClientIP（默认为 None，无会话亲和性），可选配置 sessionAffinityConfig.clientIP.timeoutSeconds（默认 10800 秒，即 3 小时）。不支持 Sticky（cookie）、Local（节点）或其他值。示例：sessionAffinity: ClientIP; sessionAffinityConfig: { clientIP: { timeoutSeconds: 3600 } }。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "什么是 Service 的健康检查机制？",
        "type": "多选",
        "options": [
            "通过 EndpointSlice 动态跟踪后端 Pod",
            "当 Pod NotReady 时从 EndpointSlice 中移除",
            "使用 readinessProbe 判断 Pod 是否就绪",
            "使用 livenessProbe 判断 Service 是否需要重启"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Service 的健康检查机制：EndpointSlice 控制器动态跟踪后端 Pod 的状态，当 Pod NotReady（基于 readinessProbe 或 Pod 状态）时从 EndpointSlice 中移除，确保流量只路由到健康的 Pod。livenessProbe 不影响 Service 的后端选择（livenessProbe 失败会重启 Pod，不会立即从 EndpointSlice 移除）。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "如何排查 Service 无法访问的问题？",
        "type": "多选",
        "options": [
            "检查 Service 是否存在且 ClusterIP 正确",
            "检查 EndpointSlice 是否有后端 Pod",
            "检查 NetworkPolicy 是否阻止了流量",
            "检查后端 Pod 的 readinessProbe 是否通过"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "排查 Service 无法访问的问题：检查 Service 是否存在（kubectl get svc）且 ClusterIP 正确、检查 EndpointSlice 是否有后端 Pod（kubectl get endpointslices，后端 Pod 可能为空）、检查 NetworkPolicy 是否阻止了流量（如没有允许 ingress 的规则）、检查后端 Pod 的 readinessProbe 是否通过（NotReady 的 Pod 不会出现在 EndpointSlice 中）、检查 Pod 的 IP 和端口是否正确。",
        "difficulty": "基础"
    },
    {
        "module": "网络",
        "question": "什么是 CoreDNS 的插件机制？",
        "type": "单选",
        "options": [
            "CoreDNS 自动安装的网络插件",
            "CoreDNS 通过插件链处理 DNS 请求",
            "CoreDNS 的负载均衡插件",
            "CoreDNS 的缓存插件"
        ],
        "answer": [
            1
        ],
        "explanation": "CoreDNS 的插件机制：CoreDNS 通过插件链处理 DNS 请求，每个插件负责特定的 DNS 功能，如 cache（缓存）、errors（错误处理）、health（健康检查）、kubernetes（Kubernetes Service 和 Pod 解析）、forward（转发到外部 DNS）等。插件配置在 CoreDNS ConfigMap 中（/etc/coredns/Corefile）。插件按顺序执行，一个插件返回结果则终止链。",
        "difficulty": "高级"
    },
    {
        "module": "网络",
        "question": "Ingress 的 annotations 有什么用途？",
        "type": "多选",
        "options": [
            "配置 Ingress 控制器的行为",
            "配置 TLS、重定向、速率限制等高级功能",
            "配置负载均衡算法和健康检查",
            "配置 Ingress 的基本路由规则"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Ingress 的 annotations 用于配置 Ingress 控制器的行为，如 TLS（cert-manager）、重定向（nginx.ingress.kubernetes.io/rewrite-target）、速率限制（nginx.ingress.kubernetes.io/limit-rps）、负载均衡算法（nginx.ingress.kubernetes.io/load-balance）、健康检查、CORS 等。不同 Ingress 控制器的 annotations 不同（NGINX Ingress Controller、Traefik、HAProxy Ingress 等）。基本的路由规则（主机名、路径、后端 Service）在 Ingress spec 中配置，不在 annotations 中。",
        "difficulty": "进阶"
    },
    {
        "module": "网络",
        "question": "什么是 Service 的发布策略（PublishNotReadyAddresses）？",
        "type": "单选",
        "options": [
            "Service 的发布时间策略",
            "控制 NotReady 的 Pod 是否作为 Service 的后端",
            "Service 的地址发布策略",
            "Service 的负载均衡策略"
        ],
        "answer": [
            1
        ],
        "explanation": "Service 的 publishNotReadyAddresses 字段（默认 false）控制 NotReady 的 Pod（基于 readinessProbe 或 Pod 状态）是否作为 Service 的后端。默认情况下，只有 Ready 的 Pod 会出现在 EndpointSlice 中，Service 的流量不会路由到 NotReady 的 Pod。设置为 true 时，NotReady 的 Pod 也会包含在 EndpointSlice 中，适用于需要将流量路由到所有 Pod 的场景（如 StatefulSet 的初始启动、调试）。",
        "difficulty": "高级"
    },
    {
        "module": "网络",
        "question": "什么情况下应该使用 Headless Service？",
        "type": "多选",
        "options": [
            "StatefulSet 需要稳定的 DNS 标识时",
            "客户端需要直接选择后端 Pod 时",
            "需要实现自定义负载均衡逻辑时",
            "需要跨集群访问 Service 时"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Headless Service（ClusterIP 为 None）的使用场景：StatefulSet 需要稳定的 DNS 标识（每个 Pod 有稳定的 DNS 名称，如 web-0.default.svc.cluster.local）、客户端需要直接选择后端 Pod（如数据库连接池、缓存客户端）、需要实现自定义负载均衡逻辑时。跨集群访问 Service 通常使用 ClusterIP Service 配合 Federation 或其他方案。Headless Service 不提供负载均衡或虚拟 IP，适合需要精细控制后端选择的场景。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "Kubernetes 中的 Volume 是什么？",
        "type": "单选",
        "options": [
            "一个存储设备",
            "Pod 中容器可以访问的存储目录",
            "一个网络服务",
            "一个容器镜像仓库"
        ],
        "answer": [
            1
        ],
        "explanation": "Volume 是 Pod 中容器可以访问的存储目录。Volume 与 Pod 生命周期绑定（Pod 删除时删除），支持多种卷类型（如 emptyDir、hostPath、PVC、ConfigMap、Secret 等）。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "emptyDir Volume 的特点是什么？",
        "type": "多选",
        "options": [
            "当 Pod 被删除时，Volume 中的数据会被删除",
            "Pod 中的容器可以共享 emptyDir Volume",
            "emptyDir 数据持久化到节点上",
            "确保数据持久化"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "emptyDir Volume 的特点：当 Pod 被删除时，Volume 中的数据会被删除、Pod 中的容器可以共享 emptyDir Volume。emptyDir 可以是节点的磁盘或内存（emptyDir.medium: Memory），但不保证数据持久化，用于临时存储。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "hostPath Volume 的使用场景是什么？",
        "type": "多选",
        "options": [
            "访问节点上的系统信息",
            "持久化数据与节点绑定",
            "提供容器间共享存储",
            "实现数据持久化"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "hostPath Volume 用于将节点上的文件或目录挂载到 Pod 中，适合访问节点系统信息（如 /var/log、/lib/modules），或与节点绑定的数据（如监控数据、代理配置）。不适合应用间共享，Pod 重新调度后节点变化导致数据丢失。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "PersistentVolume（PV）是什么？",
        "type": "单选",
        "options": [
            "Pod 的临时存储",
            "集群级别的存储资源，独立于 Pod 生命周期",
            "本地临时存储",
            "网络存储接口"
        ],
        "answer": [
            1
        ],
        "explanation": "PersistentVolume（PV）是集群级别的存储资源，独立于 Pod 生命周期，提供持久性保证。PV 可以是本地存储（如 hostPath、local）或外部存储（如 NFS、 AWS EBS、GCE PD）。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "PersistentVolumeClaim（PVC）是什么？",
        "type": "单选",
        "options": [
            "集群级别的存储资源",
            "用户对存储的请求，用于绑定 PV 和 Pod 之间的存储需求",
            "本地临时存储",
            "网络存储接口"
        ],
        "answer": [
            1
        ],
        "explanation": "PersistentVolumeClaim（PVC）是用户对存储的请求，用于绑定 PV 和 Pod 之间的存储需求。Pod 通过 PVC 引用存储，PVC 与 PV 绑定后，Pod 可以使用 PV 提供的存储。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "StorageClass 的作用是什么？",
        "type": "单选",
        "options": [
            "管理 Pod 的存储需求",
            "定义不同类型的存储，用于动态卷配置",
            "存储配额管理",
            "存储性能监控"
        ],
        "answer": [
            1
        ],
        "explanation": "StorageClass 定义不同类型的存储，包括存储提供者、参数、回收策略、挂载选项等，用于动态卷配置。通过 StorageClass，用户可以声明存储需求，系统会自动创建 PV。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "动态 PV 配置是如何工作的？",
        "type": "单选",
        "options": [
            "管理员手动创建 PV",
            "用户创建 PVC，Kubernetes 根据 StorageClass 自动创建 PV",
            "无法自动创建",
            "通过 kubectl create pv 创建"
        ],
        "answer": [
            1
        ],
        "explanation": "动态 PV 配置：用户创建 PVC 指定 StorageClass，Kubernetes 的 PersistentVolume 控制器根据 StorageClass 的定义（存储提供者、参数等）自动创建 PV，并将 PVC 与 PV 绑定。无需预先创建 PV。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "PV 的回收策略有哪些？",
        "type": "多选",
        "options": [
            "Retain（保留，需要手动清理）",
            "Recycle（回收，删除数据后重新使用，已废弃）",
            "Delete（删除，自动删除存储资源）",
            "Archive（归档）"
        ],
        "answer": [
            0,
            2
        ],
        "explanation": "PV 的回收策略：Retain（保留，PVC 删除后 PV 和数据保留，需要手动清理）、Recycle（回收，PVC 删除后删除数据重新使用，Kubernetes 1.15+已废弃）、Delete（删除，PVC 删除后自动删除存储资源）。没有 Archive 策略。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "PV 的访问模式有哪些？",
        "type": "多选",
        "options": [
            "ReadWriteOnce（单节点读写）",
            "ReadOnlyMany（多节点只读）",
            "ReadWriteMany（多节点读写）",
            "ReadWriteOncePod（单 Pod 读写）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "PV 的访问模式：ReadWriteOnce（单节点读写）、ReadOnlyMany（多节点只读）、ReadWriteMany（多节点读写）、ReadWriteOncePod（单 Pod 读写，Kubernetes 1.22+）。访问模式取决于存储后端支持。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "PVC 如何绑定 PV？",
        "type": "单选",
        "options": [
            "随机选择",
            "根据 PVC 的存储类、访问模式、容量请求匹配 PV",
            "由节点选择",
            "无法自动绑定"
        ],
        "answer": [
            1
        ],
        "explanation": "PVC 通过资源控制器（PersistentVolume 控制器）与 PV 绑定，PVC 的存储类、访问模式、容量请求需要与 PV 匹配。如果没有匹配的 PV，PVC 会处于 Pending 状态（除非 StorageClass 配置动态配置）。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "ConfigMap Volume 的主要用途是什么？",
        "type": "多选",
        "options": [
            "存储应用配置文件",
            "向容器注入环境变量",
            "存储敏感信息如密码",
            "提供命令行参数"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "ConfigMap Volume 用于将 ConfigMap 中的数据作为文件挂载到容器中，主要用途：存储应用配置文件、向容器注入环境变量、提供命令行参数。敏感信息应使用 Secret 而非 ConfigMap。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "Secret Volume 和 ConfigMap Volume 的主要区别是什么？",
        "type": "多选",
        "options": [
            "Secret 数据是 base64 编码的",
            "Secret 存储敏感信息",
            "ConfigMap 只能挂载为目录",
            "Secret 的数据存储在 etcd 中未加密时是明文的"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "Secret 与 ConfigMap 的区别：Secret 数据是 base64 编码、Secret 存储敏感信息（如密码、令牌）、Secret 数据存储在 etcd 中默认未加密（但可以通过 etcd 加密或第三方加密）。ConfigMap 和 Secret 都可以挂载为文件或环境变量。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "downwardAPI Volume 的作用是什么？",
        "type": "单选",
        "options": [
            "将 Pod 信息暴露给容器",
            "提供外部存储访问",
            "实现容器间通信",
            "监控容器资源"
        ],
        "answer": [
            0
        ],
        "explanation": "downwardAPI Volume 用于将 Pod 的元信息（如 Pod 名称、命名空间、标签、注解、资源限制、Pod IP 等）以文件形式暴露给容器内进程读取。容器可以通过读取这些文件获取 Pod 自身的信息。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "projected Volume 的作用是什么？",
        "type": "单选",
        "options": [
            "提供多种卷类型的组合挂载",
            "实现存储资源投影",
            "提供网络存储访问",
            "优化存储性能"
        ],
        "answer": [
            0
        ],
        "explanation": "projected Volume 可以将多个卷类型（ConfigMap、Secret、ServiceAccountToken、downwardAPI）组合挂载到同一个目录中，用于简化 Pod 配置。通过 projected Volume，多个来源的配置可以通过一个 Volume 挂载。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "emptyDir 的 medium 字段设置为 'Memory' 时会发生什么？",
        "type": "多选",
        "options": [
            "数据存储在节点的内存中",
            "数据在 Pod 删除时立即释放",
            "读写性能更高",
            "数据大小受节点内存限制"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "emptyDir.medium 设置为 'Memory' 时，Volume 使用内存而非磁盘作为存储，特点：数据存储在节点内存中、Pod 删除时立即释放、数据大小受节点内存限制。内存存储读写速度快但不持久，且占用容器内存配额。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "使用 hostPath Volume 的注意事项有哪些？",
        "type": "多选",
        "options": [
            "Pod 重调度后可能无法访问相同数据",
            "多个 Pod 同时读写可能导致冲突",
            "需要确保节点有足够的权限访问",
            "hostPath 数据会自动同步到其他节点"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "hostPath Volume 的注意事项：Pod 重调度后可能无法访问相同数据（因为新节点路径不存在或不同）、多个 Pod 同时读写可能导致冲突、需要确保节点有足够的权限访问。hostPath 数据不会自动同步到其他节点。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "PV 的状态有哪些？",
        "type": "多选",
        "options": [
            "Available（可用）",
            "Bound（已绑定）",
            "Released（已释放）",
            "Failed（失败）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "PV 的状态包括：Available（可用，可以被 PVC 绑定）、Bound（已绑定，已与 PVC 绑定）、Released（已释放，PVC 已删除，但 PV 上仍有数据，需要手动清理回收）。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "PVC 的状态有哪些？",
        "type": "多选",
        "options": [
            "Pending（等待绑定或动态配置PV）",
            "Bound（已绑定到PV）",
            "Lost（PV已丢失）",
            "Failed（失败）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "PVC 的状态包括：Pending（等待绑定或动态配置 PV）、Bound（已绑定到 PV）、Lost（PV 已丢失无法访问）。如 PVC 长时间处于 Pending 状态，可能是没有匹配的 PV 或动态配置失败。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "StorageClass 的 provisioner 字段指定什么？",
        "type": "单选",
        "options": [
            "存储容量",
            "存储后端提供者插件",
            "回收策略",
            "挂载选项"
        ],
        "answer": [
            1
        ],
        "explanation": "StorageClass 的 provisioner 字段指定存储后端提供者插件（如 kubernetes.io/aws-ebs、kubernetes.io/gce-pd、kubernetes.io/nfs），用于动态创建 PV。每种存储后端有专门的 provisioner 实现其生命周期管理。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "StorageClass 的 reclaimPolicy 优先级与 PV 的回收策略关系是？",
        "type": "单选",
        "options": [
            "PV 的回收策略优先级更高",
            "StorageClass 的 reclaimPolicy 优先级更高",
            "两者必须一致",
            "动态创建的 PV 使用 StorageClass 的回收策略"
        ],
        "answer": [
            3
        ],
        "explanation": "对于静态创建的 PV，其回收策略在 PV 定义中指定；对于动态创建的 PV，回收策略使用 StorageClass 的 reclaimPolicy。如不指定，默认使用 StorageClass 的回收策略（未指定则保留）。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "VolumeSnapshot 的作用是什么？",
        "type": "单选",
        "options": [
            "备份 PV 数据",
            "创建 PV 的快照",
            "迁移 PV 数据",
            "复制 PVC 配置"
        ],
        "answer": [
            1
        ],
        "explanation": "VolumeSnapshot 可以创建 PV（基于存储后支持的存储资源）的快照，用于备份数据或恢复数据。快照作为独立的资源存在，可以用于恢复到新的 PV。快照功能需要存储后端支持（如 CSI 驱动）。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "使用 VolumeSnapshot 恢复数据的步骤是什么？",
        "type": "多选",
        "options": [
            "创建 VolumeSnapshot 资源",
            "创建 PVC 指定 dataSource 为 VolumeSnapshot",
            "等待 PV 静态绑定或动态创建",
            "将 PVC 挂载到 Pod 使用"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "使用 VolumeSnapshot 恢复数据的步骤：创建 VolumeSnapshot 资源、创建 PVC 指定 dataSource（apiGroup、kind、name）为 VolumeSnapshot、Kubernetes 根据快照创建 PV 或匹配现有 PV、绑定后将 PVC 挂载到 Pod 使用。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "CSI（Container Storage Interface）的作用是什么？",
        "type": "多选",
        "options": [
            "定义标准化的存储接口",
            "使存储后端提供者可以开发通用插件",
            "支持扩展多种存储类型",
            "替代所有内置存储后端"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "CSI 定义标准化的存储接口，使存储后端提供者可以开发通用插件，而无需修改 Kubernetes 核心代码。CSI 扩展支持多种存储类型（如云存储、本地存储、网络存储）。Kubernetes 保留了一些内置存储后端（如 hostPath），但新类型推荐使用 CSI。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "使用 CSI 存储后端需要部署哪些资源？",
        "type": "多选",
        "options": [
            "CSI Driver 部署（CSIDriver 资源）",
            "CSI 控制器（部署或 StatefulSet）",
            "CSI Node DaemonSet",
            "StorageClass 指定 CSI provisioner"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "使用 CSI 存储后端需要部署：CSI Driver 部署（CSIDriver 自定义资源定义驱动）、CSI 控制器（负责创建删除存储资源，如 Deployment 或 StatefulSet）、CSI Node DaemonSet（负责节点上的挂载操作）、StorageClass 指定 CSI provisioner。",
        "difficulty": "高级"
    },
    {
        "module": "存储",
        "question": "本地存储（local PV）的特点是什么？",
        "type": "多选",
        "options": [
            "使用节点的本地磁盘",
            "性能通常高于网络存储",
            "数据与节点绑定，Pod 重调度需要保持同一节点",
            "自动支持动态配置"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "本地存储（local PV）使用节点的本地磁盘，特点：读写性能通常高于网络存储、数据与节点绑定（Pod 重调度需要通过节点亲和性保持同一节点）、本地 PV 需要预先创建并标记与节点关联（通过 nodeAffinity），不支持动态配置。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "如何确保使用 local PV 的 Pod 始终调度到特定节点？",
        "type": "多选",
        "options": [
            "在 PV 中设置 nodeAffinity",
            "在 PVC 匹配 PV 后自动继承",
            "在 Pod 中手动指定 nodeName",
            "使用调度器配置"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "确保使用 local PV 的 Pod 调度到特定节点：在 PV 中设置 nodeAffinity（指定节点匹配条件）、Kubernetes 调度器会自动将 Pod 调度到匹配的节点。不需要在 Pod 中手动指定nodeName（这样会绕过调度器）。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "NFS Volume 的特点是？",
        "type": "单选",
        "options": [
            "支持动态配置",
            "支持多节点读写（ReadWriteMany）",
            "保证数据一致性",
            "自动备份"
        ],
        "answer": [
            1
        ],
        "explanation": "NFS Volume 的特点：支持多节点读写（ReadWriteMany），适合多个 Pod 共享同一存储数据。NFS 不保证数据一致性（需要应用处理），不支持动态配置（需要预先创建 PV），不自动备份。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "云存储（如 AWS EBS、GCE PD）的特点是什么？",
        "type": "多选",
        "options": [
            "支持动态配置",
            "支持自动备份快照",
            "通常只支持 ReadWriteOnce 访问模式",
            "与云服务集成管理"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "云存储（如 AWS EBS、GCE PD）特点：支持通过 StorageClass 动态配置、支持自动创建快照备份、通常只支持 ReadWriteOnce 访问模式（同一云盘只能被一个节点读写）、与云服务集成管理。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "如何为 PVC 指定存储类？",
        "type": "单选",
        "options": [
            "在 PVC 中设置 storageClassName 字段",
            "在 PV 中设置 storageClassName 字段",
            "在 PVC 和 PV 中都设置",
            "默认使用集群默认存储类"
        ],
        "answer": [
            0
        ],
        "explanation": "在 PVC 中设置 storageClassName 字段指定存储类（如 'fast' 或 'ssd'），Kubernetes 会匹配相同存储类（storageClassName 相同或 PV 未指定）的 PV。如 storageClassName 为空字符串（''），则只匹配未指定存储类的 PV（静态绑定）。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "PVC 的容量如何工作？",
        "type": "单选",
        "options": [
            "请求容量必须与 PV 容量完全一致",
            "请求容量不能超过 PV 的容量",
            "请求容量可以任意值，自动调整",
            "容量必须与 PV 容量相同或更小"
        ],
        "answer": [
            3
        ],
        "explanation": "PVC 的容量设置为请求容量，绑定 PV 时 PV 的容量必须大于或等于请求容量（通常 PVC 获得的存储量为 PV 容量而非请求值）。PVC 容量不能超过 PV 容量，否则无法匹配。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "存储类中的 volumeBindingMode 字段控制什么？",
        "type": "多选",
        "options": [
            "Immediate（立即绑定）- PVC 创建时立即绑定或动态创建 PV",
            "WaitForFirstConsumer（等待首次消费者）- 等 Pod 指向 PVC 时再决定 PV 的拓扑位置",
            "动态配置拓扑感知",
            "支持存储卷延迟绑定"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "volumeBindingMode 控制 PVC 绑定时机：Immediate（立即绑定）- PVC 创建时立即绑定或动态创建 PV、WaitForFirstConsumer（等待首次消费者）- 等 Pod 指向 PVC 时再决定 PV 的拓扑位置。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "如何监控存储使用情况？",
        "type": "多选",
        "options": [
            "通过 kubectl describe pv 查看状态",
            "通过 kubectl get pvc 查看绑定状态和容量",
            "通过 Metrics Server 查看 Pod 的存储使用",
            "监控节点的存储使用（df -h）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "监控存储使用情况：kubectl describe pv 查看状态和容量使用、kubectl get pvc 查看绑定状态和容量、Metrics Server 查看 Pod 的存储使用、监控节点存储使用（检查节点磁盘空间）。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "PVC 长时间处于 Pending 状态的可能原因有哪些？",
        "type": "多选",
        "options": [
            "没有匹配的 PV",
            "StorageClass 动态配置失败",
            "访问模式不匹配",
            "容量请求超过所有 PV 的容量"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "PVC Pending 状态的可能原因：没有匹配的 PV（存储类、访问模式、容量都不匹配）、动态配置失败（provisioner 不可用或配置错误）、访问模式不匹配（PVC 请求 ReadWriteMany 但 PV 只支持 ReadWriteOnce）、容量请求超过所有 PV 的容量。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "如何扩展 PVC 的容量？",
        "type": "多选",
        "options": [
            "修改 PVC 的 resources.requests.storage 字段增大",
            "需要 StorageClass 和存储后端支持在线扩容",
            "Pod 不需要重启自动识别扩容",
            "某些情况需要重建 PV"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "扩展 PVC 容量：修改 PVC 的 resources.requests.storage 字段增大需要 StorageClass 和存储后端支持在线扩容（allowVolumeExpansion: true）、Pod 不需要重启（Kubernetes 自动扩展文件系统）。",
        "difficulty": "高级"
    },
    {
        "module": "存储",
        "question": "Pod 中配置多个 Volume 时挂载顺序的问题？",
        "type": "单选",
        "options": [
            "挂载顺序影响容器启动",
            "挂载顺序影响容器内文件",
            "挂载顺序对容器无影响",
            "挂载顺序决定卷大小"
        ],
        "answer": [
            2
        ],
        "explanation": "Pod 中配置多个 Volume 时，挂载顺序对容器无影响，容器可以使用所有挂载的卷。但卷挂载失败会导致 Pod 无法启动。注意不要在不同卷上挂载相同容器路径（后挂载的会覆盖先挂载的）。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "为什么需要使用 emptyDir 而非直接在容器内使用目录？",
        "type": "多选",
        "options": [
            "容器崩溃时 emptyDir 数据仍然保留",
            "容器间可以共享 emptyDir",
            "emptyDir 可以指定存储介质（如内存）",
            "emptyDir 自动清理"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "emptyDir 相比容器内目录：数据在容器崩溃时仍然保留、容器间可以共享（同一 Pod 内）、可以指定存储介质（如内存）、Pod 删除时自动清理。容器内目录依赖容器文件系统，容器重启可能丢失且无法共享。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "配置 StorageClass 的 mountOptions 字段的作用是什么？",
        "type": "多选",
        "options": [
            "指定挂载选项（如读写策略、缓存）",
            "传递给存储后端挂载器",
            "只适用于文件系统存储",
            "影响 PV 的回收策略"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "mountOptions 字段指定挂载选项（如读写、缓存策略），传递给存储后端挂载器（如 NFS 挂载选项、本地存储挂载选项）。mountOptions 适用于挂载操作，不适用于块设备存储，回收策略由 reclaimPolicy 控制。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "使用 Secret 作为环境变量注入 Pod 的方法是？",
        "type": "单选",
        "options": [
            "通过 env 引用 Secret 中的键",
            "通过 volumeFrom 挂载 Secret",
            "通过 secretRef 指定 Secret",
            "在 Pod spec 中嵌入 Secret 数据"
        ],
        "answer": [
            0
        ],
        "explanation": "通过 env 引用 Secret 中的键，格式如下：env: - name: DB_PASSWORD, valueFrom: secretKeyRef: name: db-secret, key: password。Secret 也可以通过 volume 挂载为文件访问。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "ConfigMap 挂载为文件时，如果只选择部分键（items）会怎样？",
        "type": "单选",
        "options": [
            "只挂载指定的键为文件",
            "挂载所有键但只指定键可用",
            "报错，不支持部分挂载",
            "挂载所有键，隐藏未指定键"
        ],
        "answer": [
            0
        ],
        "explanation": "通过 volumeMounts.items 或 volume.items 指定挂载的键，只挂载指定的键为文件。如不指定 items，则挂载 ConfigMap 中所有键。items 可以指定 path（挂载后的文件名）和 mode（文件权限）。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "StorageClass 的 allowVolumeExpansion 为 true 时的作用是什么？",
        "type": "单选",
        "options": [
            "允许 PVC 自动扩展",
            "允许 PV 自动扩展",
            "允许 StorageClass 动态创建 PV",
            "允许存储后端自动扩容"
        ],
        "answer": [
            0
        ],
        "explanation": "allowVolumeExpansion 为 true 时，允许后续修改 PVC 的容量请求使 PVC 扩容。支持扩容的存储后端（如云存储）会自动扩展底层的 PV 存储并扩展文件系统。不支持扩容的存储后端或设置 false 时扩容请求会被拒绝。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "如何实现 Pod 挂载多个 Volume 到同一目录？",
        "type": "多选",
        "options": [
            "使用 subPath 将特定文件或目录挂载",
            "使用 projected Volume 组合多个卷",
            "直接挂载到不同路径并使用软链接（容器内）",
            "挂载顺序决定最终内容"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "挂载多个 Volume 到同一目录：使用 subPath 挂载特定文件或目录到容器路径，使用 projected Volume 组合多个卷（ConfigMap、Secret 等）。直接多次挂载同一路径会导致覆盖。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "在 k8s 中为何不推荐使用 hostPath？",
        "type": "多选",
        "options": [
            "Pod 调度限制（必须与原节点一致）",
            "数据不跨节点持久化",
            "安全风险（节点路径可能包含敏感信息）",
            "无法动态配置"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "hostPath 不推荐原因：Pod 调度限制（挂载特定节点路径后 Pod 重调度必须同一节点）、数据不跨节点持久化、安全风险（如访问节点根目录可能导致读写系统文件）、无法动态配置。hostPath 适用于系统代理、监控等需要节点访问的场景。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "Kubernetes 存储卷的生命周期与 Pod 的关系是什么？",
        "type": "多选",
        "options": [
            "emptyDir 与 Pod 生命周期一致",
            "PVC 绑定 PV 后不依赖 Pod",
            "Volume 在 Pod 启动失败时不清理",
            "Volume 在 Pod 正常终止前自动 detach"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "存储卷生命周期：emptyDir 与 Pod 生命周期一致（删除 Pod 时删除）、PVC 绑定 PV 后（无论是静态或动态）独立于 Pod 生命周期。Volume 在 Pod 启动失败时不清理、在 Pod 正常终止或异常时自动 detach（卸载）。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "如何配置 Pod 使用存储限额？",
        "type": "单选",
        "options": [
            "在 PVC 中设置资源限额",
            "在 PVC 中设置 requests 和 limits",
            "在 Pod 中设置存储 limit",
            "在 StorageClass 中设置限额"
        ],
        "answer": [
            1
        ],
        "explanation": "在 PVC 中设置 resources.requests.storage 设置请求的容量，resources.limits.storage 设置容量上限（可选，仅支持基于块的存储，支持 IOPS 等限制）。Pod 中不直接设置存储限额，使用 PVC 容量。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "如何使用存储快照做备份恢复策略？",
        "type": "多选",
        "options": [
            "定期创建 VolumeSnapshot",
            "保留多个历史快照用于时间点恢复",
            "使用快照克隆到新存储后挂载验证数据",
            "快照自动备份到远程存储"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "存储快照备份策略：定期创建 VolumeSnapshot（如每小时或每天）、保留多个历史快照（如保留 3 天）、恢复时克隆快照到新存储或恢复到新 PVC，挂载到 Pod 验证数据。快照不自动备份到远程存储（由存储后端处理）。",
        "difficulty": "高级"
    },
    {
        "module": "存储",
        "question": "PV 和 PVC 的主要职责是什么？",
        "type": "多选",
        "options": [
            "PV 是集群资源管理员的视角（存储资源）",
            "PVC 是用户应用的视角（存储需求）",
            "PVC 是绑定资源，PV 是提供资源",
            "PV 和 PVC 解耦存储提供者和使用者"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "PV（PersistentVolume）是集群资源管理员的视角，表示实际存储资源（后端、容量、访问模式）。PVC（PersistentVolumeClaim）是用户应用的视角，表示存储需求（容量需求、存储类、访问模式）。PVC 绑定 PV 时实现两者解耦。",
        "difficulty": "基础"
    },
    {
        "module": "存储",
        "question": "如何确保存储数据的安全性（加密）？",
        "type": "多选",
        "options": [
            "启用 etcd 加密（Secret 等敏感数据）",
            "使用支持加密的存储后端",
            "应用层加密（应用程序加密数据）",
            "网络传输加密（TLS for NFS、云存储）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "存储数据安全策略：启用 etcd 加密（集群配置加密 Secret 等敏感数据在 etcd 中）、使用支持加密的存储后端（如云加密 EBS、GCE PD）、应用层加密（敏感数据在写入存储前由应用加密）、网络传输加密（NFS over TLS、云存储使用 HTTPS）。",
        "difficulty": "高级"
    },
    {
        "module": "存储",
        "question": "使用 PVC 时如何处理存储性能需求？",
        "type": "多选",
        "options": [
            "通过 StorageClass 定义存储性能类别（如 ssd、hdd）",
            "在 PVC 中指定请求的存储类型",
            "设置 PVC 的 IOPS 限制（支持后端）",
            "使用本地存储提升性能"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "存储性能需求：通过 StorageClass 定义性能类别（如 provisioner: kubernetes.io/aws-ebs, parameters: type: gp3）、在 PVC 中指定 storageClassName（如 'fast' 或 'ssd'）、设置 PVC 的 IOPS 限制（云存储支持）、使用本地存储提升读写性能。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "Kubernetes 中的 '卷快照'（VolumeSnapshot）支持哪些功能？",
        "type": "多选",
        "options": [
            "从 PV 创建快照",
            "从快照恢复为新的 PV（或 PVC）",
            "快照作为独立资源管理",
            "克隆现有 PV（使用存储后端克隆功能）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "VolumeSnapshot 功能：从 PV（PVC 绑定 PV 后）创建快照、从快照恢复为新 PV（创建 PVC 指定 dataSource）、快照作为独立资源（CRD：VolumeSnapshot、VolumeSnapshotContent）。克隆 PV 也支持（通过 PVC 指定 dataSource 为另一个 PVC），但克隆需要存储后端支持。",
        "difficulty": "进阶"
    },
    {
        "module": "存储",
        "question": "为什么 ReadWriteMany 访问模式支持有限？",
        "type": "多选",
        "options": [
            "需要存储后端支持多节点同时挂载",
            "需要处理并发访问导致的数据一致性",
            "成本较高（如分布式存储）",
            "网络存储性能较低"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "ReadWriteMany 访问模式支持有限：需要存储后端支持多节点同时挂载（如 NFS、GlusterFS、CephFS）、需要处理并发访问导致的数据一致性问题（如文件锁、应用协调）。成本和网络性能是影响因素，但非支持有限的根本原因。",
        "difficulty": "高级"
    },
    {
        "module": "存储",
        "question": "如何在 Kubernetes 中启用 etcd 数据加密？",
        "type": "单选",
        "options": [
            "在 kube-apiserver 中配置 --encryption-provider-config 参数指定加密配置",
            "在 etcd 配置中启用加密",
            "在 Secret 中定义加密策略",
            "自动开启，无需配置"
        ],
        "answer": [
            0
        ],
        "explanation": "在 kube-apiserver 配置文件中设置 --encryption-provider-config 指定加密配置文件（如 encryption-config.yaml），定义加密资源（如 secrets）和加密方式（如 aescbc、kms-gcp）。启用后 Secret 等敏感数据在写入 etcd 前加密，读取后解密。",
        "difficulty": "高级"
    },
    {
        "module": "存储",
        "question": "StorageClass 中的 allowedTopologies 字段的作用是什么？",
        "type": "单选",
        "options": [
            "限制 PV 创建的拓扑位置（如区域、可用区）",
            "限制 PVC 的访问模式",
            "限制存储容量",
            "限制绑定时机"
        ],
        "answer": [
            0
        ],
        "explanation": "allowedTopologies 字段限制 PV 动态创建和绑定的拓扑位置（如云的可用区、本地存储的节点拓扑）。使用 volumeBindingMode: WaitForFirstConsumer 时，Kubernetes 调度器会选择匹配的节点拓扑作为 PV 创建的输入参数。",
        "difficulty": "高级"
    },
    {
        "module": "配置",
        "question": "ConfigMap 的主要用途是什么？",
        "type": "单选",
        "options": [
            "存储敏感密码信息",
            "存储非机密数据，如配置信息",
            "管理网络策略",
            "监控容器健康"
        ],
        "answer": [
            1
        ],
        "explanation": "ConfigMap 用于存储非机密数据，如配置信息，以键值对形式存在。可以挂载到 Pod 中作为环境变量或文件，实现配置与容器镜像的分离。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "ConfigMap 如何注入到 Pod？",
        "type": "多选",
        "options": [
            "作为环境变量",
            "通过 envFrom 将所有键值作为环境变量注入",
            "作为卷挂载为文件",
            "通过 annotations"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "ConfigMap 可以通过：作为环境变量（使用 valueFrom.configMapKeyRef）、envFrom 将所有键值作为环境变量注入、作为卷挂载为文件。不通过 annotations 注入。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "Secret 的特点是什么？",
        "type": "多选",
        "options": [
            "数据以 base64 编码存储",
            "比 ConfigMap 更安全",
            "可以通过卷挂载或环境变量注入 Pod",
            "数据以明文存储"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Secret 存储敏感信息如密码、OAuth 令牌等，数据以 base64 编码存储，比 ConfigMap 更安全。可以通过卷挂载或环境变量注入 Pod。注意 base64 是编码不是加密。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "Secret 可以存储哪些类型的数据？",
        "type": "多选",
        "options": [
            "Docker Registry 凭据",
            "TLS 证书和私钥",
            "OAuth 令牌",
            "用户密码"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Secret 可以存储多种类型敏感数据：Docker Registry 凭据（imagePullSecret）、TLS 证书和私钥（type: kubernetes.io/tls）、OAuth 令牌、普通用户密码等。通过 base64 编码存储。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "ConfigMap 数据更新后，使用它的 Pod 会自动更新吗？",
        "type": "单选",
        "options": [
            "是的，自动更新",
            "只有挂载为文件时自动更新，环境变量不会更新",
            "需要重启 Pod 才能更新",
            "无法更新，必须删除重建"
        ],
        "answer": [
            1
        ],
        "explanation": "ConfigMap 挂载为文件时会自动更新（kubelet 定期同步更改），但作为环境变量注入的不会更新（需要重启 Pod）。如需环境变量更新，可以通过 restart 容器或滚动更新策略。",
        "detail": "自动挂载更新由 kubelet 的 syncPeriod 控制（默认 1 分钟）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "存活探针的作用是什么？",
        "type": "单选",
        "options": [
            "检测应用是否准备好接收流量",
            "检测应用是否仍在运行，失败则重启容器",
            "检测应用是否已启动",
            "监控应用性能"
        ],
        "answer": [
            1
        ],
        "explanation": "存活探针检测应用是否仍在运行，失败则重启容器。适用于检测死锁或应用崩溃等无法自动恢复的情况。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "就绪探针与存活探针的区别是什么？",
        "type": "多选",
        "options": [
            "存活探针失败会重启容器，就绪探针失败从 Service 中移除",
            "存活探针检测运行状态，就绪探针检测流量就绪状态",
            "就绪探针用于流量控制，存活探针用于故障恢复",
            "没有区别"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "区别：存活探针检测运行状态，失败重启容器；就绪探针检测流量就绪状态，失败从 Service 中移除，可用于启动期间或临时性故障后控制流量。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "容器资源请求和限制的作用是什么？",
        "type": "单选",
        "options": [
            "限制容器 CPU 使用",
            "声明容器资源需求和限制，用于调度和资源控制",
            "容器的网络限制",
            "容器的存储配额"
        ],
        "answer": [
            1
        ],
        "explanation": "资源请求和限制：声明容器需要的最小资源量（用于调度）和最大资源量（用于控制）。Kubernetes 根据 requests 决定 Pod 调度到有足够资源的节点。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "什么是 QoS（服务质量）等级？",
        "type": "单选",
        "options": [
            "网络服务质量",
            "根据容器资源请求和限制确定优先级",
            "存储质量",
            "服务性能等级"
        ],
        "answer": [
            1
        ],
        "explanation": "QoS（服务质量）等级根据容器的 requests 和 limits 确定，用于资源回收（驱逐）时的优先级。有三个等级：Guaranteed（最高优先级）、Burstable、BestEffort（最低优先级）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "kubeconfig 文件有什么用途？",
        "type": "多选",
        "options": [
            "存储集群访问配置",
            "存储用户认证信息",
            "组织多个集群和上下文",
            "管理容器镜像配置"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "kubeconfig 文件用于存储集群访问配置、用户认证信息、上下文（cluster 和 user 的关联）。可以配置多个集群和用户，无需手动输入配置。不是管理容器镜像配置。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "如何使用 kubectl 切换上下文？",
        "type": "单选",
        "options": [
            "kubectl use-context <context>",
            "kubectl config use-context <context>",
            "kubectl switch-context <context>",
            "kubectl context <context>"
        ],
        "answer": [
            1
        ],
        "explanation": "使用 kubectl config use-context <context> 切换上下文。上下文是 cluster、user 和 namespace 的组合。常用命令：kubectl config get-contexts（列出上下文）、kubectl config current-context（显示当前上下文）。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "ConfigMap 的 data 字段和 binaryData 字段有什么区别？",
        "type": "单选",
        "options": [
            "没有区别",
            "data 以字符串形式存储，binaryData 以 base64 存储二进制数据",
            "binaryData 自动解密",
            "data 不能被挂载为文件"
        ],
        "answer": [
            1
        ],
        "explanation": "data 字段存储字符串形式的配置，binaryData 存储二进制数据（如图片、压缩包）以 base64 编码。两者都可以挂载为文件，但 data 更适合文本配置。binaryData 的大小有 1MB 限制。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何从 ConfigMap 中只选择部分键挂载到容器？",
        "type": "多选",
        "options": [
            "使用 volumeMounts 的 subPath 指定单个文件",
            "使用 volume 的 items 列表指定需要挂载的键",
            "使用 envFrom 时可以指定 prefix",
            "无法选择，必须全部挂载"
        ],
        "answer": [
            1,
            2
        ],
        "explanation": "从 ConfigMap 选择部分键：使用 volume 的 items 列表（items: - key: app.properties, path: config.properties）、使用 envFrom 指定 prefix（添加前缀到环境变量名）。subPath 是用来挂载单个文件但不覆盖目录其他内容的。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何查看 Secret 中存储的数据？",
        "type": "多选",
        "options": [
            "kubectl get secret <name> -o yaml 显示原始的 base64 数据",
            "kubectl get secret <name> -o jsonpath='{.data.<key>}' 显示键的 base64 数据",
            "kubectl describe secret <name> 不显示实际数据（只显示大小和类型）",
            "直接查看 secret 文件"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "查看 Secret 数据：kubectl get secret <name> -o yaml（显示原始 base64）、kubectl get secret <name> -o jsonpath（显示指定键的 base64）、kubectl describe secret（不显示实际数据）。base64 数据可以通过 echo <base64> | base64 -d 解码。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "如何使用 Secret 拉取私有镜像仓库的镜像？",
        "type": "单选",
        "options": [
            "在 Pod 中设置 imagePullSecrets 字段",
            "在 ConfigMap 中设置",
            "自动从 .docker/config.json 读取",
            "无法使用 Secret 拉取镜像"
        ],
        "answer": [
            0
        ],
        "explanation": "在 Pod 中设置 imagePullSecrets 字段引用 Secret（type: kubernetes.io/dockerconfigjson），Secret 包含 Docker registry（如 Docker Hub）的认证信息。也可以在 ServiceAccount 中设置默认 imagePullSecret。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "Kubernetes 探针类型有哪些？",
        "type": "多选",
        "options": [
            "HTTP 探针",
            "TCP 探针",
            "Exec 探针",
            "gRPC 探针"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 支持四种探针类型：HTTP（httpGet 检测 HTTP 端点）、TCP（tcpSocket 检测端口可连接性）、Exec（exec 执行命令）、gRPC（grpcAction 检查 gRPC 服务，Kubernetes 1.24+）。不同的应用程序类型适合不同的探针类型。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "配置探针的 initialDelaySeconds 参数作用是什么？",
        "type": "单选",
        "options": [
            "探针失败后的等待时间",
            "容器启动后初次执行探针前的等待时间",
            "探针执行的超时时间",
            "两次探针之间的间隔"
        ],
        "answer": [
            1
        ],
        "explanation": "initialDelaySeconds 指定容器启动后首次执行探针前的等待时间（默认 0），用于给容器时间启动应用。如果设置过短（低于应用启动时间），可能导致探针检测失败（重启容器）。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "配置探针的 periodSeconds 参数作用是什么？",
        "type": "单选",
        "options": [
            "初次执行探针前的等待时间",
            "两次探针之间的间隔（默认 10 秒）",
            "探针失败后的等待时间",
            "探针执行的超时时间"
        ],
        "answer": [
            1
        ],
        "explanation": "periodSeconds 指定探针执行的间隔时间（默认 10 秒）。对于高频检测应用健康可以设置较小的值（如 1-5 秒），但会增加 kubelet 的压力。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "配置探针的 timeoutSeconds 参数作用是什么？",
        "type": "单选",
        "options": [
            "两次探针之间的间隔",
            "探针执行的超时时间（默认 1 秒）",
            "初次探针前的等待时间",
            "连续失败多少次触发动作"
        ],
        "answer": [
            1
        ],
        "explanation": "timeoutSeconds 指定探针执行的超时时间（默认 1 秒），超时视为失败。对于慢响应的应用可以适当增加（如 5 秒）。注意超时时间应小于 periodSeconds。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "配置探针的 successThreshold 参数作用是什么？",
        "type": "单选",
        "options": [
            "连续多少次成功视为容器恢复就绪",
            "连续多少次失败视为探针失败",
            "执行探针的最小次数",
            "探针的权重"
        ],
        "answer": [
            0
        ],
        "explanation": "successThreshold 指定连续多少次成功视为容器通过探针（默认 1）。适用于就绪探针和启动探针，例如应用启动时需要几次数据库连接尝试。存活探针通常设置为 1。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "配置探针的 failureThreshold 参数作用是什么？",
        "type": "单选",
        "options": [
            "连续多少次成功视为通过",
            "连续多少次失败视为容器不健康（默认 3）",
            "探针失败后的等待时间",
            "探针的权重"
        ],
        "answer": [
            1
        ],
        "explanation": "failureThreshold 指定连续多少次失败视为容器不健康（默认 3）。可以调整容错率（如设置为 5 允许更宽容的网络波动）。设置为 1 时探针立即触发重启或从 Service 移除。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "什么是启动探针（startupProbe）？",
        "type": "单选",
        "options": [
            "检测容器是否准备好接收流量",
            "检测容器是否仍在运行",
            "检测容器是否启动完成，期间禁用其他探针",
            "检测应用逻辑"
        ],
        "answer": [
            2
        ],
        "explanation": "启动探针用于检测容器是否启动完成。在启动探针成功前，禁用存活探针和就绪探针，避免启动慢的应用被不必要地重启。适用于启动时间长（超过 initialDelaySeconds）的应用。",
        "detail": "不设置 startupProbe 则所有探针立即开始执行。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "为什么需要同时配置存活探针和就绪探针？",
        "type": "多选",
        "options": [
            "存活探针保证应用运行，就绪探针控制流量",
            "存活探针失败重启容器，就绪探针失败从 Service 移除",
            "应用启动期间可能需要处理初始化流量",
            "没有区别，只需配置一个"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "同时配置两者的原因：存活探针保证应用运行（如重启应用死锁）、就绪探针控制流量（如启动期间不加流量或移除不稳定的实例）。两者结合实现健康检查和流量控制。仅配置存活探针会导致不健康的服务继续接收流量（应用可能响应错误）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何选择适合的探针类型（HTTP/TCP/Exec）？",
        "type": "多选",
        "options": [
            "HTTP 检测适合提供 HTTP 站点的应用",
            "TCP 检测适合需要验证端口可连接（但不提供 HTTP）的应用",
            "Exec 执行命令适合自定义检测逻辑",
            "gRPC 适合 gRPC 服务"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "探针类型选择：HTTP 检测适合 Web 应用（检测健康端点如 /health）、TCP 检测适合需要验证端口可连接（如数据库应用）、Exec 适合自定义检测逻辑（如检查特定文件存在）、gRPC 适合 gRPC 服务（HealthCheck）。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "容器资源 requests（请求）的作用是什么？",
        "type": "多选",
        "options": [
            "声明容器需要的最小资源量",
            "用于调度决策",
            "决定 QoS 等级",
            "不能超过 limits"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "requests 的作用：声明容器需要的最小资源量（CPU、内存）、用于调度决策（确保节点有足够资源）、影响 QoS 等级。requests 可以小于 limits，影响容器在资源紧张时的行为。",
        "detail": "未设置 requests 默认为等于 limits 或零（取决于后端配置）。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "容器资源 limits（限制）的作用是什么？",
        "type": "多选",
        "options": [
            "限制容器最大资源使用",
            "CPU 限制可以被超过（受 CFS 配额影响）",
            "内存限制超出会被 OOM Kill",
            "决定了容器的 QoS 等级"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "limits 的作用：限制容器最大资源使用、CPU 限制可以被超出一定时间（CFS 机制）、内存限制超出被 OOM Kill（重启容器）、影响 QoS 等级（与 requests 比较确定）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "Guaranteed QoS 等级是如何确定的？",
        "type": "单选",
        "options": [
            "容器只设置了 requests",
            "容器设置了 requests 且 requests 等于 limits",
            "容器只设置了 limits",
            "容器未设置 requests 和 limits"
        ],
        "answer": [
            1
        ],
        "explanation": "Guaranteed QoS 等级要求：容器的 CPU 和内存都设置了 requests 且 requests 等于 limits（即精确的资源分配）。Guaranteed 具有最高优先级，在资源回收时最后被驱逐。",
        "detail": "Pod 中所有容器都满足条件则 Pod 为 Guaranteed，否则降级为 Burstable 或 BestEffort。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "BestEffort QoS 等级是如何确定的？",
        "type": "单选",
        "options": [
            "容器设置了 requests 等于 limits",
            "容器只设置了 requests",
            "容器未设置任何 requests 和 limits",
            "容器只设置了 limits"
        ],
        "answer": [
            2
        ],
        "explanation": "BestEffort QoS 等级要求：容器未设置任何 requests 和 limits（即不限制资源）。BestEffort 优先级最低，在资源回收时优先被驱逐（如内存不足、CPU 紧张）。",
        "detail": "BestEffort 适合不关心资源控制的临时任务或测试应用。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "Burstable QoS 等级适用于什么场景？",
        "type": "单选",
        "options": [
            "容器资源需求精确且固定",
            "容器资源需求波动或未设置全部 requests 和 limits",
            "容器无需任何资源限制",
            "无法确定的场景"
        ],
        "answer": [
            1
        ],
        "explanation": "Burstable QoS 等级适用于资源需求波动或设置了 requests 但未设置 limits / requests 不等于 limits 的场景。Burstable 在资源紧张时有中等优先级。",
        "detail": "大多数应用适合使用 Burstable（如设置了内存 requests 但未设置 limits 以允许内存弹性增长）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何通过 limitRange 配置默认资源限制？",
        "type": "多选",
        "options": [
            "在命名空间中创建 LimitRange 对象",
            "设置 default 字段为未设置 limits 的容器提供默认限制",
            "设置 defaultRequest 字段为未设置 requests 的容器提供默认请求",
            "LimitRange 作用于整个集群"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "LimitRange 在命名空间中配置资源默认值：default 字段为未设置 limits 的容器提供默认限制、defaultRequest 字段为未设置 requests 的容器提供默认请求。LimitRange 作用于命名空间，避免未配置资源的容器使用过多资源。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何通过 ResourceQuota 配置命名空间的资源限额？",
        "type": "多选",
        "options": [
            "在命名空间中创建 ResourceQuota 对象",
            "设置 requests.cpu 限制 CPU 请求总量",
            "设置 limits.memory 限制内存限制总量",
            "设置 pods 数量限制"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "ResourceQuota 配置命名空间资源上限：requests.cpu/memory 限制资源请求总量（防止过度预留）、limits.cpu/memory 限制资源限制总量（防止过度分配）、配置对象数量限制（pods、services 等）。资源消耗超出 Quota 后对象创建失败（Pending）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何使用 kubectl 创建 ConfigMap？",
        "type": "多选",
        "options": [
            "kubectl create configmap <name> --from-file=<path>",
            "kubectl create configmap <name> --from-literal=<key>=<value>",
            "kubectl create -f configmap.yaml",
            "kubectl create cm <name> --from-env-file=<file>"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "创建 ConfigMap 方法：--from-file 指定文件或目录（文件名作为键）、--from-literal 指定键值对（适合少量配置）、--from-env-file 从 .env 文件读取、create -f 从 YAML 文件创建。适合配置管理（如应用配置文件）。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "如何使用 kubectl 创建 Secret？",
        "type": "多选",
        "options": [
            "kubectl create secret generic <name> --from-literal=<key>=<value>",
            "kubectl create secret generic <name> --from-file=<path>",
            "kubectl create secret tls <name> --cert=<cert> --key=<key>",
            "kubectl create secret docker-registry <name> --docker-server=<server> --docker-username=<user> --docker-password=<password>"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "创建 Secret 方法：create secret generic（通用 secret，支持 --from-literal --from-file）、tls（创建 TLS 证书）、docker-registry（创建 Docker 认证 secret 可以用作 imagePullSecrets）。注意输入的值自动编码为 base64。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "如何使用 ConfigMap 作为命令行参数注入容器？",
        "type": "单选",
        "options": [
            "直接在 args 中引用 ConfigMap 键",
            "通过 env 引用 ConfigMap 键后在 args 中使用 $(VAR_NAME) 引用环境变量",
            "无法使用 ConfigMap 作为命令行参数",
            "通过 command 引用 ConfigMap"
        ],
        "answer": [
            1
        ],
        "explanation": "通过 env 从 ConfigMap 键生成环境变量，然后在 command 或 args 中使用 $(VAR_NAME) 引用环境变量。示例：env: - name: DB_URL, valueFrom: configMapKeyRef: ...; args: - '--db-url=$(DB_URL)'。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何使用 Secret 挂载为文件到容器？",
        "type": "单选",
        "options": [
            "通过 env 指定 Secret 键",
            "通过 volume 和 volumeMounts 挂载 Secret",
            "通过 annotations",
            "无法挂载为文件"
        ],
        "answer": [
            1
        ],
        "explanation": "通过 volume 定义 secret 卷，volumeMounts 挂载到容器路径。示例：volumes: - name: secret-vol, secret: secretName: my-secret; volumeMounts: - name: secret-vol, mountPath: /etc/secrets。Secret 中的每对键值成为挂载目录下的文件。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "ConfigMap 和 Secret 的数据大小限制是多少？",
        "type": "单选",
        "options": [
            "没有限制",
            "1 MiB",
            "5 MiB",
            "10 MiB"
        ],
        "answer": [
            1
        ],
        "explanation": "ConfigMap 和 Secret 的数据大小限制为 1 MiB（1,048,576 字节）。超过限制的创建会失败。超过 1 MiB 的配置或密钥应考虑其他存储方式（如挂载外部存储或使用 ConfigMap 分割多个键值对）。",
        "detail": "限制由 etcd 的最大对象大小决定（默认 1.5 MiB）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何在 Pod 中引用默认的 ServiceAccount Secret？",
        "type": "单选",
        "options": [
            "在每个 Pod 中设置 serviceAccountName",
            "默认自动挂载，不需要手动配置",
            "通过 envFrom 引用 serviceAccount",
            "无法引用"
        ],
        "answer": [
            1
        ],
        "explanation": "Pod 默认自动挂载所在命名空间的 default ServiceAccount 的 Secret 到 /var/run/secrets/kubernetes.io/serviceaccount/，包含 token、ca.crt 和 namespace。可用于与 API Server 通信（如 in-cluster 配置）。",
        "detail": "可通过 automountServiceAccountToken=false 关闭。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何配置 Pod 不自动挂载 ServiceAccount token？",
        "type": "多选",
        "options": [
            "设置 automountServiceAccountToken: false",
            "设置 serviceAccountName 引用手动配置的 ServiceAccount",
            "在 Pod spec 中设置"
        ],
        "answer": [
            0,
            2
        ],
        "explanation": "在 Pod spec 中设置 automountServiceAccountToken: false 禁用默认 ServiceAccount Secret 挂载。也可引用一个设置了 automountServiceAccountToken: false 的 ServiceAccount。适用于不需要与 API Server 通信的工作负载（如纯后端任务）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何查看 Pod 的资源使用情况？",
        "type": "多选",
        "options": [
            "kubectl top pod <pod>",
            "kubectl describe pod <pod> 中查看资源",
            "Metrics Server 提供资源使用指标",
            "kubectl get pod -o wide"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "查看 Pod 资源使用：kubectl top pod 显示实时 CPU 和内存使用（需要 Metrics Server）、kubectl describe pod 显示配置信息（包括 requests、limits、QoS）、Metrics Server 提供指标（kubectl top 命令使用）。",
        "detail": "kubectl top pods -A 显示所有命名空间的 Pod 使用情况。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "如何设置 Pod 优雅终止？",
        "type": "多选",
        "options": [
            "设置 terminationGracePeriodSeconds 字段",
            "在容器中处理 SIGTERM 信号",
            "使用 preStop Hook 在终止前清理资源",
            "默认立即终止，无法配置"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Pod 优雅终止：设置 terminationGracePeriodSeconds（默认 30 秒）指定宽限期、在容器中监听并处理 SIGTERM 信号（执行清理），超时后发送 SIGTERM（Kubernetes 1.18+ 改为 SIGTERM 立即发送）、使用 preStop hook 在终止前执行命令。",
        "detail": "terminationGracePeriodSeconds 超时后强制终止（SIGKILL）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "Pod 的 preStop Hook 有什么作用？",
        "type": "单选",
        "options": [
            "启动前验证容器是否可用",
            "终止前执行清理或注册下线操作",
            "定期检测容器健康",
            "控制流量"
        ],
        "answer": [
            1
        ],
        "explanation": "preStop Hook 在容器终止前执行（在删除请求到达后），用于执行优雅的下线操作（如通知外部服务停止发送新流量、清理临时资源、关闭连接）。preStop 超时时间受 terminationGracePeriodSeconds 限制。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "Pod 的 postStart Hook 有什么作用？",
        "type": "单选",
        "options": [
            "终止前清理资源",
            "容器启动后立即执行命令",
            "定期检测容器健康",
            "控制流量"
        ],
        "answer": [
            1
        ],
        "explanation": "postStart Hook 在容器创建后立即执行（在容器 ENTRYPOINT 之前），用于执行初始化操作（如启动辅助进程、加载配置）。注意 postStart 执行失败不会阻止容器启动，但可能影响应用正常运行。",
        "detail": "postStart 和启动探针结合使用可覆盖复杂启动流程。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何配置多个容器共享同一 ConfigMap？",
        "type": "单选",
        "options": [
            "为每个容器分别定义 volume",
            "在 Pod 级别定义 volume，多个 volumeMounts 引用同一名",
            "无法共享",
            "需要复制 ConfigMap"
        ],
        "answer": [
            1
        ],
        "explanation": "在 Pod 级别定义 volume，多个容器的 volumeMounts 可以引用同一名。容器间的挂载路径可以不同（实现不同容器访问同一数据）。ConfigMap 更新后挂载的文件会同步（kubelet 更新挂载点）。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何在部署中使用 ConfigMap 和 Secret 管理环境差异？",
        "type": "多选",
        "options": [
            "通过命名空间隔离不同环境的 ConfigMap",
            "使用 Helm 或 Kustomize 管理环境配置",
            "在每个部署中设置不同的 ConfigMap 名称",
            "直接将配置嵌入 Deployment"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "管理环境差异：通过命名空间隔离（如 dev、prod 命名空间各自有 ConfigMap）、使用 Helm 或 Kustomize 模板化配置（环境变量或文件替换）、部署中引用不同同名 ConfigMap（不同命名空间）。不建议直接嵌入配置（无法灵活更新）。",
        "difficulty": "高级"
    },
    {
        "module": "配置",
        "question": "如何使用 kubectl 从环境变量创建 ConfigMap？",
        "type": "单选",
        "options": [
            "kubectl create configmap <name> --from-env</source>",
            "kubectl create configmap <name> --from-env-file=<file>",
            "无法直接从环境创建，需要手动编辑",
            "kubectl create cm --env <name>"
        ],
        "answer": [
            1
        ],
        "explanation": "使用 kubectl create configmap <name> --from-env-file=<file> 从 .env 文件创建 ConfigMap（每行为 KEY=VALUE 格式）。无法从 Shell 环境变量直接创建，可先将环境变量导出到文件再创建。",
        "detail": "--from-env-file 支持多个文件，会合并键值（重复键后者覆盖前者）。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "如何使用 LimitRange 限制容器资源最小值？",
        "type": "单选",
        "options": [
            "设置 min 字段",
            "设置 maxLimitRequestRatio 字段",
            "设置 default 字段",
            "defaultRequest 字段"
        ],
        "answer": [
            0
        ],
        "explanation": "LimitRange 的 min 字段设置容器资源请求的最小值（如 min: cpu: 100m, memory: 128Mi）。低于最小值的请求会拒绝创建（报错）。max 字段设置资源限制的最大值，default/maxLimitRequestRatio 限制请求与限制的比例。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "ResourceQuota 的 scope（作用域）字段有什么作用？",
        "type": "多选",
        "options": [
            "限制 Quota 只适用于指定资源（如 pods）",
            "通过 scope 字段可以设置 Quota 仅作用于特定 QoS 等级",
            "通过 scope 字段可以设置 Quota 仅作用于持久化存储",
            "未设置 scope 则默认作用于所有资源"
        ],
        "answer": [
            1,
            2,
            3
        ],
        "explanation": "ResourceQuota 的 scope 字段设置作用域限制：Terminating（作用于有 activeDeadlineSeconds 的 Pod）、NotTerminating（作用于无 activeDeadlineSeconds 的 Pod）、BestEffort（只作用于 BestEffort QoS 的 Pod）、NotBestEffort（只作用于 Burstable 或 Guaranteed QoS）、StorageClass（限制使用特定存储类的 PVC）。",
        "difficulty": "高级"
    },
    {
        "module": "配置",
        "question": "如何防止 CPU 节流影响应用性能？",
        "type": "多选",
        "options": [
            "设置 CPU requests 保证最小 CPU 时间",
            "设置 CPU limits 足够大或为 max",
            "使用 Guaranteed QoS 等级（requests = limits）",
            "监控 CPU 使用率并调整 requests"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "防止 CPU 节流：设置 CPU requests 保证最小 CPU 时间（调度到有足够 CPU 的节点）、设置 CPU limits 足够大（或不设置，允许弹性使用）、使用 Guaranteed QoS 保证 CPU 资源（但需要精确控制）。监控 CPU 使用率可帮助调优 requests。",
        "detail": "CPU requests 影响 CFS 配额分配，limits 影响 burst 能力。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "Kubernetes 的 ConfigMap 有哪些限制？",
        "type": "多选",
        "options": [
            "数据大小限制 1 MiB",
            "不支持挂载为环境变量的二进制数据",
            "更新后挂载为文件的 ConfigMap 不会自动同步",
            "不能跨命名空间引用"
        ],
        "answer": [
            0,
            3
        ],
        "explanation": "ConfigMap 限制：数据大小限制 1 MiB、不能跨命名空间引用（同一个命名空间内使用）。支持挂载为文件（支持自动同步）、支持环境变量（支持 binaryData）。跨命名空间引用需要通过复制或使用多命名空间工具。",
        "difficulty": "进阶"
    },
    {
        "module": "配置",
        "question": "如何通过配置管理实现应用的金丝雀部署？",
        "type": "多选",
        "options": [
            "使用 ConfigMap 管理应用配置（如切换 API 版本）",
            "使用滚动更新逐步增加金丝雀副本",
            "使用 Service 或 Ingress 控制流量分配",
            "完全更新 ConfigMap 后再部署"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "金丝雀部署：使用 ConfigMap 管理应用配置（如开关新功能点），使用滚动更新逐步增加金丝雀副本（如 Deployment replicas: 10 -> 金丝雀副本 2），使用 Service 或 Ingress（Header/权重）控制流量分配。完全更新 ConfigMap 会导致所有实例变化，不适合金丝雀。",
        "difficulty": "高级"
    },
    {
        "module": "配置",
        "question": "如何使用 kubectl 从文件创建 Secret（自动 base64 编码）？",
        "type": "单选",
        "options": [
            "kubectl create secret generic <name> --from-file=<path>",
            "kubectl create secret generic <name> --file=<path>",
            "无需手动编码，kubectl 自动编码",
            "需要手动 base64 编码"
        ],
        "answer": [
            0
        ],
        "explanation": "使用 kubectl create secret generic <name> --from-file=<path> 从文件创建 Secret，kubectl 会自动将文件内容进行 base64 编码。支持目录（读取目录下所有文件）。无需手动编码。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "探针的 exec 命令如何判断成功或失败？",
        "type": "单选",
        "options": [
            "命令退出码为 0 表示成功，非 0 表示失败",
            "命令有输出表示成功",
            "命令执行时间不超过 timeoutSeconds 表示成功",
            "命令执行完毕即表示成功"
        ],
        "answer": [
            0
        ],
        "explanation": "exec 探针中，命令退出码为 0 表示成功（容器健康），非 0 表示失败（容器不健康）。适用于需要自定义检测逻辑的应用（如检查进程状态、验证文件存在）。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "kubeconfig 文件中的 clusters 字段表示什么？",
        "type": "单选",
        "options": [
            "用户信息",
            "上下文",
            "集群 API Server 配置",
            "命名空间"
        ],
        "answer": [
            2
        ],
        "explanation": "kubeconfig 文件的 clusters 字段定义集群的 API Server 配置（server 地址、CA 证书）。contexts 字段关联 cluster 和 user。users 字段定义用户认证信息（客户端证书、token、用户名密码）。",
        "detail": "kubectl config view 显示 kubeconfig 内容。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "如何使用 kubectl 设置默认命名空间？",
        "type": "单选",
        "options": [
            "kubectl config set namespace <namespace>",
            "kubectl set-context --namespace=<namespace>",
            "kubectl config set-context --current --namespace=<namespace>",
            "无法设置默认命名空间"
        ],
        "answer": [
            2
        ],
        "explanation": "使用 kubectl config set-context --current --namespace=<namespace> 设置当前上下文的默认命名空间。后续 kubectl 命令（如果未指定 -n）会自动使用此命名空间。也可在 kubeconfig 中手动修改。",
        "difficulty": "基础"
    },
    {
        "module": "配置",
        "question": "limitRange 的 maxLimitRequestRatio 有什么作用？",
        "type": "单选",
        "options": [
            "限制容器的 requests 最大值",
            "限制容器的 limits 最大值",
            "限制容器的 limits 与 requests 比例（防止过度分配）",
            "限制 Pod 副本数量"
        ],
        "answer": [
            2
        ],
        "explanation": "maxLimitRequestRatio 限制容器的 limits 与 requests 比例（如 ratio: 2 表示 limits 不能超过 requests 的 2 倍）。用于防止用户请求少量资源但使用大量 limits 的过度分配行为。影响 QoS 等级。",
        "difficulty": "高级"
    },
    {
        "module": "配置",
        "question": "如何查看命名空间的资源使用额限制？",
        "type": "单选",
        "options": [
            "kubectl describe namespace <namespace>",
            "kubectl get resourcequota",
            "kubectl get limitrange",
            "kubectl describe resourcequota"
        ],
        "answer": [
            3
        ],
        "explanation": "使用 kubectl describe resourcequota 查看命名空间的 ResourceQuota 状态（已使用和总限额）。kubectl get resourcequota 列出所有 ResourceQuota。kubectl describe namespace 显示命名空间状态但不显示资源限制。",
        "detail": "kubectl get resourcequota -A 显示所有命名空间的 ResourceQuota。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "Kubernetes 调度器的作用是什么？",
        "type": "单选",
        "options": [
            "管理容器运行时",
            "监控新创建且未分配节点的 Pod，为其选择最合适的运行节点",
            "存储集群配置",
            "管理网络策略"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 调度器监控新创建且未分配节点的 Pod，根据资源需求、策略约束、亲和性等规则为 Pod 选择最合适的运行节点，并将其绑定到该节点。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "调度器如何选择节点？",
        "type": "多选",
        "options": [
            "根据资源需求和节点可用资源",
            "考虑亲和性和反亲和性",
            "考虑污点和容忍度",
            "随机选择"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "调度器根据多个因素选择节点：资源需求（CPU、内存等）和节点可用资源、亲和性和反亲和性（节点和 Pod）、污点和容忍度、优先级与抢占等。不是随机选择。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "节点亲和性有哪两种类型？",
        "type": "多选",
        "options": [
            "requiredDuringSchedulingIgnoredDuringExecution（硬性要求）",
            "preferredDuringSchedulingIgnoredDuringExecution（软性偏好）",
            "requiredDuringSchedulingRequiredDuringExecution",
            "optionalDuringSchedulingIgnoredDuringExecution"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "节点亲和性有两种类型：requiredDuringSchedulingIgnoredDuringExecution（硬性要求，必须满足才能调度）和 preferredDuringSchedulingIgnoredDuringExecution（软性偏好，尝试满足，可选）。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "污点和容忍度的作用是什么？",
        "type": "单选",
        "options": [
            "实现负载均衡",
            "限制或允许 Pod 调度到特定节点",
            "管理存储资源",
            "监控容器健康"
        ],
        "answer": [
            1
        ],
        "explanation": "污点和容忍度用于控制 Pod 的调度：污点应用于节点，让 Pod 无法调度到该节点（除非 Pod 有对应的容忍度）；容忍度设置在 Pod 上，允许 Pod 调度到带有匹配污点的节点。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "常见的污点效果有哪些？",
        "type": "多选",
        "options": [
            "NoSchedule（除非有容忍度，否则不调度）",
            "PreferNoSchedule（尽量避免调度）",
            "NoExecute（调度后驱逐没有容忍度的 Pod）",
            "NoBlock"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "污点效果：NoSchedule（除非 Pod 有对应的容忍度，否则不调度到此节点）、PreferNoSchedule（尽量避免调度，如果其他节点资源充足）、NoExecute（不仅影响新 Pod 调度，还会驱逐运行在此节点的没有容忍度的 Pod）。没有 NoBlock 效果。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "Pod 优先级和抢占的作用是什么？",
        "type": "单选",
        "options": [
            "延长 Pod 的运行时间",
            "确保关键 Pod 在资源不足时有更高的调度优先级",
            "限制 Pod 的资源使用",
            "实现 Pod 间的负载均衡"
        ],
        "answer": [
            1
        ],
        "explanation": "Pod 优先级表示 Pod 相对于其他 Pod 的重要性。当集群资源不足时，高优先级的 Pod 可以抢占（终止）低优先级的 Pod，确保关键应用能够调度和运行。优先级通过 PriorityClass 定义。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "如何创建 PriorityClass（优先级类）？",
        "type": "多选",
        "options": [
            "定义 GlobalDefault 和 value 字段",
            "设置 PreemptionPolicy（默认 PreemptLowerPriority）",
            "通过 kubectl create priorityclass 创建",
            "只能手动编辑 YAML 创建"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "创建 PriorityClass：定义 value（数字，值越大优先级越高）、可选设置 GlobalDefault 为 true（使未指定优先级的 Pod 使用此类）、可选设置 PreemptionPolicy（PreemptLowerPriority 或 Never）。可通过 YAML 或 kubectl create priorityclass 创建。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "PodDisruptionBudget (PDB) 的作用是什么？",
        "type": "单选",
        "options": [
            "限制 Pod 的网络访问",
            "确保在自愿中断期间有最小数量的 Pod 可用",
            "管理 Pod 的存储资源",
            "控制 Pod 的重启策略"
        ],
        "answer": [
            1
        ],
        "explanation": "PodDisruptionBudget 确保在自愿中断期间（如节点维护、集群升级），有最小数量的 Pod 保持运行。这对于保证服务可用性非常重要，特别是在需要多个副本的场景下。PDB 不适用于非自愿中断（节点故障、OOMKilled 等）。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "PDB 可以配置哪些策略？",
        "type": "多选",
        "options": [
            "minAvailable（最小可用副本数）",
            "maxUnavailable（最大不可用副本数）",
            "healthyPercentage（健康百分比）",
            "replicaCount（副本总数）"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "PDB 支持两种策略：minAvailable 指定中断期间必须保持的最小可用 Pod 数量（可以是绝对数字或百分比），maxUnavailable 指定允许同时不可用的最大 Pod 数量（同样支持数字或百分比）。不可同时使用两个策略。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "以下哪些是 Kubernetes 调度器的工作阶段？",
        "type": "多选",
        "options": [
            "过滤阶段（Filter）",
            "打分阶段（Score）",
            "分配阶段（Assume）",
            "验证阶段（Validate）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "调度器主要工作阶段：1）过滤阶段（Filter）：应用预选策略，筛选出满足所有条件的节点；2）打分阶段（Score）：对过滤后的节点进行评分，选择最优节点；3）分配阶段（Assume）：将 Pod 绑定到选定节点。Validate 在各阶段都有应用。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "节点选择器（nodeSelector）的工作机制是什么？",
        "type": "单选",
        "options": [
            "完全禁止 Pod 调度到特定节点",
            "通过键值对强制 Pod 调度到匹配标签的节点",
            "自动选择负载最低的节点",
            "基于 Pod 运行时间进行选择"
        ],
        "answer": [
            1
        ],
        "explanation": "nodeSelector 是最简单的节点调度约束，通过指定节点的标签键值对，强制调度器将 Pod 调度到拥有匹配标签的节点。它是节点亲和性的简化版本，不支持复杂的逻辑操作。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "nodeSelector 和节点亲和性的主要区别是什么？",
        "type": "多选",
        "options": [
            "nodeSelector 是简单匹配，亲和性支持复杂表达式",
            "亲和性区分硬性要求和软性偏好",
            "亲和性支持 matchExpressions 操作符",
            "nodeSelector 性能更好"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "区别：1）nodeSelector 只支持简单等值匹配，亲和性支持复杂表达式（In, NotIn, Exists, NotExists 等）；2）亲和性区分硬性要求（required）和软性偏好（preferred）；3）亲和性更灵活，可以编写复杂的匹配规则。两者的调度性能差异可忽略。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "Pod 间亲和性（Pod Affinity）的调度规则有哪些类型？",
        "type": "多选",
        "options": [
            "podAffinity（同一节点或拓扑域内调度）",
            "podAntiAffinity（避开同一节点或拓扑域）",
            "nodeAffinity（节点标签亲和性）",
            "serviceAffinity（服务亲和性）"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "Pod 间亲和性有两种类型：podAffinity（将 Pod 调度到与特定 Pod 在同一节点或拓扑域），podAntiAffinity（将 Pod 调度到远离特定 Pod 的节点或拓扑域）。nodeAffinity 是节点亲和性，serviceAffinity 不是原生概念。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "Pod 间拓扑域（topologyKey）的作用是什么？",
        "type": "单选",
        "options": [
            "指定 Pod 可以运行的 CPU 核心数",
            "定义节点标签作为拓扑域的划分依据",
            "限制 Pod 的网络带宽",
            "设置 Pod 的存储路径"
        ],
        "answer": [
            1
        ],
        "explanation": "topologyKey 指定节点标签作为拓扑域的划分依据，如 'kubernetes.io/hostname'（每个节点是一个域）、'topology.kubernetes.io/zone'（每个可用区是一个域）。调度器根据拓扑域的标签，确保 Pod 在满足要求的节点集合内调度。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "以下哪些场景适合使用 Pod 间反亲和性（Pod Anti-Affinity）？",
        "type": "多选",
        "options": [
            "服务需要在多个节点冗余部署",
            "Pod 耗尽大量 CPU，需要分散到不同节点",
            "避免单点故障",
            "需要 Pod 紧密协作，低延迟通信"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Pod Anti-Affinity 应用场景：1）服务冗余：确保多个副本分散在不同节点，提高可用性；2）资源分离：高资源消耗的 Pod 分散到不同节点；3）单点故障避免：避免关键 Pod 的多个副本在同一节点。紧密协作场景应使用亲和性。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "污点效果 NoExecute 与 NoSchedule 的主要区别是什么？",
        "type": "单选",
        "options": [
            "NoExecute 强制驱逐所有 Pod",
            "NoExecute 会驱逐运行中且没有容忍度的 Pod",
            "NoSchedule 只影响优先级较低的 Pod",
            "没有区别，可以互换使用"
        ],
        "answer": [
            1
        ],
        "explanation": "NoExecute 与 NoSchedule 的区别：NoSchedule 只影响新 Pod 的调度，不驱逐已运行的 Pod；NoExecute 不仅阻止新 Pod 调度，还会驱逐运行在此节点上且没有对应容忍度的 Pod。NoExecute 常用于节点故障或维护场景。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "Kubernetes 内置哪些节点调度约束策略？",
        "type": "多选",
        "options": [
            "NodeName",
            "NodeSelector",
            "NodeAffinity",
            "PodAffinity/PodAntiAffinity"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 支持多种节点调度约束：1）nodeName（直接指定节点名称）；2）nodeSelector（通过标签选择节点）；3）NodeAffinity（节点亲和性）；4）PodAffinity/PodAntiAffinity（Pod 间亲和性和反亲和性）。这些约束从简单到复杂，逐步提供更强大的调度能力。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "默认情况下，kubelet 会给节点添加哪些污点？",
        "type": "多选",
        "options": [
            "node.kubernetes.io/not-ready（节点未就绪）",
            "node.kubernetes.io/unreachable（节点不可达）",
            "node.kubernetes.io/memory-pressure（内存压力大）",
            "node.kubernetes.io/pid-pressure（进程数压力大）"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "默认情况下，kubelet 会添加污点：node.kubernetes.io/not-ready（节点 NotReady 状态，NoExecute 效果，容忍度 300 秒）、node.kubernetes.io/unreachable（节点控制器不可达，NoExecute 效果，容忍度 300 秒）。内存压力和 PID 压力污点需要手动启用或通过控制器添加。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "优先级和抢占的 PreemptionPolicy 有哪些选项？",
        "type": "单选",
        "options": [
            "Always 和 Sometimes",
            "PreemptLowerPriority 和 Never",
            "Enforce 和 Allow",
            "Enable 和 Disable"
        ],
        "answer": [
            1
        ],
        "explanation": "PriorityClass 中的 PreemptionPolicy 有两个选项：PreemptLowerPriority（默认，允许抢占低优先级 Pod）、Never（禁止抢占，允许优先级影响排序但不触发抢占）。PreemptLowerPriority 确保高优先级任务在资源不足时能获得资源。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "以下哪些是自定义调度器的使用场景？",
        "type": "多选",
        "options": [
            "特殊硬件资源调度（如 GPU、FPGA）",
            "跨可用区成本优化",
            "特定应用的网络延迟要求",
            "负载均衡算法不适合的复杂场景"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "自定义调度器适用于：1）特殊硬件调度（如 GPU、FPGA、RDMA 等专用设备）；2）跨可用区成本优化（基于云计算实例价格）；3）网络延迟敏感应用（考虑拓扑和路由）；4）无法通过简单算法实现的复杂调度逻辑。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "如何为 Pod 指定自定义调度器？",
        "type": "单选",
        "options": [
            "使用 schedulerName 字段",
            "设置 annotations 的 scheduler-key",
            "通过 priorityClass 定义",
            "修改 Deployment 的 replicas"
        ],
        "answer": [
            0
        ],
        "explanation": "为 Pod 指定自定义调度器：在 Pod 规范中设置 spec.schedulerName 字段，值为调度器的名称。如果不指定，使用默认的 default-scheduler。多个自定义调度器可以并行运行，每个 Pod 选择一个调度器。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "调度器在调度决策时会检查哪些资源类型？",
        "type": "多选",
        "options": [
            "CPU 和内存",
            "临时存储（Ephemeral Storage）",
            "可扩展资源（如 GPU）",
            "持久卷（PV）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "调度器检查的资源类型：1）请求（request）和限制（limit）的 CPU；2）内存（Memory）；3）临时存储（Ephemeral Storage）；4）可扩展资源，如 nvidia.com/gpu、amd.com/gpu 等设备插件提供的资源。PV 存储（PV）不直接由调度器检查，它通过 PVC 绑定到节点上的存储类。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "什么是'优雅降级'（Graceful Degradation）在调度中的体现？",
        "type": "单选",
        "options": [
            "直接删除所有低优先级 Pod",
            "根据 Pod 优先级逐步抢占，尽量减少影响",
            "忽略优先级，随机选择 Pod",
            "系统崩溃时自动停止调度"
        ],
        "answer": [
            1
        ],
        "explanation": "优雅降级在调度中指：根据 Pod 优先级逐步抢占资源，调度器先尝试调度到有空闲资源的地方，如果必须抢占，优先选择低优先级且已运行较长时间的 Pod，尽量减少对应用的影响。避免突然大规模驱逐.",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "调度器支持的多调度器（Multiple Schedulers）模式下，Pod 会出现什么情况？",
        "type": "多选",
        "options": [
            "每个 Pod 只能被一个调度器调度",
            "未经调度的 Pod 可能不被任何调度器关注",
            "多个调度器可能竞争同一个 Pod",
            "调度失败不会自动重试"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "多调度器模式：1）每个 Pod 的 spec.schedulerName 决定它由哪个调度器处理；2）如果调度器名称无效或指定调度器未运行，Pod 会保持 Pending；3）不同调度器不会竞争同一个 Pod（由 schedulerName 解耦）；4）调度失败通常会重试。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "VolumeBindingWaitForFirstConsumer 策略的作用是什么？",
        "type": "单选",
        "options": [
            "立即绑定 PVC 到 PV",
            "等待 Pod 调度到节点后才绑定存储",
            "限制 Pod 的存储大小",
            "强制使用本地存储"
        ],
        "answer": [
            1
        ],
        "explanation": "VolumeBindingWaitForFirstConsumer 是 StorageClass 的绑定策略，让调度器先选择节点，然后在该节点上动态配置 PV。这确保了 PV 的拓扑位置与 Pod 的位置匹配，避免了跨区域挂载问题。默认策略是 VolumeBinding Immediate。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "PodDNSPolicy 如何影响调度？",
        "type": "多选",
        "options": [
            "ClusterFirst（默认，使用集群 DNS）",
            "Default（使用节点 DNS）",
            "ClusterFirstWithHostNet（主机网络 + 集群 DNS）",
            "None（手动配置 DNS）"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "PodDNSPolicy 影响 Pod 的 DNS 配置：ClusterFirst（使用集群 DNS，忽略节点的 resolv.conf）；Default（继承节点的 DNS 设置）；ClusterFirstWithHostNet（使用 hostNetwork 时也使用集群 DNS）；None（通过 Pod 的 dnsConfig 手动配置）。不影响节点调度，但影响网络行为。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "当节点出现'DiskPressure'（磁盘压力）污点时，会发生什么？",
        "type": "单选",
        "options": [
            "所有 Pod 立即被驱逐",
            "不调度新 Pod，已运行 Pod 保留",
            "只有高优先级 Pod 能调度",
            "节点自动重启"
        ],
        "answer": [
            1
        ],
        "explanation": "节点出现 DiskPressure 污点时效果为 NoSchedule：阻止新 Pod 调度到该节点，但已运行的 Pod 不受影响（除非 Pod 被 NoExecute 效果的污点驱逐，如 NotReady）。这为节点释放磁盘空间提供了缓冲时间。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "亲和性的 matchExpressions 支持哪些操作符？",
        "type": "多选",
        "options": [
            "In 和 NotIn",
            "Exists 和 DoesNotExist",
            "Gt 和 Lt",
            "Contains 和 Prefix"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "matchExpressions 支持的操作符：In（等于列表中的任一值）、NotIn（不等于列表中的任何值）、Exists（标签存在）、DoesNotExist（标签不存在）、Gt（大于）、Lt（小于）。Gt 和 Lt 只适用于数字类型的标签值。没有 Contains 和 Prefix 操作符。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "调度器如何处理 Pod 的 requests 和 limits 资源声明？",
        "type": "多选",
        "options": [
            "requests 用于节点资源过滤判断",
            "limits 用于过载保护（OOM）",
            "未设置 requests 时默认等于 limits",
            "limits 影响调度决策"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "requests 和 limits 的处理：requests 用于调度器判断节点是否有足够资源；limits 用于运行时资源限制（如 OOMKilled）；未设置 requests 时默认等于 limits（反之不是）。limits 不直接影响调度决策，但可能影响 QoS 等级从而影响驱逐优先级。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "什么是'调度失败'（Schedule Failed）的常见原因？",
        "type": "多选",
        "options": [
            "没有可用节点满足资源需求",
            "节点亲和性/污点约束无法满足",
            "PVC 无法绑定到 PV",
            "Pod 指定的节点名称不存在"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "调度失败常见原因：1）所有节点资源不足（CPU/内存/存储等）；2）约束无法满足（亲和性、污点、nodeSelector）；3）PVC 挂起；4）指定的 nodeName 不存在或 NotReady；5）自定义调度器未运行；6）节点选择器错误。可通过 kubectl describe pod 查看。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "调度器的'默认过滤策略'包括哪些？",
        "type": "多选",
        "options": [
            "NodeResourcesFit（资源检查）",
            "TaintToleration（污点容忍）",
            "NodeUnschedulable（节点调度禁用）",
            "PodDisruptionBudgetCheck"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "调度器默认过滤策略：NodeResourcesFit（检查 CPU、内存等资源是否满足）、TaintToleration（检查污点容忍）、NodeUnschedulable（检查节点是否标记为不可调度）、NodeAffinity、NodePort、VolumeBinding 等。PodDisruptionBudget 在驱逐时检查，非调度时。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "在多可用区集群中，确保 Pod 分散到不同区域的最佳实践是什么？",
        "type": "单选",
        "options": [
            "仅使用 nodeSelector 选择单个区域",
            "使用 Pod Anti-Affinity 配合 topologyKey：topology.kubernetes.io/zone",
            "手动为每个区域创建 Deployment",
            "设置污点阻止 Pod 跨区域"
        ],
        "answer": [
            1
        ],
        "explanation": "最佳实践：使用 Pod Anti-Affinity 配合 topologyKey: topology.kubernetes.io/zone，确保同一应用的副本分散到不同可用区，避免单区域故障影响。也可以结合 topologySpreadConstraints 控制更精细的分布策略。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "topologySpreadConstraints 的作用是什么？",
        "type": "多选",
        "options": [
            "控制 Pod 在拓扑域中的分布均匀度",
            "支持 maxSkew（最大偏差）和 minDomains（最小域数）约束",
            "适用于 Pod 间亲和性增强版",
            "只能用于 Service"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "topologySpreadConstraints 可指定 Pod 在拓扑域（如节点、区域）中的分布策略：maxSkew 定义允许的最大分布偏差（不均匀度），minDomains 定义最小可用域数，whenUnsatisfiable 指定不满足时的行为。是 Pod Anti-Affinity 的更灵活替代方案，适用于任何 Pod。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "PriorityClass 的 globalDefault 为 true 意味着什么？",
        "type": "单选",
        "options": [
            "所有 Pod 强制使用此优先级",
            "未指定 priorityClassName 的 Pod 默认使用此优先级",
            "此优先级最高，始终优先",
            "此优先级只能用于系统 Pod"
        ],
        "answer": [
            1
        ],
        "explanation": "globalDefault: true 表示此 PriorityClass 为全局默认类，未在 Pod 中显式指定 priorityClassName 的 Pod 将自动使用此类。一个集群只能有一个 PriorityClass 的 globalDefault 为 true。设置了 priorityClassName 的 Pod 不会受此默认值影响。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "调度器如何处理 DaemonSet 的 Pod？",
        "type": "多选",
        "options": [
            "DaemonSet Pod 调度到所有符合条件的节点",
            "DaemonSet 的 Pod 可以通过污点排除特定节点",
            "DaemonSet 忽略节点资源限制",
            "DaemonSet Pod 不受 PodAnti-Affinity 影响"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "DaemonSet Pod 调度行为：1）DaemonSet Controller 创建 Pod，调度器确保 Pod 调度到所有匹配节点选择器且未调度污点的节点；2）可以使用污点排除节点（NoSchedule/NoExecute 没有对应容忍度的节点）；3）受资源限制约束，否则无法调度；4）受 PodAffinity/Anti-Affinity 影响。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "当集群扩展新节点后，Pod 会自动调度到新节点吗？",
        "type": "单选",
        "options": [
            "会，调度器立即重新调度所有 Pod",
            "不会，只有新建的 Pod 和未调度的 Pod 会考虑新节点",
            "只有 DaemonSet Pod 会自动调度",
            "不会，需要手动重启所有 Pod"
        ],
        "answer": [
            1
        ],
        "explanation": "调度器不会主动重新调度已运行的 Pod。新节点加入后：1）新建的、未调度的和被驱逐的 Pod 会考虑新节点；2）DaemonSet Pod 会自动调度到符合条件的节点；3）已有 Pod 不会自动调度到新节点。如需重新均衡，可使用驱逐工具或手动删除重建。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "PDB 的 minAvailable 设置为 '50%' 意味着什么？",
        "type": "多选",
        "options": [
            "中断期间至少保持一半的 Pod 运行",
            "每次最多可以中断一半的 Pod",
            "必须要有至少 50 个 Pod 才能生效",
            "PDB 会阻止任何中断操作"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "minAvailable: '50%' 表示在自愿中断期间，至少保持 50% 的 Pod 处于运行状态。例如，有 10 个副本，maxUnavailable 为 5（或 50%）。如果只有一个副本，50% 向上取整为 1。百分比计算基于 Deployment 的期望副本数，PDB 不阻止中断，只是限制并发中断量。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "kube-scheduler 的扩展方式有哪些？",
        "type": "多选",
        "options": [
            "调度框架（Scheduling Framework）插件",
            "自定义调度器（Custom Scheduler）",
            "修改调度器配置文件覆盖策略",
            "通过 CRD 定义调度规则"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "支持扩展方式：1）调度框架插件：扩展点包括 Filter、Score、Bind、PreBind 等；2）自定义调度器：实现独立调度逻辑，通过 schedulerName 选择；3）配置文件：修改 KubeSchedulerConfiguration 的策略插件配置。CRD 主要用于定义资源，调度规则通过调度器配置定义。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "nodeName 字段适用于什么场景？",
        "type": "单选",
        "options": [
            "需要精确控制调度但接受单点故障",
            "要求高可用性的生产服务",
            "需要动态负载均衡",
            "跨区域自动分布"
        ],
        "answer": [
            0
        ],
        "explanation": "nodeName 直接指定节点，绕过调度器。适用场景：1）专用节点的特殊应用（如 GPU 节点上的机器学习）；2）调试或测试；3）已知节点且能接受单点风险。不适用于需要高可用、负载均衡或动态场景，因为节点不可用时 Pod 会失败。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "在调度过程中，'可扩展资源'（如 GPU）的特殊之处是什么？",
        "type": "多选",
        "options": [
            "必须在节点上通过设备插件暴露",
            "调度器检查节点的可扩展资源容量",
            "容器声明时必须指定 limits"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "可扩展资源（如 NVIDIA GPU）特殊处理：1）节点通过设备插件（Device Plugin）暴露资源；2）调度器在过滤阶段检查节点的可用可扩展资源；3）必须设置 limits（requests 默认等于 limits）；4）资源通常是整数类型（如 1 个 GPU）。不支持 fractions（如 0.5 GPU）。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "调度器的'缓存调度'（Scheduler Cache）有什么作用？",
        "type": "单选",
        "options": [
            "直接在内存中缓存节点信息，减少 API Server 访问",
            "存储所有历史调度决策",
            "永久保存 Pod 的调度状态",
            "预加载所有 Pod 的镜像"
        ],
        "answer": [
            0
        ],
        "explanation": "Scheduler Cache 在调度器本地缓存节点信息（资源、标签、污点等）、Pod 信息和集群状态。这显著减少了与 API Server 的交互，提高调度性能。缓存会定期与 API Server 同步，过期的信息会在调度前被刷新。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "容忍度（Toleration）的 operator 支持哪些类型？",
        "type": "多选",
        "options": [
            "Equal（污点键、值、效果完全匹配）",
            "Exists（仅污点键匹配，不检查值）",
            "NotEqual（值不匹配）",
            "Regex（正则表达式匹配）"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "容忍度的 operator 类型：Equal（默认，键、值、效果都匹配）、Exists（只要键存在即可，值字段会被忽略，常用于非固定值污点）。没有 NotEqual 或 Regex 操作符。操作符配合 effect 字段（NoSchedule、PreferNoSchedule、NoExecute、空表示所有效果）使用。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "如何让 Pod 驱逐后自动重新调度到其他节点？",
        "type": "多选",
        "options": [
            "设置 Pod 的 RestartPolicy 为 Always 或 OnFailure",
            "确保控制器（Deployment/StatefulSet）管理 Pod",
            "使用 nodeName 锁定特定节点",
            "设置 Pod 的 terminationGracePeriodSeconds"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "Pod 自动重新调度机制：1）由控制器（Deployment、StatefulSet、DaemonSet 等）管理，确保期望副本数；2）设置合理的 RestartPolicy（Always 或 OnFailure）；3）使用 nodeName 会限制调度，不适合自动重新调度；4）terminationGracePeriodSeconds 控制优雅终止时间，不影响调度。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "Pod 调度到节点后立即失败（如镜像拉取错误），调度器会做什么？",
        "type": "单选",
        "options": [
            "自动将其重新调度到其他节点",
            "不干预，由控制器决定是否重建",
            "立即标记节点为不可调度",
            "删除整个节点的所有 Pod"
        ],
        "answer": [
            1
        ],
        "explanation": "调度器在 Pod 绑定到节点后完成工作。如果 Pod 启动失败（如镜像问题），由控制器（如 Deployment）负责重建 Pod。调度器不会自动将失败 Pod 调度到其他节点，除非 Pod 被 Controller 重新创建且保持 Pending 状态。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "节点临时维护时，推荐使用哪种方式？",
        "type": "多选",
        "options": [
            "给节点添加 NoSchedule 污点",
            "使用 kubectl cordon 或 kubectl drain 命令",
            "直接停止节点上的 kubelet",
            "不操作，让 Pod 运行失败后自动迁移"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "节点临时维护推荐方式：1）kubectl cordon：标记节点为不可调度，阻止新 Pod；2）kubectl drain：驱逐所有 Pod（除了 DaemonSet）并标记不可调度；3）添加 NoSchedule 污点：阻止新 Pod，但需要手动驱逐；4）直接停止 kubelet 会导致 NotReady，不推荐。",
        "difficulty": "基础"
    },
    {
        "module": "调度",
        "question": "调度器的'抢占候选者'（Preemption Candidates）选择算法是什么？",
        "type": "单选",
        "options": [
            "选择优先级最低的一个 Pod",
            "选择能够满足高优先级 Pod 的最小集合",
            "随机选择节点上的所有有状态 Pod",
            "不选择，直接拒绝高优先级 Pod"
        ],
        "answer": [
            1
        ],
        "explanation": "抢占候选者选择：当高优先级 Pod 需要从节点抢占资源时，调度器尝试找到一组能释放足够资源的低优先级 Pod，使得集合大小（Pod 数量）最小。这减少了对应用的影响。每个节点都会尝试找到这样的集合，然后选择最佳节点。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "Kubernetes 支持的存储拓扑感知调度包括哪些？",
        "type": "多选",
        "options": [
            "区域（Zone）拓扑感知",
            "节点（Node）拓扑感知",
            "快照（Snapshot）拓扑感知",
            "跨集群（Multi-Cluster）拓扑感知"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "存储拓扑感知调度：1）区域拓扑感知：PV 绑定到可用区，确保 Pod 调度到同一区域；2）节点拓扑感知：使用本地存储（Local PV）时，PV 绑定到特定节点，Pod 必须调度到此节点。这两个通过 StorageClass 的 volumeBindingMode 策略（WaitForFirstConsumer）和 NodeAffinity 实现。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "默认调度器调度失败事件（Events）的消息格式是什么？",
        "type": "多选",
        "options": [
            "0/3 nodes are available",
            "Insufficient CPU",
            "node(s) had taint {node.kubernetes.io/not-ready}",
            "Pending in Scheduler"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "调度失败事件消息示例：1）'0/3 nodes are available'（无节点满足条件）；2）'Insufficient CPU' 或 'Insufficient memory'（资源不足）；3）'node(s) had taint'（污点不满足）；4）'didn't match node selector'（节点选择器不匹配）等。Pending in Scheduler 不是标准消息。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "Pod 的 QoS（服务质量）等级如何影响调度和驱逐？",
        "type": "多选",
        "options": [
            "Guaranteed（requests 等于 limits）优先级最高",
            "Burstable（设置 requests）中等优先级",
            "BestEffort（无 requests、无 limits）最低优先级",
            "QoS 直接影响调度决策"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "QoS 影响运行时优先级而非调度：Guaranteed（资源请求等于限制）在内存压力时最后被驱逐；Burstable（有 requests 但不等或无 limits）中等优先级；BestEffort（无 requests 和 limits）最先被驱逐。这些等级不影响调度器的调度决策，但影响 OOM 行为。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "如何在 Kubernetes 中实现批处理任务的资源预留？",
        "type": "单选",
        "options": [
            "使用高优先级的 Guaranteed QoS Pod",
            "创建一个低优先级的 BestEffort Pod 预留资源",
            "使用 ResourceQuota 限制总资源",
            "手动调度到专用节点"
        ],
        "answer": [
            0
        ],
        "explanation": "批处理任务资源预留：优先使用高优先级的 Guaranteed QoS Pod（requests 等于 limits），确保在资源竞争时优先调度并保持运行。也可使用专用节点（污点+容忍）或结合控制器确保所需资源。ResourceQuota 限制但无法预留，BestEffort 会被优先驱逐，不适合预留。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "StatefulSet Pod 的调度有什么特殊要求？",
        "type": "多选",
        "options": [
            "Pod 名字包含唯一序号，依次创建",
            "每个 Pod 可以有稳定的网络标识和存储",
            "必须严格按序号顺序调度",
            "StatefulSet Pod 不支持亲和性配置"
        ],
        "answer": [
            0,
            1
        ],
        "explanation": "StatefulSet 提供稳定身份：1）Pod 有顺序编号（如 web-0, web-1），依次创建；2）保证稳定的网络标识（Pod 名称）和存储（PVC）；3）调度器不强制严格顺序，但控制器保证按序创建；4）StatefulSet Pod 完全支持亲和性、污点等调度配置。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "Kubernetes 中的'就地升级'（In-place Update）对调度有什么影响？",
        "type": "单选",
        "options": [
            "必须删除旧 Pod 并重新调度新版本",
            "Pod 可以原地升级某些字段，无需重新调度",
            "调度器自动选择最佳升级时机",
            "就地升级不可用"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 逐步支持就地升级（In-place Update），对于某些字段（如 container.image），可以在不终止和重新调度 Pod 的情况下更新。这减少了调度开销和中断时间。不过，完整功能仍在演进中，多数变更仍需重建 Pod。",
        "difficulty": "高级"
    },
    {
        "module": "调度",
        "question": "调度器如何处理 NodePort 类型的服务调度？",
        "type": "多选",
        "options": [
            "NodePort 不影响 Pod 的调度位置",
            "NodePort 使用 kube-proxy 在每个节点开放端口",
            "可以通过 nodeSelector 限制 NodePort 服务的节点",
            "NodePort 强制 Pod 调度到所有节点"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "NodePort 与调度：1）NodePort 服务在每个节点通过 kube-proxy 开放端口，不限制 Pod 的调度位置；2）可以通过节点选择器或亲和性将 NodePort 服务的 Pod 集中在特定节点，减少端口冲突；3）NodePort 不强制 Pod 调度到所有节点（那是 DaemonSet 的行为）。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "在 Kubernetes 中，防止关键应用被抢占的最佳实践是什么？",
        "type": "多选",
        "options": [
            "使用最高优先级的 PriorityClass",
            "设置高 value 值，确保低优先级 Pod 无法抢占",
            "使用 Guaranteed QoS 设置requests等于limits",
            "设置 nodeName 锁定到特定节点"
        ],
        "answer": [
            0,
            2
        ],
        "explanation": "防止关键应用被抢占：1）使用高优先级的 PriorityClass（value 大于其他 Pod）；2）使用 Guaranteed QoS（requests 等于 limits），在资源压力时最后被驱逐；3）不要依赖 nodeName 锁定（会限制调度和可用性）；4）确保集群有足够资源，避免触发抢占。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "调度器的'调度周期'（Scheduling Cycle）包括哪些步骤？",
        "type": "多选",
        "options": [
            "从队列获取未调度 Pod",
            "过滤阶段（Filter）筛选节点",
            "打分阶段（Score）排序节点",
            "绑定阶段（Bind）并设置状态"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "调度器的调度周期：1）从调度队列 Pending Pods 获取需要调度的 Pod；2）过滤阶段应用预选策略，筛选出满足所有条件的节点；3）打分阶段应用优选策略，对节点评分排序；4）绑定阶段将 Pod 绑定到最高分节点，更新 API Server。整个过程通过缓存优化性能。",
        "difficulty": "进阶"
    },
    {
        "module": "调度",
        "question": "在 HPA 水平扩展中，新创建的 Pod 如何被调度？",
        "type": "单选",
        "options": [
            "由自定义调度器专门处理",
            "由默认调度器按正常流程调度",
            "调度到现有 Pod 所在的同一节点",
            "不经过调度器，直接运行"
        ],
        "answer": [
            1
        ],
        "explanation": "HPA 产生的 Pod 由 Deployment 或 StatefulSet 等控制器管理，这些控制器创建的 Pod 由默认调度器正常调度。调度器会基于资源需求、亲和性、污点等因素选择节点。如果需要特殊调度行为，可以在 Controller 的 Pod 模板中设置调度相关配置，而不是单独处理 HPA 的 Pod。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "Kubernetes 集群由哪两个主要组件组成？",
        "type": "单选",
        "options": [
            "API Server 和 Scheduler",
            "控制平面和工作节点",
            "etcd 和 Docker",
            "kubectl 和 Dashboard"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 集群由控制平面（Control Plane，也称 Master 节点）和工作节点（Worker Nodes）组成。控制平面负责集群决策和状态管理，工作节点运行容器应用。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "节点控制器的主要职责是什么？",
        "type": "单选",
        "options": [
            "创建和删除节点",
            "监控节点状态，在节点不健康时做出反应",
            "调度 Pod 到节点",
            "管理节点上的容器"
        ],
        "answer": [
            1
        ],
        "explanation": "节点控制器监控节点状态，检查节点是否健康（如 kubelet 是否响应），在节点不健康时做出反应（如标记节点为 NotReady、驱逐该节点上的 Pod）。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "节点自动扩缩容的作用是什么？",
        "type": "单选",
        "options": [
            "自动扩展 Pod 数量",
            "根据负载自动添加或删除工作节点",
            "自动升级节点",
            "自动管理 Pod 生命周期"
        ],
        "answer": [
            1
        ],
        "explanation": "节点自动扩缩容（如 Cluster Autoscaler）根据 Pod 的资源需求自动向集群添加节点或移除空闲节点，确保集群有足够资源运行 Pod。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "资源配额管理的作用是什么？",
        "type": "单选",
        "options": [
            "限制单个 Pod 的资源使用",
            "限制命名空间的资源使用",
            "限制节点的资源使用",
            "限制集群的资源使用"
        ],
        "answer": [
            1
        ],
        "explanation": "资源配额用于限制命名空间内的资源使用，如限制 Pod 数量、CPU 和内存 requests/limits 总量、存储容量等。防止用户或团队占用过多资源。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "集群监控的主要指标有哪些？",
        "type": "多选",
        "options": [
            "节点资源使用率（CPU、内存）",
            "Pod 和容器状态",
            "自定义应用指标",
            "网络流量"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "集群监控主要指标：节点资源使用率（CPU、内存、磁盘、网络）、Pod 和容器状态（运行中、失败、重启次数等）、自定义应用指标（QPS、延迟等）、网络流量。Kubernetes 提供 Metrics Server、Prometheus 等监控方案。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "集群日志的作用是什么？",
        "type": "多选",
        "options": [
            "记录应用程序日志",
            "记录系统组件日志",
            "用于故障排查和审计",
            "替代日志管理工具"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "集群日志记录应用程序日志和系统组件日志，用于故障排查、性能分析和审计。Kubernetes 支持多种日志管理方案，如 fluentd、Filebeat 结合 ELK、Loki 等日志平台，不是替代其他日志管理工具。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "集群升级时的注意事项是什么？",
        "type": "多选",
        "options": [
            "备份 etcd 数据",
            "逐步升级控制平面组件",
            "逐个升级工作节点",
            "一次性升级所有节点"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "集群升级的注意事项：备份 etcd 数据、逐步升级控制平面组件（先升级 etcd，再升级 API Server、Controller Manager、Scheduler）、逐个升级工作节点并驱逐 Pod。不建议一次性升级所有节点，可能导致服务不可用。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "kubelet 如何向控制平面报告节点状态？",
        "type": "单选",
        "options": [
            "通过 gRPC 协议定期发送心跳",
            "通过 REST API 定期发送心跳",
            "通过 WebSocket 实时通信",
            "通过 UDP 广播节点状态"
        ],
        "answer": [
            0
        ],
        "explanation": "kubelet 通过 gRPC 协议定期向控制平面发送心跳，报告节点的健康状态、资源使用情况、Pod 运行状态等信息。默认心跳间隔为 10 秒。如果控制平面在 node-monitor-period 时间（默认 40 秒）内未收到心跳，会将节点标记为 Unknown。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "节点条件 Ready 为 False 的最常见原因是什么？",
        "type": "单选",
        "options": [
            "节点 CPU 使用率过高",
            "kubelet 未正常运行或无法与控制平面通信",
            "节点上没有运行的 Pod",
            "节点内存使用率超过 80%"
        ],
        "answer": [
            1
        ],
        "explanation": "节点条件 Ready 为 False 最常见的原因是 kubelet 未正常运行、kubelet 无法与控制平面通信（如网络问题）、容器运行时问题（如 Docker 守护进程故障）、磁盘压力或 PID 压力等。示例命令：kubectl get nodes -o wide 和 kubectl describe node <node-name>",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "节点驱逐 Pod 的默认阈值是多少？",
        "type": "单选",
        "options": [
            "节点内存使用率达到 80%",
            "节点内存使用率达到 85%，且持续 10 秒",
            "节点内存不足或磁盘压力触发",
            "节点 CPU 使用率达到 90%"
        ],
        "answer": [
            2
        ],
        "explanation": "节点驱逐 Pod 的默认阈值由 kubelet 的 eviction-sig 参数配置。默认值：memory.available < 100Mi，nodefs.available < 10% 或 imagefs.available < 15%，PID 使用率 > 90%。当节点资源不足时，kubelet 会根据 Pod 的 QoS 优先级驱逐 Pod，示例配置：kubelet --eviction-hard=memory.available<500Mi",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "kubeadm 升级集群时，应该先升级什么组件？",
        "type": "单选",
        "options": [
            "kubelet",
            "kube-proxy",
            "控制平面组件（etcd、API Server 等）",
            "工作节点"
        ],
        "answer": [
            2
        ],
        "explanation": "kubeadm 升级集群时应该先升级控制平面组件（etcd、API Server、Controller Manager、Scheduler），再升级 kubelet 和 kube-proxy，最后逐个升级工作节点。升级顺序：kubeadm upgrade plan → kubeadm upgrade apply <version> → kubeadm upgrade node → 升级 kubelet（apt-get upgrade -y kubelet）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "什么是集群的高可用架构？",
        "type": "单选",
        "options": [
            "所有节点都运行多个控制平面组件",
            "使用多个 Master 节点和负载均衡器确保控制平面不单点故障",
            "每个工作节点都运行备份的 Pod 副本",
            "使用分布式存储保存 etcd 数据"
        ],
        "answer": [
            1
        ],
        "explanation": "集群高可用架构包括：3 个或更多 Master 节点（奇数个以避免脑裂）、etcd 使用 Raft 算法实现分布式一致性集群、外部负载均衡器（如 HAProxy、Nginx、云厂商 LB）转发 API Server 请求到多个 Master。控制平面任意一个节点故障，其他节点仍可提供服务。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "etcd 的重要性是什么？",
        "type": "单选",
        "options": [
            "它是容器运行时",
            "它是 Kubernetes 的分布式键值存储，保存所有集群状态数据",
            "它是集群监控组件",
            "它是集群日志收集组件"
        ],
        "answer": [
            1
        ],
        "explanation": "etcd 是 Kubernetes 的分布式键值存储，保存所有集群状态数据：节点信息、Pod/Service/Deployment 等 API 对象状态、配置数据、机密信息。etcd 使用 Raft 共识算法确保数据一致性和高可用。备份 etcd 数据是集群管理的最重要的操作之一。命令：etcdctl snapshot save",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "如何备份 etcd 数据？",
        "type": "单选",
        "options": [
            "备份 /var/log 目录",
            "使用 etcdctl snapshot save 命令创建快照",
            "备份 /etc/kubernetes 目录",
            "使用 kubectl get 导出所有资源"
        ],
        "answer": [
            1
        ],
        "explanation": "备份 etcd 数据使用 etcdctl snapshot save 命令创建快照。示例：ETCDCTL_API=3 etcdctl --endpoints=https://127.0.0.1:2379 --cacert=/etc/kubernetes/pki/etcd/ca.crt --cert=/etc/kubernetes/pki/etcd/server.crt --key=/etc/kubernetes/pki/etcd/server.key snapshot save /backup/etcd-snapshot.db。恢复命令：etcdctl snapshot restore。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "什么是 Kubernetes 证书管理？",
        "type": "单选",
        "options": [
            "管理 SSL 证书以确保通信安全",
            "管理应用的 TLS 证书",
            "管理用户登录证书",
            "管理数据库证书"
        ],
        "answer": [
            0
        ],
        "explanation": "Kubernetes 证书管理负责管理集群各组件间的 TLS 证书：API Server 证书、etcd 证书、kube-apiserver-kubelet 客户端证书、Service Account Token（JWT）、kubeconfig 证书。证书有效期为一年，到期前需要轮换。kubeadm 自动管理证书：kubeadm init phase certs，kubeadm alpha certs renew all。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何查看节点上的 Pod 分布情况？",
        "type": "单选",
        "options": [
            "kubectl get nodes",
            "kubectl get pods -o wide",
            "kubectl describe nodes",
            "kubectl top nodes"
        ],
        "answer": [
            2
        ],
        "explanation": "查看节点上的 Pod 分布使用 kubectl describe nodes 命令，它会显示每个节点的详细信息包括：Non-terminated Pods（运行中、待定、成功的 Pod 列表）、Allocated resources（已分配资源）、Capacity（总资源量）。kubectl get pods -o wide 显示 Pod 所在节点但不统计。示例：kubectl describe nodes node-1 | grep -A 20 'Non-terminated Pods'",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "如何将节点标记为不可调度？",
        "type": "单选",
        "options": [
            "kubectl delete node",
            "kubectl cordon <node-name>",
            "kubectl drain <node-name>",
            "kubectl taint node"
        ],
        "answer": [
            1
        ],
        "explanation": "kubectl cordon <node-name> 将节点标记为不可调度（Unschedulable），新的 Pod 不会被调度到该节点，但现有 Pod 继续运行。kubectl drain <node-name> 除了标记不可调度外，还会驱逐所有 Pod（除了 DaemonSet Pod）。恢复调度：kubectl uncordon <node-name>。示例：kubectl cordon node-1，kubectl uncordon node-1",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "kubectl drain 和 kubectl cordon 的区别是什么？",
        "type": "单选",
        "options": [
            "没有区别",
            "cordon 驱逐 Pod，drain 只标记不可调度",
            "cordon 只标记不可调度，drain 还会驱逐 Pod",
            "cordon 删除节点，drain 升级节点"
        ],
        "answer": [
            2
        ],
        "explanation": "kubectl cordon：只标记节点为 Unschedulable，不会影响现有 Pod。kubectl drain：先标记节点为 Unschedulable，再安全驱逐所有 Pod（驱逐会确保 Pod 在其他节点重建）。drain 用于节点维护（如升级、下线），示例：kubectl drain node-1 --ignore-daemonsets --delete-emptydir-data。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何监控集群中的资源使用情况？",
        "type": "单选",
        "options": [
            "kubectl get nodes",
            "kubectl top nodes 和 kubectl top pods",
            "kubectl describe pods",
            "kubectl logs"
        ],
        "answer": [
            1
        ],
        "explanation": "监控集群资源使用kubectl top nodes（显示节点 CPU/内存使用率）和 kubectl top pods（显示 Pod CPU/内存使用率）。这些命令依赖 Metrics Server。示例：kubectl top nodes，kubectl top pods -A。查看详细信息：kubectl describe node <node-name> 查看资源分配，kubectl describe pod <pod-name> 查看容器资源请求和限制。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "什么是 Metrics Server？",
        "type": "单选",
        "options": [
            "监控集群的日志系统",
            "Kubernetes 的核心指标收集器，提供 CPU/内存使用率数据",
            "报警系统",
            "分布式跟踪系统"
        ],
        "answer": [
            1
        ],
        "explanation": "Metrics Server 是 Kubernetes 的核心指标收集器，通过 kubelet 的 Summary API 收集节点和 Pod 的 CPU/内存使用率数据。Metrics Server 作为 API 的 metrics.k8s.io/v1beta1 资源提供服务，用于 HPA（水平 Pod 自动扩缩容）和 kubectl top 命令。安装：kubectl apply -f https://github.com/kubernetes-sigs/metrics-server/releases/latest/download/components.yaml",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "集群日志的采集方式有哪些？",
        "type": "单选",
        "options": [
            "只能采集容器日志",
            "容器化日志代理节点日志",
            "只能采集系统日志",
            "只能采集应用日志"
        ],
        "answer": [
            1
        ],
        "explanation": "Kubernetes 集群日志采集方式：1）容器化日志代理：在 Pod 中运行 Fluentd、Fluent Bit、Filebeat 等日志采集器，采集容器日志和节点日志。2）节点级日志代理：在每个节点运行日志采集器 DaemonSet，采集容器 stdout/stderr 和节点日志文件。3）应用直接发送：应用向日志系统发送日志（如 Loki、ELK）。推荐使用 DaemonSet 方式部署日志代理。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "为什么需要日志保留策略？",
        "type": "单选",
        "options": [
            "为了节省存储空间和成本",
            "为了满足合规要求和审计需求",
            "为了提高查询性能",
            "以上所有原因"
        ],
        "answer": [
            3
        ],
        "explanation": "日志保留策略需要：1）保存存储空间和成本（日志快速增长占用大量存储）；2）满足合规要求（如 GDPR、HIPAA 需要保留日志一定期限）；3）审计需求（安全事件排查、运维审计）；4）提高查询性能（过多日志影响查询速度）。ELK/Logstash/Loki 等日志系统支持索引轮转、删除旧日志。示例：Elasticsearch 的 ILM 索引生命周期管理。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "Prometheus 在 Kubernetes 集群监控中的作用是什么？",
        "type": "单选",
        "options": [
            "收集和存储指标数据，支持查询和报警",
            "只收集应用指标",
            "只收集系统指标",
            "只用于可视化"
        ],
        "answer": [
            0
        ],
        "explanation": "Prometheus 在 Kubernetes 中作为核心监控组件：1）自动发现 Kubernetes 资源（Service、Pod、Node）；2）从 kubelet、cAdvisor、Node Exporter 等收集指标；3）从应用通过 HTTP /metrics 端点抓取自定义指标；4）支持 PromQL 查询语言；5）通过 Alertmanager 实现报警。安装：Operator 模式部署（kube-prometheus-stack）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何进行集群的健康检查？",
        "type": "单选",
        "options": [
            "只检查节点状态",
            "检查节点状态、控制平面组件、关键 Pod 和资源使用率",
            "只检查 Pod 状态",
            "只检查 etcd 状态"
        ],
        "answer": [
            1
        ],
        "explanation": "集群健康检查包括：1）节点状态（kubectl get nodes 检查 Ready）；2）控制平面组件（kubectl get cs 虽已废弃，但可检查 API Server、Controller Manager、Scheduler 是否运行）；3）核心系统 Pod（kube-system 命名空间 的 Pod）；4）资源使用率（kubectl top nodes）；5）etcd 健康状况（etcdctl endpoint health）。综合评估确保集群正常运行。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "什么是 Pod Disruption Budget (PDB)？",
        "type": "单选",
        "options": [
            "限制 Pod 的资源使用",
            "在维护期间确保最少可用的 Pod 副本数",
            "控制 Pod 的调度",
            "管理 Pod 的生命周期"
        ],
        "answer": [
            1
        ],
        "explanation": "Pod Disruption Budget（PDB）定义在自愿中断（如节点维护、应用部署）期间，应用最少需要保持多少可用 Pod 副本。PDB 确保 kubectl drain 或集群自动扩缩容不会导致应用不可用。示例：minAvailable: 2 最少保持 2 个 Pod，maxUnavailable: 1 最多有 1 个 Pod 不可用。适用 Deployment、StatefulSet、ReplicaSet。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "集群联邦（Federation）的用途是什么？",
        "type": "单选",
        "options": [
            "在多个 Kubernetes 集群间统一管理和部署应用",
            "将多个节点组成一个集群",
            "在多个 Pod 间共享网络",
            "在多个集群间共享存储"
        ],
        "answer": [
            0
        ],
        "explanation": "Kubernetes Federation v2（Kubefed）用于管理多个 Kubernetes 集群：1）跨集群部署应用（多地域部署）；2）跨集群服务发现（联邦 Service）；3）跨集群调度和故障转移；4）统一配置和策略管理。示例：FederationDeployment 在多个集群部署同一个应用。注意：Federation v1 已废弃，推荐使用 Karmada（CNCF 项目）或使用多集群管理工具。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "什么是集群的冷启动问题？",
        "type": "单选",
        "options": [
            "集群启动时 etcd 恢复问题",
            "新节点或新 Pod 需要下载镜像、初始化等，启动延迟高",
            "集群停止或重启问题",
            "节点冷启动资源预留问题"
        ],
        "answer": [
            1
        ],
        "explanation": "集群冷启动问题是指：1）当集群扩容新节点时，新节点需要拉取容器镜像、初始化 kubelet、准备运行环境，导致 Pod 启动缓慢；2）当应用缩容到 0 后再扩容时，需要重新拉取镜像。解决方法：节点预安装镜像（使用 DaemonSet 或 kubeadm 预加载）、使用 P2P 镜像分发（如 Dragonfly）、镜像缓存加速。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何保护 Kubernetes API Server？",
        "type": "单选",
        "options": [
            "只使用 HTTP 访问",
            "使用 TLS 加密、认证和授权机制",
            "禁用 kubectl 访问",
            "不需要保护"
        ],
        "answer": [
            1
        ],
        "explanation": "保护 Kubernetes API Server 的方法：1）启用 TLS 加密（HTTPS）；2）认证机制（X509 证书、Token、OpenID Connect、Webhook）；3）授权机制（RBAC、ABAC、Node Authorizer）；4）API Server 审计日志（audit-logging）；5）启用准入控制器。示例：创建 ServiceAccount 并绑定 RBAC 角色、启用 --authorization-mode=RBAC。避免直接暴露 API Server 到公网。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何查看集群的事件历史？",
        "type": "单选",
        "options": [
            "kubectl get events",
            "kubectl logs",
            "kubectl get pods",
            "kubectl describe"
        ],
        "answer": [
            0
        ],
        "explanation": "查看集群事件使用 kubectl get events --sort-by=.metadata.creationTimestamp。事件记录集群中发生的重要信息：Pod 的调度、镜像拉取、容器启动失败、节点状态变化等。kubectl get 显示事件列表，kubectl show event event-name 查看详情，kubectl describe resource 也会显示相关事件。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "集群升级的回滚步骤是什么？",
        "type": "单选",
        "options": [
            "直接恢复快照",
            "恢复 etcd 快照，重启控制平面，恢复 kubelet",
            "删除所有节点重建",
            "使用 kubectl undo 命令"
        ],
        "answer": [
            1
        ],
        "explanation": "集群升级回滚步骤：1）如果升级失败且没有快照，先停止控制平面组件；2）恢复 etcd 快照：etcdctl snapshot restore --data-dir <new-dir> <snapshot>；3）更新 kube-apiserver、kube-controller-manager、kube-scheduler 的 manifest 文件，使用旧的容器镜像版本（通常在 /etc/kubernetes/manifests/）；4）重启控制平面：systemctl restart kubelet；5）逐个恢复工作节点",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "节点休眠是什么？",
        "type": "单选",
        "options": [
            "节点自动关闭以节省资源",
            "节点上的所有 Pod 进入睡眠状态",
            "节点不再接收新的 Pod 调度且现有 Pod 不会运行",
            "节点降低 CPU 频率"
        ],
        "answer": [
            0
        ],
        "explanation": "节点休眠（Node Sleep）指集群自动关闭空闲的节点以节省资源（尤其在云环境中避免计费成本）。当节点空闲且没有 Pod 运行时自动关闭，再次需要资源时自动启动。相关工具：Cluster Autoscaler 支持节点自动缩容，云厂商（如 AWS、GKE）支持实例休眠。最佳实践：配合节点自动扩缩容和 Pod 亲和性策略使用。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "集群证书过期会发生什么？",
        "type": "单选",
        "options": [
            "证书过期不影响集群运行",
            "API Server 将拒绝连接，导致集群不可用",
            "只有 kubelet 受影响",
            "只有 etcd 受影响"
        ],
        "answer": [
            1
        ],
        "explanation": "集群证书过期会导致：1）kubelet 无法与 API Server 通信（节点状态 Unknown）；2）kubectl 等客户端无法连接 API Server；3）API Server 无法与 etcd 通信；4）控制平面停止工作。证书默认有效期为 1 年，提前查看过期时间：kubeadm certs check-expiration。轮换证书：kubeadm alpha certs renew all。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何管理集群的命名空间（Namespace）？",
        "type": "多选",
        "options": [
            "使用命名空间隔离不同团队或环境",
            "使用 ResourceQuota 限制命名空间资源配额",
            "命名空间之间网络隔离需要 NetworkPolicy",
            "命名空间可以防止所有资源的冲突"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "命名空间用于隔离不同团队或环境（如 dev、staging、prod），命名空间资源配额使用 ResourceQuota 限制 Pod 数量、CPU/内存总量，网络隔离需要 NetworkPolicy（命名空间不能保证网络隔离），命名空间不能完全防止资源冲突（如某些资源类型如 PersistentVolume、Node 是集群级别的）。kubeadm 默认创建 kube-system、kube-public 等命名空间。命令：kubectl get ns，kubectl create namespace <name>。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "集群升级前的准备工作有哪些？",
        "type": "多选",
        "options": [
            "备份 etcd 和重要配置文件",
            "检查集群健康状态和资源使用情况",
            "阅读新版本的变更日志",
            "直接运行 kubeadm upgrade apply 不需要准备"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "集群升级前准备：1）备份 etcd 快照；2）备份 /etc/kubernetes 配置文件；3）检查集群健康状况（kubectl get nodes，kubectl get pods -A）；4）检查资源使用情况（kubectl top）；5）阅读新版本变更日志（CHANGELOG.md）；6）测试升级流程（先在测试环境）。kubeadm 升级前可使用 kubeadm upgrade plan 查看升级计划。不要直接升级生产环境。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "Kubernetes 集群监控常用的工具有哪些？",
        "type": "多选",
        "options": [
            "Prometheus + Grafana",
            "Metricbeat + Kibana",
            "Zabbix",
            "Datadog、New Relic 等云监控服务"
        ],
        "answer": [
            0,
            1,
            3
        ],
        "explanation": "Kubernetes 集群监控常用工具：1）Prometheus + Grafana（CNCF，开源社区流行）；2）Metricbeat + Kibana（ELK Stack）；3）云监控服务（Datadog、New Relic、AWS CloudWatch、Azure Monitor）；4）Kubernetes Dashboard（基础监控）；5）Thanos（多集群 Prometheus）。Zabbix 支持但不推荐用于 Kubernetes（缺少 Kubernetes 集成）。推荐 Prometheus + Grafana 作为默认监控方案。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "Prometheus 监控 Kubernetes 的方式有哪些？",
        "type": "多选",
        "options": [
            "配置静态手动抓取目标的 targets",
            "使用 ServiceMonitor CRD 自动发现服务",
            "使用 PodMonitor CRD 自动发现 Pod",
            "使用 API Server 的 /metrics 端点"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Prometheus 监控 Kubernetes 方式：1）静态配置（手动配置 targets）；2）ServiceMonitor CRD（Prometheus Operator 定义，通过 Service 选择器自动发现）；3）PodMonitor CRD（通过 Pod 标签自动发现）；4）Kubernetes 服务发现（Prometheus 内置支持：kubernetes_sd_configs）。Prometheus 不直接抓取 API Server /metrics（而是抓取 kube-proxy、kubelet、应用暴露的 /metrics）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "Kubernetes 日志管理平台包括哪些组件？",
        "type": "多选",
        "options": [
            "日志采集器（Fluentd、Fluent Bit、Filebeat）",
            "日志存储和索引（Elasticsearch、Loki）",
            "日志可视化（Kibana、Grafana）",
            "日志报警（Alertmanager、ElastAlert）"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 日志管理平台：1）采集器（Fluentd、Fluent Bit、Filebeat）：采集容器日志、节点日志；2）存储和索引（Elasticsearch、Loki、ClickHouse）：存储日志并支持查询；3）可视化（Kibana、Grafana）：查看和过滤日志；4）日志报警（ElastAlert、Loki Alertmanager）：日志匹配规则触发报警。Alertmanager 主要用于 Prometheus 报警而不是日志报警。常见方案：EFK（Elasticsearch + Fluentd + Kibana）、ELK（Elasticsearch + Logstash + Kibana）、ELG（Elasticsearch + Loki + Grafana）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何优化集群的日志采集性能？",
        "type": "多选",
        "options": [
            "使用轻量级日志采集器（Fluent Bit 代替 Fluentd）",
            "只采集必要的日志（过滤日志级别、排除无用的日志）",
            "在应用端直接发送日志到日志系统减少中间层",
            "同时使用多个日志采集器采集相同日志"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "优化日志采集性能：1）使用轻量级采集器（Fluent Bit 内存占用约 5MB，Fluentd约 40MB）；2）过滤日志（只收集错误日志、按环境过滤）；3）减少日志字段（避免采集过多元数据）；4）应用端直接发送（绕过采集层，直接发送到日志系统如 Loki）；5）使用批量和压缩（减少网络传输）。不建议同时使用多个采集器重复采集（造成资源浪费和重复索引）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "集群升级过程中如何确保服务可用？",
        "type": "多选",
        "options": [
            "逐步升级节点，使用 Pod Disruption Budget 确保最少副本",
            "升级前先滚动升级应用 Deployment",
            "启用集群自动扩缩容和负载均衡",
            "一次性升级所有节点"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "集群升级确保服务可用：1）逐步升级工作节点（逐个驱逐 Pod，等待其他节点重建）；2）使用 PDB 确保应用最少可用副本；3）升级前先滚动升级应用（确保应用可以容忍节点重启）；4）启用 HPA 和自动扩缩容（自动补充节点）；5）使用滚动升级策略。不建议一次性升级所有节点（会导致服务完全中断）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "集群容量规划需要考虑哪些因素？",
        "type": "多选",
        "options": [
            "业务增长预测（Pod、服务数量）",
            "资源预留（给系统组件和突发负载预留资源）",
            "高可用需求（多副本、多可用区部署）",
            "不考虑成本，直接使用无限资源"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "集群容量规划因素：1）业务预测（未来 6-12 个月的 Pod 数量、服务数量）；2）资源预留（系统组件 kube-system 的 Pod、突发负载预留、节点缓冲）；3）高可用需求（多副本、多可用区、故障恢复）；4）成本管理（使用竞价实例、混合云、自动扩缩容）；5）资源峰值和平均值（应对流量高峰）。不考虑成本会导致资源浪费。工具：kubectl top、Capacity Planner、云厂商成本分析工具。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何提高集群的可用性？",
        "type": "多选",
        "options": [
            "使用多 Master 节点的高可用架构",
            "使用多个可用区（AWS Multi-AZ、GKE Multi-Zone）部署",
            "使用自动扩缩容和自愈机制",
            "将所有关键应用部署在同一个节点"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "提高集群可用性：1）多 Master 节点架构（避免控制平面单点故障）；2）多可用区部署（避免单可用区故障）；3）自动扩缩容（Cluster Autoscaler 补充节点）；4）自愈机制（Node Controller、ReplicaSet 自动重建 Pod）；5）PDB 确保应用最小可用副本。将所有应用部署在同一个节点会导致节点故障时全部应用不可用（违反可用性原则）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何排查集群节点 NotReady 问题？",
        "type": "多选",
        "options": [
            "检查 kubelet 是否正常运行（systemctl status kubelet）",
            "检查节点资源使用情况和磁盘压力",
            "查看 kubelet 日志和节点事件",
            "直接删除节点重建"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "排查节点 NotReady：1）检查 kubelet 运行状态（systemctl status kubelet，journalctl -u kubelet）；2）查看节点条件（kubectl describe node 检查 MemoryPressure、DiskPressure、PIDPressure）；3）查看节点事件（kubectl get events --field-selector involvedObject.kind=Node）；4）检查网络（kubelet 能否连接 API Server）；5）检查证书过期（kubeadm certs check-expiration）。不建议直接删除节点（会丢失配置和数据）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "Kubernetes 集群备份的重要性是什么？",
        "type": "多选",
        "options": [
            "防止 etcd 数据丢失导致集群状态不可恢复",
            "恢复误删的资源对象",
            "灾难恢复如集群损坏或攻击",
            "备份只需要备份代码不需要备份配置"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Kubernetes 集群备份重要性：1）备份 etcd（集群的所有状态配置包括 Pod、Service、Deployment 等对象）；2）防止误删资源对象（可恢复）；3）灾难恢复（集群损坏、恶意攻击、硬件故障）；4）合规要求（审计保留配置变更历史）；5）测试和演示（从备份恢复测试环境）。备份不只是代码，还包括资源配置和状态。工具：etcdctl snapshot、Velero、Restic。",
        "difficulty": "基础"
    },
    {
        "module": "集群管理",
        "question": "Velero 备份工具的功能有哪些？",
        "type": "多选",
        "options": [
            "备份和恢复 Kubernetes 资源对象",
            "备份 PV 持久化数据",
            "跨集群迁移资源",
            "备份容器镜像仓库"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Velero（由 Heptio 开发，现为 VMware 开源）功能：1）备份和恢复 Kubernetes 资源（YAML 对象）；2）备份持久卷数据（通过 Restic 集成或 CSI Volume Snapshots）；3）跨集群迁移资源（从开发环境到生产环境）；4）定时备份和保留策略；5）备份到 S3、GCS、Azure Blob 等对象存储。Velero 不备份容器镜像（镜像由镜像仓库管理）。安装：velero install --provider aws --bucket <bucket> --plugins velero/velero-plugin-for-aws",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "集群灾难恢复的步骤是什么？",
        "type": "多选",
        "options": [
            "评估灾难影响和恢复时间目标（RTO/RPO）",
            "从备份恢复 etcd 和资源对象",
            "恢复持久化数据（PV）",
            "验证恢复后的集群功能"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "灾难恢复步骤：1）评估影响（RTO 恢复时间目标、RPO 数据丢失可接受范围）；2）恢复 etcd（etcdctl snapshot restore）；3）恢复 Kubernetes 资源（kubectl apply 备份yaml、Velero restore）；4）恢复 PersistVolume 数据（Restic、CSI 快照、对象存储）；5）验证集群健康（kubectl get nodes、kubectl get pods -A）；6）回滚服务流量（逐步切换）。必要时重新安装集群（如果集群完全损坏）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何监控集群的证书过期情况？",
        "type": "多选",
        "options": [
            "使用 kubeadm certs check-expiration 检查",
            "使用 Prometheus 和 cert-manager 报警",
            "设置定时任务定期检查",
            "不需要监控，证书自动续期"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "监控集群证书过期：1）kubeadm certs check-expiration（显示证书过期时间）；2）Prometheus + cert-manager（cert-manager 监控指标，Prometheus 报警）；3）定时任务（CronJob 使用 openssl x509 检查证书过期时间）；4）日志监控（kubelet 日志显示证书错误）。证书不会自动续期（kubeadm alpha certs renew all 需手动运行）。cert-manager 可以自动颁发和续期证书（使用 Let's Encrypt）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "集群自动扩缩容（Cluster Autoscaler）的工作原理是什么？",
        "type": "多选",
        "options": [
            "监控是否有 Pod 因为资源不足无法调度（Pending）",
            "当有节点空闲时缩容节点",
            "与云厂商 API 交互动态创建/删除节点",
            "直接在现有节点上创建新的容器"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "Cluster Autoscaler 工作原理：1）监控 Pending Pod（因资源不足无法调度的 Pod）；2）当有足够 Pending Pod 时，计算需要增加的节点数量；3）调用云厂商 API（如 AWS Auto Scaling Group、GKE MIG）创建新节点；4）当节点空闲超过配置时间（默认 10 分钟），驱逐节点上的 Pod 后删除节点；5）不直接在现有节点创建容器（由 kube-proxy 调度）。需要配置 Node Groups 和适当的最小/最大节点数。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何配置 Pod 优先级（PriorityClass）确保关键 Pod 优先运行？",
        "type": "多选",
        "options": [
            "创建 PriorityClass 并设置 priority 值",
            "给关键 Pod 添加 priorityClassName 指向高优先级类",
            "使用 PreemptionPolicy 控制抢占策略",
            "低优先级 Pod 无需配置"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "配置 Pod 优先级：1）创建 PriorityClass（kubectl apply -f priorityclass.yaml）设置 priority 值（值越大优先级越高）；2）在 Pod spec 添加 priorityClassName: system-cluster-critical（内置高优先级）；3）PreemptionPolicy：PreemptLowerPriority（默认，允许抢占），Never（不允许抢占）；4）低优先级 Pod 也建议配置防止意外抢占。Priority 和 Preemption 确保关键 Pod（如 kube-system）优先运行。示例：PriorityClass value -1000000000（非抢占式系统关键类）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何优化 Kubernetes 集群的资源利用率？",
        "type": "多选",
        "options": [
            "为容器设置合理的 requests 和 limits",
            "使用自动扩缩容（HPA、VPA、Cluster Autoscaler）",
            "使用共享的 GPU、FPGA 等加速设备",
            "限制节点上 Pod 的数量以降低资源利用率"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "优化资源利用率：1）设置合理的 requests 和 limits（requests 影响调度，limits 限制资源上限）；2）HPA 水平自动扩缩容（根据 CPU/内存/自定义指标调整 Pod 副本）；3）VPA 垂直自动扩缩容（自动调整 Pod 的资源请求）；4）Cluster Autoscaler 扩缩工作节点；5）使用 Binpacking 调度策略（优先填满节点）；6）共享加速设备（Device Plugins）。限制 Pod 数量会降低资源利用率（应优先优化 Pod 资源配置）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "Kubernetes 集群的多租户隔离机制有哪些？",
        "type": "多选",
        "options": [
            "命名空间（Namespace）隔离资源",
            "RBAC 授权限制访问权限",
            "NetworkPolicy 网络隔离",
            "ResourceQuota 和 LimitRange 限制资源使用"
        ],
        "answer": [
            0,
            1,
            2,
            3
        ],
        "explanation": "Kubernetes 多租户隔离：1）命名空间（Namespace）隔离资源范围（逻辑隔离）；2）RBAC 限制不同用户的权限（用户和服务账号授权）；3）NetworkPolicy 网络隔离（控制 Pod 间通信）；4）ResourceQuota 资源配额（限制命名空间资源使用总量）；5）LimitRange（限制单个 Pod/容器最小/最大请求和限制）。注意：命名空间只做逻辑隔离，默认无法防止跨命名空间网络通信（需要 NetworkPolicy）。更高级隔离使用 Virtual Kubelet、KubeVirt 等工具。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "节点故障时 Kubernetes 如何自动恢复？",
        "type": "多选",
        "options": [
            "节点控制器在 node-monitor-grace-period 后标记节点 NotReady",
            "ReplicaSet 控制器自动重建故障节点上的 Pod",
            "Pod Disruption Budget 确保最少可用副本",
            "自动重启节点操作系统"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "节点故障自动恢复：1）节点控制器（Node Controller）在 node-monitor-grace-period（默认 40 秒）后标记节点 NotReady，在 node-eviction-timeout（默认 5 分钟）后驱逐节点上的 Pod；2）ReplicaSet、Deployment 等控制器自动在其他节点创建新 Pod；3）Pod Disruption Budget 确保最少可用副本（防止过多 Pod 同时驱逐）；4）Cluster Autoscaler 自动补充缺失的节点。Kubernetes 不自动重启节点操作系统（需要云厂商或运维工具）。",
        "difficulty": "进阶"
    },
    {
        "module": "集群管理",
        "question": "如何使用 kubectl 快速查看集群的问题？",
        "type": "多选",
        "options": [
            "kubectl get nodes -o wide 查看节点状态",
            "kubectl get pods -A 查看所有命名空间的 Pod",
            "kubectl get events --sort-by='.lastTimestamp' 查看事件",
            "直接重启集群不考虑原因"
        ],
        "answer": [
            0,
            1,
            2
        ],
        "explanation": "快速集群问题排查：1）kubectl get nodes -o wide（查看节点状态 Ready、版本、IP）；2）kubectl get pods -A（查看所有 Pod 状态，关注 NotReady、CrashLoopBackOff、Pending）；3）kubectl get events --sort-by='.lastTimestamp'（按时间排序查看事件）；4）kubectl top nodes / kubectl top pods（资源使用率）；5）kubectl describe（查看详细信息和事件）。不建议直接重启集群（会导致服务中断且无法定位根本原因）。",
        "difficulty": "基础"
    }
];

// 提取唯一模块列表
const modules = ["概述","集群架构","容器","工作负载","网络","存储","配置","调度","集群管理"];
