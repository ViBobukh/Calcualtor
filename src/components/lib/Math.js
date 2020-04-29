function plus(a, b){
    return Number(a)+Number(b)
}

function minus(a,b){
    return (Number(a)-Number(b))
}

function division(a, b){
    return (b !== 0) ?  (Number(a)/Number(b)) : alert('Can\'\ t be divided by zero')
}

function multiplication(a, b){
    return (Number(a)*Number(b))
}

function squareRoot(a, b){
    return Math.sqrt(Number(a))
}

function square(a, b){
    return Number(a)**2
}

export {plus, minus, division, multiplication,square,squareRoot};