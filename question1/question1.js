//state array that will store elements
var stateArray = [];

//added used to ensure that elements are not added twice
var added = false;

//helper function - this function creates a div with given id, class, text set and appends to given parent node
function createDiv(id, cls, text, parentid){

    //create new div 
    const newDiv = document.createElement("div");
    newDiv.setAttribute('id', id); //set id attribute
    newDiv.classList.add(cls); //add class

    //create text node to append to newDiv
    const textNode = document.createTextNode(text);
    newDiv.appendChild(textNode);

    //append div to parent element
    const parentElem = document.getElementById(parentid);
    parentElem.appendChild(newDiv);

}

//helper funtion - this function highlights the number and text that it is completing
function updateHighlight(idNum){

    //gets currently highlighted elements and deletes the highlighted class from them
    var currentHighlightedElems = document.getElementsByClassName("highlighted");

    //checks if there are any currently highlighted items
    while (currentHighlightedElems.length > 0) {

        //loop through the collection and remove the highlighted class from each element
        for (var i = 0; i < currentHighlightedElems.length; i++) {
            currentHighlightedElems[i].classList.remove("highlighted");
        }

    }
    
    //gets elements with idNum and adds the highlighted class to them
    var newHighlights = document.getElementsByClassName(idNum);

    //if there are elements with the given class name, add the highlighted class to each of them
    if (newHighlights.length > 0) {

        //loop through the collection and add highlighted class for each element
        for (var j = 0; j < newHighlights.length; j++) {
            newHighlights[j].classList.add("highlighted");
        }

    }
}

//helper funtion - this function clears the solution area, used when page is loaded and before every function
function clearSolution(){

    //clears all the content from inside the solution area
    var solutionArea = document.getElementById("solutionAnswer");
    solutionArea.innerHTML = "";

}

//helper function - this function adds the given state name as a div with 'displayState' class and adds it to the solution answer area
function displayState(state){

    //create a new div that will go in the solution answer area
    const displayState = document.createElement("div");

    //adding id name so that it can be styled using css
    displayState.classList.add("displayState");

    //creating and adding in state name as text attribute
    const stateName = document.createTextNode(state);
    displayState.appendChild(stateName);

    //adding the new created state div to the solution answer area
    const solutionAnswerArea = document.getElementById("solutionAnswer");
    solutionAnswerArea.appendChild(displayState);

}

//helper function - updates all information to display and start executing functions
function restartDisplay(highlightedID){

    //adds elements to array if already added it does nothing
    addToArray();

    //clears previous answers
    clearSolution();

    //update new highlights (this is option 1)
    updateHighlight(highlightedID);
}


//ADDING FUNCTION - this function adds the elements to the array
function addToArray() {

    //checks if elements have already been added if they havent then it adds them if they have then it doesnt add them
    if(added == false){
        stateArray.push(
            "Arizona",
            "Alaska",
            "Hawaii",
            "Georgia",
            "West Virginia",
            "Alabama",
            "Ohio",
            "North Carolina",
            "Rhode Island",
            "Florida",
            "California"
        );
        added = true;
    }

}

//(1) FUNCTION = displays all the states in the array
function displayAllStates(){

    //restartsDisplay and makes sure array is full, updates highlight to 1
    restartDisplay(1);

    //displays each state
    stateArray.forEach(displayState);
}

//(2) FUNCTION = finds all states that are 2 words
function findTwoWords(){

    //restartsDisplay and makes sure array is full, updates highlight to 2
    restartDisplay(2);

    //goes through each element in array and splits it up by a space. This splits it up into an array of words, if the array length is 2 (2 words) then display it, else do nothing.
    for(i in stateArray){

        //splits up each state by spaces which therefore splits it up by words
        var state = stateArray[i].split(" ");

        //if there are 2 words then display them 
        if(state.length == 2){
            displayState(stateArray[i]);
        }
    }

}

function nameLength(){

    //restartsDisplay and makes sure array is full, updates highlight to 3
    restartDisplay(3);

    for(i in stateArray){

        //create new state element that is stored in solution answer area no text 
        createDiv("stateNameNLength" + i + "", "displayState", "", "solutionAnswer");

        //create div with state name only in it
        createDiv("stateName", "stateName", stateArray[i], "stateNameNLength" + i + "");

        //solve for word count
        var count = stateArray[i].split("").length;

        //create div with word count 
        createDiv("stateLength", "stateLength", count, "stateNameNLength" + i + "");
        
    }

}

function alphabetizeStates(){

    //restartsDisplay and makes sure array is full, updates highlight to 4
    restartDisplay(4);

    //sorts the array alphabetically
    stateArray.sort();

        //side note: This is the easiest way to sort because js already has a sorting
        //function but if I needed to create one I would go through the array and make all of the words lowercase
        //then I would find the element's Unicode codepoint value for the first letter then sort it using a 
        //comparing sorting algorithm like insertion sort (I'd code in a more effiecient algorithm like merge 
        //sort if there was more data) if 2 elements have the same first letter the code
        //would go through and check each letter until one is decided to be greater than
        //and it would sort it accordingly.

    //displays each element in array
    stateArray.forEach(displayState);

}

