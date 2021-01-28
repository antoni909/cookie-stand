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
  arrCookiesSoldPerHour: [],
  sumCookiesTotal: 0,

  // method that generates random num customer/hour
  randomCustPerHour: function(){
    let randomNumber = Math.floor(Math.random()*((this.maxCust-this.minCust+1)+this.minCust));
    return randomNumber;
  },

  // method that calcs/stores sim num cookies purch/hour/location using avg cookies * rando customers
  randomNumCookiesPerHour: function(){
    let calcNum = this.randomCustPerHour()*this.averageCookiesPerCust;
    let randomNum = Math.floor(calcNum);
    return randomNum;
  },

  // method that creates an array based on the sim num cookies
  renderArrSimCookies: function() {

    for (var i = 0; i < arrHours.length; i++) {
      this.randomNumCookiesPerHour().push();
      console.log(arr);

    }
  },

  // //display arr on sales.html
  // render: function(){
  //   for(var i=0;i<Seattle.arrCookiesSoldPerHour.length;i++){
  //     let ul = document.createElement('ul');
  //     ul.textContent = Seattle.arrCookiesSoldPerHour[i];
  //     ulSeattle.appendChild(ul);
  //   }
  // }
};

Seattle.renderArrSimCookies();
