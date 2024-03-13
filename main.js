

function preload() {

classifier=ml5.imageClassifier('DoodleNet');

}

function setup() {

canvas=createCanvas(420,420)
canvas.center()
background("white")
canvas.mouseReleased(classifyCanvas);
snyth=window.speechSynthesis;


}

function draw() {

strokeWeight(13);
stroke(0);
if(mouseIsPressed) {
    line(pmouseX, pmouseY, mouseX, mouseY);
}

}

function classifyCanvas() {
    classifier.classify(canvas, gotresults);


}

function gotresults(error, results) {
    if(error) {
        console.error(error);
    
    }
    console.log(results);
    document.getElementById("label").innerHTML= "Label : " + results[0].label
    document.getElementById("confidence").innerHTML= "Confidence : " + Math.round(results[0].confidence * 100) + "%";

    utterthis = new SpeechSynthesisUtterance(results[0].label);
    snyth.speak(utterthis);
}

function clearance() {
    background("white");
}

