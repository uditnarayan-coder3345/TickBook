// Seat Selection Functionality
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const selectedSeatsDisplay = document.getElementById("selected-seats");
    const selectedSeats = new Set();

    boxes.forEach(box => {
        box.addEventListener("click", function() {
            // Toggle selection
            if(this.classList.contains("selected")) {
                this.classList.remove("selected");
                selectedSeats.delete(this.textContent);
            } else if(!this.classList.contains("booked")) {
                this.classList.add("selected");
                selectedSeats.add(this.textContent);
            }
            
            // Update display
            if(selectedSeatsDisplay) {
                selectedSeatsDisplay.textContent = selectedSeats.size > 0 
                    ? Array.from(selectedSeats).join(", ") 
                    : "None";
            }
        });
    });
});

// Time Option Selection
document.addEventListener("DOMContentLoaded", function() {
    const timeOptions = document.querySelectorAll(".time-option");
    
    timeOptions.forEach(option => {
        option.addEventListener("click", function(e) {
            timeOptions.forEach(opt => opt.classList.remove("selected"));
            this.classList.add("selected");
        });
    });
});

// Category Menu Active State
document.addEventListener("DOMContentLoaded", function() {
    const categoryItems = document.querySelectorAll(".category-item");
    
    categoryItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            categoryItems.forEach(cat => cat.classList.remove("active"));
            this.classList.add("active");
        });
    });
});

// Search Functionality
document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".search-input");
    
    if(searchInput) {
        searchInput.addEventListener("keyup", function() {
            const searchTerm = this.value.toLowerCase();
            const movies = document.querySelectorAll(".movie-card");
            
            movies.forEach(movie => {
                const title = movie.querySelector(".movie-info h3").textContent.toLowerCase();
                movie.style.display = title.includes(searchTerm) ? "block" : "none";
            });
        });
    }
});

// Google Sign In (Placeholder)
function googleSignIn() {
    alert("Google Sign In integration would go here");
    // Redirect or handle login
}

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const categoryMenu = document.querySelector(".category-menu");
    
    if(menuToggle) {
        menuToggle.addEventListener("click", function() {
            categoryMenu.style.display = categoryMenu.style.display === "none" ? "block" : "none";
        });
    }
});

console.log("TickBook script loaded successfully!");