const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ( 'quebrada' ) > -1
}

function lampOn () {
    if ( !isLampBroken () ) {
        lamp.src = './img/ligada.jpg';
    }
}

function lampOff () {
    if ( !isLampBroken () ) {
        lamp.src = './img/desligada.jpg';
    }
}

function lampBroken () {
    lamp.src = './img/quebrada.jpg';
}

//Função para alternar entre os botões Ligar/Desligar

// function lampOnOff (){
//     if ( turnOnOff.textContent == 'Ligar') {
//         lampOn();
//         turnOnOff.textContent = 'Desligar';
//     }else {
//         lampOff();
//         turnOnOff.textContent = 'Ligar';
//     }
// }

turnOn.addEventListener ( 'click', lampOn );
turnOff.addEventListener ( 'click', lampOff );
lamp.addEventListener ( 'mouseover', lampOn );
lamp.addEventListener ( 'mouseleave', lampOff );
lamp.addEventListener ( 'dblclick', lampBroken );