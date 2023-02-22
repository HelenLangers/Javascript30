# 12 - Key Sequence Detection
![](./screenshot12.jpg)

## Main goals

- When someone enters a specific sequence of keys into a window or input, something is triggered, i.e. called Konami code

## Learning Notes
### Making a continuous splice
When you know the specific sequence of keys, i.e. the secret code, to be a certain length, you can splice the typed key array to that length, and then let the keys scroll through. So, if the length of the code is 6 letters, and someone types 'abcdef' - then great it's 6 letters. If they then press gh, the array now contains 'cdefgh'.

``` javascript
// create an empty array
const pressed = []
// define the sequence people need to push
const secretCode = 'wesbos'
window.addEventListener('keyup', (e) => {
 pressed.push(e.key)
//make a maximum length of the necessary array
pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
})
```

In other words, the splice starts at the end of the array and counts backwards.