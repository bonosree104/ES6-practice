const ages = [22,23,44];
const ages2 = [11,33,77];
const allages = ages.concat(ages2).concat([5]);
console.log(allages);
const allages2 = [...ages, ...ages2, 5];
//console.log(allages2);


const business = 1000;
const minister =260;
const  pilot =444;
const takaPoisa = [1000,260, 444, 20000];
//const maximum = Math.max(business, minister,pilot);
const maximum = Math.max(...takaPoisa);
console.log(maximum);