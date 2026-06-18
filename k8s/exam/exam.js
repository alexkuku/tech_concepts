// 全局变量
let currentQuestions = [];
let currentQuestionIndex = 0;
let userAnswers = {};
let selectedModules = new Set();
let questionCount = 10;
let isExamStarted = false;

// DOM 元素
const homePage = document.getElementById('home-page');
const examPage = document.getElementById('exam-page');
const resultPage = document.getElementById('result-page');
const moduleGrid = document.getElementById('module-grid');
const selectAllCheckbox = document.getElementById('select-all');
const questionCountSelect = document.getElementById('question-count');
const startBtn = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const submitBtn = document.getElementById('submit-btn');
const questionGridNav = document.getElementById('question-grid-nav');
const progressText = document.getElementById('progress-text');
const progressFill = document.getElementById('progress-fill');
const resultScore = document.getElementById('result-score');
const resultPercentage = document.getElementById('result-percentage');
const resultGrid = document.getElementById('result-grid');
const resultDetail = document.getElementById('result-detail');
const returnHomeBtn = document.getElementById('return-home-btn');

// 工具函数：打乱数组
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// 初始化首页
function initHomePage() {
    // 确保"全部模块"复选框初始未选中
    selectAllCheckbox.checked = false;
    selectedModules.clear();
    updateSelectAllLabel();

    // 渲染模块选择
    renderModuleGrid();

    // 绑定事件
    selectAllCheckbox.addEventListener('change', handleSelectAll);
    questionCountSelect.addEventListener('change', handleQuestionCountChange);
    startBtn.addEventListener('click', startExam);
}

// 渲染模块网格
function renderModuleGrid() {
    moduleGrid.innerHTML = '';
    modules.forEach((module, index) => {
        const moduleItem = document.createElement('div');
        moduleItem.className = 'module-item';
        moduleItem.innerHTML = `
            <input type="checkbox" id="module-${index}" value="${module}">
            <label for="module-${index}">${module}</label>
        `;
        moduleGrid.appendChild(moduleItem);

        // 绑定事件
        const checkbox = moduleItem.querySelector('input');
        checkbox.addEventListener('change', handleModuleSelect);

        // 点击整个模块项也可以切换
        moduleItem.addEventListener('click', (e) => {
            if (e.target !== checkbox) {
                checkbox.checked = !checkbox.checked;
                handleModuleSelect({ target: checkbox });
            }
        });
    });
}

// 更新"全部模块"标签样式
function updateSelectAllLabel() {
    const selectAllLabel = document.querySelector('.select-all-label');
    if (selectAllCheckbox.checked) {
        selectAllLabel.style.borderColor = '#667eea';
        selectAllLabel.style.color = '#667eea';
        selectAllLabel.style.background = '#f0f4ff';
    } else {
        selectAllLabel.style.borderColor = '#e0e0e0';
        selectAllLabel.style.color = '#666';
        selectAllLabel.style.background = 'white';
    }
}

// 处理全选
function handleSelectAll(e) {
    const checked = e.target.checked;
    const checkboxes = moduleGrid.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = checked;
        const moduleItem = checkbox.closest('.module-item');
        if (checked) {
            moduleItem.classList.add('selected');
            selectedModules.add(checkbox.value);
        } else {
            moduleItem.classList.remove('selected');
            selectedModules.delete(checkbox.value);
        }
    });
    updateSelectAllLabel();
    updateStartButton();
}

// 处理模块选择
function handleModuleSelect(e) {
    const checkbox = e.target;
    const moduleItem = checkbox.closest('.module-item');

    if (checkbox.checked) {
        moduleItem.classList.add('selected');
        selectedModules.add(checkbox.value);
    } else {
        moduleItem.classList.remove('selected');
        selectedModules.delete(checkbox.value);
    }

    // 更新全选状态
    const allCheckboxes = moduleGrid.querySelectorAll('input[type="checkbox"]');
    const allChecked = Array.from(allCheckboxes).every(cb => cb.checked);
    selectAllCheckbox.checked = allChecked;

    updateStartButton();
}

// 处理题目数量变化
function handleQuestionCountChange(e) {
    questionCount = parseInt(e.target.value);
}

// 更新开始按钮状态
function updateStartButton() {
    startBtn.disabled = selectedModules.size === 0;
}

