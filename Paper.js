class Paper{
    constructor(x,y,radius){
        var options = {
            restitution : 2.0,
            friction : 5.0,
            density : 2.0
        }
        this.body = Bodies.circle(x,y,radius)
        this.radius = radius
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        push()
        ellipseMode(CENTER)
        ellipse(pos.x,pos.y,this.radius)
        pop()
    }
}