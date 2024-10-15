import NormalizeStyle from './normalize.css';
import Style from './style.css';

exports.printMsg = function() {
    console.log("Thank you for using my package!");
  }

const imgs = document.querySelectorAll('.carousel-item img');

imgs.forEach(img => {
    img.addEventListener('contextmenu', event => {
        event.preventDefault();
    });
    img.addEventListener('mousedown', event => {
        if (event.button === 2 || event.button === 3) {
            event.preventDefault();
        }
    });
});



const container = document.querySelector('.container');

//Disable scroll on the carousel
container.addEventListener('wheel', event => {
    event.preventDefault();
    }, { passive: false });

//Disable touchmove on the carousel
container.addEventListener('touchmove', event => {
    event.preventDefault();
    }, { passive: false });

//Disable drag on the carousel
container.addEventListener('dragstart', event => {
    event.preventDefault();
    }, { passive: false });


function scrollToSlide(slideId) {
    const slide = document.getElementById(slideId);
    
    //Handle the case where the slide ID is invalid
    if (!slide) {
        console.error(`Slide with ID "${slideId}" not found.`);
        return;
    }
    
    // *Scroll the carousel wrapper to the slide's position*
    const carouselWrapper = document.querySelector('.container');
    
    // Calculate the horizontal center position for the slide
    // (slide.offsetLeft is the distance from the left edge of the slide to the left edge of the carousel wrapper)
    const slideLeft = slide.offsetLeft;

    // Get the width of the carousel wrapper
    const wrapperWidth = carouselWrapper.offsetWidth;

    // Get the width of the slide
    const slideWidth = slide.offsetWidth;
    
    // Calculate the position to scroll to
    const scrollToPosition = slideLeft - (wrapperWidth / 2) + (slideWidth / 2);
    
    // Scroll to the calculated position, centering the slide
    carouselWrapper.scrollTo({
        left: scrollToPosition,
        behavior: 'smooth' // Enable smooth scrolling
    });

    }

function toggleActiveDots(dotsContainer, a) {
    //Toggle active class on the dots (actually work on a tag)
    const as = dotsContainer.querySelectorAll('a');
    as.forEach(a => {
        a.classList.remove('active');
    });
    a.classList.add('active');
}

        const createNavigationDots = () => {
            const container = document.querySelector('.container');
            const totalImgs = imgs.length;
            const dotsContainer = document.createElement('div');
            dotsContainer.classList.add('dots-container');

            for (let i = 0; i < totalImgs; i++) {
                const dot = document.createElement('span');
                const a = document.createElement('a');
                a.href = `#slide-${i+1}` //set reference for each dot
                a.classList.add('dot-link');

                dot.classList.add('dot');
                dot.id = i+1
                let slideId = `slide-${i+1}`;
                imgs[i].closest('.carousel-item').id = slideId //set id for each image to be referenced by the dots
                a.appendChild(dot);

                if (i === 0) {
                    a.classList.add('active');
                }

                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    scrollToSlide(slideId);

                    //Toggle active class on the dots (actually work on a tag)
                    toggleActiveDots(dotsContainer, a)
                });

                dotsContainer.appendChild(a);
            }

            const arrows = document.querySelector('.carousel-nav-arrows');
            container.closest('.first-level').insertBefore(dotsContainer, arrows);
        };

        createNavigationDots();

function scrollRight() {
    const container = document.querySelector('.container');
    const currentImage = document.querySelector('.active').querySelector('span').id;
    console.log(currentImage);

    if (currentImage < imgs.length) {
        const nextImage = parseInt(currentImage) + 1;
        const nextSlide = document.getElementById(`slide-${nextImage}`);
        const nextDot = document.querySelector(`a[href="#slide-${nextImage}"]`);
        scrollToSlide(`slide-${nextImage}`);
        console.log(nextImage);
        toggleActiveDots(document.querySelector('.dots-container'), nextDot);
    } else {
        scrollToSlide('slide-1');
        toggleActiveDots(document.querySelector('.dots-container'), document.querySelector('a[href="#slide-1"]'));
    }

}

function scrollLeft() {
    const container = document.querySelector('.container');
    const currentImage = document.querySelector('.active').querySelector('span').id;
    console.log(currentImage);

    if (currentImage > 1) {
        const nextImage = parseInt(currentImage) - 1;
        const nextSlide = document.getElementById(`slide-${nextImage}`);
        const nextDot = document.querySelector(`a[href="#slide-${nextImage}"]`);
        scrollToSlide(`slide-${nextImage}`);
        console.log(nextImage);
        toggleActiveDots(document.querySelector('.dots-container'), nextDot);
    } else {
        scrollToSlide(`slide-${imgs.length}`);
        toggleActiveDots(document.querySelector('.dots-container'), document.querySelector('a[href="#slide-1"]'));
    }

}

document.querySelector('.scroll-right-button').addEventListener('click', () => {scrollRight()}); 
document.querySelector('.scroll-left-button').addEventListener('click', () => {scrollLeft()});

setInterval(scrollRight, 5000);