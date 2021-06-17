const partial = function partial (fn, arr) {
    if(fn.length <= arr.length) {
      return fn.apply(this, arr);
    }
    
    return fn.bind(null, ...arr);
  };
  
  export default partial;
  