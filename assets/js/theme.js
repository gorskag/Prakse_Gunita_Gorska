// --- On click shows/hides SparkleHeart details ---
function sparkleDetails() {
    var x = document.getElementById("footer_Sparkle_details");

    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


// --- On click slides to the previous/next card ---
$(document).ready(function(){
    $("#next").click(function(){
        $("#card1").css({
            "opacity":"0",
            "display":"none",
            }).hide().animate({opacity:1});
      $("#card2").css({
        "opacity":"0",
        "display":"block",
        }).show().animate({opacity:1});
    });


    $("#prev").click(function(){
        $("#card1").css({
            "opacity":"0",
            "display":"block",
            }).show().animate({opacity:1});
      $("#card2").css({
        "opacity":"0",
        "display":"none",
        }).hide().animate({opacity:1});
    });

    $("#next2").click(function(){
        $("#card2").css({
            "opacity":"0",
            "display":"none",
            }).hide().animate({opacity:1});
      $("#card3").css({
        "opacity":"0",
        "display":"block",
        }).show().animate({opacity:1});
    });


    $("#prev2").click(function(){
        $("#card2").css({
            "opacity":"0",
            "display":"block",
            }).show().animate({opacity:1});
      $("#card3").css({
        "opacity":"0",
        "display":"none",
        }).hide().animate({opacity:1});
    });
  });