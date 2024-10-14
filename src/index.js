import NormalizeStyle from './normalize.css';
import Style from './style.css';

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

container.addEventListener('wheel', event => {
    event.preventDefault();
}, { passive: false });

container.addEventListener('touchmove', event => {
    event.preventDefault();
}, { passive: false });



function scrollCarouselRight() {
    const container = document.querySelector('.container');
    const totalImgs = imgs.length;
    let width = document.querySelector('.carousel').offsetWidth;
    let gapLength = (width/totalImgs);
    console.log(width + " " + gapLength);
    if (container) {
        container.scrollBy({ left: gapLength, behavior: 'smooth' });
    }
}

function scrollCarouselLeft() {
    const container = document.querySelector('.container');
    const totalImgs = imgs.length;
    let width = document.querySelector('.carousel').offsetWidth;
    let gapLength = (width/totalImgs);
    console.log(width + " " + gapLength);
    if (container) {
        container.scrollBy({ right: gapLength });
    }
}

const scrollButtonRight = document.querySelector('.scroll-right-button');

    scrollButtonRight.addEventListener('click', () => {
        console.log('scrolling right');
        scrollCarouselRight()
    });

const scrollButtonLeft = document.querySelector('.scroll-left-button');
    
        scrollButtonLeft.addEventListener('click', () => {
            console.log('scrolling left');
            scrollCarouselLeft()
        });

function scrollToSlide(slideId) {
    const slide = document.getElementById(slideId);
    
    if (!slide) {
        console.error(`Slide with ID "${slideId}" not found.`);
        return;
    }
    
    // Scroll the carousel wrapper to the slide's position
    const carouselWrapper = document.querySelector('.container');
    
    // Calculate the horizontal center position for the slide
    const slideLeft = slide.offsetLeft;
    const wrapperWidth = carouselWrapper.offsetWidth;
    const slideWidth = slide.offsetWidth;
    
    const scrollToPosition = slideLeft - (wrapperWidth / 2) + (slideWidth / 2);
    
    // Scroll to the calculated position, centering the slide
    carouselWrapper.scrollTo({
        left: scrollToPosition,
        behavior: 'smooth' // Enable smooth scrolling
    });

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
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    scrollToSlide(slideId);

                    //Toggle active class on the dots (actually work on a tag)
                    const as = dotsContainer.querySelectorAll('a');
                    as.forEach(a => {
                        a.classList.remove('active');
                    });
                    a.classList.add('active');
                });

                dotsContainer.appendChild(a);
            }

            container.closest('.first-level').appendChild(dotsContainer);
        };

        createNavigationDots();

        