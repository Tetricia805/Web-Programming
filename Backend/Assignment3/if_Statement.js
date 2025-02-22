//if statment
let number = 5;
if (number>0){
    console.log ('Number is positive');

}

// to check if it is raining

let isRaining = true;
if (isRaining){
    console.log ('Do not forget to carry your umbrellah');
}

// Exercise 1: Checking Temperature
// a JavaScript program that checks the temperature

let temperature = 25;

if (temperature > 30){
    console.log("It's to hot");
}
else if(temperature > 20){
    console.log("It's moderate");
}else {
    console.log("It's cold");
}

//Exercise 2: Admission Eligibility
let score = 55;

if(score >= 70){
    console.log( "Eligible for Admission.");
}
else if(score > 50){
    console.log( "Admission on Probation.");
}else {
    console.log( "Not Eligible for Admission.")
}

//Exercise 3: Access to Clean Water
let waterAvailable = 300;

if(waterAvailable > 500){
    console.log( "Enough Water.");
}
else if (waterAvailable > 200){
    console.log( "Water is limited.");
} else{
    console.log( "Water shortage.");
}

//Exercise 4: Nested If Example
let expired = false;
let quality = 7;


if(expired){
    if(quality > 8){
        console.log( "Good Quality.");
    }
    else if (quality > 5){
        console.log( "Average Quality.");
    }else{
        console.log( "Poor Quality.");
    }
    console.log( "expired");
}