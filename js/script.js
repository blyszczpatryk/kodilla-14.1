var carousel = document.getElementById('carousel-template').innerHTML;
	
Mustache.parse(carousel);

var carouselElements = '';

for (var i = 0; i < items.length; i++) {
	carouselElements += Mustache.render(carousel, items[i]);
}

var results = document.getElementsByClassName('main-carousel')[0];

results.insertAdjacentHTML('beforeend', carouselElements);


var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  cellAlign: 'left',
  contain: true,
  pageDots: false,
  hash: true,
});

var button = document.querySelector('.restart-button');

button.addEventListener('click', function() {
	flkty.select(0);
})

var progressBar = document.querySelector('.progress-bar')

flkty.on( 'scroll', function( progress ) {
  progress = Math.max( 0, Math.min( 1, progress ) );
  progressBar.style.width = progress * 100 + '%';
});


window.initMap = function() {

  	var uluru = {lat: -25.363, lng: 131.044};

  	var map = new google.maps.Map(
    	document.getElementById('map'), {zoom: 4, center: uluru});


  	items.forEach(function(carousel) {
  		new google.maps.Marker({position: carousel.coords, map: map})
  	});
	
}