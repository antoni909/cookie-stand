'use strict';
// DOM process: 1.Create Element --> 2.Give Content --> 3.Append-to-Container
// let myContainer = document.getElementById('container');

let ulSeattle = document.getElementById('seattle');
let ulTokyo = document.getElementById('tokyo');
let ulDubai = document.getElementById('dubai');
let ulParis = document.getElementById('paris');
let ulLima = document.getElementById('lima');

let arrHours = ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 am','01:00 pm','02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];

let seattle = {
  location: 'Seattle',
  minCust: 23,
  maxCust: 65,
  averageCookiesPerCust: 6.3,
  arrayCookiesSoldPerHour:[],
  sumCookiesTotal: 0,
  randomCustPerHour: function(){
    // method that generates random num customer/hour
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numCookiesPerHour: function(){
    // method calcs/stores num cookies purch/hour/location: avg cookies * randomCustomers
    let calcNumCookiesHourly = Math.floor(this.randomCustPerHour()*this.averageCookiesPerCust);
    return calcNumCookiesHourly;
  },
  arrayCookies: function() {
    // method that creates an array based on the sim num cookies
    for (var i = 0; i < arrHours.length; i++) {
      this.arrayCookiesSoldPerHour.push(this.numCookiesPerHour());
      this.sumCookiesTotal += this.arrayCookiesSoldPerHour[i];
    }
  },
  render: function(){
    // //display array list
    this.arrayCookies();
    for(var i=0;i<this.arrayCookiesSoldPerHour.length;i++){
      let ul = document.createElement('ul');
      // ul.textContent = `${arrHours[i]}: ${this.arrayCookies()}`;
      ul.textContent = `${arrHours[i]}: ${this.arrayCookiesSoldPerHour[i]} cookies`;
      ulSeattle.appendChild(ul);
    }
    let totalCookies = document.createElement('ul');
    totalCookies.textContent =`Total: ${this.sumCookiesTotal} cookies` ;
    ulSeattle.appendChild(totalCookies);
  }
};

let tokyo = {
  location: 'tokyo',
  minCust: 3,
  maxCust: 24,
  averageCookiesPerCust: 1.2,
  arrayCookiesSoldPerHour:[],
  sumCookiesTotal: 0,
  randomCustPerHour: function(){
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numCookiesPerHour: function(){
    let calcNumCookiesHourly = Math.floor(this.randomCustPerHour()*this.averageCookiesPerCust);
    return calcNumCookiesHourly;
  },
  arrayCookies: function() {
    for (var i = 0; i < arrHours.length; i++) {
      this.arrayCookiesSoldPerHour.push(this.numCookiesPerHour());
      this.sumCookiesTotal += this.arrayCookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.arrayCookies();
    for(var i=0;i<this.arrayCookiesSoldPerHour.length;i++){
      let ul = document.createElement('ul');
      ul.textContent = `${arrHours[i]}: ${this.arrayCookiesSoldPerHour[i]} cookies`;
      ulTokyo.appendChild(ul);
    }
    let totalCookies = document.createElement('ul');
    totalCookies.textContent =`Total: ${this.sumCookiesTotal} cookies` ;
    ulTokyo.appendChild(totalCookies);
  }
};

let dubai = {
  location: 'dubai',
  minCust: 11,
  maxCust: 38,
  averageCookiesPerCust: 3.7,
  arrayCookiesSoldPerHour:[],
  sumCookiesTotal: 0,
  randomCustPerHour: function(){
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numCookiesPerHour: function(){
    let calcNumCookiesHourly = Math.floor(this.randomCustPerHour()*this.averageCookiesPerCust);
    return calcNumCookiesHourly;
  },
  arrayCookies: function() {
    for (var i = 0; i < arrHours.length; i++) {
      this.arrayCookiesSoldPerHour.push(this.numCookiesPerHour());
      this.sumCookiesTotal += this.arrayCookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.arrayCookies();
    for(var i=0;i<this.arrayCookiesSoldPerHour.length;i++){
      let ul = document.createElement('ul');
      ul.textContent = `${arrHours[i]}: ${this.arrayCookiesSoldPerHour[i]} cookies`;
      ulDubai.appendChild(ul);
    }
    let totalCookies = document.createElement('ul');
    totalCookies.textContent =`Total: ${this.sumCookiesTotal} cookies` ;
    ulDubai.appendChild(totalCookies);
  }
};

let paris = {
  location: 'paris',
  minCust: 20,
  maxCust: 38,
  averageCookiesPerCust: 2.3,
  arrayCookiesSoldPerHour:[],
  sumCookiesTotal: 0,
  randomCustPerHour: function(){
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numCookiesPerHour: function(){
    let calcNumCookiesHourly = Math.floor(this.randomCustPerHour()*this.averageCookiesPerCust);
    return calcNumCookiesHourly;
  },
  arrayCookies: function() {
    for (var i = 0; i < arrHours.length; i++) {
      this.arrayCookiesSoldPerHour.push(this.numCookiesPerHour());
      this.sumCookiesTotal += this.arrayCookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.arrayCookies();
    for(var i=0;i<this.arrayCookiesSoldPerHour.length;i++){
      let ul = document.createElement('ul');
      ul.textContent = `${arrHours[i]}: ${this.arrayCookiesSoldPerHour[i]} cookies`;
      ulParis.appendChild(ul);
    }
    let totalCookies = document.createElement('ul');
    totalCookies.textContent =`Total: ${this.sumCookiesTotal} cookies` ;
    ulParis.appendChild(totalCookies);
  }
};

let lima = {
  location: 'lima',
  minCust: 2,
  maxCust: 16,
  averageCookiesPerCust: 4.6,
  arrayCookiesSoldPerHour:[],
  sumCookiesTotal: 0,
  randomCustPerHour: function(){
    return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
  },
  numCookiesPerHour: function(){
    let calcNumCookiesHourly = Math.floor(this.randomCustPerHour()*this.averageCookiesPerCust);
    return calcNumCookiesHourly;
  },
  arrayCookies: function() {
    for (var i = 0; i < arrHours.length; i++) {
      this.arrayCookiesSoldPerHour.push(this.numCookiesPerHour());
      this.sumCookiesTotal += this.arrayCookiesSoldPerHour[i];
    }
  },
  render: function(){
    this.arrayCookies();
    for(var i=0;i<this.arrayCookiesSoldPerHour.length;i++){
      let ul = document.createElement('ul');
      ul.textContent = `${arrHours[i]}: ${this.arrayCookiesSoldPerHour[i]} cookies`;
      ulLima.appendChild(ul);
    }
    let totalCookies = document.createElement('ul');
    totalCookies.textContent =`Total: ${this.sumCookiesTotal} cookies` ;
    ulLima.appendChild(totalCookies);
  }
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
