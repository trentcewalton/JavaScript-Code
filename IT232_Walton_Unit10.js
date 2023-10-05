//****Assignment 10 Section 1 

class scoreKeeper 
{
    constructor (n)
    {
        this.gamePlayed = n; 
        this.players = []; 
    }

    setGame(name)
    {
        this.gamePlayed = name; 
    }

    getGame()
    {
        return this.gamePlayed; 
    } 
    
    addName(n)
    {
        this.players.push({});
        this.players[this.players.length-1].name = n; 
        this.players[this.players.length-1].score = 0;
    }

    getPlayerName(playerNum)
    {
        return this.players[playerNum - 1].name;
    } 

    addScore(player, points)
    {
    var temp = -999; 
    for (var i=0; i < this.players.length; i++)
    {
    if (this.players[i].name == player)
    {
        this.players[i].score += points; 
        temp = this.players[i].score; 
        break; 
    }
    }
    return temp;
    }
    
    subScore(player, points)
    {
    var temp = -999; 
    for (var i=0; i < this.players.length; i++)
    {
    if (this.players[i].name == player)
    { 
        this.players[i].score -= points; 
        temp = this.players[i].score; 
        break; 
    }
    }
    return temp;
    }

    getScore(player)
    { 
    var temp = -999; 
    for (var i=0; i < this.players.length; i++) 
    {
    if (this.players[i].name == player) 
    {
    temp = this.players[i].score; 
    break; 
    }
    }
    return temp;
    } 

    listAllScores()
    {
        console.log("The scores for " + this.gamePlayed + ": "); 

        for (var i=0; i < this.players.length; i++)
        { 
            console.log(this.players[i].name + "'s score is " + this.players[i].score);
        }
    }
} 
//********************************************************* 
//****Assignment 10 Section 2 

class baseball extends scoreKeeper
{
    constructor(team1, team2) 
    {
        super(team1 + " vs " + team2);
        super.addName(team1); 
        super.addName(team2);
        this.inning = 1; 
        this.outs = 0; 
        this.strikes = 0; 
        this.fouls = 0; 
        this.balls = 0; 
    }        
    advOuts() 
    { 
        this.outs++; 
        if (this.outs >= 3)
        { 
        this.inning = this.inning + .5; 
        this.outs = 0; 
        this.strikes = 0; 
        this.fouls = 0; 
        this.balls = 0; 
        }
    } 
    advStrikes ()
    { 
        this.strikes++; 
        if (this.strikes >= 3)
        { 
        advouts();
        }
    } 
    advFouls()
    { 
        this.fouls++; 
        if (this.strikes < 2)
        { 
        this.strikes++; 
        }
    } 
    advBalls()
    { 
        this.balls++; 
        if (this.balls>=4)
        { 
        this.strikes = 0; 
        this.fouls = 0; 
        this.balls = 0;
        }
    }
    getInning()
    { 
        return this.inning;
    } 
    getOuts()
    { 
        return this.outs;
    } 
    getStrikes ()
    { 
        return this.strikes;
    } 
    getFouls()
    { 
        return this.fouls; 
    }
    getBalls()
    { 
    return this.balls; 
    }
}
 

//****Assignment 10 Section 3 

console.log("Assignment 10 - Classes and Inheritance"); 
console.log(" "); 

console.log("Section 3: Base Class Results After Adding"); 
console.log(" ");

const gameOne = new scoreKeeper("Canasta"); 
gameOne.addName("Larry"); 
gameOne.addName ("Moe"); 
gameOne.addName("Curly");

gameOne.addScore("Larry", 20);
gameOne.addScore("Moe", 35);
gameOne.addScore("Curly", 45);

gameOne.listAllScores(); 
console.log(" "); 

gameOne.subScore("Moe", 15); 
gameOne.subScore("Curly", 5); 

console.log("Section 3: Base Class Results After Subtracting"); 
console.log(" "); 

gameOne.listAllScores (); 
console.log(" "); 
console.log(" "); 
 
//****Assignment 10 Section 4 

console.log("Section 4: Derived Class Results: Baseball scoring"); 
console.log(" "); 

const gameTwo = new baseball("Cubs", "Braves"); 

gameTwo.addScore("Cubs", 2); 

gameTwo.advOuts(); 
gameTwo.advOuts(); 
gameTwo.advOuts(); 

gameTwo.addScore("Braves", 3); 

gameTwo.advOuts(); 
gameTwo.advStrikes(); 

gameTwo.advFouls(); 
gameTwo.advFouls(); 
gameTwo.advFouls(); 
gameTwo.advBalls(); 

gameTwo.listAllScores(); 
console.log(" "); 
console.log("The current inning is " + gameTwo.getInning());

console.log("Outs: " + gameTwo.getOuts()); 
console.log("Strikes: " + gameTwo.getStrikes()); 
console.log("Fouls: " + gameTwo.getFouls()); 
console.log("Balls: " + gameTwo.getBalls());

//End of Program