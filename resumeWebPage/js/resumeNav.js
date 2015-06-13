$(document).ready(function(){



	var techSkills = $("#technicalSkillsAnchor").offset().top -10.0;
	var experience = $('#experienceAnchor').offset().top -10.0;
	var reference = $('#referencesAnchor').offset().top -100.0;

		if($(this).scrollTop() > reference)
    {   
	     $('#resumeNavUl li').each(resetNav);
	     $("#referencesLi").addClass('active');
    }
    else if($(this).scrollTop() > experience)
    {   
	     $('#resumeNavUl li').each(resetNav);
	     $("#experienceLi").addClass('active');
    }
    else if($(this).scrollTop() > techSkills)
    {   
	     $('#resumeNavUl li').each(resetNav);
	     $("#technicalSkillsLi").addClass('active');
    }
    else{
    	 $('#resumeNavUl li').each(resetNav);
	     $("#professionalProfileLi").addClass('active');

    }



	$('#professionalProfileLi').click(scrollToProfessionalProfile);
	$('#technicalSkillsLi').click(scrollToTechnicalSkills );
	$('#experienceLi').click(scrollToExperience );
	$('#referencesLi').click(scrollToReferenecs );



$(document).scroll(function(){
   
   	if($(this).scrollTop() > reference)
    {   
	     $('#resumeNavUl li').each(resetNav);
	     $("#referencesLi").addClass('active');
    }
    else if($(this).scrollTop() > experience)
    {   
	     $('#resumeNavUl li').each(resetNav);
	     $("#experienceLi").addClass('active');
    }
    else if($(this).scrollTop() > techSkills)
    {   
	     $('#resumeNavUl li').each(resetNav);
	     $("#technicalSkillsLi").addClass('active');
    }
    else{
    	 $('#resumeNavUl li').each(resetNav);
	     $("#professionalProfileLi").addClass('active');
    }
});

	//$('#resumeNavUl li').click(toggleActiveLi);


});




function toggleActiveLi(){

$('#resumeNavUl li').each(resetNav);

$(this).addClass('active');

}

function resetNav(){
	$(this).removeClass('active');
}

function scrollToProfessionalProfile(){

 

var body = $("body");
	  

	
	  body.animate({scrollTop:$('#professionalProfileAnchor').offset().top}, '500');
	

 toggleActiveLi();
 AnimateRotate($('#professionalProfileCog'));
}

function scrollToTechnicalSkills(){

 

var body = $("body");
	  

	
	  body.animate({scrollTop:$('#technicalSkillsAnchor').offset().top}, '500');
	

 toggleActiveLi();
 AnimateRotate($('#technicalSkillsCog'));
}

function scrollToExperience(){

 

var body = $("body");
	  

	
	  body.animate({scrollTop:$('#experienceAnchor').offset().top}, '500');
	

 toggleActiveLi();
 AnimateRotate($('#experienceCog'));

}

function scrollToReferenecs(){

 

var body = $("body");
	  


	  body.animate({scrollTop:$('#referencesAnchor').offset().top}, '500');
	

 toggleActiveLi();
 AnimateRotate($('#referencesCog'));

}







function AnimateRotate(cog) {
    // caching the object for performance reasons
    var $elem = cog;

    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}