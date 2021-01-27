'use-strict';

console.log('i am alive');

let arrHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 am','1:00 pm','2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  averageCookiesPerCust: 6.3,

  // method that generates random num customer/hour

  randomCust: function(){
    let randomNumber = Math.floor(Math.random()*((this.maxCust-this.minCust+1)+this.minCust));
    return randomNumber;
  },

  // method that calcs/store sim num cookies purch/hour/location using avg cookies * rando customers

  randomCookiesPurch: function(){
    let calcNum = this.randomCust()*this.averageCookiesPerCust;
    let randomNum = Math.floor(calcNum);
    return randomNum;
  },

  // store results in seperate arr

  arrSeattle: []

};

// proof of life: object method

console.log(Seattle.randomCust());
console.log(Seattle.randomCookiesPurch());
