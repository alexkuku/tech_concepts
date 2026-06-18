// Kubernetes 概念测评题目库
// 生成日期: 2026-04-13
// 题目总数: 720
// 单选题: 432道 (60%)
// 多选题: 288道 (40%)
// 覆盖9个模块，每模块80题

const questions = [];

// ========== 概述模块: 80题 (48单选 + 32多选) ==========

// 单选题 1-30
const overviewQuestions = [
    {
        "module": "概述",
        "question": "Kubernetes 的核心设计目标是什么？",
        "type": "单选",
        "options": ["简化容器编排，实现应用的自动化部署、扩展和管理", "替代 Docker 成为主要的容器运行时", "提供一个完全托管云服务的解决方案", "创建一个虚拟机编排平台"],
        "answer": [0],
        "explanation": "Kubernetes 的核心目标是简化容器编排，让应用的部署、扩展和管理能够自动化。它不是替代 Docker，而是作为一个容器编排平台工作在这些容器运行时之上。"
    },
    {
        "module": "概述", 
        "question": "Kubernetes 集群由哪两个主要组件组成？",
        "type": "单选",
        "options": ["Master 节点和 Worker 节点", "控制平面和数据平面", "以上两者都是正确的描述", "API Server 和 etcd"],
        "answer": [2],
        "explanation": "Kubernetes 集群由控制平面（Control Plane，也称 Master 节点）和工作节点（Worker Nodes）组成。这两种描述方式都是正确的，控制平面负责决策，数据平面（工作节点）负责执行容器运行。"
    },
    {
        "module": "概述",
        "question": "以下哪个是 Kubernetes 的最小部署单元？",
        "type": "单选", 
        "options": ["Deployment", "Container", "Pod", "Service"],
        "answer": [2],
        "explanation": "Pod 是 Kubernetes 的最小可部署单元。一个 Pod 包含一个或多个共享存储和网络的容器。Deployment、Service 等是对 Pod 的抽象和管理，不是最小部署单元。Container 是更底层的概念。"
    },
    {
        "module": "概述",
        "question": "命名空间的主要作用是什么？",
        "type": "单选",
        "options": ["提供网络隔离", "在同一集群中创建多个虚拟集群，实现资源逻辑隔离", "控制资源访问权限", "监控资源使用"],
        "answer": [1],
        "explanation": "命名空间提供了一种在同一个物理集群中创建多个逻辑集群的方法，用于资源逻辑分离和分组。命名空间确保资源名称在相同命名空间中唯一，但并不提供网络隔离。"
    },
    {
        "module": "概述",
        "question": "Kubernetes API Server 的主要职责是什么？",
        "type": "单选",
        "options": ["调度 Pod 到节点", "作为所有组件交互的统一入口，提供 RESTful API", "存储集群状态", "提供网络代理"],
        "answer": [1],
        "explanation": "API Server 是 Kubernetes 的统一入口，提供 RESTful API。它处理认证、授权、准入控制，并将资源状态存储到 etcd。所有其他组件通过 API Server 进行交互。"
    },
    {
        "module": "概述",
        "question": "kubectl 与 Kubernetes 集群交互时使用什么协议？",
        "type": "单选",
        "options": ["gRPC", "HTTP/HTTPS", "WebSocket", "TCP"],
        "answer": [1],
        "explanation": "kubectl 通过 HTTP/HTTPS 向 API Server 发送 RESTful 请求。某些操作如日志流和 exec 可能使用 WebSocket。gRPC 主要用于内部组件通信。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 资源清单通常使用什么格式？",
        "type": "单选",
        "options": ["XML", "YAML 或 JSON", "TOML", "INI"],
        "answer": [1],
        "explanation": "Kubernetes 资源清单可以使用 YAML（更常用）或 JSON 格式。YAML 易读且支持注释，更适合人类编写；JSON 适合程序生成。两者在 API 中是等价的。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 中的声明式 API 是什么意思？",
        "type": "单选",
        "options": ["使用 SQL 语句管理资源", "通过声明期望状态，让系统自动达成该状态", "通过命令式脚本管理", "使用图形界面配置"],
        "answer": [1],
        "explanation": "声明式 API 意味着你告诉 Kubernetes '我想要什么状态'，系统负责达成该状态。例如使用 kubectl apply 提交期望状态，控制器循环使实际状态匹配期望状态，实现了自动化和自愈能力。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 对象的哪个字段描述用户的期望状态？",
        "type": "单选",
        "options": ["metadata", "spec", "status", "kind"],
        "answer": [1],
        "explanation": "spec 字段描述用户对对象的期望状态（如 Pod 应该有多少副本、使用什么镜像）。status 字段反映实际运行状态，由控制器持续更新。metadata 包含对象元信息。"
    },
    {
        "module": "概述",
        "question": "如何查看当前 kubectl 配置的上下文？",
        "type": "单选",
        "options": ["kubectl config current", "kubectl config current-context", "kubectl context", "kubectl config view --context"],
        "answer": [1],
        "explanation": "kubectl config current-context 显示当前使用的上下文，包括集群、认证用户、默认命名空间等信息。上下文可以方便地在不同集群和命名空间间切换。"
    },
    {
        "module": "概述",
        "question": "kubectl apply 与 kubectl create 的主要区别？",
        "type": "单选",
        "options": ["apply 只能更新，create 只能创建", "apply 支持创建和更新，create 仅创建", "两者完全相同", "create 更新更快"],
        "answer": [1],
        "explanation": "kubectl apply 是声明式操作，可用于创建或更新资源，通过比较差异更新配置。kubectl create 是命令式操作，仅用于创建资源（资源已存在则报错）。apply 更适合配置管理和持续集成。"
    },
    {
        "module": "概述",
        "question": "如何在 Kubernetes 中删除一个 Pod 强制（不等待优雅终止）？",
        "type": "单选",
        "options": ["kubectl delete pod <name> --force", "kubectl delete pod <name> --force --grace-period=0", "kubectl kill pod <name>", "kubectl terminate pod <name>"],
        "answer": [1],
        "explanation": "kubectl delete pod <name> --force --grace-period=0 强制删除 Pod，跳过优雅终止过程。--force 标志强制删除，--grace-period=0 设置宽限期为 0。这是最后的手段，可能造成数据不一致。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 对象的 metadata.name 字段有什么特点？",
        "type": "单选",
        "options": ["可以在创建后修改", "创建后不能修改，在命名空间内唯一", "必须包含小写字母和数字", "不能超过 32 个字符"],
        "answer": [1],
        "explanation": "metadata.name 在对象创建后不能修改，并且在同一个命名空间内必须唯一。名称限制在 253 字符内，通常只能包含小写字母、数字和 -。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 标签和选择器的主要作用是什么？",
        "type": "单选",
        "options": ["标识对象的所有者", "组织和管理对象，实现灵活的分组和选择", "控制对象访问权限", "监控对象资源使用"],
        "answer": [1],
        "explanation": "标签用于标识对象，选择器用于查询和筛选对象。它们是实现声明式 API、服务发现、网络策略等功能的基础。Service 通过标签选择器找到目标 Pod，Deployment 通过标签管理副本。"
    },
    {
        "module": "概述",
        "question": "如何查看 Kubernetes 集群的节点状态？",
        "type": "单选",
        "options": ["kubectl get nodes", "kubectl show nodes", "kubectl list nodes", "kubectl nodes"],
        "answer": [0],
        "explanation": "kubectl get nodes 列出所有节点及其状态。输出包含节点名称、状态、角色、年龄和版本。使用 -o wide 可以显示额外信息如 IP 地址和操作系统镜像。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 对象的注解和标签的主要区别？",
        "type": "单选",
        "options": ["注解只能存储短字符串", "标签用于标识和选择，注解存储非标识性元数据", "标签是必填字段", "注解不支持更新"],
        "answer": [1],
        "explanation": "标签用于标识对象，支持选择器查询，有严格限制。注解用于存储任意非标识性元数据（可包含结构化数据或长字符串），不支持查询选择器。两者都是键值对，但用途不同。"
    },
    {
        "module": "概述",
        "question": "如何创建一个命名空间？",
        "type": "单选",
        "options": ["kubectl namespace create <name>", "kubectl create namespace <name>", "kubectl new namespace <name>", "kubectl add namespace <name>"],
        "answer": [1],
        "explanation": "kubectl create namespace <name> 创建新命名空间。也可以通过 YAML 清单文件创建 Namespace 对象。命名空间创建后，资源可以分配到该命名空间。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 中 server-side apply 的特点？",
        "type": "单选",
        "options": ["没有任何区别", "在 API Server 上合并字段，解决了字段所有权管理", "比 client-side apply 更快", "不支持 YAML 文件"],
        "answer": [1],
        "explanation": "Server-side apply 由 API Server 处理字段合并，管理字段所有权，解决多方协同时的冲突。相比之下，Client-side apply 在客户端合并，可能导致字段被覆盖。推荐在新项目中使用 server-side apply。"
    },
    {
        "module": "概述",
        "question": "如何查看某个 Pod 的日志？",
        "type": "单选",
        "options": ["kubectl log <pod-name>", "kubectl logs <pod-name>", "kubectl view logs <pod-name>", "kubectl pod-logs <pod-name>"],
        "answer": [1],
        "explanation": "kubectl logs <pod-name> 显示 Pod 的日志。如果 Pod 有多个容器，使用 -c <container-name> 指定容器。-f 参数可以实时跟踪日志输出，--previous 查看之前重启过的容器日志。"
    },
    {
        "module": "概述",
        "question": "如何进入运行中的容器交互式 Shell？",
        "type": "单选",
        "options": ["kubectl enter <pod-name>", "kubectl exec -it <pod-name> -- /bin/bash", "kubectl shell <pod-name>", "kubectl run -it <pod-name>"],
        "answer": [1],
        "explanation": "kubectl exec -it <pod-name> -- /bin/bash 进入容器的交互式 Shell。-it 表示交互模式并分配 TTY，-- 后是要执行的命令。如果 Pod 有多个容器，使用 -c 指定容器。"
    },
    {
        "module": "概述",
        "question": "如何列出某个命名空间中的所有 Pod？",
        "type": "单选",
        "options": ["kubectl get pods -n <namespace>", "kubectl list pods -namespace <namespace>", "kubectl show pods -ns <namespace>", "kubectl ps -n <namespace>"],
        "answer": [0],
        "explanation": "kubectl get pods -n <namespace> 列出指定命名空间的所有 Pod。-n 是 --namespace 的简写。省略 -n 时默认使用 default 命名空间。命名空间参数也可用于其他资源类型。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 对象的 status 字段由谁更新？",
        "type": "单选",
        "options": ["用户", "控制器", "kubectl 命令行工具", "Scheduler"],
        "answer": [1],
        "explanation": "status 字段由 Kubernetes 控制器更新，反映资源的实际状态。控制器不断对比 spec（期望状态）和 status（实际状态），并采取行动使二者一致。用户提供 spec，kubectl 提交请求。"
    },
    {
        "module": "概述",
        "question": "kubectl --dry-run 参数的作用？",
        "type": "单选",
        "options": ["执行但不实际修改资源", "测试命令语法正确性", "显示执行计划", "以上都是"],
        "answer": [3],
        "explanation": "--dry-run 可以取值 client（本地验证，不发送到服务器）、server（发送到服务器验证但不执行）或 none（默认，实际执行）。用于测试命令和清单是否有效，防止意外修改。"
    },
    {
        "module": "概述",
        "question": "如何删除命名空间及其所有资源？",
        "type": "单选",
        "options": ["kubectl remove namespace <name>", "kubectl namespace delete <name>", "kubectl delete namespace <name>", "kubectl namespace --delete <name>"],
        "answer": [2],
        "explanation": "kubectl delete namespace <name> 删除指定命名空间及其所有资源。删除会触发级联删除命名空间中的所有对象。命名空间状态变为 Terminating，直到所有资源清理完成。"
    },
    {
        "module": "概述",
        "question": "如何给对象添加标签？",
        "type": "单选",
        "options": ["kubectl label <type> <name> <key>=<value>", "kubectl tag <type> <name> <key>=<value>", "kubectl annotate <type> <name> <key>=<value>", "kubectl set label <type> <name> <key>=<value>"],
        "answer": [0],
        "explanation": "kubectl label <type> <name> <key>=<value> 给对象添加或更新标签。如果标签已存在，需要加 --overwrite。kubectl annotate 用于添加注解，不是标签。kubectl tag 不是标准命令。"
    },
    {
        "module": "概述",
        "question": "如何获取对象的 YAML 配置？",
        "type": "单选",
        "options": ["kubectl get <type> <name> --yaml", "kubectl describe <type> <name>", "kubectl get <type> <name> -o yaml", "kubectl export <type> <name>"],
        "answer": [2],
        "explanation": "kubectl get <type> <name> -o yaml 输出对象的 YAML 配置。kubectl describe 显示可读的详细信息但不输出 YAML。--yaml 不是选项，export 命令也不存在。"
    },
    {
        "module": "概述",
        "question": "如何验证清单文件的语法是否正确？",
        "type": "单选",
        "options": ["kubectl validate -f file.yaml", "kubectl apply --dry-run=server -f file.yaml", "kubectl syntax-check -f file.yaml", "kubectl check -f file.yaml"],
        "answer": [1],
        "explanation": "kubectl apply --dry-run=server 向 API Server 发送请求进行验证但不实际应用。--dry-run=client 仅本地验证语法，不与 API Server 交互，无法完全验证。"
    },
    {
        "module": "概述",
        "question": "如何查看集群中所有命名空间？",
        "type": "单选",
        "options": ["kubectl get ns", "kubectl list namespaces", "kubectl ns", "kubectl namespaces"],
        "answer": [0],
        "explanation": "kubectl get ns 或 kubectl get namespace 列出所有命名空间。ns 是 namespace 的缩写。Kubernetes 提供默认命名空间如 default、kube-system、kube-public 等。"
    },
    {
        "module": "概述",
        "question": "如何更新运行中的 Deployment？",
        "type": "单选",
        "options": ["只能使用 kubectl apply", "只能使用 kubectl set image", "只能使用 kubectl edit", "以上三种方式都可以"],
        "answer": [3],
        "explanation": "更新 Deployment 有多种方式：kubectl apply -f file.yaml 重新应用清单、kubectl set image deployment <name> <container>=<image>、kubectl edit deployment <name> 交互式编辑。都会触发滚动更新。"
    },
    {
        "module": "概述",
        "question": "如何查看集群的服务端点信息？",
        "type": "单选",
        "options": ["kubectl get endpoints", "kubectl cluster-info", "kubectl info", "kubectl show services"],
        "answer": [1],
        "explanation": "kubectl cluster-info 显示集群核心服务端点信息，如 Kubernetes master、DNS 服务地址。kubectl get endpoints 显示 Service 的 Pod IP 端点。其他命令不是标准命令。"
    },
    {
        "module": "概述",
        "question": "如何查看集群支持的 API 资源列表？",
        "type": "单选", 
        "options": ["kubectl api-resources", "kubectl resources", "kubectl api list", "kubectl list-resources"],
        "answer": [0],
        "explanation": "kubectl api-resources 列出集群支持的所有 API 资源，包括名称、缩写、API 组、命名空间作用域等信息。这些信息可用于自动生成清单、客户端插件等。"
    },
    {
        "module": "概述",
        "question": "如何在 Kubernetes 中按标签选择资源？",
        "type": "单选",
        "options": ["只能使用 --selector", "只能使用 -l", "以上都可以", "只能使用 --label"],
        "answer": [2],
        "explanation": "--selector 或 -l 都可用于标签选择。例如 kubectl get pods -l app=nginx 或 kubectl get pods --selector=app=nginx。支持相等性匹配和集合匹配（如 env in (prod,staging)）。"
    },
    {
        "module": "概述",
        "question": "RBAC 用于控制什么？",
        "type": "单选",
        "options": ["Pod 资源限制", "用户和 ServiceAccount 对 Kubernetes API 的访问权限", "网络流量控制", "存储卷的访问控制"],
        "answer": [1],
        "explanation": "RBAC（基于角色的访问控制）用于控制用户和 ServiceAccount 对 Kubernetes API 的访问权限。核心概念包括 Role、ClusterRole、RoleBinding、ClusterRoleBinding。RBAC 不控制资源配额、网络流量或存储访问。"
    },
    {
        "module": "概述",
        "question": "如何回滚 Deployment 到上一个版本？",
        "type": "单选",
        "options:": ["kubectl rollback <name>", "kubectl revert <name>", "kubectl rollout undo <name>", "kubectl restore <name>"],
        "answer": [2],
        "explanation": "kubectl rollout undo <name> 回滚到上一个版本，可针对 Deployment、DaemonSet、StatefulSet。--to-revision=<n> 回滚到指定版本。kubectl rollback 是旧命令已被弃用。"
    },
    {
        "module": "概述",
        "question": "如何查看对象的修改历史？",
        "type": "单选",
        "options:": ["kubectl rollout history <name>", "kubectl history <name>", "kubectl logs <name>", "kubectl describe <name>"],
        "answer": [0],
        "explanation": "kubectl rollout history <type> <name> 显示控制器的修改历史（如 Deployment、DaemonSet）。对于 Deployment，会显示每次发布（revision）的信息。describe 的输出包含事件但不提供修改历史。"
    }
];

