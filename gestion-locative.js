// ===================
// BURGER MENU MOBILE
// ===================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  nav.classList.toggle('active');
});

// ===================
// ANIMATION CARDS (FADE UP)
// ===================
const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  },
  { threshold: 0.15 }
);

cards.forEach(card => observer.observe(card));

// ===================
// BOUTONS DE REDIRECTION DEVIS
// ===================
const btns = document.querySelectorAll('.btn');

btns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const href = btn.getAttribute('href');
    if (href === 'contact.html') {
      e.preventDefault();
      window.location.href = 'devis-contact.html';
    }
  });
});
