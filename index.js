const canvas = document.getElementById("canvas");
var rect = canvas.getBoundingClientRect();
console.log("Rect ", rect)
const ctx = canvas.getContext("2d");

//let xCan = ctx.getBoundingClientRect().left
//let yCan = ctx.getBoundingClientRect().top
//console.log("xCan", xCan, "yCan", yCan)

//ctx.fillStyle = "green";
//ctx.fillRect(10, 10, 500, 100);

let path1 = new Path2D();
path1.rect(10, 10, 100, 100);

let path2 = new Path2D(path1);
path2.moveTo(220, 60);
path2.arc(170, 60, 50, 0, 2 * Math.PI);

ctx.stroke(path2);

// Reset the current path
//ctx.beginPath(); 
// Staring point (10,45)
 ctx.moveTo(0,0);
// End point (180,47)
ctx.lineTo(180,47);
// Make the line visible
ctx.stroke();

canvas.addEventListener ('click', event => {
    console.log(`x: ${event.screenX}, y: ${event.screenY}`);    
    console.log(`x2: ${event.screenX-102}, y2: ${event.screenY-171}`);

  })