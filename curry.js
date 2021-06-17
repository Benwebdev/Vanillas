const curry = function curry(fn) {

    function doPartial(func, arr = []) {
      if(func.length <= arr.length) {
        return func.apply(this, arr);
      }
  
      function doNextPartial() {
        const args = Array.prototype.slice.call(arguments);
        return doPartial(func.bind(this, ...arr), args);
      }
  
      Object.defineProperty(doNextPartial, 'length', { value : func.length - arr.length });
  
      return doNextPartial;
    }
  
    return doPartial(fn);
  };
  
  export default curry;