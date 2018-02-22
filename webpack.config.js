var webpack             = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
/** 
 * add all plugins that are related for the production enviornment
 */

console.log("Deployement envirnment : "+process.env.APP_ENV);

var plugins = [];
if(process.env.APP_ENV == "PROD"){
   plugins = [
          
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            beautify: false,
            mangle: {
                screw_ie8: true
            },
            compress: {
                unused: true,
                dead_code: true,
                drop_debugger: true,
                conditionals: true,
                evaluate: true,
                drop_console: true,
                sequences: true,
                booleans: true,
                screw_ie8: true,
                warnings: false
            },
            comments: false
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
        /*new HtmlWebpackPlugin({
            template: 'index.html'
          })*/
    ];
}

module.exports ={
    entry:{
        'app':'./modules/start.ts',
        'vendor':[ '@angular/core','@angular/platform-browser-dynamic','@angular/forms','@angular/http','@angular/router',
            'zone.js/dist/zone','reflect-metadata']
        
        
    },
    output:{
        path:'./public',
        filename:'[name].bundle.js',
        chunkFilename: '[id]-chunk.js',
        publicPath: "public/" 
    },
    module:{
        loaders:[
            {
                test:/\.ts$/,
                loaders: [
                    'awesome-typescript-loader', 
                    'angular2-router-loader', 
                    'angular2-template-loader'
                ],
                exclude: [/node_modules/],
            },
            { 
                test: /\.(html|css)$/, 
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
            }
        ]
    },
    plugins,
    resolve:{
        extensions:[ '.js', '.ts','.html']
    }

}