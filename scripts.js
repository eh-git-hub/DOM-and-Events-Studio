// Write your JavaScript code here.
function init (){

takeoffButton = document.getElementById("takeoff");
landingButton = document.getElementById("landing");
missionAbortButton = document.getElementById("missionAbort");
upButton = document.getElementById("up");
downButton = document.getElementById("down");
leftButton = document.getElementById("left");
rightButton = document.getElementById("right");
rocket = document.getElementById("rocket");
rocket.style.bottom = '0';
rocket.style.left = '0';

function onClickTakeOff(){
    if (window.confirm("Is the shuttle ready for takeoff?") === true){
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight!"
        document.getElementById("shuttleBackground").style.background = "#318CE7"; //blue de france
        document.getElementById("spaceShuttleHeight").innerHTML = "10,000";
    }
}

function onClickLand(){
    window.alert("The shuttle is landing. Landing gear engaged!");
    document.getElementById("flightStatus").innerHTML = "Shuttle has landed!";
    document.getElementById("shuttleBackground").style.background = "#568203"; //avocado green
    document.getElementById("spaceShuttleHeight").innerHTML = "0";
}

function onClickMissionAbort(){
    if (window.confirm("Do you want to abort the mission?") === true){
        document.getElementById("flightStatus").innerHTML = "Mission aborted!"
        document.getElementById("shuttleBackground").style.background = "#FF0800"; //candy apple red
        document.getElementById("spaceShuttleHeight").innerHTML = "0";
    }
}


function onClickUpButton(){
    movement = parseInt(rocket.style.bottom) + 10 + "px";
    rocket.style.bottom = movement;
};

function onClickDownButton(){
    movement = parseInt(rocket.style.bottom) - 10 + "px";
    rocket.style.bottom = movement;
};

function onClickLeftButton(){
    movement = parseInt(rocket.style.left) - 10 + "px";
    rocket.style.left = movement;
};

function onClickRightButton(){
    movement = parseInt(rocket.style.left) + 10 + "px";
    rocket.style.left = movement;
};


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