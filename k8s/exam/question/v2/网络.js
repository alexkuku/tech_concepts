// Kubernetes 概念测评 - 网络 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 50
// 覆盖: 网络

const questions = [
    {
        module: "网络",
        question: "Kubernetes 网络模型的基本要求是什么？",
        type: "多选",
        options: [
            "所有 Pod 可以不经过 NAT 直接相互通信",
            "所有节点可以与所有 Pod 通信",
            "Pod 看到的自己的 IP 与其他 Pod 看到的相同",
            "Pod IP 可以在整个集群中路由"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 网络模型要求：所有 Pod 可以不经过 NAT 直接相互通信、所有节点可以与所有 Pod 通信、Pod 看到的自己的 IP 与其他 Pod 看到的相同（不经过 NAT）。Pod IP 不一定可以在整个集群中路由（取决于 CNI 实现）。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "Pod 中的容器如何相互通信？",
        type: "单选",
        options: [
            "通过各自的 IP 地址",
            "通过 localhost 和端口",
            "通过 Service 名称",
            "通过节点 IP"
        ],
        answer: [1],
        explanation: "由于 Pod 中的容器共享网络命名空间（同一个 IP 地址和端口空间），它们可以通过 localhost 和端口相互通信。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "服务（Service）在 Kubernetes 中的作用是什么？",
        type: "多选",
        options: [
            "提供稳定的 IP 地址和 DNS 名称",
            "在一个或多个后端 Pod 之间实现负载均衡",
            "实现服务发现",
            "管理容器生命周期"
        ],
        answer: [0, 1, 2],
        explanation: "服务（Service）的作用：提供稳定的 IP 地址和 DNS 名称，在一个或多个后端 Pod 之间实现负载均衡，实现服务发现。Service 不负责管理容器生命周期。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "Kubernetes 支持哪些 Service 类型？",
        type: "多选",
        options: [
            "ClusterIP（集群内部访问）",
            "NodePort（通过节点端口暴露服务）",
            "LoadBalancer（通过云提供商负载均衡器暴露服务）",
            "ExternalName（映射到外部 DNS 名称）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Kubernetes 支持四种 Service 类型：ClusterIP（默认，仅在集群内部可访问）、NodePort（通过 <节点IP>:<端口> 暴露服务）、LoadBalancer（通过云提供商负载均衡器暴露服务）、ExternalName（DNS CNAME 映射到外部 DNS 名称）。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "ClusterIP Service 如何在集群内访问？",
        type: "单选",
        options: [
            "通过节点 IP 和端口",
            "通过虚拟 IP（VIP）在集群内访问",
            "通过外部 DNS 名称",
            "无法在集群内访问"
        ],
        answer: [1],
        explanation: "ClusterIP Service 通过虚拟 IP（VIP）在集群内访问，该 IP 仅在集群内有效。kube-proxy 通过 iptables 或 ipvs 规则将流量路由到后端 Pod。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "NodePort Service 有什么特点？",
        type: "多选",
        options: [
            "在每个节点上打开一个端口",
            "通过 <节点IP>:<端口> 从外部访问",
            "与 ClusterIP 相同，多暴露一个 NodePort",
            "端口号范围：30000-32767"
        ],
        answer: [0, 1, 2, 3],
        explanation: "NodePort Service 的特点：在每个节点上打开一个端口（默认范围：30000-32767），通过 <节点IP>:<端口> 从外部访问。NodePort Service 会自动创建一个 ClusterIP Service，多暴露一个 NodePort。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "LoadBalancer Service 有什么特点？",
        type: "多选",
        options: [
            "依赖于云提供商",
            "自动创建外部负载均衡器",
            "分配一个外部 IP",
            "支持任何云平台"
        ],
        answer: [0, 1, 2],
        explanation: "LoadBalancer Service 的特点：依赖云提供商（如 GCP、AWS、Azure），自动创建外部负载均衡器（如 GCP 的 Cloud Load Balancing、AWS 的 ELB），分配一个外部 IP。需要在云平台环境使用，裸金属环境需 MetalLB 等方案。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "Ingress 与 Service 的区别是什么？",
        type: "单选",
        options: [
            "没有区别",
            "Ingress 基于 HTTP/HTTPS 协议和规则（主机名、路径），Service 基于 IP 和端口",
            "Service 仅支持 HTTP/HTTPS，Ingress 支持所有协议",
            "Ingress 只能暴露到集群内"
        ],
        answer: [1],
        explanation: "Ingress 基于 HTTP/HTTPS 协议和规则（主机名、路径、TLS），是一个七层代理。Service 基于 IP 和端口，是四层负载均衡。Ingress 通常暴露到集群外，Service 有 ClusterIP（集群内）、NodePort 和 LoadBalancer 类型。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "Ingress 控制器是什么？",
        type: "单选",
        options: [
            "管理 Ingress 资源的控制器",
            "Ingress 对象本身",
            "Service 的负载均衡器",
            "网络策略控制器"
        ],
        answer: [0],
        explanation: "Ingress 控制器是管理 Ingress 资源的控制器，负责根据 Ingress 资源配置路由规则并实现 HTTP/HTTPS 代理。常见的 Ingress 控制器包括 NGINX Ingress Controller、Traefik、HAProxy Ingress 等。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "Ingress 资源的作用是什么？",
        type: "多选",
        options: [
            "定义 HTTP/HTTPS 路由规则",
            "根据主机名和路径将流量路由到不同的 Service",
            "配置 TLS 终止",
            "自动创建外部 IP"
        ],
        answer: [0, 1, 2],
        explanation: "Ingress 资源用于定义 HTTP/HTTPS 路由规则，根据主机名（如 api.example.com）和路径（如 /api）将流量路由到不同的 Service。Ingress 也支持配置 TLS 终止（指定 Secret 作为证书）。外部 IP 由 LoadBalancer Service 或 Ingress 控制器提供，非 Ingress 直接分配。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "什么是 EndpointSlice？",
        type: "单选",
        options: [
            "Service 的后端 Pod 列表",
            "一种网络策略对象",
            "Service 的负载均衡器",
            "Pod 的网络接口切片"
        ],
        answer: [0],
        explanation: "EndpointSlice 是 Service 的后端 Pod 列表，跟踪提供服务的 IP 地址和端口。EndpointSlice 分片存储（每个 EndpointSlice 包含部分 Pod），支持大规模 Service（支持超过 1000 个后端 Pod）。EndpointSlice 控制器动态更新 EndpointSlice。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "kube-proxy 的作用是什么？",
        type: "多选",
        options: [
            "在每个节点上运行网络代理",
            "维护 iptables 或 ipvs 规则",
            "实现 Service 的负载均衡",
            "管理 Pod 的生命周期"
        ],
        answer: [0, 1, 2],
        explanation: "kube-proxy 在每个节点上运行网络代理，监听 Service 和 EndpointSlice 的变化，更新 iptables 或 ipvs 规则，实现 Service 的负载均衡。不管理 Pod 的生命周期。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "kube-proxy 使用哪些代理模式？",
        type: "多选",
        options: [
            "userspace（用户空间）",
            "iptables（旧版）",
            "ipvs（新版，性能更好）",
            "kernelspace"
        ],
        answer: [0, 1, 2],
        explanation: "kube-proxy 支持三种代理模式：userspace（用户空间代理，已过时）、iptables（使用 iptables 规则）、ipvs（使用 IPVS，性能更好，支持更复杂的负载均衡算法）。没有 kernelspace 模式。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "Service 的 sessionAffinity 作用是什么？",
        type: "单选",
        options: [
            "Service 的亲和性调度策略",
            "将来自同一客户端的流量路由到同一个 Pod（会话亲和性）",
            "Service 的负载均衡算法",
            "Service 的地址选择策略"
        ],
        answer: [1],
        explanation: "Service 的 sessionAffinity（会话亲和性）用于将来自同一客户端的流量路由到同一个 Pod。默认是 None（无会话亲和性），可选 ClientIP（基于客户端 IP 的会话亲和性），可设置 sessionAffinityConfig.clientIP.timeoutSeconds。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "DNS Service 在 Kubernetes 中的作用是什么？",
        type: "单选",
        options: [
            "提供外部 DNS 服务",
            "为集群内的服务和 Pod 提供内部 DNS 解析",
            "管理网络策略",
            "实现负载均衡"
        ],
        answer: [1],
        explanation: "DNS Service（通常是 CoreDNS）为集群内的服务和 Pod 提供内部 DNS 解析。Service 通过 DNS 名称 <service-name>.<namespace>.svc.cluster.local 访问，Pod 通过 <pod-ip-address>.<namespace>.pod.cluster.local（默认不启用）访问。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "如何访问 Service？",
        type: "多选",
        options: [
            "通过 DNS 名称",
            "通过环境变量",
            "通过 Service 的 ClusterIP",
            "通过外部 IP（LoadBalancer Service 或 ExternalName）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Service 的访问方式：通过 DNS 名称（如 my-service.default.svc.cluster.local）、通过环境变量（Kubernetes 自动注入，如 MY_SERVICE_SERVICE_HOST 和 MY_SERVICE_SERVICE_PORT）、通过 Service 的 ClusterIP、通过外部 IP（LoadBalancer Service 分配的外部 IP 或 ExternalName）。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "什么是 NetworkPolicy（网络策略）？",
        type: "单选",
        options: [
            "网络配置策略",
            "控制 Pod 之间或 Pod 与外部之间流量的规则",
            "网络负载均衡策略",
            "网络安全认证策略"
        ],
        answer: [1],
        explanation: "NetworkPolicy 是控制 Pod 之间或 Pod 与外部之间流量的规则，用于实现 Pod 间的网络隔离。NetworkPolicy 默认不创建任何限制（除非有其他网络策略），需要在 CNI 插件支持（如 Calico、Cilium）下生效。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "NetworkPolicy 支持哪些流量方向？",
        type: "多选",
        options: [
            "ingress（入站流量）",
            "egress（出站流量）",
            "multicast（多播流量）",
            "broadcast（广播流量）"
        ],
        answer: [0, 1],
        explanation: "NetworkPolicy 支持两种流量方向：ingress（入站流量）和 egress（出站流量）。可以分别配置规则，实现双向网络隔离。不支持多播和广播流量。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "NetworkPolicy 的 podSelector 作用是什么？",
        type: "单选",
        options: [
            "选择节点的 Pod",
            "选择受 NetworkPolicy 规则限制的 Pod",
            "选择 Service",
            "选择 Ingress 控制器"
        ],
        answer: [1],
        explanation: "NetworkPolicy 的 podSelector 是标签选择器，用于选择受 NetworkPolicy 规则限制的 Pod。只有匹配此选择器的 Pod 才会应用 NetworkPolicy 定义的网络规则。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "CNI 是什么？",
        type: "单选",
        options: [
            "容器网络接口标准",
            "一个网络策略控制器",
            "一个 Service 类型",
            "一个 DNS 服务"
        ],
        answer: [0],
        explanation: "CNI（Container Network Interface）是一个容器网络接口标准，定义了容器运行时与网络插件之间的接口。Kubernetes 通过 CNI 与网络插件交互，实现 Pod 网络。常见的 CNI 插件包括 Flannel、Calico、Cilium、Weave Net 等。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "常见的 CNI 插件有哪些？",
        type: "多选",
        options: [
            "Flannel",
            "Calico",
            "Cilium",
            "Weave Net"
        ],
        answer: [0, 1, 2, 3],
        explanation: "常见的 CNI 插件包括：Flannel（简单 overlay 网络）、Calico（支持网络策略的 Layer 3 网络）、Cilium（基于 eBPF，支持高级网络策略）、Weave Net、Canal、Multus（多 CNI 插件组合）等。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "Flannel CNI 插件有什么特点？",
        type: "多选",
        options: [
            "简单易用",
            "使用 overlay 网络（VXLAN）",
            "不支持网络策略",
            "支持 IPsec 加密"
        ],
        answer: [0, 1, 2],
        explanation: "Flannel 的特点：简单易用，使用 overlay 网络（默认 VXLAN，也可选 Host-GW、VTEP 等），不支持网络策略（可结合 Calico 或使用其他插件实现）。不支持 IPsec 加密。适合简单的 Kubernetes 集群。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "Calico CNI 插件有什么特点？",
        type: "多选",
        options: [
            "提供 NetworkPolicy 支持",
            "支持Layer 3 网络（无 overlay）",
            "支持 BGP 路由",
            "只支持小规模集群"
        ],
        answer: [0, 1, 2],
        explanation: "Calico 的特点：提供 NetworkPolicy 支持、支持 Layer 3 网络（无 overlay，使用纯路由，性能好）、支持 BGP 路由（与数据中心网络集成）、支持大规模集群。适用于需要网络策略或高性能网络的场景。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "什么是多 CNI 插件（如 Multus）？",
        type: "单选",
        options: [
            "同时安装多个 CNI 插件",
            "支持 Pod 同时连接多个网络",
            "多个 CNI 插件互为备份",
            "不支持"
        ],
        answer: [1],
        explanation: "多 CNI 插件（如 Multus）支持 Pod 同时连接多个网络，例如，一个 Pod 可同时连接集群网络、存储网络和外部网络。Multus 充当 CNI 元插件，调用其他 CNI 插件并组合网络接口。",
        difficulty: "高级"
    },
    {
        module: "网络",
        question: "什么是 Headless Service？",
        type: "单选",
        options: [
            "没有后端 Service",
            "ClusterIP 设置为 None 的 Service",
            "没有负载均衡策略的 Service",
            "不配置 Ingress 的 Service"
        ],
        answer: [1],
        explanation: "Headless Service 是 ClusterIP 设置为 None 的 Service，不会为 Service 分配虚拟 IP。Headless Service 的 DNS 会直接返回所有后端 Pod 的 IP 列表，不需要代理或负载均衡。适用于 StatefulSet 实现 DNS 稳定标识、服务发现（客户端直接选择后端 Pod）等场景。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "如何访问外部服务？",
        type: "多选",
        options: [
            "使用 ExternalName Service",
            "使用 ExternalIP（手动设置 Service 的外部 IP）",
            "服务直接使用外部 IP（非 Kubernetes 网络）",
            "使用 LoadBalancer Service（云提供商）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "访问外部服务的方式：ExternalName Service（映射到外部 DNS 名称）、ExternalIP（设置 Service 的 externalIPs 字段）、服务直接使用外部 IP（非 Kubernetes 管理，如数据库服务直接使用 IP）和 LoadBalancer Service（云提供商）。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "Pod 如何访问外部（Kubernetes 集群外）服务？",
        type: "单选",
        options: [
            "通过节点 NAT",
            "通过 Pod NAT",
            "无法访问",
            "需要 Service"
        ],
        answer: [0],
        explanation: "Pod 访问外部服务时，流量通过节点 NAT 出去（使用节点的 IP 作为源 IP），外部服务响应时通过节点路由回 Pod。这是 Kubernetes 网络模型的默认行为。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "什么是 Service 的 externalIPs 字段？",
        type: "单选",
        options: [
            "自动分配的外部 IP",
            "手动配置 Service 的外部 IP",
            "云提供商分配的 IP",
            "NodePort 使用的端口"
        ],
        answer: [1],
        explanation: "Service 的 externalIPs 字段用于手动配置 Service 的外部 IP，可以通过这些 IP 访问 Service（类似于 LoadBalancer 但不依赖云提供商）。externalIPs 需要外部网络有路由到节点的配置。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "什么是 Service 的 internalTrafficPolicy？",
        type: "单选",
        options: [
        "Service 的内部网络安全策略",
        "控制流量路由到本地的 Pod",
        "Service 的网络流量限制",
        "Service 的内部 DNS 名称"
    ],
        answer: [1],
        explanation: "Service 的 internalTrafficPolicy（Kubernetes 1.22+）控制内部流量是否路由到本地的 Pod（Cluster：默认路由到任何可用 Pod，Local：仅在本地节点的后端 Pod 之间路由，可减少跨节点流量）。",
        difficulty: "高级"
    },
    {
        module: "网络",
        question: "什么是 DNS 记录的 TTL？",
        type: "单选",
        options: [
            "DNS 查询超时时间",
            "DNS 记录的有效期",
            "DNS 记录的更新频率",
            "DNS 服务的运行时间"
        ],
        answer: [1],
        explanation: "DNS 记录的 TTL（Time To Live）是 DNS 记录的有效期（以秒为单位）。CoreDNS 默认 TTL 为 5 秒。由于 Kubernetes Service 和 Pod 可能频繁变化（如 Pod 重新调度），TTL 较短以确保 DNS 解析的及时性。过长会导致 DNS 缓存旧记录。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "如何发现 Pod？",
        type: "多选",
        options: [
            "通过 DNS（需要 CoreDNS 配置）",
            "通过 API Server 查询",
            "直接使用 Pod IP（不稳定，非推荐）",
            "通过 Service 直接访问"
        ],
        answer: [0, 1, 3],
        explanation: "Pod 的发现方式：通过 DNS（CoreDNS 支持 Pod 解析，需要在 CoreDNS 配置中启用，格式为 <pod-ip-address>.<namespace>.pod.cluster.local）、通过 API Server 查询、通过 Service 直接访问（推荐）。直接使用 Pod IP 不稳定（Pod 重新调度后 IP 可能变化）。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "EndpointSlices 和 Endpoints 的区别是什么？",
        type: "多选",
        options: [
            "EndpointSlices 是新的实现，性能更好",
            "EndpointSlices 支持超过 1000 个后端 Pod",
            "Endpoints 只支持小规模 Service",
            "没有区别，只是名称不同"
        ],
        answer: [0, 1],
        explanation: "区别：EndpointSlices 是新的实现，性能更好（分片存储，每个 EndpointSlice 包含最多 100 个 Pod）、EndpointSlices 支持超过 1000 个后端 Pod（Endpoints 对象有大小限制）。Endpoints 是旧实现，仍在使用中。两个不同。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "什么是 Service 的 topologyAwareHints（拓扑感知）？",
        type: "单选",
        options: [
            "Service 的分布式拓扑",
            "根据拓扑（如区域、可用区）优化流量路由",
            "配置 Service 的跨区域",
            "配置 Service 的跨地域"
        ],
        answer: [1],
        explanation: "Service 的 topologyAwareHints（Kubernetes 1.21+）根据拓扑（如区域、可用区、节点）优化流量路由，将流量路由到本地的后端 Pod，减少跨节点、跨区域的延迟，提高性能。适用于跨区域大型集群。",
        difficulty: "高级"
    },
    {
        module: "网络",
        question: "什么是 IPv4/IPv6 双栈支持？",
        type: "多选",
        options: [
            "Pod 同时分配 IPv4 和 IPv6 地址",
            "Service 同时分配 IPv4 和 IPv6 ClusterIP",
            "集群同时使用 IPv4 和 IPv6 网络",
            "只支持 IPv4"
        ],
        answer: [0, 1, 2],
        explanation: "Kubernetes 的 IPv4/IPv6 双栈支持：Pod 同时分配 IPv4 和 IPv6 地址（Pod 可以通过任一网络访问，或仅使用一个）、Service 同时分配 IPv4 和 IPv6 ClusterIP、集群同时使用 IPv4 和 IPv6 网络（需要在 kube-controller-manager、kube-apiserver、kubelet 配置中启用双栈）。Kubernetes 同时支持 IPv4 和 IPv6，不是只支持 IPv4。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "如何启用 IPVS 模式为 kube-proxy 后端？",
        type: "单选",
        options: [
            "kubectl set kube-proxy --mode=ipvs",
            "在 kube-proxy 启动参数中设置 --proxy-mode=ipvs",
            "在 kubelet 配置中设置",
            "无法启用"
        ],
        answer: [1],
        explanation: "在 kube-proxy 启动参数中设置 --proxy-mode=ipvs 启用 IPVS 模式（默认是 iptables，可用 --proxy-mode 指定为 iptables）。IPVS 提供更好的性能和更复杂的负载均衡算法（如轮询、最少连接、源地址哈希等）。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "如何检查 Pod 的网络连接问题？",
        type: "多选",
        options: [
            "通过 kubectl exec 进入 Pod 执行网络检查（ping、curl）",
            "检查 Pod 的网络配置（IP, DNS）",
            "查看 NetworkPolicy 是否限制流量",
            "检查节点网络（iptables, ipvs）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "检查 Pod 网络连接问题的方式：kubectl exec 进入 Pod 执行网络命令、检查 Pod 的 IP 和 DNS 配置、查看 NetworkPolicy 是否限制 Pod 的流量、检查节点网络配置（iptables、ipvs、路由等）和 CNI 插件日志。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "如何禁用 Pod 间通信？",
        type: "单选",
        options: [
            "无法禁用，可以创建 NetworkPolicy 限制特定通信",
            "删除所有 Service",
            "禁用 kube-proxy",
            "在节点上配置防火墙"
        ],
        answer: [0],
        explanation: "可以通过 NetworkPolicy 禁用特定 Pod 间通信（通过 label selector 选择特定 Pod，不配置允许的规则）。也可以在节点或云提供商网络层配置防火墙规则。删除所有 Service 会禁用 Service 访问，但 Pod 间仍能直接通信。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "Pod 的 DNS 策略有哪些？",
        type: "多选",
        options: [
            "Default（使用节点 DNS）",
            "ClusterFirst（先查询集群 DNS，查不到则用节点 DNS）",
            "ClusterFirstWithHostNet（主机网络模式使用 ClusterFirst）",
            "None（仅使用 Pod 的 dnsConfig，不使用集群或节点 DNS）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "Pod 的 DNS 策略：Default（使用节点 DNS）、ClusterFirst（先查询集群 DNS，查不到则用节点 DNS）、ClusterFirstWithHostNet（hostNetwork 使用 ClusterFirst）、None（仅使用 Pod 的 dnsConfig，不使用集群或节点 DNS）。默认是 ClusterFirst。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "什么是 Kubernetes 的网络服务质量？",
        type: "单选",
        options: [
            "Service 的负载均衡性能",
            "基于带宽的网络限制",
            "不支持",
            "NetworkPolicy 的 QoS"
        ],
        answer: [2],
        explanation: "Kubernetes 不直接提供网络服务质量（QoS，如带宽限制）。可以通过 NetworkPolicy、网络插件（如 Calico 的 egressBandwidth limit）或节点网络工具（如 tc）实现。不是 Service 的负载均衡性能或 NetworkPolicy 的 QoS。",
        difficulty: "高级"
    },
    {
        module: "网络",
        question: "如何限制 Pod 的 DNS 查询？",
        type: "多选",
        options: [
        "设置 Pod 的 dnsPolicy 为 None",
        "设置 Pod 的 dnsConfig（nameservers, searches, options）",
        "使用 NetworkPolicy 限制 DNS 端口到集群 DNS",
        "无法限制"
    ],
        answer: [0, 1, 2],
        explanation: "限制 Pod 的 DNS 查询：设置 Pod 的 dnsPolicy 为 None 并配置 dnsConfig（指定 nameservers、searches、options）可以限制 DNS 查询到特定 DNS 服务器。使用 NetworkPolicy 限制 DNS 端口（如 TCP/UDP 53）到集群 DNS（如 CoreDNS 服务的 Pod 和 Service）也可以限制 DNS 查询。",
        difficulty: "高级"
    },
    {
        module: "网络",
        question: "什么是 Kubernetes 的 DNS 服务的搜索域（Search Domains）？",
        type: "单选",
        options: [
            "DNS 查询超时时间",
            "DNS 解析时自动添加的后缀",
            "DNS 服务的 IP 地址",
            "DNS 记录的缓存时间"
        ],
        answer: [1],
        explanation: "Kubernetes 的 DNS 服务的搜索域（Search Domains）是 DNS 解析时自动添加的后缀，如 default.svc.cluster.local、svc.cluster.local、cluster.local。当解析 Service 时，可以使用短名称（如 my-service），DNS 解析器会依次尝试加上搜索域进行解析（my-service.default.svc.cluster.local、my-service.svc.cluster.local、my-service.cluster.local）。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "Service 的 externalTrafficPolicy 字段有什么作用？",
        type: "单选",
        options: [
            "配置 Service 的外部 IP 策略",
            "控制外部流量如何路由到节点和 Pod",
            "限制外部流量的带宽",
            "配置 Service 的 TLS 策略"
        ],
        answer: [1],
        explanation: "Service 的 externalTrafficPolicy 字段控制外部流量如何路由到节点和 Pod。值为 Cluster（默认）时：外部流量可以路由到任何节点的后端 Pod，可能经过两次 NAT（客户端到节点，节点到其他节点的 Pod），客户端 IP 会被 SNAT 为节点 IP。值为 Local 时：外部流量只路由到本地节点的后端 Pod，确保客户端源 IP 不被 NAT，但可能流量不均衡（只有有本地后端 Pod 的节点才接收流量）。适用于需要保留客户端源 IP 的场景，如日志分析、访问控制。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "Ingress 的 pathType 字段有哪些类型？",
        type: "多选",
        options: [
            "Exact（精确匹配路径）",
            "Prefix（前缀匹配路径）",
            "ImplementationSpecific（由 Ingress 控制器决定匹配逻辑）",
            "Regex（正则表达式匹配）"
        ],
        answer: [0, 1, 2],
        explanation: "Ingress 的 pathType 字段定义路径匹配类型：Exact（精确匹配路径，如 /app 精确匹配 /app，不匹配 /app/ 或 /app/health）、Prefix（前缀匹配路径，如 /app 匹配 /app、/app/、/app/health，匹配最长前缀优先）、ImplementationSpecific（匹配逻辑取决于 Ingress 控制器的实现）。Kubernetes 不支持正则表达式匹配路径（需要 Ingress 控制器自定义配置）。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "如何为 Service 配置会话亲和性（Session Affinity）？",
        type: "单选",
        options: [
            "设置 sessionAffinity 为 ClientIP 并配置超时时间",
            "设置 sessionAffinity 为 Sticky 并配置 cookie",
            "设置 sessionAffinity 为 Local 并配置节点",
            "Service 默认启用会话亲和性，无需配置"
        ],
        answer: [0],
        explanation: "为 Service 配置会话亲和性：设置 sessionAffinity 为 ClientIP（默认为 None，无会话亲和性），可选配置 sessionAffinityConfig.clientIP.timeoutSeconds（默认 10800 秒，即 3 小时）。不支持 Sticky（cookie）、Local（节点）或其他值。示例：sessionAffinity: ClientIP; sessionAffinityConfig: { clientIP: { timeoutSeconds: 3600 } }。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "什么是 Service 的健康检查机制？",
        type: "多选",
        options: [
            "通过 EndpointSlice 动态跟踪后端 Pod",
            "当 Pod NotReady 时从 EndpointSlice 中移除",
            "使用 readinessProbe 判断 Pod 是否就绪",
            "使用 livenessProbe 判断 Service 是否需要重启"
        ],
        answer: [0, 1, 2],
        explanation: "Service 的健康检查机制：EndpointSlice 控制器动态跟踪后端 Pod 的状态，当 Pod NotReady（基于 readinessProbe 或 Pod 状态）时从 EndpointSlice 中移除，确保流量只路由到健康的 Pod。livenessProbe 不影响 Service 的后端选择（livenessProbe 失败会重启 Pod，不会立即从 EndpointSlice 移除）。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "如何排查 Service 无法访问的问题？",
        type: "多选",
        options: [
            "检查 Service 是否存在且 ClusterIP 正确",
            "检查 EndpointSlice 是否有后端 Pod",
            "检查 NetworkPolicy 是否阻止了流量",
            "检查后端 Pod 的 readinessProbe 是否通过"
        ],
        answer: [0, 1, 2, 3],
        explanation: "排查 Service 无法访问的问题：检查 Service 是否存在（kubectl get svc）且 ClusterIP 正确、检查 EndpointSlice 是否有后端 Pod（kubectl get endpointslices，后端 Pod 可能为空）、检查 NetworkPolicy 是否阻止了流量（如没有允许 ingress 的规则）、检查后端 Pod 的 readinessProbe 是否通过（NotReady 的 Pod 不会出现在 EndpointSlice 中）、检查 Pod 的 IP 和端口是否正确。",
        difficulty: "基础"
    },
    {
        module: "网络",
        question: "什么是 CoreDNS 的插件机制？",
        type: "单选",
        options: [
            "CoreDNS 自动安装的网络插件",
            "CoreDNS 通过插件链处理 DNS 请求",
            "CoreDNS 的负载均衡插件",
            "CoreDNS 的缓存插件"
        ],
        answer: [1],
        explanation: "CoreDNS 的插件机制：CoreDNS 通过插件链处理 DNS 请求，每个插件负责特定的 DNS 功能，如 cache（缓存）、errors（错误处理）、health（健康检查）、kubernetes（Kubernetes Service 和 Pod 解析）、forward（转发到外部 DNS）等。插件配置在 CoreDNS ConfigMap 中（/etc/coredns/Corefile）。插件按顺序执行，一个插件返回结果则终止链。",
        difficulty: "高级"
    },
    {
        module: "网络",
        question: "Ingress 的 annotations 有什么用途？",
        type: "多选",
        options: [
            "配置 Ingress 控制器的行为",
            "配置 TLS、重定向、速率限制等高级功能",
            "配置负载均衡算法和健康检查",
            "配置 Ingress 的基本路由规则"
        ],
        answer: [0, 1, 2],
        explanation: "Ingress 的 annotations 用于配置 Ingress 控制器的行为，如 TLS（cert-manager）、重定向（nginx.ingress.kubernetes.io/rewrite-target）、速率限制（nginx.ingress.kubernetes.io/limit-rps）、负载均衡算法（nginx.ingress.kubernetes.io/load-balance）、健康检查、CORS 等。不同 Ingress 控制器的 annotations 不同（NGINX Ingress Controller、Traefik、HAProxy Ingress 等）。基本的路由规则（主机名、路径、后端 Service）在 Ingress spec 中配置，不在 annotations 中。",
        difficulty: "进阶"
    },
    {
        module: "网络",
        question: "什么是 Service 的发布策略（PublishNotReadyAddresses）？",
        type: "单选",
        options: [
            "Service 的发布时间策略",
            "控制 NotReady 的 Pod 是否作为 Service 的后端",
            "Service 的地址发布策略",
            "Service 的负载均衡策略"
        ],
        answer: [1],
        explanation: "Service 的 publishNotReadyAddresses 字段（默认 false）控制 NotReady 的 Pod（基于 readinessProbe 或 Pod 状态）是否作为 Service 的后端。默认情况下，只有 Ready 的 Pod 会出现在 EndpointSlice 中，Service 的流量不会路由到 NotReady 的 Pod。设置为 true 时，NotReady 的 Pod 也会包含在 EndpointSlice 中，适用于需要将流量路由到所有 Pod 的场景（如 StatefulSet 的初始启动、调试）。",
        difficulty: "高级"
    },
    {
        module: "网络",
        question: "什么情况下应该使用 Headless Service？",
        type: "多选",
        options: [
            "StatefulSet 需要稳定的 DNS 标识时",
            "客户端需要直接选择后端 Pod 时",
            "需要实现自定义负载均衡逻辑时",
            "需要跨集群访问 Service 时"
        ],
        answer: [0, 1, 2],
        explanation: "Headless Service（ClusterIP 为 None）的使用场景：StatefulSet 需要稳定的 DNS 标识（每个 Pod 有稳定的 DNS 名称，如 web-0.default.svc.cluster.local）、客户端需要直接选择后端 Pod（如数据库连接池、缓存客户端）、需要实现自定义负载均衡逻辑时。跨集群访问 Service 通常使用 ClusterIP Service 配合 Federation 或其他方案。Headless Service 不提供负载均衡或虚拟 IP，适合需要精细控制后端选择的场景。",
        difficulty: "进阶"
    }
];

const modules = ["网络"];
