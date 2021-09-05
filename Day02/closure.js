// closure is a combination of function and it's lexical scope bundled together forms a closure;

function outer(){

    var a = 10;
    function inneer(){
        var b = 20;
        console.log(a  +b);

    }

    inneer();
}

outer();

// using closure we can memoize things so we can recollect things after
function memo(){
    let memo =  {};
    return function(num){}
    if(num < 2){
        return num;
    }
}