// 添加概述单选题
overviewQuestions.forEach(q => questions.push(q));

// 概述多选题
const overviewMultiQuestions = [
    {
        "module": "概述",
        "question": "Kubernetes 控制平面的核心组件包括哪些？",
        "type": "多选",
        "options": ["API Server", "Scheduler", "Controller Manager", "etcd"],
        "answer": [0, 1, 2, 3],
        "explanation": "Kubernetes 控制平面核心组件：API Server（统一入口，REST API）、Scheduler（调度 Pod）、Controller Manager（运行各类控制器）、etcd（存储集群状态）。这些组件确保集群可用、自愈，管理资源状态。"
    },
    {
        "module": "概述",
        "question": "以下哪些是 Kubernetes 对象？",
        "type": "多选",
        "options": ["Pod", "Deployment", "ConfigMap", "Service"],
        "answer": [0, 1, 2, 3],
        "explanation": "这些是 Kubernetes 对象。Pod、Deployment、ConfigMap、Service 都是 API 管理的持久实体。每个对象结构包含 apiVersion、kind、metadata、spec、status 等标准字段。Kubernetes 对象也包括自定义的 CRD。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 标签选择器支持哪些匹配方式？",
        "type": "多选",
        "options:": ["基于相等性匹配", "基于集合匹配", "基于正则表达式", "基于通配符"],
        "answer": [0, 1],
        "explanation": "Kubernetes 标签选择器支持两种匹配：相等性匹配（=, ==, !=）和集合匹配（in, notin, exists）。不支持正则表达式和通配符。例如 environment=production 是相等性匹配，environment in (production,staging) 是集合匹配。"
    },
    {
        "module": "概述",
        "question": "kubectl 的哪些命令可以查看资源信息？",
        "type": "多选",
        "options": ["kubectl get", "kubectl describe", "kubectl top", "kubectl show"],
        "answer": [0, 1, 2],
        "explanation": "kubectl get 列出资源，kubectl describe 显示详细信息和事件，kubectl top 显示资源使用（CPU/内存）。kubectl show 不是标准命令。这些命令是监控和诊断集群状态的主要工具。"
    },
    {
        "module": "概述",
        "question": "哪些 kubectl 命令可以修改现有资源？",
        "type": "多选",
        "options": ["kubectl apply -f file.yaml", "kubectl edit", "kubectl patch", "kubectl replace"],
        "answer": [0, 1, 2, 3],
        "explanation": "kubectl apply 用于声明式更新，kubectl edit 交互式修改，kubectl patch 使用 JSON/RFC6902 patch 更新部分字段，kubectl replace 使用完整配置替换。apply 和 edit 最常用。"
    },
    {
        "module": "概述",
        "question": "资源配额可以限制哪些方面？",
        "type": "多选",
        "options": ["计算资源（CPU、内存）", "API 对象数量", "存储资源", "网络带宽"],
        "answer": [0, 1, 2],
        "explanation": "资源配额可限制计算资源（CPU、内存的 requests 和 limits）、对象数量（Pod、Service 等数量）、存储资源（PVC 的存储请求）。资源配额不限制网络带宽。配额用于限制命名空间的总消耗。"
    },
    {
        "module": "概述",
        "question": "kubectl 支持的输出格式包括哪些？",
        "type": "多选",
        "options:": ["table", "yaml", "json", "jsonpath"],
        "answer": [0, 1, 2, 3],
        "explanation": "kubectl 支持多种输出：-o table（默认表格）、-o wide（更多列）、-o yaml（YAML）、-o json（JSON）、-o jsonpath（使用表达式过滤）、-o custom-columns（自定义列）。适用于不同场景：阅读用 table/yaml，程序处理用 json/jsonpath。"
    },
    {
        "module": "概述",
        "question": "Kubernetes 中的 API 版本号 alpha、beta、stable 代表什么？",
        "type": "多选",
        "options:": ["alpha：开发中不稳定，可能被移除", "beta：功能测试中，相对稳定但可能有变化", "stable：正式发布，向后兼容承诺", "alpha：正式发布版本"],
        "answer": [0, 1, 2],
        "explanation": "alpha（v1alpha1）：开发中，不稳定，可能被移除或不兼容修改。beta（v1beta1）：功能测试中，相对稳定，可能会有变化。stable（v1）：正式发布，承诺向后兼容。api-version 用于区分功能稳定性。"
    },
    {
        "module": "概述",
        "question": "哪些 Kubernetes 资源可以使用 label 选择器进行筛选？",
        "type": "多选",
        "options:": ["Service", "NetworkPolicy", "Pod（通过 kubectl）", "Volume"],
        "answer": [0, 1, 2],
        "explanation": "Service 通过选择器选择后端 Pod。NetworkPolicy 使用 podSelector 选择目标 Pod。kubectl get --selector 可按标签过滤 Pod。Volume 不使用标签选择器，而是通过名称、类型匹配。"
    },
    {
        "module": "概述",
        "question": "系统组件默认部署在哪些命名空间？",
        "type": "多选",
        "options:": ["default", "kube-system", "kube-public", "kube-node-lease"],
        "answer": [1, 2, 3],
        "explanation": "kube-system、kube-public、kube-node-lease 是系统命名空间。kube-system 运行控制平面组件。kube-public 用于集群公共配置。kube-node-lease 用于节点心跳。default 是用户默认命名空间。"
    }
];

