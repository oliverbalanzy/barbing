const textToType = 'Nuga premium cuts';
let index = 0;

function typeText() {
  const typingElement = document.querySelector('.typing');
  if (index < textToType.length) {
    typingElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 95); // Adjust my typing speed
  } else {
 
    document.getElementById('tagline').style.visibility = 'visible';
  }
}
// Start typing my animation with a delay
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeText, 2000); // Delay 
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

const HiddenElements = document.querySelectorAll('.cuts');
HiddenElements.forEach((el) => observer.observe(el));

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener('click', function() {
  
    navItems.forEach((item) => {
      item.classList.remove("active");
    });
    

    item.classList.add("active");
    
  
    nav.classList.remove('active');
  });
});


const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
  let currentSection = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute('id');
    }
  });

  navItems.forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href').includes(currentSection)) {
      item.classList.add('active');
    }
  });
});  // I am ensuring that the active class is also properly synchronized with sections as I scroll into view.



const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if (close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

