// Kubernetes 概念测评 - 存储 (v2版本)
// 版本: v2
// 生成日期: 2026-04-14
// 题目总数: 50
// 覆盖: 存储

const questions = [
    {
        module: "存储",
        question: "Kubernetes 中的 Volume 是什么？",
        type: "单选",
        options: [
            "一个存储设备",
            "Pod 中容器可以访问的存储目录",
            "一个网络服务",
            "一个容器镜像仓库"
        ],
        answer: [1],
        explanation: "Volume 是 Pod 中容器可以访问的存储目录。Volume 与 Pod 生命周期绑定（Pod 删除时删除），支持多种卷类型（如 emptyDir、hostPath、PVC、ConfigMap、Secret 等）。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "emptyDir Volume 的特点是什么？",
        type: "多选",
        options: [
            "当 Pod 被删除时，Volume 中的数据会被删除",
            "Pod 中的容器可以共享 emptyDir Volume",
            "emptyDir 数据持久化到节点上",
            "确保数据持久化"
        ],
        answer: [0, 1],
        explanation: "emptyDir Volume 的特点：当 Pod 被删除时，Volume 中的数据会被删除、Pod 中的容器可以共享 emptyDir Volume。emptyDir 可以是节点的磁盘或内存（emptyDir.medium: Memory），但不保证数据持久化，用于临时存储。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "hostPath Volume 的使用场景是什么？",
        type: "多选",
        options: [
            "访问节点上的系统信息",
            "持久化数据与节点绑定",
            "提供容器间共享存储",
            "实现数据持久化"
        ],
        answer: [0, 1],
        explanation: "hostPath Volume 用于将节点上的文件或目录挂载到 Pod 中，适合访问节点系统信息（如 /var/log、/lib/modules），或与节点绑定的数据（如监控数据、代理配置）。不适合应用间共享，Pod 重新调度后节点变化导致数据丢失。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "PersistentVolume（PV）是什么？",
        type: "单选",
        options: [
            "Pod 的临时存储",
            "集群级别的存储资源，独立于 Pod 生命周期",
            "本地临时存储",
            "网络存储接口"
        ],
        answer: [1],
        explanation: "PersistentVolume（PV）是集群级别的存储资源，独立于 Pod 生命周期，提供持久性保证。PV 可以是本地存储（如 hostPath、local）或外部存储（如 NFS、 AWS EBS、GCE PD）。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "PersistentVolumeClaim（PVC）是什么？",
        type: "单选",
        options: [
            "集群级别的存储资源",
            "用户对存储的请求，用于绑定 PV 和 Pod 之间的存储需求",
            "本地临时存储",
            "网络存储接口"
        ],
        answer: [1],
        explanation: "PersistentVolumeClaim（PVC）是用户对存储的请求，用于绑定 PV 和 Pod 之间的存储需求。Pod 通过 PVC 引用存储，PVC 与 PV 绑定后，Pod 可以使用 PV 提供的存储。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "StorageClass 的作用是什么？",
        type: "单选",
        options: [
            "管理 Pod 的存储需求",
            "定义不同类型的存储，用于动态卷配置",
            "存储配额管理",
            "存储性能监控"
        ],
        answer: [1],
        explanation: "StorageClass 定义不同类型的存储，包括存储提供者、参数、回收策略、挂载选项等，用于动态卷配置。通过 StorageClass，用户可以声明存储需求，系统会自动创建 PV。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "动态 PV 配置是如何工作的？",
        type: "单选",
        options: [
            "管理员手动创建 PV",
            "用户创建 PVC，Kubernetes 根据 StorageClass 自动创建 PV",
            "无法自动创建",
            "通过 kubectl create pv 创建"
        ],
        answer: [1],
        explanation: "动态 PV 配置：用户创建 PVC 指定 StorageClass，Kubernetes 的 PersistentVolume 控制器根据 StorageClass 的定义（存储提供者、参数等）自动创建 PV，并将 PVC 与 PV 绑定。无需预先创建 PV。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "PV 的回收策略有哪些？",
        type: "多选",
        options: [
            "Retain（保留，需要手动清理）",
            "Recycle（回收，删除数据后重新使用，已废弃）",
            "Delete（删除，自动删除存储资源）",
            "Archive（归档）"
        ],
        answer: [0, 2],
        explanation: "PV 的回收策略：Retain（保留，PVC 删除后 PV 和数据保留，需要手动清理）、Recycle（回收，PVC 删除后删除数据重新使用，Kubernetes 1.15+已废弃）、Delete（删除，PVC 删除后自动删除存储资源）。没有 Archive 策略。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "PV 的访问模式有哪些？",
        type: "多选",
        options: [
            "ReadWriteOnce（单节点读写）",
            "ReadOnlyMany（多节点只读）",
            "ReadWriteMany（多节点读写）",
            "ReadWriteOncePod（单 Pod 读写）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "PV 的访问模式：ReadWriteOnce（单节点读写）、ReadOnlyMany（多节点只读）、ReadWriteMany（多节点读写）、ReadWriteOncePod（单 Pod 读写，Kubernetes 1.22+）。访问模式取决于存储后端支持。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "PVC 如何绑定 PV？",
        type: "单选",
        options: [
            "随机选择",
            "根据 PVC 的存储类、访问模式、容量请求匹配 PV",
            "由节点选择",
            "无法自动绑定"
        ],
        answer: [1],
        explanation: "PVC 通过资源控制器（PersistentVolume 控制器）与 PV 绑定，PVC 的存储类、访问模式、容量请求需要与 PV 匹配。如果没有匹配的 PV，PVC 会处于 Pending 状态（除非 StorageClass 配置动态配置）。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "ConfigMap Volume 的主要用途是什么？",
        type: "多选",
        options: [
            "存储应用配置文件",
            "向容器注入环境变量",
            "存储敏感信息如密码",
            "提供命令行参数"
        ],
        answer: [0, 1, 3],
        explanation: "ConfigMap Volume 用于将 ConfigMap 中的数据作为文件挂载到容器中，主要用途：存储应用配置文件、向容器注入环境变量、提供命令行参数。敏感信息应使用 Secret 而非 ConfigMap。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "Secret Volume 和 ConfigMap Volume 的主要区别是什么？",
        type: "多选",
        options: [
            "Secret 数据是 base64 编码的",
            "Secret 存储敏感信息",
            "ConfigMap 只能挂载为目录",
            "Secret 的数据存储在 etcd 中未加密时是明文的"
        ],
        answer: [0, 1, 3],
        explanation: "Secret 与 ConfigMap 的区别：Secret 数据是 base64 编码、Secret 存储敏感信息（如密码、令牌）、Secret 数据存储在 etcd 中默认未加密（但可以通过 etcd 加密或第三方加密）。ConfigMap 和 Secret 都可以挂载为文件或环境变量。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "downwardAPI Volume 的作用是什么？",
        type: "单选",
        options: [
            "将 Pod 信息暴露给容器",
            "提供外部存储访问",
            "实现容器间通信",
            "监控容器资源"
        ],
        answer: [0],
        explanation: "downwardAPI Volume 用于将 Pod 的元信息（如 Pod 名称、命名空间、标签、注解、资源限制、Pod IP 等）以文件形式暴露给容器内进程读取。容器可以通过读取这些文件获取 Pod 自身的信息。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "projected Volume 的作用是什么？",
        type: "单选",
        options: [
            "提供多种卷类型的组合挂载",
            "实现存储资源投影",
            "提供网络存储访问",
            "优化存储性能"
        ],
        answer: [0],
        explanation: "projected Volume 可以将多个卷类型（ConfigMap、Secret、ServiceAccountToken、downwardAPI）组合挂载到同一个目录中，用于简化 Pod 配置。通过 projected Volume，多个来源的配置可以通过一个 Volume 挂载。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "emptyDir 的 medium 字段设置为 'Memory' 时会发生什么？",
        type: "多选",
        options: [
            "数据存储在节点的内存中",
            "数据在 Pod 删除时立即释放",
            "读写性能更高",
            "数据大小受节点内存限制"
        ],
        answer: [0, 1, 3],
        explanation: "emptyDir.medium 设置为 'Memory' 时，Volume 使用内存而非磁盘作为存储，特点：数据存储在节点内存中、Pod 删除时立即释放、数据大小受节点内存限制。内存存储读写速度快但不持久，且占用容器内存配额。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "使用 hostPath Volume 的注意事项有哪些？",
        type: "多选",
        options: [
            "Pod 重调度后可能无法访问相同数据",
            "多个 Pod 同时读写可能导致冲突",
            "需要确保节点有足够的权限访问",
            "hostPath 数据会自动同步到其他节点"
        ],
        answer: [0, 1, 2],
        explanation: "hostPath Volume 的注意事项：Pod 重调度后可能无法访问相同数据（因为新节点路径不存在或不同）、多个 Pod 同时读写可能导致冲突、需要确保节点有足够的权限访问。hostPath 数据不会自动同步到其他节点。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "PV 的状态有哪些？",
        type: "多选",
        options: [
            "Available（可用）",
            "Bound（已绑定）",
            "Released（已释放）",
            "Failed（失败）"
        ],
        answer: [0, 1, 2],
        explanation: "PV 的状态包括：Available（可用，可以被 PVC 绑定）、Bound（已绑定，已与 PVC 绑定）、Released（已释放，PVC 已删除，但 PV 上仍有数据，需要手动清理回收）。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "PVC 的状态有哪些？",
        type: "多选",
        options: [
            "Pending（等待绑定或动态配置PV）",
            "Bound（已绑定到PV）",
            "Lost（PV已丢失）",
            "Failed（失败）"
        ],
        answer: [0, 1, 2],
        explanation: "PVC 的状态包括：Pending（等待绑定或动态配置 PV）、Bound（已绑定到 PV）、Lost（PV 已丢失无法访问）。如 PVC 长时间处于 Pending 状态，可能是没有匹配的 PV 或动态配置失败。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "StorageClass 的 provisioner 字段指定什么？",
        type: "单选",
        options: [
            "存储容量",
            "存储后端提供者插件",
            "回收策略",
            "挂载选项"
        ],
        answer: [1],
        explanation: "StorageClass 的 provisioner 字段指定存储后端提供者插件（如 kubernetes.io/aws-ebs、kubernetes.io/gce-pd、kubernetes.io/nfs），用于动态创建 PV。每种存储后端有专门的 provisioner 实现其生命周期管理。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "StorageClass 的 reclaimPolicy 优先级与 PV 的回收策略关系是？",
        type: "单选",
        options: [
            "PV 的回收策略优先级更高",
            "StorageClass 的 reclaimPolicy 优先级更高",
            "两者必须一致",
            "动态创建的 PV 使用 StorageClass 的回收策略"
        ],
        answer: [3],
        explanation: "对于静态创建的 PV，其回收策略在 PV 定义中指定；对于动态创建的 PV，回收策略使用 StorageClass 的 reclaimPolicy。如不指定，默认使用 StorageClass 的回收策略（未指定则保留）。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "VolumeSnapshot 的作用是什么？",
        type: "单选",
        options: [
            "备份 PV 数据",
            "创建 PV 的快照",
            "迁移 PV 数据",
            "复制 PVC 配置"
        ],
        answer: [1],
        explanation: "VolumeSnapshot 可以创建 PV（基于存储后支持的存储资源）的快照，用于备份数据或恢复数据。快照作为独立的资源存在，可以用于恢复到新的 PV。快照功能需要存储后端支持（如 CSI 驱动）。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "使用 VolumeSnapshot 恢复数据的步骤是什么？",
        type: "多选",
        options: [
            "创建 VolumeSnapshot 资源",
            "创建 PVC 指定 dataSource 为 VolumeSnapshot",
            "等待 PV 静态绑定或动态创建",
            "将 PVC 挂载到 Pod 使用"
        ],
        answer: [0, 1, 2, 3],
        explanation: "使用 VolumeSnapshot 恢复数据的步骤：创建 VolumeSnapshot 资源、创建 PVC 指定 dataSource（apiGroup、kind、name）为 VolumeSnapshot、Kubernetes 根据快照创建 PV 或匹配现有 PV、绑定后将 PVC 挂载到 Pod 使用。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "CSI（Container Storage Interface）的作用是什么？",
        type: "多选",
        options: [
            "定义标准化的存储接口",
            "使存储后端提供者可以开发通用插件",
            "支持扩展多种存储类型",
            "替代所有内置存储后端"
        ],
        answer: [0, 1, 2],
        explanation: "CSI 定义标准化的存储接口，使存储后端提供者可以开发通用插件，而无需修改 Kubernetes 核心代码。CSI 扩展支持多种存储类型（如云存储、本地存储、网络存储）。Kubernetes 保留了一些内置存储后端（如 hostPath），但新类型推荐使用 CSI。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "使用 CSI 存储后端需要部署哪些资源？",
        type: "多选",
        options: [
            "CSI Driver 部署（CSIDriver 资源）",
            "CSI 控制器（部署或 StatefulSet）",
            "CSI Node DaemonSet",
            "StorageClass 指定 CSI provisioner"
        ],
        answer: [0, 1, 2, 3],
        explanation: "使用 CSI 存储后端需要部署：CSI Driver 部署（CSIDriver 自定义资源定义驱动）、CSI 控制器（负责创建删除存储资源，如 Deployment 或 StatefulSet）、CSI Node DaemonSet（负责节点上的挂载操作）、StorageClass 指定 CSI provisioner。",
        difficulty: "高级"
    },
    {
        module: "存储",
        question: "本地存储（local PV）的特点是什么？",
        type: "多选",
        options: [
            "使用节点的本地磁盘",
            "性能通常高于网络存储",
            "数据与节点绑定，Pod 重调度需要保持同一节点",
            "自动支持动态配置"
        ],
        answer: [0, 1, 2],
        explanation: "本地存储（local PV）使用节点的本地磁盘，特点：读写性能通常高于网络存储、数据与节点绑定（Pod 重调度需要通过节点亲和性保持同一节点）、本地 PV 需要预先创建并标记与节点关联（通过 nodeAffinity），不支持动态配置。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "如何确保使用 local PV 的 Pod 始终调度到特定节点？",
        type: "多选",
        options: [
            "在 PV 中设置 nodeAffinity",
            "在 PVC 匹配 PV 后自动继承",
            "在 Pod 中手动指定 nodeName",
            "使用调度器配置"
        ],
        answer: [0, 1],
        explanation: "确保使用 local PV 的 Pod 调度到特定节点：在 PV 中设置 nodeAffinity（指定节点匹配条件）、Kubernetes 调度器会自动将 Pod 调度到匹配的节点。不需要在 Pod 中手动指定nodeName（这样会绕过调度器）。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "NFS Volume 的特点是？",
        type: "单选",
        options: [
            "支持动态配置",
            "支持多节点读写（ReadWriteMany）",
            "保证数据一致性",
            "自动备份"
        ],
        answer: [1],
        explanation: "NFS Volume 的特点：支持多节点读写（ReadWriteMany），适合多个 Pod 共享同一存储数据。NFS 不保证数据一致性（需要应用处理），不支持动态配置（需要预先创建 PV），不自动备份。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "云存储（如 AWS EBS、GCE PD）的特点是什么？",
        type: "多选",
        options: [
            "支持动态配置",
            "支持自动备份快照",
            "通常只支持 ReadWriteOnce 访问模式",
            "与云服务集成管理"
        ],
        answer: [0, 1, 2, 3],
        explanation: "云存储（如 AWS EBS、GCE PD）特点：支持通过 StorageClass 动态配置、支持自动创建快照备份、通常只支持 ReadWriteOnce 访问模式（同一云盘只能被一个节点读写）、与云服务集成管理。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "如何为 PVC 指定存储类？",
        type: "单选",
        options: [
            "在 PVC 中设置 storageClassName 字段",
            "在 PV 中设置 storageClassName 字段",
            "在 PVC 和 PV 中都设置",
            "默认使用集群默认存储类"
        ],
        answer: [0],
        explanation: "在 PVC 中设置 storageClassName 字段指定存储类（如 'fast' 或 'ssd'），Kubernetes 会匹配相同存储类（storageClassName 相同或 PV 未指定）的 PV。如 storageClassName 为空字符串（''），则只匹配未指定存储类的 PV（静态绑定）。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "PVC 的容量如何工作？",
        type: "单选",
        options: [
            "请求容量必须与 PV 容量完全一致",
            "请求容量不能超过 PV 的容量",
            "请求容量可以任意值，自动调整",
            "容量必须与 PV 容量相同或更小"
        ],
        answer: [3],
        explanation: "PVC 的容量设置为请求容量，绑定 PV 时 PV 的容量必须大于或等于请求容量（通常 PVC 获得的存储量为 PV 容量而非请求值）。PVC 容量不能超过 PV 容量，否则无法匹配。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "存储类中的 volumeBindingMode 字段控制什么？",
        type: "多选",
        options: [
            "Immediate（立即绑定）- PVC 创建时立即绑定或动态创建 PV",
            "WaitForFirstConsumer（等待首次消费者）- 等 Pod 指向 PVC 时再决定 PV 的拓扑位置",
            "动态配置拓扑感知",
            "支持存储卷延迟绑定"
        ],
        answer: [0, 1, 2],
        explanation: "volumeBindingMode 控制 PVC 绑定时机：Immediate（立即绑定）- PVC 创建时立即绑定或动态创建 PV、WaitForFirstConsumer（等待首次消费者）- 等 Pod 指向 PVC 时再决定 PV 的拓扑位置。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "如何监控存储使用情况？",
        type: "多选",
        options: [
            "通过 kubectl describe pv 查看状态",
            "通过 kubectl get pvc 查看绑定状态和容量",
            "通过 Metrics Server 查看 Pod 的存储使用",
            "监控节点的存储使用（df -h）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "监控存储使用情况：kubectl describe pv 查看状态和容量使用、kubectl get pvc 查看绑定状态和容量、Metrics Server 查看 Pod 的存储使用、监控节点存储使用（检查节点磁盘空间）。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "PVC 长时间处于 Pending 状态的可能原因有哪些？",
        type: "多选",
        options: [
            "没有匹配的 PV",
            "StorageClass 动态配置失败",
            "访问模式不匹配",
            "容量请求超过所有 PV 的容量"
        ],
        answer: [0, 1, 2, 3],
        explanation: "PVC Pending 状态的可能原因：没有匹配的 PV（存储类、访问模式、容量都不匹配）、动态配置失败（provisioner 不可用或配置错误）、访问模式不匹配（PVC 请求 ReadWriteMany 但 PV 只支持 ReadWriteOnce）、容量请求超过所有 PV 的容量。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "如何扩展 PVC 的容量？",
        type: "多选",
        options: [
            "修改 PVC 的 resources.requests.storage 字段增大",
            "需要 StorageClass 和存储后端支持在线扩容",
            "Pod 不需要重启自动识别扩容",
            "某些情况需要重建 PV"
        ],
        answer: [0, 1, 2],
        explanation: "扩展 PVC 容量：修改 PVC 的 resources.requests.storage 字段增大需要 StorageClass 和存储后端支持在线扩容（allowVolumeExpansion: true）、Pod 不需要重启（Kubernetes 自动扩展文件系统）。",
        difficulty: "高级"
    },
    {
        module: "存储",
        question: "Pod 中配置多个 Volume 时挂载顺序的问题？",
        type: "单选",
        options: [
            "挂载顺序影响容器启动",
            "挂载顺序影响容器内文件",
            "挂载顺序对容器无影响",
            "挂载顺序决定卷大小"
        ],
        answer: [2],
        explanation: "Pod 中配置多个 Volume 时，挂载顺序对容器无影响，容器可以使用所有挂载的卷。但卷挂载失败会导致 Pod 无法启动。注意不要在不同卷上挂载相同容器路径（后挂载的会覆盖先挂载的）。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "为什么需要使用 emptyDir 而非直接在容器内使用目录？",
        type: "多选",
        options: [
            "容器崩溃时 emptyDir 数据仍然保留",
            "容器间可以共享 emptyDir",
            "emptyDir 可以指定存储介质（如内存）",
            "emptyDir 自动清理"
        ],
        answer: [0, 1, 2],
        explanation: "emptyDir 相比容器内目录：数据在容器崩溃时仍然保留、容器间可以共享（同一 Pod 内）、可以指定存储介质（如内存）、Pod 删除时自动清理。容器内目录依赖容器文件系统，容器重启可能丢失且无法共享。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "配置 StorageClass 的 mountOptions 字段的作用是什么？",
        type: "多选",
        options: [
            "指定挂载选项（如读写策略、缓存）",
            "传递给存储后端挂载器",
            "只适用于文件系统存储",
            "影响 PV 的回收策略"
        ],
        answer: [0, 1],
        explanation: "mountOptions 字段指定挂载选项（如读写、缓存策略），传递给存储后端挂载器（如 NFS 挂载选项、本地存储挂载选项）。mountOptions 适用于挂载操作，不适用于块设备存储，回收策略由 reclaimPolicy 控制。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "使用 Secret 作为环境变量注入 Pod 的方法是？",
        type: "单选",
        options: [
            "通过 env 引用 Secret 中的键",
            "通过 volumeFrom 挂载 Secret",
            "通过 secretRef 指定 Secret",
            "在 Pod spec 中嵌入 Secret 数据"
        ],
        answer: [0],
        explanation: "通过 env 引用 Secret 中的键，格式如下：env: - name: DB_PASSWORD, valueFrom: secretKeyRef: name: db-secret, key: password。Secret 也可以通过 volume 挂载为文件访问。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "ConfigMap 挂载为文件时，如果只选择部分键（items）会怎样？",
        type: "单选",
        options: [
            "只挂载指定的键为文件",
            "挂载所有键但只指定键可用",
            "报错，不支持部分挂载",
            "挂载所有键，隐藏未指定键"
        ],
        answer: [0],
        explanation: "通过 volumeMounts.items 或 volume.items 指定挂载的键，只挂载指定的键为文件。如不指定 items，则挂载 ConfigMap 中所有键。items 可以指定 path（挂载后的文件名）和 mode（文件权限）。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "StorageClass 的 allowVolumeExpansion 为 true 时的作用是什么？",
        type: "单选",
        options: [
            "允许 PVC 自动扩展",
            "允许 PV 自动扩展",
            "允许 StorageClass 动态创建 PV",
            "允许存储后端自动扩容"
        ],
        answer: [0],
        explanation: "allowVolumeExpansion 为 true 时，允许后续修改 PVC 的容量请求使 PVC 扩容。支持扩容的存储后端（如云存储）会自动扩展底层的 PV 存储并扩展文件系统。不支持扩容的存储后端或设置 false 时扩容请求会被拒绝。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "如何实现 Pod 挂载多个 Volume 到同一目录？",
        type: "多选",
        options: [
            "使用 subPath 将特定文件或目录挂载",
            "使用 projected Volume 组合多个卷",
            "直接挂载到不同路径并使用软链接（容器内）",
            "挂载顺序决定最终内容"
        ],
        answer: [0, 1],
        explanation: "挂载多个 Volume 到同一目录：使用 subPath 挂载特定文件或目录到容器路径，使用 projected Volume 组合多个卷（ConfigMap、Secret 等）。直接多次挂载同一路径会导致覆盖。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "在 k8s 中为何不推荐使用 hostPath？",
        type: "多选",
        options: [
            "Pod 调度限制（必须与原节点一致）",
            "数据不跨节点持久化",
            "安全风险（节点路径可能包含敏感信息）",
            "无法动态配置"
        ],
        answer: [0, 1, 2],
        explanation: "hostPath 不推荐原因：Pod 调度限制（挂载特定节点路径后 Pod 重调度必须同一节点）、数据不跨节点持久化、安全风险（如访问节点根目录可能导致读写系统文件）、无法动态配置。hostPath 适用于系统代理、监控等需要节点访问的场景。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "Kubernetes 存储卷的生命周期与 Pod 的关系是什么？",
        type: "多选",
        options: [
            "emptyDir 与 Pod 生命周期一致",
            "PVC 绑定 PV 后不依赖 Pod",
            "Volume 在 Pod 启动失败时不清理",
            "Volume 在 Pod 正常终止前自动 detach"
        ],
        answer: [0, 1, 2, 3],
        explanation: "存储卷生命周期：emptyDir 与 Pod 生命周期一致（删除 Pod 时删除）、PVC 绑定 PV 后（无论是静态或动态）独立于 Pod 生命周期。Volume 在 Pod 启动失败时不清理、在 Pod 正常终止或异常时自动 detach（卸载）。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "如何配置 Pod 使用存储限额？",
        type: "单选",
        options: [
            "在 PVC 中设置资源限额",
            "在 PVC 中设置 requests 和 limits",
            "在 Pod 中设置存储 limit",
            "在 StorageClass 中设置限额"
        ],
        answer: [1],
        explanation: "在 PVC 中设置 resources.requests.storage 设置请求的容量，resources.limits.storage 设置容量上限（可选，仅支持基于块的存储，支持 IOPS 等限制）。Pod 中不直接设置存储限额，使用 PVC 容量。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "如何使用存储快照做备份恢复策略？",
        type: "多选",
        options: [
            "定期创建 VolumeSnapshot",
            "保留多个历史快照用于时间点恢复",
            "使用快照克隆到新存储后挂载验证数据",
            "快照自动备份到远程存储"
        ],
        answer: [0, 1, 2],
        explanation: "存储快照备份策略：定期创建 VolumeSnapshot（如每小时或每天）、保留多个历史快照（如保留 3 天）、恢复时克隆快照到新存储或恢复到新 PVC，挂载到 Pod 验证数据。快照不自动备份到远程存储（由存储后端处理）。",
        difficulty: "高级"
    },
    {
        module: "存储",
        question: "PV 和 PVC 的主要职责是什么？",
        type: "多选",
        options: [
            "PV 是集群资源管理员的视角（存储资源）",
            "PVC 是用户应用的视角（存储需求）",
            "PVC 是绑定资源，PV 是提供资源",
            "PV 和 PVC 解耦存储提供者和使用者"
        ],
        answer: [0, 1, 3],
        explanation: "PV（PersistentVolume）是集群资源管理员的视角，表示实际存储资源（后端、容量、访问模式）。PVC（PersistentVolumeClaim）是用户应用的视角，表示存储需求（容量需求、存储类、访问模式）。PVC 绑定 PV 时实现两者解耦。",
        difficulty: "基础"
    },
    {
        module: "存储",
        question: "如何确保存储数据的安全性（加密）？",
        type: "多选",
        options: [
            "启用 etcd 加密（Secret 等敏感数据）",
            "使用支持加密的存储后端",
            "应用层加密（应用程序加密数据）",
            "网络传输加密（TLS for NFS、云存储）"
        ],
        answer: [0, 1, 2, 3],
        explanation: "存储数据安全策略：启用 etcd 加密（集群配置加密 Secret 等敏感数据在 etcd 中）、使用支持加密的存储后端（如云加密 EBS、GCE PD）、应用层加密（敏感数据在写入存储前由应用加密）、网络传输加密（NFS over TLS、云存储使用 HTTPS）。",
        difficulty: "高级"
    },
    {
        module: "存储",
        question: "使用 PVC 时如何处理存储性能需求？",
        type: "多选",
        options: [
            "通过 StorageClass 定义存储性能类别（如 ssd、hdd）",
            "在 PVC 中指定请求的存储类型",
            "设置 PVC 的 IOPS 限制（支持后端）",
            "使用本地存储提升性能"
        ],
        answer: [0, 1, 2, 3],
        explanation: "存储性能需求：通过 StorageClass 定义性能类别（如 provisioner: kubernetes.io/aws-ebs, parameters: type: gp3）、在 PVC 中指定 storageClassName（如 'fast' 或 'ssd'）、设置 PVC 的 IOPS 限制（云存储支持）、使用本地存储提升读写性能。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "Kubernetes 中的 '卷快照'（VolumeSnapshot）支持哪些功能？",
        type: "多选",
        options: [
            "从 PV 创建快照",
            "从快照恢复为新的 PV（或 PVC）",
            "快照作为独立资源管理",
            "克隆现有 PV（使用存储后端克隆功能）"
        ],
        answer: [0, 1, 2],
        explanation: "VolumeSnapshot 功能：从 PV（PVC 绑定 PV 后）创建快照、从快照恢复为新 PV（创建 PVC 指定 dataSource）、快照作为独立资源（CRD：VolumeSnapshot、VolumeSnapshotContent）。克隆 PV 也支持（通过 PVC 指定 dataSource 为另一个 PVC），但克隆需要存储后端支持。",
        difficulty: "进阶"
    },
    {
        module: "存储",
        question: "为什么 ReadWriteMany 访问模式支持有限？",
        type: "多选",
        options: [
            "需要存储后端支持多节点同时挂载",
            "需要处理并发访问导致的数据一致性",
            "成本较高（如分布式存储）",
            "网络存储性能较低"
        ],
        answer: [0, 1],
        explanation: "ReadWriteMany 访问模式支持有限：需要存储后端支持多节点同时挂载（如 NFS、GlusterFS、CephFS）、需要处理并发访问导致的数据一致性问题（如文件锁、应用协调）。成本和网络性能是影响因素，但非支持有限的根本原因。",
        difficulty: "高级"
    },
    {
        module: "存储",
        question: "如何在 Kubernetes 中启用 etcd 数据加密？",
        type: "单选",
        options: [
            "在 kube-apiserver 中配置 --encryption-provider-config 参数指定加密配置",
            "在 etcd 配置中启用加密",
            "在 Secret 中定义加密策略",
            "自动开启，无需配置"
        ],
        answer: [0],
        explanation: "在 kube-apiserver 配置文件中设置 --encryption-provider-config 指定加密配置文件（如 encryption-config.yaml），定义加密资源（如 secrets）和加密方式（如 aescbc、kms-gcp）。启用后 Secret 等敏感数据在写入 etcd 前加密，读取后解密。",
        difficulty: "高级"
    },
    {
        module: "存储",
        question: "StorageClass 中的 allowedTopologies 字段的作用是什么？",
        type: "单选",
        options: [
            "限制 PV 创建的拓扑位置（如区域、可用区）",
            "限制 PVC 的访问模式",
            "限制存储容量",
            "限制绑定时机"
        ],
        answer: [0],
        explanation: "allowedTopologies 字段限制 PV 动态创建和绑定的拓扑位置（如云的可用区、本地存储的节点拓扑）。使用 volumeBindingMode: WaitForFirstConsumer 时，Kubernetes 调度器会选择匹配的节点拓扑作为 PV 创建的输入参数。",
        difficulty: "高级"
    }
];

const modules = ["存储"];
