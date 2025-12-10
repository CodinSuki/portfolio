document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const slider = document.querySelector('.feature-carousel');
    const container = slider.querySelector('.feature-container');
    const toggleButton = document.getElementById('theme-toggle');
    const testButton = document.getElementById('theme-test');
    const themeIcon = document.getElementById('theme-icon');
    const timelineItems = document.querySelectorAll('.timeline-item');


    // CenterCarousel
    slider.scrollLeft = (container.scrollWidth - slider.clientWidth) / 2;

    // CarouselDrag
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2; // Adjust scroll speed
        slider.scrollLeft = scrollLeft - walk;
    });

    
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');

        if (body.classList.contains('dark')) {
            themeIcon.src = "images/DarkMode.png";
            themeIcon.alt = "Dark Mode";
        } else {
            themeIcon.src = "images/LightMode.png";
            themeIcon.alt = "Light Mode";
        }
    });

    const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = 'translateY(0)';
        }
        });
    }, { threshold: 0.2 });

    timelineItems.forEach(item => observer.observe(item));

});
