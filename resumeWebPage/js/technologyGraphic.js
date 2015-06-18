$(document).ready(function(){

$('#technologySkillSetGraphicContainer').on('click', '.technologySkillSetGraphicUserInterfaceDiv', veiwUIPills);
$('#technologySkillSetGraphicContainer').on('click', '.technologySkillSetGraphicMidTierDiv', viewMidTier);
$('#technologySkillSetGraphicContainer').on('click', '.technologySkillSetGraphicDatabaseDiv', veiwDatabase);

});


function veiwUIPills() {

	$('#databaseCog').removeClass('active');
	$('#midTierCog').removeClass('active');
	$('#uiCog').addClass('active');
	$('#technologyPillsUL li').each(changePillsToUI);
	//AnimateRotate('#uiCog');

}

function viewMidTier(){
	$('#midTierCog').addClass('active');
	$('#uiCog').removeClass('active');
	$('#databaseCog').removeClass('active');
	$('#technologyPillsUL li').each(changePillsToMidTier);
}

function veiwDatabase(){
	$('#databaseCog').addClass('active');
	$('#midTierCog').removeClass('active');
	$('#uiCog').removeClass('active');
	
	$('#technologyPillsUL li').each(changePillsToDatabase);
}


function changePillsToUI() {
	//in the future this will reload the pills for now i am just chaning classes
	$(this).addClass('ui');
	$(this).removeClass('database');
	$(this).removeClass('midTier');
}

function changePillsToMidTier(){
	$(this).removeClass('ui');
	$(this).removeClass('database');
	$(this).addClass('midTier');

}

function changePillsToDatabase(){
	$(this).removeClass('ui');
	$(this).addClass('database');
	$(this).removeClass('midTier');

}

/*

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
*/