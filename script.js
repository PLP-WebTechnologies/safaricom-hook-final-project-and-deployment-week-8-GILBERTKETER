// Image Slider
let images = ["images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg"];
let index = 0;
function changeImage() {
    document.getElementById("slider-image").src = images[index];
    index = (index + 1) % images.length;
}
setInterval(changeImage, 3000);

// Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();
            const formMessage = document.getElementById("formMessage");

            if (name === "" || email === "" || message === "") {
                formMessage.style.color = "red";
                formMessage.textContent = "All fields are required!";
            } else {
                formMessage.style.color = "green";
                formMessage.textContent = "Thank you! Your message has been sent.";
                form.reset();
            }
        });
    }
});
