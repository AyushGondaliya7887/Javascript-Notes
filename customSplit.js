String.prototype.customSplit = function (seperator){
    if(typeof this === 'string'){
        if(typeof seperator === 'string'){
            let arr = ['']
            let arrIndex = 0
            if(seperator === ''){
                for(let i = 0; i < this.length ; i++){
                    arr[arrIndex] = this[i]
                    arrIndex++
                }
                return arr
            }else{
                for(let i = 0; i < this.length ; i++){
                    if(this[i] === seperator){
                        arrIndex++
                    }
                    arr[arrIndex] += this[i]
                }
                return arr
            }
        }else{
            throw `Please enter a string as an argument`
        }
    } else{
        throw `Invoke this function on string type variables only.`
    }
}

let str = 'Abcdefghij klmnopqrst uvwxyz'
newArray = str.customSplit(' ')
console.log(newArray)