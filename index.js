//grid

const containerDOM = document.querySelector(".container");

const container = [];

const gridSquare = document.createElement("div");
gridSquare.classList.add("square");

for (let index = 0; index < 256; index++) {
  const clone = gridSquare.cloneNode(gridSquare);
  clone.setAttribute("data-id", index.toString());
  containerDOM.appendChild(clone);
  container.push(clone);
  clone.addEventListener("mousemove", (e) => {
    clone.classList.add("active");
  });
}

const array1 = Array.from(container);
console.log(array1[3]);
/* 
when user moves mouse to a square change the class of the 
square to a different color
*/
