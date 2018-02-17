
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
        'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    var g = [];
    // Variables for tracking our wins, losses and ties. They begin at 0.
    var wins = 0;
    var losses = 0;
    var guesses = 10;
   

    var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];

    console.log(computerChoice)
    
    var flag = 0;

    document.onkeypress = function (event) {
        document.getElementById('alreadyGuessed').innerHTML = "";
        var userGuess = event.key;
        if (userGuess === computerChoice) {
            wins++;
            g = [];
            guesses = 10;
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);
        } else {
            for(var i = 0; i < g.length; i++){
                if(userGuess === g[i]){
                    flag = 1;
                }
            }
            if(flag === 0){
                guesses--;
            }
            flag = 0;
        }

        if (guesses === 0) {
            losses++
            guesses = 10;
            computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log(computerChoice);
        }

        g.push(userGuess);
        for(var i = 0; i < g.length; i++){
            if(document.getElementById('alreadyGuessed').innerHTML === "<ul> <li> " + g[i] + "</li> </ul>"){
                continue;
            }
            else document.getElementById('alreadyGuessed').innerHTML += "<ul> <li> " + g[i] + "</li> </ul>";
        }

        document.getElementById('wins').innerHTML = "Wins: " + wins;
        document.getElementById('losses').innerHTML = "losses: " + losses;
        document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

    }
