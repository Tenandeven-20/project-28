class Stone{

    constructor(x,y,radius)
    {
        var options = {
            restitution : 0,
            friction : 1.0,
            isStatic: false
        }
        this.body = Bodies.circle(x, y,radius, options);
        this.radius = radius;
        this.image = loadImage("stone.png");
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        push();
        translate(pos.x, pos.y);
        imageMode(RADIUS);
        fill("red");
        image(this.image,0, 0, this.radius,this.radius);
        pop();
      }
    };













