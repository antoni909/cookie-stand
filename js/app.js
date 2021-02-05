'use strict';

// 1.Create Element --> 2.Give Content --> 3.Append-to-Container
// prototypes assigns default methods to all instances
// all instances can be rendered in allStoreCreators

document.getElementById('container');
let cookieTable = document.getElementById('cookie-table');
let arrHours = ['06:00 am','07:00 am','08:00 am','09:00 am','10:00 am','11:00 am','12:00 am','01:00 pm','02:00 pm', '03:00 pm', '04:00 pm', '05:00 pm', '06:00 pm', '07:00 pm'];
let allStoreCreator = [];

function renderAll() {

  for(var i=0;i< allStoreCreator.length; i++){
    allStoreCreator[i].render();
  }
  tableHeader();
  tableFooterRow();
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

function tableFooterRow() {
  let tfoot = document.createElement('tfoot');
  cookieTable.appendChild(tfoot);
  let th = document.createElement('th');
  th.textContent = 'Totals';
  tfoot.appendChild(th);
  // create a function that renders netCookieTotals on tableFooterRow method


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

//create a function that adds hour column totals

// function addColumnTots(){
//   let arrColSum = [];
//   // some array

//   for(var i=0;i<arrHours.length;i++);
//   let emptyArr = [];
//   let calcSum = 0;
//   for(var j=0;j<this.arrayCookiesSoldPerHour.length;j++){
//     calcSum += this.arrayCookiesSoldPerHour[j][i];
//     emptyArr.push(calcSum);
//     arrColSum = emptyArr;
//   }
//   return arrColSum;
// }
// addColumnTots();

// j is the array element(5 tot) and i is the zero-index value of the array at j, i will always be the idex value of the array(i assume)

// function netCookieCount(){
//   let arrColumnSum = [];
//   var lettersArrays = [
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5],
//     [1, 2, 3, 4, 5]
//   ];

//   for (var i = 0; i < lettersArrays.length; i++){
//     let sum = 0;
//     var emptyArray = [];
//     for (var j = 0; j < lettersArrays[i].length; j++){
//       sum += lettersArrays[j][i];
//       emptyArray.push(sum);
//       arrColumnSum = emptyArray;
//     }
//   }
//   return arrColumnSum;
// }
// netCookieCount();

// MyNotes - How Nested Loops Work:

// let netColSum = [];
// let myArr = [[0, 1, 2],[3, 4, 5],[6, 7, 8]];

// for(let i=0; i<myArr.length; i++){
//   console.log('outer i: ' + i); // iteration num = .length val, also outer i = inner 1
//   console.log('myArr[i]: '+myArr[i]);
//   console.log(myArr[0],myArr[1],myArr[2]);

//   for(let j=0; j< myArr[i].length; j++){
//     console.log('inner i: '+ i);
//     console.log('           '+'j'+'['+j+']','i'+'['+i+']');
//     console.log('                         myArr[j][i]: '+ myArr[j][i]);
//   }
// }

let myArr = [[0, 1, 2],[3, 4, 5],[6, 7, 8]];

for(let i=0; i<myArr.length; i++){
  console.log(myArr[i][i]);
  console.table(myArr);
}



