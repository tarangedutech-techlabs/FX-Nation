// Mobile Menu Toggle
function toggleMobileMenu() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('active');
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('navLinks').classList.remove('active');
    });
});

// Course Dropdown Function
function showCourseDetails(selectElement) {
    const selectedValue = selectElement.value;
    
    // Hide all course details first
    document.getElementById('basic-course').style.display = 'none';
    document.getElementById('advanced-course').style.display = 'none';
    
    // Show the selected course details
    if (selectedValue === 'basic') {
        document.getElementById('basic-course').style.display = 'block';
    } else if (selectedValue === 'advanced') {
        document.getElementById('advanced-course').style.display = 'block';
    }
}

// FAQ Toggle - Fixed version
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Form Submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registrationForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = {};
            
            // Convert form data to object
            for (let [key, value] of formData.entries()) {
                if (key === 'instruments') {
                    if (!data[key]) {
                        data[key] = [];
                    }
                    data[key].push(value);
                } else {
                    data[key] = value;
                }
            }
            
            // Validate instruments
            if (!data.instruments || data.instruments.length === 0) {
                alert('Please select at least one preferred instrument');
                return;
            }
            
            // Show loading
            document.getElementById('registrationForm').style.display = 'none';
            document.getElementById('loadingSpinner').style.display = 'block';
            
            // Simulate form submission (replace with actual API call)
            setTimeout(() => {
                document.getElementById('loadingSpinner').style.display = 'none';
                alert('Thank you for registering! We will contact you shortly via email and WhatsApp.');
                document.getElementById('registrationForm').reset();
                document.getElementById('registrationForm').style.display = 'block';
                
                // Log data (in production, send to backend)
                console.log('Registration Data:', data);
            }, 2000);
        });
    }
});

// Smooth scroll with offset for fixed nav
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Advanced Scroll Animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0) translateX(0) scale(1) rotate(0)';
            
            // Trigger animation by adding active class
            entry.target.classList.add('animated');
            
            // Unobserve after animation
            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    // Service cards
    document.querySelectorAll('.showcase-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
        el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        animationObserver.observe(el);
    });

    // Program cards
    document.querySelectorAll('.program-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
        el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        animationObserver.observe(el);
    });

    // Resource cards
    document.querySelectorAll('.resource-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.8)';
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        animationObserver.observe(el);
    });

    // Value points
    document.querySelectorAll('.value-point').forEach((el, index) => {
        el.style.opacity = '0';
        const direction = index % 2 === 0 ? -60 : 60;
        el.style.transform = `translateX(${direction}px)`;
        el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`;
        animationObserver.observe(el);
    });

    // Why choose cards
    document.querySelectorAll('.why-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        animationObserver.observe(el);
    });

    // Review cards
    document.querySelectorAll('.review-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(60px)';
        el.style.transition = `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        animationObserver.observe(el);
    });

    // FAQ items
    document.querySelectorAll('.faq-item').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateX(-60px)';
        el.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`;
        animationObserver.observe(el);
    });

    // Section titles
    document.querySelectorAll('.section-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-30px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        animationObserver.observe(el);
    });

    // Section subtitles
    document.querySelectorAll('.section-subtitle').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-20px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s';
        animationObserver.observe(el);
    });

    // Subsection titles
    document.querySelectorAll('.subsection-title').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-20px)';
        el.style.transition = 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        animationObserver.observe(el);
    });
});

// Parallax effect on scroll
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrolled = window.pageYOffset;
            
            // Parallax for hero content
            const heroContent = document.querySelector('.hero-content');
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
                heroContent.style.opacity = 1 - (scrolled / 700);
            }

            // Parallax for bull icon
            const bullIcon = document.querySelector('.bull-icon');
            if (bullIcon) {
                bullIcon.style.transform = `translateY(${scrolled * 0.2}px) rotate(${scrolled * 0.1}deg)`;
            }

            ticking = false;
        });
        ticking = true;
    }
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = 'rgba(255, 255, 255, 0.98)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = 'none';
    }
});

// Magnetic button effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mousemove', (e) => {
        const rect = button.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    });

    button.addEventListener('mouseleave', () => {
        button.style.transform = '';
    });
});

// Add cursor follow effect for cards
document.querySelectorAll('.showcase-card, .program-card, .why-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = '';
    });
});

// Smooth reveal for form inputs
const formInputs = document.querySelectorAll('input, select, textarea');
formInputs.forEach((input, index) => {
    input.style.opacity = '0';
    input.style.transform = 'translateX(-20px)';
    input.style.transition = `all 0.5s ease ${index * 0.05}s`;
    
    const formObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateX(0)';
                formObserver.unobserve(entry.target);
            }
        });
    });
    
    formObserver.observe(input);
});

// Add typing effect to hero title
const heroTitle = document.querySelector('.hero h1');
if (heroTitle) {
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let index = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (index < text.length) {
            heroTitle.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, typeSpeed);
        }
    }
    
    setTimeout(typeWriter, 500);
}

// Preload animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
