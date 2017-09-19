/**
* @Author: Andreee Ray <develdoe>
* @Date:   2017-03-13T13:54:41+01:00
* @Email:  me@andreeray.se
* @Filename: app.jsx
 * @Last modified by:   andreeray
 * @Last modified time: 2017-09-19T18:21:48+02:00
*/

// IMPORTS ---------------------------------------------------

import React, {Component} from 'react'
import ReactDOM           from 'react-dom'
import {Provider}         from 'react-redux'
import {hashHistory}      from 'react-router'

var store                   = require('store').configureStore()
var actions                 = require('actions')

import router             from 'src/router'

store.dispatch(actions.changeStatus('Scripting'))
console.log(process.env.TEST)
// SETUP -----------------------------------------------------

var appName = "DevelStrap"
document.title = appName
store.dispatch(actions.changeAppName(appName))

// RENDER ----------------------------------------------------

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
)

console.log(`
%cMETA########################################
 * @Author              : Andreee Ray <DevelDoe>
 * @Date                : 2017-02-18T23:58:38+01:00
 * @Email               : me@andreeray.se
 * @Site                : andreeray.se
 * @Version             : 2.3
 * @Last modified by    : develdoe
 * @Last modified time: 2017-09-19T18:21:48+02:00
##############################################

%cABOUT#######################################

Welcome! I am DevelDoe (Andree Ray), a HTML CSS and
JavaScript ninja @ Wimse Web Development. This is
skelleton react app that I have created to strap
my React applications.

##############################################

%cRELEASELOG#####################################

%c
0.0 The basic React skelleton
---------------------------------
This bransh adds the basic React skelleton
and adds a test suit.

* 0.0.1 Install framework modules:
    * webpack
    * react
    * react-dom
    * express
    * babel-core
    * babel-loader
    * babel-preset-es2015
    * babel-preset-react
    * babel-preset-stage-0
* 0.0.2 Setup: Webpack
* 0.0.3 Add: public HTML
* 0.0.4 Add: Simple server
* 0.0.5 Install Test suite modules:
    * karma
    * karma-webpack
    * karma-mocha
    * karma-mocha-reporter
    * karma-chrome-launcher
    * karma-sourcemap-loader
    * mocha
    * expect
    * react-addons-test-utils
* 0.0.6 Add: Entry
* 0.0.7 Add: Component
* 0.0.8 Add: List
* 0.0.9 Add: Item

0.1 Implement Redux
---------------------------------
This bransh adds Redux to the project for
eazy handling of application wide data.

* 0.1.1 Install Redux modules:
    * redux
    * react-redux
    * redux-thunk
    * axios
    * redux-mock-store
* 0.1.2 Add: Store
* 0.1.3 Add: Actions
* 0.1.4 Add: Reducers
* 0.1.5 Update: component

0.2.0 Implement React Router
---------------------------------
This bransh adds React Router for
navigation the application.

* 0.2.1 Refactor to ES2016 syntax
* 0.2.2 Install Router modules:
  * react-router
* 0.2.3 Add: src/router/index
* 0.2.4 Add: src/router/routing
* 0.2.5 Update: src/entry
* 0.2.6 Refactoring:
  * Remove: src/router/routing
  * Add: src/layout
  * Update: src/router/index
  * Add: components/api
  * Update: components/component to components/data
  * Update: layout/default
* 0.2.7. Added environments
  * Update: webpack.config.js
  * Update: package.json
  * Add: environments/development.env

0.3 Front end styling for eazy layout creation
---------------------------------
This branch adds styling to make developing layouts eazy
with blueprint background and semitransparents divs.

* 0.3.1 Update: ./public/index.html
* 0.3.2 Update: ./src/components/data/item
* 0.3.3 Update: ./src/layout/default.jsx

1.0 Release
---------------------------------
This Concludes version 1 of the project, the project can now
be used to quickly deploy professional React web applications.*


## Whats next?
---------------------------------
I would start by adding backend/database and authentication of
preference.


%cBACKLOG#####################################


%cDEBUGG######################################
`,
'color: orange','color: #fc8daa','color: #93dcff','color: #93dcff','color: #ccc')
