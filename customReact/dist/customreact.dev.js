"use strict";

function customeRender(reactElement, container) {
  /*
  const domElement = document.createElement(reactElement.type)
  domElement.innerHTML= reactElement.children
  domElement.setAttribute('href', reactElement.props.href)
  domElement.setAttribute('target', reactElement.props.target)
  container.appendChild(domElement)
  */
  var domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;

  for (var prop in reactElement.props) {
    if (prop == 'children') continue;
    domElement.setAttribute(prop, reactElement.props[prop]);
  }

  container.appendChild(domElement);
}

var reactElement = {
  type: 'a',
  props: {
    href: 'http://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google.'
};
var mainContainer = document.querySelector('root');
customeRender(reactElement, mainContainer);