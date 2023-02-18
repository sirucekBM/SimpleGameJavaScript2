class Enemy {
    constructor(dimensionX,dimensionY, positionX,positionY,color,speed) {

      //this.container = document.getElementById("container");
      this.container = boxWrapper;
      this.dimensionX = dimensionX;
      this.dimensionY = dimensionY;
      this.positionX = 0;
      this.positionY = 0;
      this.relativeX = positionX;
      this.relativeY = positionY;
      this.color=color;
      this.energie = 100;
      this.speed = speed;
      this.speedX = 0;
      this.counterSmer = 0;
      this.progresBar = 100;

      var newDiv = document.createElement("div");
      newDiv.style.height = this.dimensionY +'px';
      newDiv.style.width = this.dimensionX +'px';
      newDiv.style.background = this.color;
      newDiv.style.position = "absolute";
      newDiv.style.left = this.positionX+'px';
      newDiv.style.top = this.positionY+'px';
      newDiv.style.borderRadius = '0em';
      newDiv.style.padding = 2 +'px';
      newDiv.energie = this.energie;
      this.EnemyX = newDiv;

      var newDivBar = document.createElement("div");
      newDivBar.style.height = 90 +'%';
      newDivBar.style.width = 100 +'%';
      newDivBar.style.background = 'red';

      newDivBar.style.borderRadius = 10 +'px';
      newDivBar.energie = this.barEnergy;
      this.EnemyBar = newDivBar;

      this.EnemyX .appendChild(this.EnemyBar)
      this.container.appendChild(this.EnemyX );

    }				

            UpdateProgresBar(stav){
              let aktualProgres = this.progresBar + stav;
              this.EnemyBar.style.width = aktualProgres +'%';
              this.progresBar = aktualProgres;
              this.energie = this.energie + stav;
            }

            GetEnergie(){
                return this.energie
            }

            PosunXY(){

                this.relativeY = this.relativeY + this.speed;

                
                this.counterSmer +=1;
                if (this.counterSmer > 30){
                  this.speedX = Math.round(Math.random()) * 3-2;
                  this.counterSmer = 0;
                }
                this.relativeX = this.relativeX + this.speedX;


                if(this.relativeX + this.dimensionX  > this.container.clientWidth)this.relativeX  = this.container.clientWidth - this.dimensionX -1;
                if(this.relativeX   < 2 )this.relativeX  = 2;

                if(this.relativeY  + this.dimensionY  > this.container.clientHeight + this.dimensionY ){
                  this.relativeY  = -20;
                  this.energie = this.energie + 20;
                  if(this.energie>100)this.energie = 100;
                  this.EnemyBar.style.width = this.energie +'%';
                  this.progresBar = this.energie;

                  randomSpeed = Math.floor(Math.random() * 1)+1;
                  randomX = Math.floor(Math.random() * (this.container.clientWidth - (this.dimensionX + 4)))+2;
                  this.relativeX = randomX ;
                  this.speed = randomSpeed;

                  this.EnemyX.style.transform = "translate(" + this.relativeX + "px," + this.relativeY + "px)";
                  
                }
                this.EnemyX.style.transform = "translate(" + this.relativeX+ "px," + this.relativeY + "px)";
            }
 
  }