const all = function all (fn, list) {
    if(arguments.length === 1) {
      return input => {
        if(!input.length) {
          return true;
        }
  
        for(let i = 0; i < input.length; i++) {
          if(!fn(input[i])) {
            return false;
          }
        }
        
        return true;
      };
    }
    
    if(!list.length) {
      return true;
    }
    
    for(let i = 0; i < list.length; i++) {
      if(!fn(list[i])) {
        return false;
      }
    }
  
    return true;
  };

export default all;