// 开始测评
function startExam() {
    // 筛选题目
    let poolQuestions = questions.filter(q => selectedModules.has(q.module));

    // 随机抽取题目
    poolQuestions = shuffleArray(poolQuestions);

    // 限制题目数量
    currentQuestions = poolQuestions.slice(0, Math.min(questionCount, poolQuestions.length));

    if (currentQuestions.length === 0) {
        alert('没有找到符合条件的题目，请重新选择！');
        return;
    }

    // 重置状态
    currentQuestionIndex = 0;
    userAnswers = {};
    isExamStarted = true;

    // 显示答题页面
    homePage.classList.add('hidden');
    resultPage.classList.add('hidden');
    examPage.classList.remove('hidden');

    // 初始化答题界面
    initExamPage();
}

// 初始化答题页面
function initExamPage() {
    renderQuestionGridNav();
    renderCurrentQuestion();
    updateProgress();
}

// 渲染题目导航
function renderQuestionGridNav() {
    questionGridNav.innerHTML = '';
    currentQuestions.forEach((q, index) => {
        const indicator = document.createElement('div');
        indicator.className = 'question-indicator';
        indicator.textContent = index + 1;
        indicator.dataset.index = index;

        if (index === currentQuestionIndex) {
            indicator.classList.add('current');
        }

        if (userAnswers[index] !== undefined && userAnswers[index] !== null && userAnswers[index].length > 0) {
            indicator.classList.add('done');
        }

        indicator.addEventListener('click', () => goToQuestion(index));
        questionGridNav.appendChild(indicator);
    });
}

// 渲染当前题目
function renderCurrentQuestion() {
    const question = currentQuestions[currentQuestionIndex];
    const userAnswer = userAnswers[currentQuestionIndex] || [];

    // 打乱选项
    const shuffledOptions = shuffleArray(question.options.map((opt, idx) => ({
        text: opt,
        originalIndex: idx
    })));

    // 创建选项 HTML
    const optionsHtml = shuffledOptions.map((opt, idx) => {
        const isSelected = userAnswer.includes(opt.originalIndex);
        const checkboxType = question.type === '多选' ? 'checkbox' : 'radio';

        return `
            <li class="option-item ${isSelected ? 'selected' : ''}" data-original-index="${opt.originalIndex}">
                <input type="${checkboxType}"
                       class="option-checkbox"
                       name="question-${currentQuestionIndex}"
                       value="${opt.originalIndex}"
                       ${isSelected ? 'checked' : ''}>
                <span class="option-content">${String.fromCharCode(65 + idx)}. ${opt.text}</span>
            </li>
        `;
    }).join('');

    questionContainer.innerHTML = `
        <div class="question-header">
            <span class="question-number">${currentQuestionIndex + 1} / ${currentQuestions.length}</span>
            <span class="question-type ${question.type === '单选' ? 'single' : 'multiple'}">${question.type}</span>
        </div>
        <div class="question-module">${question.module}</div>
        <div class="question-text">${question.question}</div>
        <ul class="options-list">
            ${optionsHtml}
        </ul>
    `;

    // 绑定选项点击事件
    const optionItems = questionContainer.querySelectorAll('.option-item');
    optionItems.forEach(item => {
        const checkbox = item.querySelector('.option-checkbox');
        const originalIndex = item.dataset.originalIndex;

        item.addEventListener('click', (e) => {
            if (question.type === '单选') {
                // 单选：允许修改，选择新选项时清除其他选择
                const wasAlreadySelected = userAnswers[currentQuestionIndex]?.includes(parseInt(originalIndex));

                optionItems.forEach(opt => {
                    opt.classList.remove('selected');
                    opt.querySelector('input').checked = false;
                });

                item.classList.add('selected');
                checkbox.checked = true;

                userAnswers[currentQuestionIndex] = [parseInt(originalIndex)];

                updateProgress();
                renderQuestionGridNav();
                updateSubmitButton();
            } else {
                // 多选：处理选择
                if (!e.target.classList.contains('option-checkbox')) {
                    checkbox.checked = !checkbox.checked;
                }

                if (checkbox.checked) {
                    item.classList.add('selected');
                } else {
                    item.classList.remove('selected');
                }

                updateMultipleChoiceAnswer();
            }

            updateProgress();
            renderQuestionGridNav();
            updateSubmitButton();
        });

        checkbox.addEventListener('click', (e) => {
            e.stopPropagation();
            if (question.type === '单选') {
                // 单选：允许修改
                optionItems.forEach(opt => {
                    opt.classList.remove('selected');
                    opt.querySelector('input').checked = false;
                });

                item.classList.add('selected');
                checkbox.checked = true;

                userAnswers[currentQuestionIndex] = [parseInt(originalIndex)];

                updateProgress();
                renderQuestionGridNav();
                updateSubmitButton();
            } else if (question.type === '多选') {
                updateMultipleChoiceAnswer();
                updateProgress();
                renderQuestionGridNav();
                updateSubmitButton();
            }
        });
    });

    // 更新按钮状态
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === currentQuestions.length - 1;

    // 更新交卷按钮状态
    updateSubmitButton();
}

