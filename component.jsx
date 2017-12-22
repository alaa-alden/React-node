var React = require('react');
class Component extends React.Component {
  _handleclick(){
    alert()
  };
  render() {
      return (
        <html>
          <head>
            <meta charSet="utf-8"/>
            <title>{this.props.title}</title>
            <link rel="stylesheet" href="/style.css" />
          </head>
          <body>
            <div>
              <h1>{this.props.title}</h1>
              <p>isn't server-side rendering winner?</p>
              <button onClick={this._handleclick}>click me</button>
              <script dangerouslySetInnerHTML={{
                  __html:"window.PROPS="+JSON.stringify(this.props)
                }}  />
            </div>
            <script src="/build/bundle.js" />
          </body>
        </html>


      )
  }
}
 module.exports =Component ;
