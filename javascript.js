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
let isDrawing = false;
cells.forEach(cell => cell.addEventListener("mousedown", () => {
    isDrawing = true;
    cell.style.backgroundColor = 'black';
}));
cells.forEach(cell => cell.addEventListener("mousemove", () => {
    if (isDrawing) {
        cell.style.backgroundColor = 'black';
    };
}));
cells.forEach(cell => cell.addEventListener("mouseup", () => isDrawing = false));




