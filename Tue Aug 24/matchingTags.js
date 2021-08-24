/*
1) Given a string containing tags and text(<div><h1>blahBlah</h1></div>) return true if the string is valid HTML and false otherwise.Valid inputs have the correct closing tags in the correct places.
Possible tags are: div, h1, em and p

ex.Input(<div></div><p></p>) → true

ex.Input(<div><p><em></em></p></div> → true

ex.Input(<div><h1></div></h1>) → false

ex. < div > <p></div></p > -> false
ex. < div > <p></p></div > -> true
*/

let str = '<div></div><p></p>'
const matchingTags = (str) => {
    let tagObj = { '<div': '</div', '<h1': '</h1', '<em': '</em', '<p': '</p' }


    let inputArr = str.split('>');
    let myStack = [inputArr[0]]

    for (let i = 0; i < inputArr.length; i++) {
        let temp = inputArr[i]
        console.log('\t\t\t', temp)

        // if temp is a closing tag, see if 
        if (temp.includes('/')) {
            if (tagObj[temp] === myStack[myStack.length - 1]) myStack.pop()
            else return false
        } else {
            myStack.push(temp)
        }
        return true
    }
}

// console.log(matchingTags(str))

let str2 = '<div><h1></div></h1>'
console.log(matchingTags(str2))