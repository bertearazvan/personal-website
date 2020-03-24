function digi() {
    var date = new Date(),
        hour = checkTime(date.getHours()),
        minute = checkTime(date.getMinutes()),
        ss = checkTime(date.getSeconds());

    function checkTime(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }

    if (hour > 12) {
        hour = hour - 12;
        if (hour == 12) {
            hour = checkTime(hour);
            document.getElementById("number").innerHTML = hour + ":" + minute + " AM";
            document.getElementById("momentOfDay").innerHTML = "  AM";
        } else {
            hour = checkTime(hour);
            document.getElementById("number").innerHTML = hour + ":" + minute;
            document.getElementById("momentOfDay").innerHTML = "  PM";
        }
    } else {
        document.getElementById("number").innerHTML = hour + ":" + minute;
        document.getElementById("momentOfDay").innerHTML = "  AM";
    }
}
var time = setTimeout(digi, 1000);