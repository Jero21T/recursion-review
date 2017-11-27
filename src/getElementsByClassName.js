// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentElement) { 
 
  var htmlElement = currentElement;
  if (htmlElement == null) {
    htmlElement = document.body;
  }
  if (htmlElement.className == null) {
    return [];
  }

  var relevantElements = [];
  var classList = htmlElement.className.split(' ');
  if (classList.includes(className)) {
    relevantElements.push(htmlElement); 
  }

  for (var i = 0; i < htmlElement.childNodes.length; i++) {
    var elementsArray = getElementsByClassName(className, htmlElement.childNodes[i]);
    relevantElements = relevantElements.concat(elementsArray); 
  }

  return relevantElements;
};
