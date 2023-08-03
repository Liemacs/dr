document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');
    const inputElement = document.getElementById('inputField');
    const errorContainer = document.getElementById('errorContainer');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission and page refresh

        const inputValue = inputElement.value.trim().toLowerCase();

        if (inputValue === "rabbit") {
            // Show success message
            console.log(inputValue);
        } else {
            // Show error message
            showError("Invalid input.");
        }
    });

    function showError(message) {
        const errorDiv = document.createElement('div');
        errorDiv.innerText = message;
        errorDiv.classList.add('error-message');
        document.body.appendChild(errorDiv);
        console.log('xxx');
        setTimeout(() => {
            errorDiv.classList.add('fade-out');
            setTimeout(() => {
                errorDiv.remove();
            }, 1000); // Remove the error message after the fade-out animation (1000 milliseconds)
        }, 3000); // Show the error message for 3 seconds before starting the fade-out animation (3000 milliseconds)
    }
});
