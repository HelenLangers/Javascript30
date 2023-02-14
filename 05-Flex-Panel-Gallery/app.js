// grab all the panels\
const panels = document.querySelectorAll('.panel')

// toggle the open class
function toggleOpen(){
    this.classList.toggle('open');
}

function toggleActive(e){
    console.log(e.propertyName)
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

// add event listener for click
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));