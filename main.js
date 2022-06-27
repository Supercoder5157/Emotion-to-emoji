prediction_1= "";
prediction_2= "";

Webcam.set({
    width: 350,
    height:300,
    image_format:"png",
    png_quality: 90
});

camera= document.getElementById("camera");

Webcam.attach("#camera");

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= '<img id="captured_image" src="'+data_uri+'">';
    });
}

console.log("ml5 version: ",ml5.version);

classifer= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/tWTyWkWC3/model.json",modelLoaded);

function modelLoaded(){
    console.log("Model is Loaded!");
}

function speak1(){
    var synth= window.SpeechSynthesis;
    speak_data1= "The first prediction is "+prediction_1;
    speak_data2= "And the second prediction is "+prediction_2;
    var utterThis= new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}