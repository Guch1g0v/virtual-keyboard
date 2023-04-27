function createElement(element, className) {
  const elementHTML = document.createElement(element);
  if (className) {
    elementHTML.className = className;
  }
  return elementHTML;
}

exports.UTILS = { createElement };
