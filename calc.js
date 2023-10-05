var total= 0; 
var prevOperation = "";
var plusClicked = 0;  
var minusClicked = 0;
var multiplyClicked = 0; 
var divideClicked = 0; 
var equalClicked = 0; 

function clearButton() 
{
    document.calc.txtDisplay.value="0"; 
    total = 0; 
prevOperation = ""; 
    plusClicked = 0; 
    minusClicked = 0; 
    multiplyClicked = 0; 
    divideClicked = 0; 
}
function zeroButton()
{
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "0"; 
else 
    document.calc.txtDisplay.value += "0";
} 

function oneButton()
{
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "1"; 
else 
    document.calc.txtDisplay.value += "1"; 
}
        
function twoButton() 
{ 

if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "2";
else 
    document.calc.txtDisplay.value += "2"; 
}

function threeButton() 
{ 
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "3"; 
else 
    document.calc.txtDisplay.value += "3"; 
}

function fourButton() 
{
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "4"; 
else 
    document.calc.txtDisplay.value += "4"; 
}

function fiveButton()
{
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "5"; 
else 
    document.calc.txtDisplay.value += "5"; 
}

function sixButton() 
{
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "6"; 
else 
    document.calc.txtDisplay.value += "6"; 
}
    
function sevenButton() 
{ 
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "7"; 
else 
    document.calc.txtDisplay.value += "7"; 
}

function eightButton() 
{
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "8"; 
else 
    document.calc.txtDisplay.value += "8"; 
} 

function nineButton()
{
if (document.calc.txtDisplay.value == "0") 
    document.calc.txtDisplay.value = "9"; 
else 
    document.calc.txtDisplay.value += "9"; 
}
    
function addButton()
{
    plusClicked = 1; 
    calculate(); 
}

function subButton()
{
    minusClicked = 1; 
    calculate(); 
}

function mulButton() 
{
    multiplyClicked = 1; 
    calculate(); 
}

function divButton() 
{ 
    divideClicked = 1; 
    calculate(); 
}

function equalButton() 
{
    equalClicked = 1; 
    calculate(); 
}

function calculate() 
{
    if(prevOperation == "") 
    {
        total = Number(document.calc.txtDisplay.value); 
        document.calc.txtDisplay.value = "0"; 
    }

    else 
    {

        if(prevOperation == "+") 
        {
        total = total + Number(document.calc.txtDisplay.value); 
        document.calc.txtDisplay.value = "0"; 
        } 

        if(prevOperation == "-") 
        {
        total = total - Number(document.calc.txtDisplay.value); 
        document.calc.txtDisplay.value = "0"; 
        }
        
        if(prevOperation == "*") 
        {
        total = total * Number(document.calc.txtDisplay.value); 
        document.calc.txtDisplay.value = "0"; 
        }
        if(prevOperation == "/") 
        {
        total = total / Number(document.calc.txtDisplay.value); 
        document.calc.txtDisplay.value = "0"; 
        }
    }
    
    if (plusClicked == 1) 
    {
    prevOperation = "+"; 
    plusClicked = 0; 
    } 
    else if (minusClicked == 1)
    { 
    prevOperation = "-"; 
    minusClicked = 0; 
    }
    else if (multiplyClicked == 1) 
    {
    prevOperation = "*"; 
    multiplyClicked = 0; 
    }
    else if (divideClicked == 1) 
    {
    prevOperation = "/"; 
    divideClicked = 0; 
    }
    else 
    {
    prevOperation = ""; 
    equalClicked = 0; 
    document.calc.txtDisplay.value = String(total);
    }
}
