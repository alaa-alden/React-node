var router = require('express').Router();
var React = require('react');
var ReactDOMServer = require('react-dom/server');
//var component = require('./component.jsx');
var ReactRouter=require('react-router');
router.get('*', function(request,response) {
     var props ={title:"winner"} ;
     ReactRouter.match({
         routes:(
            <ReactRouter.Router history={ReactRouter.browserHistory}>
              <ReactRouter.Route path='/' component={require("../component.jsx")}></ReactRouter.Route>
            </ReactRouter.Router>
         ),
         location:request.url
       },
       function(error,redirectLocation,renderProps){
                   if(renderProps){
                     var html = ReactDOMServer.renderToString(
                        <ReactRouter.RouterContext {...renderProps}
                        createElement={function (Component,renderProps) {
                          return <Component {...renderProps} {...props}/>;
                        }}
                        />
                     );
                      response.send(html);
                  }
                  else {
                    respose.status(404).send("not found");
                  }
                   }
      );
  });
module.exports=router;
