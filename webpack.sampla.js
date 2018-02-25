const path      = require('path'),
      webpack   = require('webpack');

const WebPackNotifirPlugin  = require('webpack-notifier'),
      HtmlWebpackPlugin     = require('html-webpack-plugin'),
      CleanWebpackPlugin    = require('clean-webpack-plugin');



const applicationFolderName = 'ClientApp';
const applicationSource     = path.join(__dirname,applicationFolderName);
const applicationDest       = path.join(__dirname,'wwwroot/dist');
const nodModules            = path.join(__dirname,'node_modules');


module.exports ={
    entry:{
        'app':path.join(applicationSource,'Startup.ts'),
        'vendor':[
            '@angular/core','@angular/platform-browser-dynamic','@angular/forms','@angular/http','@angular/router',
            'zone.js/dist/zone','reflect-metadata','jquery/dist/jquery'
        ]
    },
    output:{
        path:applicationDest,
        filename:'[name].min.js',
        chunkFilename:'[name].min.js',
        publicPath: 'dist/' 
       
    },
    module:{
        loaders:[
            {
                test:/\.ts$/,
                loaders:[
                    'awesome-typescript-loader', 
                    'angular2-router-loader', 
                    'angular2-template-loader'
                ]

            },
            { 
                test: /\.(html|css)$/, 
                loader: 'raw-loader',
                exclude: /\.async\.(html|css)$/
            }

        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor']
        }),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/,applicationDest)
    ],
    resolve:{
        extensions:['.ts','.js','.json','.css','.html','*' ]
    }

}
