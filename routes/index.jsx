var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var ReactRouterDom=require("react-router-dom");
var NavLink=ReactRouterDom.Navlink;
// import {BrowserRouter as Router,Route, NavLink} from "react-router-dom";
//var component = require('./component.jsx');
var ReactRouter=require('react-router');
router.get('*', function(request,response) {
     var props ={title:"winner"} ;
     var html = ReactDOMServer.renderToString(

              <NavLink to="/">about</NavLink>

     )
     response.send(html);
});


module.exports=router;
