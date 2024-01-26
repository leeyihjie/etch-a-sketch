
const gridDivContainer = document.querySelector('#grid')
const gridChangerButton = document.querySelector('.gridChanger')

// Creating function to change grid size
function onClickListener() {
    gridChangerButton.addEventListener('click', () => {
        let newSize = prompt("Please enter a new grid size i.e 16 for 16x16 or 30 for 30x30");

        while (gridDivContainer.firstChild) {
            gridDivContainer.removeChild(gridDivContainer.lastChild);
          }
          createGrid(newSize);
          drawHover();
    })
}

// Creating 16x16 Grid with Divs (For loop)
function createDivSquare(divSize, gridSize) {
    // Creating 1 div square element in html
    const gridSquareDiv = document.createElement('div');

    // Adding classname to div element
    gridSquareDiv.setAttribute('class', 'gridSquare');

    // Setting divSquare height and width
    const gridSquareDim = divSize - 2

    // Setting height and width of div square based on gridsize (Width/GridSize)
    gridSquareDiv.style.height = `${gridSquareDim}px`;
    gridSquareDiv.style.width = `${gridSquareDim}px`;



    return gridSquareDiv;

}

function createGrid(gridSize) {
    const gridDivContainerWidth = gridDivContainer.clientWidth;
    console.log(gridDivContainerWidth)

    for (var i = 0; i < (gridSize*gridSize); i++) {
        gridDivContainer.appendChild(createDivSquare(gridDivContainerWidth/gridSize, gridSize));
    }
}

function drawHover() {
    const gridSquareDivList = document.querySelectorAll('.gridSquare')
    gridSquareDivList.forEach((gridSquDiv) => {
        gridSquDiv.addEventListener('mouseover', () => {
            gridSquDiv.classList.toggle('gridSquareHover');
        });
        gridSquDiv.addEventListener('mousedown', () => {
            gridSquDiv.classList.toggle('gridSquareHover');
        });
    });

}

function startSketch(size) {
    createGrid(size);
    drawHover();
    onClickListener();
}

startSketch(8);

