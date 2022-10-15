// This function takes a string and a key and a shifting to the left factor as an argument and encrypt the string accoridingly.
function decipher (str, key, N){
  const arrStr= str.split("");
  const arrKey= key.split("");
  const newArr=[];
 const  shift =  (index) =>{
    if(index> N-1){
      return index -N
    }
    else {return 26 - N+index}
  }
  for (i=0; i<arrStr.length;i++){
    if (arrStr[i].charCodeAt() !== 32 ){
      newArr[i]= arrKey[shift(arrKey.indexOf(arrStr[i]))]
    }
    if (arrStr[i].charCodeAt() === 32 ){newArr[i]= " "}
  }
  return newArr.join("")
}

// this function encrypt the string by shifting wheras the shift amount is incremented by one for each letter in the the string starting by 3 (not counting spaces).

function encrypt(str) {
  const arr = str.split("");
  const decryptArray = [];
  let inc = 3;

  for (i = 0; i < arr.length; i++) {
    if (arr[i].charCodeAt() !== 32) {
      let decryptedChar = "";
      let toBeDecrypted = arr[i];
      let oldCharCode = toBeDecrypted.charCodeAt();
      let newCharCode = "";
      //1
      if (oldCharCode + inc <= 90) {
        newCharCode = oldCharCode + inc;
      }
      //2
      else if (oldCharCode + inc > 90 && inc <= 26) {
        newCharCode = ((oldCharCode + inc) % 90) + 64;
      }
      //3
      else if (
        oldCharCode + inc > 90 &&
        inc > 26 &&
        oldCharCode + (inc % 26) <= 90
      ) {
        newCharCode = oldCharCode + (inc % 26);
      }
      //4
      else if (
        oldCharCode + inc > 90 &&
        inc > 26 &&
        oldCharCode + (inc % 26) > 90
      ) {
        newCharCode = ((oldCharCode + (inc % 26)) % 90) + 64;
      }

      decryptedChar = String.fromCharCode(newCharCode);
      decryptArray[i] = decryptedChar;

      inc = inc + 1;
    } else {
      decryptArray[i] = " ";
    }
  }

  return decryptArray.join("").toString();
}
/////////////////////////////////////////////////////////
This function takes a string and a number of shifts to the right and return the encrypted string.
function encryptByShift(str, N) {
  str = str.toUpperCase();
  return str.replace(/[A-Z]/g, rot3);

  function rot3(correspondance) {
    const charCode = correspondance.charCodeAt();
    //A = 65, Z = 90
    return String.fromCharCode(
      charCode + N <= 90 ? charCode + N : ((charCode + N) % 90) + 64
    );
  }
}
