document.addEventListener('DOMContentLoaded', () => {

    // Current Date Logic
    const dateElement = document.getElementById('current-date');
    const today = new Date();
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    dateElement.textContent = today.toLocaleDateString('pt-BR', options);

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade In Animation on Scroll
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('.feature-card, .pricing-card, .bonus-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });

    // Sales Notification Logic
    const names = ["Carlos S.", "Ana P.", "Marcos L.", "Fernanda R.", "João V.", "Beatriz M.", "Rafael K."];
    const notification = document.getElementById('sales-notification');
    const nameEl = document.getElementById('notification-name');
    const planEl = document.getElementById('notification-plan');

    function showNotification() {
        // Random Name
        const randomName = names[Math.floor(Math.random() * names.length)];

        // Random Plan (Weighted: 80% Blindado, 20% Básico)
        const isBlindado = Math.random() > 0.2;
        const planName = isBlindado ? "PACOTE BLINDADO" : "PACOTE BÁSICO";

        // Update Content
        nameEl.textContent = randomName;
        planEl.textContent = planName;

        // Show
        notification.classList.add('show');

        // Hide after 4s
        setTimeout(() => {
            notification.classList.remove('show');
        }, 4000);

        // Schedule next
        const nextTime = Math.random() * (15000 - 8000) + 8000; // 8-15s
        setTimeout(showNotification, nextTime);
    }

    // Start after 5s
    setTimeout(showNotification, 5000);

});
