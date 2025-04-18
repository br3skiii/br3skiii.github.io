$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);
 
 
  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
 
 
    // Create walls - do not delete or modify this code
    createPlatform(-50, -40, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 200); // right wall
 
 
    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
 
 
    // TODO 1 - Enable the Grid
    // toggleGrid();
 
 
 
 
    // TODO 2 - Create Platforms
    createPlatform(500, 100, 300, 20, "red");
    createPlatform(400, 100, 300, 10, "black");
    createPlatform(45, 300, 200, 20, "blue");
    createPlatform(999, 200, 100, 10);
    createPlatform(300, 535, 200, 20, "pink");
    createPlatform(600, 610, 200, 20, "blue");
    createPlatform(400, 400, 100, 10, "purple");
    // TODO 3 - Create Collectables
    createCollectable("steve", 1090, 50);
 createCollectable("diamond", 200, 170, 0.5, 0.7);
 createCollectable("grace", 500, 570, 0.5, 0.7);
 
 
 
   
    // TODO 4 - Create Cannons
    createCannon("top", 200, 900);
    createCannon("left", 768, 1000);
    createCannon("top", 600, 1200);
    createCannon("right", 300, 2000);
    createCannon("down",200, 1000);

    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }
 
 
  registerSetup(setup);
 });
 
 