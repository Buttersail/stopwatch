let seconds = 0
let minutes = 0
let hours = 0

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

  document.querySelector('#counter').innerHTML = hours + ':' + minutes + ':' + seconds
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

//Is for resetting the timer back to 0
function stopwatchReset() {
  window.clearInterval(interval)
  seconds = 0
  minutes = 0
  hours = 0

  document.querySelector('#counter').innerHTML = '00:00:00'
}
