document.addEventListener("DOMContentLoaded", () => {
    const events = document.querySelectorAll(".event-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.style.opacity = "0"; // Hide when not visible
                entry.target.style.transition = "opacity 0.5s ease-out";
            } else {
                entry.target.style.opacity = "1"; // Show when visible
            }
        });
    }, { threshold: 0.1 });

    events.forEach(event => observer.observe(event));
});
