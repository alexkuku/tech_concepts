# Kubernetes 概念测评系统 - 题目存储格式规范

> 本文档定义了测评系统中题目文件的存储格式标准。所有版本的题目文件（v1, v2 等）都必须遵循此规范。

---

## 📋 目录

1. [文件结构](#文件结构)
2. [文件命名](#文件命名)
3. [题目对象格式](#题目对象格式)
4. [字段说明](#字段说明)
5. [完整示例](#完整示例)
6. [格式规范](#格式规范)
7. [注意事项](#注意事项)
8. [校验工具](#校验工具)

---

## 文件结构

### 文件位置
```
exam/question/{版本}/questions.js
```

- `{版本}`：版本号，如 `v1`, `v2`, `v3` 等
- `questions.js`：主题目文件（固定名称）

### 文件内容结构
```javascript
// 文件头注释
// 描述信息
const questions = [
    // 题目对象数组
    ...
];

const modules = [...new Set(questions.map(q => q.module))];
```

---

## 文件命名

### 命名规则
- 必须使用 `questions.js` 作为文件名
- 位置必须在版本目录下：`question/{版本}/questions.js`
- 示例：
  - `question/v1/questions.js`
  - `question/v2/questions.js`

### 版本命名
- 使用字母 `v` 加数字（v1, v2, v3...）
- 数字表示版本顺序
- 例如：
  - `v1`：初始版本
  - `v2`：第一个更新版本
  - `v3`：第二个更新版本

---

## 题目对象格式

### 单选题格式
```javascript
{
    module: "模块名称",
    question: "题目内容",
    type: "单选",
    options: ["选项1", "选项2", "选项3", "选项4"],
    answer: [0],
    explanation: "题目解析"
}
```

### 多选题格式
```javascript
{
    module: "模块名称",
    question: "题目内容",
    type: "多选",
    options: ["选项1", "选项2", "选项3", "选项4"],
    answer: [0, 1, 2],
    explanation: "题目解析"
}
```

---

## 字段说明

### 必填字段

| 字段名 | 类型 | 说明 | 示例 | 是否必需 |
|--------|------|------|------|----------|
| `module` | String | 题目所属模块 | `"概述"`, `"容器"` | ✅ 必需 |
| `question` | String | 题目内容 | "Kubernetes 的核心设计目标是什么？" | ✅ 必需 |
| `type` | String | 题目类型 | `"单选"` 或 `"多选"` | ✅ 必需 |
| `options` | Array | 选项列表 | `["选项1", "选项2", ...]` | ✅ 必需 |
| `answer` | Array | 正确答案的索引数组 | `[0]` 或 `[0, 1, 2]` | ✅ 必需 |
| `explanation` | String | 题目解析 | 详细解析内容 | ✅ 必需 |

### 可选字段

| 字段名 | 类型 | 说明 | 示例 |
|--------|------|------|------|
| `difficulty` | String | 难度等级 | `"基础"`, `"进阶"`, `"高级"` |

### 字段详细说明

#### 1. `module`（模块名称）
- **类型**：String
- **作用**：标识题目所属的知识模块
- **可选值**：
  - `"概述"`
  - `"集群架构"`
  - `"容器"`
  - `"工作负载"`
  - `"网络"`
  - `"存储"`
  - `"配置"`
  - `"调度"`
  - `"集群管理"`
- **注意**：必须使用上述9个固定名称之一

#### 2. `question`（题目内容）
- **类型**：String
- **作用**：问题的完整文本
- **要求**：
  - 使用中文
  - 可以包含英文专有名词（如 Pod、Service、Deployment）
  - 不能包含 `"`（中文双引号）或 `\``（反引号）
- **示例**：
  ```javascript
  "Kubernetes 的核心设计目标是什么？"
  "Pod 中的容器共享什么资源？"
  ```

#### 3. `type`（题目类型）
- **类型**：String
- **可选值**：`"单选"` 或 `"多选"`
- **要求**：必须是这两个值之一
- **示例**：
  ```javascript
  type: "单选"
  type: "多选"
  ```

#### 4. `options`（选项列表）
- **类型**：Array of String
- **作用**：所有可选项
- **要求**：
  - 至少包含2个选项
  - 最多建议8个选项
  - 推荐3-6个选项
  - 使用中文，可包含英文专有名词
- **注意**：索引从 0 开始（第一个选项索引为 0）

#### 5. `answer`（正确答案）
- **类型**：Array of Number
- **作用**：正确答案的索引数组
- **格式规则**：
  - **单选题**：数组包含一个数字，如 `[0]`, `[2]`
  - **多选题**：数组包含一个或多个数字，如 `[0, 1, 2]`
- **示例**：
  ```javascript
  // 单选题，答案是第1个选项
  answer: [0]

  // 多选题，答案是第0、1、3个选项
  answer: [0, 1, 3]

  // 多选题，答案是所有选项
  answer: [0, 1, 2, 3]
  ```

#### 6. `explanation`（题目解析）
- **类型**：String
- **作用**：解释为什么选这个答案，提供详细说明
- **要求**：
  - 使用中文
  - 必须提供有意义的解析
  - 可以包含示例、命令、最佳实践等
  - **不能包含 `"`（中文双引号）
- **示例**：
  ```javascript
  explanation: "Kubernetes 的核心目标是简化容器的编排，让应用的部署、扩容和管理工作自动化。它不是替代 Docker，而是作为一个容器编排平台工作在这些容器运行时之上。"
  ```

#### 7. `difficulty`（难度等级，可选）
- **类型**：String
- **作用**：标识题目难度
- **可选值**：`"基础"`、`"进阶"`、`"高级"`
- **用途**：未来可以根据难度筛选题目
- **示例**：
  ```javascript
  difficulty: "基础"
  difficulty: "进阶"
  difficulty: "高级"
  ```

---

## 完整示例

### 单选题完整示例
```javascript
{
    module: "概述",
    question: "Kubernetes 的核心设计目标是什么？",
    type: "单选",
    options: [
        "简化容器编排，实现应用的自动化部署、扩展和管理",
        "替代 Docker 成为主要的容器运行时",
        "提供一个完全托管云服务的解决方案",
        "创建一个虚拟机编排平台"
    ],
    answer: [0],
    explanation: "Kubernetes 的核心目标是简化容器的编排，让应用的部署、扩容和管理工作自动化。它不是替代 Docker，而是作为一个容器编排平台工作在这些容器运行时之上。",
    difficulty: "基础"
}
```

### 多选题完整示例
```javascript
{
    module: "容器",
    question: "Pod 中的容器共享什么资源？",
    type: "多选",
    options: [
        "网络命名空间（IP 地址、端口）",
        "存储卷（Volume）",
        "进程命名空间（可以看到彼此的进程）",
        "UTS 命名空间（hostname）"
    ],
    answer: [0, 1, 3],
    explanation: "Pod 中的容器共享网络命名空间（同一个 IP 和端口空间）、存储卷（可以共享数据）和 UTS 命名空间（相同的 hostname）。但它们默认不共享进程命名空间（彼此看不到进程），除非使用 shareProcessNamespace 特性。这种共享机制使得 Pod 内的容器能够进行紧密的协作。",
    difficulty: "进阶"
}
```

### 完整文件示例
```javascript
// Kubernetes 概念测评题目库
// 版本: v1
// 生成日期: 2026-04-13
// 题目总数: 412
// 覆盖模块: 概述、集群架构、容器、工作负载、网络、存储、配置、调度、集群管理

const questions = [
    {
        module: "概述",
        question: "Kubernetes 的核心设计目标是什么？",
        type: "单选",
        options: [
            "简化容器编排，实现应用的自动化部署、扩展和管理",
            "替代 Docker 成为主要的容器运行时",
            "提供一个完全托管云服务的解决方案",
            "创建一个虚拟机编排平台"
        ],
        answer: [0],
        explanation: "Kubernetes 的核心目标是简化容器的编排，让应用的部署、扩容和管理工作自动化。"
    },
    {
        module: "概述",
        question: "Kubernetes 集群由哪两个主要组件组成？",
        type: "单选",
        options: [
            "API Server 和 Kubelet",
            "控制平面和工作节点",
            "Scheduler 和 Controller Manager",
            "etcd 和 Docker"
        ],
        answer: [1],
        explanation: "Kubernetes 集群由控制平面（Control Plane，也称 Master 节点）和工作节点（Worker Nodes）组成。"
    },
    {
        module: "容器",
        question: "Pod 中的容器共享什么资源？",
        type: "多选",
        options: [
            "网络命名空间（IP 地址、端口）",
            "存储卷（Volume）",
            "进程命名空间（可以看到彼此的进程）",
            "UTS 命名空间（hostname）"
        ],
        answer: [0, 1, 3],
        explanation: "Pod 中的容器共享网络命名空间和存储卷，但默认不共享进程命名空间。"
    }
];

const modules = [...new Set(questions.map(q => q.module))];
```

---

## 格式规范

### 代码风格
1. **缩进**：使用4个空格缩进（不要使用 tab）
2. **引号**：所有字符串使用英文双引号 `"`
3. **对象属性**：使用简写属性 `{module: "..."}` 而不是 `{module: "..."}` （不使用引号包裹属性名）
4. **数组元素**：最后一个元素后不要有逗号
5. **模块选择器排序**：`modules` 数组必须按字典序排序

### 命名规范
1. **文件头注释**（可选但推荐）
   ```javascript
   // Kubernetes 概念测评题目库
   // 版本: v1
   // 生成日期: YYYY-MM-DD
   // 题目总数: XXX
   // 覆盖: 所有模块列表
   ```

2. **模块注释**（可选，用于代码可读性）
   ```javascript
   const questions = [
   // ========== 概述模块 (XX题) ==========
       {
           module: "概述",
           ...
       },
   // ========== 集群架构模块 (XX题) ==========
       {
           module: "集群架构",
           ...
       }
   ];
   ```

### 文件末尾规范
```javascript
const questions = [
    // ...题目
];

// 必须有这一行：提取所有唯一模块
const modules = [...new Set(questions.map(q => q.module))];
```

### 禁止事项
❌ **不要在文件末尾添加 `module.exports`**（浏览器不支持）
```javascript
// ❌ 错误
module.exports = { questions, modules };
```

❌ **不要使用中文引号**
```javascript
// ❌ 错误
module: "概述",
question: "这"是什么"  // 中文引号会导致语法错误

// ✅ 正确
module: "概述",
question: "这是什么意思"  // 使用英文引号
```

❌ **不要在字段名使用引号**
```javascript
// ❌ 错误
{"module": "概述", "question": "..."}

// ✅ 正确
{module: "概述", question: "..."}
```

❌ **字段值不要包含 `"`（中文双引号）
```javascript
// ❌ 错误
question: "请选择"正确"的答案"  // 包含中文双引号

// ✅ 正确
question: "请选择正确的答案"
```

✅ **模块名称必须使用指定的9个名称**
- 概述
- 集群架构
- 容器
- 工作负载
- 网络
- 存储
- 配置
- 调度
- 集群管理

---

## 注意事项

### 1. 索引规则
- `options` 数组的索引从 0 开始
- `answer` 数组中的数字对应 `options` 的索引
- 例如：`answer: [0, 1]` 表示第1个和第2个选项正确

### 2. 单选 vs 多选
- **单选题**：`type: "单选"`，`answer` 数组只包含1个数字
- **多选题**：`type: "多选"`，`answer` 数组包含1个或多个数字
- 所有选项都可能是答案（全选）

### 3. 选项数量
- 单选：推荐4个选项（A/B/C/D）
- 多选：推荐4-6个选项
- 最少2个选项，最多建议8个

### 4. 模块分类
- 必须使用9个固定模块名称
- 不要创建新的模块名称
- 如果题目跨多个模块，选择主模块进行分类

### 5. 字符编码
- 文件必须使用 UTF-8 编码
- 可以包含中英文混合文本
- 专有名词使用原文（如 Pod、Deployment、Service）

### 6. JSON 兼容性
- 本格式不是标准的 JSON（JavaScript 对象格式）
- 不支持注释（在对象内部）
- 不能使用尾随逗号

---

## 校验工具

### 1. JavaScript 语法校验
使用 Node.js 检查语法：
```bash
node -c question/v1/questions.js
```
如果没有任何输出，说明语法正确。

### 2. 浏览器测试
```html
<script src="question/v1/questions.js"></script>
<script>
if (questions && modules) {
    console.log('✓ 文件正确');
    console.log('题目数:', questions.length);
    console.log('模块数:', modules.length);
} else {
    console.error('✗ 文件错误');
}
</script>
```

### 3. 简单校验脚本
创建校验脚本 `validate.js`：
```javascript
const fs = require('fs');

// 读取文件
const content = fs.readFileSync('./question/v1/questions.js', 'utf8');

try {
    // 评估代码（全局作用域）
    eval(content);

    // 检查必需变量
    if (typeof questions === 'undefined') {
        console.error('✗ questions 变量未定义');
        process.exit(1);
    }
    if (typeof modules === 'undefined') {
        console.error('✗ modules 变量未定义');
        process.exit(1);
    }

    // 检查类型
    if (!Array.isArray(questions)) {
        console.error('✗ questions 不是数组');
        process.exit(1);
    }
    if (!Array.isArray(modules)) {
        console.error('✗ modules 不是数组');
        process.exit(1);
    }

    // 检查每个题目
    let errors = 0;
    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const prefix = `题目 ${i+1}: `;

        // 检查必需字段
        if (!q.module) {
            console.error(prefix + '缺少 module 字段');
            errors++;
        }
        if (!q.question) {
            console.error(prefix + '缺少 question 字段');
            errors++;
        }
        if (q.type !== '单选' && q.type !== '多选') {
            console.error(prefix + 'type 字段值错误');
            errors++;
        }
        if (!Array.isArray(q.options)) {
            console.error(prefix + 'options 不是数组');
            errors++;
        }
        if (!Array.isArray(q.answer)) {
            console.error(prefix + 'answer 不是数组');
            errors++;
        }
        if (!q.explanation) {
            console.error(prefix + '缺少 explanation 字段');
            errors++;
        }

        // 检查 answer 索引
        for (const idx of q.answer) {
            if (typeof idx !== 'number' || idx < 0 || idx >= q.options.length) {
                console.error(prefix + `answer 索引 ${idx} 超出范围 (0-${q.options.length-1})`);
                errors++;
            }
        }

        // 检查 type 与 answer 长度
        if (q.type === '单选' && q.answer.length !== 1) {
            console.error(prefix + '单选题的 answer 必须包含 1 个索引');
            errors++;
        }
        if (q.type === '多选' && q.answer.length < 1) {
            console.error(prefix + '多选题的 answer 必须包含至少 1 个索引');
            errors++;
        }

        // 检查模块名称
        const validModules = ['概述', '集群架构', '容器', '工作负载', '网络', '存储', '配置', '调度', '集群管理'];
        if (!validModules.includes(q.module)) {
            console.error(prefix + `模块名称无效: "${q.module}"`);
            errors++;
        }
    }

    if (errors === 0) {
        console.log('✅ 文件格式正确');
        console.log('题目总数:', questions.length);
        console.log('模块数量:', modules.length);
        console.log('模块列表:', modules.join(', '));
    } else {
        console.log(`❌ 发现 ${errors} 个错误`);
        process.exit(1);
    }

} catch (e) {
    console.error('✗ 语法错误:', e.message);
    process.exit(1);
}
```

运行校验：
```bash
node validate.js
```

---

## 版本变更流程

### 创建新版本
1. 创建新版本目录：`question/v2/`
2. 创建 `question/v2/questions.js`
3. 按本规范添加题目
4. 运行校验确保格式正确
5. 更新 `version-config.js`：
   ```javascript
   versions: {
       'v1': { /* v1 信息 */ },
       'v2': {
           name: 'v2',
           description: '扩展版本',
           questionFile: 'question/v2/questions.js',
           createdDate: '2024-MM-DD',
           questionCount: <实际题数>
       }
   }
   ```
6. 更新 `currentVersion` 为 `'v2'`
7. 刷新浏览器即可使用新版本

### 版本回退
1. 修改 `version-config.js` 的 `currentVersion` 为旧版本号
2. 刷新浏览器

---

## 附录 A: 模块说明

| 模块名称 | 覆盖范围示例 |
|---------|---------------|
| 概述 | Kubernetes 基本概念、架构、设计目标 |
| 集群架构 | Master 节点架构、组件（API Server、Scheduler、etcd 等） |
|容器 | Pod 生命周期、容器运行时、资源限制 |
| 工作负载 | Deployment、StatefulSet、DaemonSet、Job、CronJob、HPA |
| 网络 | Service（ClusterIP、NodePort、LoadBalancer）、Ingress、NetworkPolicy、DNS |
| 存储 | Volume、PV、PVC、StorageClass、快照、动态配置 |
| 配置 | ConfigMap、Secret、探针、资源管理（requests/limits） |
| 调度 | 调度器、亲和性、污点容忍度、优先级抢占 |
|集群管理 | 节点管理、集群升级、监控、日志、备份恢复 |

---

## 附录 B: 常见错误

### ❌ 错误格式示例

**1. 使用中文引号**
```javascript
{
    question: "请选择"正确"的答案"  // ❌ 错误：包含中文双引号
}
```

**2. 属性名加引号**
```javascript
{"module": "概述"}  // ❌ 错误：JSON风格，不推荐
```

**3. 末尾有逗号**
```javascript
    },
];  // ❌ 错误：数组末尾的逗号
```

**4. 单选题多个答案**
```javascript
{
    type: "单选",
    answer: [0, 1]  // ❌ 错误：单选题只能有1个答案
}
```

**5. answer 索引越界**
```javascript
{
    options: ["A", "B", "C"],
    answer: [3]  // ❌ 错误：只有3个选项（索引0-2）
}
```

**6. module.exports**
```javascript
module.exports = { questions, modules };  // ❌ 错误：浏览器不支持
```

### ✅ 正确格式示例

**1. 使用英文引号**
```javascript
{
    question: "请选择正确的答案"  // ✅ 正确
}
```

**2. 属性名不加引号**
```javascript
{
    module: "概述"  // ✅ 正确
}
```

**3. 数组末尾无逗号**
```javascript
]
;  // ✅ 正确
```

**4. 单选题一个答案**
```javascript
{
    type: "单选",
    answer: [1]  // ✅ 正确
}
```

**5. 不使用 module.exports**
```javascript
// 文件末尾不需要导出，浏览器直接读取
```

---

## 更新记录

| 版本 | 日期 | 更新内容 |
|------|------|----------|
| v1.0 | 2024-04-14 | 初始版本，定义基础存储格式 |
