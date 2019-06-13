// -----------------------------------------------------------------------------
// BASIC SETUP
// ------------------------------------------------

// Create an empty scene --------------------------
var scene = new THREE.Scene();

// Create a basic perspective camera --------------
camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 1, 10000000 );


camera.position.set(0,0,10)


// Create a renderer with Antialiasing ------------
var renderer = new THREE.WebGLRenderer({antialias:true});

// Configure renderer clear color
renderer.setClearColor("#A9A9A9");

// Configure renderer size
renderer.setSize( window.innerWidth, window.innerHeight );

// Append Renderer to DOM
document.body.appendChild( renderer.domElement );

// Configure lights -------------------------------
var light1 = new THREE.AmbientLight(0xFFFF00, 0.5);

light1.position.set(0,10,10);


scene.add(light1);

var light2 = new THREE.PointLight(0x3CB371, 0.5);
scene.add(light2);



// ------------------------------------------------

// -----------------------------------------------------------------------------

// ------------------------------------------------
// Main Content
// ------------------------------------------------

// Create a Cube Mesh with basic material ---------
var geometry = new THREE.BoxGeometry(50, 50, 50);

var geometry1 = new THREE.SphereGeometry(50, 130, 100,300, 30, 100,1);



var geometry2 = new THREE.SphereGeometry(10, 30, 30);

// MATERIAL 1:
//var material = new THREE.MeshBasicMaterial( { color: "#433F81" } );

//MATERIAL 2:
//var material = new THREE.MeshNormalMaterial();

//MATERIAL 3:
/*
var material = new THREE.MeshLambertMaterial({
  color: "#433F81",
  transparent: true,
  opacity: 1
});
*/

//MATERIAL 4:
//var material = new THREE.MeshPhongMaterial({shininess: 1});

//MATERIAL 5 (non-shiny material):

var material = new THREE.MeshLambertMaterial({
    color: 'red',
    lightMap: null,
    lightMapIntensity: 0,
    emissive: 0x000000,
    emissiveMap: null,
    emissiveIntensity: 1,
    specularMap: null
});


var material1 = new THREE.MeshLambertMaterial({
    color: 'green',
    lightMap: null,
    lightMapIntensity: 0,
    emissive: 0x000000,
    emissiveMap: null,
    emissiveIntensity: 1,
    specularMap: null
});

/*
var material2 = new THREE.MeshLambertMaterial({
  color: 'blue',
  lightMap: null,
  lightMapIntensity: 0,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});


var material3 = new THREE.MeshLambertMaterial({
  color: 'Cyan',
  lightMap: null,
  lightMapIntensity: 1,
  emissive: 0x000000,
  emissiveMap: null,
  emissiveIntensity: 1,
  specularMap: null
});*/


/*
//MATERIAL 6 (shiny material):
var material = new THREE.MeshPhongMaterial({
  color: 0xF3FFE2,
  specular: 0xffffff,
  shininess: 1000,
  lightMap: null,
  lightMapIntensity: 1,
  bumpMap: null,
  bumpScale: 1,
  normalMap: null,
  normalScale: 1,
  displacementMap: null,
  displacementScale: 1,
  displacementBias: 0,
  specularMap: null
});
*/

/*
//MATERIAL 6 (combination of shiny + non-shinny):
var material = new THREE.MeshStandardMaterial({
  color: 0xF3FFE2,
  roughness: 0.5,
  metalness: 0.5
});
*/

/*
//MATERIAL 7 (physical-based material)
var material = new THREE.MeshPhysicalMaterial({
  color: 0xF3FFE2,
  roughness: 0,
  metalness: 0.5,
  reflectivity: 0.5,
  clearCoat: 0,
  claerCoatRoughness: 0
});
*/

var mesh1 = new THREE.Mesh( geometry, material );
mesh1.position.z = -1000;
mesh1.position.y = -100;
mesh1.position.x = 0;

var mesh2 = new THREE.Mesh( geometry1, material1 );
mesh2.position.z = -1000;
mesh2.position.x = -200;
mesh2.position.y = 100;
/*
var mesh3 = new THREE.Mesh( geometry2, material2 );
mesh3.position.z = -1000;
mesh3.position.x = -200;
mesh3.position.y = 100;

var mesh4 = new THREE.Mesh( geometry, material3 );
mesh4.position.z = -1000;
mesh4.position.x = 100;
mesh4.position.y = 200;
*/

/*var mesh5 = new THREE.Mesh( geometry, material );
mesh5.position.z = -1000;
mesh5.position.x = 200;
mesh5.position.y = 100;

var mesh6 = new THREE.Mesh( geometry, material );
mesh6.position.z = -1000;
mesh6.position.x = 0;
mesh6.position.y = -100;

var mesh7 = new THREE.Mesh( geometry, material );
mesh7.position.z = -1000;
mesh7.position.x = -100;
mesh7.position.y = 0;

var mesh8 = new THREE.Mesh( geometry, material );
mesh8.position.z = -1000;
mesh8.position.x = -200;
mesh8.position.y = -100;

var mesh9 = new THREE.Mesh( geometry, material );
mesh9.position.z = -1000;
mesh9.position.x = 100;
mesh9.position.y = 0;

var mesh10 = new THREE.Mesh( geometry, material );
mesh10.position.z = -1000;
mesh10.position.x = 200;
mesh10.position.y = -100;

var mesh11 = new THREE.Mesh( geometry, material );
mesh11.position.z = -1000;
mesh11.position.x = -100;
mesh11.position.y = -200;

var mesh12 = new THREE.Mesh( geometry, material );
mesh12.position.z = -1000;
mesh12.position.x = 100;
mesh12.position.y = -200;*/
// ------------------------------------------------

