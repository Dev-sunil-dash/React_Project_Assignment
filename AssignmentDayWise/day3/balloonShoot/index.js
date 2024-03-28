var intervalId;
var selectedBaloon;

function moveArrow(offset) {
    var arrow = document.querySelector('.arrow');
    var currentPosition = parseInt(arrow.style.top) || 0;
    arrow.style.top = currentPosition + offset + 'px';
}
function moveArrowRight() {
    var arrow = document.querySelector('.arrow');
    var currentPosition = parseInt(arrow.style.left) || 0;
    arrow.style.left = currentPosition + 1 + 'px';
    checkArrowCollision();
}

function startMovingArrowRight() {
    intervalId = setInterval(moveArrowRight, 10);
}

function stopMovingArrowRight() {
    clearInterval(intervalId);
}

function checkArrowCollision() {
    debugger;
    var arrow = document.querySelector('.arrow');
    var arrowTop = parseInt(arrow.style.top) || 0;
    var arrowLeft = parseInt(arrow.style.left) || 0;

    if (!selectedBaloon) {
        alert("Please select a balloon");
        return;
    }

    var balloonTop = parseInt(selectedBaloon.style.top) || 0;
    var balloonLeft = parseInt(selectedBaloon.style.left) || 0;
    var balloonWidth = parseInt(selectedBaloon.style.width) || 0;
    var balloonHeight = parseInt(selectedBaloon.style.height) || 0;

    console.log("Arrow Top:", arrowTop);
    console.log("Arrow Left:", arrowLeft);
    console.log("Balloon Top:", balloonTop);
    console.log("Balloon Left:", balloonLeft);
    console.log("Balloon Width:", balloonWidth);
    console.log("Balloon Height:", balloonHeight);

    if (
        arrowLeft < balloonLeft + balloonWidth &&
        arrowLeft + arrow.clientWidth > balloonLeft &&
        arrowTop < balloonTop + balloonHeight &&
        arrowTop + arrow.clientHeight > balloonTop
    ) {
        console.log("collision happened");
        stopMovingArrowRight();
    }
}

function ballClick(e) {
    var activeBall = document.querySelector('.balloons>div[style="border: 1px solid green;"]');
    if (activeBall) {
        activeBall.style.border = '1px solid red';
    }
    selectedBaloon = e.target;
    e.target.style.border = '1px solid green';
}

document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keydown', function (event) {
        if (event.keyCode === 38) {
            moveArrow(-5);
        } else if (event.keyCode === 40) {
            moveArrow(5);
        } else if (event.keyCode === 13) {
            if (!selectedBaloon) {
                alert("Please set a target");
                return;
            }
            startMovingArrowRight();
        }
    });
});