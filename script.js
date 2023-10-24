/* scroll sections avtive link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                
            })
        };
    });
};



/* toggle icon navbar */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("chevron-down-outline");
    navbar.classList.toggle('active');
};



/* typped js */

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Devoleper', 'Nekronik'],
    typeSpeed: 100,
    backSpeed: 100,
    typeDelay: 1000,
    loop: true
});


/* scroll reveal*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-img', { origin:'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right'});



/* remove toggle icon */
menuIcon.classList.remove("chevron-down-outline")
navbar.classList.remove('active')

/* dark icon */

const btnDarkMode = document.querySelector('.dark-mode-btn');

if (window.matchMedia && window.matchMedia('(prefers-color-sheme: dark)').matches){
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

btnDarkMode.onclick = function (){
    btnDarkMode.classList.toggle('dark-mode-btn--active')
    const isDark = document.body.classList.toggle('dark')

    if (isDark) {
        localStorage.setItem('darkMode', 'dark')
        
    } else {
        localStorage.setItem('darkMode', 'light')
        
    }

}

