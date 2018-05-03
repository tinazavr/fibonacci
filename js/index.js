function fibonacci(order) {
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

function runFib() {
    const order = parseInt(prompt());
    const result = fibonacci(order);
    alert(result);
}