#!/usr/bin/env node
const fs = require('fs');

// 读取现有文件
const existing = fs.readFileSync('./exam/questions.js', 'utf8');
const extra = fs.readFileSync('./extra_questions.js', 'utf8');

// 提取 extraQuestions
const extraMatch = extra.match(/const extraQuestions = \[([\s\S]*?)\];/);
if (!extraMatch) {
    console.log("无法找到 extraQuestions");
    process.exit(1);
}

const extraQuestions = extraMatch[1];

// 在现有 questions 数组的结尾，在最后一个 }, 后添加
const lines = existing.split('\n');
let inserted = false;
let result = [];

// 找到最后一个题目的大括号行
for (let i = lines.length - 1; i >= 0; i--) {
    if (lines[i].trim() === '    },') {
        result = lines.slice(0, i).join('\n');
        result += '\n    ' + extraQuestions.trim();
        break;
    }
}

// 查找最后的 ]; 模块导出部分
const finalPart = existing.substring(existing.lastIndexOf('\n    },'));
if (finalPart.includes('\n    },\n];')) {
    // 替换
    result += finalPart.replace('\n    },\n];', '');
    result += ',\n' + extraQuestions.trim();
    result += '\n];\n';

// 查找 "// 提取唯一模块列表" 之前的内容
const startIdx = existing.indexOf('// 提取唯一模块列表');
if (startIdx > 0) {
    result += '\n' + existing.substring(startIdx);
}

fs.writeFileSync('./exam/questions.js', result, 'utf8');
console.log('合并完成!');}
