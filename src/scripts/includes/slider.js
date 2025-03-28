import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, FreeMode, Thumbs, Scrollbar } from 'swiper/modules';

export function initializeSlider() {
    const companiesSlider = new Swiper(".companies-section .swiper", {
        modules: [Autoplay, FreeMode],
        slidesPerView: 3.15,
        spaceBetween: 12,
        speed: 3000,
        loop: true,
        freeMode: {
            enabled: true,
            sticky: false
        },
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
                spaceBetween: 4
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
                slidesPerView: 2.7,
                spaceBetween: 40
            },
            1200: {
                slidesPerView: 4.3,
                spaceBetween: 40
            },
            1400: {
                slidesPerView: 5.2,
                spaceBetween: 40
            },
            1920: {
                slidesPerView: 5.4,
                speed: 4000,
                spaceBetween: 80
            }
        }
    })
}
