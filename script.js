// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
    const preloader = document.getElementById('loadingPage');
    const hasVisited = localStorage.getItem('hasVisited');
    const heroAnimationPlayed = localStorage.getItem('heroAnimationPlayed');

    // Check if the user has visited the page before
    if (!hasVisited) {
        // User has not visited before, show preloader
        preloader.style.display = 'block';

        // Timeline for the loading animation
        const loadingTimeline = gsap.timeline();
        loadingTimeline
            .from('#ap_logo_preloader1', { duration: 2, opacity: 0, scale: 0.5 })
            .to('#loadingPage', { duration: 1, opacity: 0, display: 'none', onComplete: hidePreloader });

        // Mark that the user has now visited the page
        localStorage.setItem('hasVisited', 'true');
    } else {
        // User has visited before, hide preloader
        preloader.style.display = 'none';
    }

    // Function to hide the preloader
    function hidePreloader() {
        preloader.style.display = 'none';
    }

    // Check if the hero animation has been played before
    if (!heroAnimationPlayed) {
        // Timeline for the hero section
        const heroTimeline = gsap.timeline({ delay: 2 });
        heroTimeline
            .from('.portfolio_profile_pic', { duration: 1, opacity: 0, y: -50 })
            .from('.greetings', { duration: 1, opacity: 0, y: 50 }, '-=0.5')
            .from('.short_bio', { duration: 1, opacity: 0, y: 50 }, '-=0.5')

        // Mark that the hero animation has been played
        localStorage.setItem('heroAnimationPlayed', 'true');
    }

    // Timeline for the projects section
    const projectsTimeline = gsap.timeline({ scrollTrigger: {
        trigger: '.my_projects',
        start: 'top 80%'
    }});
    projectsTimeline
        .from('.project_heading', { duration: 1, opacity: 0, y: 50 })
        .from('.projects_duet_wrap', { duration: 1, opacity: 0, y: 50, stagger: 0.3 });

    // Timeline for the "Let's work together" section
    const workTogetherTimeline = gsap.timeline({ scrollTrigger: {
        trigger: '.lets_work_together',
        start: 'top 80%'
    }});
    workTogetherTimeline
        .from('.available_for_work', { duration: 1, opacity: 0, x: -50 })
        .from('.get_your_project_running', { duration: 1, opacity: 0, x: 50 }, '-=0.5')
});

// Navbar navigation settings

document.addEventListener('DOMContentLoaded', function() {
    // Select the navbar items
    const navHome = document.getElementById('nav_home');
    const navProjects = document.getElementById('nav_projects');
    const navAbout = document.getElementById('nav_about');

    // Add event listeners for each nav item
    navHome.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        navigateToPage('home.html');
    });

    navProjects.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('projects.html');
    });

    navAbout.addEventListener('click', function(event) {
        event.preventDefault();
        navigateToPage('about.html');
    });

    // Function to navigate to the specified page
    function navigateToPage(page) {
        window.location.href = page; // Navigate to the specified page
    }
});


// Get the scroll up arrow element
const scrollUpArrow = document.querySelector('.scroll_up_arrow_container');

// Add a click event listener to the scroll up arrow
scrollUpArrow.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Smooth scroll to the top
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Get the scroll down arrow element
const scrollDownArrow = document.querySelector('.scroll_down_arrow_container');

// Add a click event listener to the scroll down arrow
scrollDownArrow.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default anchor behavior

    // Smooth scroll to my project section
    window.scrollTo({
        top: '1800',
        behavior: 'smooth'
    });
});