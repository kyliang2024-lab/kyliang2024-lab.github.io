document.addEventListener('DOMContentLoaded', function () {
  const nav = document.getElementById('mainNav') || document.querySelector('.navbar');
  if (!nav) return;

  // Ensure no body padding is forcing a white gap
  document.body.style.paddingTop = '';

  // Smooth scrolling (accounts for nav height)
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const navHeight = Math.round(nav.getBoundingClientRect().height || 0);
      const targetTop = window.pageYOffset + target.getBoundingClientRect().top - navHeight;
      window.scrollTo({ top: Math.max(0, Math.round(targetTop)), behavior: 'smooth' });

      history.pushState && history.pushState(null, '', href);

      const navCollapse = document.querySelector('.navbar-collapse.show');
      if (navCollapse) navCollapse.classList.remove('show');
    });
  });
});
