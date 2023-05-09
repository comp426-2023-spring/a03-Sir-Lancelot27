// Valid choises for RPS and RPSLS Games
const choicesRPS = [ 'rock','paper','scissors'];
const choicesRPSLS = [ 'rock','paper','scissors','lizard','spock'];

// Function for Rock Paper Scissors game
export function rps(shot) {
    // Get random oppononent shot
    let oppShot = choicesRPS[Math.floor(Math.random() * choicesRPS.length)];

    // Check if an invalid shot
    if (shot == undefined || shot == null)
        return {"player": oppShot};
    
    // Check if shot is a valid choice
    let shot = shot.toLowerCase();
    if (!choisesRPS.indluces(shot)){
        console.error(shot + " is out of range.");
        console.log(
            `Rules for Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock CRUSHES Scissors`
        );
        process.exit(1);
    }

    // Output structure
    let output = {"player": shot, "opponenet": oppShot};

    // Switch case to identify output
    switch (shot) {
        case 'rock': 
            output['result'] = oppShot == 'rock' ? 'tie' : oppShot == 'paper' ? 'lose' : 'win';
            break;
        case 'paper':
            output['result'] = oppShot == 'rock' ? 'win' : oppShot == 'paper' ? 'tie' : 'lose';
            break;
        case 'scissors':
            output['result'] = oppShot == 'rock' ? 'lose' : oppShot == 'paper' ? 'win' : 'tie';
            break;
    }
    return output;
}

// Function for Rock Paper Scissors Lizard Spock game
export function rpsls(shot) {
    // Get random oppononent shot
    let oppShot = choicesRPSLS[Math.floor(Math.random() * choicesRPSLS.length)];

    // Check if an invalid shot
    if (shot == undefined || shot == null)
        return {"player": oppShot};
    
    // Check if shot is a valid choice
    let shot = shot.toLowerCase();
    if (!choisesRPSLS.indluces(shot)){
        console.error(shot + " is out of range.");
        console.log(
            `Rules for the Lizard-Spock Expansion of Rock Paper Scissors:

            - Scissors CUTS Paper
            - Paper COVERS Rock
            - Rock SMOOSHES Lizard
            - Lizard POISONS Spock
            - Spock SMASHES Scissors
            - Scissors DECAPITATES Lizard
            - Lizard EATS Paper
            - Paper DISPROVES Spock
            - Spock VAPORIZES Rock
            - Rock CRUSHES Scissors`
        );
        process.exit(1);
    }

    // Output structure
    let output = {"player": shot, "opponenet": oppShot};

    // Switch case to identify output
    switch (shot) {
        case 'rock': 
            output['result'] = oppShot == 'rock' ? 'tie' : oppShot == 'paper'  || oppshot == 'spock' ? 'lose' : 'win' ;
            break;
        case 'paper':
            output['result'] = oppShot == 'rock' || oppShot == 'spock' ? 'win' : oppShot == 'paper' ? 'tie' : 'lose';
            break;
        case 'scissors':
            output['result'] = oppShot == 'rock' || oppShot == 'spock' ? 'lose' : oppShot == 'paper' || oppShot == 'lizard' ? 'win' : 'tie';
            break;
        case 'lizard':
            output['result'] = oppShot == 'lizard' ? 'tie' : oppShot == 'paper'  || oppshot == 'scissors' ? 'lose' : 'win' ;
            break;
        case 'spock':
            output['result'] = oppShot == 'spock' ? 'tie' : oppShot == 'paper'  || oppshot == 'lizard' ? 'lose' : 'win' ;
            break;
    }
    return output;
}