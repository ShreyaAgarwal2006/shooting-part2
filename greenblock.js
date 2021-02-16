class GreenBlock extends Block{
    constructor(x,y){
        super(x,y,20,30);
    }

    display(){
        fill(4, 255, 0)
        //super.display();

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