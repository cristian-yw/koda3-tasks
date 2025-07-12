function countarray(arr){
    if(!Array.isArray(arr)){
        return "Parameter harus berupa array ";
    }
    let hasil = 1;
    for(let i = 0; i < arr.length;i++){
        if (typeof arr[i] !== "number"){
            return "Parameter harus number";
        }
        hasil *=arr[i];
    }
    console.log(hasil);
}
module.exports = countarray;
