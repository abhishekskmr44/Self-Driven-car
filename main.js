const canvas = document.getElementById("myCanvas");

canvas.height = window.innerHeight

canvas.width = 200

const ctx = canvas.getContext("2d");


/****Setting boundaries of road*****/
const road = new Road(canvas.width/2,canvas.width*0.9);


/*x,y,width,height**/ 
const car = new Car(road.getLaneCenter(1),100,30,50);

/**car is yet not here * */
animate();

function animate(){
    car.update();
    /**resizing this way will make it clear and clean and won't elongate the car */
    canvas.height = window.innerHeight
 
    ctx.save();
  /*********Drone camera footage technique***********/
    ctx.translate(0,-car.y+canvas.height*0.5)


    /*****buiding Road******/
    road.draw(ctx);

    /*****manufacturing car******/
    car.draw(ctx);
    

   /*********Drone camera footage technique***********/
    ctx.restore();     
   
   
    /**it looks many times again and again, it gives the illusion of movement */
    requestAnimationFrame(animate);
}