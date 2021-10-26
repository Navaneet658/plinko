class Plinko {
    constructor(x,y) {
        var options = {
            isStatic: true,
            'restitution': 0.3,
            'friction':0.5,
            'density':1.2
        }
        this.radius = 10;
        this.body = Bodies.circle(x,y,this.radius, options);
        

        World.add(world, this.body);
    }
    display(){
        var angle=this.body.angle;
        push ();
        translate (this.body.position.x, this.body.position.y);
    rotate (angle);
        ellipseMode(RADIUS);

        fill("White");

        ellipse(0,0, this.radius,this.radius);
        pop ();

    }       
};