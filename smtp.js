// Initialize EmailJS
emailjs.init('itQsjMq6rlpDqcwWR'); // Your EmailJS user ID

function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get the form element
    const form = document.getElementById('contactForm');
    
    // Send the form data using EmailJS
    emailjs.sendForm('service_gt1iy0w', 'template_8oacm0o', form)
        .then(function(response) {
            console.log('Success:', response);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.log('Error:', error);
            alert('Failed to send message. Please try again later.');
        });
}
