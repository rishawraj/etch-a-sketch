function createDivs(v) {
  var e = document.getElementById("grid-container");
  // e.innerHTML = "";
  for (let i = 0; i < v; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let x = 1; x <= v; x++) {
      let cell = document.createElement("div");
      cell.className = "gridSquare";
      cell.addEventListener("mouseover", () => {
        let x = cell.classList.add("black"); //works, reset does not work
      });
      // cell.innerText = i * v + x;
      row.appendChild(cell);
    }
    e.appendChild(row);
  }
}
function f1() {
  var e = document.getElementById("grid-container");
  e.innerHTML = ""; // still does not work! it creates boxes
  // but does not fill color. addevent listener is removed when resized
  let x = prompt("enter");
  createDivs(x);
}
createDivs(4);

function removeBlack() {
  let x = document.querySelectorAll(".gridSquare");
  x.forEach((item) => {
    let y = item.classList;
    y.remove("black"); // works but there is a lag fix it
    console.log(y);
  });
}
function removeBorder() {
  const boxes = document.querySelectorAll(".gridSquare");
  const x = boxes.forEach((item) => {
    item.classList.toggle("borderless");
    console.log(item.classList);
  });
}
