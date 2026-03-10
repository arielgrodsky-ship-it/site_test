function validateForm() {
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const phone = document.getElementById("Tel").value;
    const issue = document.getElementById("Issue").value;

    if (username.trim() === "") {
        alert("Please enter a username!");
        return; 
    }

    if (!email.endsWith("@gmail.com")) {
        alert("Please enter a valid Gmail address (it must end with @gmail.com)!");
        return;
    }

    if (age < 15 || age > 120) {
        alert("Age must be between 15 and 120!");
        return;
    }

    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/; 
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid phone number (e.g., 050-123-4567)!");
        return;
    }

    if (issue === "") {
        alert("Please select an issue!");
        return;
    }

    alert("Everything looks good!");
}