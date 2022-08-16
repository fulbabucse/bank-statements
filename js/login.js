document.getElementById("submit-btn").addEventListener("click", function () {
    const inputField = document.getElementById("email-field");
    const email = inputField.value;

    const passwordField = document.getElementById("password");
    const password = passwordField.value;

    if (email.toLowerCase().endsWith("@gmail.com")) {
        window.location.href = "bank.html";
    }
    else {
        alert("Email and Password are Invalid!! Please try again!!")
    }
});