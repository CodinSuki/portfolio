document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const slider = document.querySelector('.feature-carousel');
    const container = slider.querySelector('.feature-container');
    const toggleButton = document.getElementById('theme-toggle');
    const testButton = document.getElementById('theme-test');

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

    // dark mode
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('dark');
    });

    /*     
        testButton.addEventListener('click', () => {
            window.alert("I don't have a formal photo sorry sir D:");
        });
    }
        */
});
