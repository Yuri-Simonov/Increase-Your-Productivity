document.querySelector('.faq__spoilers').addEventListener('click', (event) => {
	if (event.target.closest('.faq__spoiler-item')) {
		event.target.closest('.faq__spoiler-item').classList.toggle('faq__spoiler-item-active');

	}
})

let burger = document.querySelector('.burger');
let menu = document.querySelector('.section-header')

burger.addEventListener('click', (event) => {
	document.querySelector('.section-header').classList.toggle('section-header-active');
	document.body.classList.toggle('lock');
})

//==================================================================================================
const swiper = new Swiper('.section-hero-image', {

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

});
new Swiper('.blog__slider', {

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

});
new Swiper('.quotes__column', {

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

});

function reinitSwiper(swiper) {
	setTimeout(function () {
		swiper.reInit();
	}, 500);
}