$(document).ready(function() {
	"use strict";
	/*
	 * ----------------------------------------------------------------------------------------
	 *  CHANGE MENU BACKGROUND JS
	 * ----------------------------------------------------------------------------------------
	 */

	var headertopoption = $(window);
	var headTop = $('.header-top-area');

	headertopoption.on('scroll', function() {
		if (headertopoption.scrollTop() > 200) {
			headTop.addClass('menu-bg');
		} else {
			headTop.removeClass('menu-bg');
		}
	});

	// add_class
	var nav_icon = $('#nav-icon2');
	var mainmenu_ul = $('.mainmenu ul');
	nav_icon.on('click', function() {
		$(this).toggleClass('open');
		mainmenu_ul.toggleClass('nav-menu-show');
	});

	// ---------------------------------------------
	// Smooth scroll
	// ---------------------------------------------
	$(document).on("scroll", onScroll);
	$('.nav li a[href^="#"]').on("click", function(e) {
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop : $(anchor.attr('href')).offset().top - 50
		}, 1000);
		e.preventDefault();
	});

	function onScroll(event) {
		var homeJs = $('#home');
		var navJs = $('.nav li a');
		if (homeJs.length) {
			var scrollPos = $(document).scrollTop();
			navJs.each(function() {
				var currLink = $(this);
				var refElement = $(currLink.attr("href"));
				if (refElement.position().top - 50 <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
					navJs.removeClass("active");
					currLink.addClass("active");
				} else {
					// currLink.removeClass("active");
				}
			});
		}

	};

	/*==============================================================
	 wow animation - on scroll
	 ==============================================================*/
	var wow = new WOW({
		boxClass : 'wow',
		animateClass : 'animated',
		offset : 0,
		mobile : false,
		live : true
	});

	wow.init();
	/*==============================================================
	 Gallery Popup
	 ==============================================================*/
	var popup_btn = $('.popup-btn');
	$('.popup-btn');
	popup_btn.magnificPopup({
		type : 'image',
		gallery : {
			enabled : true
		}
	});
	//Two Show team
	var two_show = $('.team_silder');
	two_show.owlCarousel({
		loop : true,
		margin : 30,
		nav : false,
		dots : true,
		center : false,
		autoplay : true,
		autoplayTimeout : 3000,
		autoplayHoverPause : true,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 2
			},
			992 : {
				items : 2
			},
			1200 : {
				items : 2
			}
		}
	});

	//testimonial One_Show
	var One_Show = $('.testimonial_silder');
	One_Show.owlCarousel({
		loop : true,
		margin : 30,
		nav : false,
		dots : true,
		center : false,
		autoplay : true,
		autoplayTimeout : 3000,
		autoplayHoverPause : true,
		navText : ["<i class='ion-ios-arrow-back'></i>", "<i class='ion-ios-arrow-forward'></i>"],
		responsive : {
			0 : {
				items : 1
			},
			767 : {
				items : 1
			},
			992 : {
				items : 1
			},
			1200 : {
				items : 1
			}
		}
	});
	/*
	 * ----------------------------------------------------------------------------------------
	 *  Parallax JS
	 * ----------------------------------------------------------------------------------------
	 */
	$.stellar({
		horizontalScrolling : false,
		verticalOffset : 40
	});
	/*
	 * ----------------------------------------------------------------------------------------
	 *  PRELOADER JS
	 * ----------------------------------------------------------------------------------------
	 */

	var prealoaderOption = $(window);
	prealoaderOption.on("load", function() {
		var preloader = jQuery('.loader-wrapper');
		var preloaderArea = jQuery('.preloader-area');
		preloader.fadeOut();
		preloaderArea.delay(350).fadeOut('slow');
	});
});
