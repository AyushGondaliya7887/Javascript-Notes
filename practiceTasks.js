//Reverse the string 
{
    {
        let str = 'Abcdefghijklmnopqrstuvwxyz'
        // let a = 9
        //function to reverse string
        function reversedString (string){
            if((typeof string) === 'string'){
                return string.split('').reverse().join('')
            }
            else{
                throw `Please enter a string as an argument.`
            }
        }
        let newSring = reversedString(str)
        console.log(newSring)
    }
}
// check is the object is an array type or not
{
    function checkIfArray(obj){
        return Array.isArray(obj)
    }
    console.log(checkIfArray([]))
    console.log(checkIfArray({}))
}
// How to empty an array
{
    //reset array
    {
        let arr = [1,2,3,4,5]
        arr = []
        console.log(arr)
    }
    //reset array length
    {
        let arr = [1,2,3,4,5]
        arr.length = 0
        console.log(arr)
    }
    //using pop and loop
    {
        let arr = [1,2,3,4,5]
        console.log(arr)
        while(arr.length>0){
            arr.pop()
        }
        console.log(arr)
    }
}
// check if the value is integer 
{
    // isInteger()
    {
        let a = 16
        let b = 12.5
        console.log(Number.isInteger(a))
        console.log(Number.isInteger(b))
    }
    // using mathamatical logic 
    {
        let a = false
        function intCheck(num){
            if(typeof num === 'number'){
                if(num === 0 || num%1 === 0){
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
        }
        console.log(intCheck(a))
    }
}
// duplicate the array in same array
{
    let arr = [1,2,3,4,5]
    console.log(arr)
    newArr = arr.concat(arr)
    console.log(newArr)
}
// write a funciton to reverse a number
{
    {
        let a = 687
        console.log(Number(a.toString().split('').reverse().join('')))
    }

    {
        let a = 687
        function reverseNumber(num){
            let result = 0
            let temp = 0
            while(num !== 0){
                temp = num % 10
                result = (result*10)+temp
                num = Math.floor(num/10)
            }
            return result
        }
        let newString = reverseNumber(a)
        console.log(a);
        console.log(newString);
    }
}
// Palindremic string check
{
    {
        let str = 'AnanA'
        let tempStr = str.split('').reverse().join('')
        let result = tempStr ? tempStr === str : false
        console.log(result)
    }
    {
        let str = 'AnanA'
        function PalindromicStrCheck(str){
            let tempStr = ''
            for(let i = str.length-1 ; i >= 0 ; i--){
                tempStr += str[i]
            }
            console.log(tempStr)
            if(str === tempStr){
                return true
            } else {
                return false
            }
        }
        console.log(PalindromicStrCheck(str))
    }
}
// write a function to arrange the string in alphabetical order
{
    {
        let str = 'Aayush'
        function sortedString(str){
            return str.split('').sort().join('')
        }
        console.log(sortedString(str))
    }
}
// function that accepts a string as a parameter and returns the array with first letter capital of each word
{
    let string = 'sav suvado nathi aa rakio bharat re kayad desh re, megh dheri, trishul dhari, maro chakri dhari vasudev cheeee...'
    function firstCapitalWords(str){
        return str.split(' ').map((word)=> word.charAt(0).toUpperCase().concat(word.substring(1))).join(' ')
    }
    console.log(firstCapitalWords(string))
}
// function to count the occurance of a partiular word in a string.
{
    let string = 'sav suvado nathi aa rakio bharat re kayad desh re, megh dheri, trishul dhari, maro chakri dhari vasudev cheeee...'
    function countLetter (str,cmpLetter){
        let count = 0
        str.split('').forEach(letter => {
            if(letter === cmpLetter){
                count++
            }
        });
        return count
    }
    console.log(countLetter(string,'s'));
}
// function to get all the letters and their number of occurances in the whole string
{
    let string = 'sav suvado nathi aa rakio bharat re kayad desh re, megh dheri, trishul dhari, maro chakra dhari vasudev cheeee...'
    function lettersTracker(str){
        let allStrLetters = {total:0}
        str.split('').sort().forEach((letter)=> {
            if (allStrLetters.hasOwnProperty(letter)){
                allStrLetters[`${letter}`] += 1 
            } else{
                allStrLetters[`${letter}`] = 1
            }
            allStrLetters.total += 1
        })
        return allStrLetters
    }
    console.log(lettersTracker(string));
}
// loop through array and add the elements
{
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let total = 0
    a.forEach((num)=>{
        total += num
    })
    console.log(total)
}
// In array of number and string add those which are numbers
{
    let a = [ 15, 'apple', 28, 'oranges', 38, 'bananas', '5 box', 'grapes']
    function addNumsOnly(arr){
        if(Array.isArray(arr)){
            total = 0
            arr.forEach((item)=>{
                if(typeof item === 'number'){
                    total += item
                }
            })
            return total
        }
    }
    console.log(addNumsOnly(a))
}
{
    let obj = [
        {name: 'ankit', age: 21, gender: `M`},
        {name: 'ankit', age: 23, gender: `F`},
        {name: 'ankit', age: 28, gender: `F`},
        {name: 'ankit', age: 25, gender: `M`},
        {name: 'ankit', age: 21, gender: `M`},
        {name: 'ankit', age: 22, gender: `F`},
        {name: 'ankit', age: 31, gender: `M`},
        {name: 'ankit', age: 38, gender: `F`},
        {name: 'ankit', age: 32, gender: `F`},
        {name: 'ankit', age: 24, gender: `M`},
    ]
    function selectMales2(objArr){
        return objArr.filter((obj)=> obj.gender === 'm' || obj.gender === 'M' )
    }
    console.log(selectMales2(obj))
}
// function to colne an array
{
    let cloneArr = (...arr) => arr
    console.log(cloneArr(54,63,57,83));
}
// function that returns the typeof argument passed
{
    let obj = []
    let bool = true
    let num = 54
    let str = 'Ankit'
    let undef = undefined
    let empty = null
    let typeTeller = (variable) => (typeof variable)

    console.log(typeTeller(obj)) 
    console.log(typeTeller(bool)) 
    console.log(typeTeller(num)) 
    console.log(typeTeller(str)) 
    console.log(typeTeller(undef)) 
    console.log(typeTeller(empty)) 
    console.log(typeTeller(typeTeller)) 
}
// function to return first n elements of an array and returns first element if no arguments is passes.
{
    
} 