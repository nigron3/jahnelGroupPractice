$(document).ready(function(){

	$('#scrollDownButton').click(scrollToAnchor)

});


function scrollToAnchor () {

	var body = $("body");

	 body.animate({scrollTop:$('#scrollDownButton').offset().top}, '500');
}