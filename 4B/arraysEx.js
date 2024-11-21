function sumArray(arr){
    let total = 0
    for (let i of arr){
        total += i
    }
    return `Ex 1: ${total}`
}
console.log(sumArray([1, 2, 3, 4]))

function findMax(arr){
    let maior = arr[0]
    for (let i of arr){
        if (i > maior){
            maior = i
        }
    }
    return `Ex 2: ${maior}`
}
console.log(findMax([1, 2, 3, 4, 5]))

function countOccurrences(arr, element){
    let contador = 0
    for (let i of arr){
        if (i === element){
            contador ++
        }
    }
    return `Ex 3: ${contador}`
}
console.log(countOccurrences([1, 2, 2, 3, 2], 2))

function allEquals(arr) {
    for (let i of arr) {
        if (i !== arr[0]) {
            return `Ex 4: false`;
        }
    }
    return `Ex 4: true`;
}
console.log(allEquals([1, 1, 1])); // Deve exibir: Ex 4: true

function removeDuplicates(arr) {
    let arrElemUnicos = [];
    for (let i of arr) {
        let isDuplicate = false;
        for (let j of arrElemUnicos) {
            if (i === j) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            arrElemUnicos.push(i);
        }
    }
    return `Ex 5: ${arrElemUnicos}`;
}
console.log(removeDuplicates([1, 2, 2, 3, 3, 3, 4]));

function average(arr) {
    let soma = 0;
    for (let i of arr) {
        soma += i;
    }
    let media = soma / arr.length;
    return `Ex 6: ${media}`;
}
console.log(average([1, 2, 3, 4]));

function mergeArrays(arr1, arr2) {
    let arrMesclado = [];
    for (let i of arr1) {
        arrMesclado.push(i);
    }
    for (let i of arr2) {
        arrMesclado.push(i);
    }
    return `Ex 7: ${arrMesclado}`;
}
console.log(mergeArrays([1, 2], [3, 4]));

function getEvenNumbers(arr) {
    let pares = [];
    for (let i of arr) {
        if (i % 2 === 0) {
            pares.push(i);
        }
    }
    return `Ex 8: ${pares}`;
}
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6]));

function reverseArray(arr) {
    let arrInvertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        arrInvertido.push(arr[i]);
    }
    return `Ex 9: ${arrInvertido}`;
}
console.log(reverseArray([1, 2, 3, 4]));

function findIndex(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return `Ex 10: ${i}`;
        }
    }
    return `Ex 10: -1`;
}
console.log(findIndex([1, 2, 3, 4], 3));