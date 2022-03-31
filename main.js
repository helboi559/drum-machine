// Setup 'tick' sound
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
<input type="checkbox" id="kick-drum"/>
<input id="kick-timing"/>`
snareB.innerHTML=`
<label for="snare-drum">Snare Drum</label>
<input type="checkbox" id="snare-drum"/>
<input id="snare-timing"/>`
hiB.innerHTML=`
<label for="hi-hat">Hi hat</label>
<input type="checkbox" id="hi-hat"/>
<input id="hi-timing"/>`

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
    // console.log(metroBox.checked)
    if(metroBox.checked) {
        tick.play()
    } else if (kickBox.checked){
        kickDrum.play();
    } else if (snareBox.checked){
        snareDrum.play();
    } else if (hiBox.checked){
        hiHat.play();
    } else {
        tock.play();
    }
    count += 1
    // console.log(count)
    //display value of current count
    currCount.value = count
    // if(count % 4 === 0) {
    //     tock.play();
    //     count = 0;
    // } else {
    //     tick.play();
    // }
    
    
}

// This function sets up update() to be called every 600ms
function setupUpdate() {
    setInterval(update, 600);
}

// Call setupUpdate() once after 300ms
// setTimeout(setupUpdate, 300);
