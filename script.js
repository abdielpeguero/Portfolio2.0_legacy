// loading page animation

gsap.fromTo(
    ".loading_page", 
    { 
        y: 0,
        opacity: 1,
    }, 
    { 
        y: 50,
        opacity: 0, 
        duration: 1, 
        delay: 2.9,
    });

gsap.fromTo(
    ".logo_name",
    {
        y: 50,
        opacity: 0,
    },
    {
        y: 0,
        opacity: 1,
        duration: 1.8,
        delay: 0.5,
    }
);

// Function to hide loading animation html

function removeLoadingPage() {
    const loadingPage = document.getElementById('loadingPage');
    setTimeout(()=>{
        loadingPage.classList.add('loading_page--hidden');
    }, 4000);
}

removeLoadingPage();


// navbar animation
gsap.fromTo(
    ".navbar", 
    { 
        y: -50,
        opacity: 0,
    }, 
    { 
        y: 0,
        opacity: 1, 
        duration: .5, 
        delay: 3.3,
});


 // hero secton
gsap.fromTo(
    ".hero_container", 
    { 
        y: 0,
        opacity: 0,
    }, 
    { 
        y: -50,
        opacity: 1, 
        duration: 1.5, 
        delay: 3.8,
    });