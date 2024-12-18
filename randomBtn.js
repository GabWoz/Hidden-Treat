/*
  Related HTML files: index.html
  
  Description: 
    This file contains the scripts to handle the interactive element which is:
    the button at the end of the page that redirects you to a random subpage
*/


const moreButton = document.querySelector(".more-btn");
const randomButton = document.querySelector(".random-btn");
const browseCards = document.querySelectorAll(".card");


randomButton.addEventListener("click", () => {
    const cafes = ["Efemeria", "TheLeakyCauldron", "TheWolfPit"];
    const randomCafe = cafes[Math.floor(Math.random() * cafes.length)];
    window.location.href = randomCafe + ".html";
});