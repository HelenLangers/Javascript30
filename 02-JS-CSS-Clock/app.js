// grab the second hand
const secondHand = document.querySelector('.second-hand')
// grab minute hand
const minuteHand = document.querySelector('.min-hand')
// grab hour hand
const hourHand = document.querySelector('.hour-hand')


function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    // turn seconds, minutes and hours into degrees:
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    const hoursDegrees = ((hours / 12) * 360) + 90;

    // update css style
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    // console.log(seconds)
}

// get the date every second
setInterval(setDate, 1000);
