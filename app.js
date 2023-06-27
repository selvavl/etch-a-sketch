let container = document.getElementById('container');
let gridSize = "";
let boxes = "";
let alphaArray = [];

function createGrid() {
    container.innerHTML = "";   // clean grid
    alphaArray = [];            // clean array for alpha color
    gridSize = Math.round(prompt("Insert grid side size between 1 and 64", ""));   // establish the size of the grid

    if(gridSize <= 0 || gridSize > 64 || isNaN(gridSize) || gridSize == "") {      // allow numbers only
        alert("Invalid value, must enter a number between 1 and 64");
        return;           
    }
    
    let boxQty = Math.pow(gridSize, 2);

    for(let i = 1 ; i <= boxQty ; i++) {
        let div = document.createElement('div');
        div.setAttribute("id", `box${i}`);
        div.setAttribute("class", "box");
        div.style.cssText = `height: ${500/gridSize}px; width: ${500/gridSize}px;`;
        container.append(div);
        alphaArray.push(0);     // create an array to establish the alpha value of the filter on each box to make it darker every hover
    }

    boxes = document.querySelectorAll(".box");
    boxes.forEach(box => box.addEventListener("mouseenter", paintBox, {once: true}));
    boxes.forEach(box => box.addEventListener("mouseenter", darkenBox));

}

function darkenBox() {
    let id = this.getAttribute("id").slice(3);  //get the id of the box to be used to find the value in the array
    if(alphaArray[id-1] < 1) {
        this.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, ${alphaArray[id-1]}) 0 0)`; 
        alphaArray[id-1] += 0.1;
    }
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

