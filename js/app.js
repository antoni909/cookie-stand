'use-strict';

console.log('i am alive');

let arSeattle = [];

let seattleShop = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  averageCookiesPerCust: 6.3,
  // method that generates random num customer/hour
  randomNumberCustomers: function(min=this.minCust, max=this.maxCust) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random()*((max-min+1)+min));
    let custPerHour = `${randomNum} customers per hour`;
    return custPerHour;
    //min and max are inclusive
  },
  randomNumberCookies: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    let randomNum = Math.floor(Math.random()*((max-min+1)+min));
    console.log(randomNum);
    let cookiesPerHour = `${randomNum} customers per hour`;
    return cookiesPerHour;
  }
};
// console.log(seattleShop.this.minCust);

//proof of life for randomNumberBetween() method
console.log(seattleShop.randomNumberCustomers());
console.log(seattleShop.randomNumberCookies());
