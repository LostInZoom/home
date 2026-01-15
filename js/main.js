jQuery(function($) {

  // language
	// Hide Language En when the web page loads
  $('.lang-fr').hide();
	$('.lang-en').show();
  $('.selectpicker').on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
    if(previousValue == 'English'){
      // find all content with .lang-en under the div post-content and hide it
      $(".lang-en").fadeToggle('slow',function() {
        // find all content with .lang-fr under the div post-content and show it
        $(".lang-fr").show(); });
    }
    else {
      // find all content with .lang-fr under the div post-content and hide it
      $('.lang-fr').fadeToggle('slow',function() {
        // find all content with .lang-en under the div post-content and show it
          $('.lang-en').show();});
    }
  });

});


///////////////////////////////////Carte gestion de crise Paul////////////////////////////////////
const map = new maplibregl.Map({
    container: 'seism_map',
    style: "https://lostinzoom.huma-num.fr/vtiles/style/hard_style.json",
    center: [0.0, 43],
    zoom: 6,
    attributionControl: false
    }); 
map.setMinZoom(6);
map.setMaxZoom(14.99);
let bounds = [
  [-11.0, 40.0], 
  [11.0, 48.0] 
];

map.setMaxBounds(bounds);
//////////////////////////////////////////////////////////////////////////////////////////////////