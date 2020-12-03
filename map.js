//OBJECT: Politician

    //PROPERTY: Election Results ["Won", "Lost"]
    //PROPERTY: Total Votes

	//FUNCTION Hover over state
    //INPUT Politician name
    //OUTPUT Show color of party winner

    
    
    var createPolitician = function(name, partyColor)
    {
        var politician = {}; //Object

        politician.name = name;

        politician.electionResults = null; //Property

        politician.totalVotes = 0; //Property

        politician.partyColor = partyColor; //Property

        politician.tallyVotes = function()
        {
            this.totalVotes = 0;
            {
                for (var i = 0; i < this.electionResults.length; i++)
                {
                    this.totalVotes = this.totalVotes + this.electionResults[i];
                } 
            } 
        };
        return politician;
    };

    var donald = createPolitician("Donald Trump", [255, 0, 0]);
    var joe = createPolitician("Joe Biden", [0, 21, 188]);

    console.log(donald.name + "'s party color is " + donald.partyColor);
    console.log(joe.name + "'s party color is " + joe.partyColor);

    var theStates = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    
    var setStateResults = function(state)
    {
        theStates[state].winner = null;

       if (donald.electionResults[state] > joe.electionResults[state]) 
        {
            theStates[state].winner = donald;
        }
        else if (joe.electionResults[state] > donald.electionResults[state])
        {
            theStates[state].winner = joe;
        }
        
        var stateWinner = theStates[state].winner;

        if (stateWinner !== null)
        {
            theStates[state].rgbColor = stateWinner.partyColor;
        }
        else
        { 
            theStates[state].rgbColor = [233, 245, 66];
        }

        var stateTable = document.getElementById('stateResults');
    var header = stateTable.children[0];
    var body = stateTable.children[1];
    var stateName = header.children[0].children[0];
    var stateAbbrev = header.children[0].children[1];
    var politician1 = body.children[0].children[0];
    var politician1Results = body.children[0].children[1];
    var politician2 = body.children[1].children[0];
    var politician2Results = body.children[1].children[1];
    var winnerName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull;
    stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")";

    politician1.innerText = donald.name;
    politician1Results.innerText = donald.electionResults[state];

    politician2.innerText = joe.name;
    politician2Results.innerText = joe.electionResults[state];
    
    if (theStates[state].winner === null) {
        winnerName.innerText = "Tie!";
    } 
    else {
        winnerName.innerText = theStates[state].winner.name;
    }
    };

    donald.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

    joe.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

        //Recount data
        //Florida[9]
        donald.electionResults[9] = 1;
        joe.electionResults[9] = 28;
        //California[4]
        donald.electionResults[4] = 17;
        joe.electionResults[4] = 38;
        //Texas[43]
        donald.electionResults[43] = 11;
        joe.electionResults[43] = 27;

        donald.tallyVotes();
        joe.tallyVotes();

        console.log(donald.name + " received a total of " + donald.totalVotes + " votes");
        console.log(joe.name + " received a total of " + joe.totalVotes + " votes");

    var winner = "???";
    
    if (donald.totalVotes > joe.totalVotes) {
            winner = "Donald Trump";
        } 
    else if (joe.totalVotes > donald.totalVotes) {
        winner = "Joe Biden";
    }
    else {
        winner = "Tie!";
    }
    console.log(winner + " has won this election!");

    var countryTable = document.getElementById('countryResults');
    var countryTableRow = countryTable.children[0].children[0];
        countryTableRow.children[0].innerText = donald.name;
        countryTableRow.children[1].innerText = donald.totalVotes;
        countryTableRow.children[2].innerText = joe.name;
        countryTableRow.children[3].innerText = joe.totalVotes;
        countryTableRow.children[5].innerText = winner;

       
