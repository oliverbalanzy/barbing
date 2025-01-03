const textToType = 'Nuga premium cuts';
let index = 0;

function typeText() {
  const typingElement = document.querySelector('.typing');
  if (index < textToType.length) {
    typingElement.textContent += textToType.charAt(index);
    index++;
    setTimeout(typeText, 95); // Adjust typing speed
  } else {
    // Reveal h4 after typing finishes
    document.getElementById('tagline').style.visibility = 'visible';
  }
}
// Start typing animation with a delay
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeText, 2000); // Delay start by 1 second
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

const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener('click', function() {
    navItems.forEach((item) => {
      item.classList.remove("active")
    })
    
    item.classList.add("active")
  })
})

const HiddenElements = document.querySelectorAll('.cuts');
HiddenElements.forEach((el) => observer.observe(el));

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

