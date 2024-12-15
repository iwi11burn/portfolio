$(function () {
	$('.menu__button, .menu__link').on('click', function () {
		$('.header').toggleClass('header--active')
		$('.menu__button').toggleClass('open')
	})

	$('.menu').on('click', 'a', function (event) {
		event.preventDefault()

		var id = $(this).attr('href'),
			top = $(id).offset().top

		$('body,html').animate({ scrollTop: top }, 1500)
	})

	var mixer = mixitup('.works__images')
})
