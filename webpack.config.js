module.exports= {
  entry:'./client.js',
  output:{
          filename: 'public/build/bundle.js',
          },
  module:{
            loaders:[
                      {
                        test: /\.jsx$/,
                        exclude: /node_modules/,
                        loader:"babel-loader",
                        query:{
                          presets:["react"]
                              }
                      }
                    ]
            }
}
