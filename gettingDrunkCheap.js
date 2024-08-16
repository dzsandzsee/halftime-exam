function gettingDrunkCheap(drinks) {
  //write your code here
  drinks.forEach(drink => { 
    drink.pricePerAbv = Math.floor(drink.price / drink.volume / drink.abv)
    
  });
  drinks.sort((a, b) => a.pricePerAbv - b.pricePerAbv)
  return drinks[0]
}

module.exports = gettingDrunkCheap
