let date = new Date();
console.log(date.getHours())
let ora = 7;
if (ora < 22 && ora > 5) {

    document.getElementById("moon").style.animation = "rotation 20s linear infinite";


    $("#sun").click(function () {
        $("#blink").animate({
            opacity: '1'
        }, 1000).animate({
            opacity: '0'
        });

        $("#noblink").animate({
            opacity: '0'
        }, 1000).animate({
            opacity: '1'
        });

    });
} else if (ora == 22 || ora == 5) {

    // console.log("pl")
    // document.getElementById("moonDiv").style.transformOrigin = "center";
    // document.getElementById("moonDiv").style.animation = "goToTop 10s ease-out forwards";
    // document.getElementById("sunDiv").style.transformOrigin = "center";
    // document.getElementById("sunDiv").style.animation = "goDown 10s ease-out forwards";
    // document.getElementById("sun").style.animation = "none";
    // document.getElementById("sunrays").style.animation = "none";

}