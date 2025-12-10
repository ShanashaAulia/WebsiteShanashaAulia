// script.js - navigasi, overlay, header active, go-top, active link
document.addEventListener('DOMContentLoaded', function () {

  const navOpenBtns = document.querySelectorAll('[data-nav-open-btn]');
  const navCloseBtns = document.querySelectorAll('[data-nav-close-btn]');
  const navbar = document.querySelector('[data-navbar]');
  const overlay = document.querySelector('[data-overlay]');
  const header = document.querySelector('.header');
  const goTopBtn = document.querySelector('[data-go-top]');
  const navLinks = document.querySelectorAll('[data-nav-link]');

  function openNav() {
    navbar.classList.add('active');
    overlay.classList.add('active');
  }
  function closeNav() {
    navbar.classList.remove('active');
    overlay.classList.remove('active');
  }

  navOpenBtns.forEach(btn => btn.addEventListener('click', openNav));
  navCloseBtns.forEach(btn => btn.addEventListener('click', closeNav));
  if (overlay) overlay.addEventListener('click', closeNav);

  // header active on scroll
  window.addEventListener('scroll', function () {
    if (window.scrollY > 60) header.classList.add('active');
    else header.classList.remove('active');

    // go-top visibility
    if (goTopBtn) {
      if (window.scrollY > 400) goTopBtn.classList.add('active');
      else goTopBtn.classList.remove('active');
    }
  });

  // smooth go top
  if (goTopBtn) goTopBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // mark current nav link active (simple by href match)
  const current = location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === current) link.classList.add('active');
  });

});
