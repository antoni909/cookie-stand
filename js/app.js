'use strict';

// 1.Create Element --> 2.Give Content --> 3.Append-to-Container

let myTableContainer = document.getElementById('container');

let cookieTable = document.getElementById('cookie-table');

const allStoreCreator = [];

let arrHours = ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 am','01:00 pm','02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];

function StoreCreator (location, minCust, maxCust, averageCookiesPerCust){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookiesPerCust = averageCookiesPerCust;
  this.arrayCookiesSoldPerHour = [];
  this.totalCookies = 0;
  allStoreCreator.push(this);
}
//all instances can be rendered in allStoreCreators

StoreCreator.prototype.randomCustPerHour = function(){
  return Math.floor (Math.random() * (this.maxCust - this.minCust + 1) + this.minCust);
};

StoreCreator.prototype.numCookiesPerHour = function(){
  let calcNumCookiesHourly = Math.floor(this.randomCustPerHour()*this.averageCookiesPerCust);
  return calcNumCookiesHourly;
};

StoreCreator.prototype.arrayCookies = function() {
  for (var i = 0; i < arrHours.length; i++) {
    this.arrayCookiesSoldPerHour.push(this.numCookiesPerHour());
    this.sumCookiesTotal += this.arrayCookiesSoldPerHour[i];
  }
};

StoreCreator.prototype.render = function(){
  this.arrayCookies();

  let tr = document.createElement('tr');
  cookieTable.appendChild(tr);
  let th = document.createElement('th');
  th.textContent = this.location;
  tr.appendChild(th);

  for(var i=0;i<arrHours.length;i++){
    let td = document.createElement('td');
    td.textContent = this.arrayCookiesSoldPerHour[i];
    tr.appendChild(td);

    // this.arrayCookies();
    //might have to change uls to proper tags
    // for(var i=0;i<this.arrayCookiesSoldPerHour.length;i++){
    //   let ul = document.createElement('ul');
    //   ul.textContent = `${arrHours[i]}: ${this.arrayCookiesSoldPerHour[i]} cookies`;
    //   ulLima.appendChild(ul);
    // }
    // let totalCookies = document.createElement('ul');
    // totalCookies.textContent =`Total: ${this.sumCookiesTotal} cookies` ;
    // ulLima.appendChild(totalCookies);
  }
};

// you can add properies by dot chain to the instance desired
// prototypes assigns default methods to all instances

function renderAll() {
  for(var i=0;i< allStoreCreator.length; i++){
    allStoreCreator[i].render();
  }
}

let seattleShop = new StoreCreator('seattle', 23, 65, 6.3);

let tokyoShop = new StoreCreator('tokyo', 3, 24, 1.2);

let dubaiShop = new StoreCreator('dubai', 11, 38, 3.7);

let parisShop = new StoreCreator('paris', 20, 38, 2.3);

let limaShop = new StoreCreator('lima', 2, 16, 4.6);


renderAll();

// create multiple tds, give conten append to dom

// for (let i=0; i ){
// var td = document.createElement('td');
// td.textContent = this.yield[i];
// true.appendChild(td);
// this.total +=  this. some yield
// }

// create total td, give content, append to dom

// let td = document.createElement('td');
// td.textContent = this.total;
// tr.appendChild(td);
// put render functions into array
