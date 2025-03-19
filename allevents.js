// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Elements
    const navbar = document.querySelector('.navbar');
    const exhibition1 = document.querySelector('.exhibition1');
    const exhibitionsContainer = document.querySelector('.exhibitions-container');
    
    // Calculate the cutoff point (total height of navbar area)
    const cutoffPoint = navbar.offsetHeight + exhibition1.offsetHeight;
    
    // Set initial clip path
    exhibitionsContainer.style.clipPath = `inset(0px 0px 0px 0px)`;
    
    // Add scroll event listener
    window.addEventListener('scroll', function () {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Apply clip path effect to cut off content passing under navbar
        if (scrollTop < cutoffPoint) {
            // Amount of content that would be under the navbar
            const hiddenAmount = cutoffPoint - scrollTop;
            
            // Apply clip path to cut off the top portion
            exhibitionsContainer.style.clipPath = `inset(${hiddenAmount}px 0px 0px 0px)`;
        } else {
            // Reset clip path when scrolled past cutoff point
            exhibitionsContainer.style.clipPath = 'inset(0px 0px 0px 0px)';
        }
    });
});