const transportTabs = document.querySelector(".transport-tabs");
if (transportTabs) {
    const tabButtons = transportTabs.querySelectorAll(".transport-tabs__tab");
    const tabPanels = transportTabs.querySelectorAll(".transport-tabs__panel");

    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            tabButtons.forEach((btn) =>
                btn.classList.remove("transport-tabs__tab--active")
            );
            btn.classList.add("transport-tabs__tab--active");

            tabPanels.forEach((panel) => {
                if (
                    panel.getAttribute("data-tab-panel") ===
                    btn.getAttribute("data-tab")
                ) {
                    tabPanels.forEach((panel) =>
                        panel.classList.remove("transport-tabs__panel--active")
                    );
                    panel.classList.add("transport-tabs__panel--active");
                }
            });
        });
    });
}
