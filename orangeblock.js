class OrangeBlock extends Block{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(255, 161, 0)
       // super.display();

       if(this.body.speed < 8){
        super.display();
      }
      else {
        World.remove(world, this.body);
        push();
        this.visibility = this.visibility - 5;
        tint(255, this.visibility);
        
        pop();
      }

        
    }
}