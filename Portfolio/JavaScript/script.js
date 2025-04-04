const themeToggle = document.getElementById('themeToggle');
const body = document.body;

        // Theme Toggle
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            themeToggle.classList.toggle('dark');
        });

        // Scroll Progress
        const progressBar = document.getElementById('progressBar');
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            progressBar.style.width = `${scrolled}%`;
        });

        // Scroll to Section
        function scrollToSection(id) {
            const section = document.getElementById(id);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }