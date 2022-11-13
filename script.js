createGrid(10)

const newGridButton = document.getElementById("new-grid-button");

newGridButton.addEventListener("click", () => {
    createGrid(parseInt(prompt("New grid width/height?")));
})

function createGrid(elements) {
    if (elements > 100) { elements = 100; }
    const gridContainerDOM = document.getElementById("grid");
    gridContainerDOM.innerHTML = '';

    for (let row = 0; row < elements; row++) {
        let newRowDOM = document.createElement('div');
        newRowDOM.className = "row";

        for (let column = 0; column < elements; column++) {
            let newItemDOM = document.createElement('div');
            newItemDOM.className = "item";
            newItemDOM.addEventListener("mouseenter", (e) => {
                let red = Math.floor(Math.random() * 256);
                let green = Math.floor(Math.random() * 256);
                let blue = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
            })
            newRowDOM.appendChild(newItemDOM);
        }

        gridContainerDOM.appendChild(newRowDOM);
    }
}