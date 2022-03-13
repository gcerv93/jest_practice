const getCharCodes = (str) => {
  let codeArray = [];

  for (let i = 0; i < str.length; i++) {
    codeArray.push(str.charCodeAt(i));
  }

  return codeArray;
};

const convertToString = (arr) => {
  let strArray = [];

  for (let i = 0; i < arr.length; i++) {
    const char = String.fromCharCode(arr[i]);

    strArray.push(char);
  }

  return strArray;
};

export const caesarCipher = (str, key) => {
  const codeArray = getCharCodes(str);

  let newCodeArray = codeArray.map((charCode) => {
    if (charCode >= 65 && charCode <= 90) {
      // subtract 64 from the charCode to simulate a 26 letter alphabet, add it back at the end
      let newCode = ((charCode - 64 + key) % 26) + 64;
      return newCode;
    } else if (charCode >= 97 && charCode <= 122) {
      // subtract 96 from the charCode to simulate a 26 letter alphabet, add it back at the end
      let newCode = ((charCode - 96 + key) % 26) + 96;
      return newCode;
    } else {
      return charCode;
    }
  });

  const result = convertToString(newCodeArray).join("");

  return result;
};
