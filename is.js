const is = function is(ctor, val) {
    if(arguments.length === 1) {
      return input => {
        if(input !== Object(input)) {
          if(input === null || input === undefined) {
            return false;
          }
          return input.constructor === ctor;
        } else {
          return input instanceof ctor;
        }
      };
    } else {
      if(val !== Object(val)) {
        if(val === null || val === undefined) {
          return false;
        }
        return val.constructor === ctor;
      } else {
        return val instanceof ctor;
      }
    }
  };

export default is;