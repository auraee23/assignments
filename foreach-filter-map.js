// accepts array input then returns double of wach number in new array
function doubleValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val * 2);
    });
    return newArr;
  }
  
//   accepts array then returns only even numbers in new array 
  function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      if (val % 2 === 0) {
        newArr.push(val);
      }
    });
    return newArr;
  }
  
//   accpets array then returns the first and last letter of each item in array 
  function showFirstAndLast(arr) {
    let newArr = [];
    arr.forEach(function(val) {
      newArr.push(val[0] + val[val.length - 1]);
    });
    return newArr;
  }
  
//   accepts object/key/value of an array then returns the array passed to the function with the new key and value added for each object 
  function addKeyAndValue(arr, key, value) {
    arr.forEach(function(val) {
      val[key] = value;
    });
    return arr;
  }
  
//   accepts string then returns an object with key as the vowel and values as the num of times the vowel appears. be case insensitive. 
  function vowelCount(str) {
    let splitArr = str.split("");
    let obj = {};
    const vowels = "aeiou";
  
    splitArr.forEach(function(letter) {
      let lowerCasedLetter = letter.toLowerCase()
      if (vowels.indexOf(lowerCasedLetter) !== -1) {
        if (obj[lowerCasedLetter]) {
          obj[lowerCasedLetter]++;
        } else {
          obj[lowerCasedLetter] = 1;
        }
      }
    });
    return obj;
  }
  
  //accepts array then returns the values doubled
  function doubleValuesWithMap(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  
// accepts array then return value multiplied by its index
  function valTimesIndex(arr) {
    return arr.map(function(val, idx) {
      return val * idx;
    });
  }
  
  //accepts array with objects and keys then returns value of the key in each object
  function extractKey(arr, key) {
    return arr.map(function(val) {
      return val[key];
    });
  }
  
  //accepts array with objects then returns value of key with the name first and last in each object. add a space
  function extractFullName(arr) {
    return arr.map(function(val) {
      return val.first + " " + val.last;
    });
  }
  
  //accepts arrat of object/key then returns with all objects that contain a key
  function filterByValue(arr, key) {
    return arr.filter(function(val) {
      return val[key] !== undefined;
    });
  }
  
  //accepts array and separate value then returns the same value in the array, if not then undefined.
  function find(arr, searchValue) {
    return arr.filter(function(val) {
      return val === searchValue;
    })[0];
  }
  
  //accepts array with object/key/value to search for then return 1st round value in the array.
  function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }
  
  //accepts a string then return all vowels removed. new sting characters lower cased.
  function removeVowels(str) {
    const vowels = "aeiou";
    return str
      .toLowerCase()
      .split("")
      .filter(function(val) {
        return vowels.indexOf(val) === -1;
      })
      .join("");
  }
  
  //accepts array then return all odd numbers doubled
  function doubleOddNumbers(arr) {
    return arr
      .filter(function(val) {
        return val % 2 !== 0;
      })
      .map(function(val) {
        return val * 2;
      });
    }