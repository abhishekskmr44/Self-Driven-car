class Car{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed = 0;
        this.accelaration = 0.2;
        /**to stop the car from going too fast */
        this.maxSpeed = 3;
        this.friction =0.05;
        this.angle = 0;

/****************sensor***********/
this.sensor = new Sensor(this);


        /**pretending controls**/
        this.controls = new Controls()
    }

/**this will elongate the car */
    update(){
        /******method to move the car***** */
         this.#move();

         this.sensor.update();
    }

    #move(){
        if(this.controls.forward){
            this.speed+=this.accelaration;
        }
        if(this.controls.reverse){
            this.speed -= this.accelaration;
        }
        
        if(this.speed>this.maxSpeed){
            this.speed=this.maxSpeed
        }
        /**backgear */
        if(this.speed<-this.maxSpeed/2){
            this.speed =-this.maxSpeed/2;
        }

        /**friction */
        if(this.speed>0){
            this.speed-=this.friction;
        }
        /**friction */ 
         if(this.speed<0){
            this.speed+=this.friction;
         }

         /**To stop the slight movement after releasing keys */

         if(Math.abs(this.speed)<this.friction){
            this.speed = 0;
         }
         

         /******impelementing left and right controls*********/
          
         /*********to turn it left and right correctly in backgear*********/
         if(this.speed!=0){
           const flip = this.speed>0?1:-1;

            if(this.controls.left){
             this.angle+=0.03*flip;
          }
          
          if(this.controls.right){
             this.angle-=0.03*flip;
          }
         }
         /*****this will prevent the car from moving up and down after the head is tilt*****/
         /**It'll move where it's head is oriented***/
         
         this.x -=Math.sin(this.angle)*this.speed;
         this.y -=Math.cos(this.angle)*this.speed;
        
    }

    /**draw is a method* */
    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore();

        this.sensor.draw(ctx);
    }
}