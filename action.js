
// let index = 0;
// const slides = document.querySelectorAll(".slide");
// const totalSlides = slides.length + 1;

// function nextSlide() {
//   index = (index + 3) % totalSlides;
//   document.querySelector(".slider").style.transform = `translateX(-${index * 200}%)`;
// }

// setInterval(nextSlide, 3000); // Tự động chuyển ảnh sau 3 giây


let index = 0;
    function showSlide() {
        const slider = document.querySelector('.slider');
            slider.style.transform = `translateX(${-index * 400}px)`;
    }
    function nextSlide() {
        index = (index + 1) % 3;
        showSlide();
    }
    function prevSlide() {
        index = (index - 1 + 3) % 3;
        showSlide();
    }
