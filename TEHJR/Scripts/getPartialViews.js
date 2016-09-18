var selector = $("#content");
var loading = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="uil-ring"><circle cx="50" cy="50" r="10" stroke-dasharray="53.36281798666926 87.9645943005142" stroke="#f2b736" fill="none" stroke-width="5"><animateTransform attributeName="transform" type="rotate" values="0 50 50;180 50 50;360 50 50;" keyTimes="0;0.5;1" dur="1s" repeatCount="indefinite" begin="0s"></animateTransform></circle></svg>`;

function loadingRing() {
    selector.html(loading);
    $(".uil-ring").fadeIn("slow", () => { });
}

function Home() {
    loadingRing();
    $.get("", (data) => {
        selector.html(data);
        location.hash = "/";
    });
    $(".btn-current").removeClass("btn-current");
    $("#home").addClass("btn-current");
}
function About() {
    loadingRing();
    $.get("Home/About", (data) => {
        selector.html(data);
        location.hash = "/Home/About";
    });
    $(".btn-current").removeClass("btn-current");
    $("#about").addClass("btn-current");
}
function Contact() {
    loadingRing();
    $.get("Home/Contact", (data) => {
        selector.html(data);
        location.hash = "/Home/Contact";
    });
    $(".btn-current").removeClass("btn-current");
    $("#contact").addClass("btn-current");
}

function closeVideo() {
    $("#video-container").fadeOut("fast", () => { });
}

function openVideo(_src) {
    $("#video-container").fadeIn("fast", () => { });
    var vid = $("#vidya");
    vid.attr('src', _src);
    vid.load();
}