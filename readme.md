# librarys that use in this step are : 
1. react 
`react react-router-dom`
2. react router
`npm i react-router-dom`
---
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

# Server-side routing with react-router v4 with [here](https://github.com/IrfanBaqui/react-router-v4-tutorial)
 I'm learn some information about :
 -  Introduction react routing
       -  Browser Router
       - Route
       - NavLink

 all that from `rect-router-dom`
 [learn about that from it](https://reacttraining.com/react-router/web/api/BrowserRouter)

- Basic_Routing
    - Switch
    - PROPS
      - this.props.match
        - path
        - url
        - isExact
        - params
      - location
        - pathname
        - search
        - hash
        - key
- Blocking:
  - prompt :not leave else after question
  ```java
    <Prompt message="Are you sure you want to leave?"/> !;
  ```

- Miss :
  - 404 routers
  that use router default for miss route
- Query params:
  - link to->path name:
  - link to->search  
# the note for webpack
run webpack with node
```javascript
var config = require('./webpack.development.config')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  historyApiFallback: true
}))
app.use(webpackHotMiddleware(compiler))
````
