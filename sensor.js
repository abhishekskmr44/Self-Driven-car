/*******Sensor to detect collision etc*********/
class Sensor {
    constructor(car){
     this.car = car;
     /****Sensor rays****/
     this.rayCount  = 3;
     this.rayLength = 100;
     /////////////Pi by 4 = 45 degrees////////////////////
     this.raySpread = Math.PI/4;


     this.rays=[];

    }

    update() {
        this.rays = [];
        for(let i=0; i<this.rayCount;i++){
            const rayAngle = lerp(
                this.raySpread/2,
                -this.raySpread/2,
                i/(this.rayCount-1)
            )+this.car.angle;


            /*****Starting point of ray***** */

            const start = {x:this.car.x, y:this.car.y};
            const end = {
                x:this.car.x-
                Math.sin(rayAngle)*this.rayLength,

                y:this.car.y-
                Math.cos(rayAngle)*this.rayLength
            };

            this.rays.push([start,end])
        }

    }
   /*********rays**************/
        draw(ctx){
            for(let i=0; i<this.rayCount; i++){
                ctx.beginPath();
                ctx.lineWidth = 2;

                /*****color of rays*****/
                ctx.strokeStyle = "Red";

                ctx.moveTo(
                    this.rays[i][0].x,
                    this.rays[i][0].y
                );
                /////end location////////
                 ctx.lineTo(
                    this.rays[i][1].x,
                    this.rays[i][1].y
                 );
                 ctx.stroke();

            }
        }
    }
