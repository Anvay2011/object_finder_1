img="";
objects=[];
status="";
carol="";
object_name=""
function preload(){
    carol=loadSound("sound.mp3")
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}

function start(){
    objectDetector=ml5.objectDetector("Cocossd",modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Objects";
    object_name=document.getElementById("object_name").value;
}

function draw(){
    image(video,0,0,380,380);
   
    if(status!=""){
    for(i=0; i<object.length; i++){    
    if(objects[i].label!=object_name){
        
    }
        }
    }
}

function modelLoaded(){
    console.log("model Loaded");
    status=true;

}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);
    objects=results;
    
}
