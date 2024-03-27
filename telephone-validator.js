function telephoneCheck(str) {
    //false cases
    const alphabet= /[a-z]/g;
    const symbols = /[!@#$%^&*?]/g;
  
    //true cases
    const regexCase1 = /\d{3}-\d{3}-\d{4}/g;
    const regexCase2 = /(\d{3}|\(\d{3}\))-?/g;
    const regexCase3 = /(\d{3}|\(\d{3}\))-?\s?\d{3}-\d{4}/g;
    const regexCase4 = /(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}/g;
    const regexCase5 = /^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}-?\s?\d{4}$/gm;
    
    let phoneNumber = false;
    // if(str.match(alphabet) || str.match(symbols)) {
    //   phoneNumber =  false;
    // } else if (regexCase1.test(str) === true) {
    //   phoneNumber = true;
    // } else if (regexCase2.test(str) === true) {
    //   phoneNumber = true;
    // } else if (regexCase3.test(str) === true) {
    //   phoneNumber =  true;
    // } else if (regexCase4.test(str) === true) {
    //   phoneNumber =  true;
    // } else if (regexCase5.test(str) === true) {
    //   phoneNumber =  true;
    // } else {
    //   phoneNumber = false;
    // }
    phoneNumber = regexCase5.test(str);
    return phoneNumber;
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("123**&!!asdf#");
  
  console.log(telephoneCheck("555-5555"));
  
  //testing
  // console.log(telephoneCheck("555-555-5555"));
  // console.log(telephoneCheck("(555)555-5555"));
  // console.log(telephoneCheck("((555) 555-5555"));
  
  // console.log(telephoneCheck("555 555 5555"));
  // console.log(telephoneCheck("5555555555"));
  // console.log(telephoneCheck("1 555 555 5555"));
  
  // console.log(telephoneCheck("123**&!!asdf#"));
  // console.log(telephoneCheck("(555)5(55?)-5555"));

