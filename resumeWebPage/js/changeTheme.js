$(document).ready(function(){

	if(!localStorage.getItem('themeFile'))
	{
		var cssId = 'themeCss';  // you could encode the css path itself to generate id..
		var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/themes/themeSepia.css';
	    link.media = 'all';
	    head.appendChild(link);

	    localStorage.setItem('themeFile','Sepia');

	}
	else 
	{
		
		if(localStorage.getItem('themeFile')==='Sepia')
		{
		var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    link.id   = cssId;
		    link.rel  = 'stylesheet';
		    link.type = 'text/css';
		    link.href = 'css/themes/themeSepia.css';
		    link.media = 'all';
		    head.appendChild(link);
		}
		else if (localStorage.getItem('themeFile')=='Light')
		{
			var cssId = 'themeCss';  // you could encode the css path itself to generate id..

		    var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    link.id   = cssId;
		    link.rel  = 'stylesheet';
		    link.type = 'text/css';
		    link.href = 'css/themes/themeLight.css';
		    link.media = 'all';
		    head.appendChild(link);
		}
		else{
			var head  = document.getElementsByTagName('head')[0];
		    var link  = document.createElement('link');
		    link.id   = cssId;
		    link.rel  = 'stylesheet';
		    link.type = 'text/css';
		    link.href = 'css/themes/theme.css';
		    link.media = 'all';
		    head.appendChild(link);

		}
	}
	
	$('#btnTheme').click(function() {
	  
	var cssId = 'themeCss';  // you could encode the css path itself to generate id..

	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/themes/theme.css';
	    link.media = 'all';
	    head.appendChild(link);
	     localStorage.setItem('themeFile','Dark');

	});

	$('#btnTheme2').click(function() {
	  
	var cssId = 'themeCss';  // you could encode the css path itself to generate id..

	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/themes/themeLight.css';
	    link.media = 'all';
	    head.appendChild(link);
	     localStorage.setItem('themeFile','Light');

	});

	$('#btnTheme3').click(function() {
	  
	var cssId = 'themeCss';  // you could encode the css path itself to generate id..

	    var head  = document.getElementsByTagName('head')[0];
	    var link  = document.createElement('link');
	    link.id   = cssId;
	    link.rel  = 'stylesheet';
	    link.type = 'text/css';
	    link.href = 'css/themes/themeSepia.css';
	    link.media = 'all';
	    head.appendChild(link);
	     localStorage.setItem('themeFile','Sepia');

	});

});