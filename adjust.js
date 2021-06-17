const adjust = function adjust(fn, number, list) {
    const result = [];
    
    if(arguments.length === 1) {
      return function(index, item) {
        if(arguments.length === 1) {
          return input => {
            const array = Array.prototype.slice.call(input);
  
            for(let i = 0; i < array.length; i++) {
              if(i === index) {
                result.push(fn(array[i]));
              } else {
                result.push(array[i]);
              }
            }
  
            return result;
          };
        } else {
          const array = Array.prototype.slice.call(item);
  
          for(let i = 0; i < array.length; i++) {
            if(i === index) {
              result.push(fn(array[i]));
            } else {
              result.push(array[i]);
            }
          }
          
          return result;
        }
      };
    }
    
    if(arguments.length === 2) {
      return input => {
        const array = Array.prototype.slice.call(input);
  
        for(let i = 0; i < array.length; i++) {
          if(i === number) {
            result.push(fn(array[i]));
          } else {
            result.push(array[i]);
          }
        }
  
        return result;
      };
    }
  
    const array = Array.prototype.slice.call(list);
  
    for(let i = 0; i < array.length; i++) {
      if(i === number) {
        result.push(fn(array[i]));
      } else {
        result.push(array[i]);
      }
    }
    
    return result;
  };
  
  export default adjust;