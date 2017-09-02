
module.exports = function (arr,target) {
    var tar = [];
    var result = [];
    arr.forEach((e) =>{
        if(e !== target){
            result.push(e);
        }else {
            tar.push(target);
        }
    })
    return result.concat(tar).toString();
}