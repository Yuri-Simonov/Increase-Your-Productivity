document.querySelector('.faq__spoilers').addEventListener('click', (event) => {
	if (event.target.closest('.faq__spoiler-item')) {
		event.target.closest('.faq__spoiler-item').classList.toggle('faq__spoiler-item-active');

	}
})

let burger = document.querySelector('.burger');
let menu = document.querySelector('.section-header')

/* burger.addEventListener('click', () => {
	menu.classList.toggle('section-header-active');
}) */

burger.addEventListener('click', (event) => {
	document.querySelector('.section-header').classList.toggle('section-header-active');
	document.body.classList.toggle('lock');
})