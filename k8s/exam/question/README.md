# Kubernetes 概念测评系统 - 题目版本说明

## 目录结构

```
exam/
├── index.html              # 测评系统主页面
├── exam.css               # 样式文件
├── exam.js                # 主逻辑文件
├── version-config.js      # 版本配置文件
├── config.json            # 配置备份（用于参考）
├── stats.js               # 统计工具
└── question/              # 题目文件目录
    └── v1/               # 版本1
        ├── questions.js   # 主要题目文件（412题）
        ├── questions_*.js # 备份和中间版本
        └── generate_*.js/py  # 生成脚本
```

## 版本管理

### 当前版本：v1
- 题目数量：412题
- 创建日期：2024-04-13
- 描述：初始版本题目集，涵盖9个核心模块
- 文件路径：`question/v1/questions.js`

### 模块分布
- 工作负载：61题（48单 + 13多）
- 集群管理：59题（39单 + 20多）
- 网络：49题（36单 + 13多）
- 存储：49题（38单 + 11多）
- 配置：45题（34单 + 11多）
- 调度：43题（35单 + 8多）
- 概述：37题（23单 + 14多）
- 容器：35题（16单 + 19多）
- 集群架构：34题（21单 + 13多）

## 如何切换题目版本

### 方法一：修改 version-config.js

1. 打开 `version-config.js` 文件
2. 修改 `currentVersion` 字段为所需版本（如 'v1', 'v2'）
3. 确保对应版本的信息存在于 `versions` 对象中
4. 刷新页面即可生效

### 方法二：添加新版本

1. 在 `question/` 目录下创建新版本目录，如 `v2/`
2. 将新版本的题目文件复制到该目录，命名为 `questions.js`
3. 在 `version-config.js` 的 `versions` 对象中添加新版本信息：

```javascript
'v2': {
    name: 'v2',
    description: '新版本题目集',
    questionFile: 'question/v2/questions.js',
    createdDate: '2024-XX-XX',
    questionCount: XXX
}
```

4. 将 `currentVersion` 改为 'v2'
5. 刷新页面即可使用新版本题目

## 版本规范

### 命名规范
- 版本目录：`question/v1/`, `question/v2/`, ...
- 题目文件：每个版本目录下必须包含 `questions.js`
- 配置文件：`version-config.js` 用于版本管理

### 题目文件格式
```javascript
const questions = [
    {
        module: "模块名称",
        question: "题目内容",
        type: "单选" 或 "多选",
        options: ["选项1", "选项2", ...],
        answer: [索引1, 索引2, ...], // 索引数组
        difficulty: "基础" / "进阶" / "高级",
        explanation: "详细解析"
    },
    ...
];

const modules = [...new Set(questions.map(q => q.module))];
```

## 注意事项

1. 每个版本应该有独立的题目文件互不干扰
2. 版本切换时，旧的答题记录会清除
3. 建议在切换版本前备份现有题目文件
4. 题目文件必须导出 `questions` 和 `modules` 两个变量

## 快速参考

### 查看/修改当前版本
```javascript
// 在浏览器控制台检查
QUESTION_VERSION_CONFIG.currentVersion
QUESTION_VERSION_CONFIG.versions['v1'].questionCount
```

### 测试新版本
1. 在 `question/` 下创建测试目录（如 `test/`）
2. 放入测试题目文件
3. 在 `version-config.js` 中临时添加测试版本
4. 测试完成后删除或移到正式版本目录

## 技术支持

如遇问题，请检查：
1. `version-config.js` 文件是否正确加载
2. 题目文件路径是否正确
3. 题目文件格式是否符合要求
4. 浏览器控制台是否有错误信息
