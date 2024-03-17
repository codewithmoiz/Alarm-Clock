const display = document.getElementById("clock");
const audio = new Audio("Audio/mixkit-digital-clock-digital-alarm-buzzer-992.mp3");
audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime(){
let date = new Date();
let hours = formatTime(date.getHours());
let minutes = formatTime(date.getMinutes());
let seconds = formatTime(date.getSeconds());
display.innerHTML = `<h1>${hours} : ${minutes} : ${seconds}</h1>`;
}

function formatTime(time){
    if(time < 10) return "0" + time;
    else return time;
}

setInterval(updateTime);

function setAlarmTime(value){
    alarmTime = value;
}

function setAlarm(){
    if(alarmTime){
        const current = new Date();
        const timeToAlarm = new Date(alarmTime);
        if(timeToAlarm > current){
            let timeout = timeToAlarm.getTime() - current.getTime();

            alarmTimeout = setTimeout(function(){
                audio.play();
            },timeout);
        }
    }
};

function clearAlarm(){
    if(alarmTimeout) {
        audio.pause();

        clearTimeout(alarmTimeout);
    }
};