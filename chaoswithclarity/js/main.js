/* ============================================================
   Chaos With Clarity — main.js
   Hamburger nav + Poem modal
   ============================================================ */

/* ---------- Hamburger navigation ---------- */
(function () {
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', function () {
    const open = navLinks.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open);
    toggle.innerHTML = open
      ? '<span></span><span></span><span></span>'   // keeps lines
      : '<span></span><span></span><span></span>';
    toggle.classList.toggle('is-open', open);
  });

  // Close menu when a nav link is clicked (mobile)
  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close menu on outside click
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();


/* ---------- Poem modal ---------- */
(function () {
  const modal       = document.getElementById('poem-modal');
  if (!modal) return;

  const modalTitle  = modal.querySelector('.modal-poem-title');
  const modalDate   = modal.querySelector('.modal-poem-date');
  const modalBody   = modal.querySelector('.modal-poem-body');
  const modalRefl   = modal.querySelector('.modal-reflection-text');
  const modalClose  = modal.querySelector('.modal-close');
  const modalShare  = modal.querySelector('.modal-share');
  const joinCta     = modal.querySelector('.modal-join-cta');

  function openModal(card) {
    const title      = card.dataset.title      || '';
    const date       = card.dataset.date       || '';
    const poem       = card.dataset.poem       || '';
    const reflection = card.dataset.reflection || '';

    if (modalTitle) modalTitle.textContent = title;
    if (modalDate)  modalDate.textContent  = date;

    // Render poem lines — line breaks become <br>
    if (modalBody) {
      modalBody.innerHTML = poem
        .split('\n')
        .map(function (line) { return line.trim() === '' ? '<br>' : line; })
        .join('<br>');
    }

    if (modalRefl) {
      const reflBox = modal.querySelector('.modal-reflection');
      if (reflection) {
        modalRefl.textContent = reflection;
        if (reflBox) reflBox.style.display = '';
      } else {
        if (reflBox) reflBox.style.display = 'none';
      }
    }

    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden';

    // Update share URL (uses current page hash)
    if (modalShare) {
      modalShare.addEventListener('click', function () {
        if (navigator.share) {
          navigator.share({ title: title, url: window.location.href });
        } else {
          navigator.clipboard.writeText(window.location.href)
            .then(function () { alert('Link copied!'); });
        }
      });
    }
  }

  function closeModal() {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  // Open modal on card button click
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('[data-poem-open]');
    if (btn) {
      const card = btn.closest('[data-title]');
      if (card) openModal(card);
    }
  });

  // Close via X button
  if (modalClose) modalClose.addEventListener('click', closeModal);

  // Close on backdrop click
  modal.addEventListener('click', function (e) {
    if (e.target === modal) closeModal();
  });

  // Close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });

  // Join list CTA inside modal
  if (joinCta) {
    joinCta.addEventListener('click', function () {
      closeModal();
      window.location.href = 'join.html';
    });
  }
})();


/* ---------- Active nav link ---------- */
(function () {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
})();


/* ---------- Smooth-reveal on scroll (IntersectionObserver) ---------- */
(function () {
  if (!('IntersectionObserver' in window)) return;

  var obs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(function (el) {
    obs.observe(el);
  });
})();
