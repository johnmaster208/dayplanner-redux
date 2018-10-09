const HtmlWebpackPlugin = require('html-webpack-plugin')
const ENV = process.env.APP_ENV

const isTest = ENV === 'test'
const isProd = ENV === 'prod'

function setDevTool() {
    if(isTest) {
        return 'inline-source-map'
    } else if(isProd) {
        return 'source-map'
    } else {
        return 'eval-source-map'
    }
}

module.exports = {
    entry: __dirname + "/src/app/index.js",
    output: {
        path: __dirname + "/dist",
        filename: 'bundle.js',
        publicPath: '/',
        pathinfo: true
    },
    node: {
        fs: 'empty'
    },
    mode: 'development',
    devtool: setDevTool(),
    module: {
        rules: [
            {
                test: /\.(jsx?)$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env','react','es2015'],
                        plugins: ['babel-plugin-transform-es2015-destructuring', 'transform-object-rest-spread']
                    }
                }
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: 'less-loader'
                    }
                ]
            },
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'images/[name].[hash].[ext]'
                    }
                }
            },
            {
                test: /\.(jpe?g|png|gif|ico)$/i,
                use: {
                    loader: 'file-loader',
                    options: {
                        name:'images/[name].[hash].[ext]'
                    }
                } 
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/public/index.html",
            inject: 'body'
        })
    ],
    devServer: {
        contentBase: './src/public',
        open: true,
        port: 9999
    }
}