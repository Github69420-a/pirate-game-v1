const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;
var background;
var ground;
var tower;
var cannon;

function preload() {
    backgroundImg = loadImage("assets/background.gif");
}

function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;
    //var background = createSprite(500,250);
    //background.addIamge(backgroundImg);
    ground = new Ground(500, 500, 1000, 10);
    tower = new Tower(50, 115, 160, 310)
    cannon = new Cannon(125, 120, 130, 150, PI/4);
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    ground.display();
    tower.display();
    cannon.display();
}
