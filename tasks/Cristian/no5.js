function cetaktabel(n){
    if (typeof n !== "number" || n <= 0){
        console.log("Parameter harus bertipe data number dan positif");
        return ;
    } 
    for(let i =1; i <= 10;i++){
        console.log(`${n} * ${i} = ${n * i}`);
    }
}
module.exports=cetaktabel;
