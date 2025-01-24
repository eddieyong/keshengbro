document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const section = document.querySelector(this.getAttribute('href'));
            section.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// Enhanced contact lecturer popup with brotherhood theme
function contactLecturer() {
    Swal.fire({
        title: 'Contact Brother Ayub Nizam',
        html: `
            <div class="contact-popup">
                <p>📧 Email: brother.ayub@ypc.edu</p>
                <p>🏢 Office: Room 301 (Brotherhood Wing)</p>
                <p>⏰ Office Hours: Mon-Wed 2-4pm</p>
                <p>📱 WhatsApp: +60 12-345-6789</p>
                <p>Join our brotherhood in learning!</p>
            </div>
        `,
        icon: 'info',
        confirmButtonText: 'Thank you, Brother!',
        confirmButtonColor: '#e74c3c'
    });
}

// Add hover sound effect for buttons
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        const hoverSound = new Audio('hover.mp3');
        hoverSound.volume = 0.2;
        hoverSound.play();
    });
});

// Add scroll reveal animation
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight * 0.75) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});
