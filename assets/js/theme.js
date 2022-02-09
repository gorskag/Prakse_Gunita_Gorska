// --- Changes button text on click ---
const btnchange = document.getElementById("storiescontainerbutton");

btnchange.addEventListener("click", ()=>{

    if(btnchange.innerText === "Skatīt vairāk"){
        btnchange.innerText = "Skatīt mazāk";
    }else{
        btnchange.innerText= "Skatīt vairāk";
    }
});

// --- Shows/hides content after 20th child ---
const container = document.querySelector('.storiescontainer')

const showmore = document.querySelector('.storiescontainerbutton')

showmore.addEventListener('click', () => 
  container.classList.toggle('show-all')
)

// --- Initializes the map ---
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 56.948, lng: 24.108 },
    zoom: 14,
  });
}


// --- On click shows/hides SparkleHeart details ---
function sparkleDetails() {
    var x = document.getElementById("footer_Sparkle_details");

    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

// --- On click slides to the form
function scrolltoSapnotajiem(){
    var x = document.getElementById("form");

    x.scrollIntoView();
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