document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            mainNav.classList.toggle('main-nav--visible');
            const isExpanded = mainNav.classList.contains('main-nav--visible');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });
    }

    // Optional: Close mobile menu if a link is clicked
    // This is useful for single-page applications or if nav links jump to sections on the same page.
    // For multi-page static sites, it might not be strictly necessary as the page will reload.
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('main-nav--visible')) {
                // Only close if it's a link that doesn't open a new tab/window
                // and it's not a button styled as a link that might have its own JS action.
                if (!link.target || link.target === '_self') {
                    // mainNav.classList.remove('main-nav--visible');
                    // navToggle.setAttribute('aria-expanded', 'false');
                    // Decided to keep it simple for now, page navigation will implicitly "close" the menu.
                    // If it were an SPA or for same-page anchor links, uncommenting would be good.
                }
            }
        });
    });

});
