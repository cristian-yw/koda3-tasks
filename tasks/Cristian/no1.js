 function triangle(n){
    if (typeof n !== 'number' || n <= 0){
        console.log("Parameter harus bertipe data number dan positif")
        return ;
    } 
    for (let i = 1; i <= n; i++) {
    let baris = '';
    for (let j = 1; j <= i; j++) {
      baris += j + ' ';
    }
    console.log(baris)
  }
  
}

module.exports = triangle;