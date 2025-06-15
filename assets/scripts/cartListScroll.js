import { OverlayScrollbars } from "overlayscrollbars";

const cartList = document.querySelector(".cart-list");
let osInstance = null;

if (cartList) {
    const updateCartHeight = () => {
        const cartProducts = document.querySelectorAll(".cart-product");
        const isMobile = window.innerWidth < 768;
        const visibleCount = isMobile ? 1 : 3;
        const count = Math.min(visibleCount, cartProducts.length);
        const gap = 18;

        let height = 0;

        for (let i = 0; i < count; i++) {
            height += cartProducts[i].offsetHeight;
        }

        if (count > 1) {
            height += gap * (count - 1);
        }

        cartList.style.height = `${height}px`;

        if (cartProducts.length > visibleCount) {
            if (!osInstance) {
                osInstance = OverlayScrollbars(cartList, {
                    overflow: {
                        x: "hidden",
                        y: "scroll",
                    },
                });
            } else {
                osInstance.update();
            }
        } else {
            if (osInstance) {
                osInstance.destroy();
                osInstance = null;
            }
            cartList.style.overflow = "visible";
        }
    };

    updateCartHeight();
    window.addEventListener("resize", updateCartHeight);
}
