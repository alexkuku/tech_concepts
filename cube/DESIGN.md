# CubeSandbox 学习站 · 设计与写作规范

本目录是一个纯静态、零依赖的中文学习网站。所有页面共享 `styles.css` 与 `navigation.js`，可直接双击 HTML 打开，也可用任意静态服务器预览。

## 1. 目标读者与写作目标

读者是希望**从入门到掌握 CubeSandbox** 的工程师。每页都要帮助读者：

1. 建立**概念模型**（是什么、为什么、和其他概念什么关系）；
2. 形成**可操作记忆**（命令、配置、参数、判断条件）；
3. 能**迁移应用**（遇到问题时知道查哪一节、用什么指标/命令定位）。

写作原则：

- 中文撰写，专有名词保留英文原文（如 MicroVM、CubeCoW、PVM、CubeVS、CubeEgress、Volume、Snapshot、Clone、Rollback）。
- **提炼而非照搬**：官方文档的长段落要压缩成结论、清单、表格、流程图；保留关键命令、参数、默认值、限制条件。
- 先给结论，再解释机制；先画关系，再展开细节。
- 不编造事实。源文档没有的内容不要补；不确定的内容标注“以官方文档为准”。
- 每页至少包含：一张架构/流程图、2 张以上表格、一个“易错点/最佳实践”区块、一个“记忆卡片”或自测区块。

## 2. 页面骨架

复制 `_template.html`，替换标题、导语、TOC 与 section。必须保留：

- `<div id="reading-progress"></div>`
- 标准 header（Cube logo + 标题 + 副标题 + badges）
- 标准分组导航（`nav-groups` 内 5 个分组 + 首页）
- `page-hero`（含 badge、h1、导语、page-meta）
- `toc`（本节导航，锚点指向各 section）
- 多个 `<section class="concept-section" id="...">`
- `<div id="page-pager" class="page-pager"></div>`
- footer 与 `<button id="back-to-top">`
- 只引用 `styles.css` 与 `navigation.js`，不要引入任何 CDN、字体、JS 框架。

## 3. 可用组件速查

### 3.1 表格

```html
<div class="table-wrap">
  <table>
    <thead><tr><th>列 1</th><th>列 2</th></tr></thead>
    <tbody><tr><td>值</td><td><code>命令</code></td></tr></tbody>
  </table>
</div>
```

也可用 `comparison-table`、`cmd-table`（深色表头）、`glossary-table`、`feature-table`、`matrix-table`、`table-compact`。宽表必须包 `.table-wrap`。

### 3.2 架构图 / 分层图

```html
<div class="arch-diagram">
  <div class="arch-label">控制面</div>
  <div class="arch-layer">
    <div class="arch-box control">CubeAPI<small>E2B 兼容层</small></div>
    <div class="arch-box control">CubeMaster<small>调度</small></div>
  </div>
  <div class="arch-connector">↓ gRPC</div>
  <div class="arch-layer">
    <div class="arch-box compute">Cubelet</div>
  </div>
</div>
```

配色类：`control`（蓝）、`compute`（青）、`data`（紫）、`network`（琥珀）、`security`（红）、`storage`（绿）、`obs`（灰蓝）、`primary`（深蓝渐变）、`accent`（蓝渐变）、`teal`、`dashed`、`wide`、`tall`。

### 3.3 横向流程

```html
<div class="h-diagram">
  <div class="arch-box">请求</div>
  <div class="diagram-arrow">→</div>
  <div class="arch-box accent">CubeProxy</div>
  <div class="diagram-arrow">→</div>
  <div class="arch-box">沙箱</div>
</div>
```

### 3.4 纵向流程

```html
<div class="flow-diagram">
  <div class="flow-step"><b>步骤 1</b>：……</div>
  <div class="flow-arrow">↓</div>
  <div class="flow-step"><b>步骤 2</b>：……</div>
</div>
```

### 3.5 状态机

```html
<div class="state-machine">
  <span class="state pending">pending</span>
  <span class="diagram-arrow">→</span>
  <span class="state running">running</span>
  <span class="diagram-arrow">→</span>
  <span class="state paused">paused</span>
  <span class="diagram-arrow">→</span>
  <span class="state dead">dead</span>
</div>
```

### 3.6 时间线

```html
<div class="timeline">
  <div class="timeline-item done"><h4>创建沙箱</h4><p>……</p></div>
  <div class="timeline-item"><h4>运行</h4><p>……</p></div>
</div>
```

### 3.7 分层条

