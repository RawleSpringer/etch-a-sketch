//grid
let gridUnit = 16;
let numberOfSquares = gridUnit * gridUnit;
//
const containerDOM = document.querySelector(".container");

const button = document.querySelector("button");
// const container = [];

const gridSquare = document.createElement("div");
gridSquare.classList.add("square");

//initial
for (let index = 0; index < numberOfSquares; index++) {
  const clone = gridSquare.cloneNode(gridSquare);
  clone.setAttribute("data-id", index.toString());
  clone.style.height = `${960 / gridUnit - 2}px`;
  clone.style.width = `${960 / gridUnit - 2}px`;
  containerDOM.appendChild(clone);
  // container.push(clone);
  clone.addEventListener("mousemove", (e) => {
    clone.classList.add("active");
  });
}

button.addEventListener("click", () => {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.classList.remove("active");
  });

  let userInput = prompt("How many squares for your grid?");
  gridUnit = parseInt(userInput);
  if (gridUnit > 100) {
    gridUnit = parseInt(prompt("Number must be no more than 100"));
    if (gridUnit > 100) {
      return;
    }
  }
  numberOfSquares = parseInt(userInput) * parseInt(userInput);
  while (containerDOM.firstChild) {
    containerDOM.removeChild(containerDOM.firstChild);
  }

  for (let index = 0; index < numberOfSquares; index++) {
    let unit = 960 / gridUnit - 2;

    const clone = gridSquare.cloneNode(gridSquare);
    clone.setAttribute("data-id", index.toString());
    clone.style.height = `${unit}px`;
    clone.style.width = `${unit}px`;
    containerDOM.appendChild(clone);
    // container.push(clone);
    clone.addEventListener("mousemove", (e) => {
      clone.classList.add("active");
    });
  }
});
