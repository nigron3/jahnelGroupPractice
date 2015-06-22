
$(document).ready(function(){

	$('#btnHide').click(toggleFooter);

	$('form').submit(function(){

		if($('#robocheckTextInput').val()=='8'){
			alert('ok');
			return true;
		}
		else
		{
			alert($('#robocheckTextInput').val());
			return false;
		}


	});

	$('form').on('click', 'input[type=text]', function(){ $(this).val('');});

	$('form').on('click', 'textarea', function(){
	

	if($(this).text()=="What's on your mind?")
		{
			
			$(this).html(' ');
		}
		

	});

 	$('#btnScrollTop').click(scrollToTop);

});// end doc ready



function toggleFooter(){
	if( $('footer').hasClass('hidden')){
		$('footer').slideDown('slow', 
			function() {$("html, body").animate({ scrollTop: $(document).height() }, "2000");});

		$('footer').removeClass('hidden');
		$('#btnHideTitleSpan').text('Hide');
		$('#btnHide').html('-');
		
	}
	else{
		scrollToBottom();
		
		$('#btnHideTitleSpan').text('Contact');
		$('#btnHide').html('+');
		$('footer').addClass('hidden');
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

function scrollToBottom() {
	
	$("html, body").animate({ scrollTop: $('footer').offset().top + 500}, '2000');

}