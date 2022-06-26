let container = document.getElementById('container');
let gridSize = "";
let boxes = "";
let alphaArray = [];

function createGrid() {
    container.innerHTML = ""; //clean grid
    alphaArray = []; // clean array for alpha color
    gridSize = Math.round(prompt("Insert grid side size between 1 and 100", ""));

    if(gridSize <= 0 || gridSize > 100 || isNaN(gridSize) || gridSize == "") {
        createGrid();
    }

    let boxQty = Math.pow(gridSize, 2);

    for(let i = 1 ; i <= boxQty ; i++) {
        let div = document.createElement('div');
        div.setAttribute("id", `box${i}`);
        div.setAttribute("class", "box");
        div.style.cssText = `height: ${500/gridSize}px; width: ${500/gridSize}px;`;
        container.append(div);
        alphaArray.push(0);
    }

    boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseenter", paintBox, {once: true}));
    boxes.forEach(box => box.addEventListener("mouseenter", darkenBox));

}

function darkenBox() {
    let id = this.getAttribute("id").slice(3);
    if(alphaArray[id-1] < 1) {
        this.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${alphaArray[id-1]}) 0 0)`;
        alphaArray[id-1] += 0.1;
    }
    console.log(id);
}

let colorValue = "";

function generateColor() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    colorValue = `rgb(${r},${g},${b})`;
}

function paintBox() {
    generateColor();
    this.style.backgroundColor = `${colorValue}`;
}



let btn = document.getElementById('btn');
btn.addEventListener("click", createGrid);

