let width = 5;
let height = 5;

const gridContainerDOM = document.getElementById("grid");

for (let row = 0; row < height; row++) {
    let newRowDOM = document.createElement('div');
    newRowDOM.className = "row";

    for (let column = 0; column < width; column++) {
        let newItemDOM = document.createElement('div');
        newItemDOM.className = "item";
        newRowDOM.appendChild(newItemDOM);
    }

    gridContainerDOM.appendChild(newRowDOM);
}