// Heading and color change function


function toenglish() {
    document.getElementById("demo").innerHTML = "<b>Instructions</b><br>Use the Controls from the left pannel and create an Art. <br> Shapes can modified with tools in pannel.<br>You can save canvas with right click on canvas.<br>To submit you must fill out form with image chosen to submit."
    document.getElementById("canvasheading").style.color = "Red"
}


function tospanish() {
    document.getElementById("demo").innerHTML = "<b>Instrucciones</b><br>Usa los Controles del panel izquierdo y crea un Arte. <br> Las formas se pueden modificar con herramientas en el panel.<br>Puede guardar el lienzo con un clic derecho en el lienzo.<br>Para enviar debe completar el formulario con la imagen elegida para enviar."

    document.getElementById("canvasheading").style.color = "Blue"
}

// Queryselector methods

var canvas = document.querySelector("#myCanvas");
var ctx = canvas.getContext("2d");

document.querySelector("#drawCircle").addEventListener("click", circle);
document.querySelector("#clearcanvas").addEventListener("click", clear);
document.querySelector("#drawsquare").addEventListener("click", square);
document.querySelector("#drawline").addEventListener("click", line);
document.querySelector("#randCircle").addEventListener("click", randomCircle);

// Function created for Random circle

let WIDTH = document.documentElement.clientWidth;
let HEIGHT = document.documentElement.clientHeight;

canvas.width = 400;
canvas.height = 400;

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
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}

// Password Validation

function checkPassword() {
    let password = document.getElementById("password").value;
    let confrmpassword = document.getElementById("confrm-password").value;
    let message = document.getElementById("message");



    //minimum password length validation
    if (password.length < 8) {
        document.getElementById("message").innerHTML = "Password length must be atleast 8 characters";
        message.style.backgroundColor = "#ff4d4d";
        return false;
    }

    //maximum length of password validation
    if (password.length > 15) {
        document.getElementById("message").innerHTML = "Password length must not exceed 15 characters";
        message.style.backgroundColor = "#ff4d4d";
        return false;
    }
    // password do not match validation
    
    if (password != confrmpassword) {
        document.getElementById("message").innerHTML = "Passwords are not same";
        message.style.backgroundColor = "#ff4d4d";
        return false;

// password do match validation

    } else {
        message.textContent = "Passwords Match";
        message.style.backgroundColor = "#3ae374";
    }
    
}

