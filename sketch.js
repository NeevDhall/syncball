var ball;
var database
var dbpos

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    
    var ballPosition = database.ref("ball/position");
    ballPosition.on("value",readPosition)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
   database.ref("ball/position").set({
       'x' : readPosition.x + x,
       'y' : readPosition.y + y
   })
}

function readPosition(data){
dbpos = data.val()
ball.x = dbpos.x
ball.y = dbpos.y 
}
