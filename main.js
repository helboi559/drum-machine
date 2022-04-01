// Setup sounds && curr count
const tick = new Audio('sounds/tick.mp3');
//play tock every 4th beat
const tock = new Audio('sounds/tock.mp3')
let currCount = document.querySelector('#count input')
const hiHat = new Audio('sounds/hi-hat.mp3')
const kickDrum = new Audio('sounds/kick-drum.mp3')
const snareDrum= new Audio('sounds/snare-drum.mp3')
//ADDING CHECKBOXES

let userControl = document.querySelector('#controls')
// console.log(userControl)
let metronomeB = document.createElement('div')
let snareB = document.createElement('div')
let kickB = document.createElement('div')
let hiB = document.createElement('div')
metronomeB.innerHTML=`
<label for="metronome">Metronome</label>
<input type="checkbox" id="metronome" checked/>`
kickB.innerHTML=`
<label for="kick-drum">Kick drum</label>
<input type="checkbox" id="kick-drum" value="kick-drum"/>
<input id="kick-timing" value="3" type="number"/>`
snareB.innerHTML=`
<label for="snare-drum">Snare Drum</label>
<input type="checkbox" id="snare-drum" value="snare-drum"/>
<input id="snare-timing" value="2" type="number"/>`
hiB.innerHTML=`
<label for="hi-hat">Hi hat</label>
<input type="checkbox" id="hi-hat" value="hi-hat"/>
<input id="hi-timing" value="4" type="number"/>`

userControl.appendChild(metronomeB)
userControl.appendChild(snareB)
userControl.appendChild(kickB)
userControl.appendChild(hiB)

//keep count of update
let count = 0;
function update() {
    // console.log(metronomeB)
    let metroBox = document.querySelector('#metronome')
    let kickBox = document.querySelector('#kick-drum')
    let snareBox = document.querySelector('#snare-drum')
    let hiBox = document.querySelector('#hi-hat')
    //get timings
    let kickTime = document.querySelector('#kick-timing')
    // console.log(typeof kickTime.value)
    let snareTime= document.querySelector('#snare-timing')
    let hiTime= document.querySelector('#hi-timing')
    // console.log(snareTime.value)
    count += 1
    //below doesnt affect rest of code
    currCount.value=count
    // console.log(currCount)
    let valueCount = (count % 4) + 1
    // console.log(valueCount)
    if(metroBox.checked) {
        tick.play()
    } else if (kickBox.checked){
        // console.log(kickTime.value)
        if (Number(kickTime.value) === valueCount) {
            kickDrum.play();
        }
    } else if (snareBox.checked){
        if (Number(kickTime.value) === valueCount) {
            snareDrum.play();
        }
    } else if (hiBox.checked){
        if (Number(kickTime.value) === valueCount) {
            hiHat.play();
        }
    } else {
        tock.play();
    }
    
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
setTimeout(setupUpdate, 300);
