# 08 - Fun with HTML5 Canvas
![](./screenshot8.jpg)

## Main goals

- Create a canvas like Windows Paint in the browser

## Learning Notes
### Canvas is a built in thing
The Canvas element is a container for graphics which are defined using javascript. The initial setup is simple:
``` html
<canvas id="draw" width="800" height="800"></canvas>
```

You then need to use javascript to give some settings:
``` javascript
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
```

This was a nice exercise, but I'm not sure when it would be useful. It was good to see more event listeners and when you need to cover all bases with the mouse movements.