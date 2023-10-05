//Unit 7 Assignment: Working with Data Validation and Log Files 
 
console.log("Assignment 7 - Logging Exceptions to a File."); 
console.log(""); 
console.log("Testing Try/Catch for Divide by Zero, File Does Not Exist,"); 
console.log("Array Out of Bounds, and Array is Null scenarios."); 
console.log("Sometimes error messages are not the most helpful."); 
console.log("All further console error messages are printed from error log file"); 
console.log(""); 

var logFileName = "Log.txt"; 
var fs = require('fs'); 
fs.openSync(logFileName, 'W'); 
fs.closeSync(fs.openSync(logFileName, 'w')); 
 
try
{
    DivideByZero(42,0); 
}

catch (err) 
{
    fs.appendFileSync(logFileName, (err + "\n")); 
} 
try 
{
    CheckIfFileExists(); 
}
catch (err) 
{ 
    fs.appendFileSync(logFileName, (err + "\n")); 
} 

try 
{
    ArrayOutOfBounds(); 
}
catch (err) 
{ 
    fs.appendFileSync(logFileName, (err + "\n")); 
}
try 
{
    ArrayIsNull(); 
}
catch (err) 
{
fs.appendFileSync(logFileName, (err + "\n")); 
}

DisplayLogFile(logFileName); 

function DisplayLogFile(fileName) 
{
    var fs = require('fs'); 
    var printList = []; 
    printList = fs.readFileSync(fileName).toString().split("\n"); 
    console.log("Contents of Log File\n"); 
    for(var i = 0; i< printList.length; i++) 
    { 
        console.log(printList[i]); 
    };
    return; 
}
function DivideByZero(numi, num2) { 
    if (num2 == 0) 
        var err = "Tried to Divide By Zero"; 
        throw (err); 
        return true;
} 
function ArrayOutOfBounds () { 
    var arrayTest = [ "Ed", "Fred", "Ted", "Mel", "Stan" ];
    for (var i = 0; i <= arrayTest.length; i++)
    { 
        if (i >= arrayTest.length) 
        {
            var err = "Array Out of Bounds";
            throw (err); 
        }
        someName = arrayTest[i]
    }
} 
function ArrayIsNull(arrayNull) { 
    if (arrayNull == undefined) 
        var err = "Array Is Null"; 
        throw (err); 
        return true; 
} 
function CheckIfFileExists() { 
    var fs = require('fs'); 
    if (fs.existsSync('WrongFile.txt')) 
        return; 
    else 
        var err = "File Not Found"; 
        throw (err); 
        return true;
} 

