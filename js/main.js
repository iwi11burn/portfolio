$(function () {
	$('.menu__button, .menu__link').on('click', function () {
		$('.menu').toggleClass('menu--active')
		$('.menu__button').toggleClass('open')

		if ($('.menu').hasClass('menu--active')) {
			$('body').addClass('lock')
		} else {
			$('body').removeClass('lock')
		}
	})

	const header = $('.header')
	const headerContent = $('.title-page__title')
	let firstScroll = true

	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 10) {
			header.addClass('header--active')
			headerContent.addClass('title-page__title--min')
		} else {
			header.removeClass('header--active')
			headerContent.removeClass('title-page__title--min')
			firstScroll = true
		}
	})

	$('.title-page').on(
		'click',
		'.menu__link, .header__logo, .title-page__scroll',
		function (event) {
			event.preventDefault()
			var id = $(this).attr('href')

			var windowWidth = $(window).width()
			var headerHeight = $('.header').outerHeight()
			var top = $(id).offset().top

			if (windowWidth > 768) {
				top -= headerHeight
				if (firstScroll) {
					if ($(id).hasClass('section')) {
						top -= -45
					}
					firstScroll = false
				}
			} else {
				top -= headerHeight
			}

			$('body').removeClass('lock')
			$('body,html').animate({ scrollTop: top }, 1500)
		}
	)
})

var mixer = mixitup('.works__images')
