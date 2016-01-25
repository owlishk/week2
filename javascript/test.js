//var first_name = "Alison";
//var last_name = "King";
//var greeting = "Hello";
//var message1 = "Hello Gorgeous. Nice shoes.";
//var message2 = "Where did you find those lovelies?";
//var goodbye = "Later days.";
//var favorite_quote = "\"Only she who attempts the absurd can achieve the impossible.\"";
//
////back slash is "escape character" to allow quotation marks
//
////use single quotes if you have a lot of illegal characters.
////operators
////= assigns values
////+= (concatenation assignment operator, strings) adds to whatever the variable currently has
//
////output variable to the console!!
///*console.log(greeting);
//console.log(first_name);
//console.log(last_name);
//console.log(message1);
//console.log(message2);
//console.log(goodbye);
//console.log(favorite_quote);*/
//
//console.log(greeting + " " + first_name + " " + last_name + " " + message1 + " " + message2 + " " + goodbye + " " + favorite_quote);

//"I'd like to have money. And I'd like to be a good writer. These two can come together, and I hope they will, but if that's too adorable, I'd rather have money."-Dorothy Parker

var static_words1 = "I'd like to have ";
var static_words2 = ". And I'd like to be a good ";
var static_words3 = ". These two can come together, and I ";
var static_words4 = " they will, but if that's too ";
var static_words5 = ", I'd rather have ";
var static_words6 = ". - Dorothy Parker" ;

//variable to referrence button
var button = document.getElementById("submit");

button.addEventListener("click", onClick, false);

function onClick(evt)
{
  evt.preventDefault(evt);
  
  //Forms
  var element1 = document.getElementById("form1").elements.item(0).value;
  var element2 = document.getElementById("form1").elements.item(1).value;
  var element3 = document.getElementById("form1").elements.item(2).value;
  var element4 = document.getElementById("form1").elements.item(3).value;
  var element5 = document.getElementById("form1").elements.item(4).value;
  console.log(static_words1 + element1 + static_words2 + element2 + static_words3 + element3 + static_words4 + element4 + static_words5 + element5 + static_words6);
}