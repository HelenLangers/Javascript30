function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if(!audio) return; // stop the function from running altogether
    audio.currentTime = 0; // rewind to the start
    audio.play()
    key.classList.add('playing') // when the key is pressed, add a new class to the corresponding div
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return // skip it if it's not a transform transition
    this.classList.remove('playing') // once transition has ended, remove the class from the div (this)
}

// grab all the keys
const keys = document.querySelectorAll('.key')
// add the event listener
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

// listen for the key down (press) event and trigger a function
window.addEventListener('keydown', playSound);