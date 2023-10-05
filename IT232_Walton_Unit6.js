// Unit 6 Assignment: Assert and Try/Catch 
 
//****Assignment 6 Section 1 

console.log("Assignment 6 - Asserts and Try / Catch.\n"); 

var assert = require('assert'); 

var mystring = null; 
// mystring = ""; 

try 
{
    assert(mystring != null && mystring. length != 0, "Parameter must not be empty or null."); 
}
catch (err) 
{
    console.error(err.message); //console.error prints like console.log but text is red. 
}

var intTest = 0; 

try 
{
    assert(intTest > 0, "Integer must be greater than zero"); 
}

catch (err) 
{
    console.error(err.message); 
} 

//****Assignment 6 Section 2 
var names = [ "Ed", "Fred", "Ted", "Mel", "Stan" ];

var someName; 

try 
{
    for (var i = 0; i <= names.length; i++) 
    {
        if (i >= names.length) 
        {
            var err = "Array Out of Bounds"; 
            throw (err); 
        }

        someName = names[i]; 
    }
}
catch(err)
{ 
    console.log("Array out of bounds."); 
    console.log("Caught exception: " + err); 
}

//****Assignment 6 Section 3 

try 
{
    var fs = require('fs');
    var fd = fs.openSync("NoSuchFile.txt", 'r');
}
catch (err) 
{
    console.log("FileDoes NotExist error occurred");
    console.log("Caught exception: " + err.message); 
}
//****Assignment 6 Section 4 
 
try 
{
    DivideByZero(42, 0); 
}
catch (err)
{
    console.log("DivideBy Zero error occurred");
    console.log("Caught exception: " + err); 
}

function DivideByZero(num1, num2){
     if (num2 == 0) 
    {
        var err = "Divide By Zero";
        throw (err);
    } 
    else
    { 
        return num1/num2; 
    } 
}
