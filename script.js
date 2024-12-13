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
    	"review" : "I loved the cinematography of this drama and the use of dramatic irony. Although this was such a bizarre plot, this show exceeded my expectations by keeping me immersed and growing love for the main character who seems almost villanious in the beginning.",
    	"color" : "#3e63b0"
	},
	{
		"title" : "Lovely Runner",
    	"picture_url" : "lovelyrunner2.jpg",
    	"rating" : "4.8",
    	"genre" : "fantasy, romance",
    	"overview" : "Right after Ryoo Seon-jae, a top star ends his life, Im Sol, his top fan somehow ends up at a time when they were in high school and tries to protect him. A fantasy romance unfolds where people who missed each other in time finally meet.",
    	"review" : "This was a very cute show and the perspectives of each character were slowly unraveled, making the story more complete. ",
    	"color" : "#26a8d4"
	},
	{
		"title" : "Atypical Family",
    	"picture_url" : "atypicalfamily.jpg",
    	"rating" : "4.5",
    	"genre" : "fantasy, romance",
    	"overview" : "The Atypical Family tells the story of Bok Gwi-ju and his family. All members of the family except his father have inherited particular superpowers and they come from a long line of similarly blessed ancestors. Gwi-ju's power is to travel back in time to events he experienced.",
    	"review" : "This show was a very interesting concept but I didn't feel much chemistry between the main cast and although the story was engaging at first, it seemed to drag on towards the middle.",
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

    let newContentOverview = document.createElement("P");
    newContentOverview.classList.add('contentText');
    newContentOverview.innerText = incomingJSON['overview'];
    newContentElement.appendChild(newContentOverview);

  	let newContentReview = document.createElement("P");
  	newContentReview.classList.add('contentText');
  	newContentReview.innerText = incomingJSON['review'];
  	newContentElement.appendChild(newContentReview);

  	

  /// Add the item to the page
  	contentGridElement.appendChild(newContentElement);

}