// MongoDB Concepts - Navigation
(function() {
    const navigationData = [
        { href: 'index.html', text: '首页' },
        { href: 'overview.html', text: '概述' },
        { href: 'document.html', text: '文档' },
        { href: 'databases-collections.html', text: '数据库与集合' },
        { href: 'crud.html', text: 'CRUD操作' },
        { href: 'indexes.html', text: '索引' },
        { href: 'data-modeling.html', text: '数据建模' },
        { href: 'aggregation.html', text: '聚合操作' },
        { href: 'transactions.html', text: '事务' },
        { href: 'replication.html', text: '复制' },
        { href: 'sharding.html', text: '分片' },
        { href: 'change-streams.html', text: '变更流' },
        { href: 'performance.html', text: '性能' },
        { href: 'security.html', text: '安全' },
        { href: 'timeseries.html', text: '时间序列' }
    ];

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
            navHTML += `
                <li>
                    <a href="${item.href}" data-page="${item.text}">${item.text}</a>
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

    function setCurrentPage() {
        const currentPage = document.getElementById('nav-current-page');
        if (!currentPage) return;

        const currentPath = window.location.pathname;
        const navLinks = document.querySelectorAll('.nav-list a');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            link.classList.remove('active');

            if (currentPath.includes(href) || (href === 'index.html' && (currentPath.endsWith('/') || currentPath.endsWith('index.html')))) {
                link.classList.add('active');
                currentPage.textContent = link.getAttribute('data-page');
            }
        });
    }

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

        navList.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navList.classList.remove('active');
                menuBtn.classList.remove('active');
            });
        });

        document.addEventListener('click', function(e) {
            if (!nav.contains(e.target)) {
                navList.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                navList.classList.remove('active');
                menuBtn.classList.remove('active');
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function() {
        generateNavigation();
        setCurrentPage();
        setupMobileMenu();
    });
})();
