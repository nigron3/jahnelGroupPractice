
$(document).ready(function(){

	$('#btnHide').click(toggleFooter);

	var contactAdd1 =  Math.floor((Math.random() * 100) + 1); 
	var contactAdd2 =  Math.floor((Math.random() * 100) + 1); 
	var contactAddSum=contactAdd1 + contactAdd2;
	$('#contactFormValitationMath').text(contactAdd1 +'+' +contactAdd2);
	


	$('form').submit(function(){


		if($('#robocheckTextInput').val()==contactAddSum){

			if($('#contactFormNameInput').val() !=='Your Name' && $('#contactFormNameInput').val().length >0 )
			{

			
				if($('#contactFormEmailInput').val() !=='Your Email' && $('#contactFormEmailInput').val().length >0)
				{
					return true;
				}
				else
				{
					alert("please enter a valid email");
					return false;
				}
			}
			else{
				alert("please enter your name");
				return false;
			}



			
		}
		else
		{
			//alert($('#robocheckTextInput').val() +);
			alert('invalid sum');
			$('#robocheckTextInput').val('');
			contactAdd1 =  Math.floor((Math.random() * 100) + 1); 
			contactAdd2 =  Math.floor((Math.random() * 100) + 1); 
			$('#contactFormValitationMath').text(contactAdd1 +'+' +contactAdd2);
			contactAddSum=contactAdd1 + contactAdd2;
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

