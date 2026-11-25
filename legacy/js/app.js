/* SSC Platform page interactions */
(function () {
  'use strict';

  // ---------- Smooth scroll + active sidebar item ----------
  const navItems = document.querySelectorAll('.nav-item');
  const sections = Array.from(document.querySelectorAll('main .section'));
  const sidebar = document.getElementById('sidebar');

  navItems.forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      navItems.forEach((n) => n.classList.remove('active'));
      a.classList.add('active');
      if (window.innerWidth <= 720 && sidebar) sidebar.classList.remove('open');
    });
  });

  // ---------- Mobile menu toggle ----------
  const menuToggle = document.getElementById('menuToggle');
  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));
    document.addEventListener('click', (e) => {
      if (window.innerWidth > 720) return;
      if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
        sidebar.classList.remove('open');
      }
    });
  }

  // ---------- Scroll spy ----------
  const setActiveByScroll = () => {
    const offset = 140;
    const y = window.scrollY + offset;
    let currentId = sections[0] && sections[0].id;
    for (const s of sections) {
      if (s.offsetTop <= y) currentId = s.id;
    }
    if (!currentId) return;
    let matched = false;
    navItems.forEach((n) => {
      const t = n.getAttribute('data-target') || (n.getAttribute('href') || '').replace('#', '');
      if (t === currentId && !matched) { n.classList.add('active'); matched = true; }
      else { n.classList.remove('active'); }
    });
  };

  // ---------- To-top button ----------
  const toTop = document.getElementById('toTop');
  const updateToTop = () => {
    if (!toTop) return;
    if (window.scrollY > 600) toTop.classList.add('show');
    else toTop.classList.remove('show');
  };
  if (toTop) {
    toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      setActiveByScroll();
      updateToTop();
      ticking = false;
    });
  });
  setActiveByScroll();
  updateToTop();
})();
