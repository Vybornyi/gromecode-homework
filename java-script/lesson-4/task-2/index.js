function uniqueCount(array){
    if (!Array.isArray(array)){
        return null;
    } 
    let  resultArray = [...new Set(array)];
    return resultArray.length;
}
let chars = [1,4,1,8,8,3,4,8,8];
console.log(unuqueCount(chars));