// 更新多选答案
function updateMultipleChoiceAnswer() {
    const checkboxes = questionContainer.querySelectorAll('.option-checkbox');
    const selectedIndices = [];
    checkboxes.forEach(cb => {
        if (cb.checked) {
            selectedIndices.push(parseInt(cb.value));
        }
    });
    // 按字母顺序排序（即按原索引排序）
    selectedIndices.sort((a, b) => a - b);
    userAnswers[currentQuestionIndex] = selectedIndices;
}

// 更新交卷按钮状态
function updateSubmitButton() {
    if (!isExamStarted) {
        submitBtn.disabled = true;
        return;
    }

    // 检查是否有任何题目已回答
    const anyAnswered = currentQuestions.some((_, index) =>
        userAnswers[index] !== undefined && userAnswers[index] !== null && userAnswers[index].length > 0
    );
    submitBtn.disabled = !anyAnswered;
}

// 更新进度
function updateProgress() {
    const answeredCount = currentQuestions.filter((_, index) =>
        userAnswers[index] !== undefined && userAnswers[index] !== null && userAnswers[index].length > 0
    ).length;

    const total = currentQuestions.length;
    const percentage = (answeredCount / total) * 100;

    progressText.textContent = `已完成 ${answeredCount} / ${total}`;
    progressFill.style.width = `${percentage}%`;
}

// 上一题
function handlePrevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        renderCurrentQuestion();
        renderQuestionGridNav();
    }
}

// 下一题
function handleNextQuestion() {
    if (currentQuestionIndex < currentQuestions.length - 1) {
        currentQuestionIndex++;
        renderCurrentQuestion();
        renderQuestionGridNav();
    }
}

// 跳转到指定题目
function goToQuestion(index) {
    currentQuestionIndex = index;
    renderCurrentQuestion();
    renderQuestionGridNav();
}

// 交卷
function handleSubmit() {
    // 检查所有题目是否已回答
    const answeredCount = currentQuestions.filter((_, index) =>
        userAnswers[index] !== undefined && userAnswers[index] !== null && userAnswers[index].length > 0
    ).length;

    const unansweredCount = currentQuestions.length - answeredCount;

    // 检查是否所有题目都已回答
    if (unansweredCount > 0) {
        // 使用自定义确认弹窗（兼容移动端）
        const modal = document.createElement('div');
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
        `;
        modal.innerHTML = `
            <div style="background: white; padding: 20px; border-radius: 8px; max-width: 300px; text-align: center;">
                <p style="margin: 0 0 20px 0; font-size: 16px;">还有 ${unansweredCount} 道题未完成，确定要交卷吗？</p>
                <div style="display: flex; gap: 10px; justify-content: center;">
                    <button id="modal-cancel" style="padding: 10px 20px; border: none; background: #6c757d; color: white; border-radius: 4px; cursor: pointer; font-size: 14px;">取消</button>
                    <button id="modal-confirm" style="padding: 10px 20px; border: none; background: #28a745; color: white; border-radius: 4px; cursor: pointer; font-size: 14px;">确定交卷</button>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // 绑定按钮事件
        modal.querySelector('#modal-cancel').onclick = () => modal.remove();
        modal.querySelector('#modal-confirm').onclick = () => {
            modal.remove();
            submitExam();
        };
    } else {
        submitExam();
    }
}

// 执行交卷逻辑
function submitExam() {

    // 计算成绩
    let correctCount = 0;
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;

        // 比较答案（先排序再比较）
        const sortedUserAnswer = [...userAnswer].sort((a, b) => a - b);
        const sortedCorrectAnswer = [...correctAnswer].sort((a, b) => a - b);

        if (JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer)) {
            correctCount++;
        }
    });

    // 显示结果页面
    examPage.classList.add('hidden');
    resultPage.classList.remove('hidden');

    const total = currentQuestions.length;
    const percentage = Math.round((correctCount / total) * 100);

    resultScore.textContent = `${correctCount} / ${total}`;
    resultPercentage.textContent = `正确率: ${percentage}%`;

    renderResultGrid();
}

