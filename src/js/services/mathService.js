(function() {
  'use strict';

  angular
  .module('mathServiceMod', [])
  .service('mathService', [MathService]);

  function MathService() {
    this.opMap = {
      Add: '+',
      Subtract: '-',
      Multiply: '*',
      Divide: '/'
    };
    this.calculate = (math) => {
      let op = this.opMap[math.operation];
      let first = +math.first;
      let second = +math.second;
      return math.operation === 'Power' ?
        Math.pow(first, second) :
        eval(`${first}${op}${second}`);
    };
  }

}());
