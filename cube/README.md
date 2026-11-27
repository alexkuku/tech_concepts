# CubeSandbox 中文学习站

把 [CubeSandbox 官方中文文档](https://cubesandbox.com/zh/guide/introduction) 从「入门」到「可观测性与性能」的 **69 个页面**重新组织成 **15 章**，用表格与架构图讲清核心概念、部署路径、生命周期原语、网络与存储、以及运维观测。

## 打开方式

直接双击 `index.html` 即可（纯静态、零依赖、无需联网）。

如果希望用本地服务器预览：

```bash
cd cube
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000
```

## 页面结构

| 阶段 | 章节 | 页面 | 核心内容 |
|---|---|---|---|
| 入门 | 01 | `intro.html` | 产品定位、MicroVM 架构、E2B 兼容、快速开始 |
| 部署 | 02 | `deploy-basic.html` | PVM、裸金属、源码构建、多机集群 |
| 部署 | 03 | `k8s.html` | K8s 分层架构、Helm 安装、升级、FAQ |
| 部署 | 04 | `deploy-cloud.html` | 腾讯云 Terraform、离线部署、QEMU 开发环境、下载 |
| 核心概念 | 05 | `concepts.html` | 生命周期状态机、Webhook、QoS、模板概念 |
| 核心概念 | 06 | `snapshots.html` | Snapshot / Clone / Fork / Rollback、跨机迁移 |
| 核心概念 | 07 | `templates.html` | OCI 模板、BYOI、预热、环境变量、别名、MCP |
| 开发接入 | 08 | `tutorials.html` | 示例项目、Python / Go / Node.js SDK |
| 开发接入 | 09 | `network.html` | 出网策略、路由感知、沙箱互访、HTTPS 域名 |
| 开发接入 | 10 | `security.html` | CubeEgress、API 鉴权、网络加固 |
| 开发接入 | 11 | `storage.html` | Volume 双角色、插件协议、生命周期 |
| 运维观测 | 12 | `operations.html` | WebUI、CLI、节点、服务、调度、Redis |
| 运维观测 | 13 | `observability.html` | CubeObservability、日志、链路追踪 |
| 运维观测 | 14 | `metrics.html` | 请求 / 资源 / 网络三类指标与 PromQL |
| 运维观测 | 15 | `troubleshooting.html` | 排障方法论、日志位置、CIDR / 权限问题 |

首页 `index.html` 提供五阶段学习路径、五域知识地图、核心架构总览、概念关系网、术语速查与自测。

## 推荐学习路线

- **15 分钟速览**：首页 → 第 01 章 → 每章开头的架构图。
- **半天动手**：01 → 02 → 05 → 06 → 07 → 08，完成「部署 → 建模板 → 建沙箱 → 快照 → SDK 调用」闭环。
- **一周精通**：01 → 15 顺序精读，每章完成记忆卡片与自测。

## 技术说明

- 纯 HTML + CSS + 原生 JS，无构建步骤、无 CDN、无外部字体。
- 共享 `styles.css`（组件与响应式）与 `navigation.js`（分组导航、上下页、阅读进度）。
- 已适配 320px / 390px / 768px / 1440px 宽度，无页面级横向滚动；宽表格在 `.table-wrap` 内横向滚动。
- 支持打印样式（自动隐藏导航与页脚）。

## 内容来源与声明

- 内容提炼自 `cubesandbox.com/zh/guide/*` 官方中文文档（抓取时间：2026-11-27）。
- 性能数字（如 41ms 冷启动、92.4ms / P95 121.9ms、512/s 吞吐）来自官方在特定裸金属环境的 CubeBench 实测，仅用于建立量级直觉，生产选型请以实际环境为准。
- 官方 `e2b-compatibility` 中文页当前只有 frontmatter、没有正文；第 01 章已标注版本口径差异（2.51.0+ vs 1.0.0–2.62.0），具体以官方兼容矩阵为准。
- 部分源文档存在前后不一致或缺失（各章末尾与子代理报告中已标注），页面以「以官方文档为准」的方式保留边界。

## 目录结构

```
cube/
├── index.html              # 首页：学习路径 + 知识地图 + 架构总览
├── navigation.js           # 分组导航 / 上下页 / 阅读进度
├── styles.css              # 全站样式与图表组件
├── DESIGN.md               # 设计与写作规范
├── _template.html         # 页面模板（不参与导航）
├── intro.html ... troubleshooting.html   # 15 个章节页
└── README.md
```

## 维护方式

新增章节时：

1. 复制 `_template.html` 为新页面，保留 header / nav / page-pager / footer 骨架。
2. 在 `navigation.js` 的 `PAGES` 与 `GROUPS` 中登记新页面和分组。
3. 在各页面顶部分组导航中补充对应链接（当前为静态 HTML，需同步修改）。
4. 运行仓库外的链接检查脚本或手动检查页内锚点。

## 自测

每章末尾都有「记忆卡片 + 3 道自测题」。建议合上文档先复述，再展开答案；答不出来的回到对应章节的架构图与命令表。
