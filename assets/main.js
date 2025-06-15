import { OverlayScrollbars } from "overlayscrollbars";
import "./styles/index.scss";
import "overlayscrollbars/overlayscrollbars.css";
import "./scripts/transportTabs";
import "./scripts/bannerSwiper";
import "./scripts/productsSwiper";
import "./scripts/productCardSwiper";
import "./scripts/reviewsSwiper";
import "./scripts/sidebarToggle";
import "./scripts/productGallery";
import "./scripts/productQuantity";
import "./scripts/cartListScroll";
import "swiper/scss";

OverlayScrollbars(document.querySelector("#nav-scroll"), {
    overflow: {
        x: "scroll",
        y: "hidden",
    },
});
