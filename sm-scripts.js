// === ANIMATED GAUGE NUMBERS ===
const readings = [30.6, 54.5, 68.4, 78.9, 82.9, 77.2, 60.1, 45.3, 89.5, 55.0];
const labels = ['Very Quiet','Moderate','Loud','Loud','Loud','Loud','Moderate','Quiet','Very Loud','Moderate'];
let idx = 0;
const gaugeNum = document.getElementById('gaugeNum');
const gaugeLabel = document.getElementById('gaugeLabel');
const avgNum = document.getElementById('avgNum');

function cycleGauge() {
  idx = (idx + 1) % readings.length;
  const val = readings[idx];
  if (gaugeNum) gaugeNum.textContent = val.toFixed(1);
  if (gaugeLabel) {
    gaugeLabel.textContent = labels[idx];
    const colors = { 'Very Quiet': '#00E676', 'Quiet': '#69F0AE', 'Moderate': '#FFD600', 'Loud': '#FF8F00', 'Very Loud': '#FF1744' };
    gaugeLabel.style.color = colors[labels[idx]] || '#FF8F00';
  }
}
setInterval(cycleGauge, 2500);

// === SCROLL REVEAL ===
const revealEls = document.querySelectorAll('.feat-card, .sc-inner, .ref-card, .lang-chip, .cta-inner');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${(i % 6) * 0.07}s, transform 0.5s ease ${(i % 6) * 0.07}s`;
  observer.observe(el);
});

// === NAV SCROLL ===
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 40 ? 'rgba(0,230,118,0.2)' : 'rgba(0,230,118,0.1)';
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const t = document.querySelector(link.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});
