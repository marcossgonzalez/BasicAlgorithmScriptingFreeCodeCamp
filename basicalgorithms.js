//-------------------------------------------
function convertCtoF(celsius) {
    let fahrenheit = (celsius*(9/5)) + 32;
    return fahrenheit;
  }
  
  convertCtoF(30);
//-------------------------------------------
function reverseString(str) {
    var string = '';
    for (let i = str.length-1; i>=0; i--){
        string += str[i];
    }
    console.log(string);
    return string;
  }
  
  reverseString("hello");
//-------------------------------------------
