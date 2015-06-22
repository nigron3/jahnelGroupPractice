$(document).ready(function(){

	var techSkills = $("#technicalSkillsAnchor").offset().top -10.0;
	var experience = $('#experienceAnchor').offset().top -50.0;
	var reference = $('#referencesAnchor').offset().top + 500 ;

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
	});//end scroll

});//end doc ready



//removes active class from all lis and then addes it to the one that was selected
function toggleActiveLi(){ 

	$('#resumeNavUl li').each(resetNav);
	$(this).addClass('active');

}


//removes active class from li
function resetNav(){
	$(this).removeClass('active');
}


//the following funcions scroll differnet anchors depending on which li is selected
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




//gives cogs a spinning animation when the page scrollsto an anchor
function AnimateRotate(cog) {
    // caching the object for performance reasons
    var $elem = cog;

    $({deg: 0}).animate({deg: 360}, {
        duration: 2000,
        step: function(now) {
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}

