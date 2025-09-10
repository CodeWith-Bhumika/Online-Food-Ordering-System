// Simple JavaScript for interactive features
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effects to category cards
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add hover effects to offer cards
    const offerCards = document.querySelectorAll('.offer-card');
    offerCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add click handlers for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    if (searchInput) {
        searchInput.addEventListener('focus', function() {
            this.parentElement.style.transform = 'scale(1.02)';
        });
        
        searchInput.addEventListener('blur', function() {
            this.parentElement.style.transform = 'scale(1)';
        });
    }

    // Add animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for scroll animation
    const animateElements = document.querySelectorAll('.category-card, .offer-card, .plan-card');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Cart functionality
    let cartCount = 2;
    const cartCountElement = document.querySelector('.cart-count');
    
    // Add to cart buttons (if they exist)
    const addToCartButtons = document.querySelectorAll('[data-add-to-cart]');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            cartCount++;
            cartCountElement.textContent = cartCount;
            
            // Add animation to cart icon
            const cartIcon = document.querySelector('.cart-icon');
            cartIcon.style.transform = 'scale(1.2)';
            setTimeout(() => {
                cartIcon.style.transform = 'scale(1)';
            }, 200);
            
            // Show success message (you can customize this)
            console.log('Item added to cart!');
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .btn {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;/* Reset and Base Styles */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #2a2a2a;
    background: #ffffff;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* Color Variables */
:root {
    /* Primary Colors */
    --primary-green: #22c55e;
    --primary-red: #ef4444;
    --primary-yellow: #fbbf24;
    
    /* Food Category Colors */
    --pizza-color: #ff7849;
    --burger-color: #fbbf24;
    --sushi-color: #a855f7;
    --mexican-color: #f97316;
    --chinese-color: #dc2626;
    --indian-color: #16a34a;
    --dessert-color: #e879f9;
    --salad-color: #65a30d;
    
    /* Neutral Colors */
    --text-dark: #1f2937;
    --text-light: #6b7280;
    --bg-light: #f9fafb;
    --border-color: #e5e7eb;
    --white: #ffffff;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.gradient-text {
    background: linear-gradient(135deg, var(--primary-yellow), var(--primary-red), var(--primary-green));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.accent-text {
    color: var(--primary-yellow);
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

/* Button Styles */
.btn {
    padding: 12px 24px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.btn-primary {
    background: var(--primary-green);
    color: white;
}

.btn-primary:hover {
    background: #16a34a;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(34, 197, 94, 0.4);
}

.btn-secondary {
    background: var(--primary-red);
    color: white;
}

.btn-secondary:hover {
    background: #dc2626;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(239, 68, 68, 0.4);
}

.btn-outline {
    background: rgba(255,255,255,0.1);
    color: white;
    border: 2px solid white;
}

.btn-outline:hover {
    background: white;
    color: var(--text-dark);
}

.btn-lg {
    padding: 16px 32px;
    font-size: 18px;
}

.btn-full {
    width: 100%;
}

/* Header */
.header {
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--border-color);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 0;
    gap: 20px;
}

.logo {
    display: flex;
    align-items: center;
    gap: 12px;
}

.logo-icon {
    width: 40px;
    height: 40px;
    background: var(--primary-green);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 20px;
}

.logo h1 {
    font-size: 24px;
    color: var(--primary-green);
    margin: 0;
}

.location {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--text-light);
}

.search-bar {
    position: relative;
    flex: 1;
    max-width: 400px;
}

.search-bar input {
    width: 100%;
    padding: 12px 16px 12px 40px;
    border: 1px solid var(--border-color);
    border-radius: 12px;
    background: var(--bg-light);
    font-size: 16px;
}

.search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 16px;
}

.cart-icon, .user-icon {
    position: relative;
    font-size: 24px;
    cursor: pointer;
    padding: 8px;
}

.cart-count {
    position: absolute;
    top: 0;
    right: 0;
    background: var(--primary-red);
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
}

/* Hero Section */
.hero {
    position: relative;
    min-height: 600px;
    background-image: url('src/assets/hero-background.jpg');
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;
    overflow: hidden;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(239, 68, 68, 0.9));
}

.hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    animation: bounce-gentle 2s ease-in-out infinite;
}

.hero-subtitle {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: rgba(255,255,255,0.9);
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3rem;
}

.hero-features {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
}

.feature-card {
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.feature-icon {
    font-size: 2rem;
}

.feature-text h3 {
    margin-bottom: 0.5rem;
}

.feature-text p {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
}

@keyframes bounce-gentle {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-10px);
    }
    60% {
        transform: translateY(-5px);
    }
}

