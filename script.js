
burger=document.querySelector('.burger'); 
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.nav-list');
trans=document.querySelector('.trans');


 const navLinks = document.querySelectorAll('.nav-list li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navlist.classList.toggle('visibility');
        navbar.classList.toggle('h-nav');
    
    });
});
burger.addEventListener('click', () => {
    navlist.classList.toggle('visibility');
    navbar.classList.toggle('h-nav');
   
 });
1



