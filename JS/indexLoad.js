$(document).ready(function(){
	var home= "<h1>Nathan Vann</h1><h4>Front End Web Developer</h4><p>I am a free lance web designer who is ready to take the step up to the office development world. This porfolio site is an example of using Bootstrap and JQuery together.This should also give you some insight into some of my personal hobbies as well.</p> <h5>Strengths</h5> <ul> <li>Problem Solving</li> <li>Learning new technology</li> </ul> <h5>Job Experience</h5> <ul> <li>Owner of Nathan Vann Design LLC</li> <ul> <li>Designed, Built, and Maintained Websites</li> <li>Mobile Application Design with Apache Cordova.</li> <li>Administrated Multiple Websites.</li> </ul> <br/> <li>Director of Customer Relations - Ability LLC(ERP Software Development company)</li> <ul> <li>Began my career at Ability LLC as an intern and worked my way up to managing the QAT and Support teams.</li> <li>Managed Quality Assurance Team</li> <li>Consulted on integrating software into business processes</li> <li>Managed the Customer Support Desk</li> <li> Preformed Quality Assurance Testing</li> </ul> </ul> <br>",
		pi = "<h1>Raspberry PI Hobbyist</h1> <div class='row'> <div class='col-lg-8'> <img src='IMGS/Rpi.jpg' alt='picture of the Raspberry Pi'/> </div> <div class='col-lg-4'> <p>The Raspberry Pi is a single board computer that can be used for physical computing such as controlling devices and reading electronic sensor data. The Raspberry Pi is a great single board computer with tons of potential for creating DIY solutions for home Automation.</p> <p> This small computer is also capable of becoming a server for at home use such as VPN or as a development server for web designers on a budget.</p> </div> </div>",
		kayak = "<div class='gallery'> <img src='IMGS/WW/berry.jpg'><img src='IMGS/WW/tot.jpg'><img src='IMGS/WW/piney.jpg'></div> <ul class='pagination'> <li class='active'><a href='#' >1</a></li> <li><a href='#'>2</a></li> <li><a href='#'>3</a></li> </ul>", 
		music = ""
	
	$('.navbar-nav > li').click(function(){
		$('.navbar-nav > .active').removeClass('active');
		$(this).addClass('active');
		
	});

	function goHome(){
		$('.well').empty();
		$('.well').append(home);
		$('.navbar-nav > .active').removeClass('active');
		$('#home').addClass('active');
	};
//commented out so that I can test individual pages
$('.well').append(home);

//turns the well class container into a div about my raspberry pi
$('#pi').click(function(){
	$('.well').empty();
	$('.well').append(pi);
});
// when Home is clicked
$('#home').click(goHome);
$('.navbar-brand > a').click(goHome)

//Kayaking is clicked
$('#kayak').click(function(){
	$('.well').empty();
	$('.well').append(kayak);
	$('.pagination > li:first').addClass('active');
	$('.gallery > img').hide();
	$('.gallery > img:first').addClass('active').show();
//pagination controller
	//pagination buttons change active status
$('.pagination > li').click(function(){
	$('.pagination > .active').removeClass('active');
	$(this).addClass('active');


});
//link the buttons
$('.pagination > li:first').click(function(){
	$('.gallery > .active').removeClass('active').hide();
 	$('.gallery > img:first').addClass('active').fadeIn();

});

$('.pagination > li:nth-child(2)').click(function(){
	$('.gallery > .active').removeClass('active').hide();
	$('.gallery > img:nth-child(2)').addClass('active').fadeIn();

});

$('.pagination > li:nth-child(3)').click(function(){
	$('.gallery > .active').removeClass('active').hide();
	$('.gallery > img:nth-child(3)').addClass('active').fadeIn();

});
 });




//Music is clicked






});