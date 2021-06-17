const thunkify = function thunkify(fn) {
    return function(...args) {
      return fn.bind(null, ...args);
    };
  };
  
  export default thunkify;
  