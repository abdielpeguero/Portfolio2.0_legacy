gsap.fromTo(
    ".loading_page",
    { opacity: 1,   
    },
    {
        opacity: 0,
        duration: 1,
        delay: 3.2,
    }
);

gsap.fromTo(
    ".logo_name",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
    }
);

window.addEventListener("loading_page", () => {
    const loading_page = document.querySelector(".loading_page");

    loading_page.classList.add("loading_page--hidden");

    loading_page.addEventListener("opacity=0", () => {
        document.main.removeChild(loading_page);
    });
});