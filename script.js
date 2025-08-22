const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const closeIcon = document.querySelector('.icon-close');
const loginPopupBtn = document.querySelector('.btnLogin-popup');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

loginPopupBtn.addEventListener('click', () => {
    wrapper.style.display = 'flex';
});

closeIcon.addEventListener('click', () => {
    wrapper.style.display = 'none';
});