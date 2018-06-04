 function myMove(clss) {
    
     var pos = 0;
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
            character: document.getElementsByClassName("charOne")[0],
            move:setInterval(function(){ frame(char.char1.character,this.constructor.name) }, 3)
        },
        char2 :{
            name: "Lando Calrissian",
            hPoints:100,
            baseAttackPoints:10,
            heroMovement:80,
            villanMovement:50,
            character: document.getElementsByClassName("charTwo")[0]
        },
        char3 :{
            name: "Chewbacca",
            hPoints:80,
            baseAttackPoints:15,
            heroMovement:80,
            villanMovement:50,
            character: document.getElementsByClassName("charThree")[0]
        },
        char4 :{
            name:"Greedo",
            hPoints:250,
            baseAttackPoints:5,
            heroMovement:80,
            villanMovement:50,
            character: document.getElementsByClassName("charFour")[0]
        },
        char5 :{
            name:"kitonak",
            hPoints:70,
            baseAttackPoints:20,
            heroMovement:80,
            villanMovement:50,
            character: document.getElementsByClassName("charFive")[0]
         }
        }
    }
    
        // var hero = document.getElementsByClassName(clss)[0];  
        

    // var id = setInterval(function(){ frame(hero) }, 3);
    // function frame(elem,guy) {
    //     alert(elem);
    //     var characters=["charOne","charTwo","charThree","charFour","charFive"];
    //     movement=80;
    //     upOrDown=pos++
    //     if (upOrDown == movement) {
    //     clearInterval(id);
    //     } else {
    //         elem.style.position ='relative';
    //         elem.style.top=upOrDown+"px";
         
    //         }
    //     }  
   