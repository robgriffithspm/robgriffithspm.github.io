function askQuestions (){

	var firstName = prompt("Hello. What is your first name?");
	var lastName = prompt("Hi" + " " + firstName + ". What is your last name?");
	var fullName = firstName + " " + lastName;
	console.log(fullName);
	// var age = prompt("How old are you, " + firstName + "?")
	// age = parseInt(age);
	if (firstName =="Elliott" && lastName=="French"){
		console.log("Hello " + fullName)
		$('h1').text('Hi Elliott!')
		$('h2').text('Do you like my web page?')
	    $('img').attr('src', 'images/cat1.jpg');
}

}

// 	var faveColour = prompt("What is your favourite colour, " + firstName + "?").toLowerCase();
// 	if (faveColour ==="red" ||
// 	    faveColour ==="blue" ||
// 	    faveColour ==="green" ||
// 	    faveColour ==="yellow"){
// 		$('h1').css('color', faveColour);
// 	}

// }

// //When the page loads
// $(function(){

// //when user clicks on a heading
// $('h3').on('click', function (){ //.on sets the event listener
// 	//Hide the content after that heading.
// 	$(this).next().slideToggle(1000);
// }); //This is doing the action in 1000 milliseconds

$(function(){
	$('img').on('click', askQuestions);
});