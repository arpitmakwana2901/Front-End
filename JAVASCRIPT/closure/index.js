// Closure

function outer(){
    let a = 10;
    let b = 10;
    
    function inner(){
        console.log(a+b);
    }

    a=20;
    b=20;
    return inner;
}

const innerFun = outer()
innerFun();
