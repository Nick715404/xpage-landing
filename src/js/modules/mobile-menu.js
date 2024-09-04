const burgerMenuButton = document.getElementById('burger-menu-btn');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');
const burgerMenuButtonTextElement = document.querySelector(
	'.header-info-burger__text'
);
const burgerMenuButtonMobile = document.querySelector('.burger-menu-btn');
const navLinks = document.querySelectorAll('.nav__link');

export const mobileMenuSwitcher = () => {
	burgerMenuButton.addEventListener('click', () => {
		mobileMenu.classList.toggle('open');
		if (mobileMenu.classList.contains('open')) {
			burgerMenuButtonTextElement.textContent = 'ЗАКРЫТЬ';
		} else {
			burgerMenuButtonTextElement.textContent = 'МЕНЮ';
		}
	});

	burgerMenuButtonMobile.addEventListener('click', () => {
		mobileMenu.classList.toggle('open');
		burgerMenuButtonMobile.classList.toggle('active');
	});

	navLinks.forEach(link => {
		link.addEventListener('click', () => {
			mobileMenu.classList.remove('open');
		})
	})
};
