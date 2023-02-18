class Strela{
    constructor(dimensionX,dimensionY, positionX,positionY,name,color) {
        this.dimensionX = dimensionX;
        this.dimensionY = dimensionY;
        this.positionX = 0;
        this.positionY = 0;
        this.relativeX = positionX;
        this.relativeY = positionY;
        this.name=name;
        this.color=color;
        this.energie = 10;
        //const container = document.getElementById("container");
        this.container = boxWrapper;
        var newDiv = document.createElement("div");
        newDiv.style.height = this.dimensionY +'px';
        newDiv.style.width = this.dimensionX +'px';
        newDiv.style.background = this.color;
        newDiv.style.position = "absolute";
        newDiv.style.left = this.positionX+'px';
        newDiv.style.top = this.positionY+'px';
        newDiv.style.borderRadius = '2em';
        newDiv.className = "s";
        newDiv.setAttribute("name",this.name);
        newDiv.energie = this.energie;
        this.StrelaX = newDiv;
        this.StrelaX.style.transform = "translate(" + this.relativeX + "px," + this.relativeY + "px)";
        container.appendChild(this.StrelaX);

    }
    posunY(okolik){
        this.relativeY  -= okolik;
        this.StrelaX.style.transform = "translate(" + this.relativeX + "px," + this.relativeY + "px)";
    }
}