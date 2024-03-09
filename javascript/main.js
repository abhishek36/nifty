
const faqs = document.querySelectorAll('.faq-box');

faqs.forEach((faqs) =>{
    faqs.addEventListener('click', () =>{
        faqs.classList.toggle('active');
    });
});

var humberger = document.querySelector('.humberger');

humberger.addEventListener('click', function(){
    var menu = document.querySelector('.menu');
    menu.classList.toggle('smenu');
});