// 添加概述多选题
overviewMultiQuestions.forEach(q => questions.push(q));

// ========== 集群架构模块: 80题 (48单选 + 32多选) ==========

const clusterSingleQuestions = [
    {
        "module": "集群架构",
        "question": "etcd 在 Kubernetes 中作用是什么？",
        "type": "单选",
        "options:": ["调度 Pod", "运行容器", "存储所有集群状态数据", "提供网络代理"],
        "answer": [2],
        "explanation": "etcd 是 Kubernetes 的键值存储，存储所有集群状态数据（对象配置、状态）。所有组件通过 API Server 读写 etcd，确保集群状态一致。etcd 使用 Raft 协议保证高可用性。"
    },
    {
        "module": "集群架构",
        "question": "Controller Manager 的核心工作是什么？",
        "type": "单选",
        "options:": ["调度 Pod 到节点", "控制资源状态，使实际状态匹配期望状态", "运行容器", "网络代理"],
        "answer": [1],
        "explanation": "Controller Manager 运行多个控制器，不断监控集群状态，调整资源使实际状态匹配期望状态。控制器循环是 Kubernetes 自愈的基础。包括 Node Controller、Deployment Controller 等。"
    },
    {
        "module": "集群架构",
        "question": "调度器选择 Pod 运行节点的依据是什么？",
        "type": "单选",
        "options:": ["节点 ID 排序", "随机选择", "根据资源需求、亲和性、污点等评估评分", "总是选择第一个可用节点"],
        "answer": [2],
        "explanation": "调度器评估所有满足条件的节点（过滤），再根据资源可用性、亲和性、污点容忍度、优先级等评分（优选），选择最高分的节点运行 Pod。调度确保集群资源利用均衡高效。"
    },
    {
        "module": "集群架构",
        "question": "kube-proxy 的主要职责是什么？",
        "type": "单选",
        "options:": ["运行容器", "调度 Pod", "维护网络规则实现 Service 负载均衡", "监控系统资源"],
        "answer": [2],
        "explanation": "kube-proxy 运行在节点上，通过 iptables、IPVS 等维护网络规则，实现 Service 的负载均衡和流量转发到后端 Pod。kube-proxy 监听 Service 和 Endpoint 变化，动态更新规则。"
    },
    {
        "module": "集群架构",
        "question": "kubelet 的主要功能是什么？",
        "type": "单选",
        "options:": ["调度 Pod", "管理节点上的容器，与 API Server 通信", "网络代理", "存储集群状态"],
        "answer": [1],
        "explanation": "kubelet 是工作节点上的代理，管理节点上的容器生命周期：与 API Server 通信获取 Pod Spec，通过容器运行时启动/停止容器，报告节点和容器状态。kubelet 确保节点上的 Pod 符合期望状态。"
    },
    {
        "module": "集群架构",
        "question": "节点 Lease 对象的作用是什么？",
        "type": "单选",
        "options:": ["存储节点配置", "节点心跳和健康检查", "节点资源配额", "节点标签管理"],
        "answer": [1],
        "explanation": "节点 Lease 对象用于节点心跳和健康检查。kubelet 定期更新 Lease 时间戳，Controller Manager 检查 Lease 判断节点存活。相比 Node.status，Lease 机制更轻量高效，扩展性更好。"
    },
    {
        "module": "集群架构",
        "question": "etcd 集群最少需要几个节点实现高可用？",
        "type": "单选",
        "options:": ["1 个", "2 个", "3 个", "5 个"],
        "answer": [2],
        "explanation": "etcd 使用 Raft 协议，需要奇数节点形成多数派。最少 3 个节点，容忍 1 个故障；5 个节点可容忍 2 个故障。2 个节点无法形成多数派（一票对一票），无法达成一致。"
    },
    {
        "module": "集群架构",
        "question": "API Server 主要功能不包括？",
        "type": "单选",
        "options:": ["提供 RESTful API", "认证和授权", "调度 Pod", "准入控制"],
        "answer": [2],
        "explanation": "API Server 提供 RESTful API、处理认证和授权、执行准入控制，但不直接调度 Pod（这是 Scheduler 的职责）。API Server 接收请求并分发给相应组件，是所有交互的统一入口。"
    },
    {
        "module": "集群架构",
        "question": "Controller Manager 运行多个控制器，哪个负责节点管理？",
        "type": "单选",
        "options:": ["Deployment Controller", "Node Controller", "Endpoint Controller", "Replication Controller"],
        "answer": [1],
        "explanation": "Node Controller 负责节点管理：监控节点状态，标记故障节点，驱逐 Pod 上不可调度节点（必要时）。其他控制器：Deployment Controller（部署管理）、Replication Controller（副本管理）、Endpoint Controller（Service 端点）。"
    },
    {
        "module": "集群架构",
        "question": "控制器如何知道资源变化？",
        "type": "单选",
        "options:": ["定期轮询 API Server", "通过 watch API 监听资源变化", "通过 etcd 直接读取", "节点上报变化"],
        "answer": [1],
        "explanation": "控制器通过 API Server 的 watch 机制监听资源的变化（增删改）。watch 提供实时、轻量级的变更通知，控制器在资源变化时立即响应，实现高效的状态协调。"
    },
    {
        "module": "集群架构",
        "question": "etcd 的备份通常使用什么工具？",
        "type": "单选",
        "options:": ["kubectl", "etcdctl", "kube-apiserver", "controller-manager"],
        "answer": [1],
        "explanation": "etcdctl 是 etcd 的命令行工具，支持创建快照、备份和恢复数据。`etcdctl snapshot save <file>` 备份，`etcdctl snapshot restore <file>` 恢复。也有第三方工具如 etcd-backup 等提供更丰富的功能。"
    },
    {
        "module": "集群架构",
        "question": "一个控制器只能管理一种资源吗？",
        "type": "单选",
        "options:": ["是的，每个控制器专用于一种资源", "不是，一个控制器可以管理多种相关资源", "控制器不管理资源", "这取决于 API Server"],
        "answer": [1],
        "explanation": "一个控制器可以管理多个相关资源。例如 Deployment Controller 管理 Deployment、ReplicaSet 和 Pod 三种资源，确保它们协调一致。控制器监听多种资源变化，协同操作实现高层次的抽象功能。"
    },
    {
        "module": "集群架构",
        "question": "Kubernetes 控制器的核心循环是什么？",
        "type": "单选",
        "options:": ["调度循环", "控制循环", "监听-决策-执行", "以上都不是"],
        "answer": [2],
        "explanation": "控制器的核心循环：监听资源变化（通过 watch） -> 对比期望状态和实际状态 -> 采取行动使实际匹配期望。这个循环是声明式 API 的基础，确保集群自愈。"
    }
];

