
var a = Number(prompt(" 1-sonni kiriting"))
var b = Number(prompt(" 2-sonni kiriting"))
var action = prompt("Action kiriting")

switch(action){
    case "+":
        console.log( a + b );
    break;
    case "-":
        console.log( a - b );
    break;
    case "*":
        console.log( a * b );
    break;
    case "/":
        console.log( a / b );
    break;
}


// ------ #TASK1 ------
var son = Number(prompt(" istagan sonni kiriting"));
var result = son + 1;
console.log("Natija:", result)



// ------ #TASK2 ------

var son = Number(prompt(" istagan sonni kiriting"));

if(son > 0){
    console.log("Sizning soningiz musbat")
}
if(son < 0){
    console.log("Sizning soningiz manfiy")
}
 if(son == 0){
    console.log("Soningiz 0")
}



// ------ #TASK3 ------

var son = Number(prompt(" istagan sonni kiriting"));

switch(true){
  case(son >= 0 && son <= 9):
    console.log("Bu son 1 xonali");
    break;
  case(son >= 10 && son <= 99):
    console.log("Bu son 2 xonali");
    break;
  default:
    console.log("Bu son ko'p xonali");
    break;
}



// ------ #TASK4 ------

var tYil = Number(prompt("Tug'ilgan yilingizni kiriting"))
var hozirgiYil = 2025
var natija = hozirgiYil - tYil
console.log("Hozirgi yoshingiz:" , natija)



// ------ #TASK5 ------

var son1 = Number(prompt("Istagan 1-sonni kiriting"));
var son2 = Number(prompt("Istagan 2-sonni kiriting"));

switch(true){
    case(son1 > son2):
    console.log("Birinchi son ikkinchi sondan katta");
    break;
    case(son2 > son1):
    console.log("Ikkinchi son birinchi sondan katta");
    break;
    default:
        console.log("Bu sonlar teng")
    break;
}



// ------ #TASK6 ------

var son1 = Number(prompt("1-sonni kiriting"))
var son2 = Number(prompt("2-sonni kiriting"))
var son3 = Number(prompt("3-sonni kiriting"))
var engkattason

switch(true){
  case( son1 >= son2 && son1 >= son3):
    engkattason = son1;
    break;
  case( son2 >= son1 && son2 >= son3):
    engkattason = son2;
    break;
  case( son3 >= son1 && son3 >= son2):
    engkattason = son3;
    break;
}
console.log("Eng katta son:" , engkattason)



// ------ #TASK7 ------

var son1 = Number(prompt("1-sonni kiriting"))
var son2 = Number(prompt("2-sonni kiriting"))
var son3 = Number(prompt("3-sonni kiriting"))
var engkichikson

switch(true){
  case( son1 <= son2 && son1 <= son3):
    engkichikson = son1;
    break;
  case( son2 <= son1 && son2 <= son3):
    engkichikson = son2;
    break;
  case( son3 <= son1 && son3 <= son2):
    engkichikson = son3;
    break;
}

console.log("Eng kichik son:" , engkichikson)



// ------ #TASK8 ------

var son = Number(prompt("Istagan sonni kiriting"))
for(var i = 1; i <= son; i++ ){
  console.log(i)
}



// ------ #TASK9 ------

var son = Number(prompt("Istagan soningizni kiriting"))
for( var i = 1; i <= son; i++){
  if( i % 3 === 0 && i % 5 === 0){
    console.log(i)
  }
}


// ------ #TASK10 ------

var son = Number(prompt("Istagan sonni kiriting"))
for(var i = son; i >= 1; i-- ){
  console.log(i)
}



// ------ #TASK11 ------

var a = Number(prompt("a sonini kiriting"))
var b = Number(prompt("b sonini kiriting"))
var sonlarYigindisi = 0
var sonlarQiymati = 0
for( var i = a; i <= b; i++){
    sonlarYigindisi += i
    sonlarQiymati ++
      
}
console.log("Sonlar yig'indisi", sonlarYigindisi  )
console.log("Sonlar qiymati", sonlarQiymati )



// ------ #TASK12 -------
var a = Number(prompt("a sonini kiriting"))
var b = Number(prompt("b sonini kiriting"))

for( var i = a; i <= b; i++){
  if(b % i === 0)
    console.log(i)
}



// ------ #TASK13 ------

var a = Number(prompt("a sonini kiriting"))
var b = Number(prompt(" b sonini kiriting"))
var bYigindisi = 0
for( var i = a; i <= b ; i++){
  if( b % i === 0){
    bYigindisi += i
    console.log(i)
  }
}
console.log("b lar yig'indisi", bYigindisi)


7-misol
var a = Number(prompt("5 soni"))
var b = Number(prompt("49 soni"))
var toqlarYigindisi = 0
for(var i = a; i <= b; i++ ){
  if(i % 2 !== 0){
    toqlarYigindisi += i
    console.log(i)
  }
}
console.log("Toq sonlar yig'indisi", toqlarYigindisi)

8-misol
var a = Number(prompt("A kesma uzunligini kiriting (A > B)"))
var b = Number(prompt("B kesma uzunligini kiriting"))
var qiymat = 0
if( a % b === 0){
  qiymat += a / b
  console.log("A kesma ichiga sig'adigan b kesmalar soni:" , qiymat)
}
else {
  console.log("A kesmaga B kesma to'liq sig'maydi")
}


9-misol
var a = Number(prompt("A kesma uzunligini kiriting (A > B)"));
var b = Number(prompt("B kesma uzunligini kiriting"));

var qoldiq = a; 

for (; qoldiq >= b; ) {
  qoldiq = qoldiq - b;
}

console.log("Qoldiq:", qoldiq);

10-misol
var son = Number(prompt("Sonni kiriting"))
var narx = Number(prompt("Narxni kiriting"))

for( var i = 0.1; i < son; i+=0.1){
  console.log(i.toFixed(1) * narx)
}

11-misol
var a = Number(prompt("Birinchi ikki xonali sonni kiriting:"));
var b = Number(prompt("Ikkinchi ikki xonali sonni kiriting:"));  
var kichik = 0;
var katta = 0;

if (a > b) {
  kichik = b;
  katta = a;
} else {
  kichik = a;
  katta = b;
}
console.log("Kichik son:", kichik);
for (var i = kichik; i <= katta; i++) {
  console.log(i);
}

12-misol
var a = Number(prompt("A sonini kiriting (A > B):"));
var b = Number(prompt("B sonini kiriting (B < A):"));

if (b <= 1) {
  console.log(b + " soni tub emas.");
} else {
  for (var i = 2; i < b; i++) {
    if (b % i === 0) {
      console.log(b + " soni tub emas.");
      break;
    }
  }

  if (i === b) {
    console.log(b + " soni tub.");
  }
}


Qo'shimcha Masala (hafta kunlarini topish)
var kun = Number(prompt("Hafta kunining raqamini kiriting (1-7):"));
switch (kun) {
  case 1:
    console.log("Dushanba");
    break;
  case 2:
    console.log("Seshanba");
    break;
  case 3:
    console.log("Chorshanba");
    break;
  case 4:
    console.log("Payshanba");
    break;
  case 5:
    console.log("Juma");
    break;
  case 6:
    console.log("Shanba");
    break;
  case 7:
    console.log("Yakshanba");
    break;
  default:
    console.log("Noto'g'ri kun raqami kiritildi");
}