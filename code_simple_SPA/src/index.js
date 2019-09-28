import 'bootstrap/dist/css/bootstrap.css'
import jokes from "./jokes";


//document.getElementById("btn1").addEventListener("click", setJokeByID);
//const allJokes = jokes.getJokes().map(joke => "<li>"+joke+"</li>");
////document.getElementById("jokes").innerHTML = allJokes.join//////
//function setJokeByID(id) {
//    var id = document.getElementById("getjoke").value;
//    console.log(id);
//    const specJoke = jokes.getJokeById(id);
//    
//    document.getElementById("joke").innerHTML = specJoke;
//

let url = 'https://studypoints.info/jokes/api/jokes/period/hour';

function getQuote() {
fetch(url)
 .then(function(response) {
   return response.json();
 })
 .then(function(data) {
   console.log(data.joke);
   document.getElementById("mydiv").innerHTML = data.joke
})};




document.getElementById("btn").addEventListener("click", getQuote);

//function getQuote() {
//
//
//
//    document.getElementById("mydiv").innerHTML = "<h> the world is a great place </h>"; 
//
//};

function getWest() {

    document.getElementById("mydiv").innerHTML = "West";
}
function getNorth() {

    document.getElementById("mydiv").innerHTML = "North";
}
function getSouth() {

    document.getElementById("mydiv").innerHTML = "South";
}
function getEast() {

    document.getElementById("mydiv").innerHTML = "East";
}

document.getElementById("west").addEventListener("click", getWest);
document.getElementById("north").addEventListener("click", getNorth);
document.getElementById("east").addEventListener("click", getEast);
document.getElementById("south").addEventListener("click", getSouth);


