# 14 - Javascript References vs Copying
![](./screenshot14.jpg)

## Main goals

- References vs copy can be the source of a lot of bugs, so this exercise is to help better understanding of the difference between the two and when the use them.

## Learning Notes
### With strings, numbers and booleans: 
Reassigning a variable to a new value does not update the other one

``` javascript
let name = 'Wes'
let name2 = name;
console.log(name, name2);
// console: Wes, Wes
name = 'Wesley'
console.log(name, name2)
// console: Wesley, Wes
```

### With arrays: 
Updating any of the arrays WILL update the other and reference back

``` javascript
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];
const team = players
team[3] = 'Lux'
console.log(players)
// console: ['Wes', 'Sarah', 'Ryan', 'Lux']
```

### Making a copy of an array: Slice with no parameters will make a copy of the original array

``` javascript
const team2 = players.slice()
console.log(team2)
// console: ['Wes', 'Sarah', 'Ryan', 'Poppy']
```

This then allows you to make a change to your new array and not change the referenced array
``` javascript
// create a copy of players
const team2 = players.slice()

// change an item in the new array
team2[3] = 'Lux'

// new array changes
console.log(team2)
// Console: ['Wes', 'Sarah', 'Ryan', 'Lux']

// while original array stays the same
console.log(players)
// Console: ['Wes', 'Sarah', 'Ryan', 'Poppy']
```

### Making a copy of an array: spread operator in ES6  
This is how I've learnt it previously. Using the spread operator (which I can't use without singing 'smooth operator' and thinking of spreading butter on bread).

``` javascript
const team4 = [...players];
team4[3] = 'Bob'
console.log(team4)
```

### Making a copy of an array: Array.from
Another new one:
``` javascript
const team5 = Array.from(players)
team5[3] = 'Dave'
console.log(team5)
```

### With Objects
Like with arrays, they don't work as strings/numbers/booleans do.
``` javascript
const person = {
    name: 'Wes Bos',
    age: 80
};

const captain = person;
captain.number = 99
console.log(person)
// person: {name: 'Wes Bos', age: 80, number: 99}
```
The original object was added to because doing const captain = person does not make a copy.

### Making a copy of an object: Object.assign
Object.assign() takes 3 parameters: an empty object, the object name you want to make a copy of, and an object with the new key value pair you want to add to the copy

``` javascript
const captain2 = Object.assign({}, person,{number: 99})
console.log(captain2)
// {name: 'Wes Bos', age: 80, number: 99}

// and the original object is untouched
console.log(person)
// {name: 'Wes Bos', age: 80}
```

### These are very shallow copies
The copy will only ever go one level deep. So if you change a key value pair deeper than one level deep, it WILL change it in the original object even though you're changing the copied one.

``` javascript
    const wes = {
        name: 'Wes',
        age: 100,
        social: {
            twitter: '@wesbos',
            facebook: 'wesbos.developer'
        }
    }

    // make a copy
    const dev = Object.assign({}, wes, {name: 'Wesley'})
    console.log(dev)
    //const dev = {
    //    name: 'Wesley',
    //    age: 100,
    //    social: {
    //        twitter: '@wesbos',
    //        facebook: 'wesbos.developer'
    //    }
    //}

    // change something two levels deep in the copied object
    dev.social.twitter = '@coolman'

    // it's changed in the copied object
    console.log(dev.social)
    // {twitter: '@coolman', facebook: 'wesbos.developer'}

    // but it has ALSO changed in the original, d'oh!
    console.log(wes.social)
    // {twitter: '@coolman', facebook: 'wesbos.developer'}
```

### Poor man's deep clone
There is a deep clone method that makes a deeper copy of objects, but Wes advises to really consider whether you should be using it, or whether there's a better way of going about the task.

However, he also says this is a quick poor man's method of doing deep clone:

``` javascript
const dev2 = JSON.parse(JSON.stringify(wes))
dev2.social.twitter = '@coolman'
```

This will change dev2 without changing wes. Why? Because JSON.stringify turns the object into a JSON string. Putting JSON.parse() on the front immediately puts it back into an object.

No talk of performance, but it's a quick fix.