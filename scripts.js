// Write your JavaScript code here.
function init (){

takeoffButton = document.getElementById("takeoff");
landingButton = document.getElementById("landing");
missionAbortButton = document.getElementById("missionAbort");
upButton = document.getElementById("up");
downButton = document.getElementById("down");
leftButton = document.getElementById("left");
rightButton = document.getElementById("right");

function onClickTakeOff(){
    if (window.confirm("Is the shuttle ready for takeoff?") === true){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight!"
        document.getElementById("shuttleBackground").style.background = "#3457D5"; //blue
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
    }
}

function onClickLand(){
    window.alert("The shuttle is landing. Landing gear engaged!");
    document.getElementById("flightStatus").innerHTML = "Shuttle has landed!";
    document.getElementById("shuttleBackground").style.background = "#568203"; //green
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
}

function onClickMissionAbort(){
    if (window.confirm("Do you want to abort the mission?") === true){
        document.getElementById("flightStatus").innerHTML = "Mission aborted!"
        document.getElementById("shuttleBackground").style.background = "#568203"; //green
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    }
}


function onClickUpButton(){
    document.getElementById("rocket").style.top = "100px";
}

function onClickDownButton(){
    document.getElementById("rocket").style.top = "100px";
}

function onClickLeftButton(){
    document.getElementById("rocket").style.left = "100px";
}

function onClickRightButton(){
    document.getElementById("rocket").style.right = "100px";

}


takeoffButton.addEventListener("click", onClickTakeOff);

landingButton.addEventListener("click", onClickLand);

missionAbortButton.addEventListener("click", onClickMissionAbort);

upButton.addEventListener("click", onClickUpButton);

downButton.addEventListener("click", onClickDownButton);

leftButton.addEventListener("click", onClickLeftButton);

rightButton.addEventListener("click", onClickRightButton);


}

window.onload = init;


// Remember to pay attention to page loading!