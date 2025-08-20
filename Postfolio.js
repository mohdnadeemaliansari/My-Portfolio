 
        // Mobile menu toggle
        document.querySelector('nav button').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.remove('hidden');
        });
        
        document.getElementById('close-menu').addEventListener('click', function() {
            document.getElementById('mobile-menu').classList.add('hidden');
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                document.getElementById('mobile-menu').classList.add('hidden');
            });
        });
        
        // Form submission
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
        
        // Animate elements when they come into view
        const observerOptions = {
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-fadeInUp');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.skill-card, .project-card').forEach(card => {
            observer.observe(card);
        });