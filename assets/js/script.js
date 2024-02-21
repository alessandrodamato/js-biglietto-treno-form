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
let inputName = document.querySelector('.input-name');
let inputDistance = document.querySelector('.input-distance');
let btnGenerate = document.querySelector('.btn-generate');
let selectAdult = document.querySelector('.adult');
let selectJunior = document.querySelector('.junior');
let selectSenior = document.querySelector('.senior');
let btnCancel = document.querySelector('.btn-cancel');

// con id
let yourTicket = document.getElementById('your-ticket');

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
    
  } else if (selectSenior.selected){

    finalPrice = price - price * discountSenior / 100;
    document.getElementById('offer').innerHTML = 'Biglietto Senior';
    console.log('Senior:', 'Prezzo: €', price, 'Prezzo Senior: €', finalPrice.toFixed(2));

  } else {

    finalPrice = price
    document.getElementById('offer').innerHTML = 'Biglietto Standard';
    console.log('Adulto:', 'Prezzo: €', finalPrice.toFixed(2));
    
  }

  document.getElementById('output-cost').innerHTML = finalPrice.toFixed(2) + '€';

})

// funzione che rimuove il biglietto al bottone type reset
btnCancel.addEventListener('click', function(){
  
  yourTicket.style = 'display: none;'

})