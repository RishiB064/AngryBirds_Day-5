// create a bird class 
class Bird extends BaseClass 
{

  constructor(x,y)
  {
    //call the constructor of parent class
    super(x,y,50,50);
    //load the image to the bird
    this.image = loadImage("sprites/bird.png");
  }

  display() 
  {
    // call the display function from the parent class
    super.display();
  }
}
