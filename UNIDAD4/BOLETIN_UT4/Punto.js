class Punto{
    constructor(x,y){
        this.x=x;
        this.y=y;
    };
    cuadrante = ()=>{
        if ( this.x > 0 && this.y > 0){
            console.log("El punto esta en el cuadrante 1");
            document.write("El punto esta en el cuadrante 1");
        } else if ( this.x < 0 && this.y > 0 ){
            console.log("El punto esta en el cuadrante 2");
            document.write("El punto esta en el cuadrante 2");
        } else if ( this.x < 0 && this.y < 0 ){
            console.log("El punto esta en el cuadrante 3");
            document.write("El punto esta en el cuadrante 3");
        } else if ( this.x > 0 && this.y < 0 ){
            console.log("El punto esta en el cuadrante 4");
            document.write("El punto esta en el cuadrante 4");
        } else if ( this.x == 0 && this.y == 0 ){
            console.log("El punto esta sobre el origen");
            document.write("El punto esta sobre el origen");
        } else if ( this.x == 0 || this.y == 0 ){
            console.log("El punto esta sobre un eje");
            document.write("El punto esta sobre un eje");
        } 
    }
}