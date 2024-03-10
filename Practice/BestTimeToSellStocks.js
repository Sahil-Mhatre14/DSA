// var maxProfit = function(prices) {
//     var profits = []
//     for (let i = 0; i < prices.length; i++) {
//         profits[i] = 0
//         profits[i] = Math.max(profits[i], Math.max(...(prices.slice(i+1))) - prices[i])
//         console.log("profit", profits[i]);
//     }
//     return Math.max(...profits)
// };

var maxProfit = function(prices) {
    var maxP = 0;
    var left = 0;
    var right = 1;

    while (right < prices.length) {
        if (prices[right] > prices[left]) {
            var profitFromTransaction = prices[right] - prices[left]
            maxP = Math.max(maxP, profitFromTransaction )
        } else{
            left = right
        }
        right++
    }
    return maxP
};


console.log("Max profit", maxProfit([7,1,5,3,6,4]));