// ============================================
// GROW LABS - MAIN JAVASCRIPT
// ============================================

// Global state
let currentLanguage = 'es';

// ============================================
// LANGUAGE SWITCHING
// ============================================

function setLanguage(lang) {
    currentLanguage = lang;

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = getNestedTranslation(translations[lang], key);

        if (translation) {
            element.textContent = translation;
        }
    });

    // Update active language buttons
    document.querySelectorAll('.lang-btn, .lang-btn-footer').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });

    // Store preference
    localStorage.setItem('preferredLanguage', lang);
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

// ============================================
// NAVIGATION
// ============================================

function initNavigation() {
    const header = document.getElementById('header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');

    // Scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });
    }

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scroll
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ============================================
// SOLUTION TABS
// ============================================

function initSolutionTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const solutionContents = document.querySelectorAll('.solution-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            solutionContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button and corresponding content
            button.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// ============================================
// LANGUAGE SELECTOR
// ============================================

function initLanguageSelector() {
    const langButtons = document.querySelectorAll('.lang-btn, .lang-btn-footer');

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });

    // Load saved language preference
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && translations[savedLanguage]) {
        setLanguage(savedLanguage);
    }
}

// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements
    const animatedElements = document.querySelectorAll('.pillar-card, .client-card, .solution__grid');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// ============================================
// HERO PARTICLES ANIMATION
// ============================================

function initHeroParticles() {
    const particlesContainer = document.querySelector('.hero__particles');
    if (!particlesContainer) return;

    // Create floating particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 4 + 2 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = i % 2 === 0 ? '#0066FF' : '#00D4FF';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.2;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s ease-in-out infinite`;
        particle.style.animationDelay = Math.random() * 5 + 's';

        particlesContainer.appendChild(particle);
    }
}

// ============================================
// STATS COUNTER ANIMATION
// ============================================

function animateCounter(element, target, suffix = '') {
    let current = 0;
    const increment = target / 100;
    const duration = 2000;
    const stepTime = duration / 100;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + suffix;
        }
    }, stepTime);
}

function initStatsAnimation() {
    const stats = document.querySelectorAll('.stat__number');
    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const text = entry.target.textContent;

                // Extract number and suffix
                const match = text.match(/(\d+)(.*)$/);
                if (match) {
                    const number = parseInt(match[1]);
                    const suffix = match[2];
                    entry.target.textContent = '0' + suffix;
                    animateCounter(entry.target, number, suffix);
                }
            }
        });
    }, observerOptions);

    stats.forEach(stat => observer.observe(stat));
}

// ============================================
// FORM HANDLING (if needed)
// ============================================

function initFormHandling() {
    const ctaButtons = document.querySelectorAll('[href="#demo"]');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();

            // You can implement a modal or redirect to a contact form
            alert(translations[currentLanguage].cta.text);

            // Example: Open email client
            // window.location.href = 'mailto:contacto@growlabs.com?subject=Solicitud de Demo';
        });
    });
}

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// ACCESSIBILITY
// ============================================

function initAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const navMenu = document.getElementById('nav-menu');
            const navToggle = document.getElementById('nav-toggle');
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });

    // Add focus visible for keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-nav');
        }
    });

    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-nav');
    });
}

// ============================================
// ANALYTICS (placeholder)
// ============================================

function trackEvent(category, action, label) {
    // Implement your analytics tracking here
    // Example: Google Analytics, Mixpanel, etc.
    console.log('Event tracked:', { category, action, label });
}

// Track button clicks
function initAnalytics() {
    const ctaButtons = document.querySelectorAll('.btn--primary');
    ctaButtons.forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('CTA', 'Click', button.textContent);
        });
    });

    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            trackEvent('Solutions', 'Tab Click', button.textContent);
        });
    });
}

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 Grow Labs - Initializing...');

    // Initialize all modules
    initNavigation();
    initSolutionTabs();
    initLanguageSelector();
    initScrollAnimations();
    initHeroParticles();
    initStatsAnimation();
    initFormHandling();
    lazyLoadImages();
    initAccessibility();
    initAnalytics();

    console.log('✅ Grow Labs - Ready!');
});

// ============================================
// UTILITY FUNCTIONS
// ============================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// ============================================
// EXPORT FOR TESTING (if needed)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        setLanguage,
        initNavigation,
        initSolutionTabs,
        trackEvent
    };
}



// ============================================
// ROI CALCULATOR
// ============================================

function initROICalculator() {
    const calculateBtn = document.getElementById('calculateROI');
    const resultsDiv = document.getElementById('roiResults');

    if (!calculateBtn) return;

    calculateBtn.addEventListener('click', () => {
        const patients = parseFloat(document.getElementById('patients').value) || 0;
        const avgValue = parseFloat(document.getElementById('avgValue').value) || 0;
        const lossRate = parseFloat(document.getElementById('lossRate').value) || 25;

        if (patients === 0 || avgValue === 0) {
            alert('Por favor ingresa valores válidos');
            return;
        }

        // Calculations
        const monthlyRevenue = patients * avgValue;
        const monthlyLoss = monthlyRevenue * (lossRate / 100);
        const yearlyLoss = monthlyLoss * 12;
        const recoveryRate = 0.95; // 95% capture rate with Grow Labs
        const potentialRecovery = monthlyLoss * recoveryRate * 12;

        // Format currency
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        });

        // Update UI
        document.getElementById('monthlyLoss').textContent = formatter.format(monthlyLoss);
        document.getElementById('yearlyLoss').textContent = formatter.format(yearlyLoss);
        document.getElementById('recovery').textContent = formatter.format(potentialRecovery);

        // Show results with animation
        resultsDiv.style.display = 'grid';
        resultsDiv.style.opacity = '0';
        setTimeout(() => {
            resultsDiv.style.transition = 'opacity 0.5s ease-in-out';
            resultsDiv.style.opacity = '1';
        }, 100);
    });
}

// ============================================
// FAQ ACCORDION
// ============================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-item__question');

        question.addEventListener('click', () => {
            // Close other items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });
    });
}

// Initialize language handling
function initLanguage() {
    // Set initial language from storage or default
    const storedLang = localStorage.getItem('preferredLanguage') || 'es';
    setLanguage(storedLang);

    // Add click listeners to buttons
    document.querySelectorAll('.lang-btn, .lang-btn-footer').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSolutionTabs();
    initLanguage();
    initROICalculator();
    initFAQ();
});
