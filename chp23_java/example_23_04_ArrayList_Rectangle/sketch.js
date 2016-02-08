// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 23-4: Super fancy ArrayList and rectangle particle system

// Java Rectangle class is not automatically imported

// Declaring a global variable of type ArrayList
var particles;

// A "Rectangle" will suck up particles
var blackhole;

function setup() {
  createCanvas(480, 270);
  blackhole = new Rectangle(200, 200, 150, 25);
  particles = [];
}

function draw() {
  background(255);

  // Displaying the Rectangle
  stroke(0);
  fill(175);
  rect(blackhole.x, blackhole.y, blackhole.width, blackhole.height);

  // Add a new particle at mouse location
  particles.push(new Particle(mouseX, mouseY));

  // Loop through all Particles
  for (var i = particles.length - 1; i >= 0; i-- ) {
    particles[i].run();
    particles[i].gravity();
    particles[i].display();

    // If the Rectangle contains the location of the Particle, stop the Particle from moving.
    if (blackhole.contains(particles[i].x, particles[i].y)) { 
      particles[i].stop();
    }

    // If the particle is no longer needed, it is deleted from the list
    if (particles[i].finished()) {
      particles.splice(i, 1);
    }
  }
}

function Rectangle(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.width = w;
  this.height = h;

  this.contains = function(x, y) {
    return (x > this.x && x < this.x + this.width &&
            y > this.y && y < this.y + this.height);
  }
}
