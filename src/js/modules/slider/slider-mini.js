import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if (!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }
        
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        // Найти индекс первого элемента, который не является кнопкой
        let firstSlideIndex = this.slides.findIndex(slide => slide.tagName !== "BUTTON");

        // Если есть не-кнопочные слайды, перемещаем их
        if (firstSlideIndex !== -1) {
            const slidesToMove = this.slides.slice(0, firstSlideIndex + 1); // Получаем все слайды до первого не-кнопочного
            slidesToMove.forEach(slide => {
                this.container.appendChild(slide); // Перемещаем их в конец
            });

            // Обновляем список слайдов после перемещения
            this.slides = Array.from(this.container.children);

            // Применяем декорации
            this.decorizeSlides();
        }
    }

    bindTriggers() {
        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {

            // Найти индекс последнего элемента, который не является кнопкой
            let lastSlideIndex = this.slides.length - 1;

            for (let i = this.slides.length - 1; i >= 0; i--) {
                if (this.slides[i].tagName !== "BUTTON") {
                    lastSlideIndex = i;
                    break;
                }
            }

            // Перемещаем последний не-кнопочный слайд в начало
            this.container.insertBefore(this.slides[lastSlideIndex], this.slides[0]);

            // Обновляем список слайдов после перемещения
            this.slides = Array.from(this.container.children);

            // Применяем декорации
            this.decorizeSlides();
        });
    }

    init() {
        try {
            this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
            `;

            this.bindTriggers();
            this.decorizeSlides();

            if (this.autoplay) {
                setInterval(() => this.nextSlide(), 5000);
            }
        } catch(e) {}
    }
}