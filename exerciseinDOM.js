//Select the section with an id of container without using querySelector
let unorderedelements=document.getElementById("container");

//Select the section with an id of container with using querySelector
let unorderedelements1=document.querySelector("#container");

//Select all of the list items with a class of "second".
let classItems=document.querySelectorAll(".second");
                //[or]
let classItems1=document.getElementsByClassName("secound");

//Select a list item with a class of third, but only the list item inside of the ol tag.
let classItem=document.querySelector("ol .third");

//Give the section with an id of container the text "Hello!".
var fontDiv=document.querySelector("#container");
fontDiv.innerText="Hello!"

//Add the class main to the div with a class of footer.
var addClass=document.querySelector(".footer");
addClass.classList.add("main");

//Remove the class main on the div with a class of footer.
var addClass=document.querySelector(".footer");
addClass.classList.remove("main")

//Create a new li element.
var newLi=document.createElement("li");

//Give the li the text "four".
newLi.innerText="four"

//Append the li to the ul element.
var list=document.querySelector("ul");
list.appendChild(newLi)

//Loop over all of the lis inside the ol tag and give them a background color of "green".
var newList=document.querySelectorAll("ol li");
for(var i=0;i<newList.length;i++){
    newList[i].style.backgroundColor="green"
}

//Remove the div with a class of footer.
var deleteItem=document.querySelector(".footer");
deleteItem.remove()