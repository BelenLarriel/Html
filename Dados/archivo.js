

function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function lanzandoDados(){
    


    const images=['dado1.png','dado2.png', 'dado3.png', 'dado4.png', 'dado5.png', 'dado6.png'];

   
    document.getElementById("dado1").src = images[Math.round(Math.random() * (5 - 0) + 0)];
    document.getElementById('dado2').src = images[Math.round(Math.random() * (5 - 0) + 0)];
    document.getElementById('dado3').src = images[Math.round(Math.random() * (5 - 0) + 0)];
    document.getElementById('dado4').src = images[Math.round(Math.random() * (5 - 0) + 0)];
    document.getElementById('dado5').src = images[Math.round(Math.random() * (5 - 0) + 0)];
}

// Llama a la función tiraDados cuando se carga la página
lanzandoDados();
