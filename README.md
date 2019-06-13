# DAT505CODING ASSIGNMENT
## B161006064 ZiyuDong
## NUA Student ID:B161006064
### https://github.com/Blue-98/DAT505CODING

## What is my project
My homework is to use the mouse click to refresh the page object shape and color will immediately change. I refer to an example of an electronic screen used to introduce astronomical knowledge when going to the astronomy museum to see an exhibition. Different cosmic galaxies appear when visitors touch the screen.Video is used on many websites to show the magic of the universe. Due to my limited ability, I used the code to change the shape, color and arrangement of objects. Make the final project look like a simple cosmic galaxy.


## Ideas and methods
```
var geometry = new THREE.BoxGeometry(50, 50, 50);

var geometry1 = new THREE.SphereGeometry(50, 130, 100,300, 30, 100,1);



var geometry2 = new THREE.SphereGeometry(10, 30, 30);

```
Create the geometry of the different shapes I need.


```
function getRandomColor() {

    return '#' +
        (function(color) {
            return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color);
        })('');
}
```
This code defines that the colors of all the geometry in my project are random.

```
function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}
var  meshList= new Object();
```
This code defines that the number of spheres and triangles in the project is random each time.

```
for (var x=0;x<3;x++){

    for (var y=0;y<3;y++){

        for (var z=0;z<3;z++){
```
Define the number of geometries on each axis of the xyz axis, the same number of geometries on each axis.

```
var geometry = new THREE.BoxGeometry(50, 50, 50);
          var n=random(0,6);

         if (n==0) {
             var rectShape= new THREE.Shape();
             rectShape.moveTo(10,10);
             rectShape.lineTo(10, 80);
             rectShape.lineTo(50, 80);
             rectShape.lineTo(50, 40);
             rectShape.lineTo(30, -40);
             rectShape.lineTo(10, 40);
             geometry = new THREE.ShapeGeometry( rectShape )
         }else  if (n==1) {
             geometry = new THREE.SphereGeometry(30, 30, 30);

         }else  if (n==2) {
             geometry =new THREE.TorusKnotGeometry(30, 0.5, 50, 20);


         }else  if (n==3) {
             geometry =new THREE.TorusGeometry(30,10, 10, 10);
         }else  if (n==4) {
             geometry =new THREE.TetrahedronGeometry(10);
         }else  if (n==5) {
             geometry = new THREE.BoxGeometry(15, 15, 15);
         }
```
This code defines the shape and size of each object.

```
          mesh.position.z = -600;
          mesh.position.y = -900;
          mesh.position.x = -100;



          mesh.position.z = z*200 -400;
          mesh.position.x = x*220-220 ;
          mesh.position.y = y*200-200;

            console.info(mesh.position);


            scene.add( mesh );


```
This code defines the position and distance of each axis and the geometry on each axis.

```
var key= x+"-"+y+"-"+z;
          meshList[key]=mesh;
```
Final cache object￼

## So what you see now is my final presentation !
