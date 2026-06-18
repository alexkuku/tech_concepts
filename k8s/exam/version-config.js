// 题目版本配置
const QUESTION_VERSION_CONFIG = {
    // 当前使用的版本
    currentVersion: 'v2',

    // 可用版本列表
    versions: {
        'v1': {
            name: 'v1',
            description: '初始版本题目集（412题）',
            questionFile: 'question/v1/questions.js',
            createdDate: '2024-04-14',
            questionCount: 412
        },
        'v2': {
            name: 'v2',
            description: '增强版本题目集（477题）',
            questionFile: 'question/v2/questions.js',
            createdDate: '2026-04-14',
            questionCount: 477
        }
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = QUESTION_VERSION_CONFIG;
} else {
    window.QUESTION_VERSION_CONFIG = QUESTION_VERSION_CONFIG;
}

// 获取当前版本的题目文件路径
function getCurrentQuestionPath() {
    return QUESTION_VERSION_CONFIG.versions[QUESTION_VERSION_CONFIG.currentVersion].questionFile;
}
