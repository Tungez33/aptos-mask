const BigNumber = require('bignumber.js');


const value = 5000;

const bnValue = new BigNumber(value, 10).times(new BigNumber(10, 10).pow(18));

console.log(bnValue.toString(16), bnValue.toString(10));
