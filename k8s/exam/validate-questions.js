#!/usr/bin/env node
/**
 * 题目文件格式校验工具
 * 用法: node validate-questions.js [文件路径]
 * 示例: node validate-questions.js question/v1/questions.js
 */

const fs = require('fs');
const path = require('path');

// 获取文件路径
let filePath = process.argv[2];
if (!filePath) {
    filePath = './question/v1/questions.js';
}
filePath = path.resolve(process.cwd(), filePath);

console.log('========================================');
console.log('题目文件格式校验工具');
console.log('========================================');
console.log(`文件: ${filePath}`);
console.log('');

// 读取文件
let content;
try {
    content = fs.readFileSync(filePath, 'utf8');
} catch (e) {
    console.error('❌ 无法读取文件:', e.message);
    process.exit(1);
}

try {
    // 评估代码（全局作用域） - 使用 vm 模块或 Function 构造器
    global._questions = null;
    global._modules = null;

    // 将 const 替换为 global 变量赋值以便 Node.js eval 读取
    const evalContent = content
        .replace(/^const questions =/gm, 'global._questions =')
        .replace(/^const modules =/gm, 'global._modules =');

    eval(evalContent);

    // 设置全局变量
    global.questions = global._questions;
    global.modules = global._modules;

    // 检查必需变量
    if (typeof questions === 'undefined') {
        console.error('❌ questions 变量未定义');
        console.log('   文件可能缺少 const questions = [...] 的声明');
        process.exit(1);
    }
    if (typeof modules === 'undefined') {
        console.error('❌ modules 变量未定义');
        console.log('   文件可能缺少 const modules 的声明');
        process.exit(1);
    }

    // 检查类型
    if (!Array.isArray(questions)) {
        console.error('❌ questions 不是数组');
        process.exit(1);
    }
    if (!Array.isArray(modules)) {
        console.error('❌ modules 不是数组');
        process.exit(1);
    }

    console.log('✅ 基本结构正确');
    console.log('');

    // 检查每个题目
    let errors = 0;
    let warnings = 0;

    const validModules = ['概述', '集群架构', '容器', '工作负载', '网络', '存储', '配置', '调度', '集群管理'];
    const validTypes = ['单选', '多选'];

    for (let i = 0; i < questions.length; i++) {
        const q = questions[i];
        const prefix = `题目 ${i+1}: `;

        // 检查必需字段
        if (!q.module) {
            console.error(prefix + '❌ 缺少 module 字段');
            errors++;
        }
        if (!q.question) {
            console.error(prefix + '❌ 缺少 question 字段');
            errors++;
        }
        if (!q.type) {
            console.error(prefix + '❌ 缺少 type 字段');
            errors++;
        }

        // 检查字段类型
        const hasOptions = Array.isArray(q.options);
        const hasAnswer = Array.isArray(q.answer);
        const hasExplanation = typeof q.explanation === 'string';

        if (!hasOptions) {
            console.error(prefix + '❌ options 不是数组');
            errors++;
        }
        if (!hasAnswer) {
            console.error(prefix + '❌ answer 不是数组');
            errors++;
        }
        if (!hasExplanation) {
            console.error(prefix + '❌ explanation 不是字符串');
            errors++;
        }

        // 检查可选字段
        if (q.difficulty && typeof q.difficulty !== 'string') {
            console.error(prefix + '⚠️  difficulty 不是字符串');
            warnings++;
        }

        // 检查类型值
        if (q.type && !validTypes.includes(q.type)) {
            console.error(prefix + `❌ type 字段值错误: "${q.type}" (必须是"单选"或"多选")`);
            errors++;
        }

        // 检查选项数量
        if (Array.isArray(q.options)) {
            if (q.options.length < 2) {
                console.error(prefix + '❌ 选项数量过少（至少需要2个）');
                errors++;
            }
            if (q.options.length > 8) {
                console.warn(prefix + '⚠️  选项数量较多（' + q.options.length + '个），建议不超过8个）');
                warnings++;
            }

            // 检查答案索引
            for (let idx = 0; idx < q.answer.length; idx++) {
                if (typeof q.answer[idx] !== 'number') {
                    console.error(prefix + `❌ answer[${idx}] 不是数字`);
                    errors++;
                } else if (q.answer[idx] < 0 || q.answer[idx] >= q.options.length) {
                    console.error(prefix + `❌ answer[${idx}] 索引 ${q.answer[idx]} 超出范围 (有 ${q.options.length} 个选项)`);
                    errors++;
                }
            }
        }

        // 检查 type 与 answer 长度匹配
        if (q.type === '单选' && q.answer.length !== 1) {
            console.error(prefix + `❌ 单选题的 answer 必须包含 1 个索引,当前有 ${q.answer.length} 个`);
            errors++;
        }
        if (q.type === '多选' && q.answer.length < 1) {
            console.error(prefix + `❌ 多选题的 answer 必须包含至少 1 个索引,当前有 ${q.answer.length} 个`);
            errors++;
        }

        // 检查模块名称
        if (q.module && !validModules.includes(q.module)) {
            console.error(prefix + `❌ 模块名称无效: "${q.module}"`);
            console.error(prefix + '   有效模块:', validModules.join(', '));
            errors++;
        }

        // 检查是否包含中文引号
        const textToCheck = `${q.module}${q.question}${q.explanation}` + (q.options || []).join('');
        if (textToCheck.includes('"') && (textToCheck.match(/"/g) || textToCheck.match(/"/g))) {
            // 更精确的检测
            const hasQuotes = /[""]/.test(textToCheck);
            if (hasQuotes) {
                console.error(prefix + '❌ 内容包含中文引号 (") 或 \")');
                console.log(prefix + '   这会导致 JavaScript 语法错误');
                errors++;
            }
        }
    }

    console.log('');
    console.log('========================================');
    if (errors === 0) {
        console.log('✅ 文件格式校验通过');
        console.log('========================================');
        console.log('');
        console.log('文件统计:');
        console.log('  题目总数:', questions.length);
        console.log('  模块数量:', modules.length);
        console.log('  单选题数量:', questions.filter(q => q.type === '单选').length);
        console.log('  多选题数量:', questions.filter(q => q.type === '多选').length);
        console.log('');
        console.log('模块分布:');
        const stats = {};
        modules.forEach(mod => {
            stats[mod] = { total: 0, single: 0, multi: 0 };
        });
        questions.forEach(q => {
            stats[q.module].total++;
            if (q.type === '单选') stats[q.module].single++;
            else stats[q.module].multi++;
        });
        modules.forEach(mod => {
            console.log(`  ${mod}: ${stats[mod].total}题 (单选: ${stats[mod].single}, 多选: ${stats[mod].multi})`);
        });

        if (warnings > 0) {
            console.log('');
            console.log(`⚠️  注意: 发现 ${warnings} 个警告`);
        }
    } else {
        console.log('========================================');
        console.log(`❌ 发现 ${errors} 个错误，请修复后重新校验`);
        console.log('========================================');
        process.exit(1);
    }

} catch (e) {
    console.error('❌ 无法解析文件');
    console.error('错误详情:', e.message);
    console.error('');
    console.log('可能的原因:');
    console.log('  1. JavaScript 语法错误（如缺少括号、引号等）');
    console.log('  2. 文件编码不是 UTF-8');
    console.log('  3. 文件内容不完整');
    process.exit(1);
}

console.log('');
console.log('说明:');
console.log('  所有校验通过后，该文件即可用于评测系统');
console.log('  如有错误，请根据提示修复文件');
