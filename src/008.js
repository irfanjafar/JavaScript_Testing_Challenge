function arrayMirroring(numberList){
    let list2 = [...numberList].reverse()
    return [...numberList,...list2]    
}
module.exports = arrayMirroring