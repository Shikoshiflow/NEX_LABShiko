/* =========================================
   NEX_LAB | SYSTEM LOGIC V8.0
   ========================================= */

// --- 0. DICTIONARY (СЛОВАРЬ ПЕРЕВОДОВ) ---
const translations = {
    ru: {
        // --- NAVIGATION (Оставлено как код) ---
        nav_system: ".system()",
        nav_data: ".data()",
        nav_works: ".works()",
        nav_log: ".log()",
        conn_btn: "СВЯЗЬ", 
        
        // --- HERO SECTION ---
        // Зеленый текст (Печатная машинка)
        typewriter_text: "> Пользователь обнаружен. Добро пожаловать в систему.",
        
        hero_subtitle: "ВЕБ_РАЗРАБОТЧИК__ОПЕРАТОР", 
        hero_desc: "Создаю цифровые миры на чистом коде.<br>Эстетика киберпанка и надежность архитектуры.",
        btn_projects: "СМОТРЕТЬ ПРОЕКТЫ",
        btn_tg: "TELEGRAM",
        
        // --- SKILLS SECTION (Гибридный стиль) ---
        sec_skills: "SYSTEM_CORE <span class=\"accent\">||</span> НАВЫКИ",
        skill_struct: "Structure",
        skill_struct_desc: "Семантическая и чистая верстка",
        skill_visual: "Visuals",
        skill_visual_desc: "Анимации, Grid, Flexbox, Neo-effects",
        skill_logic: "Logic",
        skill_logic_desc: "Интерактивность без тяжелых библиотек",
        
        // --- PROJECTS SECTION (Гибридный стиль) ---
        sec_works: "DEPLOYED_UNITS <span class=\"accent\">||</span> ПРОЕКТЫ",
        proj_alpha_desc: "Корпоративный сайт в темных тонах.",
        link_source: "View Source ->",
        proj_neon_desc: "Лендинг пейдж с анимациями.",
        
        // --- CONTACT & FOOTER ---
        sec_contact: "INITIATE_PROTOCOL",
        contact_desc: "Есть идея для проекта? Система готова к обработке заказа.<br>Связь напрямую через зашифрованный канал.",
        btn_tg_channel: "ОТКРЫТЬ КАНАЛ",
        social_label: "ИЛИ ЧЕРЕЗ:",
        copyright: "&copy; 2025 Shikoshi Dev.<br>Все системы работают штатно.",
        footer_home: "Главная",
        footer_projects: "Проекты",
        footer_privacy: "Privacy Policy",
        status_online: "СИСТЕМА: ОНЛАЙН",
        
        // --- BLOG PAGE ---
        blog_subtitle: "// РЕПОЗИТОРИЙ МЫСЛЕЙ И КОДА",
        read_btn: "[ ОТКРЫТЬ_ФАЙЛ ]",
        close_btn: "[ X ] ЗАКРЫТЬ",
        
        // Превью статей
        post1_title: "OPTIMIZING_CANVAS_PARTICLES",
        post1_preview: "Разбор алгоритма создания системы частиц без просадки FPS. Использование OffscreenCanvas...",
        post2_title: "GLITCH_EFFECT_CSS_ONLY",
        post2_preview: "Как создать реалистичный эффект цифровых помех, используя только CSS keyframes...",
        post3_title: "VS_CODE_SETUP_V2",
        post3_preview: "Мой конфиг для продуктивной разработки. Список плагинов, тема SynthWave '84..."
    },
    en: {
        // --- NAVIGATION ---
        nav_system: ".system()",
        nav_data: ".data()",
        nav_works: ".works()",
        nav_log: ".log()",
        conn_btn: "CONNECTION",
        
        // --- HERO SECTION ---
        typewriter_text: "> User Detected. Welcome to the System, Guest.",
        
        hero_subtitle: "WEB_DEVELOPER__OPERATOR",
        hero_desc: "Creating digital worlds with pure code.<br>Cyberpunk aesthetics and architectural reliability.",
        btn_projects: "VIEW PROJECTS",
        btn_tg: "TELEGRAM",
        
        // --- SKILLS SECTION ---
        sec_skills: "SYSTEM_CORE <span class=\"accent\">||</span> SKILLS",
        skill_struct: "Structure",
        skill_struct_desc: "Semantic and clean markup",
        skill_visual: "Visuals",
        skill_visual_desc: "Animations, Grid, Flexbox, Neo-effects",
        skill_logic: "Logic",
        skill_logic_desc: "Interactivity without heavy libraries",
        
        // --- PROJECTS SECTION ---
        sec_works: "DEPLOYED_UNITS <span class=\"accent\">||</span> WORK",
        proj_alpha_desc: "Corporate website in dark tones.",
        link_source: "View Source ->",
        proj_neon_desc: "Landing page with animations.",
        
        // --- CONTACT & FOOTER ---
        sec_contact: "INITIATE_PROTOCOL",
        contact_desc: "Have a project idea? System ready for processing.<br>Direct connection via encrypted channel.",
        btn_tg_channel: "OPEN TELEGRAM CHANNEL",
        social_label: "OR CONNECT VIA:",
        copyright: "&copy; 2025 Shikoshi Dev.<br>All systems operational.",
        footer_home: "Home",
        footer_projects: "Projects",
        footer_privacy: "Privacy Policy",
        status_online: "SYSTEM: ONLINE",

        // --- BLOG PAGE ---
        blog_subtitle: "// REPOSITORY OF THOUGHTS AND CODE",
        read_btn: "[ OPEN_FILE ]",
        close_btn: "[ X ] CLOSE",
        
        post1_title: "OPTIMIZING_CANVAS_PARTICLES",
        post1_preview: "Analyzing the algorithm for creating a particle system without FPS drop...",
        post2_title: "GLITCH_EFFECT_CSS_ONLY",
        post2_preview: "How to create a realistic digital interference effect using only CSS...",
        post3_title: "VS_CODE_SETUP_V2",
        post3_preview: "My config for productive development. List of plugins..."
    }
};

