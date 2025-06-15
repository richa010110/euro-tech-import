import Swiper from "swiper";
import { Navigation, Thumbs } from "swiper/modules";

const productGallery = document.querySelector(".product-gallery");
if (productGallery) {
    const main = productGallery.querySelector(".product-gallery__main");
    const thumb = productGallery.querySelector(".product-gallery__thumb");

    const thumbSwiper = new Swiper(thumb, {
        modules: [Navigation],
        slidesPerView: 5,
        spaceBetween: 10,
        freeMode: true,
        watchSlidesProgress: true,
        navigation: {
            prevEl: thumb.querySelector(".swiper-button-prev"),
            nextEl: thumb.querySelector(".swiper-button-next"),
        },
    });

    new Swiper(main, {
        modules: [Navigation, Thumbs],
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            prevEl: main.querySelector(".swiper-button-prev"),
            nextEl: main.querySelector(".swiper-button-next"),
        },
        thumbs: {
            swiper: thumbSwiper,
        },
    });
}
