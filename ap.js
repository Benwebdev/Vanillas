const ap = function ap (list, item) {
    if(list instanceof Function && item instanceof Function) {
      return input => list(item(input));
    }
    
    const result = [];
  
    for(let i = 0; i < list.length; i++) {
      for(let j = 0; j < item.length; j++) {
        result.push(list[i](item[j]));
      }
    }
    
    return result;
  };
  
  export default ap;