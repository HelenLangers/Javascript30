# 07 - Array Cardio Day 2
![](./screenshot6.jpg)

## Main goals

- Learn some more array methods

## Learning Notes

Remember that 'some' and 'every' returns a boolean, not an array

DRYest version with implicit return in arrow function:

``` javascript
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19)
```

Or long winded but clearer what's happening:
``` javascript
const isAdult = people.some(function(person){
    const currentYear = (new Date()).getFullYear();
    if(currentYear - person.year >= 19){
    return true
    }
})
```

