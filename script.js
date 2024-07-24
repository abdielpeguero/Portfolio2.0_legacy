gsap.fromTo(".loading_page", { opacity: 1,}, { opacity: 0, duration: 1, delay: 3.2,});

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

function removeLoadingPage() {
    const loadingPage = document.getElementById('loadingPage');
    setTimeout(()=>{
        loadingPage.classList.add('loading_page--hidden');
    }, 4200);
}

removeLoadingPage();