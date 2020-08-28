//create a base class and this is the parent class
class BaseClass
{
    constructor(x, y, width, height, angle) 
    {
      //give options to the base
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }

        // create a rectangle body for the base
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        //load an image to the base and add it to the world
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }


      display()
      {

        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();

      }
}