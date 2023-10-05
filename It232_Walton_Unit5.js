//****Assignment 5 Section 1 

var produceList = [];
var producePrices = []; 

produceList.push("bananas 0.59"); 
produceList.push("grapes 2.99"); 
produceList.push("apples 1.49"); 
produceList.push("pears 1.39"); 
produceList.push("lettuce 0.99"); 
produceList.push("onions 0.79"); 
produceList.push("potatoes 0.59"); 
produceList.push("peaches 1.59"); 

var filestream = require('fs');

var fileDesc = filestream.openSync("ProducePrice.txt", 'w+');
var myRecord = "string to hold record"; 
for (var i=0; i< produceList.length - 1; i++) 
{
myRecord = produceList[i]+"\r"; 

filestream.writeSync(fileDesc, myRecord);
} 

filestream.writeSync(fileDesc, produceList[i]); 

filestream.closeSync(fileDesc); 
 
console.log("There are " + FileLineCount("ProducePrice.txt") + " products in the file."); 
console.log(); 
 
//****Assignment 5 Section 2 

filestream.appendFileSync('ProducePrice.txt', 'Irpeppers 0.99\r'); 
filestream.appendFileSync( 'ProducePrice.txt', 'celery 1.29\r'); 
filestream.appendFileSync('ProducePrice.txt', 'cabbage 0.79\r'); 
filestream.appendFileSync('ProducePrice.txt', 'tomatoes 1.19');

console.log("There are " + FileLineCount("ProducePrice.txt") + " products in the file. \n"); 

//****Assignment 5 Section 3 


producePrices = filestream.readFileSync("ProducePrice.txt").toString().split("\r"); 
var lineCounter = 0;
while (lineCounter < producePrices.length) 
{
    console.log((lineCounter+1) + ". " + producePrices[lineCounter]);
    lineCounter++; 
}

console.log("\nThere are " + producePrices.length + " products in the producePrices arraylist."); 

function FileLineCount(fileName)
{
    var tempList = []; 

    var fs = require('fs'); 

    tempList = fs.readFileSync(fileName).toString().split("\n"); 

    return tempList.length; 
}