// Atbash Cypher
function atBashCypher(input) {
    var codedInput = "";

    for (i = 0; i < input.length; i++) {
        var ascii = input.charCodeAt(i);

        if (ascii < 90) {
            ascii = 90 - ascii + 65;
        }
        else {
            ascii = 122 - ascii + 97;
        }

        codedInput += String.fromCharCode(ascii);
    }

    return codedInput;
}

// Cesar Cypher
function cesarCypher(input, displacement) {
    var codedInput = "";

    for (i = 0; i < input.length; i++) {
        var ascii = input.charCodeAt(i);

        if (ascii < 90) {
            ascii = ((ascii - 65) + (displacement % 26)) % 26;
        }
        else {
            ascii = ((ascii - 97) + (displacement % 26)) % 26
        }

        codedInput += String.fromCharCode(ascii);
    }

    return codedInput;
}

// Vigenère Cypher


// RSA Cypher



function main() {
    console.log(`AtBash Cypher for the input string (OlaMundo) -> ${atBashCypher("OlaMundo")}`);
    console.log(`Cesar Cypher for the input string (fulswrjudiia) with coeficient with value (-3) -> ${cesarCypher("fulswrjudiia", -3)}`);
    
}

main();