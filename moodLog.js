function setup (){

    createCanvas (350,600);
    background (213, 149, 148);
    fill (173, 122, 121);
    noStroke();
    rect (0,0,350,305);
    
    stroke (0);
    strokeWeight(1);
    rect (15,15,320,275);
    fill (0);
    rect (15,15,320,5);

    fill(173, 122, 121);
    //weekday labels
    rect (16, 20, 46, 29);
    rect (61, 20, 46, 29);
    rect (107, 20, 46, 29);
    rect (151, 20, 47, 29);
    rect (197, 20, 46, 29);
    rect (241, 20, 47, 29);
    rect (287, 20, 47, 29); 
    
    fill (0);
    textSize(12);
    text ("Sun", 28,42);
    text ("Mon", 72,42);
    text ("Tue", 117,42);
    text ("Wed", 162,42);
    text ("Thu", 207,42);
    text ("Fri", 256,42);
    text ("Sat", 300,42);

    fill(173, 122, 121);
    //week 1
    rect (15, 50, 46, 40); 
    rect (61, 50, 46, 40); 
    rect (107, 50, 46, 40); 
    rect (151, 50, 46, 40); 
    rect (197, 50, 46, 40); 
    rect (241, 50, 46, 40); 
    rect (287, 50, 47, 40); //1



    fill(173, 122, 121);
    //week 2
    rect (15, 90, 46, 40);//2
    rect (61, 90, 46, 40); //3
    rect (107, 90, 46, 40); //4
    rect (151, 90, 46, 40); //5
    rect (197, 90, 46, 40); //6
    rect (241, 90, 46, 40); //7
    rect (287, 90, 47, 40);//8

  
    fill(173, 122, 121);
    //week 3
    rect (15, 130, 46, 40);  //9
    rect (61, 130, 46, 40); //10
    rect (107, 130, 46, 40); //11
    rect (151, 130, 46, 40); //12
    rect (197, 130, 46, 40); //13
    rect (241, 130, 46, 40);//14
    rect (287, 130, 47, 40); //15

 

    fill(173, 122, 121);
    //week 4
    rect (15, 170, 46, 40); //16
    rect (61, 170, 46, 40); //17
    rect (107, 170, 46, 40); //18
    rect (151, 170, 46, 40); //19
    rect (197, 170, 46, 40); //20
    rect (241, 170, 46, 40); //21
    rect (287, 170, 47, 40);  //22



    fill(173, 122, 121);
    //week 5
    rect (15, 210, 46, 40); //23
    rect (61, 210, 46, 40); //24
    rect (107, 210, 46, 40);//25
    rect (151, 210, 46, 40);//26
    rect (197, 210, 46, 40);//27
    rect (241, 210, 46, 40); //28
    rect (287, 210, 47, 40);//29

 
    fill(173, 122, 121);
    //week 6
    rect (15, 250, 46, 40);//30
    rect (61, 250, 46, 40);//31
    rect (107, 250, 46, 40);
    rect (151, 250, 46, 40);
    rect (197, 250, 46, 40);
    rect (241, 250, 46, 40);
    rect (287, 250, 47, 40);

    fill (116, 252, 118);
    rect (0,310,350,40,60);
    fill(0);
    textSize (15);
    noStroke();
    text ("Joyful, Happy, Relaxed", 98, 335);

    stroke (0);
    fill (186, 255, 187);
    rect (0,352,350,40,60);
    fill(0);
    textSize (15);
    noStroke();
    text ("Productive, Active, Motivated", 80, 378);

    stroke(0);
    fill (250, 252, 116);
    rect (0,394,350,40,60);
    fill(0);
    textSize (15);
    noStroke();
    text ("Average, Normal, Good", 95,421);

    stroke(0);
    fill (201, 201, 201);
    rect (0,436,350,40,60);
    fill(0);
    textSize (15);
    noStroke();
    text ("Sick, Tired, Lazy", 115, 462);

    stroke(0);
    fill (143, 184, 235);
    rect (0,478,350,40,60);
    fill(0);
    textSize (15);
    noStroke();
    text ("Sad, Lonely, Numb", 109, 504);

    stroke(0);
    fill (237, 104, 104);
    rect (0,520,350,40,60);
    fill(0);
    textSize (15);
    noStroke();
    text ("Angry, Frustrated, Grumpy", 82, 546);
    stroke(0);

}

function draw(){
    fill (0);
    textSize(11);
    text ("1", 291,63);

    fill (0);
    textSize(11);
    text ("2", 20,103);
    text ("3", 65,103);
    text ("4", 111,103);
    text ("5", 155,103);
    text ("6", 202,103);
    text ("7", 246,103);
    text ("8", 291,103);

    fill (0);
    textSize(11);
    text ("9", 20,143);
    text ("10", 65,143);
    text ("11", 111,143);
    text ("12", 155,143);
    text ("13", 202,143);
    text ("14", 246,143);
    text ("15", 291,143);

    fill (0);
    textSize(11);
    text ("16", 20,183);
    text ("17", 65,183);
    text ("18", 111,183);
    text ("19", 155,183);
    text ("20", 202,183);
    text ("21", 246,183);
    text ("22", 291,183);

    fill (0);
    textSize(11);
    text ("23", 20,223);
    text ("24", 65,223);
    text ("25", 111,223);
    text ("26", 155,223);
    text ("27", 202,223);
    text ("28", 246,223);
    text ("29", 291,223);

    fill (0);
    textSize(11);
    text ("30", 20,263);
    text ("31", 65,263);

}

function touchStarted(){
    //emotions
    if (mouseX > 0 && mouseX < 350 && mouseY > 310 && mouseY < 350){
        fill (116, 252, 118);
        rect (287, 90, 47, 40);
    }
    else if (mouseX > 0 && mouseX < 350 && mouseY > 352 && mouseY < 392){
        fill (186, 255, 187);
        rect (287, 90, 47, 40);
    }
    else if (mouseX > 0 && mouseX < 350 && mouseY > 394 && mouseY < 434){
        fill (250, 252, 116);
        rect (287, 90, 47, 40);
    }
    else if (mouseX > 0 && mouseX < 350 && mouseY > 436 && mouseY < 476){
        fill (201, 201, 201);
        rect (287, 90, 47, 40);
    }
    else if (mouseX > 0 && mouseX < 350 && mouseY > 478 && mouseY < 518){
        fill (143, 184, 235);
        rect (287, 90, 47, 40);
    }
    else if (mouseX > 0 && mouseX < 350 && mouseY > 520 && mouseY < 560){
        fill (237, 104, 104);
        rect (287, 90, 47, 40);
    }
   
}