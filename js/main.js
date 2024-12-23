$(function () {
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
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 10) {
				header.addClass('header--active')
				headerContent.addClass('title-page__title--min')
			} else {
				header.removeClass('header--active')
				headerContent.removeClass('title-page__title--min')
			}
		})

		$('.title-page').on(
			'click',
			'.menu__link, .header__logo, .title-page__scroll',
			function (event) {
				event.preventDefault()

				var id = $(this).attr('href'),
					headerHeight = $('.header').outerHeight(),
					top = $(id).offset().top - headerHeight

				$('body').removeClass('lock')

				$('body,html').animate({ scrollTop: top }, 1500)
			}
		)
	})
})

var mixer = mixitup('.works__images')
