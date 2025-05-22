function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255, 216, 133);
  
  
  
  //Chassy 
    //white middle part
  fill(246);
  quad(75, 150, 56, 202, 340, 202, 335, 150);
    //Le roof
  fill(230);
  rect(72, 142, 265, 8, 12, 12, 1, 1);
    //Main body 
  fill(133, 243, 255);
  rect(56, 190, 284, 60, 15, 15, 20, 14);
  //bumper
  fill(210);
  rect(55, 240, 285, 15, 1, 1, 10, 20);
  //Shadow on the wheel thing for depth 
  fill(30)
  arc(120,255,63,65, radians(180),radians(0) );
  arc(275,255,63,65, radians(180),radians(0) );
  //wheels on the car go round and round
  fill(70);
  ellipse (120, 250, 45);
  ellipse (275, 250, 45);
  //wheel mags thingy
  fill(255);
  ellipse (120, 250, 30);
  ellipse (275, 250, 30);
  //Windows
  fill(207, 233, 244);
  strokeWeight(2);
  quad(84, 155, 75, 185, 120, 185, 120, 155);
  rect(153, 155, 53, 30);
  rect(220, 155, 80, 30);
  //Doors cuz duh
  line(135,150, 135, 215);
  line(135,215, 105, 215);
  line(105,215, 89, 230);
  line(89, 230, 58, 230);
  line(120,196, 130, 196);
  //detail
    //dashes
  line(305,200, 330, 200);
  line(305,205, 330, 205);
  line(305,210, 328, 210);
  line(310,180, 330, 180);
  line(310,175, 330, 175);
    //lights(head, break, and le turning)
  fill(255, 250, 107)
  ellipse(60,209, 10, 23);
  fill(254, 88, 88)
  ellipse(335,228, 9, 15);
  fill(255, 144, 27)
  ellipse(336,211, 6, 10);
    //engraving
  textSize(15);
  fill(1);
  text('D . F . G . S', 150, 230);
  
}