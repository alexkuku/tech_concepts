// 动态生成导航栏
(function() {
    const navigationData = [
        { href: 'index.html', text: '首页' },
        { href: 'overview.html', text: '概述' },
        { href: 'architecture.html', text: '集群架构' },
        { href: 'containers.html', text: '容器' },
        { href: 'workloads.html', text: '工作负载' },
        { href: 'networking.html', text: '网络' },
        { href: 'storage.html', text: '存储' },
        { href: 'configuration.html', text: '配置' },
        { href: 'scheduling.html', text: '调度' },
        { href: 'cluster-admin.html', text: '集群管理' },
        { href: '../exam/index.html', text: '📝 知识测评', isExam: true }
    ];

    // 生成导航 HTML
    function generateNavigation() {
        const container = document.getElementById('navigation-container');
        if (!container) return;

        let navHTML = `
            <nav class="main-nav" id="main-nav">
                <div class="nav-container">
                    <div class="nav-mobile">
                        <button class="nav-menu-btn" id="nav-menu-btn" aria-label="打开导航菜单">
                            <span class="hamburger"></span>
                            <span class="hamburger"></span>
                            <span class="hamburger"></span>
                        </button>
                        <span class="nav-current-page" id="nav-current-page">首页</span>
                    </div>
                    <ul class="nav-list" id="nav-list">
        `;

        navigationData.forEach(item => {
            const examClass = item.isExam ? 'nav-exam-link' : '';
            navHTML += `
                <li>
                    <a href="${item.href}" data-page="${item.text}" class="${examClass}">${item.text}</a>
                </li>
            `;
        });

        navHTML += `
                    </ul>
                </div>
            </nav>
        `;

        container.innerHTML = navHTML;
    }

    // 设置当前页面
    function setCurrentPage() {
        const currentPage = document.getElementById('nav-current-page');
        if (!currentPage) return;

        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-list a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('active');

            // 检查是否是当前页面
            if (currentPath.includes(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))) {
                link.classList.add('active');
                currentPage.textContent = link.getAttribute('data-page');
            }
        });
    }

    // 移动端菜单切换
    function setupMobileMenu() {
        const menuBtn = document.getElementById('nav-menu-btn');
        const navList = document.getElementById('nav-list');
        const nav = document.getElementById('main-nav');

        if (!menuBtn || !navList || !nav) return;

        menuBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            navList.classList.toggle('active');
            menuBtn.classList.toggle('active');
        });

        // 点击链接后关闭菜单
        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });

        // 点击外部区域关闭菜单
        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target)) {
                navList.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });

        // 窗口大小改变时重置菜单
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navList.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }

    // 初始化
    document.addEventListener('DOMContentLoaded', function() {
        generateNavigation();
        setCurrentPage();
        setupMobileMenu();
    });
})();
