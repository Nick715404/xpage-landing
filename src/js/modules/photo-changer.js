const btns = document.querySelectorAll('.home-hero-section__btn');
const imgElement = document.querySelector('.home-hero-section__image');
const pageTitle = document.querySelector('.home-hero-section__title');

const changePhoto = button => {
	button.addEventListener('mouseenter', function() {
		const newSrc = button.getAttribute('data-image-src');
		imgElement.src = newSrc;
		const newTitle = button.getAttribute('data-image-text');
		pageTitle.textContent = newTitle;
	});

	button.addEventListener('mouseleave', function() {
		imgElement.src = '../../img/3.webp';
		pageTitle.textContent = 'Найди с кем поиграть в баскет';
	});
};

const changeText = () => {};

export const photoSwitcher = () => {
	btns.forEach(button => changePhoto(button));
};
