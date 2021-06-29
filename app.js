function updateTime() {

// UI Vars 
let hours = document.querySelector("#hours");
let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let ampm = document.getElementById("am");

// Time Objects
let maintime = new Date();
let h = maintime.getHours();
let m = maintime.getMinutes();
let s = maintime.getSeconds();
let session = "AM";

// Checking Greater Than 12 If Twelve Start From 1
if(h >= 12) {
	h = h - 12;
	session = "PM";
}

// If 0 Then Start From 12
if(h == 0) {
	h = 12;
}

// Adding Zero If The Number Is Less Than < 10
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

// Appending To HTML
hours.innerHTML = h + ":";
minutes.innerHTML = m + ":";
seconds.innerHTML = s + ":";
ampm.innerHTML = session;

}

setInterval(updateTime , 1000);