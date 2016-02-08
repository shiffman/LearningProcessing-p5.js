// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 23-2: Simple particle system with ArrayList

var particles;

function setup() {
  createCanvas(480, 270);
  particles = [];
}

function draw() {
  // A new Particle object is added to the ArrayList every cycle through draw().
  particles.push(new Particle()); 

  background(255);
  // Iterate through our ArrayList and get each Particle
  // The ArrayList keeps track of the total number of particles.
  particles.forEach(runParticle);

  function runParticle(p) {
    p.run();
    p.gravity();
    p.display();
  }

  // If the ArrayList has more than 100 elements in it, we delete the first element, using remove().
  if (particles.length > 100) {
    particles.splice(0, 1);
  }
}
