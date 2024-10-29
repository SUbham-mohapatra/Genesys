document.getElementById('get-quote-btn').addEventListener('click', () => {
    alert('Get a quote feature coming soon!');
});

document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate a form submission response
    const responseMessage = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById('form-response').innerText = responseMessage;

    // Clear the form
    document.getElementById('contact-form').reset();
});
