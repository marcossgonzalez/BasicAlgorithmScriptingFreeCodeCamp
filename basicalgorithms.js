//-------------------------------------------
function convertCtoF(celsius) {
  let fahrenheit = celsius * (9 / 5) + 32;
  return fahrenheit;
}

convertCtoF(30);
//-------------------------------------------
function reverseString(str) {
  var string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string += str[i];
  }
  console.log(string);
  return string;
}

reverseString("hello");
//-------------------------------------------
function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);
//-------------------------------------------
function findLongestWordLength(str) {
  let count = 0;
  let countbar = 0;
  for (let i = 0; i < str.length; i++) {
    if (" " == str[i]) {
      if (count > countbar) {
        countbar = count;
        console.log(countbar);
      }
      count = 0;
    } else {
      count++;
    }
  }
  if (count > countbar) {
    countbar = count;
  }

  return countbar;
}

findLongestWordLength("The quicks brown fox jumped over the lazy dog");
//-------------------------------------------
function largestOfFour(arr) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let numnext = arr[i][0];
    for (let j = 0; j < arr[i].length; j++) {
      if (numnext < arr[i][j]) {
        numnext = arr[i][j];
      }
    }
    array[i] = numnext;
  }
  return array;
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
//-------------------------------------------
function confirmEnding(str, target) {
  let count = target.length;
  do {
    for (let i = target.length - 1; i >= 0; i--) {
      for (let j = str.length - 1; j >= target.length; j--) {
        if (str[j] == target[i]) {
          count--;
          console.log(target[i], str[j + 1]);
          if (count == 0) {
            return true;
          }
          i--;
          continue;
        } else if (str[j] != target[i]) {
          console.log(target[i], str[j + 1]);
          count--;
          return false;
        }
      }
    }
    return true;
  } while (count >= 0);
}

console.log(confirmEnding("Abstraction", "action"));
//-------------------------------------------
function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  }
  if (str.length > 1) {
    let array = "";
    if (/a-zA-Z/) {
      for (let i = 0; i < num; i++) {
        array += str;
      }
      return array;
    }
    for (let i = 0; i < (str.length * num) / num; i++) {
      array += str;
      console.log(array);
    }
    return array;
  } else {
    let array = "";
    for (let i = 0; i < str.length * num; i++) {
      array += str;
    }
    return array;
  }
}

console.log(repeatStringNumTimes("abc", 4));
//-------------------------------------------
