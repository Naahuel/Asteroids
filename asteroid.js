// Daniel Shiffman
// http://codingrainbow.com
// http://patreon.com/codingrainbow
// Code for: https://youtu.be/hacZU523FyM

function Asteroid(pos, r, size, speed) {
  if (pos == null) {
    pos = createVector(random(width), random(height));
  }

  r = r != null ? r * 0.5 : random(40, 60);
  Entity.call(this, pos.x, pos.y, r);

  this.vel = p5.Vector.random2D();
  this.vel.mult(speed);
  this.total = floor(random(7, 15));

  //smaller asteroids go a bit faster
  this.size = size;
  switch(size) {
    case 1:
      this.vel.mult(1.5*speed); break;
    case 0:
      this.vel.mult(2*speed); break;
  }


  this.offset = [];
  for (var i = 0; i < this.total; i++) {
    this.offset[i] = random(-this.r * 0.2, this.r * 0.5);
  }

  // Calculate minimum and maximum radii squared
  this.rmin2 = Math.pow(this.r + min(this.offset), 2);
  this.rmax2 = Math.pow(this.r + max(this.offset), 2);

  Entity.prototype.setRotation.call(this, random(-0.03, 0.03));

  this.render = function() {
    push();
    stroke(255);
    noFill();
    translate(this.pos.x, this.pos.y);
    rotate(this.heading);
    beginShape();
    for (var i = 0; i < this.total; i++) {
      var angle = map(i, 0, this.total, 0, TWO_PI);
      var r = this.r + this.offset[i];
      vertex(r * cos(angle), r * sin(angle));
    }
    endShape(CLOSE);
    pop();
  }

  this.playSoundEffect = function(soundArray){
    soundArray[floor(random(0,soundArray.length))].play();
  }

  this.breakup = function() {
    if(size > 0)
      return [new Asteroid(this.pos, this.r, this.size-1, speed), new Asteroid(this.pos, this.r, this.size-1, speed)];
    else
      return [];
  }

  this.vertices = function() {
    var vertices = []
    for(var i = 0; i < this.total; i++) {
      var angle = this.heading + map(i, 0, this.total, 0, TWO_PI);
      var r = this.r + this.offset[i];
      vertices.push(p5.Vector.add(createVector(r * cos(angle), r * sin(angle)), this.pos));
    }

    return vertices;
  }
}

Asteroid.prototype = Object.create(Entity.prototype);
