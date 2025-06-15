const sidebar = document.querySelector(".sidebar");

if (sidebar) {
    const openBtn = document.querySelector(".sidebar-layout__categories-btn");
    const closeBtn = sidebar.querySelector(".work-time__close-btn");

    openBtn.addEventListener("click", () => {
        sidebar.classList.add("active");
    });
    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
}
