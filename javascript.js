//Create a webpage with a 16x16 grid of square divs.
let body = document.querySelector('#body');
let header1 = document.querySelector('h1');
let container = document.querySelector('#container');
let redrawBtn = document.querySelector('.redrawBtn');
let newBtn = document.querySelector('.newBtn');

let squareDivs = [];

//default 16x16 grid
squareDivs = drawNewGrid(16, container);
setUpHoverEffect();

//First, let's have a button that will redraw
redrawBtn.addEventListener('click', (e) => {
    for (let div of squareDivs) {
        div.style.backgroundColor = 'white';
    }
});

//Let's have a button that will draw a new sketch
newBtn.addEventListener('click', (e) => {
    //delete current grid //container.innerHTML = ''; also works
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    let newGrid = prompt('How many squares do you want per row?', '16');
    
    //effectively remove all the previous references and make a new grid
    squareDivs = drawNewGrid(newGrid, container);
    //set up hover effect for new grid
    setUpHoverEffect();
});

//function to create a grid of as many squares as the user wants and return the references of those divs
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
    return refSquareDivs;
}

//Set up a hover effect so that the grid divs change color when our mouse passes over them, leaving a (pixelated) trail through your grid like a pen would.
function setUpHoverEffect() {
    for (let div of squareDivs) {
        div.addEventListener('mouseenter', (e) => {
            e.target.style.backgroundColor = 'black';
        });
    } 
}