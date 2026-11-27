/* =========================================================
   CubeSandbox 学习指南 - 分组导航 / 上下页 / 阅读进度
   ========================================================= */
(function () {
    "use strict";

    var PAGES = [
        { href: "index.html", title: "首页：学习路径与知识地图", short: "首页", group: "开始", icon: "🏠" },
        { href: "intro.html", title: "入门与快速开始", short: "入门", group: "入门", icon: "🚀" },
        { href: "deploy-basic.html", title: "部署基础：PVM / 裸金属 / 源码 / 多机", short: "部署基础", group: "部署", icon: "🧱" },
        { href: "k8s.html", title: "Kubernetes 部署", short: "Kubernetes", group: "部署", icon: "☸️" },
        { href: "deploy-cloud.html", title: "云上、离线与开发环境", short: "云上与离线", group: "部署", icon: "☁️" },
        { href: "concepts.html", title: "生命周期、Webhook 与 QoS", short: "生命周期与 QoS", group: "核心概念", icon: "♻️" },
        { href: "snapshots.html", title: "快照、回滚、克隆与跨机迁移", short: "快照与迁移", group: "核心概念", icon: "📸" },
        { href: "templates.html", title: "模板与镜像", short: "模板与镜像", group: "核心概念", icon: "📦" },
        { href: "tutorials.html", title: "教程与多语言 SDK", short: "教程与 SDK", group: "开发接入", icon: "🧑‍💻" },
        { href: "network.html", title: "网络策略与沙箱互访", short: "网络策略", group: "开发接入", icon: "🌐" },
        { href: "security.html", title: "安全、鉴权与网络加固", short: "安全与鉴权", group: "开发接入", icon: "🛡️" },
        { href: "storage.html", title: "Volume 存储与插件开发", short: "存储 Volume", group: "开发接入", icon: "💾" },
        { href: "operations.html", title: "管理工具与集群运维", short: "管理与运维", group: "运维与观测", icon: "🔧" },
        { href: "observability.html", title: "可观测性部署、日志与追踪", short: "可观测性", group: "运维与观测", icon: "🔭" },
        { href: "metrics.html", title: "指标与性能基准", short: "指标与性能", group: "运维与观测", icon: "📈" },
        { href: "troubleshooting.html", title: "故障排查手册", short: "故障排查", group: "运维与观测", icon: "🧯" }
    ];

    var GROUPS = [
        { name: "入门", pages: ["intro.html"] },
        { name: "部署", pages: ["deploy-basic.html", "k8s.html", "deploy-cloud.html"] },
        { name: "核心概念", pages: ["concepts.html", "snapshots.html", "templates.html"] },
        { name: "开发接入", pages: ["tutorials.html", "network.html", "security.html", "storage.html"] },
        { name: "运维与观测", pages: ["operations.html", "observability.html", "metrics.html", "troubleshooting.html"] }
    ];

    function currentFile() {
        var path = window.location.pathname;
        var file = path.substring(path.lastIndexOf("/") + 1);
        if (!file || file === "") {
            file = "index.html";
        }
        return file;
    }

    function pageByHref(href) {
        for (var i = 0; i < PAGES.length; i++) {
            if (PAGES[i].href === href) return PAGES[i];
        }
        return null;
    }

    function activeGroup() {
        var file = currentFile();
        for (var i = 0; i < GROUPS.length; i++) {
            if (GROUPS[i].pages.indexOf(file) !== -1) return GROUPS[i].name;
        }
        return null;
    }

    function buildDesktopNav() {
        var home = document.querySelector(".nav-home");
        if (home) {
            home.classList.toggle("active", currentFile() === "index.html");
        }

        var active = activeGroup();
        document.querySelectorAll(".nav-group").forEach(function (groupEl) {
            var name = groupEl.getAttribute("data-group");
            groupEl.classList.toggle("current", name === active);
            groupEl.querySelectorAll(".nav-dropdown a").forEach(function (a) {
                a.classList.toggle("active", a.getAttribute("href") === currentFile());
            });
        });

        // 点击展开（触屏 / 键盘）
        document.querySelectorAll(".nav-group-btn").forEach(function (btn) {
            btn.addEventListener("click", function (e) {
                e.stopPropagation();
                var group = btn.parentElement;
                var isOpen = group.classList.contains("open");
                document.querySelectorAll(".nav-group.open").forEach(function (g) {
                    g.classList.remove("open");
                    var b = g.querySelector(".nav-group-btn");
                    if (b) b.setAttribute("aria-expanded", "false");
                });
                if (!isOpen) {
                    group.classList.add("open");
                    btn.setAttribute("aria-expanded", "true");
                }
            });
        });

        document.addEventListener("click", function () {
            document.querySelectorAll(".nav-group.open").forEach(function (g) {
                g.classList.remove("open");
                var b = g.querySelector(".nav-group-btn");
                if (b) b.setAttribute("aria-expanded", "false");
            });
        });

        document.addEventListener("keydown", function (e) {
            if (e.key === "Escape") {
                document.querySelectorAll(".nav-group.open").forEach(function (g) {
                    g.classList.remove("open");
                });
                var panel = document.querySelector(".nav-mobile-panel");
                var btn = document.getElementById("nav-menu-btn");
                if (panel) panel.classList.remove("open");
                if (btn) btn.classList.remove("active");
            }
        });
    }

    function buildMobileNav() {
        var panel = document.getElementById("nav-mobile-panel");
        if (!panel) return;

        var file = currentFile();
        var html = '<div class="nav-mobile-group"><a href="index.html" class="' +
            (file === "index.html" ? "active" : "") + '">🏠 首页：学习路径与知识地图</a></div>';

        GROUPS.forEach(function (group) {
            html += '<div class="nav-mobile-group"><div class="nav-mobile-group-title">' + group.name + '</div>';
            group.pages.forEach(function (href) {
                var page = pageByHref(href);
                if (!page) return;
                html += '<a href="' + page.href + '" class="' + (href === file ? "active" : "") + '">' +
                    page.icon + " " + page.title + "</a>";
            });
            html += "</div>";
        });

        panel.innerHTML = html;

        var menuBtn = document.getElementById("nav-menu-btn");
        if (menuBtn) {
            menuBtn.addEventListener("click", function (e) {
                e.stopPropagation();
                panel.classList.toggle("open");
                menuBtn.classList.toggle("active");
            });
            panel.addEventListener("click", function (e) {
                if (e.target.tagName === "A") {
                    panel.classList.remove("open");
                    menuBtn.classList.remove("active");
                }
            });
        }

        var current = document.getElementById("nav-current-page");
        if (current) {
            var page = pageByHref(file);
            current.textContent = page ? page.short : "首页";
        }
    }

    function buildPager() {
        var pager = document.getElementById("page-pager");
        if (!pager) return;

        var file = currentFile();
        var idx = -1;
        for (var i = 0; i < PAGES.length; i++) {
            if (PAGES[i].href === file) { idx = i; break; }
        }
        if (idx === -1) return;

        var prev = idx > 0 ? PAGES[idx - 1] : null;
        var next = idx < PAGES.length - 1 ? PAGES[idx + 1] : null;

        var html = "";
        if (prev) {
            html += '<a class="pager-link prev" href="' + prev.href + '">' +
                '<span class="pager-label">← 上一节</span>' +
                '<span class="pager-title">' + prev.title + '</span></a>';
        } else {
            html += '<span></span>';
        }
        if (next) {
            html += '<a class="pager-link next" href="' + next.href + '">' +
                '<span class="pager-label">下一节 →</span>' +
                '<span class="pager-title">' + next.title + '</span></a>';
        } else {
            html += '<span></span>';
        }
        pager.innerHTML = html;
    }

    function setupReadingProgress() {
        var bar = document.getElementById("reading-progress");
        var topBtn = document.getElementById("back-to-top");
        if (!bar && !topBtn) return;

        function onScroll() {
            var doc = document.documentElement;
            var scrollTop = window.pageYOffset || doc.scrollTop;
            var height = doc.scrollHeight - doc.clientHeight;
            var pct = height > 0 ? (scrollTop / height) * 100 : 0;
            if (bar) bar.style.width = pct + "%";
            if (topBtn) topBtn.classList.toggle("show", scrollTop > 600);
        }

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        if (topBtn) {
            topBtn.addEventListener("click", function () {
                window.scrollTo({ top: 0, behavior: "smooth" });
            });
        }
    }

    function init() {
        buildDesktopNav();
        buildMobileNav();
        buildPager();
        setupReadingProgress();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
