let images = [], e1, e2, e3, transparencySlider;
function preload() {
  e1 = loadImage("images/moon2.jpg");
  e2 = loadImage("images/star1.jpg");
  e3 = loadImage("images/earth3.png");
}
function setup() {
  createCanvas(600, 600);
  background(100, 200, 200);
  images = [e1, e2, e3];
  createButton('click here').position(width / 2 - 40, height / 2).mousePressed(() => {
    tint(255, transparencySlider.value());
    image(random(images), random(width), random(height));
    noTint();
  });
  transparencySlider = createSlider(0, 255, 255).position(10, 10).style('width', '150px');
}











// let images = []; 
// let e1, e2, e3;

// function preload() {

//   e1 = loadImage("images/moon2.jpg"); 
//   e2 = loadImage("images/star1.jpg"); 
//   e3 = loadImage("images/earth3.png");
// }

// function setup() {
//   images.push(e1);
//   images.push(e2);
//   images.push(e3);
//   createCanvas (400, 400);
//   background (100,200,200);
//   let button = createButton('click here');
//     button.position (width/2, height/2);           button.mousePressed(() => {
//   let r = random(images);
// image (r, random (width), random (height));
// });
  
// }




//function setup() {
//  slider = createSlider (0, 255);
//   slider.position (100, 350);
//   slider.size(200)
// }


//function draw() {
//  background();
//  let val = slider.value();
//}