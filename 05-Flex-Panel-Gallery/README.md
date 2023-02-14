# 05 - Flex Panel Gallery
![](./screenshot5.jpg)

## Main goals

- Make a flex gallery using predominantly CSS with JS

## Learning Notes
# Flex
I feel quite comfortable with the basic fundamentals of flex box (flex-direction, align-items, justify-content etc), so I'm ready to progress to these slightly less-basic uses.

Giving the child components (in this case, individual panels) a flex of 1, it tells them to spread evenly across the space.
``` css
// parent container
.panels {
    display: flex;
}

// child, of which there is 5
.panel {
    flex: 1;
}
```

When the panel is open, it's given a class with a flex of 5. This means it gives itself 5 times the amount of room than the rest of them.


# Class List Toggle
``` javascript
function toggleOpen(){
    this.classList.toggle('open');
}
```

The toggling of a class list allows a class to be added or taken away depending on it's current state. So simple.

# Transition End Listener
There are so many events you can ask JS to listen for, but 'transitionend' itself is listening for a multiple of things too. A great way of debugging, or even just figuring out what is happening, is to console log out the event property name
``` javascript
function toggleActive(e){
    console.log(e.propertyName)
}

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```

# .includes
Transitionend was listening to flex to finish, but depending on the browser, it was either 'flex' or 'flex-grow'. A way to cover all these options without having multiple | , it's best to use the inbuilt 'includes' operator.

``` javascript
function toggleActive(e){
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}
```