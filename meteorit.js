class Meteorit {
    constructor(dimensionX,dimensionY, positionX,positionY,color,speed) {

      this.container = document.getElementById("container");
      this.dimensionX = dimensionX;
      this.dimensionY = dimensionY;
      this.positionX = positionX;
      this.positionY = positionY;
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
      this.MeteoritX = newDiv;
      this.container.appendChild(this.MeteoritX );

    }				

            PosunXY(){

                this.positionY= this.positionY + this.speed;

                if(this.positionX + this.dimensionX  > this.container.clientWidth)this.positionX = this.container.clientWidth - this.dimensionX -1;
                if(this.positionX  < 2 )this.positionX = 2;

                if(this.positionY + this.dimensionY  > this.container.clientHeight + this.dimensionY ){
                  this.positionY = -20;
                  randomSpeed = Math.floor(Math.random() * 3)+1;
                  randomX = Math.floor(Math.random() * (this.container.clientWidth - (this.dimensionX + 4)))+2;
                  this.positionX = randomX ;
                  this.speed = randomSpeed;
                  this.MeteoritX .style.left = this.positionX + 'px';
                  
                }
                //this.MeteoritX.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
                this.MeteoritX .style.top = this.positionY + 'px';
                

            }
 
  }