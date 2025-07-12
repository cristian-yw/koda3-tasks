function buatrentang(mulai, selesai){
    if (typeof mulai !== "number" || typeof selesai !== "number" || mulai > selesai){
        console.log("Parameter harus bertipe data number dan positif");
        return ;
    }
    let hasil = [];
    for (let i = mulai; i <= selesai; i++){
        hasil.push(i);
    }
    console.log(hasil.join(", "));
}
module.exports=buatrentang;
