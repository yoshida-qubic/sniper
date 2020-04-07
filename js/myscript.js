
'use strict';

const w = $(window).width();
const spwidth = 768;
const tabletwidth = 1279;

{
	const openMenu = document.getElementById('openmenu');
	const Nav = document.getElementById('under_header');
	openMenu.addEventListener('click', function(){
		openMenu.classList.toggle('active');
		Nav.classList.toggle('active');
	});
}

{
	const submenu_open = document.getElementById('sub_menu_open');
	const sub_nav = document.getElementById('sub_nav');
	submenu_open.addEventListener('mouseover', function(){
		sub_nav.classList.add("active");
	});
	submenu_open.addEventListener('mouseleave', function () {
		sub_nav.classList.remove("active");
	});
}

{
	const above_header = document.getElementById('above_header');
	window.addEventListener('scroll', function () {
		let scrollTop = document.scrollingElement.scrollTop;

		if (scrollTop > 300) {
			above_header.classList.add("active");
			logo.classList.add("active");
		} else {
			above_header.classList.remove("active");
			logo.classList.remove("active");
		}
	});
}

{
	const sidebar = document.getElementById('sidebar');
	window.addEventListener('scroll', function () {
		let scrollTop = document.scrollingElement.scrollTop;

		if (scrollTop > 300) {
			sidebar.classList.add("active");
		} else {
			sidebar.classList.remove("active");
		}
	});
}


$(function () {

// JQueryの範囲
	$(window).scroll(function () {
		$('.logo_animation').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - $(window).height() - 300) {
				$(this).addClass("active");
			}
		});

		$('.scroll').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - $(window).height() - 300) {
				$(this).addClass("active");
			}
		});

		$('.scroll02').each(function () {
			if ($(window).scrollTop() > $(this).offset().top - $(window).height()) {
				$(this).addClass("active");
			}
		});

	});

	// クリックした画像をメイン画像として表示
	$('.car03 .swiper-slide .img').on('click',function(){
		let imgSrc = $(this).children('img').attr('src');
		$('.main_img').children('img').attr('src', imgSrc);
	});

	let slideImg = '';
	slideImg = $('.car03 .swiper-slide').height() - 11.25;
	$('.car03 .main_img').height(slideImg);

	$(window).resize(function(){
		slideImg = $('.car03 .swiper-slide').height() - 11.25;
		$('.car03 .main_img').height(slideImg);
	});

	// STAFF詳細を表示
	$('.staff02 .item').on('click', function(){
		$(this).children('.overlay_btn').addClass('active');
		$(this).children('.overlay_btn').next('.overlay_area').fadeIn();
	});

	$('.staff02 .close_btn_sp').on('click', function(){
		$('.staff02 .overlay_btn').removeClass('active');
		$('.staff02 .overlay_btn').next('.overlay_area').fadeOut();
	});

	$('.staff02 .close_btn').on('click', function(){
		$('.staff02 .overlay_btn').removeClass('active');
		$('.staff02 .overlay_btn').next('.overlay_area').fadeOut();
	});

	$('.staff02 .close_btn_sp').on('click', function(e){
		e.stopPropagation();
	});
	$('.staff02 .close_btn').on('click', function(e){
		e.stopPropagation();
	});
});