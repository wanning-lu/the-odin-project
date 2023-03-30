let side = 16;

let container = document.querySelector(".container");
createNewGrid();

let button = document.querySelector("button");
button.addEventListener("click", () => {
    let possibleSides = parseInt(prompt("Enter the number of rows for your grid!", 16));
    if (Number.isInteger(possibleSides) && possibleSides > 0 && possibleSides <= 100) {
        side = possibleSides;
        createNewGrid();
    }
});

function createNewGrid() {
    let containerChildren = document.querySelectorAll(".container > div")
    for (var i = 0; i < containerChildren.length; i++) {
        containerChildren[i].remove();
    }

    for (let i = 0; i < side; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        row.classList.add("flexbox");
        container.append(row);
        for (let j = 0; j < side; j++) {
            let column = document.createElement("div");
            column.classList.add("column");
            column.addEventListener("mouseover", () => {
                column.style.background = "coral";
            })
            row.append(column);
        }
    }
}
