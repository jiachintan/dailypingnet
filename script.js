const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.classList.toggle('active', !isOpen);
  nav.classList.toggle('open', !isOpen);
  document.body.classList.toggle('menu-open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.classList.remove('active');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
document.querySelectorAll('.hero .reveal').forEach((element) => element.classList.add('visible'));

const form = document.querySelector('#contact-form');
const formNote = document.querySelector('#form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const name = formData.get('name');
  const email = formData.get('email');
  const service = formData.get('service');
  const message = formData.get('message');

  const subject = `Project enquiry: ${service} — ${name}`;
  const body = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Service: ${service}`,
    '',
    'Project details:',
    message,
  ].join('\n');

  const submitButton = form.querySelector('button[type="submit"]');
  submitButton.innerHTML = 'Email draft opened <span>↗</span>';
  formNote.textContent = 'Your email app should now show a draft addressed to support@dailyping.net. Review it and press Send.';
  formNote.classList.add('success');

  window.location.href = `mailto:support@dailyping.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('#year').textContent = new Date().getFullYear();
