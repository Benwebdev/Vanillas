export default function pipe(...fn) {
    if(!fn.length) {
      throw new Error('pipe requires at least one argument');
    }
    
    return function(...args) {
      let result = fn[0].apply(this, args);
  
      for(let i = 1; i < fn.length; i++) {
        result = fn[i].call(this, result);
      }
  
      if(!(result instanceof Function)) {
        return result;
      } else {
        return input => result(input);
      }
    };
  }