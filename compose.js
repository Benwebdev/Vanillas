export default function compose (...fn) {
    if(!fn.length) {
      throw new Error('compose requires at least one argument');
    }
  
    return function(...args) {
      let result = fn[fn.length - 1].apply(this, args);
      
      for(let i = fn.length - 2; i >= 0; i--) {
        result = fn[i].call(this, result);
      }
      
      if(!(result instanceof Function)) {
        return result;
      } else {
        return input => result(input);
      }
    };
  }
  