let hours = document.getElementById('hours');
let minutues = document.getElementById('minutes');
let seconds = document.getElementById('seconds');

setInterval(() => {
    const currentTime = new Date()
    hours.innerHTML = (currentTime.getHours() < 10 ? "0" : "" ) + currentTime.getHours()
    minutues.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "" ) + currentTime.getMinutes()
    seconds.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "" ) + currentTime.getSeconds()
}, 1000)

