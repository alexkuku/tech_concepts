// 题目版本加载器
// 这个脚本根据 version-config.js 的配置加载对应的题目文件，然后加载主逻辑

(function() {
    // 获取当前配置
    const version = QUESTION_VERSION_CONFIG.currentVersion;
    const versionInfo = QUESTION_VERSION_CONFIG.versions[version];

    if (!versionInfo) {
        console.error('Version not found:', version);
        alert('版本配置错误！');
        return;
    }

    const questionFile = versionInfo.questionFile;
    console.log('📚 Loading questions from:', questionFile);

    // 创建并插入题目脚本
    const questionScript = document.createElement('script');
    questionScript.src = questionFile;
    questionScript.async = false;
    questionScript.defer = false;

    questionScript.onload = function() {
        console.log('✅ Questions loaded successfully');
        console.log('   Total questions:', questions ? questions.length : 'N/A');
        console.log('   Modules:', modules ? modules.join(', ') : 'N/A');

        if (questions && questions.length > 0) {
            console.log('🎯 题目加载完成，继续加载主逻辑...');

            // 题目加载完成后，动态加载 exam.js
            const examScript = document.createElement('script');
            examScript.src = 'exam.js';
            examScript.async = false;
            examScript.onload = function() {
                console.log('✅ Exam.js loaded successfully');
            };
            examScript.onerror = function() {
                console.error('❌ Failed to load exam.js');
            };
            document.currentScript.parentNode.appendChild(examScript);
        } else {
            console.error('❌ Questions loaded but empty!');
            alert('题目文件为空，请检查版本配置');
        }
    };

    questionScript.onerror = function() {
        console.error('❌ Failed to load questions file:', questionFile);
        alert('加载题目文件失败：' + questionFile);
    };

    // 关键：插入到当前脚本之前，确保在 exam.js 之前加载
    const currentScript = document.currentScript || document.scripts[document.scripts.length - 1];
    currentScript.parentNode.insertBefore(questionScript, currentScript);
})();
