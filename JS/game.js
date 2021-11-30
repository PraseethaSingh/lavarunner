class Game{
    constructor(){

    }
    

    getState(){
        var gameStateref = database.ref("gameState")
        gameStateref.on("value",function(data){gameState=data.val();}) 
        
    }

    

       

        update (state){
            database.ref('/').update({gameState:state})
        }
        
        begin (){
            if(gameState === 0){
                player = new Player()
                player.getCount()
                form = new Form()
                form.display();
               
            }
            

     
            //adding character 1 & 2 to array
           // characters =[character1,character2]
           

           character1 = createSprite(30,260);
           character1.addAnimation("running",characterimg1);
           character1.scale = 0.3;
        
           character2 = createSprite(30,380)
           character2.addAnimation("walking",characterimg2);
           character2.scale = 0.3
           
           
       

            
        }   
        
        play(){
             form.hide();
             textSize(30);
             text("Game Start", 120, 100)
             
            
             Player.getPlayerInfo();
             console.log(allPlayers)
             if(allPlayers !== undefined){
                var index = 0
                var x;
                var y =0;
                image(background1,0,0,displayWidth*4,displayHeight)

               
                  for(var plr in allPlayers){
                           
                           index = index+1;
                 //          character1.x = displayWidth - allPlayers[plr].distance
                   //        character2.x = displayWidth - allPlayers[plr].distance
                           y = y + 200;
                           console.log(character1.x)

         //              if(index === player.index){
           //               camera.position.x = character1.x
             //             camera.position.y = displayHeight/2
               //         }
                           
                        console.log(player.index)
                      
                      if(player.index === 1){
                          character1.x = displayWidth - allPlayers[plr].distance
                          camera.position.x = character1.x
                          camera.position.y = displayHeight/2
                      }
                      if(player.index === 2){
                        character2.x = displayWidth - allPlayers[plr].distance
                        camera.position.x = character2.x
                        camera.position.y = displayHeight/2
                    }
                        if(keyWentDown(RIGHT_ARROW) && player.index !== null){
                            console.log("distance loop")
                            player.distance +=20
                            player.update(); 
                           } 

        }


     
    }

        
        

           drawSprites()
           
  }


}