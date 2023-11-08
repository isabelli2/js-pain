function setup() {
  createCanvas(600 , 600);  
   background("#4D1657");
}

function draw() {
 
fill("#96CDE7");
stroke("#6225CF");
strokeWeight(5);
if(mouseIsPressed){
  rect(mouseX,mouseY,20,30);
}
 }
