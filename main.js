// ============================================
// MUTEREMUKO VTC - MAIN JAVASCRIPT
// ============================================

// ---- Auto-Update Year ----
function updateYear() {
  const year = new Date().getFullYear();
  const nextYear = year + 1;
  
  // Footer copyright
  document.querySelectorAll('.auto-year').forEach(el => {
    el.textContent = year;
  });

  // Academic year display
  document.querySelectorAll('.auto-academic-year').forEach(el => {
    el.textContent = `${year}/${nextYear}`;
  });

  // Established years count
  const establishedYear = 2000;
  document.querySelectorAll('.auto-years-since').forEach(el => {
    el.textContent = year - establishedYear;
  });
}

// ---- Navbar Mobile Toggle ----
function initNavbar() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      hamburger.classList.toggle('active');
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      }
    });

    // Close on nav link click
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
      });
    });
  }

  // Active link highlighting
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

// ---- Scroll Reveal ----
function initScrollReveal() {
  const revealEls = document.querySelectorAll('.reveal');
  
  if (!revealEls.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        // Stagger children if container
        const children = entry.target.querySelectorAll('.reveal-child');
        children.forEach((child, i) => {
          setTimeout(() => child.classList.add('visible'), i * 100);
        });
      }
    });
  }, { threshold: 0.1 });

  revealEls.forEach(el => observer.observe(el));
}

// ---- Back to Top ----
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ---- Sticky Navbar Shadow ----
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      navbar.style.boxShadow = '0 6px 30px rgba(59,0,0,0.5)';
    } else {
      navbar.style.boxShadow = '0 4px 20px rgba(59,0,0,0.45)';
    }
  }, { passive: true });
}

// ---- Animated Counter ----
function animateCounter(el, target, duration = 1500) {
  let start = 0;
  const step = target / (duration / 16);
  
  const timer = setInterval(() => {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(start);
    }
  }, 16);
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const target = parseInt(entry.target.dataset.count);
        animateCounter(entry.target, target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

// ---- Smooth hover on cards ----
function initCardEffects() {
  document.querySelectorAll('.course-card, .dept-card, .about-strip-item').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.25s ease';
    });
  });
}

// ---- Init All ----
document.addEventListener('DOMContentLoaded', () => {
  updateYear();
  initNavbar();
  initScrollReveal();
  initBackToTop();
  initNavbarScroll();
  initCounters();
  initCardEffects();
});
