 
  var char ={
        char1 :{
            name:"Malakili",
            hPoints:150,
            baseAttackPoints:9,
            heroMovement:80,
            villanMovement:50,
            //character: document.getElementsByClassName("charOne")[0],
            character: $(".charOne")[0]
            //character: $(".charOne").attr('class')
            // move:setInterval(function(){ frame(char.char1.character,this.constructor.name) }, 3)
        },
        char2 :{
            name: "Lando Calrissian",
            hPoints:100,
            baseAttackPoints:10,
            heroMovement:80,
            villanMovement:50,
            character: $(".charTwo")[0]
        },
        char3 :{
            name: "Chewbacca",
            hPoints:80,
            baseAttackPoints:15,
            heroMovement:80,
            villanMovement:50,
            character: $(".charThree")[0]
        },
        char4 :{
            name:"Greedo",
            hPoints:250,
            baseAttackPoints:5,
            heroMovement:80,
            villanMovement:50,
            character: $(".charFour")[0]
        },
        char5 :{
            name:"kitonak",
            hPoints:70,
            baseAttackPoints:20,
            heroMovement:80,
            villanMovement:50,
            character: $(".charFive")[0]
         }
        }
 
 
 function myMove(clss) {
    
     var pos = 0;
     var posEn1=0;
     var posEn2=0;
     var posEn3=0;
     var posEn4=0;
    // switch(clss) {
    //     case "charOne":
    //     var hero = document.getElementsByClassName(characters+"One")[0];
    //     var villan1 = document.getElementsByClassName(characters+"Two")[0];
    //     var villan2 = document.getElementsByClassName(characters+"Three")[0];
    //     var villan3 = document.getElementsByClassName(characters+"Four")[0];
    //     var villan4 = document.getElementsByClassName(characters+"Five")[0];

    //     var id = setInterval(function(){ frame(hero) }, 3);
    //     var id = setInterval(function(){ frame(villan1) }, 3);

    //         break;
    //     case "charTwo":
    //         operator="-";
    //         break;
    //     case "charThree":
    //         operator="*";
    //         break;
    //     case "charFour":
    //         operator="/";
    //         break;
    //     case "charFive":
    //         operator="^";
    //         break;
            
    // }
    var char ={
        char1 :{
            name:"Malakili",
            hPoints:150,
            baseAttackPoints:9,
            heroMovement:80,
            villanMovement:50,
            //character: document.getElementsByClassName("charOne")[0],
            character: $(".charOne")[0]
            //character: $(".charOne").attr('class')
            // move:setInterval(function(){ frame(char.char1.character,this.constructor.name) }, 3)
        },
        char2 :{
            name: "Lando Calrissian",
            hPoints:100,
            baseAttackPoints:10,
            heroMovement:80,
            villanMovement:50,
            character: $(".charTwo")[0]
        },
        char3 :{
            name: "Chewbacca",
            hPoints:80,
            baseAttackPoints:15,
            heroMovement:80,
            villanMovement:50,
            character: $(".charThree")[0]
        },
        char4 :{
            name:"Greedo",
            hPoints:250,
            baseAttackPoints:5,
            heroMovement:80,
            villanMovement:50,
            character: $(".charFour")[0]
        },
        char5 :{
            name:"kitonak",
            hPoints:70,
            baseAttackPoints:20,
            heroMovement:80,
            villanMovement:50,
            character: $(".charFive")[0]
         }
        }
        
       var clssName= $("."+clss).attr('class');
       clssName=="charOne"?(movement=110,id = setInterval(function(){ frame(char.char1.character,movement) }, 7),enemyId1 = setInterval(function(){ enemy1(char.char2.character) }, 7),enemyId2 = setInterval(function(){ enemy2(char.char3.character) }, 7),enemyId3 = setInterval(function(){ enemy3(char.char4.character) }, 7),enemyId4 = setInterval(function(){ enemy4(char.char5.character) }, 7)):(clssName=="charTwo"?(movement=110,id = setInterval(function(){ frame(char.char2.character,movement) }, 7),enemyId1 = setInterval(function(){ enemy1(char.char1.character) }, 7),enemyId2 = setInterval(function(){ enemy2(char.char3.character) }, 7),enemyId3 = setInterval(function(){ enemy3(char.char4.character) }, 7),enemyId4 = setInterval(function(){ enemy4(char.char5.character) }, 7)):(clssName=="charThree"?(movement=110,id = setInterval(function(){ frame(char.char3.character,movement) }, 7),enemyId1 = setInterval(function(){ enemy1(char.char1.character) }, 7),enemyId2 = setInterval(function(){ enemy2(char.char2.character) }, 7),enemyId3 = setInterval(function(){ enemy3(char.char4.character) }, 7),enemyId4 = setInterval(function(){ enemy4(char.char5.character) }, 7)):(clssName=="charFour"?(movement=110,id = setInterval(function(){ frame(char.char4.character,movement) }, 7),enemyId1 = setInterval(function(){ enemy1(char.char1.character) }, 7),enemyId2 = setInterval(function(){ enemy2(char.char2.character) }, 7),enemyId3 = setInterval(function(){ enemy3(char.char3.character) }, 7),enemyId4 = setInterval(function(){ enemy4(char.char5.character) }, 7)):(clssName=="charFive"?(movement=110,id = setInterval(function(){ frame(char.char5.character,movement) }, 7),enemyId1 = setInterval(function(){ enemy1(char.char1.character) }, 7),enemyId2 = setInterval(function(){ enemy2(char.char3.character) }, 7),enemyId3 = setInterval(function(){ enemy3(char.char4.character) }, 7),enemyId4 = setInterval(function(){ enemy4(char.char2.character) }, 7)):( movement=50,id = setInterval(function(){ frame(char.char2.character,movement) }, 7))))))
        //var enemyId = setInterval(function(){ enemy(char.char2.character) }, 3);
        // var hero = document.getElementsByClassName(clss)[0];  
        

    //var id = setInterval(function(){ frame(hero) }, 3);
    function frame(elem,movement) {
       // alert(pos);
        //var characters=["charOne","charTwo","charThree","charFour","charFive"];
        //var pos=0;
       // movement=80;
        upOrDown=pos++;
        //console.log(upOrDown);
        if (upOrDown == movement) {
        clearInterval(id);
        } 
        else {
            elem.style.position ='relative';
            elem.style.top=upOrDown+"px";
         
            }
            
        }  

        function enemy1(elem,movement) {
            movement=70;
             upOrDown=posEn1++;
             //console.log(upOrDown);
             if (upOrDown == movement) {
             clearInterval(enemyId1);
             } 
             else {
                 elem.style.position ='relative';
                 elem.style.top=upOrDown+"px";
              
                 }
                 
             }  
             function enemy2(elem,movement) {
                movement=70;
                 upOrDown=posEn2++;
                 //console.log(upOrDown);
                 if (upOrDown == movement) {
                 clearInterval(enemyId2);
                 } 
                 else {
                     elem.style.position ='relative';
                     elem.style.top=upOrDown+"px";
                  
                     }
                     
                 } 
                 function enemy3(elem,movement) {
                    movement=70;
                     upOrDown=posEn3++;
                     //console.log(upOrDown);
                     if (upOrDown == movement) {
                     clearInterval(enemyId3);
                     } 
                     else {
                         elem.style.position ='relative';
                         elem.style.top=upOrDown+"px";
                      
                         }
                         
                     }   
                     function enemy4(elem,movement) {
                        movement=70;
                         upOrDown=posEn4++;
                         //console.log(upOrDown);
                         if (upOrDown == movement) {
                         clearInterval(enemyId4);
                         } 
                         else {
                             elem.style.position ='relative';
                             elem.style.top=upOrDown+"px";
                          
                             }
                             
                         }   
   }