function solve(meal_cost, tip_percent, tax_percent) {
    console.log(parseInt(Math.round(meal_cost*(1+tip_percent/100 + tax_percent/100))))
}