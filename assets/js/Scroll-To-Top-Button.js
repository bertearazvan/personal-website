$(window).on("scroll", function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("toTop").style.display = "block";
        $(".mouse-scroll-container").fadeOut("slow");
    } else {
        document.getElementById("toTop").style.display = "none";
        $(".mouse-scroll-container").fadeIn("slow");
    }
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}