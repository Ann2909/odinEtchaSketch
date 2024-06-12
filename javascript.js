//Create a webpage with a 16x16 grid of square divs.
let container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    let eachSquareRow = document.createElement('div');
    eachSquareRow.classList.add('row');
    

    for (let i = 0; i < 16; i++) {
        // Create a new div element
        let squareDiv = document.createElement('div');
        squareDiv.classList.add('square');

        // Append the square div to each row
        eachSquareRow.appendChild(squareDiv);
    }

    container.appendChild(eachSquareRow);
}

//Set up a hover effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
//Hint: Hovering is what happens when your mouse enters a div and ends when your mouse leaves it. You can set up event listeners for either of those events as a starting point.
//Changing the div's background color using JavaScript.
