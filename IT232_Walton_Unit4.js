//Assigment 4 Section 1

cars = []; 
    
    cars[0] = {};
    cars[0].make = "Ford";
    cars[0].model = "Mustang";
    cars[0].modelYear = 2010; 
    
    cars[1] = {};
    cars[1].make = "Chevrolet";
    cars[1].model = "Silverado";
    cars[1].modelYear = 2008;
    
    cars[2] = {};
    cars[2].make = "Dodge";
    cars[2].model = "Charger";
    cars[2].modelYear = 2012;
    
    console.log("Section 1: Array of Structures"); 
    
    for (var i = 0; i < cars.length; i++)
    {
        console.log(cars[i].make + " " + cars[i].model + " " + cars[i].modelYear); 
    }

//Assignment 4 Section 2

inventoryCount = {};

inventoryCount.Mustang = 9;
inventoryCount.Silverado = 13;
inventoryCount.Charger = 4;

console.log();
console.log("Section 2:Inventory Count");

console.log("There are " + inventoryCount.Mustang + " Mustangs.");
console.log("There are " + inventoryCount.Silverado + " Silverados."); 
console.log("There are " + inventoryCount.Charger + " Chargers.");

//Assignment 4 Section 3

daysOfWeek = [];

daysOfWeek.push("Sunday");
daysOfWeek.push("Monday");
daysOfWeek.push("Tuesday");
daysOfWeek.push("Wednesday");
daysOfWeek.push("Thursday");
daysOfWeek.push("Friday");
daysOfWeek.push("Saturday");

console.log();
console.log("Section 3: Days of the Week");

for (var i = 0; i < daysOfWeek.length; i++)
{
    console.log(daysOfWeek[i]);
}

for (var i = daysOfWeek.length - 1; i >= 0; i--)
{
    console.log(daysOfWeek[i]); 
}

var workDays = Array.from(daysOfWeek);

if (workDays.indexOf("Saturday") != -1)
{
    workDays.splice(workDays.indexOf("Saturday"), 1);  
}

if (workDays.indexOf("Sunday") != -1)
{
    workDays.splice(workDays.indexOf("Sunday"), 1);
}

console.log();
console.log("Work days:");

for (var i = 0; i < workDays.length; i++) 
{
    console.log(workDays[i]); 
}

//Assignment 4 Section 4

console.log();
console.log("Section 4: Stack"); 

var myStack = [];

myStack.push(10);
myStack.push(24);
myStack.push(31);
myStack.push(45);
myStack.push(19);
myStack.push(76);

console.log("There are " + myStack.length + " items on the stack.");

myStack.pop(); 
myStack.pop();
myStack.pop();

console.log("There are " + myStack.length + " items on the stack.");

console.log("The next item to be popped from the stack is " + myStack[myStack.length-1] + ".");

//Assignment 4 Section 5

console.log();
console.log("Section 5: Queue");

var q = [];

q.push(10);
q.push(24);
q.push(31);
q.push(45);
q.push(19);
q.push(76);

console.log("There are " + q.length + " items in the queue.");

q.shift();
q.shift();
q.shift(); 

console.log("There are " + q.length + " items in the queue."); 
console.log("The next item to be dequeued from the queue is " + q[0] + "."); 