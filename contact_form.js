document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let valid = true;

        // Clear previous errors
        document.getElementById('nameError').textContent = '';
        document.getElementById('emailError').textContent = '';
        document.getElementById('subjectError').textContent = '';
        document.getElementById('messageError').textContent = '';

        // Get values
        const name = form.fullName.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        // Validate Full Name
        if (!name) {
            document.getElementById('nameError').textContent = 'Full Name is required.';
            valid = false;
        }
        // Validate Email
        if (!email) {
            document.getElementById('emailError').textContent = 'Email is required.';
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
        }
        // Validate Subject
        if (!subject) {
            document.getElementById('subjectError').textContent = 'Subject is required.';
            valid = false;
        }
        // Validate Message
        if (!message) {
            document.getElementById('messageError').textContent = 'Message is required.';
            valid = false;
        }

        if (valid) {
            form.reset();
            alert('Thank you for contacting us!');
        }
    });
});
