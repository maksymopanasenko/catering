function slider({container, slide, nextArr, prevArr, totalCount, currentCount}) {
    const slides = document.querySelectorAll(slide),
          prevArrow = document.querySelector(prevArr),
          nextArrow = document.querySelector(nextArr),
          totalCounter = document.querySelector(totalCount),
          currentCounter = document.querySelector(currentCount);

    let slideIndex = 1;

    showSlides(slideIndex);

    if (slides.length < 10) {
        totalCounter.textContent = `0${slides.length}`;
    } else {
        totalCounter.textContent = slides.length;
    }

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }
        
        slides.forEach(slide => {
            slide.classList.add('hide');
            slide.classList.remove('show');
        });
        
        slides[slideIndex - 1].classList.add('show');
        slides[slideIndex - 1].classList.remove('hide');

        if (slides.length < 10) {
            currentCounter.textContent = `0${slideIndex}`;
        } else {
            totalCounter.textContent = slideIndex;
        }
    }

    function plusSlide(n) {
        showSlides(slideIndex += n);
    }

    prevArrow.addEventListener('click', () => {
        plusSlide(-1);
    });

    nextArrow.addEventListener('click', () => {
        plusSlide(1);
    });
}

export default slider;