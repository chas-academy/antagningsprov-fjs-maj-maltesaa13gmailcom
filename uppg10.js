function uppg10(){
    const numbers = [5, 12, 7, 10, 20, 9, 11];
  
    // skapa tre arrayer - bigEven, smallOdd, other
    // loopa igenom numbers och placera talen i respektive array
    // bigEven ska innehålla tal större än 10 och jämnt delbara med 2
    // smallOdd ska innehålla tal mindre än 10 och udda
    // other ska innehålla alla andra tal
    // returnera ett objekt med de tre arrayerna
    let bigEven = []
    let smallOdd = []
    let other = []

    for (let number of numbers){
      
      // Talet är mer än 10 och jämnt
      if ((number > 10) && ((number % 2) === 0)){
        bigEven.push(number)
      }
      // Talet är mindre än 10 och inte jämnt
      else if ((number < 10) && ((number % 2) !== 0)){
        smallOdd.push(number)
      }
      // Alla andra tal
      else{
        other.push(number)
      }
      
    }
    
    return {bigEven, smallOdd, other}
}
  
module.exports = { uppg10 };