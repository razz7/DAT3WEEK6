


//Opave 1
var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]

console.log(names)

function sortNames(name) {
    return name.includes("a");
};

var newNames = names.filter(sortNames);

console.log(newNames);

newNames.reverse();

console.log(newNames);

//Opave 2

//a)

var names = ["Lars", "Jan", "Peter", "Bo", "Frederik"]


console.log("Opgave 2a");

function myFilter(array, callback) {

    var arrayA = [];
    
    var i;
    for(i = 0; i < array.length;) {
        if (callback(array[i]) === true) {
            arrayA.push(array[i]);
        }
            
        i++;

    }
return arrayA;
};

    var newArray = myFilter(names, sortNames);

    console.log(newArray);

//b)

console.log("Opgave 2b");

function reverse(names) {
    var newArray = [];
    var i;
    for (i = names.length - 1; i >= 0; i--) {
        newArray.push(names[i]);
    }
    return newArray;

};



function myMap(array, callback) {
    return callback(array);

};

var reversed = myMap(newArray, reverse);

console.log(reversed);


//Opgave 3
console.log("Opgave 3a");

var names = ["Lars", "Peter", "Jan", "Bo"];

Array.prototype.myFilter = function(cb) {
    var newArray = [];
    var i;
    for(i = 0; i < this.length; i++) {
        newArray.push(cb(this[i]));
        
    }
    
    return newArray;
    


};

var newArray = names.myFilter(function(name) { if(name.includes("a")) { return name}; });

console.log(newArray);

Array.prototype.myMap = function(cb) {
    var newArray = [];
    
        for (i = names.length - 1; i >= 0; i--) {
            newArray.push(cb(names[i]));
        }
    return newArray;
    };

console.log("Opgave 4a");

var numbers = [1, 3, 5, 10, 11];

function calculateArray(array) {
   
        return array ;
   

};

function loopNumbers(numbers) {
var newArray = [];
    var i;
    for (i = 0; i <= numbers.length; i++)
{ 
    
    if(i == numbers.length-1) {
        newArray.push(numbers[i]);
        
        return newArray;
    } else {
        
    
  newArray.push(numbers[i] + numbers[i+1]);
}  

}
return newArray;

};

console.log(loopNumbers(numbers));



console.log("Opgave 4b");

var names = ["Lars", "Peter", "Jan", "Bo"];

var newArray = names.map(function(name) { return '<a href="">' + name + '</a>';  })

newArray = newArray.join("");
newArray = '<nav>' + newArray + '</nav>';
console.log(newArray);

console.log("Opgave 4c");

var names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

var nameArray = names.map(function(person) {  return '<li><a href="">' + person.name + " " + person.phone +  '</a></li>'; } );
nameArray = nameArray.join("");
nameArray = "<nav><ul>" + nameArray + "</ul></nav>";
console.log(nameArray);

console.log("Opgave 4d");

//document.getElementById("names").innerHTML = nameArray;
//
//
//function getAs() {
//    
//    newArray = names.filter(name => name.name.includes("a"));
//    var nameArray = newArray.map(function(person) {  return '<li><a href="">' + person.name + " " + person.phone +  '</a></li>'; } );
//    nameArray = nameArray.join("");
//    nameArray = "<nav><ul>" + nameArray + "</ul></nav>";
//    document.getElementById("names").innerHTML = nameArray;
//};
//
//document.getElementById("button").addEventListener("click", getAs);

console.log("Opgave 5a");

var all= ["Lars", "Peter", "Jan", "Bo"];

all = all.join(", #");

console.log(all);

console.log("Opgave 5b");

var numbers = [2, 3, 67, 33];

function sum(array, tot){ 
    return array + tot;



};

numbers = numbers.reduce(sum);

console.log(numbers);

console.log("Opgave 5c");

var members = [{name : "Peter", age: 18},{name : "Jan", age: 35},{name : "Janne", age: 25},{name : "Martin", age: 22}];



var reducer = members.reduce(function(array, member, sum) { return sum + member.age ; })
    

console.log(reducer);

console.log("Opgave 5d");

var votes = [ "Clinton","Trump","Clinton","Clinton","Trump","Trump","Trump","None"];

var count = {};

function countVotes(array) {
  var newArray = {};
  var clinton = 0;
    var trumpVotes = 0;
    var none = 0;
  for(var i = 0; i < array.length; i++) {
    
    if(array[i] === "Clinton") {
        clinton++;
  } 
    if(array[i] === "Trump") {
        trumpVotes++
  } 
    if(array[i] === "None") {
        none++;
  } 
  newArray["Clinton"] = clinton;
  newArray["Trump"] = trumpVotes;
  newArray["None"] = none;

  
}
  return newArray;

};

count = countVotes(votes);

console.log(count);


console.log("Opgave 6");

////Declarations in JS is hoisted which mean that all variable declarations are moved to the top before the code is compiled.

//x = 5; // Assign 5 to x

//elem = document.getElementById("demo"); // Find an element
//elem.innerHTML = x;                     // Display x in the element

//var x; // Declare x


//var x; // Declare x
//x = 5; // Assign 5 to x

//elem = document.getElementById("demo"); // Find an element
//elem.innerHTML = x;

//Var and Let

//a let variable can only be acces within the code block where it is instatiated. It cannot be acces globally, like 'var' can.

var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
    
  })();
  
  console.log(add());
  console.log(add());
  console.log(add());
  