```html
<div class="layer-stack">
  <div class="layer accent"><span class="layer-tag">入口</span><div class="layer-body"><span>CubeProxy</span><span>Ingress</span></div></div>
  <div class="layer"><span class="layer-tag">计算</span><div class="layer-body"><span>Cubelet</span><span>CubeShim</span></div></div>
</div>
```

### 3.8 卡片 / 统计

```html
<div class="card-grid">
  <div class="card"><span class="icon">⚡</span><h3>标题</h3><p>说明</p></div>
</div>

<div class="stat-grid">
  <div class="stat"><div class="stat-value">41ms</div><div class="stat-label">单并发冷启动</div></div>
</div>
```

### 3.9 提示框

`note`（蓝）、`info`（浅蓝）、`tip`（青）、`success`（绿）、`warning`（琥珀）、`danger`（红）。

### 3.10 记忆卡片与自测

```html
<div class="memory-grid">
  <div class="memory-card"><b>一句话</b>……</div>
</div>

<div class="quiz">
  <h4>自测</h4>
  <details><summary>问题？</summary><p>答案。</p></details>
</div>
```

### 3.11 决策卡

```html
<div class="decision">
  <div class="decision-card"><span class="badge badge-primary">场景 A</span><h4>选 PVM</h4><p>……</p></div>
</div>
```

### 3.12 代码块

```html
<pre><code><span class="c"># 注释</span>
kubectl get pods -n cube-system</code></pre>
```

不要对 HTML 做转义以外的处理；代码中的 `<`、`>`、`&` 必须转义。

## 4. 图表要求

- 每页至少 1 个架构/流程图，优先用上面的 CSS 组件。
- 概念之间的关系用 `.arch-diagram` 或 `.relation-diagram` 画出来，不要只写文字。
- 表格用于并列对比、参数速查、错误码、默认值、限制条件。
- 时序类内容用 `.timeline`；状态迁移用 `.state-machine`；分层用 `.layer-stack`。
- 图里的文字要短，一行不超过 18 个汉字；复杂图拆成多张。

## 5. 页面清单与源文件映射

所有源文件位于 `/tmp/cube-docs/guide/...`。

| 输出页面 | 源文件 |
|---|---|
| `intro.html` | introduction, quickstart, e2b-compatibility |
| `deploy-basic.html` | pvm-deploy, bare-metal-deploy, self-build-deploy, multi-node-deploy |
| `k8s.html` | kubernetes/index, install, architecture, upgrade, faq |
| `deploy-cloud.html` | tencentcloud-terraform-deploy, offline-deploy, dev-environment, downloads |
| `concepts.html` | lifecycle, webhooks, qos, templates |
| `snapshots.html` | snapshot-rollback-clone, cross-node-snapshot/* |
| `templates.html` | tutorials/template-from-image, bring-your-own-image, template-from-sandbox, prewarm-template-service, template-build-practice, environment-variables, template-aliases, mcp-gateway |
| `tutorials.html` | tutorials/examples, tutorials/sdk/python, go, nodejs |
| `network.html` | network-policy, route-aware-egress, sandbox-to-sandbox, restrict-public-access, https-and-domain |
| `security.html` | security-proxy, authentication, network-hardening |
| `storage.html` | volume, volume-plugin |
| `operations.html` | webui, cli-tools, node-operations, service-management, cubemaster-scheduler-config, scheduler-plugin, soft-delete-purge, component-multiversion, redis-cluster |
| `observability.html` | observability, sandbox-logs, tracing, performance-benchmark |
| `metrics.html` | cubeproxy-metrics, resource-metrics, network-metrics |
| `troubleshooting.html` | troubleshooting/index, deployment, templates, local-network-cidr-conflict, host-mount-permissions, component-log-locations |

## 6. 章节编号与导航

页面顺序（nav 中已固定）：

01 入门 · 02-04 部署 · 05-07 核心概念 · 08-11 开发接入 · 12-15 运维与观测

每页 `page-hero` 的 badge 写对应章节号；`page-meta` 标注预计阅读时间、难度、覆盖的官方页面数。

## 7. 质量检查清单

- [ ] 所有命令可复制，参数与默认值准确。
- [ ] 表格没有超宽溢出（外层有 `.table-wrap`）。
- [ ] 每页有 TOC，锚点与 section id 一一对应。
- [ ] 每页有上一节/下一节（由 `#page-pager` 自动生成）。
- [ ] 没有外部资源请求。
- [ ] 中文标点统一，代码内保持原样。
- [ ] 至少一张表、一张图、一个易错点区块、一个记忆卡片/自测。
