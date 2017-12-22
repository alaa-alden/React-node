var react = require("react");
var reactdom=require('react-dom');
var component=require("./component.jsx");
var props=window.PROPS;
reactdom.hydrate(
  react.createElement(component,props),document
)
