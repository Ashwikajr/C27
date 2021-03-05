class Slingshot{
    constructor(bodyA,bodyB){
     var option ={
         bodyA:bodyA,
         bodyB:bodyB,
         stiffness:0.2,
         length:10,

     }
     this.sling=Constraint.create(option);
     World.add(world,this.sling);
    
    }
     display() {
         var pa =this.sling.bodyA.position;
         var pb =this.sling.bodyB.position;
         strokeWeight(4);
         line(pa.x,pa.y,pb.x,pb.y);
        
    }

}