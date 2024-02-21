let km;
let age;
let price;

const priceKm = 0.21;
const discountJunior = 20;
const discountSenior = 40;

let inputDistance = document.querySelector('.input-distance');
let btnGenerate = document.querySelector('.btn-generate');
let selectAdult = document.querySelector('.adult');
let selectJunior = document.querySelector('.junior');
let selectSenior = document.querySelector('.senior');

btnGenerate.addEventListener('click', function(){
  km = parseInt(inputDistance.value);
  console.log(km);
  if(selectJunior.selected){
    console.log('sono piccolo')
  } else if (selectSenior.selected){
    console.log('sono vecchio')
  } else {
    console.log('sono adulto')
  }
})

