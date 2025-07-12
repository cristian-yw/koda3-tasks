function segitiga(n){
    if (typeof n !== 'number' || n <= 0){
        console.log("Parameter harus bertipe data number dan positif")
        return ;
    } 
    for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = i; j >= 1; j--) {
      line += j + ' ';
    }
    console.log(line)
  }
  
}
module.exports = segitiga;