const framePixels = document.getElementById("pixel-board")
let frameDimension = [5,5]
window.onload = function () {
 
  function createFrame() {
    for (let heigth = 1; heigth <= frameDimension[0];heigth += 1 ){
      for (let width = 1; width <= frameDimension[1];width += 1 ){
        let pixel = document.createElement('div')
        pixel.className = 'pixel'
        framePixels.appendChild(pixel)
      }
      let Break = document.createElement('br')
      framePixels.appendChild(Break)
    }
  }
  createFrame()
}
