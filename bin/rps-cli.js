#!/usr/bin/env node

import minimist from 'minimist';
import { rps } from "../lib/rpsls.js"

var args = minimist(process.argv.slice(2));

// Help lines
if(args.h || args.help) {
    console.log(
        `Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`
    );
	process.exit(0);
}

// Rule lines
if(args.r || args.rules) {
    console.log(
        `Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    );
	process.exit(0);
}

// Need _ for arguments without option associated with them
let shot = args._[0];

let output = rps(shot);
// If it outputted a range error return help and rule statements
if ( output instanceof Error) {
    console.log(
        `Usage: node-rps [SHOT]
        Play Rock Paper Scissors (RPS)
        
          -h, --help      display this help message and exit
          -r, --rules     display the rules and exit
        
        Examples:
          node-rps        Return JSON with single player RPS result.
                          e.g. {"player":"rock"}
          node-rps rock   Return JSON with results for RPS played against a simulated opponent.
                          e.g {"player":"rock","opponent":"scissors","result":"win"}`
    );
    console.log(
        `Rules for Rock Paper Scissors:

        - Scissors CUTS Paper
        - Paper COVERS Rock
        - Rock CRUSHES Scissors`
    );
}   
else {
    console.log(JSON.stringify(output));
}