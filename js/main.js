; (function () {
	"use strict";

	let simpleSlider = $('.ba-simple__slider');

	simpleSlider.slick({
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		arrows: false,

	});


	let newsSlider = $('.ba-news__cards');

	newsSlider.slick({
		slide: '.ba-news__item',
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 4000,
		speed: 1000,
		dots: true,
		prevArrow: '[data-news-left]',
		nextArrow: '[data-news-right]',
	});
})();

