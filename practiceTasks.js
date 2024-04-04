//1 Reverse the string 
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
//2 check is the object is an array type or not
{
    function checkIfArray(obj){
        return Array.isArray(obj)
    }
    console.log(checkIfArray([]))
    console.log(checkIfArray({}))
}
//3 How to empty an array
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
//4 check if the value is integer 
{
    //4.1 - isInteger()
    {
        let a = 16
        let b = 12.5
        console.log(Number.isInteger(a))
        console.log(Number.isInteger(b))
    }
    //4.2 - using mathamatical logic 
    {
        let a = Infinity
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
//5 duplicate the array in same array
{
    {
        let arr = [1,2,3,4,5]
        console.log(arr)
        arr = arr.concat(arr)
        console.log(arr)
    }
    {
        let arr = [1,2,3,4,5]
        console.log(arr)
        arr = [...arr,...arr]
        console.log(arr)
    }
}
//6 write a funciton to reverse a number
{
    //6.1
    {
        let a = 687
        console.log(Number(a.toString().split('').reverse().join('')))
    }
    //6.2
    {
        let a = 687
        function reverseNumber(num){
            if(typeof num === 'number' && ( (Number.isInteger(num)) || (num%1!==0) )){
                let result = 0
                let temp = 0
                while(num !== 0){
                    temp = num % 10
                    result = (result*10)+temp
                    num = Math.floor(num/10)
                }
                return result
            } else {
                error = `Please enter a number instead of ${typeof num}`
            }
        }
        let newString = reverseNumber(a)
        console.log(a);
        console.log(newString);
    }
}
//7 Palindremic string check
{
    //7.1
    {
        let str = 'AnanA'
        let tempStr = str.split('').reverse().join('')
        let result = tempStr ? tempStr === str : false
        console.log(result)
    }
    //7.2
    {
        let str = 'AnanA'
        function PalindromicStrCheck(str){
            if (typeof str === 'string') {
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
            } else {
                let error = `Please enter a string instead of ${typeof str}`
                throw error
            }
        }
        console.log(PalindromicStrCheck(str))
    }
}
//8 write a function to arrange the string in alphabetical order
{
    //8.1
    {
        let str = 'Aayush'
        function sortedString(str){
            if (typeof str === 'string') {
                return str.split('').sort().join('')
            } else{
                let error = `Please enter a string instead of ${typeof str}`
                throw error
            }
        }
        console.log(sortedString(str))
    }
}
//9 function that accepts a string as a parameter and returns the array with first letter capital of each word
{
    let string = 'sav suvado nathi aa rakio bharat re kayad desh re, megh dheri, trishul dhari, maro chakri dhari vasudev cheeee...'
    function firstCapitalWords(str){
        if (typeof str === 'string') {
            return str.split(' ').map((word)=> word
                                .charAt(0)
                                .toUpperCase()
                                .concat(word.substring(1))).join(' ')
        } else{
            let error = `Please enter a string instead of ${typeof str}`
            throw error
        }
    }
    console.log(firstCapitalWords(string))
}
//10 function to count the occurance of a partiular word in a string.
{
    let string = 'sav suvado nathi aa rakio bharat re kayad desh re, megh dheri, trishul dhari, maro chakri dhari vasudev cheeee...'
    function countLetter (str,cmpLetter){
        if (typeof str === 'string') {
            if (typeof cmpLetter === 'string' && cmpLetter.length === 1) {
                let count = 0
                str.split('').forEach(letter => {
                    if(letter === cmpLetter){
                        count++
                    }
                });
                return count
            } else {
                throw `Please enter a character to compare.`
            }
        } else{
            let error = `Please enter a string instead of ${typeof str}.`
            throw error
        }
    }
    console.log(countLetter(string,'s'));
}
//11 function to get all the letters and their number of occurances in the whole string
{
    let string = 'sav suvado nathi aa rakio bharat re kayad desh re, megh dheri, trishul dhari, maro chakra dhari vasudev cheeee...'
    function lettersTracker(str){
        if (typeof str === 'string') {
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
        } else{
            let error = `Please enter a string instead of ${typeof str}`
            throw error
        }
    }
    console.log(lettersTracker(string));
}
//12 loop through array and add the elements
{
    let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let total = a.filter((item) => {
        return (typeof item === "number") && ((Number.isInteger(item)) || (item % 1 !== 0));
    }).reduce((acc, num) => {
        return acc += num;
    }, 0);
    console.log(total);
    // a.forEach((num)=>{
    //     total += num
    // })
}
//13 In array of number and string add those which are numbers
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
        } else {
            let error = `Please enter a array instead of ${typeof arr}`
            throw error
        }
    }
    console.log(addNumsOnly(a))
}
//14 Filter the objects from array that has male as gender
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
//15 function to colne an array
{
    let cloneArr = (...arr) => arr
    console.log(cloneArr(54,63,57,83));
}
//16 function that returns the typeof for the argument variable passed
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
//17 function to return the first n elements of an array and returns the first element if no arguments are passed.
{
    //17.1 Using inbuilt functions
    {
        let arr = [ 15, 'apple', 28, 'oranges', 38, 'bananas', '5 boxes', 'grapes']
        function retrieveLastValues(arr, num=1){
            //Applying checks
            if (!(Array.isArray(arr))){
                let error = `Please enter an array instead of ${typeof arr}`
                throw error
            }
            if(!(Number.isInteger(num)) || !(num>=0)){
                throw `Please enter a Positive integer.`
            } 
            if (!(num<=arr.length)) {
                let error = `The length of your array is ${arr.length}`
                throw error
            }

            let result = arr.slice(0,num)
            return result
        }
        console.log(retrieveLastValues(arr,5))
        console.log(arr);
    }
    //17.2 Logical way
    {
        let arr = [ 15, 'apple', 28, 'oranges', 38, 'bananas', '5 boxes', 'grapes']
        let str = 'Ankit'
        function retrieveFirstValues(arr, num = 1){
            // check if arr is an array
            if(Array.isArray(arr)){
                //check if num is a positive integer and not greater than the length of the array
                if( !(arr.length<num) && Number.isInteger(num) && num>=0 ){
                    let result = []
                    for(let i = 0 ; i<num ; i++){
                        result.push(arr[i])
                    }
                    return result
                } else {
                    if(!(Number.isInteger(num)) || !(num>=0)){
                        throw `Please enter a Positive integer.`
                    } else if (!(num<=arr.length)) {
                        let error = `The length of your array is ${arr.length}`
                        throw error
                    } else {
                        throw `Unknown Error`
                    }
                }
            } else {
                let error = `Please enter an array instead of ${typeof arr}`
                throw error
            }
        }
        console.log(retrieveFirstValues(arr))
    }
} 
//18 function to return the last n elements of an array and returns the last element if no arguments are passed.
{
    //18.1 Using built-in Functions
    {
        let arr = [ 15, 'apple', 28, 'oranges', 38, 'bananas', '5 boxes', 'grapes']
        function retrieveLastValues(arr, num=2){
            //Applying checks
            if (!(Array.isArray(arr))){
                let error = `Please enter an array instead of ${typeof arr}`
                throw error
            }
            if(!(Number.isInteger(num)) || !(num>=0)){
                throw `Please enter a Positive integer.`
            } 
            if (!(num<=arr.length)) {
                let error = `The length of your array is ${arr.length}`
                throw error
            }

            let result = arr.slice(-num)
            return result.reverse()
        }
        console.log(retrieveLastValues(arr))
        console.log(arr)
    }
    //18.2 Logical way
    {
        let arr = [ 15, 'apple', 28, 'oranges', 38, 'bananas', '5 boxes', 'grapes']
        function retrieveLastValues(arr, num = 0 ){
            //check if arr is an array
            if(Array.isArray(arr)) {  
                //check it num is an positive integer and not greater than length of array
                if( Number.isInteger(num) && num>=0 && num<=arr.length ){
                    let result = []
                    let i = (arr.length)-1
                    do {
                        result.push(arr[i])
                        i--
                        num--
                    } while (num>0)
                    return result
                } else {
                    if(!(Number.isInteger(num)) || !(num>=0)){
                        throw `Please enter a Positive integer.`
                    } else if (!(num<=arr.length)) {
                        let error = `The length of your array is ${arr.length}`
                        throw error
                    } else {
                        throw `Unknown Error`
                    }
                }
            } else {
                let error = `Please enter an array instead of ${typeof arr}`
                throw error
            }
        }
        console.log(retrieveLastValues(arr))
    }
}
//19 function to return the highest repeated item from the array
{
    let arr = [1,1,1,2,2,2,3,3,3,4,5,0]
    function highlyRepeatedElement(arr){
        //check if parameter passed is an array
        if(Array.isArray(arr)){
            let frequency = {}
            //check if all the items in array is num and if they are num adding instrting values in frequency object.
            arr.forEach((item)=>{
                if( Number.isInteger(item)){        //if item is a integer value
                    if (frequency.hasOwnProperty(`${item}`)) frequency[`${item}`] += 1 
                    else frequency[`${item}`] = 1
                } else if ( item !== Math.floor(item) ){  //if item is a float value
                    if (frequency.hasOwnProperty(`${item}`)) frequency[`${item}`] += 1 
                    else frequency[`${item}`] = 1
                } else {
                    throw `Your array must contain only integer or float values.`
                }
            })
            // finding the highest count of any number of keys
            let highestCount = Math.max(...Object.values(frequency))
            // obtaining the keys which has there count equal to highest count
            let keys = Object.keys(frequency).reduce( ( acc , key )=>{
                if (frequency[key] === highestCount) {
                    acc.push(Number(key))
                }
                return acc
            }, [])
            let result = {
                numbers: keys,
                count: highestCount}
            return result
        } else {
            let error = `Please enter an array instead of ${typeof arr}`
            throw error
        }
    }
    console.log(highlyRepeatedElement(arr))
}
//20 Suffle an array 
{
    let arr = [1,2,3,4,5,6,7,8]
    function suffleArray(arr){
        if(Array.isArray(arr)){
            let newArr = [...arr]
            for (let i = 0; i < newArr.length; i++) {
                let range = Math.floor((Math.random()* newArr.length));
                [newArr[i] , newArr[range]] = [newArr[range] , newArr[i]]
            }
            return newArr
        } else {
            error = `Please enter an array instead of ${typeof arr}`
            throw error
        }
    }
    console.log(arr);
    console.log(suffleArray(arr))
}
//21 write a function to find the union of two arrays
{
    let arr1 = [1,2,3,4,5,6,7,8]
    let arr2 = [5,6,7,8,9,10,11,12]
    function arrUnion(arr1, arr2){
        if ( !(Array.isArray(arr1)) || !(Array.isArray(arr2))) {
            throw new Error `Please enter arrays.`
        }
        return [...new Set(arr1.concat(arr2))]
    }
    console.log(arrUnion(arr1,arr2))
}