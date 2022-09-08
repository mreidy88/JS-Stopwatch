const playButton = document.querySelector('.play')
const pauseButton = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')

playButton.addEventListener('click', start)
pauseButton.addEventListener('click', pause)
resetButton.addEventListener('click', reset)

let startTime
let elapsedTime = 0
let timeInterval

function timeToString(time){
    let difInHrs = time / 360000
    let hh =  Math.floor(difInHrs)

    let difInMin = (difInHrs - hh) * 60
    let mm =  Math.floor(difInMin)

    let difInSec = (difInHrs - mm) * 60
    let ss =  Math.floor(difInSec)

    let difInMS = (difInHrs - ss) * 100
    let ms = Math.floor(difInMS)

    let formattedMM = mm.toString().padStart(2, '0')
    let formattedSS = mm.toString().padStart(2, '0')
    let formattedMS = mm.toString().padStart(2, '0')


    return `${formattedMM}:${formattedSS}:${formattedMS}`
}

function showButton(buttonKey) {
    const buttonToShow =  buttonKey === 'play' ? playButton : pauseButton
    const buttonToHide =  buttonKey === 'play' ? pauseButton : playButton
    buttonToShow.style.display = 'block'
    buttonToHide.style.display = 'none'
}

// Create function to modify innerHtml
function print(txt) {
    document.getElementById(elementId:'display').innerHTML = txt
}

// Create Start, Pause, and Reset

function start() {
    startTime = Date.now() - elapsedTime
    timerInterval = setInterval(function printTime(){
        elapsedTime = Date.now() - startTime
        print(timeToString(elapsedTime))
    }, timeout:10)
    showButton('buttonKey: 'pause')
}

function pause() {
    clearInterval(timerInterval)
    showButton(buttonKey:'play')
}

function reset() {
    clearInterval(timerInterval)
    print(txt:'00:00:00')
    elapsedTime = 0
    showButton(buttonKey:'play')
}