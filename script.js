let quotesArray = [
  "Quality: You won’t find plastic or batteries here.  Our handmade toys are carefully crafted from sustainable Baltic birch wood and are designed, manufactured, and tested in the U.S.A – right here in Toms River, NJ.   Each handcrafted item is made to heirloom quality, designed to not only withstand the wear of childhood, but to be strong enough to pass on from sibling to sibling and generation to generation.  Hold one of our wooden toys in your hand, You’ll feel the difference that our makers bring to each handcrafted piece All of our products meet or exceed Consumer Product Safety standards and are finished with toxin-free paints that meet CA-prop65.  Our toys undergo physical, mechanical, and fire-safety testing guided by ASTM standards.  And every piece we craft sustains our own in-house physical testing procedure to ensure unmatched durability and stability.",
  "Sustainability: Wood is an important part of who we are.  Early on we chose wood for its inherently durable qualities with the intention of making toys and furniture that could withstand the test of time – and stay out of the landfill. Our wooden toys are designed to withstand the wear of play and to be safely enjoyed from generation to generation. Our process of sourcing, manufacturing, and shipping only within the U.S. allows us to support our national economy and reduce the often-hefty carbon emissions that come with international trade and shipping.",
  "Visit Us: You’re more than a customer to us – you’re a part of our family!  We love hearing stories of how your children and grandchildren are playing with our toys. Visit us at our Toms River, NJ toy store!  All of our toys are made on-site at this location and you’ll find an old-fashioned toy store with cozy corners to play and explore – and time for us to get to know each other!"
];

let randomNumber = Math.floor(Math.random() * quotesArray.length);

document.getElementById('press-quote').textContent =  quotesArray[randomNumber].split(' — ')[0];

document.getElementById("woodenToyAirplaneContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("woodenToyTrainContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("woodenToyBoatContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("woodenBlockToySetContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("woodenToyCarContent").style.display = "none"; // Sets the style for the content to nothing

function hidePanels () {
    document.getElementById("woodenToyAirplaneContent").style.display = "none"; // Sets the style for the content to nothing
    document.getElementById("woodenToyTrainContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("woodenToyBoatContent").style.display = "none";
document.getElementById("woodenBlockToySetContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("woodenToyCarContent").style.display = "none"; // Sets the style for the content to nothing
document.getElementById("woodenToyAirplaneTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("woodenToyTrainTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("woodenToyBoatTab").className = "accordionPanelTab";
document.getElementById("woodenBlockToySetTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
document.getElementById("woodenToyCarTab").className = "accordionPanelTab"; // Adds the tab into the hidePanels function which hides each panel
}

function showWoodenToyAirplane () {
    hidePanels();
    document.getElementById("woodenToyAirplaneContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("woodenToyAirplaneTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showWoodenToyTrain () {
    hidePanels();
    document.getElementById("woodenToyTrainContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("woodenToyTrainTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showWoodenToyBoat () {
    hidePanels();
    document.getElementById("woodenToyBoatContent").style.display = "block"; // Opens up the tab when clicked
    document.getElementById("woodenToyBoatTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showWoodenBlockToySet () {
  hidePanels();
  document.getElementById("woodenBlockToySetContent").style.display = "block"; // Opens up the tab when clicked
  document.getElementById("woodenBlockToySetTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}

function showWoodenToyCar () {
  hidePanels();
  document.getElementById("woodenToyCarContent").style.display = "block"; // Opens up the tab when clicked
  document.getElementById("woodenToyCarTab").className = "accordionPanelTab highlight"; // Highlights the tab when clicked
}
(function($) { "use strict";

  $(function() {
    var header = $(".start-style");
    $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
    
      if (scroll >= 10) {
        header.removeClass('start-style').addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass('start-style');
      }
    });
  });   
    
  //Animation

  $(document).ready(function() {
    $('body.hero-anime').removeClass('hero-anime');
  });

  //Menu On Hover
    
  $('body').on('mouseenter mouseleave','.nav-item',function(e){
      if ($(window).width() > 750) {
        var _d=$(e.target).closest('.nav-item');_d.addClass('show');
        setTimeout(function(){
        _d[_d.is(':hover')?'addClass':'removeClass']('show');
        },1);
      }
  }); 
  
  //Switch light/dark
  
  $("#switch").on('click', function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $("#switch").removeClass("switched");
    }
    else {
      $("body").addClass("dark");
      $("#switch").addClass("switched");
    }
  });  
  
  })(jQuery); 

  function clearName(){
		if (document.getElementById('nameField').value == 'First and Last Name') {
			document.getElementById('nameField').value = '';
		} 
	}
	function resetName(){
		if (document.getElementById('nameField').value == '') {
			document.getElementById('nameField').value = 'First and Last Name';
		} 
	}
	function clearPhone(){
		if (document.getElementById('phoneField').value == 'example: 212-123-1234'){
			document.getElementById('phoneField').value = '';
	}
}
function resetPhone(){
		if (document.getElementById('phoneField').value == ''){
			document.getElementById('phoneField').value = 'example: 212-123-1234';
	}
}
function clearEmail(){
		if (document.getElementById('emailField').value == 'example: johndoe@gmail.com'){
			document.getElementById('emailField').value = '';
	}
}
function resetEmail(){
		if (document.getElementById('emailField').value == ''){
			document.getElementById('emailField').value = 'example: johndoe@gmail.com';
	}
}
function showAlert(){
	alert('Thank you. You are added to our list!');
}