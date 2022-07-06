// Контент страницы "delivery"
const deliveryData = {
	"breadcrumbs": "link_to_breadcrumbs",
	"title": "Delivery information",
	"image": "img/delivery.svg",
	"subtitle": "Place an order on the website",
	"list": [
		'Select the desired product and its quantity, click the "Add to cart" button.',
		'Go to the "Shopping Cart" section.',
		'Enter the promo code you have and click the "Place an order" button.',
		'Specify your contact details (Recipient`s full name, phone number, email address, delivery city) or recipient`s contact details.',
		'Choose a delivery method (Courier, Pick-up point, Pickup, Russian Post, Fast delivery from the store).',
		'Select the delivery address.',
		'Choose a convenient payment method.',
		'Click the "Place an order" button.',
		'After placing an order, you will receive a message to your email address containing information about the order: the order number, the composition and cost of the order, and an SMS with the order number.',
		'Information about your orders (current and completed) You can always look in your account in the "My purchases" section.',
		'The maximum cost of 1 order is 400,000 rubles when paying on the website and 50,000 rubles when paying by card or cash upon receipt.',
		'If the cost of your order exceeds the maximum, we recommend placing several orders.',
	],
};
// Вывод данных страницы "delivery"  ----------------------------------------------

document.querySelector('.delivery__title').innerHTML = deliveryData.title;
document.querySelector('.delivery__img').src = deliveryData.image;
document.querySelector('.delivery__subtitle').innerHTML = deliveryData.subtitle;
let listData = '';
	deliveryData.list.forEach(item => {
	listData += `<li>${item}</li>`;
});
document.querySelector('.delivery-list').innerHTML = listData;

//----------------------------------------------------------------------------------------


















