const { questions, modules } = require('./exam/questions.js');

console.log('OK');
console.log('Total:', questions.length);
console.log('Modules:', modules.length);
const s = {};
questions.forEach(q => {
    if (!s[q.module]) s[q.module] = { t: 0, s: 0, m: 0 };
    s[q.module].t++;
    if (q.type === '单选') s[q.module].s++;
    else s[q.module].m++;
});
Object.entries(s).sort((a, b) => b[1].t - a[1].t).forEach(([mod, st]) => {
    console.log(mod + ': ' + st.t + ' (单:' + st.s + ', 多:' + st.m + ')');
});
