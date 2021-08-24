1) Given a string containing tags and text (<div><h1>blahBlah</h1></div>) return true if the string is valid HTML and false otherwise. Valid inputs have the correct closing tags in the correct places.
Possible tags are: div, h1, em and p 

ex. Input (<div></div><p></p>) → true

ex. Input (<div><p><em></em></p></div> → true

ex. Input (<div><h1></div></h1>) → false

ex. <div><p></div></p> -> false
ex. <div><p></p></div> -> true

tagObj = { <div: </div, <h1: </h1, <em: </em, p: /p }

myDict = {}
myStack = [] 
myArray = str.split(‘>’)

input = “<div></div><p></p>”
inputArr = input.split(‘>’); // myStack[0] = <div 
			      // myStack[1] = </div
      // myStack[2] = <p
			      // myStack[3] = </p

for(let i = 0; i < inputArr.length; i++) {
	let temp = inputArr[i] 

	// if temp is a closing tag, see if 
	if (temp.includes(‘/’) {
		
		If (tagObj[temp] === myStack[myStack.length-1]) myStack.pop()
		Else return false
} else {
	myStack.push(temp)
}
}
Return true



































2) Write a function that takes a string parameter and return the smallest number you can get with the following reduction: The string will contain only ‘a’, ‘b’, and ‘c’. If two adjacent letters are different then replace them with the third (i.e. ‘ac’ is replaced with ‘b’ but ‘aa’ can’t be replaced by anything). This method is done repeatedly until the string cannot be further reduced and then the length of the string is returned. 

ex. Input (cab) → bb → 2

ex. Input (abcabc) → ccabc → cbbc → abc → cc → 2

ex. Input (cccc) → 4

Road map:
Create a dictionary with letters as keys and booleans as values 
{ ‘a’: false, ‘b’: false, ‘c’: false}
Create a return string 
Add pointer?
Change the first letter in myDict to true
Check the next letter, 
if same just move on, 
if different add second to myDict
      -    Recurse 
If I’m at the end of the string return the length of the string

const reduceString = (str, pointer=0, ) => {
	const myDict = {
‘a’: false,
		‘b’: false,
		‘c: false
}

if (pointer = str.length-1) return str.length 

let temp = ‘’;
const char = str[pointer]
if (str[pointer+1] !== char) {
myDict[char] = !myDict[char]  
pointer++ 
	myDict[char] = !myDict[pointer]
	for (let letter in myDict) {
		if (myDict[letter] === false) temp += letter
			str = temp += str.slice(pointer)   //b 
}
reduceString(str, pointer += 1)



