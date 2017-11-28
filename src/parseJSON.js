// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  parseableJSON = json;
  currentChar = parseAbleJSON[0];
  return whatTypeSorter();
  
};

var currentCharIndex = 0;
var currentChar = '';
var parseableJSON = '';
var incrementCurrentChar = function() {
  currentCharIndex++;
  currentChar = parseAbleJSON[currentCharIndex];
};

var whatTypeSorter = function() {
  if (currentChar === '{') {
    return parseObject();  
  } else if ( currentChar === '[') {
    return parseArray();
  } else if (currentChar === '"') {
    return parseString();
  } else if (currentChar >= '0' && currentChar <= '9') {
    return parseNumber();
  } else if (currentChar === 't' || currentChar === 'f') {
    return parseBoolean();
  } else if (currentChar === 'n') {
    return parseNull();
  }

};

var parseObject = function() {
  var objectBeingFormed = {};
  incrementCurrentChar();
  while (currentChar !== '}') {
    

  }
//'{"a": "b", "c": "d"}'
};

var parseArray = function() {
  var arrayBeingFormed = [];
  incrementCurrentChar();
  while (currentChar !== ']') {
    var value = whatTypeSorter(currentChar);
    arrayBeingFormed.push(value);
    incrementCurrentChar();
    while (currentChar === ',' || currentChar === ' ' ) {
      incrementCurrentChar();
    }
  }
  return arrayBeingFormed;
//'["one", "two"]'
};

var parseString = function() {
  var stringBeingFormed = '';
  while (currentChar !== '"') {
    stringBeingFormed += currentChar;
    incrementCurrentChar();
  }
  return stringBeingFormed;
};

var parseBoolean = function() {
  var booleanBeingFormed = '';
  while (booleanBeingFormed !== 'true' || booleanBeingFormed !== 'false') {
    booleanBeingFormed += currentChar;
    incrementCurrentChar();
  }
  if (booleanBeingFormed === 'true') {
    return true;
  } else {
    return false;
  }
};

var parseNull = function() {
  var nullBeingFormed = '';
  while (nullBeingFormed !== 'null') {
    nullBeingFormed += currentChar;
    incrementCurrentChar();
  }
  return null;
};




















