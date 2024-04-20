// burger=documment.querySelector('.burger');
// navbar=document.querySelector('.navbar');
// navlist=document.querySelector('.nav-list');

// burger.addEventListener('click', () => {
//    navbar.classList.toggle('h-nav');
//    navlist.classList.toggle('visibility');

// });

burger=document.querySelector('.burger'); // Corrected typo: "documment" should be "document"
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
logo=document.querySelector('.logo-hide')

 const navLinks = document.querySelectorAll('.nav-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Hide navigation menu
        navbar.classList.toggle('h-nav');
        navlist.classList.toggle('visibility');
    });
});

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav');
    navlist.classList.toggle('visibility');
    logo.classList.toggle('logo'); 
 });




