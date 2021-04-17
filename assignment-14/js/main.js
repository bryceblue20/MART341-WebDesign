var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font= "90px Arial";
ctx.strokeText("Community Art", 1600, 140);
ctx.fillText("Community Art", 1800, 80);
ctx.fillStyle= "grey"; 

ctx.font= "90px Arial grey";
ctx.fillText("Community Art", 1300,180);

ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 *Math.PI);
ctx.fillStyle = "red";
ctx.lineWidth= 1; 
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc(200, 160, 40, 0, 2 * Math.PI);
ctx.fillstyle = "#FFA500";
ctx.lineWidth = 5;
ctx.fill();
ctx.stroke();

ctx.beginPath();
ctx.arc (300, 260, 40, 0, 2 * Math.PI);
ctx.fillstyle = "yellow";
ctx.lineWidth = 8;
ctx.fill();
ctx.stroke();

ctx.font="160px Arial black";
ctx.strokeText("Space",800,340);

ctx.font = "190px Arial";
ctx.strokeText("F", 800, 500);

ctx.font = "80px Arial";
ctx.strokeText("l", 920, 500);

ctx.font = "190px Arial";
ctx.strokeText("I", 1000, 500);

ctx.font = "80px Arial";
ctx.strokeText("g", 1100, 500);

ctx.font = "190px Arial";
ctx.strokeText("h", 1200, 500);

ctx.font = "80px Arial";
ctx.strokeText("t", 1350, 500);






























