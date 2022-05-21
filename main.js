song_1 = "";
song_2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0;

scoreLeftWrist = 0;
scoreRightWrist = 0;

Status_Song = "";
Status_Song2 = "";

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet is Intialized');
}
function darw(){
    image(video, 0, 0, 600, 500);

    Status_song = Status_song.isPlaying();
    console.log(Status_song);

    fill("blue");
    stroke("black");

    if(scoreLeftWrist > 0.2)
    {circle(leftWristX,leftWristY,20);
    Status_Song2.stop();
}

    if(Status_Song == False)
{
    Status_Song.Play();
    document.getElementById("song_name").innerHTML = "Peter Pan Song is Playing";
}

Status_song2 = Status_song2.isPlaying();
console.log(Status_song2);

fill("green");
stroke("black");

if(scoreRightWrist > 0.2)
{circle(rightWristX,rightWristY,20);
Status_Song1.stop();}

if(Status_Song1 == False)
{
    Status_Song1.Play();
    document.getElementById("song_name").innerHTML = "Harry Potter Theme Song is Playing";
}
}

function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        scoreRightWrist = results[0].pose.keypoints[10].score;
        console.log("scoreLeftWrist = " + scoreLeftWrist);
        console.log("scoreRightWrist ="+ scoreRightWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX = " + leftWristX +" leftWristY = "+ leftWristY);
        
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[9].pose.rightWrist.y;
        console.log("rightWristX = " + rightWristX +" rightWristY ="+ rightWristY);
    }
}
