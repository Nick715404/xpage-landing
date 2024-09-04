const header = document.querySelector('.header');
const headerMobile = document.querySelector('.header-mobile');
const mobileMenu = document.querySelector('.mobile-menu__wrapper');

const containHide = () => header.classList.contains('hide');
const scrollPostition = () => {
	return window.pageYOffset || document.documentElement.scrollTop;
};

export const hidingHeader = () => {
	let lastScroll = 0;
	const defaultOffset = 500;

	window.addEventListener('scroll', () => {
		if (
			scrollPostition() > lastScroll &&
			!containHide() &&
			scrollPostition() > defaultOffset &&
			!mobileMenu.classList.contains('open')
		) {
			header.classList.add('hide');
			headerMobile.classList.add('hide');
		} else if (scrollPostition() < lastScroll && containHide()) {
			header.classList.remove('hide');
			headerMobile.classList.remove('hide');
		}

		lastScroll = scrollPostition();
	});
};
