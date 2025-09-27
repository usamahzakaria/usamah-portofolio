let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");


window.onscroll = () => {
    
let header = document.querySelector('.header');
header.classList.toggle('sticky', window.scrollY > 100);


    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


 sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150; // biar lebih pas
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove("active");
      });
      document
        .querySelector(".navbar a[href*=" + id + "]")
        .classList.add("active");
    }
  });
};

const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-box");

// fungsi filter
function filterPortfolio(category) {
  portfolioItems.forEach(item => {
    if (item.classList.contains(category)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

// default tampil kategori pertama (website)
filterPortfolio("website");

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    let filter = btn.getAttribute("data-filter");
    filterPortfolio(filter);
  });
});



ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img img, .services-container, .contact form, .skills-container .skills-box ', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img img, .logoport', { origin: 'left' });
 ScrollReveal().reveal('.home-content h3, .home-content p, .about-content, .home .profession-container .overlay, .home .profession-box', { origin: 'right' });

