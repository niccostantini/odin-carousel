
# Carousel Component

This package provides a simple and customizable carousel component for displaying images or other content. It includes basic controls like navigation arrows and dot navigation. Follow the instructions below to integrate it into your project.

## Features
- Infinite scrolling through images or content
- Navigation using arrows and dot indicators
- Auto-scroll with smooth animations
- Customizable styles

<img src="https://raw.github.com/niccostantini/odin-carousel/main/demo.gif">

## Installation

To install the package, use npm:

```bash
npm install autoscroll-carousel
```

Include the necessary CSS and JavaScript in your project after installation.

## HTML Structure

To set up the carousel, your HTML should follow this structure:

```html
<div class="first-level">
    <div class="container">
        <div class="carousel">
            <div class="carousel-item">
                <img src="https://example.com/image1.png" alt="image 1">
            </div>
            <div class="carousel-item">
                <img src="https://example.com/image2.png" alt="image 2">
            </div>
            <div class="carousel-item">
                <img src="https://example.com/image3.png" alt="image 3">
            </div>
            <!-- Add more carousel items as needed -->
        </div>
    </div>

    <!-- Navigation Arrows -->
    <div class="carousel-nav-arrows">
        <button class="scroll-left-button"> ◀ </button>
        <button class="scroll-right-button"> ▶ </button>
    </div>
</div>
```

### Explanation of HTML Elements

- **.first-level**: The outer container that wraps everything related to the carousel.
- **.container**: The main wrapper for the carousel, with scrolling disabled for better control.
- **.carousel**: Contains all carousel items, which scroll horizontally.
- **.carousel-item**: Wraps each item (image or content) to be displayed.
- **.carousel-nav-arrows**: Contains navigation buttons for left and right scrolling.
  - **.scroll-left-button**: Scrolls the carousel to the left.
  - **.scroll-right-button**: Scrolls the carousel to the right.

### JavaScript Usage

To use the carousel, simply ensure your HTML follows the required structure, then include the script in your project:

```javascript
import './autoscroll-carousel';
```

The carousel will automatically initialize when the DOM is loaded, handling dot creation, navigation, and auto-scrolling.

### Dot Navigation

The script automatically generates navigation dots based on the number of items in the carousel. Clicking a dot scrolls to the corresponding slide and updates the active state.

### Arrow Navigation

The left and right buttons allow users to navigate between carousel items manually. The carousel also auto-scrolls every 5 seconds by default.

### CSS Customization

You can override or extend the default styles provided in `style.css` and `normalize.css`:

```css
.carousel {
    display: flex;
    overflow: hidden;
    scroll-behavior: smooth;
}

.carousel-item {
    min-width: 100%;
    flex-shrink: 0;
}

.dots-container {
    display: flex;
    justify-content: center;
    gap: 10px;
}

.dot-link {
    background-color: #bdbcbc;
    height: 8px;
    width: 8px;
    border-radius: 50%;
}

.dot-link.active {
    background-color: #707070;
}
```

Feel free to customize dimensions, colors, or add more advanced transitions as per your design requirements.

### Additional Features

- **Prevent default actions**: The carousel disables right-click context menus and drag interactions on the images for a more streamlined experience.
- **Auto-scroll**: The carousel automatically scrolls to the next image every 5 seconds. This can be adjusted in the script.

## License

This project is licensed under the ISC License. See the [./license](LICENSE) file for details.
