let currentIndex = 0;
const slides = document.getElementById('sliderWrapper');
const dots = document.querySelectorAll('.dot');

function showSlides() {
    currentIndex = (currentIndex + 1) % 3;
    slides.style.transform = `translateX(${currentIndex * 33.333}%)`;
    
    // تحديث النقط
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

setInterval(showSlides, 3000); // يقلب كل 3 ثواني

