
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-sidebar-btn');
    const body = document.getElementsByTagName('body')[0]; // Access the first element

    toggleButton.addEventListener('click', function() {
        body.classList.toggle('sidebar-hidden'); // Remove the dot prefix
    });
});

document.addEventListener('scroll', function () {
    const backToTopBtn = document.getElementById('back-to-top');
    if (window.scrollY > 100) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

document.getElementById('back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});




