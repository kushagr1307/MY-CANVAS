var drawing=[];
var currentPath=[];

function setup() {
  canvas = createCanvas(800,400);
  canvas.mousePressed(start);
}

function draw() {
  background("blue");  
  
  if(mouseIsPressed){
   var point = {
   x:mouseX,
   y:mouseY
}
currentPath.push(point);
}

strokeWeight(4);
noFill();
stroke("white");

for(var i=0;i<drawing.lenght;i++){
  var path = drawing[i]
  beginShape();
  for(var j=0;j<path.lenght;j++){
vertex(path[j].x,path[j].y);
}
endShape();
}
}
function start(){
currentPath = [];
drawing.push(currentPath);
}

