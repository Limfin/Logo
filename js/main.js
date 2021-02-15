// ibg
function ibg() {
	$.each($('.ibg'), function (index, val) {
		if ($(this).find('img').length > 0) {
			$(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
		}
	});
};
ibg();

// Main burger menu
$('.icon-menu').click(function (event) {
	$(this).toggleClass('active');
	$('.menu__body').toggleClass('active');
	$('body').toggleClass('lock');
});

// Side-bar menu burger
// $('.menu-page__burger').click(function(event){
// 	$(this).toggleClass('active');
// })

let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');
menuPageBurger.addEventListener('click', function (e) {
	menuPageBurger.classList.toggle('active');
	menuPageBody.classList.toggle('active');
});


//Проверка мобильное устройство или ПК, Выполняется для того чтобы на мобильных устройствах подменю(Submenu slide) не выезжало в бок, а открывалось вниз
var ua = window.navigator.userAgent;
var msie = ua.indexOf("MSIE ");
var isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}
};

//Submenu slide
if (isMobile.any()) {
	let menuParents = document.querySelectorAll('.menu-page__item_parent>a');
	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener('click', function (e) {
			menuParent.parentElement.classList.toggle('active');
			e.preventDefault();
		});
	}
} else {
	let menuParents = document.querySelectorAll('.menu-page__item_parent');

	for (let index = 0; index < menuParents.length; index++) {
		const menuParent = menuParents[index];
		menuParent.addEventListener('mouseenter', function (e) {
			menuParent.classList.add('active');
		});
		menuParent.addEventListener('mouseleave', function (e) {
			menuParent.classList.remove('active');
		});
	};
};


//Search-page categories menu
let searchSelect = document.querySelector('.search-page__title');
let categoriesSearchBody = document.querySelector('.categories-search');
searchSelect.addEventListener('click', function (e) {
	searchSelect.classList.toggle('active');
	categoriesSearchBody.classList.toggle('active');
});

let checkboxCategories = document.querySelectorAll('.categories-search__checkbox');

for (let index = 0; index < checkboxCategories.length; index++) {
	const checkboxCategory = checkboxCategories[index];
	checkboxCategory.addEventListener('change', function (e) {
		checkboxCategory.classList.toggle('active');
		let checkboxActiveCategoies = document.querySelectorAll('.categories-search__checkbox.active');

		if (checkboxActiveCategoies.length > 0) {
			searchSelect.classList.add('categories');
			let searchQuantity = searchSelect.querySelector('.search-page__quantity');
			searchQuantity.innerHTML = searchQuantity.getAttribute('data-text') + checkboxActiveCategoies.length;
		} else {
			searchSelect.classList.remove('categories');
		}
	});
};


//Swiper slider MainSlider
if (document.querySelector('.mainslider')) {
	let mainslider = new Swiper('.mainslider__body', {

		obsrver: true,
		observeParents: true,
		slidesPerView: 1,
		spacebetween: 0,
		autoHeight: true,
		speed: 800,
		// loop: true,
		// If we need pagination
		pagination: {
			el: '.mainslider__dots',
			clickable: true,
		},
	});

	// Custom Dots with Images
	let mainsliderImages = document.querySelectorAll('.mainslider__image');
	let mainsliderDots = document.querySelectorAll('.mainslider__dots .swiper-pagination-bullet');

	for (let index = 0; index < mainsliderImages.length; index++) {
		const mainsliderImage = mainsliderImages[index].querySelector('img').getAttribute('src');
		mainsliderDots[index].style.backgroundImage = "url('" + mainsliderImage + "')";
	}
};

//Swiper slider for Products Items
if (document.querySelector('.products-slider')) {
	let productsSlider = new Swiper('.products-slider__item', {

		obsrver: true,
		observeParents: true,
		slidesPerView: 1,
		spacebetween: 0,
		autoHeight: true,
		speed: 800,
		loop: true,
		// If we need pagination
		// pagination: {
		// 	el: '.mainslider__dots',
		// 	clickable: true,
		// },
		// Arrows
		navigation: {
			nextEl: '.products-slider__arrow_next',
			prevEl: '.products-slider__arrow_prev',
		},
		pagination: {
			el: '.products-slider__info',
			type: 'fraction',
		},
	});
};

