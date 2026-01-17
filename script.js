document.addEventListener("DOMContentLoaded", function() {
    let boxes = document.querySelectorAll(".box");

    boxes.forEach(box => {
        box.addEventListener("click", function() {
            console.log("clicked box:", this.textContent);
            
            // Check if box is already green
            if(this.style.backgroundColor === "green"){
                // Turn it white
                this.style.backgroundColor = "white";
                this.style.color = "green";
            }else{
                // Turn it green
                this.style.backgroundColor = "green";
                this.style.color = "white";
            }
        });
    });
});