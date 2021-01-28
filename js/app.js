'use strict';

// console.log('i am alive');

// DOM process: 1.Create Element --> 2.Give Content --> 3.Append
let myContainer = document.getElementById('container');
let ulSeattle = document.getElementById('seattle');

let arrHours = ['6:00 am','7:00 am','8:00 am','9:00 am','10:00 am','11:00 am','12:00 am','1:00 pm','2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm'];

let Seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  averageCookiesPerCust: 6.3,
  arrayCookiesSoldPerHour: [],
  sumCookiesTotal: 0,

  // method that generates random num customer/hour
  randomCustPerHour: function(){

    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);

  },

  // method that calcs/stores num cookies purch/hour/location using avg cookies * rando customers
  numCookiesPerHour: function(){

    let calcNumCookies = this.randomCustPerHour()*this.averageCookiesPerCust;
    let calcNumCookiesHourly = Math.floor(calcNumCookies);
    return calcNumCookiesHourly;

  },

  // method that creates an array based on the sim num cookies
  arrayCookies: function() {

    for (var i = 0; i < arrHours.length; i++) {
      this.arrayCookiesSoldPerHour.push(this.numCookiesPerHour());
    }
  },

  // //display arr on sales.html
  render: function(){

    for(var i=0;i<Seattle.arrayCookiesSoldPerHour.length;i++){
      this.sumCookiesTotal += this.arrayCookiesSoldPerHour[i];
      let ul = document.createElement('ul');
      ul.textContent = `${arrHours[i]}: ${this.arrayCookiesSoldPerHour[i]}`;
      ulSeattle.appendChild(ul);
    }
  }
};
Seattle.arrayCookies();
Seattle.render();
