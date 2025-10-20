document.addEventListener("DOMContentLoaded", function() {
    // Navigation scroll effect
    const header = document.querySelector(".main-header");
    const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    // Scroll effect for header
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Mobile menu toggle
    mobileMenuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("active");
        document.body.classList.toggle("menu-open");
    });

    // Smooth scroll for navigation links
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                // Close mobile menu if open
                navMenu.classList.remove("active");
                document.body.classList.remove("menu-open");
                
                // Smooth scroll to target
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
