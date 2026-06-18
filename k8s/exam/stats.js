const { questions, modules } = require('./questions.js');

console.log('✓ 文件语法正确');
console.log('题目总数:', questions.length);
console.log('模块数:', modules.length);
console.log('单选题:', questions.filter(q => q.type === '单选').length);
console.log('多选题:', questions.filter(q => q.type === '多选').length);
console.log('\n模块分布:');
const moduleStats = {};
questions.forEach(q => {
    if (!moduleStats[q.module]) moduleStats[q.module] = { single: 0, multi: 0, total: 0 };
    if (q.type === '单选') moduleStats[q.module].single++;
    else moduleStats[q.module].multi++;
    moduleStats[q.module].total++;
});
Object.entries(moduleStats).sort((a, b) => b[1].total - a[1].total).forEach(([mod, stats]) => {
    console.log(mod + ': ' + stats.total + '题 (单选:' + stats.single + ', 多选:' + stats.multi + ')');
});
