/*
Customise the page for printing.
*/
document.body.style.border = "1px solid gray";
var scrollTable = document.getElementById("hdScrollconfTable"); 
scrollTable.style.height = "";
scrollTable.innerHTML += "Customised for printing.";

var p_tags = document.getElementsByTagName("p");
p_tags[2].parentNode.removeChild(p_tags[2]);
// p tag below jumbo is required for adding empties break-up in pdf
p_tags[0].parentNode.removeChild(p_tags[0]);
