mustache_x=0;
mustache_y=0;



canvas=document.getElementById("canvas").value;
function preload(){
    mustache= loadImage('https://media.istockphoto.com/vectors/black-hipster-vector-mustache-vector-id485318064?s=612x612');
}




function setup(){
canvas=createCanvas(300,300);

canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("poseNet is initialized");
}

function gotPoses(result){
if(result.length>0){
console.log(result);
mustache_x=result[0].pose.nose.x;
mustache_y=result[0].pose.nose.y;
console.log("mustache x"+ mustache_x);
console.log("mustache y"+ mustache_y);
}
}


function draw(){
image(video,0,0,300,300);
image(mustache,mustache_x,mustache_y,30,30)
}

function take_snapshot() {
    save("snap.png");
    }