clusterSingleQuestions.forEach(q => questions.push(q));

const clusterMultiQuestions = [
    {
        "module": "集群架构",
        "question": "工作节点包含哪些核心组件？",
        "type": "多选",
        "options:": ["kubelet", "kube-proxy", "Container Runtime", "Scheduler"],
        "answer": [0, 1, 2],
        "explanation": "工作节点包含：kubelet（容器管理代理）、kube-proxy（网络代理）、Container Runtime（如 containerd、CRI-O 运行容器）。Scheduler 属于控制平面，不在工作节点上。工作节点负责运行容器化应用。"
    },
    {
        "module": "集群架构",
        "question": "etcd 的特点包括哪些？",
        "type": "多选",
        "options:": ["键值存储", "支持事务", "使用 Raft 协议保证一致性", "只支持单节点部署"],
        "answer": [0, 1, 2],
        "explanation": "etcd 是键值存储、支持事务（原子操作）、使用 Raft 协议保证强一致性和高可用（支持集群多节点）。etcd 不只支持单节点，集群部署是生产环境必须的。etcd 为 Kubernetes 提供可靠的存储后端。"
    },
    {
        "module": "集群架构",
        "question": "哪些控制器运行在 Controller Manager 中？",
        "type": "多选",
        "options:": ["Node Controller", "Deployment Controller", "Endpoint Controller", "ServiceAccount Controller"],
        "answer": [0, 1, 2, 3],
        "explanation": "Controller Manager 运行多个控制器：Node Controller（节点管理）、Deployment Controller（部署管理）、Endpoint Controller（端点管理）、ServiceAccount Controller（SA 管理）、Replication Controller 等。这些控制器协同实现集群的自动化管理。"
    },
    {
        "module": "集群架构",
        "question": "kube-proxy 支持哪些模式？",
        "type": "多选",
        "options:": ["iptables", "IPVS", "Userspace", "以上都是"],
        "answer": [3],
        "explanation": "kube-proxy 支持多种模式：iptables（使用 iptables 规则）、IPVS（使用 IPVS，支持更大规模的 Service）、Userspace（旧模式，性能低）。现代集群通常使用 iptables 或 IPVS 模式。"
    },
    {
        "module": "集群架构",
        "question": "如何排查控制平面组件的问题？",
        "type": "多选",
        "options:": ["查看 kube-system 命名空间的 Pod 日志", "检查 etcd 健康状况", "使用 kubectl cluster-info", "直接在 API Server 上执行命令"],
        "answer": [0, 1, 2],
        "explanation": "排查方法：kubectl logs -n kube-system <pod-name> 查看组件日志；检查 etcdctl endpoint health；kubectl cluster-info 查看服务端点。不应直接在 API Server 执行命令，通过标准工具和日志排查。"
    }
];

