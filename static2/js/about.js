let cardContainer = [...document.querySelectorAll('.carousel-card-container')];
let leftBtn = [...document.querySelectorAll('.carousel-left-btn')];
let rightBtn = [...document.querySelectorAll('.carousel-right-btn')];

cardContainer.forEach((item, index) => {
	leftBtn[index].addEventListener('click', () => {
		item.scrollLeft -= 250;
	});

	rightBtn[index].addEventListener('click', () => {
		item.scrollLeft += 250;
	});
});

const showModal = () => {
	let modal = document.getElementById('modal');
	let burgerIcon = document.getElementById('burger-icon');
	let closeIcon = document.getElementById('close-icon');
	modal?.style?.setProperty('display', 'block', 'important');
	burgerIcon?.style?.setProperty('display', 'none', 'important');
	closeIcon?.style?.setProperty('display', 'block', 'important');
	document?.body?.classList.add('tm-feature-stop-scrolling');
};

const hideModal = () => {
	let modal = document.getElementById('modal');
	let burgerIcon = document.getElementById('burger-icon');
	let closeIcon = document.getElementById('close-icon');
	modal?.style?.setProperty('display', 'none', 'important');
	burgerIcon?.style?.setProperty('display', 'block', 'important');
	closeIcon?.style?.setProperty('display', 'none', 'important');
	document?.body?.classList.remove('tm-feature-stop-scrolling');
};
