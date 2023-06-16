const container = document.querySelector('.container');

function createGrid(size=16) {
    for (c = 0; c < size; c++) {
        let row = document.createElement("div");
        for (r = 0; r < size; r++) { //make each row
            let cell = document.createElement("div");
            row.appendChild(cell).className = "cell";
        };
        container.appendChild(row).className = 'row';
    }
};

createGrid();

const cells = document.querySelectorAll('.cell');
let isDrawing = false; //initial values
let drawClicked = true;
let eraseClicked = false;

cells.forEach(cell => cell.addEventListener("mousedown", () => {
    isDrawing = true;
    if (eraseClicked) {
        cell.style.backgroundColor = 'white';
    } else {
        cell.style.backgroundColor = 'black';
    };
}));
cells.forEach(cell => cell.addEventListener("mouseover", () => {
    if (isDrawing && !eraseClicked) {
        cell.style.backgroundColor = 'black';
    } else if (isDrawing && eraseClicked) {
        cell.style.backgroundColor = 'white';
    };
}));
cells.forEach(cell => cell.addEventListener("mouseup", () => {
    isDrawing = false;
}));

const draw = document.querySelector('.draw');
draw.addEventListener('click', () => {
    drawClicked = true;
    eraseClicked = false;
    draw.style.border = '1px solid black';
    erase.style.border = 'none';
    clear.style.border = 'none';
});
const erase = document.querySelector('.erase');
erase.addEventListener('click', () => {
    eraseClicked = true;
    drawClicked = false;
    draw.style.border = 'none';
    erase.style.border = '1px solid black';
    clear.style.border = 'none';
});

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    cells.forEach(cell => cell.style.backgroundColor = 'white');
    draw.style.border = 'none';
    erase.style.border = 'none';
    clear.style.border = '1px solid black';
});


