function goBack() {
    window.history.back();
}
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage');

    if (!name || !email || !message) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.classList.add('show');
        formMessage.style.color = '#ef4444';
        return;
    }

    formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
    formMessage.classList.add('show');
    formMessage.style.color = '#10b981';

    this.reset();

    setTimeout(() => {
        formMessage.classList.remove('show');
    }, 5000);
});