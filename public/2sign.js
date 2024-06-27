// Select the elements
const sign_in_link = document.querySelector("#sign-in-link");
const sign_up_link = document.querySelector("#sign-up-link");
const container = document.querySelector(".container");

// Add event listeners for sign-in and sign-up links
sign_up_link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    container.classList.add("sign-up-mode");
    // window.location.href = '/signup'; // Redirect the user to the signup page
});

sign_in_link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    container.classList.remove("sign-up-mode");
    // window.location.href = '/login'; // Redirect the user to the login page
});


