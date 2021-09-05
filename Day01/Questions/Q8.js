/* Title: 
Decimal To Binary 

Meta-Tags:
Javascript, JS, interview, questions, interview questions, primitive,functions,practice,medium 

Description:
Write a function 'decToBin' which takes a decimal number and returns its binary.

Constraints:
Nil

Sample Input:
45

Sample Output:
101101

Test Cases:
    Input#1:
    86

    Output#1:
    1010110


    Input#2:
    3672

    Output#2:
    111001011000 */


function decToBin(deci){
    let bits = [];
    let rem = 0;
    let divi = deci;
   
    while(divi > 0){
        console.log(divi);
        rem = divi % 2;
        bits.unshift(rem);
        divi = (divi - rem) / 2;

        
    }
    console.log(bits);
    return bits.join("");

}

console.log(decToBin(45));