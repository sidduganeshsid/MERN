// function updateClock() {
//     // Get the current time
//     const now = new Date();
  
//     // Extract hours, minutes, and seconds
//     let hours = now.getHours();
//     let minutes = now.getMinutes();
//     let seconds = now.getSeconds();
  
//     // Add leading zeros if necessary
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     seconds = seconds < 10 ? '0' + seconds : seconds;
  
//     // Print the time in HH:MM:SS format
//     console.log(`${hours}:${minutes}:${seconds}`);
//   }
  
//   // Update the clock every second
//   setInterval(updateClock, 1000);
  
function updateClock(){
    const now = new Date(); // let or const

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours<10?'0'+hours:hours;
    minutes = minutes<10?'0'+minutes:minutes;
    seconds = seconds<10?'0'+seconds:seconds;

    console.log(`${hours}:${minutes}:${seconds}`);
}

setInterval(updateClock,1000);