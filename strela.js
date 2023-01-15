class Strela{
    constructor(dimensionX,dimensionY, positionX,positionY,name,color) {
        this.dimensionX = dimensionX;
        this.dimensionY = dimensionY;
        this.positionX = positionX;
        this.positionY = positionY;
        console.log('pozice top střela: ' + positionY);
        this.name=name;
        this.color=color;
        this.energie = 10;
        const container = document.getElementById("container");
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
        this.strelaX = newDiv;
        container.appendChild(this.strelaX);

    }
    posunY(okolik){
        this.positionY = this.positionY - okolik;
        this.strelaX.style.top = this.positionY +'px';
    }
}