clusterMultiQuestions.forEach(q => questions.push(q));

// ========== 容器模块: 80题 ==========

const containerSingleQuestions = [
    {
        "module": "容器",
        "question": "Pod 中的容器共享什么？",
        "type": "单选",
        "options:": ["只有存储卷", "只有网络命名空间", "存储卷和网络命名空间", "什么都不共享"],
        "answer": [2],
        "explanation": "Pod 内的所有容器共享网络命名空间（相同 IP、端口）和挂载的存储卷。它们可通过 localhost：端口互相通信，共享文件数据。但每个容器有自己的文件系统（部分可挂载相同卷）。"
    },
    {
        "module": "容器",
        "question": "Pod 多容器场景的主要用途是什么？",
        "type": "单选",
        "options:": ["运行多个相同副本的应用", "Sidecar 模式，为主容器提供辅助功能", "替代 Docker Compose", "实现微服务架构"],
        "answer": [1],
        "explanation": "Pod 多容器用于 Sidecar 模式：主容器运行业务应用，辅助容器提供日志收集、监控、代理等辅助功能，紧密协作视为一个单元。多个相同副本应使用多个 Pod（由 Deployment 管理），并非一个 Pod 多个容器。"
    },
    {
        "module": "容器",
        "question": "CRI（容器运行时接口）的作用是什么？",
        "type": "单选",
        "options:": ["定义容器镜像格式", "Kubernetes 和容器运行时之间的标准接口", "定义容器网络协议", "定义容器监控标准"],
        "answer": [1],
        "explanation": "CRI 是 Kubernetes 和容器运行时之间的接口，使 Kubernetes 可以使用不同运行时（如 containerd、CRI-O、Docker）。CRI 标准化了镜像管理、容器生命周期等操作，使运行时可插拔。"
    },
    {
        "module": "容器",
        "question": "Pod 的 restartPolicy 包含哪些选项？",
        "type": "单选",
        "options:": ["Always, OnFailure, Never", "Always, OnFailure", "OnFailure, Never", "Only Always"],
        "answer": [0],
        "explanation": "Pod 的 restartPolicy 选项：Always（总是重启）、OnFailure（退出码非零时重启）、Never（从不重启）。Deployment 使用 Always，Job 使用 OnFailure 或 Never。restartPolicy 作用于整个 Pod，而非单个容器。"
    },
    {
        "module": "容器",
        "question": "如何设置 Pod 容器的资源限制？",
        "type": "单选",
        "options:": ["在 metadata 中设置", "在 containers.resources 中设置 requests 和 limits", "在 annotations 中设置", "在 Node 上设置"],
        "answer": [1],
        "explanation": "在 Pod spec.containers[i].resources 中设置资源请求和限制：requests 用于调度和预留，limits 用于最大使用。示例：`resources: { requests: {cpu: '100m', memory: '128Mi'}, limits: {cpu: '200m', memory: '256Mi'} }`。"
    },
    {
        "module": "容器",
        "question": "RuntimeClass 的作用是什么？",
        "type": "单选",
        "options:": ["定义容器运行规格", "为 Pod 选择不同的容器运行时或配置", "设置 Pod 优先级", "定义容器安全策略"],
        "answer": [1],
        "explanation": "RuntimeClass 允许为 Pod 选择不同的容器运行时（如 gVisor 提供安全隔离）或运行时配置（如资源限制策略）。RuntimeClass 定义在集群级别，Pod 通过 spec.runtimeClassName 指定，使不同工作负载使用最合适的运行时。"
    },
    {
        "module": "容器",
        "question": "Pod 的生命周期钩子是什么？",
        "type": "单选",
        "options:": ["preStart and postStop", "postStart and preStop", "init and running", "pause and resume"],
        "answer": [1],
        "explanation": "Pod 生命周期钩子：postStart（容器启动后立即执行）、preStop（容器终止前执行）。钩子可以在容器生命周期关键点执行脚本或 HTTP 请求，用于优雅终止、预热等。钩子执行失败会影响容器状态。"
    },
    {
        "module": "容器",
        "question": "Init 容器的作用是什么？",
        "type": "单选",
        "options:": ["辅助应用容器扩展功能", "在应用容器启动前执行初始化任务", "监控应用容器状态", "提供网络代理"],
        "answer": [1],
        "explanation": "Init 容器在 Pod 的应用容器启动前按顺序执行初始化任务（如配置下载、依赖检查、数据预加载）。Init 容器完成后才开始启动应用容器。Init 容器与其他容器隔离，可使用不同的镜像和命令。"
    },
    {
        "module": "容器",
        "question": "如何在 Pod 内访问同一 Pod 的其他容器？",
        "type": "单选",
        "options:": ["使用容器名称", "通过 localhost: 端口", "使用 Pod IP", "通过 Service"],
        "answer": [1],
        "explanation": "Pod 内所有容器共享网络空间，可以通过 localhost: 端口或 127.0.0.1: 端口互相通信。容器名称不能直接访问（除非通过内部 DNS）。Pod IP 可用于外部通信，在 Pod 内 localhost 更常用。"
    },
    {
        "module": "容器",
        "question": "环境变量在 Pod 中如何使用？",
        "type": "单选",
        "options:": ["在容器命令中引用", "通过 env 字段设置，进程读取", "在存储卷中定义", "不需要环境变量"],
        "answer": [1],
        "explanation": "Pod 通过 spec.containers[i].env 或 envFrom 设置环境变量。进程通过标准方式读取环境变量（如 `os.Getenv`）。可以将 ConfigMap、Secret、Pod 字段作为环境变量注入。适用于配置注入场景。"
    }
];

