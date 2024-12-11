let consejos = [];

let tempConsejos = []; // Array temporal para manejar las frases sin repetición
let consejoElegido = ("clickeá y hacele" + '\n' + "una consulta al tarot" + '\n' +  "del gestor cultural") ;

function preload() {
  // Cargar el archivo de texto
  consejos = loadStrings('consejos.txt');
}

var vid; 
function preload() {
  vid=createVideo('0001.png0250.mp4'); 
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);
  textWrap(WORD);
  textSize(12);
    
vid.size(windowWidth/2, windowHeight/2); 
 vid.position(width - width, height - height/2); 
vid.loop();  

 
  // Inicializar el array temporal
  reiniciarTempConsejos();
}

function draw() {
  background(0000);

  fill (255);
  textFont('Verdana');
 // text('cucurucho', width/2, height - height/8);
  text('2024', width-30, height - height/11);
  
    

  
  if (/Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent)) {
    // Code for mobile devices
    console.log("This is a mobile device.");
    textSize(50); // Ajustar tamaño del texto dinámicamente
  } else {
    // Code for non-mobile devices
    textSize(windowWidth / 40); // Ajustar tamaño del texto dinámicamente
    console.log("This is not a mobile device.");
  }
  
  fill(255,0,0);
  textFont('Courier New');
  text(consejoElegido, width / 2, height / 2);
}

function mousePressed() {
  if (tempConsejos.length === 0) {
    // Si se han mostrado todos los consejos, reiniciar
    reiniciarTempConsejos();
  }

  // Elegir un consejo al azar del array temporal
  let index = int(random(tempConsejos.length));
  consejoElegido = addLineBreakAfter20Chars(tempConsejos[index]);

  // Eliminar el consejo elegido del array temporal
  tempConsejos.splice(index, 1);
}




function reiniciarTempConsejos() {
  // Reiniciar el array temporal con todos los consejos
  tempConsejos = consejos.slice(); // Copia del array original
}

function addLineBreakAfter20Chars(str) {
  if (str.length <= 20) return str; // No need to modify short strings

  let index = str.indexOf(' ', 20); // Find first whitespace after 20 characters
  if (index !== -1) {
    // Replace the first whitespace with a line break
    return str.slice(0, index) + '\n' + str.slice(index + 1);
  } else {
    // If no whitespace is found, just return the original string
    return str;
  }
}
