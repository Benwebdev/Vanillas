const subtract = (arg1, arg2) => {
    if(arguments.length === 1) {
      return input => Number(arg1) - Number(input);
    } else {
      if(typeof arg1 !== 'function' && typeof arg2 !== 'function') {
        return Number(arg1) - Number(arg2);
      }
  
      if(typeof arg1 === 'function' && typeof arg2 !== 'function') {
        return input => Number(arg1(input)) - Number(arg2);
      }
  
      if(typeof arg1 !== 'function' && typeof arg2 === 'function') {
        return input => Number(arg1) - Number(arg2(input));
      }
      
      if(typeof arg1 === 'function' && typeof arg2 === 'function') {
        return (firstInput, secondInput) => Number(arg1(firstInput)) - Number(arg2(secondInput));
      }
    }
  };

export default subtract;