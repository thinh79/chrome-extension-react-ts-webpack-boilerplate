const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin'); // Import the plugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
    mode: 'development',
    entry: {
        popup: path.join(__dirname, 'src', 'popupPage.tsx'),
        options: path.join(__dirname, 'src', 'optionsPage.tsx'),
        background: path.join(__dirname, 'src', 'background.ts'),
        contentScript: path.join(__dirname, 'src', 'contentScripts', 'myContentScript.ts')
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            '@': path.resolve(__dirname, 'src/') // Set an alias '@' for the src directory
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'popup.html'),
            filename: 'popup.html',
            chunks: ['popup']
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public', 'options.html'),
            filename: 'options.html',
            chunks: ['options']
        }),
        // CopyPlugin to copy files from the public folder to dist
        new CopyPlugin({
            patterns: [
                { from: 'public', to: '.', globOptions: { ignore: ["**/*.html"] } }, // Exclude HTML files from being copied
            ],
        }),
        new MiniCssExtractPlugin(),
    ],
    devtool: 'cheap-module-source-map'
};
