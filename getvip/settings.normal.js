// settings for simulation

// setup screen size indep params:
var ref_w = 128;
var ref_h = 128;

var theFrameRate = 30;

// simulation parameters:
var nPerceptionRod = 8*1;
var nActionState = 2; // 2 movements
var nActionRadius = 1.0;
var nActionDistance = 1.0;
var perceptionLengthWall = 12; // each rod is perceptionLength times the diameter of each boid.
var perceptionLengthBoid = 12; // each rod is perceptionLength times the diameter of each boid.
var nBoidsFactor = 0;
var nBoids = 50;
var boidSpeed = 0.6;
var boidSteeringForce = 0.03*2.0;
var wallSpeed = 0.2;
var wallFreq = 30*1.5; // randomly generate a new wall every wallFreq frames
var boidFreq = 30*2; // randomly generate new boids, with a probability of (nBoid - nAlive) / nBoid.
var orientationFreq = 30*2; // randomly changes orientation to preserve symmetry.
var boidRegenerate = false;

var collisionMode = 1; // 1 or 0.  for 1, they colide with each other.
var collisionForceFactor = 4.0;

var boidPerceptionMode = true;
var boidPerceptionStrength = 0.2; // if boid perception intensity * this is greater than wall intensity, replace wall perception with boid
var genSteps = 10; // for training, set > 0
var initialTrain = false;
var loadPretrainedGene = true;
var detailedMode = true;
var drawPerceptionRods = false;
var drawDirectionWheel = false;
var demoMode = true;
var initDemoboids = 24;
var initWalls = 0;

var bestHall = 0; // hall of fame's best
var hideJSONweights = true;

var boidReproduce = false;

var radiusAdult = 1.5;
var radiusBaby = 0.75;
var childhoodLife = 30 * 60; // survive for X second, it becomes adult.

var radiusGrowth = (radiusAdult - radiusBaby) / childhoodLife; // each step, the radius increases by a small amount.

var displayState = 1;
var borders = true;

if (demoMode) {


  hideJSONweights = true;
  displayState = 4;
  initialTrain = false;
  genSteps = 0;
  nBoids = 64; // convnetjs.randi(24, 48);
  ref_w = 96; // convnetjs.randi(64, 96);
  ref_h = ref_w;
  wallFreq = 30*1.5;
  boidRegenerate = false;
  boidReproduce = true;
  boidFreq = 30*2;
  wallSpeed = 0.2;
  initWalls = 3; // number of walls initially placed in the center.
}
