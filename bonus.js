class Bonus{
    constructor(dimensionX,dimensionY, positionX,positionY,color) {
        this.dimensionX = dimensionX;
        this.dimensionY = dimensionY;
        this.positionX = 0;
        this.positionY = 0;
        this.relativeX = positionX;
        this.relativeY = positionY;
        this.color=color;
        this.energie = 20;
        this.showTime = Math.floor(Date.now() / 1000); 
        //const container = document.getElementById("container");
        this.container = boxWrapper;
        var newDiv = document.createElement("div");
        newDiv.style.height = this.dimensionY +'px';
        newDiv.style.width = this.dimensionX +'px';
        newDiv.style.background = this.color;
        newDiv.style.position = "absolute";
        newDiv.style.left = this.positionX+'px';
        newDiv.style.top = this.positionY+'px';
        newDiv.style.borderRadius = '5em';
        newDiv.style.visibility='hidden';
        newDiv.energie = this.energie;
        this.BonusX = newDiv;
        this.BonusX.style.transform = "translate(" + this.relativeX + "px," + this.relativeY + "px)";
        container.appendChild(this.BonusX);
    }

    ShowBonus(){
        this.BonusX.style.visibility='visible';
    }
}