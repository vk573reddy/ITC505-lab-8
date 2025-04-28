document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const firstName = sanitizeInput(document.getElementById('firstName').value.trim());
      const lastName = sanitizeInput(document.getElementById('lastName').value.trim());
      const email = sanitizeInput(document.getElementById('email').value.trim());
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;
  
      if (!firstName || !lastName || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
  
      const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
      if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
  
      if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
      }
  
      alert('Form submitted successfully!');
    });
  
    function sanitizeInput(input) {
      const temp = document.createElement('div');
      temp.textContent = input;
      return temp.innerHTML;
    }
  });
  