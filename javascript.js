//Create a webpage with a 16x16 grid of square divs.
let container = document.querySelector('#container');

let squareDivs = [];
for (let i = 0; i < 16; i++) {
    let eachSquareRow = document.createElement('div');
    eachSquareRow.classList.add('row');
    
    for (let i = 0; i < 16; i++) {
        // Create a new div element
        let oneSquare = document.createElement('div');
        squareDivs.push(oneSquare);
        oneSquare.classList.add('square');

        // Append the square div to each row
        eachSquareRow.appendChild(oneSquare);
    }

    container.appendChild(eachSquareRow);
}

//Set up a hover effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
for (let div of squareDivs) {
    div.addEventListener('mouseenter', (e) => {
        div.style.backgroundColor = 'black';
    });
} 

//Add a button on the top of the screen that will send the user a popup asking for the number of squares per side for the new grid. 
//First, let's have a button that will redraw
let redrawBtn = document.createElement('button');
redrawBtn.textContent = 'Click to redraw';
let header1 = document.querySelector('h1');
let body = document.querySelector('#body');
body.insertBefore(redrawBtn, header1);

redrawBtn.addEventListener('click', (e) => {
    for (let div of squareDivs) {
        div.style.backgroundColor = 'white';
    }
});



//Once entered, the existing grid should be removed, and a new grid should be generated in the same total space as before (e.g., 960px wide) so that you've got a new sketch pad.
//Tip: Set the limit for the user input to a maximum of 100. A larger number of squares results in more computer resources being used, potentially causing delays, freezing, or crashing that we want to prevent.
//Research button tags in HTML and how you can make a JavaScript function run when one is clicked.
//Also check out prompts.
//You should be able to enter 64 and have a brand new 64x64 grid pop up without changing the total amount of pixels used.
