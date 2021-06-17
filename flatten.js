const flatten = list => {
    if(Array.isArray(list)) {
      return repeat(list);
    }
    
    const array = [];
    
    for(let key in list) {
      if(list.hasOwnProperty(key)) {
        if(Array.isArray(list[key])) {
          array.push(list[key]);
        }
      }
    }
  
    return repeat(array);
  
    function repeat(arr) {
      let isFlat = true;
      const result = [];
      
      for(let i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
          result.push(...arr[i]);
        } else {
          result.push(arr[i])
        }
      }
  
      for(let j = 0; j < result.length; j++) {
        if(Array.isArray(result[j])) {
          isFlat = false;
          break;
        }
      }
  
      if(!isFlat) {
        return repeat(result);
      }
  
      return result;
    }
  };

export default flatten;