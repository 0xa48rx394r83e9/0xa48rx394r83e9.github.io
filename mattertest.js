// module aliases
// var Engine = Matter.Engine,
//     Render = Matter.Render,
//     World = Matter.World,
//     Bodies = Matter.Bodies;

// // create an engine
// var engine = Engine.create();

// // create a renderer
// var render = Render.create({
//     element: document.body,
//     engine: engine
// });

// // create two boxes and a ground
// var boxA = Bodies.circle(750, 200, 25);
// var ground = Bodies.rectangle(400, 510, 810, 60, { isStatic: true });
// Matter.Body.rotate(ground, 50);
// // add all of the bodies to the world
// World.add(engine.world, [boxA, ground]);

// // run the engine
// Engine.run(engine);

// // run the renderer
// Render.run(render);