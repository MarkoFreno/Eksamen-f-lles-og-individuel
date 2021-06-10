$('document').ready(function() {
	var options = { videoId: '3H54IVRYdmY', start: 0 };
	$('#wrapper').tubular(options);
});


mapboxgl.accessToken = 'pk.eyJ1IjoibWFya29mcmVubyIsImEiOiJja244aWo3Y3gweTZnMm5ueGx0cWYwOXFpIn0.cRz-Ivs9TYcELu44vWOj_A';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center: [12.61113935609334, 55.69040508753843],
zoom: 15.5,
bearing: 27,
pitch: 45
});
// Toll Havs
var chapters = {
	'baker': {
	bearing: 27,
	center: [12.61113935609334, 55.69040508753843],
	zoom: 15.5,
	pitch: 20
	},
// Amass
	'aldgate': {
	duration: 3000,
	center: [12.611997662996409, 55.691808073712934],
	bearing: 15,
	zoom: 15,
	pitch: 0
	},
// Mikeller
	'london-bridge': {
	bearing: 90,
	center: [12.607706128744242, 55.69362220532304],
	zoom: 15,
	speed: 0.3,
	pitch: 40
	},
// La Banchina
	'woolwich': {
	bearing: 90,
	center: [12.610978423451362, 55.68938305298054],
	zoom: 15
	},
// CopenHill
	'gloucester': {
	bearing: 45,
	center: [12.619991038429164, 55.68483338757376],
	zoom: 15.3,
	pitch: 20,
	speed: 0.5
	},
// Alchemist
	'caulfield-gardens': {
	bearing: 180,
	center: [12.61378533658629, 55.69390772803808],
	zoom: 15
	},
// Havnebadet
	'telegraph': {
	bearing: 90,
	center: [12.607213665269763, 55.690168200004294],
	zoom: 15.5,
	pitch: 40
	},
// Lille Bakery
	'charing-cross': {
	bearing: 90,
	center: [12.613343502895008, 55.69021951473748],
	zoom: 15,
	pitch: 20
	}
	};

window.onscroll = function () {
	var chapterNames = Object.keys(chapters);
	for (var i = 0; i < chapterNames.length; i++) {
	var chapterName = chapterNames[i];
	if (isElementOnScreen(chapterName)) {
	setActiveChapter(chapterName);
	break;
	}
	}
	};
	 
	var activeChapterName = 'baker';
	function setActiveChapter(chapterName) {
	if (chapterName === activeChapterName) return;
	 
	map.flyTo(chapters[chapterName]);
	 
	document.getElementById(chapterName).setAttribute('class', 'active');
	document.getElementById(activeChapterName).setAttribute('class', '');
	 
	activeChapterName = chapterName;
	}
	 
	function isElementOnScreen(id) {
	var element = document.getElementById(id);
	var bounds = element.getBoundingClientRect();
	return bounds.top < window.innerHeight && bounds.bottom > 0;
	}