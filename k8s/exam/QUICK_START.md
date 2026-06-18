# 快速版本切换指南

## 如何切换题目版本（仅需修改1个文件）

### 切换到新版本

1. 打开 `exam/version-config.js` 文件
2. 找到 `currentVersion` 这一行
3. 将值改为你要使用的版本号

```javascript
// 切换到 v2
const QUESTION_VERSION_CONFIG = {
    currentVersion: 'v2',  // ← 改这里
    // ...
};
```

4. 刷新页面，自动加载新版本题目！

---

## 添加新版本（3步完成）

### 第1步：创建版本目录
```bash
cd exam/question
mkdir v2
```

### 第2步：准备题目文件
- 将你的 questions.js 放入 question/v2/ 目录
- 确保文件名必须是 `questions.js`

### 第3步：修改配置文件

打开 `exam/version-config.js`，添加新版本信息：

```javascript
const QUESTION_VERSION_CONFIG = {
    currentVersion: 'v2',  // ← 确保是你要切换的版本
    versions: {
        'v1': { /* v1 配置保持不变 */ },
        'v2': {              // ← 添加新版本
            name: 'v2',
            description: '增加100道新题',
            questionFile: 'question/v2/questions.js',
            createdDate: '2024-04-20',
            questionCount: 512  // ← 填写实际题目数量
        }
    }
};
```

5. 刷新页面即可！

---

## 常见问题

**Q: 切换版本时需要重启服务器吗？**
A: 不需要，直接刷新浏览器页面即可。

**Q: 切换版本会影响旧的答题记录吗？**
A: 会的，切换版本会清除当前答题状态。

**Q: 如何查看当前使用的版本？**
A: 打开浏览器控制台，输入 `QUESTION_VERSION_CONFIG.currentVersion` 查看。

**Q: 可以同时使用多个版本吗？**
A: 可以，每个版本独立存储，通过配置文件切换。

**Q: v1 的题目文件会丢失吗？**
A: 不会，所有版本文件都保留在 question/ 目录下。

---

## 版本对比

当前支持的版本：

| 版本 | 题目数量 | 创建日期 | 状态 |
|------|----------|----------|------|
| v1   | 412      | 2024-04-13 | ✅ 使用中 |
| v2   | -        | -         | 📝 待创建 |

---

## 进阶用法

### 批量测试新版本
1. 复制 topic/v1/ 为 topic/v2/
2. 修改 v2/questions.js
3. 在 browser 中打开 exam/index.html
4. 在控制台输入：
   ```javascript
   QUESTION_VERSION_CONFIG.currentVersion = 'v2'
   location.reload()
   ```

### 版本回滚
如果新版本有问题，只需：
1. 修改 `version-config.js` 的 `currentVersion` 回到 'v1'
2. 刷新页面

---

## 获取帮助
查看详细文档：`exam/question/README.md`
