//Get the factorial of a number

//is the product of all positive integers less than or equal to n
// 5x4x3x2x1 =120

function factorial(x){
 
    console.log(x);
    if(x === 0){
        console.log(`end of recursion`);
        return 1;
        
    }
    console.log(`its not 0, return ${x} * factorial(${x} - 1 = ${x-1})`);

    const toReturn = x * factorial(x-1);
   
    
    console.log('toReturn:', toReturn);

    return toReturn;


}

//console.log('factorial:', factorial(5));


function factorial2(x){

    if(x === 0 ){
        return 1; //this is the final result
    }
    
    return x * factorial2(x-1);
}

console.log('f2', factorial2(5));


/////////////////////////////////////////////////////////////////

//Find the greatest common divisor of two positive numbers (GCD)
// % modulus operator == remainder (5/2) remainder es 1
// 5 / 2 = 2
// 5 % 2 = 1

var gcd = function(a,b){
    console.log('a:',a,'b:',b);

    if(!b){
        console.log('end of recu');
        return a; // this is the final result
        
    }
    return gcd(b, a % b);

}

console.log(gcd(16, 24));
