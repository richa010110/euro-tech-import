import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const bannerSwiper = document.querySelector(".banner-swiper");
if (bannerSwiper) {
    new Swiper(".banner-swiper", {
        modules: [Navigation],
        slidesPerView: 1,
        navigation: {
            prevEl: ".swiper-button-prev",
            nextEl: ".swiper-button-next",
        },
        spaceBetween: 16,
    });
}
