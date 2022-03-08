"use strict";

const generateMap = () => {
  let matrice = document.createElement("div");
  matrice.className = "body";
  const body = document.getElementById("main");

  const map = [];
  let num = 1;

  for (let i = 0; i < 10; i++) {
    let row = document.createElement("div");
    row.className = "row";
    for (let j = 10; j > 0; j--) {
      let cube = document.createElement("div");
      cube.className = "case";
      cube.innerText = `${num++}`;
      row.append(cube);
    }
    matrice.append(row);
  }
  body.append(matrice);

  return;
};

export default generateMap;
