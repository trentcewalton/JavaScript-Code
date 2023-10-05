// *** *Assignment 3 Section 1 
    var salesRegions = [ 
["North","","",""], 
["West","","",""], 
["East","","",""], 
["South","","",""]
    ];

    salesRegions[0] [1] = "Bob";
    salesRegions[0] [2] = "Stef"; 
    salesRegions[0] [3] = "Ron"; 

    salesRegions[1][1] = "Sue"; 
    salesRegions[1][2] = "Janice"; 
    salesRegions[1][3] = "Will"; 

    salesRegions[2][1] = "Nathan"; 
    salesRegions[2][2] = "Henry"; 
    salesRegions[2] [3] = "Kimmy"; 

    salesRegions[3][1] = "Wanda"; 
    salesRegions[3][2] = "Charles"; 
    salesRegions[3][3] = "Pete"; 

    console.log("Section 1: Two-dimensional Array.");

    for (var row = 0; row < 4; row++) 
    {
        for (var col = 0; col < 4; col++) 
        {
            console.log(salesRegions[row][col]); 
        }
        console.log(""); 
    }
    // *** *Assignment 3 Section 2 

    var salesTeam = [];

    for (var col = 1; col < 4; col++) 
        {
            salesTeam.push(salesRegions[0][col]); 
        }

    console.log("Section 2: Array List."); 
    console.log(""); 
    
    console.log("There are " + salesTeam.length + " names in the salesTeam arraylist.");

    for (var col = 1; col < 4; col++) 
    {
        salesTeam.push(salesRegions[1][col]); 
    }

    if (salesTeam.indexOf("Stef") != -1) 
    {
        console.log("Stef is in the salesTeam arraylist."); 
    }
    else
    {
        console.log("Stef is not in the salesTeam arraylist."); 
    }

    console.log("There are " + salesTeam.length + " names in the salesTeam arraylist."); 
    
    if (salesTeam.indexOf("Janice") != -1) 
    {
        salesTeam.splice(salesTeam.indexOf("Janice"), 1);
    } 

    if (salesTeam.indexOf("Ron") != -1)
    {
        salesTeam.splice(salesTeam.indexOf("Ron"), 1); 
    }

    console.log("There are " + salesTeam.length + " names in the salesTeam arraylist.");

    console.log("Names currently in the salesTeam arraylist:"); 
    
    for (var i = 0; i < salesTeam.length; i++) 
    {
        console.log(salesTeam[i]);
    }