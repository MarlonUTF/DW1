function reverseString(strg) {
    return strg.split("").reverse().join("")
}

function countVowels(strg) {
    const vogais = "aeiouAEIOU";
    let contador = 0;

    for (let letra of strg) {
        if (vogais.includes(letra)) {
            contador++;
        }
    }
    return contador;
}

function isPalindrome(strg){
    if (reverseString(strg) == strg) {
        return true
    }
    else {
        return false
    }
}

function countOccurrences(strng, char) {
    let contador = 0;

    for (let letra of strng) {
        if (letra === char) {
            contador++;
        }
    }
    return contador;
}

function getInitials(nome) {
    return nome
        .split(" ")                    
        .map(word => word[0].toUpperCase()) 
        .join(``);                     
}

function toSnakeCase(strng) {
    return strng
        .toLowerCase()       
        .replace(/\s+/g, "_"); 
}

function capitalizeWords(strng) {
    return strng
        .split(" ")                          
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) 
        .join(" ");                          
}

function trimSpaces(strng) {
    return strng
        .trim()                           
        .replace(/\s+/g, " ");            
}

function replaceChar(strng, mudar, letra) {
    return strng.split(mudar).join(letra);
}


console.log(reverseString("hello"))
console.log(countVowels("JavaScript"))
console.log(isPalindrome("arara"))
console.log(countOccurrences("banana", "a"))
console.log(getInitials("Rafael Liberato")); 
console.log(toSnakeCase("JavaScript is fun"));
console.log(capitalizeWords("javaScript is awesome"));
console.log(trimSpaces("   JavaScript    é     divertido    "));
console.log(replaceChar("hello world", "l", "z"));

