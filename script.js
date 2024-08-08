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
            .from('.primary_button', { duration: 1, opacity: 0, y: 50 }, '-=0.5');

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
        .from('.primary_button', { duration: 1, opacity: 0, y: 50 }, '-=0.5');
});
