import Swiper from 'swiper';
import {Navigation, Pagination, Autoplay, FreeMode, Thumbs, Scrollbar} from 'swiper/modules';

export function initializeSlider() {
    const companiesSlider = new Swiper(".companies-section .swiper", {
        modules: [Autoplay, FreeMode],
        slidesPerView: 3.15,
        spaceBetween: 12,
        speed: 3000,
        loop: true,
        autoplay: {
            delay: 0,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            744: {
                slidesPerView: 6.4,
                speed: 2000,
            },
            1200: {
                slidesPerView: 5.7,
                spaceBetween: 4,
                speed: 2000
            }
        }
    });

    const reviewsSlider = new Swiper(".reviews-section .swiper", {
        modules: [Navigation],
        slidesPerView: 1,
        spaceBetween: 12,
        navigation: {
            prevEl: ".reviews-section .navigation-button--prev",
            nextEl: ".reviews-section .navigation-button--next",
        },
        breakpoints: {
            744: {
                slidesPerView: 2,
                spaceBetween: 10
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20
            }
        }
    });
}
