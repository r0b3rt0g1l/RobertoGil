(function () {
  'use strict';

  // ── Language toggle ──────────────────────────────────────

  var htmlEl   = document.documentElement;
  var langBtns = document.querySelectorAll('.lang-btn');

  function applyLang(lang) {
    htmlEl.setAttribute('lang', lang);
    htmlEl.setAttribute('data-lang', lang);

    document.querySelectorAll('[data-en]').forEach(function (el) {
      var text = el.getAttribute('data-' + lang);
      if (text !== null) el.textContent = text;
    });

    langBtns.forEach(function (btn) {
      var isActive = btn.dataset.lang === lang;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  langBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.dataset.lang);
    });
  });

  applyLang('en');

  // ── Nav frosted glass on scroll ──────────────────────────

  var navEl = document.getElementById('nav');

  function onNavScroll() {
    navEl.classList.toggle('is-scrolled', window.scrollY > 55);
  }

  window.addEventListener('scroll', onNavScroll, { passive: true });
  onNavScroll();

  // ── Scroll reveal ────────────────────────────────────────

  var revealEls = document.querySelectorAll('[data-reveal]');

  if (revealEls.length) {
    if ('IntersectionObserver' in window) {
      var revealObserver = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            var el    = entry.target;
            var delay = parseInt(el.dataset.delay || '0', 10);
            setTimeout(function () {
              el.classList.add('is-revealed');
            }, delay);
            revealObserver.unobserve(el);
          });
        },
        { threshold: 0.12 }
      );

      revealEls.forEach(function (el) {
        revealObserver.observe(el);
      });

    } else {
      revealEls.forEach(function (el) {
        el.classList.add('is-revealed');
      });
    }
  }

  // ── Smooth scroll ────────────────────────────────────────

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

}());
