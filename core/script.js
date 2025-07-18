/*//Pure JavaScript DOM
var el = document.getElementById("elementID");
el.style.css-property = "cssattribute";

//When doing A CSS property that have multiple words, its typed differently
//Instead of spaces or dashes, use camelCase
//Example:
el.style.backgroundColor = "blue";

//Make sure before using jQuery, link the jQuery library to your code
//JavaScript with jQuery
//jQuery can use CSS property to fid=nd an element
$("#elementID").css("css-property", "css-attribute");

//On jQuery, the CSS property is typed like normal CSS property
//Example: 
$("#elementID").css("background-color", "blue");

//If you want multiple property for jQuery, you can stack them on one code
//instead of typing each attribute
//Example: 
$("#elementID").css({"css-property": "css-attribute", "css-property": "css-attribute"});

//you can also make them nice by adding line breaks
//Example: 
$("#elementID").css({
  "css-property": "css-attribute",
  "css-property": "css-attribute"});
//You can add as much CSS property and attribute as you want
//just make sure, always end it with a comma before adding another one
//the last property doesn't need a comma*/

// https://stackoverflow.com/users/1061967/michael-zaporozhets
//const isMobile = navigator.userAgentData.mobile; //resolves true/false
//if (true){
  //document.getElementByID("btop").style.display = "none";
//}