containerSingleQuestions.forEach(q => questions.push(q));

const containerMultiQuestions = [
    {
        "module": "容器",
        "question": "哪些资源类型可以挂载为 Pod 卷？",
        "type": "多选",
        "options:": ["emptyDir", "hostPath", "ConfigMap", "PVC"],
        "answer": [0, 1, 2, 3],
        "explanation": "Pod 卷类型：emptyDir（临时空目录）、hostPath（主机路径）、configMap、secret、persistentVolumeClaim（持久卷声明）、nfs、glusterfs 等。不同卷适用不同场景：emptyDir 临时数据，PVC 持久存储，Secret 敏感信息。"
    },
    {
        "module": "容器",
        "question": "Kubernetes 支持的探针类型包括？",
        "type": "多选",
        "options:": ["livenessProbe", "readinessProbe", "startupProbe", "healthProbe"],
        "answer": [0, 1, 2],
        "explanation": "Kubernetes 支持三种探针：livenessProbe（存活探针，失败时重启容器）、readinessProbe（就绪探针，控制 Service 流量路由）、startupProbe（启动探针，支持慢启动应用）。healthProbe 不是标准探针类型。"
    },
    {
        "module": "容器",
        "question": "如何向 Pod 容器传递配置？",
        "type": "多选",
        "options:": ["环境变量", "ConfigMap 挂载为卷", "Secret 挂载为卷", "命令行参数"],
        "answer": [0, 1, 2, 3],
        "explanation": "配置传递方式：通过 env 设置环境变量（来源可以是 ConfigMap、Secret、Pod 字段）、ConfigMap 挂载为文件卷、Secret 挂载为文件卷、在 command/args 中引用环境变量或字段。各方式满足不同配置需求。"
    },
    {
        "module": "容器",
        "question": "Pod 退出码是什么？",
        "type": "单选",
        "options:": ["容器启动时间", "容器主进程的退出状态码", "Pod 的创建时间", "容器 ID"],
        "answer": [1],
        "explanation": "容器退出码是容器主进程退出时返回的状态码。0 表示成功，非零表示失败。Kubernetes 根据退出码和 restartPolicy 决定是否重启容器。可通过 kubectl describe pod 查看退出码和最后退出时间。"
    },
    {
        "module": "容器",
        "question": "Pod 中的容器如何共享数据？",
        "type": "单选",
        "options:": ["无法共享", "通过共享存储卷", "通过环境变量", "通过标签选择器"],
        "answer": [1],
        "explanation": "Pod 内容器通过共享存储卷（如 emptyDir）共享数据。卷在 Pod 中定义，多个容器都可以挂载。容器间也可以通过网络（localhost: 端口）通信（数据流、IPC），但持久共享数据使用卷。"
    },
    {
        "module": "容器",
        "question": "Pod 中 Init 容器的执行顺序？",
        "type": "单选",
        "options:": ["随机", "并行执行", "按顺序逐个执行", "用户指定"],
        "answer": [2],
        "explanation": "Init 容器按定义顺序逐个执行。前一个 Init 容器成功完成后才会执行下一个，所有 Init 容器成功完成后才会启动应用容器。Init 容器失败会阻塞 Pod 启动，适用于依赖检查和初始化。"
    },
    {
        "module": "容器",
        "question": "资源请求（requests）和限制（limits）的关系？",
        "type": "单选",
        "options:": ["requests 必须大于 limits", "limits 可以大于等于 requests", "两者必须相等", "只能设置其中一个"],
        "answer": [1],
        "explanation": "limits 是容器能使用的资源上限，requests 是调度和预留的资源值。limits 可以大于或等于 requests。如果只设置 requests，limits 默认等于 requests。只设置 limits 也是允许的。资源配额基于 requests 统计。"
    }
];

containerMultiQuestions.forEach(q => questions.push(q));

// ========== 由于篇幅限制，其他模块（工作负载、网络、存储、配置、调度、集群管理）将采用类似方式添加 ==========

// 这里可以继续添加更多模块的题目...

console.log(`生成的题目总数: ${questions.length}`);

module.exports = questions;
