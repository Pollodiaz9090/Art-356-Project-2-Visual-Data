let gotData, consoleArray;

function setup() {
  createCanvas(1885, 500);
}

function preload() {
  // font = loadFont('PixelifySans-VariableFont_wght.ttf')
  loadJSON("consoleSales.json", getData);
}
function getData(data) {
  gotData = data;
}

function draw() {
  background('gold');

  if (gotData) {
    let numRows = Object.keys(gotData).length;
    consoleArray = Object.keys(gotData).map((key) => [key, gotData[key]]);

    for (let i = 0; i < numRows; i++) {
      let x = 50;
      let y = 100 + (i * 100);
      let w = consoleArray[i][1].globalSales*0.0000012;
      let h = 35;
      push();
      let colorPick1 = consoleArray[i][1].color[0];
      // fill(0, 0, 255);
      let colorPick2 = consoleArray[i][1].color[1];
      // fill(0, 0, 255);
      let colorPick3 = consoleArray[i][1].color[2];
      fill(colorPick1, colorPick2, colorPick3);
      rect(x, y, w, h);
      textSize(30);
      textFont('Pixelify Sans');
      text(consoleArray[i][1].name, x, y - 10);
      pop();
    }
  }
}
