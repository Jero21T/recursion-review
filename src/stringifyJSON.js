// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === undefined || typeof obj === 'function' ) {
    return undefined;
  }
  
  if (typeof obj === 'string') {
    return '"' + obj + '"'; 
  }

  if (Array.isArray(obj)) {
    var stringifiedResults = [];
    for (var i = 0; i < obj.length; i++) {
      var stringifiedValue = stringifyJSON(obj[i]);
      stringifiedResults.push(stringifiedValue);
    }
    return '[' + stringifiedResults.join(',') + ']';
  }

  if (typeof obj === 'object' && obj) {
    var stringifiedObjectArray = [];
    for (var key in obj) {
      var stringifiedKey = stringifyJSON(key);
      var stringifiedValue = stringifyJSON(obj[key]);
      if (stringifiedKey !== undefined && stringifiedValue !== undefined ) {
        var stringifiedProperty = stringifiedKey + ':' + stringifiedValue;
        stringifiedObjectArray.push(stringifiedProperty);
      }
    }
    return '{' + stringifiedObjectArray.join(',') + '}';
  }

  return '' + obj;
};



