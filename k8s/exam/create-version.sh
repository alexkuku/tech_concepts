#!/bin/bash

# 创建新题目版本的脚本
# 使用方法: ./create-version.sh v2 "新版本描述"

# 检查参数
if [ $# -lt 2 ]; then
    echo "使用方法: $0 <版本号> <版本描述>"
    echo "示例: $0 v2 '增加100道新题'"
    exit 1
fi

VERSION=$1
DESCRIPTION=$2
DATE=$(date +"%Y-%m-%d")
EXAM_DIR="$(cd "$(dirname "$0")" && pwd)"

# 检查版本是否已存在
if [ -d "$EXAM_DIR/question/$VERSION" ]; then
    echo "错误: 版本 $VERSION 已存在！"
    exit 1
fi

# 创建版本目录
mkdir -p "$EXAM_DIR/question/$VERSION"
echo "✓ 创建目录: question/$VERSION"

# 复制版本模板（如果有）
if [ -f "$EXAM_DIR/question/.template/questions.js" ]; then
    cp "$EXAM_DIR/question/.template/questions.js" "$EXAM_DIR/question/$VERSION/questions.js"
    echo "✓ 从模板创建题目文件"
else
    # 创建空的题目文件
    cat > "$EXAM_DIR/question/$VERSION/questions.js" << 'EOF'
// Kubernetes 概念测评题目库
// 版本: 新版本
// 创建日期: [创建日期]
// 题目总数: 0

const questions = [
    {
        module: "模块名称",
        question: "题目内容",
        type: "单选",
        options: ["选项1", "选项2", "选项3", "选项4"],
        answer: [0],
        difficulty: "基础",
        explanation: "题目解析"
    },
    // ... 添加更多题目
];

// 提取唯一模块列表
const modules = [...new Set(questions.map(q => q.module))];
EOF
    echo "✓ 创建题目文件模板"
fi

# 复制生成脚本（如果需要）
if [ -f "$EXAM_DIR/question/v1/generate_full_questions.py" ]; then
    cp "$EXAM_DIR/question/v1/generate_full_questions.py" "$EXAM_DIR/question/$VERSION/"
    echo "✓ 复制生成脚本"
fi

# 更新配置文件
CONFIG_FILE="$EXAM_DIR/version-config.js"

# 备份配置文件
cp "$CONFIG_FILE" "$CONFIG_FILE.backup"

# 添加新版本到配置（在 versions 对象中的最后一个版本后添加）
sed -i.tmp "
/\/\/ 后续可以添加 v2、v3 等/i\        '$VERSION': {
            name: '$VERSION',
            description: '$DESCRIPTION',
            questionFile: 'question/$VERSION/questions.js',
            createdDate: '$DATE',
            questionCount: 0
        },
" "$CONFIG_FILE" && rm "$CONFIG_FILE.tmp"

echo "✓ 更新配置文件: version-config.js"
echo "✓ 备份文件: version-config.js.backup"

echo ""
echo "======================================"
echo "版本 $VERSION 创建完成！"
echo "======================================"
echo "题目文件位置: question/$VERSION/questions.js"
echo ""
echo "下一步:"
echo "1. 编辑 question/$VERSION/questions.js 添加题目"
echo "2. 统计题目数量后更新 version-config.js 中的 questionCount"
echo "3. 修改 version-config.js 中的 currentVersion 为 '$VERSION'"
echo "4. 刷新页面即可使用新版本"
echo ""
