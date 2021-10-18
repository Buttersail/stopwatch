//Variables used to store the timer
let seconds = 0
let minutes = 0
let hours = 0

//Variables used to make the stopwatch in a better format
let displaySeconds = 0
let displayMinutes = 0
let displayHours = 0

let interval = null

let stopwatchStatus = 'paused'

//Logic for the stopwatch to increment
function stopWatch() {
  seconds++

  if (seconds / 60 === 1) {
    seconds = 0
    minutes++

    if (minutes / 60 === 1) {
      minutes = 0
      hours++
    }
  }

  //For formatting the stopwatch better
  if (seconds < 10) {
    displaySeconds = '0' + seconds.toString()
  } else {
    displaySeconds = seconds
  }

  if (minutes < 10) {
    displayMinutes = '0' + minutes.toString()
  } else {
    displayMinutes = minutes
  }

  if (hours < 10) {
    displayHours = '0' + hours.toString()
  } else {
    displayHours = hours
  }

  //To change the value of the stopwatch from a static to 'dynamic' value
  document.querySelector('#counter').innerHTML = displayHours + ':' + displayMinutes + ':' + displaySeconds
}

//Buttons
document.querySelector('#start').onclick = () => {
  stopwatchStart()
  console.log('Start Button Clicked')
}

document.querySelector('#pause').onclick = () => {
  stopwatchPause()
  console.log('Pause Button Clicked')
}

document.querySelector('#reset').onclick = () => {
  stopwatchReset()
  console.log('Reset Button Clicked')
}

//Logic for the stopwatch
//Is to determine if the stopwatch is on a paused state, if so it will start the stopwatch and set the status to 'started'
function stopwatchStart() {
  if (stopwatchStatus === 'paused') {
    interval = window.setInterval(stopWatch, 1000)
    stopwatchStatus = 'started'
  }
}

//Is to determine if the stopwatch is in a going state, if so it will pause the stopwatch and set the status to 'paused'
function stopwatchPause() {
  if (stopwatchStatus === 'started') {
    window.clearInterval(interval)
    stopwatchStatus = 'paused'
  }
}

//Is for resetting the timer back to 00:00:00
function stopwatchReset() {
  window.clearInterval(interval)
  seconds = 0
  minutes = 0
  hours = 0

  document.querySelector('#counter').innerHTML = '00:00:00'
}
