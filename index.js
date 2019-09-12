$(document).ready(() => {
	$( ".more" ).each(function(index) {
	    $(this).on("click", function(){
	    	let id = $(this).attr('id')
	        // For the boolean value
	        $("#" + id + " .showmore").slideToggle()
	        $("#" + id + " .plus").toggleClass("rotated")
	    });
	});
  setTimeout($("#header h1").css('text-shadow', '0px 0px 7px white'), 300)
  setTimeout($("#header h3").css('text-shadow', '0px 0px 5px white'), 1300)
});

$("#scrolltoform").click((event) => {
        event.preventDefault()
        $("html, body").animate({ scrollTop: $("#signupform").offset().top }, 800)
        return false;
    });

$("#logo").click((event) => {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, 800)
        return false
    });

// Initialize and add the map
function initMap() {
  // The location of Uluru
  var holberton = {lat: 37.781476, lng: -122.408119}
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 12, center: holberton})
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: holberton, map: map})
}
