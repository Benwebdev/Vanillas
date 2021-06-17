const chain = function chain(fn, list) {
    const result = [];
    
    if(arguments.length === 1) {
      return input => {
        for(let i = 0; i < input.length; i++) {
          result.push(...fn(input[i]));
        }
  
        return result;
      };
    }
    
    for(let i = 0; i < list.length; i++) {
      result.push(...fn(list[i]));
    }
  
    return result;
  };
  
  export default chain;