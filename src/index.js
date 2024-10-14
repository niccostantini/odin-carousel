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