const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.navigation');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));

// Open the original QR artwork for verified brand project folders.
const qrModal = document.getElementById('qrModal');
const qrImage = document.getElementById('qrImage');
const qrTitle = document.getElementById('qrTitle');
const qrOpenLink = document.getElementById('qrOpenLink');
const qrBrandNumber = document.getElementById('qrBrandNumber');
let lastBrandTrigger = null;

function openBrandQr(card) {
  lastBrandTrigger = card;
  qrTitle.textContent = card.dataset.brand;
  qrImage.src = card.dataset.qr;
  qrOpenLink.href = card.dataset.url;
  qrBrandNumber.textContent = String([...document.querySelectorAll('.brand-card')].indexOf(card) + 1).padStart(2, '0');
  qrModal.classList.add('is-open');
  qrModal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  qrModal.querySelector('.qr-close').focus();
}
function closeBrandQr() {
  if (!qrModal.classList.contains('is-open')) return;
  qrModal.classList.remove('is-open');
  qrModal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastBrandTrigger) lastBrandTrigger.focus();
}
document.querySelectorAll('.brand-card[data-qr][data-url]').forEach(card => {
  card.addEventListener('click', () => openBrandQr(card));
});
qrModal.querySelectorAll('[data-close-modal]').forEach(el => el.addEventListener('click', closeBrandQr));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeBrandQr();
});
