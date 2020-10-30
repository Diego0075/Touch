function inicio() {
    var el = document.getElementById("canvas");
    el.addEventListener("touchstart", handleStart, false);
    el.addEventListener("touchend", handleEnd, false);
    //el.addEventListener("touchcancel", handleCancel, false);
    el.addEventListener("touchmove", handleMove, false);
    el.addEventListener("click", click);
    if (window.DeviceOrientationEvent){
        window.addEventListener("deviceorientation", orientacion);
    }
}

/**
 * 
 * @param {DeviceOrientationEvent} evt 
 */
function orientacion(evt) {
    document.getElementById("log").innerHTML = "Orientación del dispositivo: Alpha: " + evt.alpha + "º, Beta: " + evt.beta + "º, Gamma: " + evt.gamma + "º";
}

//document.addEventListener("DOMContentLoaded", inicio);
window.onload = inicio;

/**
 * 
 * @param {TouchEvent} evt 
 */
function handleStart(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touch start " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}

/**
 * 
 * @param {TouchEvent} evt 
 */
function handleEnd(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touch end " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}

/**
 * 
 * @param {TouchEvent} evt 
 */
function handleMove(evt) {
    evt.preventDefault();
    document.getElementById("log").innerHTML = "Touch move " + evt.touches[0].pageX + " " + evt.touches[0].pageY;
}

function click() {
    alert("click");
}