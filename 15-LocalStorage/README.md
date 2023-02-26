# 15 - Local Storage
![](./screenshot15.jpg)

## Main goals

- Learn about local storage (data persistence) and event delegation

## Learning Notes
### Add to local storage
When you add an item to your list, you need to add it to the local storage

``` javascript
function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value
    const item = {
        // in ES6, this next line could just be:
        // text
        text: text,
        done: false
    }
    items.push(item)
    populateList(items,itemsList)
    localStorage.setItem('items', JSON.stringify(items))
    this.reset();
}
```

You need to JSON.stringify() because local storage is in string format.

### Set items from local storage
When the page loads, you can tell it to get local storage items OR load an empty array

``` javascript
const items = JSON.parse(localStorage.getItem('items')) || [];
```

Remembering to parse the JSON back into object format.

### Event delegation
When you need to add an event listener to an element which isn't present on the page at the time of loading (i.e. here the li elements), event delegation is needed.

To do this you add an event listener to a parent element that is present on the page at the time of loading (i.e. here it's the ul) that passes on the event listener to its child once it's present.

``` javascript
const itemsList = document.querySelector('.plates');

itemsList.addEventListener('click', toggleDone)

function toggleDone(e){
    if(!e.target.matches('input')) return  // skip this unless it's an input because of event delegation to the parent
    const element = e.target;
    // console.log(element.dataset.index)
    const index = element.dataset.index;
    items[index].done = !items[index].done

    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
}
```

So the event listener is added to the ul element with the class of '.plates', which fires the toggleDone function. Within that function, you have an if statement that stops the function if the element that is clicked is NOT of an 'input' type.