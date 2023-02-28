# 16 - Mouse Move Shadow
![](./screenshot16.jpg)

## Main goals

- Create a shadow on some text, and allow the shadow to follow your mouse as it moves around the window

## Learning Notes
### 'This' vs 'e.target'
Sometimes 'This' will be different to 'e.target', and in this exercise it affects the calculation of the offset.

``` javascript
const hero = document.querySelector('.hero')

function shadow(e) {
    const width = hero.offsetWidth
    const height = hero.offsetHeight
    let x = e.offsetX;
    let y = e.offsetY;

    if(this !== e.target){
      x = x + e.target.offsetLeft;
      y = y + e.target.offsetTop;
    }
}

hero.addEventListener('mousemove', shadow)
```

In the shadow function, 'this' refers to the element that the event listener is attached to, i.e. the div with the class of 'hero'. 

The 'e.target' will differ depending on where the mouse is moving on the screen. Sometimes it will be the hero div, sometimes it will be the h1 element. That's why there is this calculation. If e.target is not the same as 'this', then add on the offset to the edge of the window.