// Add mesh to scene
/*scene.add( mesh1 );*/

/*scene.add( mesh2 );*/
/*scene.add( mesh3 );
scene.add( mesh4 );
scene.add( mesh5 );
scene.add( mesh6 );
scene.add( mesh7 );
scene.add( mesh8 );
scene.add( mesh9 );
scene.add( mesh10 );
scene.add( mesh11 );
scene.add( mesh12 );
*/


//random color
function getRandomColor() {

    return '#' +
        (function(color) {
            return (color += '0123456789abcdef' [Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color);
        })('');
}

//random number
function random(lower, upper) {
    return Math.floor(Math.random() * (upper - lower)) + lower;
}
var  meshList= new Object();


for (var x=0;x<3;x++){

    for (var y=0;y<3;y++){

        for (var z=0;z<3;z++){


            var geometry = new THREE.BoxGeometry(50, 50, 50);
            var n=random(0,6);

           if (n==0) {
               var rectShape= new THREE.Shape();
               rectShape.moveTo(10,40);
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
               geometry =new THREE.TorusGeometry(30, 1, 10, 10);
           }else  if (n==4) {
               geometry =new THREE.TetrahedronGeometry(30);
           }else  if (n==5) {
               geometry = new THREE.BoxGeometry(15, 15, 15);
           }








            var material = new THREE.MeshLambertMaterial({
                color: getRandomColor(),
                lightMap: null,
                lightMapIntensity: 0,
                emissive: 0x000000,
                emissiveMap: null,
                emissiveIntensity: 1,
                specularMap: null
            });


            var mesh = new THREE.Mesh( geometry, material );



            mesh.position.z = -600;
            mesh.position.y = -900;
            mesh.position.x = -100;



            mesh.position.z = -1*z*200 -400;
           mesh.position.x = x*220-220 ;
            mesh.position.y = y*200-200;

            /*
                        mesh.position.z = -600;
                        mesh.position.y = 200;
                        mesh.position.x = 100;*/

            console.info(mesh.position);


            scene.add( mesh );



            var key= x+"-"+y+"-"+z;
            meshList[key]=mesh;

        }

    }




}

var rot = 0;

// Render Loop
var render = function () {
    requestAnimationFrame( render );



    rot += 0.01;

    /*
        mesh1.rotation.x = rot+20; //Continuously rotate the mesh
    */



    for (var x=0;x<3;x++){

        for (var y=0;y<3;y++){

            for (var z=0;z<3;z++){

                var key= x+"-"+y+"-"+z;
                mesh=  meshList[key];
                if(x%3==0){
                    mesh.rotation.x = rot+10; //Continuously rotate the mesh
                }

                if(x%3==1){
                    mesh.rotation.x = rot+20; //Continuously rotate the mesh
                }

                if(x%3==2){
                    mesh.rotation.x = rot+30; //Continuously rotate the mesh
                }


                if(y%3==0){
                    mesh.rotation.y = rot+10; //Continuously rotate the mesh
                }

                if(y%3==1){
                    mesh.rotation.y = rot+20; //Continuously rotate the mesh
                }

                if(y%3==2){
                    mesh.rotation.y = rot+30; //Continuously rotate the mesh
                }


                if(z%3==0){
                    mesh.rotation.z = rot+10; //Continuouslz rotate the mesh
                }

                if(z%3==1){
                    mesh.rotation.z = rot+20; //Continuouslz rotate the mesh
                }

                if(z%3==2){
                    mesh.rotation.z = rot+30; //Continuously rotate the mesh
                }

            }

        }




    }



    // mesh1.rotation.y = rot+1;

    /* mesh2.rotation.x = rot; //Continuously rotate the mesh
    // mesh2.rotation.y = rot;

     mesh3.rotation.x = rot+2; //Continuously rotate the mesh
     mesh3.rotation.y = rot+2;

     mesh4.rotation.x = rot; //Continuously rotate the mesh
     mesh4.rotation.y = rot;

     mesh5.rotation.x = rot+2; //Continuously rotate the mesh
     mesh5.rotation.y = rot+2;

     mesh6.rotation.x = rot+1; //Continuously rotate the mesh
     mesh6.rotation.y = rot+1;

     mesh7.rotation.x = rot; //Continuously rotate the mesh
     mesh7.rotation.y = rot;

     mesh8.rotation.x = rot+2; //Continuously rotate the mesh
     mesh8.rotation.y = rot+2;

     mesh9.rotation.x = rot; //Continuously rotate the mesh
     mesh9.rotation.y = rot;

     mesh10.rotation.x = rot+20; //Continuously rotate the mesh
     mesh10.rotation.y = rot+2;

     mesh11.rotation.x = rot; //Continuously rotate the mesh
     mesh11.rotation.y = rot;

     mesh12.rotation.x = rot; //Continuously rotate the mesh
     mesh12.rotation.y = rot;*/

    // Render the scene
    renderer.render(scene, camera);
};

render(); //Run the function render
