window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 500; // Adjust offset based on header height
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
            });
        }
    });
});
