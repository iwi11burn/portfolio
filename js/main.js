$(function () {
	$('.menu__button, .menu__link').on('click', function () {
		$('.menu').toggleClass('menu--active')
		$('.menu__button').toggleClass('open')
		$('body').toggleClass('lock')
	})

	$('.menu').on('click', 'a', function (event) {
		event.preventDefault()
		var id = $(this).attr('href'),
			headerHeight = $('.header').outerHeight(),
			top = $(id).offset().top - headerHeight

		$('body,html').animate({ scrollTop: top }, 1500)
	})

	const header = $('.header')
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 50) {
			header.addClass('header--active')
		} else {
			header.removeClass('header--active')
		}
	})
})

var mixer = mixitup('.works__images')
