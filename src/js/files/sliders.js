/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Autoplay, EffectFade, Thumbs} from 'swiper';


/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
 //import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на странице
	if (document.querySelector('.main-pages__slider')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.main-pages__slider', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation, Pagination, Autoplay, EffectFade],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			autoHeight: true,
			speed: 800,
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,
			navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			// Пагинация
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			// Скроллбар
			on: {
			}
		});
	}
//-------------------------------------------------------------------------------------------
if (document.querySelector(".care__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	let myImageSlider = new Swiper(".care__slider", {
	  // Указываем скласс нужного слайдера
	  // Подключаем модули слайдера
	  // для конкретного случая
	  modules: [Navigation],
	  observer: true,
	  observeParents: true,
	  slidesPerView: 'auto',
	  spaceBetween: 30,
	  speed: 800,

	  // Кнопки "влево/вправо"
	  navigation: {
		 prevEl: ".swiper-button-prev1",
		 nextEl: ".swiper-button-next1",
	  },

	  // События
	  on: {},
	});
}
//-------------------------------------------------------------------------------------------
if (document.querySelector(".beauty__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	let myageSlider = new Swiper(".beauty__slider", {
	  // Указываем скласс нужного слайдера
	  // Подключаем модули слайдера
	  // для конкретного случая
	  modules: [Navigation],
	  observer: true,
	  observeParents: true,
	  slidesPerView: 'auto',
	  spaceBetween: 30,
	  speed: 800,

	  // Кнопки "влево/вправо"
	  navigation: {
		 prevEl: ".swiper-button-prev2",
		 nextEl: ".swiper-button-next2",
	  },
	  
	  // События
	  on: {},
	});
}
//-------------------------------------------------------------------------------------------
if (document.querySelector(".brows__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
	let myageSlider = new Swiper(".brows__slider", {
	  // Указываем скласс нужного слайдера
	  // Подключаем модули слайдера
	  // для конкретного случая
	  modules: [Navigation],
	  observer: true,
	  observeParents: true,
	  slidesPerView: 'auto',
	  spaceBetween: 30,
	  speed: 800,
	  // Кнопки "влево/вправо"
	  navigation: {
		 prevEl: ".swiper-button-prev3",
		 nextEl: ".swiper-button-next3",
	  },
	  // События
	  on: {},
	});
}
//-------------------------------------------------------------------------------------------
if (document.querySelector(".product-page-min__slider")) {
	// Указываем скласс нужного слайдера
	// Создаем слайдер
  const productSliderMin = new Swiper(".product-page-min__slider", {
	  // Указываем скласс нужного слайдера
	  // Подключаем модули слайдера
	  // для конкретного случая
//	  modules: [Thumbs],
//	  observer: true,
//	  observeParents: true,
	  slidesPerView: 5,
//	  spaceBetween: 0,
//	  direction: 'vertical',
//	  speed: 800,
//	direction: 'vertical',

	  // События
	  on: {},
	});

	new Swiper(".product-page__slider", {
	  // Указываем скласс нужного слайдера
	  // Подключаем модули слайдера
	  // для конкретного случая
	  modules: [Navigation, Thumbs],
//	  observer: true,
//	  observeParents: true,
	  slidesPerView: 1,
//	  spaceBetween: 30,
//	  speed: 800,

	  // Кнопки "влево/вправо"
	  navigation: {
		 prevEl: ".swiper-button-prev-ppg",
		 nextEl: ".swiper-button-next-ppg",
	  },
	 thumbs: {
		swiper: productSliderMin
			},
	  // События
	  on: {
	  },
	});
}

}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();

	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});