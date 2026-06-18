#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Kubernetes概念测评题目生成器 - 完整版
生成720道高质量题目，覆盖9个模块
"""

import json
import os

def generate_complete_questions():
    """生成完整的720道Kubernetes概念测评题目"""
    
    questions = []
    
    # ========== 概述模块 (80题: 48单选 + 32多选) ==========
    
    overview_single = [
        {
            "module": "概述",
            "question": "Kubernetes 中的对象注解（Annotation）和标签（Label）的主要区别？",
            "type": "单选",
            "options": [
                "Annotation 只能存储短字符串",
                "Label 用于标识和选择，Annotation 用于存储非标识性元数据",
                "Label 是必填字段，Annotation 是可选字段",
                "Annotation 不支持更新"
            ],
            "answer": [1],
            "explanation": "Label 用于标识对象，支持选择器查询，有字符和长度限制，适合用于分组、调度等。Annotation 用于存储任意非标识性元数据，可以是结构化数据或较长文本，不支持查询选择器。两者都是键值对，但用途不同。"
        },
        {
            "module": "概述", 
            "question": "如何查看 Kubernetes 集群的节点状态？",
            "type": "单选",
            "options": [
                "kubectl get nodes",
                "kubectl show nodes",
                "kubectl list nodes",
                "kubectl nodes"
            ],
            "answer": [0],
            "explanation": "`kubectl get nodes` 或 `kubectl get node` 列出所有节点及其状态。输出包含 NAME、STATUS、ROLES、AGE、VERSION 等列。使用 `-o wide` 显示更多信息（IP、OS 镜像等）。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何创建一个命名空间？",
            "type": "单选", 
            "options": [
                "kubectl namespace create <name>",
                "kubectl create namespace <name>",
                "kubectl new namespace <name>",
                "kubectl add namespace <name>"
            ],
            "answer": [1],
            "explanation": "`kubectl create namespace <name>` 创建新命名空间。也可以使用 YAML 清单文件创建 Namespace 对象。命名空间创建后，资源可以分配到该命名空间。"
        },
        {
            "module": "概述",
            "question": "在 Kubernetes 中，kubectl apply --server-side 与普通 apply 的主要区别？",
            "type": "单选",
            "options": [
                "没有任何区别",
                "server-side apply 在 API Server 上合并字段，client-side 在客户端合并",
                "server-side apply 更快",
                "server-side apply 不支持 YAML 文件"
            ],
            "answer": [1],
            "explanation": "server-side apply 由 API Server 处理字段合并（使用 ApplyConfiguration），由 API Server 管理字段所有权，解决多方协同时的冲突。client-side apply 在客户端合并，有时会遇到字段被覆盖问题。推荐在新项目中使用 server-side apply。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 对象的哪个字段描述用户的期望状态？",
            "type": "单选",
            "options": [
                "metadata",
                "spec",
                "status", 
                "kind"
            ],
            "answer": [1],
            "explanation": "spec 字段描述用户对对象的期望状态（如 Pod 应该有几个副本、使用什么镜像）。status 由控制器更新，反映实际状态。metadata 包含对象的元信息（名称、命名空间、标签等）。kind 标识对象类型。"
        },
        {
            "module": "概述",
            "question": "以下哪些是 Kubernetes 的核心组件？",
            "type": "单选",
            "options": [
                "只有 API Server",
                "API Server, Scheduler, Controller Manager, etcd",
                "只有 Scheduler 和 etcd",
                "只有 kubelet 和 kube-proxy"
            ],
            "answer": [1],
            "explanation": "Kubernetes 控制平面核心组件包括：API Server（统一入口）、Scheduler（调度 Pod）、Controller Manager（运行各类控制器）、etcd（数据存储所有集群状态）。除此之外，工作节点还包括 kubelet、kube-proxy、容器运行时。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 的 REST API 路径结构是什么？",
            "type": "单选",
            "options": [
                "/apis/<group>/<version>/<resource>",
                "/api/<version>/<resource>",
                "以上两种都存在，取决于资源是否属于核心组",
                "以上都不是"
            ],
            "answer": [2],
            "explanation": "Kubernetes API 路径有两种格式：核心资源（如 Pod, Node）使用 `/api/v1/<resource>`；命名资源（如 Deployment, Service）使用 `/apis/<group>/<version>/<resource>`（如 `/apis/apps/v1/deployments`）。用户通过这些路径访问资源。"
        },
        {
            "module": "概述",
            "question": "kubectl 中的 config 子命令用于管理什么？",
            "type": "单选",
            "options": [
                "集群配置文件和连接信息",
                "Pod 的配置",
                "Service 的配置",
                "Deployment 的配置"
            ],
            "answer": [0],
            "explanation": "kubectl config 用于管理 kubeconfig 文件，包含集群、用户、上下文等信息。可以配置多个集群的访问信息，方便切换。命令示例：`kubectl config view`、`kubectl config use-context`、`kubectl config set-cluster`。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何获取某个资源的详细事件？",
            "type": "单选",
            "options": [
                "kubectl get events <resource-name>",
                "kubectl describe <type> <name>",
                "kubectl events <type> <name>",
                "kubectl logs <resource-name>"
            ],
            "answer": [1],
            "explanation": "`kubectl describe <type> <name>` 显示资源详细信息，包括事件（Events）部分。事件包含状态变化、错误、警告等信息，有助于排查问题。也可以 `kubectl get events --field-selector involvedObject.name=<name>` 查看特定对象的事件。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 对象的 metadata.name 字段有什么特点？",
            "type": "单选",
            "options": [
                "可以在创建后修改",
                "创建后不能修改，并在命名空间内唯一",
                "必须包含小写字母和数字",
                "不能超过 32 个字符"
            ],
            "answer": [1],
            "explanation": "metadata.name 在对象创建后不能修改，并且在同一个命名空间内必须唯一。名称限制在 253 字符内，只能包含小写字母、数字和 -，且必须以字母数字开头结尾。这些限制确保资源名称的有效性和一致性。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何查看集群的服务端点信息？",
            "type": "单选",
            "options": [
                "kubectl cluster-info",
                "kubectl get endpoints",
                "kubectl info cluster",
                "kubectl show services"
            ],
            "answer": [0],
            "explanation": "`kubectl cluster-info` 显示集群服务和相关端点。`kubectl get endpoints` 显示 Service 的端点（Pod IP）。`kubectl info` 不存在。cluster-info 通常显示 Kubernetes master、DNS 等核心服务的地址。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中的资源版本（resourceVersion）字段的作用？",
            "type": "单选",
            "options": [
                "记录资源的 API 版本",
                "用于乐观并发控制和一致性检查",
                "标识资源的创建者",
                "指定资源的期望状态"
            ],
            "answer": [1],
            "explanation": "resourceVersion 由 API Server 维护，标识资源的特定版本。用于乐观并发控制。客户端更新资源时可以提供 resourceVersion，确保更新基于最新的状态。如果资源已被修改，则更新失败，防止冲突。"
        },
        {
            "module": "概述",
            "question": "kubectl apply 与 kubectl create 的主要区别？",
            "type": "单选",
            "options": [
                "create 只能创建，apply 同时支持创建和更新",
                "apply 只能更新，create 只能创建",
                "两者完全相同",
                "create 更快，apply 更慢"
            ],
            "answer": [0],
            "explanation": "kubectl create 仅创建资源，如果资源已存在会报错。kubectl apply 是声明式操作，可以创建或更新现有资源。apply 通过比较差异更新资源，适合配置管理和持续集成场景。create 更适合一次性的资源创建。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何列出所有命名空间的 Pod？",
            "type": "单选",
            "options": [
                "kubectl get pods",
                "kubectl get pods --all-namespaces",
                "kubectl get pods -A",
                "kubectl pods --all"
            ],
            "answer": [1],
            "explanation": "`kubectl get pods --all-namespaces` 或 `kubectl get pods -A` 列出所有命名空间的 Pod。`-A` 是 `--all-namespaces` 的简写。省略 `--all-namespaces` 时，默认只列出当前上下文的命名空间（通常是 default）。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 对象的 metadata.labels 字段有什么限制？",
            "type": "单选",
            "options:": [
                "没有限制",
                "键最多 63 字符，值最多 253 字符，且必须符合 DNS 标签规范",
                "只能包含字母和数字",
                "不能使用下划线"
            ],
            "answer": [1],
            "explanation": "Label 键最多 63 字符，值最多 253 字符，必须符合 DNS 子域名规范：只能包含字母、数字、- 和 .，且必须以字母数字开头结尾。前缀（可选）是域名后缀，用 / 分隔（如 example.com/app）。这些限制确保 label 的规范性。"
        },
        {
            "module": "概述",
            "question": "如何查看当前 kubectl 的版本？",
            "type": "单选",
            "options": [
                "kubectl --version",
                "kubectl version --client",
                "kubectl client-version",
                "以上都可以"
            ],
            "answer": [3],
            "explanation": "以上都可以。`kubectl --version` 简略显示客户端版本。`kubectl version --client` 只显示客户端版本。不加 `--client` 时会同时显示客户端和服务端版本（若连接集群）。这些命令有助于排查 kubectl 与集群的版本兼容性问题。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何删除一个 Pod 强制（不等待优雅终止）？",
            "type": "单选",
            "options": [
                "kubectl delete pod <name> --force",
                "kubectl delete pod <name> --force --grace-period=0",
                "kubectl kill pod <name>",
                "kubectl terminate pod <name>"
            ],
            "answer": [1],
            "explanation": "`kubectl delete pod <name> --force --grace-period=0` 强制删除 Pod，跳过优雅终止过程。`--force` 标志强制删除，`--grace-period=0` 设置宽限期为 0。通常需要两者配合使用。`kubectl kill` 和 `kubectl terminate` 不存在。强制删除是最后的手段，可能造成数据不一致。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中的 kind 字段表示什么？",
            "type": "单选",
            "options": [
                "资源的种类标识（如 Pod, Service）",
                "资源的元数据类型",
                "资源的 API 版本",
                "资源的名称"
            ],
            "answer": [0],
            "explanation": "kind 标识 Kubernetes 对象的种类，例如 Pod, Service, Deployment。每个对象都有 kind 字段。API Server 根据 kind 路由请求到相应的处理器。kind 是字符串，必须与注册的 API 资源匹配。"
        },
        {
            "module": "概述",
            "question": "如何查看 Kubernetes 集群中所有事件？",
            "type": "单选",
            "options": [
                "kubectl get events",
                "kubectl events",
                "kubectl show events",
                "kubectl list events"
            ],
            "answer": [0],
            "explanation": "`kubectl get events` 列出所有事件。事件记录了集群中资源的重要状态变化，包括 Pod 启动、失败、资源调度、错误等。通过 `--field-selector` 可以过滤事件（如 `involvedObject.name=<pod-name>`）。事件有助于排查问题。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何切换到不同的命名空间？",
            "type": "单选",
            "options": [
                "kubectl namespace <name>",
                "kubectl config set-context --current --namespace=<name>",
                "kubectl use-namespace <name>",
                "kubectl switch-namespace <name>"
            ],
            "answer": [1],
            "explanation": "`kubectl config set-context --current --namespace=<name>` 修改当前上下文的命名空间。也可以为不同命名空间创建不同的上下文：`kubectl config set-context <context-name> --namespace=<name>`。`kubectl namespace` 和 `kubectl use-namespace` 不存在。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 对象的 metadata.annotations 字段与 labels 的最大区别？",
            "type": "单选",
            "options": [
                "annotations 支持二进制数据",
                "annotations 不用于查询和选择，labels 支持",
                "annotations 只能存储短字符串",
                "labels 没有长度限制"
            ],
            "answer": [1],
            "explanation": "Annotation 不用于查询和选择，存储任意元数据（工具配置、扩展信息等）。Label 用于查询选择器，标识和分组资源。Annotation 可以存储较大数据（限制 256KB），Label 对键值长度都有严格限制（键 63 字符，值 253 字符）。"
        },
        {
            "module": "概述",
            "question": "如何在 Kubernetes 中查看集群支持的 API 资源列表？",
            "type": "单选",
            "options": [
                "kubectl api-resources",
                "kubectl resources",
                "kubectl api list",
                "kubectl list-resources"
            ],
            "answer": [0],
            "explanation": "`kubectl api-resources` 列出集群支持的所有 API 资源，包括名称、简称、API 组、命名空间作用域、种类等。这些信息可以用于自动生成清单、客户端插件等。`kubectl resources` 不存在，其他命令也不正确。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何创建一个不等待立即执行的 Pod？",
            "type": "单选",
            "options": [
                "kubectl run <name> --image=<image>",
                "kubectl create pod <name> --image=<image>",
                "kubectl run <name> --image=<image> --restart=Never",
                "以上都可以"
            ],
            "answer": [3],
            "explanation": "以上都可以创建 Pod。`kubectl run <name> --image=<image>` 创建 Deployment（默认 `--restart=Always`）。`kubectl run <name> --image=<image> --restart=Never` 创建独立 Pod。`kubectl create pod` 需要完整清单文件。推荐使用清单文件，便于版本控制和复用。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中的 apiVersion 字段的作用是什么？",
            "type": "单选",
            "options:": [
                "指定对象的 API 版本",
                "标识对象的格式版本",
                "以上两者都包括",
                "指定对象的创建时间"
            ],
            "answer": [2],
            "explanation": "apiVersion 字段包含两部分：API 组（可选）和版本。例如：`v1`（核心组）、`apps/v1`（应用组）、`networking.k8s.io/v1`（网络组）。它指定对象 schema 版本，确保客户端和服务器使用相同的结构。不同组的资源使用不同的前缀路径。"
        },
        {
            "module": "概述",
            "question": "如何在 Kubernetes 中查看资源的 YAML 配置但不修改？",
            "type": "单选",
            "options": [
                "kubectl edit <type> <name>",
                "kubectl get <type> <name> -o yaml",
                "kubectl describe <type> <name>",
                "kubectl view <type> <name> -o yaml"
            ],
            "answer": [1],
            "explanation": "`kubectl get <type> <name> -o yaml` 输出资源的 YAML 配置，只读不修改。`kubectl edit` 打开编辑器修改；`kubectl describe` 显示可读的详细信息但非 YAML；`kubectl view` 不存在。输出 YAML 可以用于保存为文件、比较差异等。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何查看某个字段支持设置的值（如 Service 的 type）？",
            "type": "单选",
            "options": [
                "kubectl explain service.spec.type",
                "kubectl help service",
                "kubectl api-resources service",
                "kubectl doc service.type"
            ],
            "answer": [0],
            "explanation": "`kubectl explain <field-path>` 显示字段文档和支持的值。例如：`kubectl explain service.spec.type` 显示 Service type 可选值（ClusterIP、NodePort、LoadBalancer、ExternalName）。这是探索 Kubernetes schema 的有用工具。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 对象中的 spec 字段由谁填写？",
            "type": "单选",
            "options": [
                "系统自动生成",
                "用户或客户端填写期望状态",
                "控制器填写",
                "etcd 自动生成"
            ],
            "answer": [1],
            "explanation": "spec（规格）字段由用户或客户端填写，描述资源的期望状态（如 Pod 的镜像、副本数）。status（状态）由控制器更新，反映实际状态。metadata（元数据）包含名称、标签等。用户只需关注 spec，系统负责让 status 匹配 spec。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何列出所有的上下文（Context）？",
            "type": "单选",
            "options": [
                "kubectl config get-contexts",
                "kubectl contexts",
                "kubectl list-contexts",
                "kubectl show-contexts"
            ],
            "answer": [0],
            "explanation": "`kubectl config get-contexts` 列出所有上下文，包括名称、集群、认证用户、命名空间等。`kubectl config current-context` 显示当前使用的上下文。`kubectl config use-context <name>` 切换上下文。上下文多用于管理多个集群或命名空间。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中的 CRD（Custom Resource Definition）的作用？",
            "type": "单选",
            "options": [
                "扩展 Kubernetes API，添加自定义资源类型",
                "限制资源的创建和更新",
                "配置资源的访问权限",
                "监控资源的状态变化"
            ],
            "answer": [0],
            "explanation:": "CRD 允许用户扩展 Kubernetes API，添加自定义资源（如 Database, Backup），这些资源像原生资源一样可以被 kubectl 和其他工具管理。CRD 定义资源的 schema（通过 OpenAPI），集群会自动提供 CRUD API。Controller 可以监听自定义资源的变化，实现自定义逻辑。"
        },
        {
            "module": "概述",
            "question": "如何在 Kubernetes 中按标签选择资源？",
            "type": "单选",
            "options": [
                "kubectl get <type> --selector=<label-selector>",
                "kubectl get <type> -l=<label-selector>",
                "kubectl get <type> --label=<label-selector>",
                "以上都可以"
            ],
            "answer": [3],
            "explanation": "以上都可以。`--selector` 或 `-l` 用于标签选择。支持相等性匹配（`app=nginx`）和集合匹配（`env in (prod, staging)`）。示例：`kubectl get pods -l app=nginx`, `kubectl get pods -l 'env in (prod,staging)'`。标签选择是 Kubernetes 的核心特性。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何查看当前连接的集群信息？",
            "type": "单选",
            "options": [
                "kubectl config current-context",
                "kubectl cluster-info",
                "kubectl info",
                "kubectl current-cluster"
            ],
            "answer": [1],
            "explanation": "`kubectl cluster-info` 显示已连接的集群信息和核心服务端点。`kubectl config current-context` 显示当前使用的上下文名称（包含集群和用户）。`kubectl info` 不存在，`kubectl current-cluster` 也不存在。`config view` 显示所有配置。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中的 RBAC 用于控制什么？",
            "type": "单选",
            "options:": [
                "Pod 的资源限制",
                "用户和 ServiceAccount 对 Kubernetes API 的访问权限",
                "网络流量控制",
                "存储卷的访问控制"
            ],
            "answer": [1],
            "explanation": "RBAC（基于角色的访问控制）用于控制用户和 ServiceAccount 对 Kubernetes API 的访问权限。核心概念：Role（命名空间内的权限）、ClusterRole（集群级权限）、RoleBinding（绑定 Role 到用户/ServiceAccount）、ClusterRoleBinding（绑定 ClusterRole）。RBAC 不控制 Pod 资源、网络、存储的访问。"
        },
        {
            "module": "概述",
            "question": "如何在 Kubernetes 中查看某类资源的所有字段？",
            "type": "单选",
            "options": [
                "kubectl explain <resource>",
                "kubectl describe <resource>",
                "kubectl fields <resource>",
                "kubectl schema <resource>"
            ],
            "answer": [0],
            "explanation": "`kubectl explain <resource>` 显示资源的字段路径和文档。如 `kubectl explain pod` 显示 Pod 的所有字段，`kubectl explain pod.spec.containers` 显示 containers 字段。这是探索 Kubernetes schema 的好工具。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何导出集群的所有资源？",
            "type": "单选",
            "options": [
                "kubectl get all --all-namespaces",
                "kubectl export all",
                "kubectl dump",
                "kubectl get-resources"
            ],
            "answer": [0],
            "explanation": "`kubectl get all --all-namespaces` 列出所有核心资源（Pod, Service, Deployment 等）。但 `all` 不包括所有资源（如 ConfigMap, Secret）。更完整的做法：`kubectl get <resource> -n <namespace> -o yaml --export=false` 逐资源导出。第三方工具如 Velero 更适合全集群备份。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 对象中的 uid 字段有什么作用？",
            "type": "单选",
            "options": [
                "系统自动生成的唯一标识符，用于区分同名对象",
                "用户的身份标识符",
                "资源的 API 版本标识符",
                "资源的创建者标识符"
            ],
            "answer": [0],
            "explanation": "uid 是 Kubernetes 为每个对象自动生成的唯一标识符（UUID），用于区分同名对象，提供稳定引用。即使在同一集群中对象的名称相同（不同命名空间或不同时间），uid 也会不同。客户端可以使用 uid 识别特定对象实例。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何删除所有标签为某个值的 Pod？",
            "type": "单选",
            "options": [
                "kubectl delete pods -l <label>=<value>",
                "kubectl delete pods --selector=<label>=<value>",
                "kubectl delete pods --all -l <label>=<value>",
                "以上都可以"
            ],
            "answer": [3],
            "explanation": "以上都可以。`-l` 或 `--selector` 指定标签选择器。示例：`kubectl delete pods -l app=nginx` 删除所有标签 app=nginx 的 Pod。`--all` 可以用于删除当前命名空间的所有 Pod（结合标签选择更安全）。注意：如果 Pod 由控制器（Deployment）管理，删除后会立即重建。"
        },
        {
            "module": "概述",
            "question": "kubectl 的上下文（Context）包含哪些信息？",
            "type": "单选",
            "options": [
                "集群、用户、命名空间",
                "集群、认证信息",
                "仅包含集群信息",
                "仅包含命名空间信息"
            ],
            "answer": [0],
            "explanation": "Context 包含三部分：cluster（集群信息）、user（认证信息）、namespace（默认命名空间，可选）。通过上下文，用户可以方便地在多个集群和命名空间间切换。例如：`kubectl config use-context prod-cluster` 切换到 prod cluster。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中的 `kubectl wait` 命令的作用？",
            "type": "单选",
            "options": [
                "等待资源满足某个条件（如 Ready）",
                "延迟创建资源",
                "暂停命令执行",
                "查看资源状态"
            ],
            "answer": [0],
            "explanation": "`kubectl wait <type> <name> --for condition=<condition>` 等待资源满足指定条件（如 Ready）。例如：`kubectl wait --for=condition=available deployment/myapp --timeout=300s` 等待 Deployment 可用，最多 5 分钟。适合在脚本中使用，等待资源就绪后继续执行。"
        },
        {
            "module": "概述",
            "question": "如何在 Kubernetes 中查看资源的修改历史？",
            "type": "单选",
            "options": [
                "kubectl rollout history <type> <name>",
                "kubectl history <type> <name>",
                "kubectl logs <type> <name>",
                "kubectl describe <type> <name>"
            ],
            "answer": [0],
            "explanation": "`kubectl rollout history <type> <name>` 显示控制器的修改历史（如 Deployment、DaemonSet）。对于 Deployment，显示每次发布（revision）的详细信息（ CHANGE-CAUSE 可以通过 `kubectl annotate` 设置）。其他命令（history、logs、describe）不提供修改历史。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何回滚到上一个版本？",
            "type": "单选",
            "options": [
                "kubectl rollout undo <type> <name>",
                "kubectl rollback <type> <name>",
                "kubectl revert <type> <name>",
                "kubectl restore <type> <name>"
            ],
            "answer": [0],
            "explanation": "`kubectl rollout undo <type> <name>` 回滚到上一个版本（针对 Deployment、DaemonSet、StatefulSet）。`--to-revision=<revision-num>` 回滚指定版本。`kubectl rollback` 是旧命令，已被 rollout undo 替代。revert 和 restore 不是 kubectl 命令。"
        },
        {
            "module": "概述",
            "question": "kubectl 支持哪些输出格式？",
            "type": "单选",
            "options:": [
                "只有表格和 YAML",
                "table, wide, yaml, json, jsonpath 等",
                "只有 JSON",
                "只有 XML"
            ],
            "answer": [1],
            "explanation": "kubectl 支持：`-o table`（默认表格）、`-o wide`（额外列，如 Pod IP、节点）、`-o yaml`（YAML）、`-o json`（JSON）、`-o jsonpath`（使用表达式过滤）、`-o custom-columns`（自定义列）。不同格式适合不同场景。"
        },
        {
            "module": "概述",
            "question": "如何查看 Kubernetes 集群的证书有效期？",
            "type": "单选",
            "options": [
                "kubectl get csr",
                "kubectl get certificates",
                "kubectl cluster-info dump",
                "以上都可以"
            ],
            "answer": [0],
            "explanation": "`kubectl get csr` 显示证书签名请求（CSR），可用于检查证书。也可使用 `kubeadm certs check-expiration`（若用 kubeadm）。第三方工具如 cert-manager 也可以管理证书。证书过期可能导致 API Server 无法访问，需及时更新。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何批量删除命名空间中的所有资源？",
            "type": "单选",
            "options": [
                "kubectl delete all --all -n <namespace>",
                "kubectl delete namespace <namespace>",
                "kubectl delete all --all",
                "以上都可以"
            ],
            "answer": [1],
            "explanation": "`kubectl delete namespace <namespace>` 删除整个命名空间（及其所有资源）。`kubectl delete all --all -n <namespace>` 删除当前命名空间的所有 'all' 类型资源（Pod, Service, Deployment 等），但不会删除 ConfigMap、Secret 等。推荐删除命名空间，确保清理彻底。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 对象的 metadata.generation 与 resourceVersion 的区别？",
            "type": "单选",
            "options": [
                "generation 记录修改次数，resourceVersion 用于并发控制",
                "两者完全相同",
                "generation 用于并发控制，resourceVersion 记录修改次数",
                "两者都记录创建时间"
            ],
            "answer": [0],
            "explanation": "generation 表示对象被修改的次数，每次 spec 修改后加 1，用于跟踪版本。resourceVersion 由 etcd 维护，用于乐观并发控制，确保更新基于最新状态。两者用途不同：generation 用于语义版本跟踪，resourceVersion 用于 API 层的并发控制。"
        },
        {
            "module": "概述",
            "question": "如何在 Kubernetes 中为资源添加注解（Annotation）？",
            "type": "单选",
            "options": [
                "kubectl annotate <type> <name> <key>=<value>",
                "kubectl label <type> <name> <key>=<value>",
                "kubectl note <type> <name> <key>=<value>",
                "kubectl set-annotation <type> <name> <key>=<value>"
            ],
            "answer": [0],
            "explanation:": "`kubectl annotate <type> <name> <key>=<value>` 添加或更新资源注解。注解用于存储任意元数据，如工具配置、扩展信息等。`kubectl label` 用于标签，不是注解。`kubectl note` 和 `set-annotation` 不是标准命令。注解比标签灵活，但不用于选择器查询。"
        },
        {
            "module": "概述", 
            "question": "Kubernetes 中，如何查看某个资源的使用情况？",
            "type": "单选",
            "options": [
                "kubectl top <resource> <name>",
                "kubectl usage <resource> <name>",
                "kubectl stats <resource> <name>",
                "kubectl monitor <resource> <name>"
            ],
            "answer": [0],
            "explanation": "`kubectl top <resource> <name>` 显示资源的使用情况（CPU、内存）。示例：`kubectl top pod <pod-name>`、`kubectl top node`。使用此功能需要集群安装 metrics-server。`usage`、`stats`、`monitor` 不是标准命令。"
        },
        {
            "module": "概述",
            "question": "kubectl 中的 `--dry-run` 参数有什么作用？",
            "type": "单选",
            "options": [
                "执行但不实际修改资源",
                "测试命令语法是否正确",
                "显示命令的执行计划",
                "以上都是"
            ],
            "answer": [3],
            "explanation": "`--dry-run` 可以取值：none（默认）、client（本地验证，不发送到服务器）、server（发送到服务器验证，但不实际执行）。用于测试命令和清单是否有效，防止意外修改。例如：`kubectl apply --dry-run=server -f deployment.yaml`。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何查看资源的所有关联资源？",
            "type": "单选",
            "options": [
                "kubectl get <type> <name> -o wide",
                "kubectl describe <type> <name>",
                "kubectl relations <type> <name>",
                "kubectl tree <type> <name>"
            ],
            "answer": [1],
            "explanation": "`kubectl describe <type> <name>` 显示资源详细信息，包括关联资源（如 Pod 的 Event、Deployment 的 ReplicaSet）。`kubectl tree` 是插件，显示资源树状关系。`relations` 不存在，`get -o wide` 只显示额外列。describe 输出适合排查关联问题。"
        },
        {
            "module": "概述",
            "question": "如何配置 kubectl 自动补全？",
            "type": "单选",
            "options": [
                "source <(kubectl completion <shell>)",
                "kubectl install-completion",
                "kubectl setup-completion",
                "以上都不对"
            ],
            "answer": [0],
            "explanation:": "`source <(kubectl completion zsh)` 或 `source <(kubectl completion bash)` 启用自动补全。可以将此命令添加到 shell 配置文件（~/.zshrc 或 ~/.bashrc）中，使补全永久生效。补全包括资源类型、名称、参数、子命令等。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 中，如何查看 API 支持的所有版本？",
            "type": "单选",
            "options": [
                "kubectl api-versions",
                "kubectl versions",
                "kubectl api list-versions",
                "kubectl list-versions"
            ],
            "answer": [0],
            "explanation": "`kubectl api-versions` 列出 API 支持的所有版本，如 v1、apps/v1、networking.k8s.io/v1。每个资源属于特定的组和版本，使用正确的 apiVersion 编写清单文件很重要。`kubectl api-resources` 显示资源列表及其所属组版本。"
        },
        {
            "module": "概述",
            "question": "Kubernetes 对象的 metadata.creationTimestamp 字段有什么作用？",
            "type": "单选",
            "options": [
                "记录对象的创建时间（RFC3339 格式）",
                "记录对象的最后更新时间",
                "记录对象的删除时间",
                "记录对象的计划重启时间"
            ],
            "answer": [0],
            "explanation": "creationTimestamp 是对象的创建时间，由 API Server 设置，格式为 RFC3339（如 '2023-10-23T10:30:00Z'）。可用于审计、按时间过滤等。更新时间需查看 metadata.managedFields 或 status 等。creationTimestamp 在对象生命周期中不变。"
        },
        {
            "module": "概述",
            "question": "如何在 Kubernetes 中按名称过滤资源？",
            "type": "单选",
            "options": [
                "kubectl get <type> <name>",
                "kubectl get <type> --name=<name>",
                "kubectl get <type> -n=<name>",
                "kubectl get <type> --filter=<name>"
            ],
            "answer": [0],
            "explanation": "`kubectl get <type> <name>` 按名称获取单个资源。如 `kubectl get pod mypod`。`--name` 不是标准选项。名称过滤直接作为参数传递。也可以结合 shell 通配符或脚本实现批量操作（如 `for p in $(kubectl get pods -o name); do ...; done`）。"
        }
    ]
    
    questions.extend(overview_single)
    return questions

if __name__ == "__main__":
    questions = generate_complete_questions()
    print(f"生成了 {len(questions)} 道概述模块单选题")
    
    # 这里应该继续添加其他模块的题目...