//Swiper slider for Brands
if (document.querySelector('.brands-slider')) {
	let brandsSlider = new Swiper('.brands-slider__body', {

		obsrver: true,
		observeParents: true,
		// slidesPerView: 5,
		spacebetween: 0,
		autoHeight: false,
		speed: 800,
		loop: true,
		// If we need pagination
		// pagination: {
		// 	el: '.mainslider__dots',
		// 	clickable: true,
		// },
		// Arrows
		navigation: {
			nextEl: '.brands-slider__arrow_next',
			prevEl: '.brands-slider__arrow_prev',
		},
		breakpoints: {
			// when window width is >= 320px
			320: {
				slidesPerView: 1,
				spaceBetween: 20
			},
			// when window width is >= 480px
			480: {
				slidesPerView: 2,
				spaceBetween: 20
			},
			// when window width is >= 768px
			768: {
				slidesPerView: 3,
				spaceBetween: 30
			},
			// when window width is >= 840px
			840: {
				slidesPerView: 4,
				spaceBetween: 30
			},
			// when window width is >= 992px
			992: {
				slidesPerView: 5,
				spaceBetween: 40
			},
		},
	});
};

//Swiper slider for Images Product
if (document.querySelector('.images-product')) {
	let imagesSubSlider = new Swiper('.images-product__subslider', {
		obsrver: true,
		observeParents: true,
		slidesPerView: 4,
		spacebetween: 0,
		// autoHeight: true,
		speed: 800,
	});
	let imagesMainSlider = new Swiper('.images-product__mainslider', {
		obsrver: true,
		observeParents: true,
		slidesPerView: 1,
		spacebetween: 0,
		// autoHeight: true,
		speed: 800,
		thumbs: {
			swiper: imagesSubSlider
		}
	});
};

//noUiSlider
if (document.querySelector('.section-filter__body')) {
	let priceSlider = document.querySelector('.price-filter__slider');

	noUiSlider.create(priceSlider, {
		start: [0, 100000],
		behaviour: 'drag',
		connect: true,
		tooltips: [wNumb({ decimals: 0, thousand: ' ' }), wNumb({ decimals: 0, thousand: ' ' })],
		range: {
			'min': [0],
			'max': [200000]
		}
	});

	const priceStart = document.getElementById('price-start');
	const priceEnd = document.getElementById('price-end');
	priceStart.addEventListener('change', function () {
		priceSlider.noUiSlider.set([this.value, null]);
	});
	priceEnd.addEventListener('change', function () {
		priceSlider.noUiSlider.set([null, this.value]);
	});
};

//Spoller menu
let spollerSelect = document.getElementsByClassName("_spoller");
for (let i = 0; i < spollerSelect.length; i++) {
	spollerSelect[i].addEventListener("click", function () {
		this.classList.toggle("active");
		let spollerBody = this.nextElementSibling;
		spollerBody.classList.toggle('active');
	});
};

//Filter Section Opening
if (isMobile.any()) {
	const filterTitle = document.querySelector('.filter__title');
	filterTitle.addEventListener('click', function (e) {
		filterTitle.classList.toggle('active');
		let filterContent = this.nextElementSibling;
		filterContent.classList.toggle('active');
	});
};

//Actions-Product Quantity
let quantityButtons = document.querySelectorAll('.quantity__button');
if (quantityButtons.length > 0) {
	for (let index = 0; index < quantityButtons.length; index++) {
		const quantityButton = quantityButtons[index];
		quantityButton.addEventListener('click', function (e) {
			let value = parseInt(quantityButton.closest('.quantity').querySelector('input').value);
			if (quantityButton.classList.contains('quantity__button_plus')) {
				value++;
			} else {
				value = value - 1;
				if (value < 1) {
					value = 1
				}
			}
			quantityButton.closest('.quantity').querySelector('input').value = value;
		});
	}
}

//Product Info Tabs
const btns = document.querySelectorAll("._tabs-item");
const tabsBlock = document.querySelectorAll("._tabs-block");
for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", () => {
		addClassFunc(btns[i], "_active");
		clearClassFunc(i, btns, "_active");
		addClassFunc(tabsBlock[i], "_active");
		clearClassFunc(i, tabsBlock, "_active");
	});
}
function addClassFunc(elem, elemClass) {
	elem.classList.add(elemClass);
}
function clearClassFunc(indx, elems, elemClass) {
	for (let i = 0; i < elems.length; i++) {
		if (i === indx) {
			continue;
		}
		elems[i].classList.remove(elemClass);
	}
}