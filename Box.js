//create the box class
class Box extends BaseClass 
{
  constructor(x, y, width, height)
  {
    // call the function from the parent class
    super(x,y,width,height);
    //load the image for the  box
    this.image = loadImage("sprites/wood1.png");
  }

};
