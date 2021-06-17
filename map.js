const map = function map(fn, list) {
    if(arguments.length === 1) {
      return input => {
        if(Array.isArray(input)) {
          if(!input.length) {
            return x;
          }
  
          return input.map(item => fn(item));
        } else {
          const result = {};
  
          for(let key in input) {
            if(input.hasOwnProperty(key)) {
              result[key] = fn(input[key]);
            }
          }
          
          return result;
        }
      };
    }
  
    if(list instanceof Function) {
      return input => fn(list(input));
    }
    
    if(Array.isArray(list)) {
      return list.map(item => fn(item));
    } else {
      const result = {};
  
      for(let key in list) {
        if(list.hasOwnProperty(key)) {
          result[key] = fn(list[key]);
        }
      }
  
      return result;
    }
  };

export default map;