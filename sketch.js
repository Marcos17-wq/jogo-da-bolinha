let xBolinha = 300;
let yBolinha = 200;
let diametro = 30;
let raio = diametro / 2;

let velocidadeXBolinha = 6; 
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
 let xRaquete = 5;
 let yRaquete = 150;



function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  rect(xRaquete, yRaquete, raqueteComprimento, 
       raqueteAltura);
 mostraRaquete();
 movimenteMinharaquete();
 verificaColisaoRaquete();



}



function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha (){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
   if (xBolinha + raio> width || 
      xBolinha - raio< 0){
    velocidadeXBolinha *= -1;  
  } 
  if(yBolinha + raio> height ||
    yBolinha - raio< 0){
    velocidadeYBolinha *= -1; 
  }
}

function mostraRaquete(){

   rect(xRaquete, yRaquete, raqueteComprimento, 
       raqueteAltura);
}
function movimenteMinharaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10
  }
}
function movimenteMinharaquete(){
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10
}
  }


function verificaColisaoRaquete() {
  
  if (xBolinha < );

}
