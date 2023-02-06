# 02 - Javascript and CSS clock
![](./screenshot2.jpg)

## Main goals

- Have the css take in the time from javascript and update the hands based on the current time.

## Learning Notes
### Transform-origin CSS attribute
Without setting this attribute, an element will transform around the center of itself (50%). If you set it to 100%, it'll transform around the end of the x-axis, like the hands of a clock do
```css
.hand{
    width: 50%;
    height: 6px;
    background: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(90deg);
}
```

### Transition Timing Function
Add a custom transition effect, in this case it adds the movement of the second hand.
``` css
.hand {
    width: 50%;
    height: 6px;
    background: black;
    position: absolute;
    top: 50%;
    transform-origin: 100%;
    transform: rotate(90deg);
    transition: all 0.05s;
    transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1); 
}
```

You can use the Chrome dev tools to create your own cubic-bezier


### Getting minutes and hours from JS Date
I already knew about the JS Date function, but didn't know about the extra now.getHours() etc
``` javascript
const now = new Date()

now.getHours()
now.getMinites()
now.getSeconds()
```

### setInterval() repeats an action
setInterval takes in the code you want to run, and the delay in milliseconds
``` javascript
setInterval(code, delay)
setInterval(setDate, 1000) // get the date every second
```