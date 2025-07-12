function countarray2(arr){
    if(!Array.isArray(arr)){
        return "Parameter harus berupa array ";
    }
    let hasil = 1;
    let adaganjil = false;
    for(let i = 0; i < arr.length;i++){
        if (arr[i] % 2 !== 0){
            hasil *=arr[i];
            adaganjil=true;
        }
    }
    console.log(hasil);
    return adaganjil ? hasil : 1;
   
}
module.exports = countarray2;
