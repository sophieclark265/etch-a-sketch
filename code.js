document.body.onload = addDivByJs;

// function makeGrid() {
//   const containerDiv = document.getElementById("containerDiv");
//   let cell1 = document.createElement("div");
//   let cell2 = document.createElement("div");
//   let cell3 = document.createElement("div");
//   let cell4 = document.createElement("div");
//   let cell5 = document.createElement("div");
//   let cell6 = document.createElement("div");

//   cell1.textContent = "I am baby div";
//   cell2.textContent = "baby div 2";

//   containerDiv.appendChild(cell1, cell2);
// }

function addDivByJs() {
  let numberOfDivsToBeCreated = 256;
  const containerDiv = document.getElementById("containerDiv");
  let childDiv = document.createDocumentFragment;
  for (let i = 0; i < numberOfDivsToBeCreated; i++) {
    let cell = document.createElement("div");
    containerDiv.appendChild(cell);
    cell.style.border = "1px solid black";
  }
}
