// Name - Umang Patel
// Date - 30/06/2022
// Overview - By this code it will create a one page website that allows user to draw different shape with help of tools to select color, width,height,x and y co ordinates, width and width color and can clear canvas if wants to start again. When user completed an art it can be saved by right click on art and attach file through compulsory registration form to submit an online competition.


// Declaring variables

let canvas = document.querySelector("#myCanvas");
let ctx = canvas.getContext("2d");

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = 400;
canvas.height = 400;

// Queryselector methods

document.querySelector("#drawCircle").addEventListener("click", circle);
document.querySelector("#clearcanvas").addEventListener("click", clear);
document.querySelector("#drawsquare").addEventListener("click", square);
document.querySelector("#drawline").addEventListener("click", line);
document.querySelector("#randCircle").addEventListener("click", randomCircle);
document.querySelector("#confrm-password").addEventListener('change', validatePassword);

// Function created for Random circle

function random(number) {
    return Math.floor(Math.random() * number);
}

function randomCircle() {
    
    for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = document.querySelector("#randomcirclepalette").value;
        ctx.arc(random(WIDTH), random(HEIGHT), random(20), 0, 2 * Math.PI);
        ctx.fill();
    }
}

// Function created for circle

function circle() {
       
    ctx.beginPath();
    ctx.arc(document.querySelector("#Cx").value, document.querySelector("#Cy").value, document.querySelector("#Cslider").value, 0, 2 * Math.PI);
    ctx.lineWidth = document.querySelector("#Clinewidthslider").value;
    ctx.strokeStyle = document.querySelector("#Clpalette").value;
    ctx.stroke();
    ctx.fillStyle = document.querySelector("#Cpalette").value;
    ctx.fill();
}

// Function created for square

function square() {
    ctx.beginPath();
    ctx.rect(document.querySelector("#Sx").value, document.querySelector("#Sy").value, document.querySelector("#Sw").value, document.querySelector("#Sh").value);
    ctx.fillStyle = document.querySelector("#Spalette").value;
    ctx.fill();
    ctx.lineWidth = document.querySelector("#Slinewidthslider").value;
    ctx.strokeStyle = document.querySelector("#Slpalette").value;
    ctx.stroke();
}

// Function created for line

function line() {
    ctx.beginPath();
    ctx.moveTo(document.querySelector("#x").value, document.querySelector("#y").value,);
    ctx.lineTo(document.querySelector("#endx").value, document.querySelector("#endy").value,);
    ctx.lineWidth = document.querySelector("#linewidthslider").value;
    ctx.strokeStyle = document.querySelector("#lpalette").value;
    ctx.stroke();
}

// Function created for to clear canvas

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// Heading and color change function


function toenglish() {
    document.getElementById("canvasheading").innerHTML = "Abstract Art Competition"
    document.getElementById("demo").innerHTML = "<b>Instructions</b><br>Use the Controls from the left pannel and create an Art. <br> Shapes can modified with tools in pannel.<br>You can save canvas with right click on canvas.<br>To submit you must fill out form with image chosen to submit."
    document.getElementById("canvasheading").style.color = "Red"
}


function tospanish() {
    document.getElementById("canvasheading").innerHTML = "Concurso de Arte Abstracto"
    document.getElementById("demo").innerHTML = "<b>Instrucciones</b><br>Usa los Controles del panel izquierdo y crea un Arte. <br> Las formas se pueden modificar con herramientas en el panel.<br>Puede guardar el lienzo con un clic derecho en el lienzo.<br>Para enviar debe completar el formulario con la imagen elegida para enviar."

    document.getElementById("canvasheading").style.color = "Blue"
}

// Password Validation

function validatePassword(){
  if(document.querySelector("#password").value != document.querySelector("#confrm-password").value) {
    document.querySelector("#confrm-password").setCustomValidity("Passwords Don't Match");
    document.querySelector("#confrm-password").reportValidity();
    document.querySelector("#password").value ='';
    document.querySelector("#confrm-password").value ='';
  } 
  else {
    document.querySelector("#confrm-password").setCustomValidity('');
    document.querySelector("#confrm-password").reportValidity();
  } 
}

