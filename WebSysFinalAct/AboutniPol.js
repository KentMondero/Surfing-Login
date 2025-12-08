// Smooth scrolling for footer links
document.querySelectorAll('.footer-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Get the target section ID from the href attribute
        const targetId = this.getAttribute('href').substring(1); // removes "#" from href

        // Scroll to the target section
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});