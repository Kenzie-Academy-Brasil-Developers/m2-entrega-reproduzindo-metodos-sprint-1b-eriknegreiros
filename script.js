//////////////////// For Each -  Faz o Loop no array

function newForEach(callback, array) {
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        callback(currentValue, i, array)
    }
    return callback
}

function forEachPadrao() {
    const array = []
    array.forEach((currentValue, index, array) => {
        return currentValue, index, array
    })
}

/////////////////////////////////////////////////////

//////////////////// Map -  Cria um novo array apartir de um array
function newMap(callback, array) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i]
        arr.push(callback(currentValue, i, array))
    }
    return arr
}

function mapPadrao() {
    const arr = []
    let retornaArr = arr.map((elemento) => {
        return elemento
    })
    return retornaArr
}

/////////////////////////////////////////////////////

//////////////////// Filter -  cria uma condicional

function newFilter(callback, array) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i], i, array) === true) {  // aqui estou chamando o meu callback como função e   chamando os parametros
            arr.push(array[i]) //, se dar true ele vai jogar dentro do meu array
        }
    }
    return arr
}


function filterPadrao() {
    const arr = [1, 2, 3, 4, 5, 6]
    const retornaArr = arr.filter((elemento) => {
        return elemento % 2 === 0 //// fiz o teste da condicional se o númer for par
    })
    return retornaArr
}

/////////////////////////////////////////////////////

//////////////////// Find -  cria uma condicional e volta o primeiro número que passar no teste

function newFind(callBack, array) {
    for (let i = 0; i < array.length; i++) {
        if (callBack(array[i], i, array)) {
            return array[i] // segue o mesmo conceito do filter, mas aqui ele vai retornar o primeiro array[i] que passar na condicional
        }
    }
    return undefined;
}


function findPadrao() {
    const arr = []
    const retornaArr = arr.find((elemento) => {
        return elemento % 2 === 0
    })
    return retornaArr //// vai retornar o primeiro elemento par do array
}



//////////////////// IndexOf -  cria uma condicional e volta o primeiro número que passar no teste

function newIndexOf(value, callBack, array) {
    if (callBack < 0) {
        return -1;             /// se o calback for menor que 0, ele volta : -1
    }
    for (let i = callBack; i < array.length; i++) {
        const currentValue = array[i];

        if (currentValue === value) {   /// se o meu valor atual, for igual ao  valor, ele volta o mesmo
            return i;

        } else {
            return -1
        }
    }
}

function indexOfPadrao() {
    const str = 'Kenzie Academy Brasil é a melhor escola de programação'
    return str.indexOf('melhor') ////// vai retornar a posição do indice da palavra
}




/////////////////////////////////////////////////////
//////////////////// Includes -  determina se um array contém um determinado elemento, retornando true ou false

function newIncludes(value, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true; //// validação, se o meu array[i], tiver o valor que eu colocar ele vai me retornar true
        }
    }
    return false;
}


function includesPadrao() {
    const arr = [1, 2, 3, 4]
    const retornaArr = arr.includes(5)
    return retornaArr ///////// vai retornar false, pois o 5 não está no array
}


/////////////////////////////////////////////////////
//////////////////// Reduce -  executa uma função reducer (fornecida por você) para cada elemento do array


function newReduce(callBack, array) {

    const acumulador = 0;
    for (let i = 0; i < array.length; i++) {
        const currentValue = array[i];
        acumulador += currentValue; ///// o acumulador para fazer a soma
    }
    return acumulador;
}


function reducePadrao() {
    const arr = [1, 2, 3, 4];
    const retornaArr = arr.reduce((acumulador, currentValue)=>{
        return acumulador += currentValue;
    })
    return retornaArr //// vai retornar 10, a soma dos numeros do array
}

