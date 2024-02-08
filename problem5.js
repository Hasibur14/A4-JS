function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }

    let totalIncome = 0;
    let totalTax = 0; 
    for (let payment of payments) {
        let tax = 0;
        if (payment >= 3000) {
            tax = payment * 0.2;          
        }
        totalTax += tax; 
        totalIncome += payment; 
    }
   
    let totalSavings = totalIncome - totalTax - livingCost;

    if (totalSavings >= 0) { 
        return totalSavings;
    } else {
        return "earn more";
    }
}

console.log(monthlySavings([1000, 2000, 3000], 5400)); 
console.log(monthlySavings([1000, 2000, 2500], 5000)); 
console.log(monthlySavings([900, 2700, 3400], 10000)); 
console.log(monthlySavings(100, [900, 2700, 3400])); 
