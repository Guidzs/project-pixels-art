const framePixels = document.getElementById("pixel-board");
const pixels = document.getElementsByClassName("pixel");
let frameDimension = 5;
const paleteColors = document.getElementsByClassName("color");
const elements = document.getElementsByClassName("element")



window.onload = function () {

paleteColors[0].style.backgroundColor = 'black';
paleteColors[1].style.backgroundColor = generateRandomColor();
paleteColors[2].style.backgroundColor = generateRandomColor();
paleteColors[3].style.backgroundColor = generateRandomColor();

  function createButton(id, text, dsplay, fnct) {
    let button = document.createElement('button');
    button.id = id;
    button.innerText = text;
    button.style.display = dsplay;
    button.addEventListener("click", fnct);
    framePixels.insertAdjacentElement("beforebegin", button);
  }

  function createInput(id, text, tp, dsplay) {
    let input = document.createElement("input");
    input.id = id;
    input.innerText = text;
    input.type = tp;
    input.style.display = dsplay;
    framePixels.insertAdjacentElement("beforebegin", input);
  }

  createInput("board-size","","number","inline-block",)
  createButton("generate-board","VQV","inline-block",sizeFrame);
  createButton("clear-board","Limpar","block",clearFrame);
  createFrame();

  for (let ind = 0; ind < paleteColors.length; ind += 1) {
    paleteColors[ind].addEventListener('click', colorSeletor);
  }
}

function createFrame() {
    for (let heigth = 1; heigth <= frameDimension; heigth += 1) {
      for (let width = 1; width <= frameDimension; width += 1) {
        let pixel = document.createElement('div');
        pixel.classList.add('pixel', 'element') 
        pixel.addEventListener('click', paint);
        framePixels.appendChild(pixel);
      }
      let Break = document.createElement('br');
      Break.classList.add('element')
      framePixels.appendChild(Break);
    }
  }

function removeFrame() {
  const total = elements.length
  for ( let i = 0; i < total; i += 1) {
    let pixel = elements[0]
    pixel.parentNode.removeChild(pixel)
  }
}

function colorSeletor(event) {
  for (let i = 0; i < paleteColors.length; i += 1) {
    paleteColors[i].classList.remove('selected');
  }
  event.target.classList.add('selected');
}

function paint(event) {
  let colorOfPalete = document.getElementsByClassName("selected")[0];
  let getCss = window.getComputedStyle(colorOfPalete);
  let colorBg = getCss.getPropertyValue("background-color");

  event.target.style.backgroundColor = colorBg;
}

function clearFrame() {
  for (let pixel = 0; pixel < pixels.length; pixel += 1) {
    pixels[pixel].style.backgroundColor = "white";
  }
}

function sizeFrame() {
  let size = document.getElementById("board-size").value;
  if (size === "") {
    alert("Board inválido!")
  }else if (size < 5) {
    frameDimension = 5;
    removeFrame()
    createFrame();
  }else if (size > 5 && size < 50) {
    frameDimension = size;
    removeFrame()
    createFrame()
  }else{
    frameDimension = 50;
    removeFrame()
    createFrame()
  }
}

// achei essa função no site 
https://pt.code-paper.com/javascript/examples-random-color-code-js#:~:text=javascript%20gerar%20cor%20aleat%C3%B3ria%20const%20setBg%20%3D%20%28%29,randomColor%20%3D%20Math.floor%28Math.random%28%29%2A16777215%29.toString%2816%29%3B%20document.body.style.backgroundColor%20%3D%20%22%23%22%20%2B%20randomColor%3B

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
