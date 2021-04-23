var ball;
var hypnoticBall, database, position;

function setup() {
    database = firebase.database();
    console.log(database);
    createCanvas(500, 500);
    ball = createSprite(250, 250, 30, 30);
    ball.shapeColor = "green";
    var hypnoticBallPosition = database.ref('ball/position');
    hypnoticBallPosition.on("value", readPosition, showError);
}

function draw() {

    background("blue");
    if (keyDown(LEFT_ARROW)) {
        changePosition(-1, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
        changePosition(1, 0);
    }
    else if (keyDown(UP_ARROW)) {
        changePosition(0, -1);
    }
    else if (keyDown(DOWN_ARROW)) {
        changePosition(0, +1);
        console.log(hypnoticBall.position.x);
    }
    console.log(hypnoticBall);


    drawSprites();

}

function changePosition(x, y) {
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data) {
    position = data.val();
    console.log(position);
    hypnoticBall.x = position.x;
    hypnoticBall.y = position.y;
}
function showError() {
    console.log("ERROR");
}

function writePosition(x, y) {
    database.ref('ball/position').set({ 'x': position.x + x, 'y': position / y + y });

}