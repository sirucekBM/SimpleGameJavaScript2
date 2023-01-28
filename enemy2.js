class Enemy2 {
    constructor(dimensionX,dimensionY, positionX,positionY,color,speed) {

      this.container = document.getElementById("container");
      this.dimensionX = dimensionX;
      this.dimensionY = dimensionY;
      this.positionX = 0;
      this.positionY = 0;
      this.relativeX = positionX;
      this.relativeY = positionY;
      this.color=color;
      this.energie = 3;
      this.speed = speed;

      var newDiv = document.createElement("div");
      newDiv.style.height = this.dimensionY +'px';
      newDiv.style.width = this.dimensionX +'px';
      newDiv.style.background = this.color;
      newDiv.style.position = "absolute";
      newDiv.style.left = this.positionX+'px';
      newDiv.style.top = this.positionY+'px';
      newDiv.style.borderRadius = '0em';
      newDiv.energie = this.energie;
      this.EnemyX = newDiv;
      this.container.appendChild(this.EnemyX );

    }				

            PosunXY(){

                this.relativeY = this.relativeY + this.speed;

                if(this.relativeX + this.dimensionX  > this.container.clientWidth)this.relativeX  = this.container.clientWidth - this.dimensionX -1;
                if(this.relativeX   < 2 )this.relativeX  = 2;

                if(this.relativeY  + this.dimensionY  > this.container.clientHeight + this.dimensionY ){
                  this.relativeY  = -20;
                  randomSpeed = Math.floor(Math.random() * 3)+1;
                  randomX = Math.floor(Math.random() * (this.container.clientWidth - (this.dimensionX + 4)))+2;
                  this.relativeX = randomX ;
                  this.speed = randomSpeed;

                  this.EnemyX.style.transform = "translate(" + this.relativeX + "px," + this.relativeY + "px)";
                  
                }
                this.EnemyX.style.transform = "translate(" + this.relativeX+ "px," + this.relativeY + "px)";

              
            }
 
  }