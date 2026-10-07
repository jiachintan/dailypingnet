document.documentElement.classList.add('js');

const menuButton = document.querySelector('.menu-button');
const nav = document.querySelector('.site-nav');

function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  nav.classList.remove('open');
}

menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
  nav.classList.toggle('open', !isOpen);
});

nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

const screenshotDialog = document.querySelector('.screenshot-dialog');
const dialogImage = screenshotDialog.querySelector('.dialog-image');
const dialogTitle = screenshotDialog.querySelector('#screenshot-title');

document.querySelectorAll('.screen-button').forEach((button) => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    dialogImage.src = button.dataset.screen;
    dialogImage.alt = image.alt;
    dialogTitle.textContent = button.closest('figure').querySelector('.screen-number').textContent;
    screenshotDialog.showModal();
    document.body.classList.add('dialog-open');
  });
});

screenshotDialog.querySelector('.dialog-close').addEventListener('click', () => screenshotDialog.close());
screenshotDialog.addEventListener('click', (event) => {
  // Backdrop clicks land on the dialog; clicks inside its bounding box stay open.
  if (event.target !== screenshotDialog) return;
  const bounds = screenshotDialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
    screenshotDialog.close();
  }
});
screenshotDialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));

document.querySelector('#year').textContent = new Date().getFullYear();
