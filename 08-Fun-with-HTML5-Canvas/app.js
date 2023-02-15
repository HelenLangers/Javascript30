// grab the canvas area
const canvas = document.querySelector('#draw')
// create the context, defining that it'll be a 2d drawing
const ctx = canvas.getContext('2d')
// make the canvas size the whole window
canvas.width = window.innerWidth;
canvas.width = window.innerHeight;
// settings for the lines
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;
let hue = 0;
let direction = true

// default setting that any mouse movement doesn't draw, you need to have the mouse clicked to draw a line
let isDrawing = false


let lastX = 0
let lastY = 0

function draw(e) {
    // if the mouse isn't clicked, stop the function running
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY)
    // go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()
    // reset lastX and lastY
    lastX = e.offsetX
    lastY = e.offsetY
    hue++;
    if(hue >= 360){
        hue = 0;
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth<= 1){
        direction = !direction
    }
    if(direction){
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
    
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)