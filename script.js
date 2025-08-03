
        AOS.init();

        document.addEventListener('DOMContentLoaded', () => {
            // Testimonial slider (existing logic)
            const testimonials = document.querySelectorAll('.testimonial-slider .testimonial');
            let currentIndexTestimonial = 0; // Renamed to avoid conflict
            const delayTestimonial = 5000;

            function showTestimonial(index) {
                testimonials.forEach((testimonial, i) => {
                    testimonial.classList.toggle('active', i === index);
                });
            }

            function nextTestimonial() {
                currentIndexTestimonial = (currentIndexTestimonial + 1) % testimonials.length;
                showTestimonial(currentIndexTestimonial);
            }

            if (testimonials.length > 0) {
                showTestimonial(currentIndexTestimonial);
                setInterval(nextTestimonial, delayTestimonial);
            }

            // Mobile navigation toggle (existing logic)
            const menuToggle = document.querySelector('.menu-toggle');
            const navLinks = document.querySelector('.nav-links');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Close mobile menu on link click
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('active')) {
                        navLinks.classList.remove('active');
                    }
                });
            });

            // ---------- Popup Form Logic (existing) ----------
            window.openIdeaForm = function () {
                document.getElementById("ideaFormOverlay").style.display = "flex";
            };

            window.closeIdeaForm = function () {
                document.getElementById("ideaFormOverlay").style.display = "none";
            };


            // ---------- Service Slider Logic (NEW) ----------
            const serviceItems = document.querySelectorAll('.service-slider .service-item');
            const prevServiceBtn = document.querySelector('.prev-service');
            const nextServiceBtn = document.querySelector('.next-service');
            let currentServiceIndex = 0;

            function showService(index) {
                serviceItems.forEach((item, i) => {
                    item.classList.toggle('active', i === index);
                });
            }

            function nextService() {
                currentServiceIndex = (currentServiceIndex + 1) % serviceItems.length;
                showService(currentServiceIndex);
            }

            function prevService() {
                currentServiceIndex = (currentServiceIndex - 1 + serviceItems.length) % serviceItems.length;
                showService(currentServiceIndex);
            }

            if (serviceItems.length > 0) {
                showService(currentServiceIndex); // Show the first service initially
                prevServiceBtn.addEventListener('click', prevService);
                nextServiceBtn.addEventListener('click', nextService);
            }
        });
