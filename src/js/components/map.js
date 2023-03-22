// M A P

ymaps.ready(init);
function init() {
	const mapElem = document.querySelector('#map');
	const myMap = new ymaps.Map(
		"map",
		{
			center: [55.769535, 37.639985],
			zoom: 14,
			controls: []
		},
		{
			suppressMapOpenBlock: true,
			geolocationControlSize: "large",
			geolocationControlPosition:  { top: "200px", right: "20px" },
			geolocationControlFloat: 'none',
			zoomControlSize: "small",
			zoomControlFloat: "none",
			zoomControlPosition: { top: "120px", right: "20px" }
		}
	);

	myMap.behaviors.disable('scrollZoom');

	const myPlacemark = new ymaps.Placemark(
		[55.769535, 37.639985],
		{},
		{
			iconLayout: "default#image",
			iconImageHref: "../img/geo.png",
			iconImageSize: [12, 12],
			iconImageOffset: [-20, -40],
		}
	);

	myMap.geoObjects.add(myPlacemark);

	setTimeout(() => {
		myMap.container.fitToViewport();
	}, 5000);
}
