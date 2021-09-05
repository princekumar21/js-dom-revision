/* Title:
Pot Nicking

Meta-Tags:
Javascript, JS, interview, questions, interview questions, primitive,functions,practice,medium 

Description:
A spoonerism is an error in speech in which corresponding consonants, vowels, or morphemes are switched between two words in a phrase. 
For example,

    kite flying becomes fite klying

Your task is to create a function 'spoon' that takes a string of two words, separated by a space and returns a spoonerism of those words in a string, as in the above example.
Note: Input will always contain 2 words

Sample Input:
kite flying

Sample Output:
fite klying

Test Cases:

    Input#1:
    "not picking"

    Output#1:
    "pot nicking"


    Input#2:
    "horse riding"
    
    Output#2:
    "rorse hiding" */

function spoon(str1) {
  let arr = str1.split(" ");
  let char1 = arr[0][0];
  let char2 = arr[1][0];

  return char2 + arr[0].slice(1) + " " + char1 + arr[1].slice(1);
}

console.log(spoon("horse riding"));
