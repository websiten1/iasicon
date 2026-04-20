// Mobile nav toggle
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('open');
      const expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
  }
})();

// Reveal on scroll
(function () {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || els.length === 0) {
    els.forEach((el) => el.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  els.forEach((el) => io.observe(el));
})();

// Portfolio tabs
(function () {
  const tabs = document.querySelectorAll('[data-tab]');
  if (tabs.length === 0) return;
  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-tab');
      document.querySelectorAll('[data-tab]').forEach((t) => t.classList.toggle('active', t === tab));
      document.querySelectorAll('[data-panel]').forEach((p) => {
        p.classList.toggle('active', p.getAttribute('data-panel') === target);
      });
    });
  });
})();

// Contact form — friendly front-end only (no backend wired)
(function () {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const note = document.getElementById('formNote');
    const data = new FormData(form);
    if (!data.get('name') || !data.get('email') || !data.get('message')) {
      note.textContent = 'Vă rugăm completați toate câmpurile obligatorii.';
      note.style.color = '#8a2a2a';
      return;
    }
    note.textContent = 'Mulțumim! Mesajul dvs. a fost înregistrat. Vă vom contacta în cel mai scurt timp.';
    note.style.color = '#1f6b46';
    form.reset();
  });
})();

// Current year in footer
(function () {
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
})();