// 渲染结果网格
function renderResultGrid() {
    resultGrid.innerHTML = '';
    currentQuestions.forEach((question, index) => {
        const userAnswer = userAnswers[index] || [];
        const correctAnswer = question.answer;

        const sortedUserAnswer = [...userAnswer].sort((a, b) => a - b);
        const sortedCorrectAnswer = [...correctAnswer].sort((a, b) => a - b);

        const isCorrect = JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer);

        const indicator = document.createElement('div');
        indicator.className = `result-indicator ${isCorrect ? 'correct' : 'wrong'}`;
        indicator.textContent = index + 1;
        indicator.title = isCorrect ? '正确' : '错误';

        indicator.addEventListener('click', () => showResultDetail(index));
        resultGrid.appendChild(indicator);
    });
}

// 显示结果详情
function showResultDetail(index) {
    const question = currentQuestions[index];
    const userAnswer = userAnswers[index] || [];
    const correctAnswer = question.answer;

    // 排序答案
    const sortedUserAnswer = [...userAnswer].sort((a, b) => a - b);
    const sortedCorrectAnswer = [...correctAnswer].sort((a, b) => a - b);

    const isCorrect = JSON.stringify(sortedUserAnswer) === JSON.stringify(sortedCorrectAnswer);

    // 构建选项 HTML
    const optionsHtml = question.options.map((opt, idx) => {
        const isUserSelected = userAnswer.includes(idx);
        const isCorrectOption = correctAnswer.includes(idx);

        let className = '';
        let icon = '';
        if (isCorrectOption) {
            className = 'correct';
            icon = '✓';
        } else if (isUserSelected && !isCorrectOption) {
            className = 'wrong';
            icon = '✗';
        }

        return `<div class="option-item ${className} ${isUserSelected ? 'disabled' : ''}">
            <span class="option-content">${String.fromCharCode(65 + idx)}. ${opt} ${icon}</span>
        </div>`;
    }).join('');

    resultDetail.innerHTML = `
        <div class="question-header">
            <span class="question-number">第 ${index + 1} 题</span>
            <span class="question-type ${question.type === '单选' ? 'single' : 'multiple'}">${question.type}</span>
        </div>
        <div class="question-module">${question.module}</div>
        <div class="question-text" style="margin-bottom: 20px;">${question.question}</div>

        ${optionsHtml}

        <div class="detail-answer-section ${isCorrect ? 'correct-answer' : 'wrong-answer'}">
            <div class="detail-label">你的答案：</div>
            <div class="detail-value">${userAnswer.length > 0 ?
                userAnswer.map(idx => String.fromCharCode(65 + idx)).join(', ') :
                '未作答'}</div>
            <div class="detail-label" style="margin-top: 10px;">正确答案：</div>
            <div class="detail-value">${correctAnswer.map(idx => String.fromCharCode(65 + idx)).join(', ')}</div>
        </div>

        <div class="explanation-box">
            <div class="explanation-title">💡 解析</div>
            <div class="explanation-text">${question.explanation}</div>
        </div>
    `;

    resultDetail.classList.add('active');
    resultDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// 返回主页
function returnToHome() {
    // 重置状态
    currentQuestions = [];
    currentQuestionIndex = 0;
    userAnswers = {};
    selectedModules = new Set();
    // 不重置 questionCount，保留上次选择的数量
    isExamStarted = false;

    // 重置UI状态
    selectAllCheckbox.checked = false;

    // 隐藏结果页面和答题页面，显示主页
    resultPage.classList.add('hidden');
    examPage.classList.add('hidden');
    homePage.classList.remove('hidden');

    // 初始化主页
    initHomePage();
}

// 页面初始化
document.addEventListener('DOMContentLoaded', () => {
    // 绑定控制按钮事件（只绑定一次）
    prevBtn.addEventListener('click', handlePrevQuestion);
    nextBtn.addEventListener('click', handleNextQuestion);
    submitBtn.addEventListener('click', handleSubmit);
    returnHomeBtn.addEventListener('click', returnToHome);

    // 移动端兼容：同时支持 touchstart 和 click
    submitBtn.addEventListener('touchstart', (e) => {
        e.preventDefault(); // 防止触发两次
        handleSubmit();
    }, { passive: false });

    // 等待题目动态加载完成
    function waitForQuestions() {
        if (typeof questions !== 'undefined' && typeof modules !== 'undefined') {
            console.log('📋 题目已加载，初始化主页');
            initHomePage();
        } else {
            console.log('⏳ 等待题目加载...');
            setTimeout(waitForQuestions, 100);
        }
    }

    waitForQuestions();
});
