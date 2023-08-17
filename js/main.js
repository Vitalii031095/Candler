const burgerBtn = document.querySelector('.menu__btn');
const menuList = document.querySelector('.header__menu-list');

burgerBtn.addEventListener('click', ()=>{
	menuList.classList.toggle('menu--open');
})

const accordeon = document.querySelector('.acordeon');
let accordionTitles = accordeon.querySelectorAll('.acordeon__title');
accordionTitles.forEach.call(accordionTitles, function(accordionTitle)  {
	accordionTitle.addEventListener('click', function(){
		const currentText = accordionTitle.parentElement.querySelector('.acordeon__text');
		accordionTitle.classList.toggle('.acordeon__title-active');
		currentText.classList.toggle('acordeon__text-visible');
		if(currentText.classList.contains('acordeon__text-visible')){
			currentText.style.maxHeight =currentText.scrollHeight + 'px'
		}
		else{
			currentText.style.maxHeight = null
		}
	})
})



const swiperOne = new Swiper('.feedback__swiper', {
	// Optional parameters
	loop: true,
 
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
 
	
 });


 const swiperTwo = new Swiper('.sertificates__slider', {
	loop: true,
	slidesPerView: "2.4",
	spaceBetween: 20,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
		300: {
			slidesPerView: 1,
		 },
		362: {
			slidesPerView: 2,
		 },
		 769: {
			slidesPerView: 2.4,
		 },
		},
 });