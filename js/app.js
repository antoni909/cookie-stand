'use strict';

// 1.Create Element --> 2.Give Content --> 3.Append-to-Container
// prototypes assigns default methods to all instances
// all instances can be rendered in allStoreCreators

document.getElementById('container');
let cookieTable = document.getElementById('cookie-table');

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

function renderAll() {

  for(var i=0;i< allStoreCreator.length; i++){
    allStoreCreator[i].render();
  }
  tableHeader();
  calcColSums();
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

  let tfoot = document.createElement('tfoot');
  cookieTable.appendChild(tfoot);
  let th = document.createElement('th');
  let tr = document.createElement('tr');
  th.textContent = 'Totals';
  tr.appendChild(th);

  for (var i=0; i < arrHours.length; i++){
    let td = document.createElement('td');
    td.textContent = calcdColTotals[i];
    tr.appendChild(td);
  }

  tfoot.appendChild(tr);
  console.log(th, tr, td);
}


new StoreCreator('seattle', 23, 65, 6.3);

new StoreCreator('tokyo', 3, 24, 1.2);

new StoreCreator('dubai', 11, 38, 3.7);

new StoreCreator('paris', 20, 38, 2.3);

new StoreCreator('lima', 2, 16, 4.6);

renderAll();






//  1. create a function that calc adds hour column totals
//  2. create a function that renders data to display





//notes -
//  outerloop:
//      typeof allStoreCreator = object
//      allStoreCreator[i] = all five objects
//      allStoreCreator[i].arrayCookiesSoldPerHour = displays the array at iteration [i] for that particular 'store location'(gives all the vals in the table 'row')
//      allStoreCreator[i].arrayCookiesSoldPerHour[i] = at iteration [i] index-i --> some specific value, useless for sumCol
//  innerloop:
//      allStoreCreator[i] = at inner loop, [i] remains the same val(so 0 to 14 iterations) while [j] loops through all elements in that specific [i]
//      allStoreCreator[i].arrayCookiesSoldPerHour ==> produces the ARRAY at iteration = [i], [j]-number of times
//      allStoreCreator[i].arrayCookiesSoldPerHour[j] ==> gives the VALUE at index val = iteration-[j] at array = iteration-[i]...gives all vals in the row
//      allStoreCreator[i].arrayCookiesSoldPerHour[j][i] ==> undefined
//      allStoreCreator[i].arrayCookiesSoldPerHour[j][j] ==> undefined
//      sum += allStoreCreator[i].arrayCookiesSoldPerHour[i]; // sums same number to itself at index-[i] for [j] times = useless info
//      sum += allStoreCreator[i].arrayCookiesSoldPerHour[j]; // sums the previous index number accross the row = gives row totals
//      sum += allStoreCreator[i].arrayCookiesSoldPerHour;

// playing around with 2d arrays:
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

// let myArr = [ //[0, 1, 2][3, 4, 5][6, 7, 8]
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8]
// ];

// for(let i=0; i<myArr.length; i++){
//   console.log('_________________________');
//   console.log('HERE!!! outer loop --> inner loop');
//   for(let j=0; j<myArr[i].length; j++){
//     console.log('j= '+j,'i= '+i );
//     console.log('j',myArr[j]);
//     console.log('i',myArr[i]);
//     console.log(myArr[j][i]);
//     console.log('inner loop iteration at: '+j);
//   }
//   console.log('_________________________');
//   console.log('HERE inner loop --> outer loop');

// }
