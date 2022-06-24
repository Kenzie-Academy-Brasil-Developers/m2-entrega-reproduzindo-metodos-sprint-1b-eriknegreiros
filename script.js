function newForEach(callBack) {
    for (let i = 0; i < this.length; i++) {
        const valorAtual = this[i]
        callBack(valorAtual, i, this)
    }
}

Array.prototype.newForEach = newForEach

/////////////////////////////////////////////////////////////////////////

function newMap(callBack, array) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
        const valorAtual = array[i]
        arr[i] = callBack(valorAtual, i, array)
    }
    return arr
}
Array.prototype.newMap = newMap

/////////////////////////////////////////////////////////////////////////

function newFilter(callBack, array) {
    const arr = []
    for (let i = 0; i < array.length; i++) {
        const valorAtual = array[i]
        const resultado = callBack(valorAtual)
        if (resultado) arr[arr.length] = valorAtual
    }
    return arr
}
Array.prototype.newFilter = newFilter

/////////////////////////////////////////////////////////////////////////

function newFind(callBack) {
    for (let i = 0; i < this.length; i++) {
        if (callBack(this[i], i, this)) {
            return this[i]
        }
    }
    return undefined
}
Array.prototype.newFind = newFind

/////////////////////////////////////////////////////////////////////////

function newIndexOf(valor, valoInicial = 0) {
    if (valoInicial < 0) {
        return -1;
    }

    for (let i = valoInicial; i < this.length; i++) {
        const valorAtual = this[i]

        if (valorAtual === valor) {
            return i

        }
    }
    return -1
}
Array.prototype.newIndexOf = newIndexOf

/////////////////////////////////////////////////////////////////////////

function newIncludes(valor) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === valor) {
            return true
        }
    }
    return false

}
Array.prototype.newIncludes = newIncludes

/////////////////////////////////////////////////////////////////////////

function newReduce(callBack) {
    const valorAtual = 0;
    for (let i = 0; i < this.length; i++) {
        const valor = this[i]
        valorAtual += valor
    }
    return valorAtual

}
Array.prototype.newReduce = newReduce   
