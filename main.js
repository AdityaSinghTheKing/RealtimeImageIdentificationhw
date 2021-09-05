function setup(){
    canvas=createCanvas(300 , 300)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/N6eG78ijF/model.json" , modelLoaded)
}
function modelLoaded(){
    console.log("The model iz loaded")
}
function draw(){
    image(video , 0 , 0 , 280 , 280);
    classifier.classify(video , gotResult)
}
function gotResult(error , results){
    if(error){
        console.error(error)
    }
    else{
        console.log(results);
        document.getElementById("resultsobjectname").innerHTML=results[0].label;
        document.getElementById("resultsobjectaccuracy").innerHTML=results[0].confidence.toFixed(3)*100
    }
}