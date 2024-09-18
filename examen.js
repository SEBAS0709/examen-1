
class FiguraGeometrica{
    calcularArea() {
    }
}
class Cuadrado extends FiguraGeometrica{
    constructor(lado){
        super();
        this.lado =lado;
    }
    calcularArea(){
        return this.lado * this.lado;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor(base, altura){
        super();
        this.base =base;
        this.altura =altura;
 }
    calcularArea(){
        return (this.base * this.altura)/2;
    }
}
class Rectangulo extends FiguraGeometrica{
    constructor(base, altura){
        super();
        this.base =base;
        this.altura =altura;
    }
    calcularArea(){
        return this.base *this.altura;
    }
}
function clasificarFigura(figura){
    const area =figura.calcularArea();
    if (area < 20) {
        return "Pequeña";
    }else {
        return "Grande";
}
}
const cuadrado = new Cuadrado(4);
const triangulo = new Triangulo(3, 5);
const rectangulo = new Rectangulo(8, 6);
console.log(`cuadrado: area  ${cuadrado.calcularArea()} -clasificacion  ${clasificarFigura(cuadrado)}`);
console.log(`triangulo: area  ${triangulo.calcularArea()} -clasificacion  ${clasificarFigura(triangulo)}`);
console.log(`rectangulo: area  ${rectangulo.calcularArea()} -clasificacion  ${clasificarFigura(rectangulo)}`);