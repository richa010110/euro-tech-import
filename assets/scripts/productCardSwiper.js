import Swiper from "swiper";
import { Pagination } from "swiper/modules";

const productCards = document.querySelectorAll(".product-card");
if (!!productCards) {
    productCards.forEach((productCard) => {
        new Swiper(productCard.querySelector(".swiper"), {
            modules: [Pagination],
            slidesPerView: 1,
            nested: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    });
}
