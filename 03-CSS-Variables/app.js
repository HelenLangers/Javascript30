// select the inputs
const inputs = document.querySelectorAll('.controls input')


function handleUpdate() {
    // have "" for nothing as the fallback if there isn't a sizing dataset i.e. for the colour. Otherwise it would append undefined.
    const suffix = this.dataset.sizing || "";
    // update variable
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

// listen for when the input changes or the mouse moves on the slider, then trigger the handleUpdate function
inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))