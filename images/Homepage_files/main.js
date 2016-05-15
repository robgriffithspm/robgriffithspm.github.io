var firstName = prompt("Hello. What is your first name?");
var lastName = prompt("Hi" + " " + firstName + ". What is your last name?");
var fullName = firstName + " " + lastName;
console.log(fullName);
var age = prompt("How old are you, " + firstName + "?")
age = parseInt(age);
if (firstName =="General" && lastName!=="Assembly"){
	console.log("Good morning, General" + " ," + lastName)
}
if (firstName =="General" && lastName =="Assembly"){
	console.log("Alarm! Someone is impersonating the General!")
}


// //When the page loads
// $(function(){

// //when user clicks on a heading
// $('h3').on('click', function (){ //.on sets the event listener
// 	//Hide the content after that heading.
// 	$(this).next().slideToggle(1000);
// }); //This is doing the action in 1000 milliseconds
