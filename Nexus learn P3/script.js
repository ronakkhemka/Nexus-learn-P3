// script.js

document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Implement backend logic to store customer details securely.
    // For simplicity, we'll just log the data to the console.
    const formData = new FormData(event.target);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });

    console.log('Form submitted:', formDataObject);

    // Optionally, you can use AJAX or fetch to send the data to a server.
    // Example:
    // fetch('your-backend-api-url', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formDataObject),
    // })
    // .then(response => response.json())
    // .then(data => console.log('Server response:', data))
    // .catch(error => console.error('Error:', error));
});
