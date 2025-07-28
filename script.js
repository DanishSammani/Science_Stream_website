 // Tab switching functionality
        document.addEventListener('DOMContentLoaded', function() {
            const class11Btn = document.getElementById('class11Btn');
            const class12Btn = document.getElementById('class12Btn');
            const class11Content = document.getElementById('class11Content');
            const class12Content = document.getElementById('class12Content');

            class11Btn.addEventListener('click', function() {
                class11Btn.classList.add('active');
                class12Btn.classList.remove('active');
                class11Content.classList.add('active');
                class12Content.classList.remove('active');
            });

            class12Btn.addEventListener('click', function() {
                class12Btn.classList.add('active');
                class11Btn.classList.remove('active');
                class12Content.classList.add('active');
                class11Content.classList.remove('active');
            });

            // Syllabus toggle functionality
            const toggleButtons = document.querySelectorAll('.toggle-syllabus-btn');
            toggleButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const content = this.parentElement.nextElementSibling;
                    const icon = this.querySelector('i');
                    
                    content.classList.toggle('show');
                    
                    if (content.classList.contains('show')) {
                        icon.classList.remove('fa-chevron-down');
                        icon.classList.add('fa-chevron-up');
                        this.textContent = 'Hide Syllabus ';
                    } else {
                        icon.classList.remove('fa-chevron-up');
                        icon.classList.add('fa-chevron-down');
                        this.textContent = 'View Syllabus ';
                    }
                    
                    this.appendChild(icon);
                });
            });

            // Search functionality
            const searchInput = document.getElementById('searchInput');
            searchInput.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const subjectCards = document.querySelectorAll('.subject-card');
                
                subjectCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    if (title.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });