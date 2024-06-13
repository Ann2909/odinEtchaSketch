//Create a webpage with a 16x16 grid of square divs.
let body = document.querySelector('#body');
let header1 = document.querySelector('h1');
let container = document.querySelector('#container');
let redrawBtn = document.querySelector('.redrawBtn');
let newBtn = document.querySelector('.newBtn');

let squareDivs = [];

drawNewGrid(16, container);
setUpHoverEffect();

//Set up a hover effect so that the grid divs change color when your mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
function setUpHoverEffect() {
    for (let div of squareDivs) {
        div.addEventListener('mouseenter', (e) => {
            div.style.backgroundColor = 'black';
        });
    } 
}

//First, let's have a button that will redraw
redrawBtn.addEventListener('click', (e) => {
    for (let div of squareDivs) {
        div.style.backgroundColor = 'white';
    }
});

//Let's have a button that will draw a new sketch
newBtn.addEventListener('click', (e) => {
    body.removeChild(container);
    let newContainer = document.createElement('div');
    newContainer.setAttribute('id', 'newcontainer');
    body.appendChild(newContainer);

    let newGrid = prompt('How many squares do you want per row?', '16');
    
    //remove all references to the old divs that have been removed
    while (squareDivs.length > 0) {
        squareDivs.pop();
    }
    drawNewGrid(newGrid, newContainer);
    //set up hover effect for new grid
    setUpHoverEffect();
});

//function to create a grid of as many squares as the user wants
function drawNewGrid(squareNum, holder) {
    let refSquareDivs = [];
    for (let i = 0; i < squareNum; i++) {
        let eachSquareRow = document.createElement('div');
        eachSquareRow.classList.add('row');
        
        for (let j = 0; j < squareNum; j++) {
            // Create a new div element
            let oneSquare = document.createElement('div');
            oneSquare.classList.add('square');
            refSquareDivs.push(oneSquare);
    
            // Append the square div to each row
            eachSquareRow.appendChild(oneSquare);
        }
    
        holder.appendChild(eachSquareRow);
    }
    squareDivs = refSquareDivs;
}
