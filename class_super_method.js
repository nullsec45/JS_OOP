class Shape{
    paint(){
        console.info("Paint Shape");
    }
}
class Circle extends Shape{
    paint(){
        console.info("Paint circle");
    }
    paintMethodParent(){
        super.paint();
    }
}
const circle=new Circle();
circle.paint();
// circle.paintMethodParent();