const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine,world
var dustbin1,paper1,launcher1

function setup(){
createCanvas(1200,600)    

engine = Engine.create()
world = engine.world

 dustbin1 = new Dustbin(500,500,50,50)
 paper1 = new Paper(100,200,20)
 launcher1 = new Launcher(paper1.body,{x:100,y:100})

}

function draw(){
background("white")
Engine.update(engine)
dustbin1.display()
paper1.display()
launcher1.display()
}

function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
launcher1.fly()
}