// --- FUNCTION: LANGUAGE SWITCHER ---
window.setLanguage = function(lang) {
    localStorage.setItem('nex_lang', lang);
    
    // Toggle active buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.innerText.toLowerCase() === lang);
    });

    // Update static text (data-i18n)
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });
    
    // Restart Typewriter
    const textElement = document.querySelector('.terminal-text');
    if (textElement) {
        textElement.textContent = ''; 
        setTimeout(() => {
            initTypeWriter(); 
        }, 100);
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
};


document.addEventListener('DOMContentLoaded', () => {

    // --- 1. INIT LANGUAGE ---
    const savedLang = localStorage.getItem('nex_lang') || 'ru';
    window.setLanguage(savedLang);
    
    // --- 2. EMERGENCY UNLOCK (Safety Timer) ---
    setTimeout(() => {
        const preloader = document.getElementById('cyber-preloader');
        if (preloader && !preloader.classList.contains('system-loaded')) {
            console.warn('System: Emergency Unlock Activated');
            preloader.classList.add('system-loaded');
            document.body.style.overflow = 'auto'; 
        }
    }, 4500);

    // --- 3. TYPEWRITER LOGIC (Restartable) ---
    let typewriterTimeout; 

    window.initTypeWriter = function() {
        const textElement = document.querySelector('.terminal-text');
        if (!textElement) return;

        clearTimeout(typewriterTimeout);
        
        const currentLang = localStorage.getItem('nex_lang') || 'ru';
        const textToType = translations[currentLang].typewriter_text; 
        
        textElement.textContent = ''; 
        let charIndex = 0;
        const typeSpeed = 30; 

        function typeWriter() {
            if (charIndex < textToType.length) {
                textElement.textContent += textToType.charAt(charIndex);
                charIndex++;
                typewriterTimeout = setTimeout(typeWriter, typeSpeed);
            }
        }
        typeWriter();
    }

    // --- 4. PRELOADER & CANVAS PARTICLES ---
    const preloader = document.getElementById('cyber-preloader');
    const progressBar = document.getElementById('loaderProgress');
    const statusMsg = document.querySelector('.status-msg');
    const canvas = document.getElementById('logo-canvas');

    document.body.style.overflow = 'hidden';

    if (canvas) {
        const ctx = canvas.getContext('2d');
        const dpr = window.devicePixelRatio || 1;
        const cssWidth = 340;
        const cssHeight = 100;
        
        canvas.width = cssWidth * dpr;
        canvas.height = cssHeight * dpr;
        ctx.scale(dpr, dpr);

        // Particle System (Server Mode)
        const runParticleSystem = () => {
            let particles = [];
            const colors = ['#00f3ff', '#bc13fe', '#ffffff']; 

            class Particle {
                constructor(x, y) {
                    this.x = Math.random() * cssWidth;
                    this.y = Math.random() * cssHeight;
                    this.targetX = x;
                    this.targetY = y;
                    this.size = Math.random() * 1.5 + 0.5; 
                    this.color = colors[Math.floor(Math.random() * colors.length)];
                    this.speed = 0.015 + Math.random() * 0.025; 
                }
                update() {
                    const dx = this.targetX - this.x;
                    const dy = this.targetY - this.y;
                    this.x += dx * this.speed;
                    this.y += dy * this.speed;
                }
                draw() {
                    ctx.beginPath();
                    ctx.fillStyle = this.color;
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            ctx.fillStyle = '#ffffff';
            ctx.font = '900 42px Orbitron, sans-serif'; 
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillText('NEX_LAB', cssWidth / 2, cssHeight / 2);

            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            ctx.clearRect(0, 0, cssWidth, cssHeight);

            const density = 2 * dpr; 
            for (let y = 0; y < canvas.height; y += density) {
                for (let x = 0; x < canvas.width; x += density) {
                    const index = (y * 4 * canvas.width) + (x * 4 + 3);
                    if (imageData.data[index] > 128) {
                        particles.push(new Particle(x / dpr, y / dpr));
                    }
                }
            }

            function animate() {
                ctx.clearRect(0, 0, cssWidth, cssHeight);
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                }
                if (!preloader.classList.contains('system-loaded')) {
                    requestAnimationFrame(animate);
                }
            }
            animate();
        };

        // Fallback System (Local/Glitch Mode)
        const runFallbackSystem = () => {
            console.log("Local mode detected: Running Glitch animation");
            function animateGlitch() {
                ctx.clearRect(0, 0, cssWidth, cssHeight);
                ctx.font = '900 42px Orbitron, sans-serif'; 
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                const opacity = 0.8 + Math.random() * 0.2;
                
                if (Math.random() > 0.9) {
                    ctx.fillStyle = `rgba(0, 243, 255, ${opacity})`;
                    ctx.fillText('NEX_LAB', cssWidth / 2 - 2, cssHeight / 2);
                }
                if (Math.random() > 0.9) {
                    ctx.fillStyle = `rgba(188, 19, 254, ${opacity})`;
                    ctx.fillText('NEX_LAB', cssWidth / 2 + 2, cssHeight / 2);
                }

                ctx.fillStyle = '#ffffff';
                ctx.shadowBlur = 15;
                ctx.shadowColor = '#00f3ff';
                ctx.fillText('NEX_LAB', cssWidth / 2, cssHeight / 2);
                ctx.shadowBlur = 0;

                if (!preloader.classList.contains('system-loaded')) {
                    requestAnimationFrame(animateGlitch);
                }
            }
            animateGlitch();
        };

        document.fonts.ready.then(() => {
            try {
                runParticleSystem();
            } catch (e) {
                runFallbackSystem();
            }
        });
    }

    // --- 5. PROGRESS BAR LOGIC ---
    if (preloader && progressBar) {
        let width = 0;
        const interval = setInterval(() => {
            width += 0.5 + Math.random(); 
            if (width > 100) width = 100;
            progressBar.style.width = width + '%';

            if (width >= 100) {
                clearInterval(interval);
                if (statusMsg) {
                    statusMsg.style.opacity = '1';
                    statusMsg.style.transform = 'translateY(0)';
                }
                setTimeout(() => {
                    preloader.classList.add('system-loaded');
                    document.body.style.overflow = 'auto'; 
                    setTimeout(initTypeWriter, 300); 
                }, 3000); 
            }
        }, 20); 
    } else {
        document.body.style.overflow = 'auto';
        initTypeWriter();
    }

    // --- 6. 3D TILT SYSTEM ---
    function init3DTilt() {
        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => {
            const glare = document.createElement('div');
            glare.classList.add('card-glare');
            card.appendChild(glare);

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = ((y - centerY) / centerY) * -10; 
                const rotateY = ((x - centerX) / centerX) * 10;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                glare.style.left = `${x}px`;
                glare.style.top = `${y}px`;
                glare.style.opacity = '1'; 
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                glare.style.opacity = '0';
            });
        });
    }
    init3DTilt();

    // --- 7. MOBILE MENU ---
    const burger = document.getElementById('burgerBtn');
    const nav = document.querySelector('.main-nav');
    
    if (burger) {
        burger.addEventListener('click', () => {
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            let target = document.querySelector(targetId);
            
            if (!target && this.getAttribute('href').includes('.html')) {
                window.location.href = this.getAttribute('href');
                return;
            }

            if (target) {
                window.scrollTo({
                    top: target.getBoundingClientRect().top + window.pageYOffset - 70,
                    behavior: "smooth"
                });
            }
        });
    });

    // --- 8. BLOG SYSTEM (DATA & MODAL) ---
    const blogData = {
        'post1': {
            ru: {
                title: "OPTIMIZING_CANVAS_PARTICLES",
                date: "2025.05.20 | JS_CORE",
                text: `> INITIATING LOG READ...\n\nПри разработке визуальных эффектов для NEX_LAB главной задачей была оптимизация. Стандартный рендеринг 1000 частиц на 4K мониторах вызывал просадки FPS до 40.\n\nРЕШЕНИЕ ПРОБЛЕМЫ:\nМы отказались от создания DOM-элементов для каждой частицы (div) в пользу чистого Canvas API.\n\n1. OffscreenCanvas:\nВся математика движения вынесена в Web Worker, чтобы не блокировать основной поток интерфейса.\n\n2. Typed Arrays:\nВместо обычных массивов JS использованы Float32Array для хранения координат, что ускорило обработку данных в 3 раза.\n\nИТОГ:\nСтабильные 60 FPS даже на мобильных устройствах при 2000 активных частиц.`
            },
            en: {
                title: "OPTIMIZING_CANVAS_PARTICLES",
                date: "2025.05.20 | JS_CORE",
                text: `> INITIATING LOG READ...\n\nDuring the development of visual effects for NEX_LAB, optimization was the main task. Standard rendering of 1000 particles caused FPS drops to 40 on 4K monitors.\n\nTHE SOLUTION:\nWe abandoned creating DOM elements for each particle (div) in favor of the pure Canvas API.\n\n1. OffscreenCanvas:\nAll motion mathematics is moved to a Web Worker so as not to block the main interface thread.\n\n2. Typed Arrays:\nInstead of regular JS arrays, Float32Array was used to store coordinates, which sped up data processing by 3 times.\n\nRESULT:\nStable 60 FPS even on mobile devices with 2000 active particles.`
            }
        },
        'post2': {
            ru: {
                title: "GLITCH_EFFECT_CSS_ONLY",
                date: "2025.05.15 | CYBER_UI",
                text: `> LOADING STYLE MODULES...\n\nМногие сайты используют тяжелые GIF или WebGL шейдеры для глитч-эффектов. Но для NEX_LAB мы использовали pure CSS.\n\nТЕХНИКА:\n1. Используем псевдоэлементы ::before и ::after.\n2. Свойство clip-path вырезает "полоски" текста.\n3. Анимация @keyframes хаотично двигает эти полоски.\n\nЭто дает "живой" эффект без JS.`
            },
            en: {
                title: "GLITCH_EFFECT_CSS_ONLY",
                date: "2025.05.15 | CYBER_UI",
                text: `> LOADING STYLE MODULES...\n\nMany sites use heavy GIFs or WebGL shaders for glitch effects. But for NEX_LAB we used pure CSS.\n\nTECHNIQUE:\n1. Using ::before and ::after pseudo-elements.\n2. The clip-path property cuts out "strips" of text.\n3. @keyframes animation chaotically moves these strips.\n\nThis gives a "live" effect without JS.`
            }
        },
        'post3': {
            ru: {
                title: "VS_CODE_SETUP_V2",
                date: "2025.04.10 | WORKFLOW",
                text: `> READING CONFIGURATION...\n\nМой сетап для работы в стиле Cyberpunk.\n\nTHEME:\nSynthWave '84 (с включенным эффектом свечения текста).\n\nFONT:\n'JetBrains Mono' или 'Fira Code' с лигатурами.`
            },
            en: {
                title: "VS_CODE_SETUP_V2",
                date: "2025.04.10 | WORKFLOW",
                text: `> READING CONFIGURATION...\n\nMy setup for Cyberpunk style work.\n\nTHEME:\nSynthWave '84 (with text glow effect enabled).\n\nFONT:\n'JetBrains Mono' or 'Fira Code' with ligatures.`
            }
        }
    };

    const modal = document.getElementById('log-modal');
    const modalTitle = document.getElementById('modal-heading');
    const modalDate = document.getElementById('modal-date');
    const modalText = document.getElementById('modal-text');

    window.openLog = function(postId) {
        const currentLang = localStorage.getItem('nex_lang') || 'ru';
        const post = blogData[postId];
        
        if (post && post[currentLang] && modal) {
            const data = post[currentLang];
            modalTitle.textContent = data.title;
            modalDate.textContent = data.date;
            modalText.innerText = data.text; 
            modal.classList.add('active');
            document.body.style.overflow = 'hidden'; 
        } else {
            console.error('Post not found:', postId);
        }
    };

    window.closeLog = function() {
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = 'auto'; 
        }
    };

    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeLog();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeLog();
        }
    });
});