/**
 * Task Irul
 */

const irul = require("./tasks/irul");

function tasksIrul(){
    // Program: Sum Number
    // Success
    const resultSum = irul.sumNumber(10,50);
    console.log(resultSum);

    // Failed
    try{
        const result = irul.sumNumber("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Multiply Number
    // Success
    const resultMultiply = irul.multiplyNumbers(10,50);
    console.log(resultMultiply);

    // Failed
    try{
        const result = irul.multiplyNumbers("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
    // Program: Convert Celcius to Fahrenheit
    // Success
    const temperatureResult = irul.celciusToFahrenheit(10);
    console.log(`the temperature ${temperatureResult.celcius}°C is ${temperatureResult.fahrenheit}°F`);

    // Failed
    try{
        const result = irul.celciusToFahrenheit("10",30);
        console.log(result);
    }catch(error){
        console.log(error.message);
    }
}
tasksIrul();

/**
 * Cristian Yulma Wibowo"
 */

// import your tasks here
const triangle = require("./tasks/Cristian/no1.js");
const countarray = require("./tasks/Cristian/no2.js");
const segitiga = require("./tasks/Cristian/no3.js");
const countarray2 = require("./tasks/Cristian/no4.js");
const cetaktabel = require("./tasks/Cristian/no5.js");
const buatrentang = require("./tasks/Cristian/no6.js");

function tugasc() {
    // Soal no 1: Triangle
    console.log("\n--- Task: Triangle ---");
    // Success
    console.log("Success case (triangle(5)):");
    triangle(5);
    // Failed
   
    console.log("Failure case (triangle('abc')):");
    triangle("abc");
    console.log("Failure case (triangle(-1)):");
    triangle(-1);


    // Soal no 2: Count Array
    console.log("\n--- Task: Count Array ---");
    // Success
    console.log("Success case (countArray([1, 2, 3, 4, 5])):");
    countarray([1, 2, 3, 4, 5]);
    console.log("Success case (countArray([2, 2, 2, 2, 2])):");
    countarray([2, 2, 2, 2, 2]);
 
    // Soal no 3: Print Segitiga
    console.log("\n--- Task: Print Segitiga ---");
    // Success
    console.log("Success case (printSegitiga(5)):");
    segitiga(5);
    // Failed
   
    console.log("Failure case (printSegitiga('abc')):");
    segitiga("abc");
    console.log("Failure case (printSegitiga(-1)):");
    segitiga(-1);
       
   

    // Soal no 4: Process Numbers
    console.log("\n--- Task: Process Numbers ---");
    // Success
    console.log("Success case (processNumbers([1, 2, 3, 4, 5])):");
    countarray2([1, 2, 3, 4, 5]);
    console.log("Success case (processNumbers([2, 4, 6, 8])):");
    countarray2([2, 4, 6, 8]);

    // Soal no 5: Cetak Tabel
    console.log("\n--- Task: Cetak Tabel ---");
    // Success
    console.log("Success case (cetakTabel(3)):");
    cetaktabel(3);
    // Failed
    console.log("Failure case (cetakTabel('a')):");
    cetaktabel("a"); 
    console.log("Failure case (cetakTabel(-2)):");
    cetaktabel(-2); 
   


    // Soal no 6: Buat Rentang
    console.log("\n--- Task: Buat Rentang ---");
    // Success
    console.log("Success case (buatRentang(1, 5)):");
    buatrentang(1, 5);
    console.log("Success case (buatRentang(5, 10)):");
    buatrentang(5, 10);
    // Failed
    
    console.log("Failure case (buatRentang('a', 5)):");
    buatrentang("a", 5); 
    console.log("Failure case (buatRentang(5, 'b')):");
    buatrentang(5, "b"); 
    
}
tugasc();
