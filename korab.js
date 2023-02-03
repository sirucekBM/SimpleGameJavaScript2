class Korab {
    constructor(dimensionX,dimensionY, positionX,positionY,name,color) {

      this.container = document.getElementById("container");
      this.dimensionX = dimensionX;
      this.dimensionY = dimensionY;
      this.positionX = 0;
      this.positionY = 0;
      this.relativeX = positionX;
      this.relativeY = positionY;
      this.name=name;
      this.color=color;
      this.energie = 10;
      this.seznamStrel = [];
      this.zasobnik = 100;

      var newDiv = document.createElement("div");
      newDiv.style.height = this.dimensionY +'px';
      newDiv.style.width = this.dimensionX +'px';
      newDiv.style.background = this.color;
      newDiv.style.position = "absolute";
      newDiv.style.left = this.positionX+'px';
      newDiv.style.top = this.positionY+'px';
      newDiv.style.borderRadius = '2em';
      newDiv.style.transform = "translate(" + this.relativeX + "px," + this.relativeY + "px)";
      newDiv.setAttribute("name",this.name);
      newDiv.energie = this.energie;
      this.KorabX = newDiv;
      this.container.appendChild(this.KorabX);

    }				
            DejToTam(){
                this.container.appendChild(this.KorabX);
            }

            PosunXY(kam, okolik){
                
                console.log('pozice korábu: ' +this.relativeY);
                console.log('boxWraper: ' + this.container.clientWidth);
                console.log('boxWraper offset: ' + this.container.offsetWidth);
                console.log('objekt left: ' + this.relativeX);

                if(kam=="L")this.relativeX = this.relativeX - okolik;
                if(kam=="R")this.relativeX = this.relativeX + okolik;
                if(kam=="U")this.relativeY = this.relativeY - okolik;
                if(kam=="D")this.relativeY = this.relativeY + okolik;

                if(this.relativeX + this.dimensionX  > this.container.clientWidth)this.relativeX = this.container.clientWidth - this.dimensionX -1
                if(this.relativeX  < 2 )this.relativeX = 2;
                if(this.relativeY + this.dimensionY  > this.container.clientHeight)this.relativeY = this.container.clientHeight - this.dimensionY -1
                if(this.relativeY  < 10 )this.relativeY = 10;

                this.KorabX.style.transform = "translate(" + this.relativeX + "px," + this.relativeY + "px)";

                //this.KorabX.style.left = this.positionX+'px';
                //this.KorabX.style.top = this.positionY+'px';

            }

            updateZasobnik(naboje){
                this.zasobnik += naboje;
            }

            vystrel(){
                if (this.zasobnik > 0)
                {
                    let pX = this.relativeX+ (this.dimensionX/2);
                    let pY = this.relativeY-1
                    var strela = new Strela(2,10,pX,pY,'s','red');
                    this.seznamStrel.push(strela);
                    this.zasobnik -= 1;
                }
            }

            pohybStrely(){
                for ( var s=0; s < this.seznamStrel.length; s++ ) {
                    this.seznamStrel[s].posunY(10);
                    if(this.seznamStrel[s].relativeY < 5){
                        this.seznamStrel[s].StrelaX.remove();
                        this.seznamStrel.splice(s, 1);

                    }
                }
            }



            getSeznamStrel(){
                return this.seznamStrel;
            }

            getStav() {
              console.log(`Obj stav: ${this.newDiv}`);
            };
            
  }