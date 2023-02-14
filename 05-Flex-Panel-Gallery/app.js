// grab all the panels\
const panels = document.querySelectorAll('.panel')

// toggle the open class
function toggleOpen(){
    this.classList.toggle('open');
}

// add event listener for click
panels.forEach(panel => panel.addEventListener('click', toggleOpen));