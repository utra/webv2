/*=== toggle icon navbar ===*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


/*==scroll sections active link ===*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    /*== sticky navbar ===*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*== remove toggle icon and navbar when click navbar link (scroll) ===*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*== scroll reveal animation ===*/
ScrollReveal({
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .experience-container, .project-box, .contact form, .contact_info3, .iconTop', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, .contact_info1', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, .contact_info2', { origin: 'right' });

// slideshow js
// function showSlides(n) {
//     let i;
//     let slides = document.getElementsByClassName("slide");
//     let dots = document.getElementsByClassName("slide-dot");
//     if (n > slides.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" dotActive", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " dotActive";
// }

// let slideIndex = 1;
// showSlides(slideIndex);


// function plusSlides(n) {
//     showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }


var exec = document.getElementsByClassName("executive-collapsible");
var i;

for (i = 0; i < exec.length; i++) {
    exec[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var marketing = document.getElementsByClassName("marketing-collapsible");
var i;

for (i = 0; i < marketing.length; i++) {
    marketing[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var web = document.getElementsByClassName("web-collapsible");
var i;

for (i = 0; i < web.length; i++) {
    web[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var outreach = document.getElementsByClassName("outreach-collapsible");
var i;

for (i = 0; i < outreach.length; i++) {
    outreach[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}