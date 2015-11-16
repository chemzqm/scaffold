# Scaffold

Basic scaffold for build a small library or javascript app.

## Features
* `make` start a livereload server for example pages with watch for rebuild
* `make test` start a webpack-dev-server with mocha-loader for live testing
* `make test-karma` let karma run tests in your browser
* `make test-coveralls` let karma run tests and send coverage results to [coveralls.io](http://coveralls.io)
* `make doc` make example folder as your gh-pages branch and push to github

## For babel users

```
{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?optional[]=runtime' }
```
Add this to loaders in your webpack.config.js and `npm i babel-loader -D`

This would enable some es7 features, most importantly `async` `await`

## Usage

``` bash
wget https://github.com/chemzqm/scaffold/tarball/master
tar -zxf master
rm master
```
