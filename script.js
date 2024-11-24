let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let jsonDatabase = [
	{
		"title" : "Mr. Plankton",
    	"picture_url" : "mrplankton.jpg",
    	"rating" : "4.8",
    	"genre" : "dark comedy, romance",
    	"overview" : "This series tells the story of a man named Hae-jo, a man who was the product of an incorrect artificial insemination, as he forces Jae-mi, the world's most unlucky woman, to accompany him on his last journey in life after learning he is terminally ill.",
    	"review" : "read review of Mr. Plankton",
    	"color" : "#3e63b0"
	},
	{
		"title" : "Lovely Runner",
    	"picture_url" : "lovelyrunner2.jpg",
    	"rating" : "4.8",
    	"genre" : "fantasy, romance",
    	"overview" : "Right after Ryoo Seon-jae, a top star ends his life, Im Sol, his top fan somehow ends up at a time when they were in high school and tries to protect him. A fantasy romance unfolds where people who missed each other in time finally meet.",
    	"review" : "read review of Lovely Runner",
    	"color" : "#26a8d4"
	},
	{
		"title" : "Atypical Family",
    	"picture_url" : "atypicalfamily.jpg",
    	"rating" : "4.5",
    	"genre" : "fantasy, romance",
    	"overview" : "The Atypical Family tells the story of Bok Gwi-ju and his family. All members of the family except his father have inherited particular superpowers and they come from a long line of similarly blessed ancestors. Gwi-ju's power is to travel back in time to events he experienced.",
    	"review" : "read review of Atypical Family",
    	"color" : "#939c72"
	},

];

for (var i = 0; i < jsonDatabase.length; i++) {
  	createJsonElement(jsonDatabase[i]);
	//createElementProper(jsonDatabase[i]);
}

function createJsonElement(incomingJSON) {
	/// Create whole content item div and set class
 	let newContentElement = document.createElement("DIV");
 	newContentElement.style.backgroundColor = incomingJSON['color'];
  	newContentElement.classList.add('contentItem');

  /// Create HEADLINE h3, set class, set content
  	let newContentHeading = document.createElement("H3");
  	newContentHeading.classList.add('contentTitle');
  	newContentHeading.innerText = incomingJSON['title'];
  /// Add the HEADLINE to the item
  	newContentElement.appendChild(newContentHeading);

  	let newImage = document.createElement("IMG");
 	  newImage.classList.add("posterImage");
  	newImage.src = incomingJSON['picture_url'];
  	newContentElement.appendChild(newImage);

  	let newContentRating = document.createElement("H3");
  	newContentRating.classList.add('contentText');
  	newContentRating.innerText = incomingJSON['rating'];
  	newContentElement.appendChild(newContentRating);

  	let newContentReview = document.createElement("P");
  	newContentReview.classList.add('contentText');
  	newContentReview.innerText = incomingJSON['review'];
  	newContentElement.appendChild(newContentReview);

  	let newContentOverview = document.createElement("P");
  	newContentOverview.classList.add('contentText');
  	newContentOverview.innerText = incomingJSON['overview'];
  	newContentElement.appendChild(newContentOverview);

  /// Add the item to the page
  	contentGridElement.appendChild(newContentElement);

}

AOS.init();

// You can also pass an optional settings object
// below listed default settings
AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
  

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 400, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});