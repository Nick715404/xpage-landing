const header = document.querySelector('.header');
const headerMobile = document.querySelector('.header-mobile');
let lastScroll = 0;
const defaultOffset = 500;

const containHide = () => header.classList.contains('hide');
const scrollPostition = () =>
	window.pageYOffset || document.documentElement.scrollTop;

export const hidingHeader = () => {
	window.addEventListener('scroll', () => {
		if (
			scrollPostition() > lastScroll &&
			!containHide() &&
			scrollPostition() > defaultOffset
		) {
			// scroll down
			header.classList.add('hide');
			headerMobile.classList.add('hide');
		} else if (scrollPostition() < lastScroll && containHide()) {
			// scroll up
			header.classList.remove('hide');
			headerMobile.classList.remove('hide');
		}

		lastScroll = scrollPostition();
	});
};
