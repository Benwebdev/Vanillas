const transpose = function transpose(list) {
    if(!list.length) {
      return list;
    }
  
    const result = [];
  
    for(let k = 0; k < list.length; k++) {
      for(let l = 0; l < list[k].length; l++) {
        if(!result[l]) {
          result[l] = [];
          result[l].push(list[k][l]);
        } else {
          result[l].push(list[k][l]);
        }
      }
    }
    
    return result;
  };
  
  export default transpose;