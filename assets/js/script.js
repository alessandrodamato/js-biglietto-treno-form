let km;
let age;
let price;

const priceKm = 0.21;
const discountJunior = 20;
const discountSenior = 40;

let inputDistance = document.querySelector('.input-distance');
let btnGenera = document.querySelector('.btn-genera');
let selectAge = document.querySelector('.select-age');


btnGenera.addEventListener('click', function(){
  parseInt(km = inputDistance.value);
  if(selectAge.value = 'junior'){
    console.log('sono piccolo')
  } else if (selectAge.value = 'senior'){
    console.log('sono vecchio')
  } else {
    console.log('sono adulto')
  }
})

