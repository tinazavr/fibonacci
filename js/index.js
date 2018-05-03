function fibonacciLoop(order) {
    if (order === 1 || order === 2) {
        return '1';
    }
    
    let fib1 = 1;
    let fib2 = 1;
    let fib3 = fib1 + fib2;

    for (let i = 3; i < order; i++) {
        fib1 = fib2;
        fib2 = fib3;
        fib3 = fib1 + fib2;
    }   
    return fib3;
}

function runFibLoop() {
    const order = parseInt(prompt());
    const result = fibonacciLoop(order);
    alert(result);
}


function fibonacciRecursion (order){
    if (order <= 1) {
        return order;
    }
    return fibonacciRecursion(order-1) + fibonacciRecursion(order-2);
}

function runFibRecursion() {
    const result = fibonacciRecursion(parseInt(prompt()));
    alert(result);
}