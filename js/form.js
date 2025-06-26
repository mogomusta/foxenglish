
const toggleButton = document.getElementById('toggle-contact');
const formWrapper = document.getElementById('contact-form-wrapper');

toggleButton.addEventListener('click', function (e) {
    e.preventDefault(); // يمنع التنقل العشوائي عند الضغط
    if (formWrapper.style.display === 'none' || formWrapper.style.display === '') {
        formWrapper.style.display = 'block';
        formWrapper.scrollIntoView({ behavior: 'smooth' }); // تمرير سلس للفورم
    } else {
        formWrapper.style.display = 'none';
    }
});
