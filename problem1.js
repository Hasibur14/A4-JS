
function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Please provide a valid integer number";
    }
    const ticketPrice = 120;
    let perDayTicketSale = ticketSale * ticketPrice;
    const perDayExpenses = 500 + (50 * 8);
    let totalAmount = perDayTicketSale - perDayExpenses;
    return totalAmount;


}
const ticket = calculateMoney(-130);
console.log(ticket);