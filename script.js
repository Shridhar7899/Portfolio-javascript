let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open')
};

let sections=document.querySelectorAll('section');
let navlinks=document.querySelectorAll('header ul a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header ul a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}
const sr= ScrollReveal ({
    distance: '40px',
    duration: 2500,
    reset: true
});

// sr.reveal('.logo',{delay:200, origin:'left'});
// sr.reveal('.navbar',{delay:400, origin:'top'});
// sr.reveal('.menu-btn',{delay:520, origin:'right'});

// sr.reveal('.home-text span',{delay:600, origin:'top'});
// sr.reveal('.home-text h1',{delay:680, origin:'left'});
// sr.reveal('.home-text p',{delay:750, origin:'right'});
// sr.reveal('.main-btn',{delay:860, origin:'left'});

sr.reveal('.share',{delay:100, origin:'top'});
// sr.reveal('.home-img',{delay:1000, origin:'right'});

sr.reveal('.myskill',{delay:100, origin:'right'});
sr.reveal('.cont',{delay:100, origin:'left'});