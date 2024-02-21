// dati fissi
const priceKm = 0.21;
const discountJunior = 20;
const discountSenior = 40;

// variabili dichiarate
let km;
let price;

let inputDistance = document.querySelector('.input-distance');
let btnGenerate = document.querySelector('.btn-generate');
let selectAdult = document.querySelector('.adult');
let selectJunior = document.querySelector('.junior');
let selectSenior = document.querySelector('.senior');

// funzione del bottone che calcola il prezzo e eventuali sconti
btnGenerate.addEventListener('click', function(){

  km = parseInt(inputDistance.value);
  price = km * priceKm;
  
  if(selectJunior.selected){

    finalPrice = price - price * discountJunior / 100;
    console.log('Junior:', 'Prezzo: €', price, 'Prezzo Junior: €', finalPrice.toFixed(2));
    
  } else if (selectSenior.selected){

    finalPrice = price - price * discountSenior / 100;
    console.log('Senior:', 'Prezzo: €', price, 'Prezzo Senior: €', finalPrice.toFixed(2));

  } else {

    finalPrice = price
    console.log('Adulto:', 'Prezzo: €', finalPrice.toFixed(2));
    
  }
  
})

