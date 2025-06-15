import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const products = document.querySelectorAll("#products-swiper");
if (!!products) {
    products.forEach((productSwiper) => {
        new Swiper(productSwiper.querySelector(".products-swiper"), {
            modules: [Navigation],
            slidesPerView: 1,
            navigation: {
                prevEl: productSwiper.querySelector(".swiper-button-prev"),
                nextEl: productSwiper.querySelector(".swiper-button-next"),
            },
            spaceBetween: 16,
            breakpoints: {
                471.99: {
                    slidesPerView: 2,
                },
                747.99: {
                    slidesPerView: 3,
                },
                991.99: {
                    slidesPerView: 4,
                    spaceBetween: 24,
                },
            },
        });
    });
}
