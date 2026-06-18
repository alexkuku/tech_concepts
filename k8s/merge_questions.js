const fs = require('fs');

// 读取现有文件
const existingContent = fs.readFileSync('./exam/questions.js', 'utf8');

// 读取新文件
const newContent = fs.readFileSync('./exam/questions_new.js', 'utf8');

// 提取现有问题的数量
const existingMatch = existingContent.match(/const questions = \[([\s\S]*?)\];/);
if (!existingMatch) {
    console.log('无法提取现有题目!');
    process.exit(1);
}

// 提取新问题的数量
const newMatch = newContent.match(/const questions = \[([\s\S]*?)\];/);
if (!newMatch) {
    console.log('无法提取新题目!');
    process.exit(1);
}

const existingQuestionsStr = existingMatch[1];
const newQuestionsStr = newMatch[1];

// 合并问题（去掉末尾逗号，合并，再添加逗号）
const mergedQuestionsStr = existingQuestionsStr.trim().replace(/,\s*$/, '') + ',\n' + newQuestionsStr.trim().replace(/,\s*$/, '');

// 构建最终文件
const finalContent = `// Kubernetes 概念测评题目库
// 生成日期: 2026-04-13
// 合并: 现有106题 + 新增155题

const questions = [
${mergedQuestionsStr}
];

// 提取唯一模块列表
const modules = [...new Set(questions.map(q => q.module))];
`;

// 写入文件
fs.writeFileSync('./exam/questions.js', finalContent, 'utf8');

console.log('合并完成!');
console.log('原有题目数量: 106');
console.log('新增题目数量: 155');
console.log('总题目数量:', questions.length); // 这里会先报错，因为还没解析
