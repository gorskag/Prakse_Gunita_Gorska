// --- On click shows/hides SparkleHeart details ---
function sparkleDetails() {
    var x = document.getElementById("footer_Sparkle_details");

    if (window.getComputedStyle(x).display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}