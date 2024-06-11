function sendEmail(name, email, message) {
    console.log(`Sending email with the following details:
    Name: ${name}
    Email: ${email}
    Message: ${message}`);

    Email.send({
        SecureToken: "a06ddd63-9f67-4a93-b582-634ce9c68e4f",
        To: "xiaofeng.guo021@gmail.com ",
        From: "xiaofeng.guo021@gmail.com",
        Subject: `New contact from ${name}`,
        Body: `Name: ${name} <br> Email: ${email} <br> Message: ${message}`,
    }).then(
        response => {
            console.log('Email send response:', response);
            alert('Thank you for your message. I will contact you soon.');
        }
    ).catch(
        error => {
            console.error('Email send error:', error);
            alert('Failed to send email. Please try again.');
        }
    );
}

function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form values
    const name = document.getElementById('idName').value;
    const email = document.getElementById('idEmail').value;
    const message = document.getElementById('idMessage').value;

    // Call sendEmail function with form values
    sendEmail(name, email, message);

    return false; // Prevent the form from submitting traditionally
}
