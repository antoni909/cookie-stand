'use strict';

// 1.Create Element --> 2.Give Content --> 3.Append-to-Container
// prototypes assigns default methods to all instances
// all instances can be rendered in allStoreCreators

document.getElementById('container');
let cookieTable = document.getElementById('cookie-table');
let arrHours = ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 am','01:00 pm','02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];
const allStoreCreator = [];

function renderAll() {

  for(var i=0;i< allStoreCreator.length; i++){
    allStoreCreator[i].render();
  }
}

function tableHeader() {
  let thead = document.createElement('thead');
  cookieTable.appendChild(thead);
  let tr = document.createElement('tr');
  let th = document.createElement('th');
  th.textContent = '';
  thead.appendChild(tr);
  tr.appendChild(th);

  for(var i =0; i<arrHours.length;i++){
    let td = document.createElement('td');
    td.textContent = arrHours[i];
    tr.appendChild(td);
  }

  let thTotal = document.createElement('th');
  thTotal.textContent = 'Daily Location Total';
  tr.appendChild(thTotal);
}

function tableTotalRow() {
  let tfoot = document.createElement('tfoot');
  cookieTable.appendChild(tfoot);
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tfoot.appendChild(th);
}

function StoreCreator (location, minCust, maxCust, averageCookiesPerCust){
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.averageCookiesPerCust = averageCookiesPerCust;
  this.arrayCookiesSoldPerHour = [];
  this.sumCookiesTotal = 0;
  allStoreCreator.push(this);
}

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
  }
  let td = document.createElement('td');
  td.textContent = this.sumCookiesTotal;
  tr.appendChild(td);
};

new StoreCreator('seattle', 23, 65, 6.3);

new StoreCreator('tokyo', 3, 24, 1.2);

new StoreCreator('dubai', 11, 38, 3.7);

new StoreCreator('paris', 20, 38, 2.3);

new StoreCreator('lima', 2, 16, 4.6);

renderAll();
tableHeader();
tableTotalRow();

// const rows = 5;
// const cols = 14;

// const arr1 = [];
// let colsSum = 0;

// for(var i=0;i<rows;i++){
//   arr1[i] = [];
//   console.log(arr1[i][0]);
//   for(var j=0; j<rows[i].length;j++){
//     arr1[i][j] = 0;
//     console.log(arr1[i]);
//   }
// }

// console.log(arr1[i][j]);
