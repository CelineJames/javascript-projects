const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const width = 800;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create( {
  element: document.body,
  engine: engine,
  options: {
    wireframes: false,
    width,
    height
  }
}); 
Render.run(render);
Runner.run(Runner.create(), engine);

World.add(world, MouseConstraint.create(engine, {                       
    Mouse: Mouse.create(render.canvas)                             
}));                                                         //click and drag code for the shapes. 

// Walls
const walls = [
  Bodies.rectangle(400, 0, 800, 40, { isStatic: true }),  // x-axis, y-axis, lenght, breadth.
  Bodies.rectangle(400, 600, 800, 40, { isStatic: true }),
  Bodies.rectangle(0, 300, 40, 600, { isStatic: true }),
  Bodies.rectangle(800, 300, 40, 600, { isStatic: true })
];
World.add(world, walls);


// Shapes

for (let i = 0; i < 20; i++) {
    if (Math.random() > 0.5) {
        World.add( world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50));
    } else {
        World.add( world, Bodies.circle(Math.random() * width, Math.random() * height, 35, {
            render: {
                fillStyle: 'red'
            }
        }));
    }
}
