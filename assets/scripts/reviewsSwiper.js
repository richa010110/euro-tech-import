import Swiper from "swiper";
import { Navigation } from "swiper/modules";

const reviews = document.querySelector("#reviews");
if (reviews) {
    new Swiper(reviews.querySelector(".reviews"), {
        modules: [Navigation],
        slidesPerView: 1,
        navigation: {
            prevEl: reviews.querySelector("#reviews .swiper-button-prev"),
            nextEl: reviews.querySelector("#reviews .swiper-button-next"),
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
}
