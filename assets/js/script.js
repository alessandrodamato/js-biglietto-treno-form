// dati fissi
const priceKm = 0.21;
const discountJunior = 20;
const discountSenior = 40;

// variabili dichiarate
let km;
let price;
let finalPrice;
let userName;
let coachAssign;
let codeAssign;

// con classi
const inputName = document.querySelector('.input-name');
const inputDistance = document.querySelector('.input-distance');
const btnGenerate = document.querySelector('.btn-generate');
const selectAdult = document.querySelector('.adult');
const selectJunior = document.querySelector('.junior');
const selectSenior = document.querySelector('.senior');
const btnCancel = document.querySelector('.btn-cancel');

// con id
const yourTicket = document.getElementById('your-ticket');

// funzione del bottone che calcola il prezzo e eventuali sconti
btnGenerate.addEventListener('click', function(event){

  event.preventDefault();

  yourTicket.style = 'display: block;'

  userName = inputName.value;
  document.getElementById('output-name').innerHTML = userName;

  km = parseInt(inputDistance.value);
  price = km * priceKm;

  coachAssign = Math.ceil(Math.random() * 15);
  document.getElementById('coach').innerHTML = coachAssign;

  codeAssign = Math.ceil(Math.random() * 99999);
  document.getElementById('code').innerHTML = codeAssign;
  
  if(selectJunior.selected){

    finalPrice = price - price * discountJunior / 100;
    document.getElementById('offer').innerHTML = 'Biglietto Junior';
    console.log('Junior:', 'Prezzo: €', price, 'Prezzo Junior: €', finalPrice.toFixed(2));
    if (isNaN(km)){
      yourTicket.style = 'display: none;'
    }
    
  } else if (selectSenior.selected){

    finalPrice = price - price * discountSenior / 100;
    document.getElementById('offer').innerHTML = 'Biglietto Senior';
    console.log('Senior:', 'Prezzo: €', price, 'Prezzo Senior: €', finalPrice.toFixed(2));
    if (isNaN(km)){
      yourTicket.style = 'display: none;'
    }

  } else {

    finalPrice = price
    document.getElementById('offer').innerHTML = 'Biglietto Standard';
    console.log('Adulto:', 'Prezzo: €', finalPrice.toFixed(2));
    if (isNaN(km)){
      yourTicket.style = 'display: none;'
    }
    
  }

  document.getElementById('output-cost').innerHTML = finalPrice.toFixed(2) + '€';

})

// funzione che rimuove il biglietto al bottone type reset
btnCancel.addEventListener('click', function(){
  
  yourTicket.style = 'display: none;'

})