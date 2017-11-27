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
  var relevantElements = [];
  if (htmlElement.classList.contains(className)) {
    relevantElements.push(htmlElement); 
  }
  return relevantElements;
 
};
