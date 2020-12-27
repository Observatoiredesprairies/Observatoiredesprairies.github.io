// INTEGRATION MAPBOX

// access token
mapboxgl.accessToken = 'pk.eyJ1IjoicHJhaXJpZXMiLCJhIjoiY2s3ZnozYmVmMDdoODNmcGVpdHVtb3pweCJ9.cIzl5XtK9BoMiVpQmCFzig';
// chargement de la carte
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/prairies/ck7q0od870hmx1ipslb9tb812',
	center: [-1.6737055555555557, 48.1239650],
	zoom: 15.7
});

map.addControl(new mapboxgl.NavigationControl({
	showCompass: false
}));
map.scrollZoom.disable();

console.log(JSON.stringify(config, null, 2))

for (const point of config) {
	// création du pop-up + contenu
	var popup1 = new mapboxgl.Popup({ className: "popup" })
		.setHTML('<p><a href="'+ point.url + '" target="_top"><img src="./src/img/mini/' + point.mini + '"></img></a></p>')

		

	// création bouton du marqueur
	var el1 = document.createElement('div');
	el1.id = 'marker1';
	el1.className = 'marker';


	// injection du marqueur et du pop-up dans la carte
	new mapboxgl.Marker(el1)
		.setLngLat(point.lngLat)
		.setPopup(popup1)
		.addTo(map);
}



/*

// création du pop-up + contenu
var popup1 = new mapboxgl.Popup({ offset: 25 })
	.setHTML('<p><a href="http://www.google.com" target="_blank">Test de lien</a><br>Description ici</p>');

// création bouton du marqueur
var el1 = document.createElement('div');
el1.id = 'marker1';
el1.className = 'marker'
el1.textContent = "Z4P1";

// injection du marqueur et du pop-up dans la carte
new mapboxgl.Marker(el1)
	.setLngLat([-1.674811111111111, 48.1260639])
	.setPopup(popup1)
	.addTo(map);


// création du pop-up + contenu
var popup1 = new mapboxgl.Popup({ offset: 25 })
	.setHTML('<p><a href="http://www.google.com" target="_blank">Test de lien</a><br>Description ici</p>');

// création bouton du marqueur
var el1 = document.createElement('div');
el1.id = 'marker1';
el1.className = 'marker'
el1.textContent = "Z3P1";

// injection du marqueur et du pop-up dans la carte
new mapboxgl.Marker(el1)
	.setLngLat([-1.674161111111111, 48.1256139])
	.setPopup(popup1)
	.addTo(map);

// création du pop-up + contenu
var popup1 = new mapboxgl.Popup({ offset: 25 })
	.setHTML('<p><a href="http://www.google.com" target="_blank">Test de lien</a><br>Description ici</p>');

// création bouton du marqueur
var el1 = document.createElement('div');
el1.id = 'marker1';
el1.className = 'marker'
el1.textContent = "Z3P2";

// injection du marqueur et du pop-up dans la carte
new mapboxgl.Marker(el1)
	.setLngLat([-1.674161111111111, 48.1256139])
	.setPopup(popup1)
	.addTo(map);

// création du pop-up + contenu
var popup1 = new mapboxgl.Popup({ offset: 25 })
	.setHTML('<p><a href="http://www.google.com" target="_blank">Test de lien</a><br>Description ici</p>');

// création bouton du marqueur
var el1 = document.createElement('div');
el1.id = 'marker1';
el1.className = 'marker'
el1.textContent = "Z3U";

// injection du marqueur et du pop-up dans la carte
new mapboxgl.Marker(el1)
	.setLngLat([-1.6736388888888887, 48.123475])
	.setPopup(popup1)
	.addTo(map);

// création du pop-up + contenu
var popup1 = new mapboxgl.Popup({ offset: 25 })
	.setHTML('<p><a href="http://www.google.com" target="_blank">Test de lien</a><br>Description ici</p>');

// création bouton du marqueur
var el1 = document.createElement('div');
el1.id = 'marker1';
el1.className = 'marker'
el1.textContent = "Z2U";

// injection du marqueur et du pop-up dans la carte
new mapboxgl.Marker(el1)
	.setLngLat([-1.6732749999999998, 48.1234167])
	.setPopup(popup1)
	.addTo(map);*/