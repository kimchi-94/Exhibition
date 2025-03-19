// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const navbar = document.querySelector('.navbar'); // Your navbar element
    const content = document.querySelector('.content'); // Your content element

    // Variables to track scroll position
    let lastScrollTop = 0;

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Determine scroll direction
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            navbar.classList.remove('navbar-hidden');
        } else {
            // Scrolling up
            navbar.classList.add('navbar-hidden');
        }

        lastScrollTop = scrollTop;
    });
});