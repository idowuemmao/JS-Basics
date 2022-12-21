const clock = document.getElementById('clock')
const date = document.getElementById('date')


function currentTime(){
    let theDate = new Date();
    let day = theDate.getDate();
    let dayName = theDate.getDay()
    let month = theDate.getMonth();
    let year = theDate.getFullYear();
    let hh = theDate.getHours();
    let mm = theDate.getMinutes();
    let ss = theDate.getSeconds();
    let ms = theDate.getMilliseconds();
    let session = "AM";

    if (hh === 0){
        hh = 12;
    }
    if (hh > 12){
        hh = hh - 12;
        session = "PM";
    }
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;
    ms = (ms < 10) ? "0" + ms : ms

    switch (dayName){
        case 0 : dayName = "Sunday"; break;
        case 1 : dayName = "Monday"; break;
        case 2 : dayName = "Tuesday"; break;
        case 3 : dayName = "Wednesday"; break;
        case 4 : dayName = "Thursday"; break;
        case 5 : dayName = "Friday"; break;
        case 6 : dayName = "Saturday"; 
    }

    let time = hh + ":" + mm + ":" + ss + ":" + ms + session;
    let myDate = dayName + " " + day + ":" + month + ":" + year
    clock.innerText = time;
    date.textContent = myDate;
    let t = setTimeout(() => {
        currentTime()
    }, 1000);
}


currentTime()