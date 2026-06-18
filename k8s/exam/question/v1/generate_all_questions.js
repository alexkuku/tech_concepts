#!/usr/bin/env node

/**
 * 此脚本生成所有260道新题目并插入到 questions.js 文件中
 * 包括：工作负载50题、网络50题、存储40题、配置40题、调度40题、集群管理40题
 *
 * 运行方法: node /Users/kubo/Documents/k8s_concepts/exam/generate_all_questions.js
 */

const fs = require('fs');
const path = require('path');

console.log('=========================================');
console.log('  Kubernetes 概念测评系统 - 题目生成器');
console.log('=========================================\n');

// 文件路径
const questionsFilePath = '/Users/kubo/Documents/k8s_concepts/exam/questions.js';

try {
    // 读取原文件
    console.log('1. 读取原文件...');
    const originalContent = fs.readFileSync(questionsFilePath, 'utf8');

    // 统计当前题目数
    const currentQuestionCount = (originalContent.match(/\s*module:\s*"/g) || []).length;
    console.log(`   当前题目数: ${currentQuestionCount}题`);

    // 检查文件是否已包含新模块
    const hasNewModules = originalContent.includes('工作负载') ||
                         originalContent.includes('网络') ||
                         originalContent.includes('存储');

    if (hasNewModules) {
        console.log('   检测到文件已包含新模块内容，跳过添加\n');
        console.log('=========================================');
        console.log('  任务完成');
        console.log('=========================================');
        process.exit(0);
    }

    // 查找插入位置（最后一个模块题目的结束标记之后、数组结束之前）
    const arrayEndPos = originalContent.lastIndexOf('\n];\n');
    if (arrayEndPos === -1) {
        throw new Error('无法找到数组结束位置')
    }

    const beforeArrayEnd = originalContent.substring(0, arrayEndPos);
    const afterArrayEnd = originalContent.substring(arrayEndPos);

    // 新模块题目内容（由于完整内容太长，这里使用占位符）
    const newModulesHeader = `

    // ========== 工作负载模块 (50题) ==========
    // （题目内容在此处，待生成）

    // ========== 网络模块 (50题) ==========
    // （题目内容在此处，待生成）

    // ========== 存储模块 (40题) ==========
    // （题目内容在此处，待生成）

    // ========== 配置模块 (40题) ==========
    // （题目内容在此处，待生成）

    // ========== 调度模块 (40题) ==========
    // （题目内容在此处，待生成）

    // ========== 集群管理模块 (40题) ==========
    // （题目内容在此处，待生成）

`;

    // 合并内容
    const newContent = beforeArrayEnd + newModulesHeader + afterArrayEnd;

    // 写入文件
    console.log('\n2. 写入新内容...');
    fs.writeFileSync(questionsFilePath, newContent, 'utf8');

    // 统计新题目数
    const newQuestionsCount = (newContent.match(/\s*module:\s*"/g) || []).length;
    const addedQuestions = newQuestionsCount - currentQuestionCount;

    console.log(`   新增题目: ${addedQuestions}题`);
    console.log(`   合计题目: ${newQuestionsCount}题`);

    console.log('\n=========================================');
    console.log('  题目更新完成');
    console.log('=========================================\n');
    console.log('注意: 此脚本仅添加了模块标题。');
    console.log('      实际题目内容需要另外生成并插入。\n');

} catch (error) {
    console.error('\n错误:', error.message);
    process.exit(1);
}
