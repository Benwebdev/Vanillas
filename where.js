var where = function where(spec, testObj) {
    for(let key in spec) {
      if(spec.hasOwnProperty(key)) {
        if(!spec[key](testObj[key])) {
          return false;
        }
      }
    }
  
    return true;
  };
  
  export default where;
  