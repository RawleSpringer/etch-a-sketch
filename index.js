//grid

const containerDOM = document.querySelector(".container");

console.log(typeof containerDOM);

const container = [];

const gridSquare = document.createElement("div");
gridSquare.classList.add("square");

// for (let index = 0; index < 256; index++) {
//   container.push(gridSquare);
// }

// container.forEach((square) => {
//   containerDOM.appendChild(gridSquare);
// });

for (let index = 0; index < 256; index++) {
  const clone = gridSquare.cloneNode(gridSquare);
  containerDOM.appendChild(clone);
}
