import Team from "./modules/DataObject.js";

// IIFE - Immediately Invoced Function Expression
(() => {
    console.log('fired!');
    // grab the bio container and get ready to populate its content
    // we don't need to be specific with classes, etc if we understand the structure inside
    // our containing element - we can populate the children by index
    const bioInfo = document.querySelector('.bio-wrapper').children;

    function showProfData() {
        // change data on the page here

        // this is the label on the active button (the name) - whichever team button we click
        let currentProf = this.textContent;

        // this refers to the heading tag (the first child of the bio-wrapper div)
        // we change the text content using the Team object, 
        //and get the right data using the currentProf index        
        bioInfo[0].textContent = Team[currentProf].name;

        // this refers to the paragraph tag (the second child of the bio-wrapper div)
        bioInfo[1].textContent = Team[currentProf].role;
        
        // this is the third element 
        bioInfo[2].textContent = Team[currentProf].bio;

        // this is the 4th element (the image tag)
        bioInfo[3].src = `images/${Team[currentProf].avatar}`;

        // this syntax would work too:
        // bioInfo[3].src = "images/" + Team.avatar;
    }

    // for... in is kinda like a forEach loop, but it doesn't have an index
    // It iterates through all of the properties of an object (see MDN -> looping through objects for more)
    for (let prof in Team) {
        console.log(prof);

        // create a button for every prof (every entry) in our object
        let teamButton = document.createElement('button');

        // set the button's label (text) to the prof name (the current entry in the object)
        teamButton.textContent = prof;

        // add some event handling so that when we click one of our new buttons, we can show the right data
        teamButton.addEventListener('click', showProfData);

        // add the button to the top section on our web page
        document.querySelector("#section1").appendChild(teamButton);
    }
})();