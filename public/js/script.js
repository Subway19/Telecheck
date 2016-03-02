$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);



//gor google maps on about page
function initMap() {

 var mapDiv = document.getElementById('map');
 var map = new google.maps.Map(mapDiv, {
      center: {lat: 26.249992, lng: 78.169739},
      zoom: 16
    });



}
//Devlopers button on about page
$(document).ready(function(){
$("#developer").click(function(){
    $("#github").toggle(500);
});


});
