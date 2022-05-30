const framePixels = document.getElementById("pixel-board");
let frameDimension = [5, 5];
const paleteColors = document.getElementsByClassName("color");
const pixels = document.getElementsByClassName("pixel")

paleteColors[0].style.backgroundColor = 'black';
paleteColors[1].style.backgroundColor = 'red';
paleteColors[2].style.backgroundColor = 'pink';
paleteColors[3].style.backgroundColor = 'green';

window.onload = function () {

  function createFrame() {
    for (let heigth = 1; heigth <= frameDimension[0]; heigth += 1) {
      for (let width = 1; width <= frameDimension[1]; width += 1) {
        let pixel = document.createElement('div');
        pixel.className = 'pixel';
        pixel.addEventListener('click', paint);
        framePixels.appendChild(pixel);
      }
      let Break = document.createElement('br');
      framePixels.appendChild(Break);
    }
  }

  function createButton() {
    let button = document.createElement('button')
    button.id = "clear-board"
    button.innerText = "Limpar"
    button.addEventListener("click", clearFrame)
    framePixels.insertAdjacentElement("beforebegin", button)
  }
  createButton();
  createFrame();

  for (let ind = 0; ind < paleteColors.length; ind += 1) {
    paleteColors[ind].addEventListener('click', colorSeletor);
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
    pixels[pixel].style.backgroundColor = "white"
  }
}
