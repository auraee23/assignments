// accepts array then returns true if one odd number is there
function hasOddNumber(arr){
    return arr.some(function(val){
      return val % 2 !== 0;
    })
  }

//accepts array then returns true if number contains one zero
function hasAZero(num){
    return num.toString().split('').some(function(val){
      return val === '0';
    })
}

//accepts array then return true if every single number is odd
function hasOnlyOddNumbers(arr){
    return arr.every(function(val){
      return val % 2 !== 0;
    })
}

//accepts array then return turn if there are no duplicate numbers
function hasNoDuplicates(arr){
    return arr.every(function(val){
      return arr.indexOf(val) === arr.lastIndexOf(val);
    });
}
// accepts array object/key then returns true if every objets contain that key
function hasCertainKey(arr, key){
    return arr.every(function(val){
      return key in val
    })
}

//accepts array object/key/value then returns true if every single object contains that value for the specific key
function hasCertainValue(arr, key, searchValue){
    return arr.every(function(val){
      return val[key] === searchValue;
    })
}