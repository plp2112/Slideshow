/**
 * @author Prisca Pointdujour
 */
/*
 * This is an array of all of our images in order */
var images = ["1.png", "2.png", "3.png", "4.png"];

/*Index of current image in our images array*/

var index = 0;

/*set button events here */
function setNav () {
	console.log("setNav");
	$(".button").on("click", function() {
		var isNext = $(this).hasClass("next");
		if (isNext == true && index != (images.length-1)) {
			index = index + 1;
	
		
		} else if (isNext == false && index > 0){
			index = index - 1;
		}
		if (index == 0){
			$(."button.prev").addClass("disabled");
		} else if (index == (images.length-1)) {
			$(".button.next").addClass("disabled");
		}else {
			$("button").removeClass("disabled");
		}
		updateImage();
	});
	
}
/*change image here*/
function updateImage (){
	$(".image-holder").html(
		"<img src='images/"+images[index]+"'/>"
	);
}
/*Load the first image into our image holder*/
$(document).ready(function() {
	$(".image-holder").html(
		"img src='images/"+images[index]+"'/>"
	);
	$(".button.prev").addClass("disabled");
	setNav();
});
console.log(images);
