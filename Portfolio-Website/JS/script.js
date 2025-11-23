// Enhanced portfolio interactions
console.log("🚀 Welcome to Hamid Ali's Cyber Portfolio!");
console.log("💻 Cybersecurity | Networking | Pentesting | Development");

// Remove annoying alert and replace with cool console message
console.log(`
███████ ███████ ██████  ██    ██ ███████ ██████  
██      ██      ██   ██ ██    ██ ██      ██   ██ 
███████ █████   ██████  ██    ██ █████   ██████  
     ██ ██      ██   ██  ██  ██  ██      ██   ██ 
███████ ███████ ██   ██   ████   ███████ ██   ██ 
`);

// Smooth scrolling for navigation
document.addEventListener('DOMContentLoaded', function() {
    // Add typing effect to header
    const headerText = "Hi, I'm Hamid Ali";
    const subText = "Computer Systems Engineering Student | Cybersecurity & Networking | Pentesting & Bug Bounty | CCNA | Cisco Ethical Hacker | Linux & Cloud | Frontend Developer";
    
    typeWriter(document.querySelector('header h1'), headerText, 0);
    setTimeout(() => {
        typeWriter(document.querySelector('header p'), subText, 50);
    }, 1000);

    // Add scroll animations
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

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Particle effect background
    createParticles();
});

// Typing effect function
function typeWriter(element, text, speed) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Particle background effect
function createParticles() {
    const colors = ['#0ff', '#0cc', '#099', '#066'];
    
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'fixed';
        particle.style.width = Math.random() * 3 + 'px';
        particle.style.height = particle.style.width;
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.borderRadius = '50%';
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.top = Math.random() * 100 + 'vh';
        particle.style.opacity = Math.random() * 0.6 + 0.2;
        particle.style.pointerEvents = 'none';
        particle.style.zIndex = '-1';
        particle.style.animation = `float ${Math.random() * 10 + 10}s linear infinite`;
        
        document.body.appendChild(particle);
    }
}

// Add cyber security quotes
const quotes = [
    "💻 Code like the world depends on it - because it might!",
    "🔒 Security is not a product, but a process.",
    "🐛 Finding bugs is an art, fixing them is a science.",
    "🌐 In the world of cybersecurity, paranoia is a virtue."
];

// Display random quote in console
console.log(`%c${quotes[Math.floor(Math.random() * quotes.length)]}`, 
    'color: #0ff; font-size: 14px; font-weight: bold;');
