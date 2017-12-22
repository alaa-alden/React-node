# 1 the first part : server-side rendering with react
- file is include react code is .jsx
- use react-dom/server for sent dom-react as string
```javascript
//  node server-side
    var html = ReactDOMServer.renderToString(
    React.createElement("h1","props","welcome")
    );
    response.send(html);
```
- node doesn't understand jsx  so upgrade node by babel
```java
require("babel-register")({presets:["react"]})
```
All subsequent files required by node with the extensions .es6, .es, .jsx and .js will be transformed by Babel.
  - babel-register
  - babel-preset-react
  ---
# 2 the second part : Building a universal web app with React.js as high level with code js
 ### sent code js to client-side use by :
 - webpack takes modules with dependencies and generates static assets representing those modules.
![main](https://webpack.github.io/assets/what-is-webpack.png)
  - **babel-core** && **babel-loader**  : for Translation jsx to js
  ---
# 3 the third part : Passing props in a universal React web app
sent props as usually  but not Reach to client so use that :
``` javascript
// in html code
<script dangerouslySetInnerHTML={{
    __html:"window.PROPS="+JSON.stringify(this.props)
  }}  />
```
and Recepion that in client by variable then sent to element
- note :
 - `dangerouslySetInnerHTML` is React’s replacement for using innerHTML in the browser DOM and pass an object with a `__html` key.

 ---

# 4 the fourth part :Server-side routing with react-router@3
when use jsx js with nodemon you should `nodemon file.js --ext js,jsx`
use in the part :
- __react-router__:

  - `match({ routes, location, [history], ...options }, callback)`:

    This function is to be used for server-side rendering. It matches a set of routes to a location, without rendering, and calls a `callback(error, redirectLocation, renderProps)` when it's done. [here](https://knowbody.github.io/react-router-docs/api/match.html)
      1. _routes_:
        - __Router__ :  that is tag and pass into it is history
            - __browserHistory__ : use when  you use `<ReactRouter.Router history=******>`
        - __Route__ : use for pass component and url that use with component

        _the example code :_
```javascript
  <ReactRouter.Router history={ReactRouter.browserhistory}>
    <ReactRouter.Route path='/' component={Winner}></ReactRouter.Route>
  </ReactRouter.Router>
```
      2. _location_: `location:request.url`
      3. _callback(.....)_ : use
        - `<ReactRouter.ReactContext {...renderProps} />` if renderProps is here
