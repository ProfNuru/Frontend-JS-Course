
// Ask user for amount in dollars
let dollar_amount = prompt("Enter amount in dollars")
console.log(typeof(dollar_amount))

dollar_amount = parseFloat(dollar_amount)
console.log(typeof(dollar_amount))

// Convert to Ghana cedis and print
let cedi_amt = 10.1 * dollar_amount
console.log(cedi_amt)
