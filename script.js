// Seat Selection Functionality
document.addEventListener("DOMContentLoaded", function() {
    const boxes = document.querySelectorAll(".box");
    const selectedSeatsDisplay = document.getElementById("selected-seats");
    const totalPriceDisplay = document.getElementById("total-price");
    const selectedSeats = new Map(); // Map to store seat name and price

    boxes.forEach(box => {
        box.addEventListener("click", function() {
            const seatName = this.querySelector(".seat-name").textContent;
            const seatPrice = parseInt(this.getAttribute("data-price"));
            
            // Toggle selection
            if(this.classList.contains("selected")) {
                this.classList.remove("selected");
                selectedSeats.delete(seatName);
            } else if(!this.classList.contains("booked")) {
                this.classList.add("selected");
                selectedSeats.set(seatName, seatPrice);
            }
            
            // Update display
            if(selectedSeatsDisplay) {
                if(selectedSeats.size > 0) {
                    const seatsList = Array.from(selectedSeats.keys()).join(", ");
                    selectedSeatsDisplay.textContent = seatsList + " (" + selectedSeats.size + " seat" + (selectedSeats.size > 1 ? "s" : "") + ")";
                } else {
                    selectedSeatsDisplay.textContent = "None";
                }
            }
            
            // Calculate and update total price
            if(totalPriceDisplay) {
                let totalPrice = 0;
                selectedSeats.forEach((price) => {
                    totalPrice += price;
                });
                totalPriceDisplay.textContent = totalPrice;
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
