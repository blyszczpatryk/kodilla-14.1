var carousel = document.getElementById('carousel-template').innerHTML;
	
Mustache.parse(carousel);

var carouselElements = '';

for (var i = 0; i < array.length; i++) {
	carouselElements += Mustache.render(carousel, array[i]);
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