
$(document).ready(function(){

	$('#btnHide').click(toggleFooter);

	$('form').on('click', 'input[type=text]', function(){ $(this).val('');});

 	$('#btnScrollTop').click(scrollToTop);

});



function toggleFooter(){
	if( $('footer').hasClass('hidden')){
		$('footer').slideDown('slow', 
			function() {$("html, body").animate({ scrollTop: $(document).height() }, "2000");});


		$('footer').removeClass('hidden');
		$('#btnHideTitleSpan').text('Hide');
		$('#btnHide').html('-');
		
	}
	else{
		$('footer').slideUp('slow');
		$('footer').addClass('hidden');
		$('#btnHideTitleSpan').text('Contact');
		$('#btnHide').html('+');
	}
}



function scrollToTop() {
	var body = $("body");
	var top = body.scrollTop() // Get position of the body

	if(top!=0)
	{
	  body.animate({scrollTop:0}, '500');
	}

}