'use strict';

let cookieTable = document.getElementById('cookie-table');
let tfoot = document.getElementById('t-foot');

let myFormInput = document.querySelector('form');
let grandTotal = 0;

let arrHours = ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 am','01:00 pm','02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];

const allStoreCreator = [];

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

function calcColSums(){

  let arrNetSum = new Array(arrHours.length);
  arrNetSum.fill(0);
  for(let i = 0; i < allStoreCreator.length; i++ ){
    for(let j = 0; j< allStoreCreator[i].arrayCookiesSoldPerHour.length; j++){
      arrNetSum[j] += allStoreCreator[i].arrayCookiesSoldPerHour[j];
    }
  }
  return arrNetSum;
}

function tableFooterRow() {
  let calcdColTotals = calcColSums();
  grandTotal = 0;
  for(var i=0; i<calcdColTotals.length; i++){
    grandTotal += calcdColTotals[i];
  }

  let th = document.createElement('th');
  let tr = document.createElement('tr');

  th.textContent = 'Totals';
  tr.appendChild(th);

  for (var i=0; i < arrHours.length; i++){
    let td = document.createElement('td');
    td.textContent = calcdColTotals[i];
    tr.appendChild(td);
  }
  let td = document.createElement('td');
  td.textContent = grandTotal;
  tr.appendChild(td);

  tfoot.appendChild(tr);
}

function mySubmitHandler(event){
  event.preventDefault();

  let location = event.target.location.value;
  let minCustomer = +event.target.mincust.value;
  let maxCustomer = +event.target.maxcust.value;
  let averageCookiesPerCustomer = +event.target.averagecookiespercust.value;

  let newStore = new StoreCreator(location, minCustomer,maxCustomer,averageCookiesPerCustomer);
  newStore.render();

  tfoot.removeChild(tfoot.firstChild);

  tableFooterRow();
}

function renderAll() {

  for(var i=0;i< allStoreCreator.length; i++){
    allStoreCreator[i].render();
  }
  tableHeader();
  calcColSums();
  tableFooterRow();
}

renderAll();

myFormInput.addEventListener('submit', mySubmitHandler);
