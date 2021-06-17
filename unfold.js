var unfold = function unfold(fn, seed) {
    const result = [];
  
    while(1) {
      let leaf = fn(seed);
      if(leaf) {
        result.push(leaf[0]);
        seed = leaf[1];
      } else {
        break;
      }
    }
    
    return result;
  };
  
  export default unfold;
  