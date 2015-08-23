// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 14-18: Object-oriented solar system

function Planet(tempDistance, tempDiameter) {
  // Each planet object keeps track of its own angle of rotation.
  this.theta = 0;                       // Rotation around sun
  this.diameter = tempDiameter;         // Size of planet
  this.distance = tempDistance;         // Distance from sun
  this.orbitspeed = random(0.01, 0.03); // Orbit speed

  this.update = function() {
    // Increment the angle to rotate
    this.theta += this.orbitspeed;
  }

  this.display = function() {
    // Before rotation and translation, the state of the matrix is saved with push().
    push(); 
    // Rotate orbit
    rotate(this.theta); 
    // Translate out distance
    translate(this.distance, 0); 
    stroke(0);
    fill(175);
    ellipse(0, 0, this.diameter, this.diameter);
    // Once the planet is drawn, the matrix is restored with pop() so that the next planet is not affected.
    pop();
  }
}