/* Food Categories */
.food-categories {
    padding: 4rem 0;
    background: linear-gradient(to bottom, var(--white), var(--bg-light));
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.5rem;
    color: var(--text-dark);
    margin-bottom: 1rem;
}

.section-header p {
    font-size: 1.1rem;
    color: var(--text-light);
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
}

.category-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    border: none;
}

.category-card:hover {
    transform: translateY(-10px) scale(1.02);
}

.category-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.category-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}

.category-card:hover .category-image img {
    transform: scale(1.1);
}

.category-overlay {
    position: absolute;
    inset: 0;
    opacity: 0.2;
    transition: opacity 0.3s ease;
}

.category-card:hover .category-overlay {
    opacity: 0.3;
}

.badges {
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    display: flex;
    justify-content: space-between;
}

.badge {
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.badge.veg {
    background: var(--primary-green);
    color: white;
}

.badge.non-veg {
    background: var(--primary-red);
    color: white;
}

.badge.rating {
    background: rgba(255,255,255,0.95);
    color: var(--text-dark);
}

.category-accent {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6px;
}

/* Category-specific gradients and accents */
.pizza-gradient { background: linear-gradient(135deg, var(--pizza-color), #ff9470); }
.burger-gradient { background: linear-gradient(135deg, var(--burger-color), #fcd34d); }
.indian-gradient { background: linear-gradient(135deg, var(--indian-color), #22c55e); }
.sushi-gradient { background: linear-gradient(135deg, var(--sushi-color), #c084fc); }
.chinese-gradient { background: linear-gradient(135deg, var(--chinese-color), #f87171); }
.pasta-gradient { background: linear-gradient(135deg, var(--indian-color), #34d399); }
.mexican-gradient { background: linear-gradient(135deg, var(--mexican-color), #fb923c); }
.dessert-gradient { background: linear-gradient(135deg, var(--dessert-color), #f0abfc); }
.salad-gradient { background: linear-gradient(135deg, var(--salad-color), #84cc16); }

.pizza-accent { background: var(--pizza-color); }
.burger-accent { background: var(--burger-color); }
.indian-accent { background: var(--indian-color); }
.sushi-accent { background: var(--sushi-color); }
.chinese-accent { background: var(--chinese-color); }
.pasta-accent { background: var(--indian-color); }
.mexican-accent { background: var(--mexican-color); }
.dessert-accent { background: var(--dessert-color); }
.salad-accent { background: var(--salad-color); }

/* Category shadow effects */
.pizza-theme:hover { box-shadow: 0 15px 40px rgba(255, 120, 73, 0.4); }
.burger-theme:hover { box-shadow: 0 15px 40px rgba(251, 191, 36, 0.4); }
.indian-theme:hover { box-shadow: 0 15px 40px rgba(22, 163, 74, 0.4); }
.sushi-theme:hover { box-shadow: 0 15px 40px rgba(168, 85, 247, 0.4); }
.chinese-theme:hover { box-shadow: 0 15px 40px rgba(220, 38, 38, 0.4); }
.pasta-theme:hover { box-shadow: 0 15px 40px rgba(22, 163, 74, 0.4); }
.mexican-theme:hover { box-shadow: 0 15px 40px rgba(249, 115, 22, 0.4); }
.dessert-theme:hover { box-shadow: 0 15px 40px rgba(232, 121, 249, 0.4); }
.salad-theme:hover { box-shadow: 0 15px 40px rgba(101, 163, 13, 0.4); }

.category-info {
    padding: 1.5rem;
    background: linear-gradient(to bottom, white, var(--bg-light));
}

.category-info h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    color: var(--text-dark);
    transition: color 0.3s ease;
}

.category-card:hover .category-info h3 {
    color: var(--primary-green);
}

.category-details {
    display: flex;
    justify-content: space-between;
    color: var(--text-light);
    font-size: 0.9rem;
    font-weight: 500;
}

/* Special Offers */
.special-offers {
    padding: 4rem 0;
    background: linear-gradient(to bottom, var(--bg-light), white);
}

.offers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
}

.offer-card {
    background: white;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    cursor: pointer;
}

.offer-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.offer-header {
    height: 8px;
    background: linear-gradient(90deg, var(--primary-green), var(--primary-yellow), var(--primary-red));
}

.offer-header.first-order {
    background: linear-gradient(90deg, var(--primary-green), #22d3ee);
}

.offer-header.weekend {
    background: linear-gradient(90deg, var(--primary-red), var(--pizza-color));
}

.offer-header.premium {
    background: linear-gradient(90deg, var(--primary-yellow), var(--burger-color));
}

.offer-content {
    padding: 2rem;
}

.offer-icon {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.offer-discount {
    font-size: 1.5rem;
    font-weight: 800;
    color: var(--primary-green);
    margin-bottom: 1rem;
}

.offer-content h3 {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: var(--text-dark);
}

.offer-content p {
    color: var(--text-light);
    margin-bottom: 1.5rem;
}

.offer-details {
    margin-bottom: 1.5rem;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
}

.detail-row span:first-child {
    color: var(--text-light);
}

.code {
    font-family: 'Courier New', monospace;
    font-weight: bold;
    color: var(--primary-green);
}

.valid-until {
    color: var(--primary-red);
    font-weight: 600;
}

/* Membership Plans */
.membership-plans {
    padding: 4rem 0;
    background: var(--bg-light);
}

.plans-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 3rem;
}

.plan-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    text-align: center;
    position: relative;
    box-shadow: 0 10px 40px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
}

.plan-card.popular {
    border: 3px solid var(--primary-yellow);
    transform: scale(1.05);
}

.plan-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.15);
}

.plan-card.popular:hover {
    transform: translateY(-10px) scale(1.05);
}

.popular-badge {
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    background: var(--primary-yellow);
    color: var(--text-dark);
    padding: 8px 20px;
    border-radius: 20px;
    font-weight: 600;
    font-size: 0.9rem;
}

.plan-icon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1.5rem;
    font-size: 1.5rem;
}

.plan-icon.basic {
    background: var(--text-light);
    color: white;
}

.plan-icon.premium {
    background: var(--primary-yellow);
    color: white;
}

.plan-icon.vip {
    background: var(--primary-red);
    color: white;
}

.plan-card h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.plan-price {
    font-size: 2.5rem;
    font-weight: 800;
    color: var(--text-dark);
    margin-bottom: 1.5rem;
}

.period {
    font-size: 1rem;
    font-weight: normal;
    color: var(--text-light);
}

.original-price {
    font-size: 0.9rem;
    color: var(--text-light);
    text-decoration: line-through;
    margin-top: 0.5rem;
}

.plan-features {
    list-style: none;
    margin-bottom: 2rem;
    text-align: left;
}

.plan-features li {
    padding: 0.5rem 0;
    border-bottom: 1px solid var(--border-color);
    color: var(--text-dark);
}

.first-user-offer {
    position: relative;
    background: linear-gradient(135deg, var(--primary-green), var(--primary-red));
    border-radius: 20px;
    padding: 3rem;
    text-align: center;
    color: white;
    margin-top: 3rem;
    overflow: hidden;
}

.first-user-offer h3 {
    font-size: 2rem;
    margin-bottom: 1rem;
}

.first-user-offer p {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    color: rgba(255,255,255,0.9);
}

/* Footer */
.footer {
    background: var(--text-dark);
    color: white;
    padding: 3rem 0 1rem;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 1rem;
}

.footer-section h4 {
    margin-bottom: 1rem;
    color: white;
}

.footer-section ul {
    list-style: none;
}

.footer-section li {
    margin-bottom: 0.5rem;
}

.footer-section a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-section a:hover {
    color: var(--primary-green);
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-links a {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
}

.social-links a:hover {
    transform: scale(1.2);
}

.contact-info p {
    margin-bottom: 0.5rem;
    color: rgba(255,255,255,0.8);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2rem;
    border-top: 1px solid rgba(255,255,255,0.2);
    flex-wrap: wrap;
    gap: 1rem;
}

.footer-bottom-right {
    display: flex;
    gap: 2rem;
}

.footer-bottom-right a {
    color: rgba(255,255,255,0.8);
    text-decoration: none;
    font-size: 0.9rem;
}

.footer-bottom-right a:hover {
    color: var(--primary-green);
}

.refund-policy {
    background: rgba(255,255,255,0.1);
    border-radius: 12px;
    padding: 1.5rem;
    margin-top: 2rem;
}

.refund-policy h5 {
    color: var(--primary-yellow);
    margin-bottom: 0.5rem;
}

.refund-policy p {
    color: rgba(255,255,255,0.8);
    font-size: 0.9rem;
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-wrapper {
        flex-direction: column;
        gap: 1rem;
    }
    
    .location {
        display: none;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .hero-buttons {
        flex-direction: column;
        align-items: center;
    }
    
    .hero-features {
        grid-template-columns: 1fr;
    }
    
    .categories-grid {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
    
    .offers-grid {
        grid-template-columns: 1fr;
    }
    
    .plans-grid {
        grid-template-columns: 1fr;
    }
    
    .plan-card.popular {
        transform: none;
    }
    
    .footer-bottom {
        flex-direction: column;
        text-align: center;
    }
    
    .footer-bottom-right {
        flex-wrap: wrap;
        justify-content: center;
    }
}
        }
    }
    
    .search-bar {
        transition: transform 0.3s ease;
    }
`;
document.head.appendChild(style);