# PythonChart

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.
#### How to execute:
##Prerequisites
Node be installed.
Node version used - v8.11.4
npm version - 5.6.0
Node can be downloaded from
https://nodejs.org/ja/blog/release/v8.11.1/

## Set up the sample
Clone the code from https://github.com/appleamar/angular-chart.git
git clone https://github.com/appleamar/angular-chart.git
or simply download the zip file
Navigate to folder python-chart
cd python-chart
Run 'npm install' from the project folder.
M:\angular-chart>cd python-chart;
M:\angular-chart\python-chart>npm install

install other dependencies from the same root folder.

npm install -g express-generator
npm install express --save
npm install cors --save

Change the path location of json files in appserver.js
Open the file appserver.js and change variable __dirname based on local computer json file path
all json should be in same folder and names of files be
test.json
train.json
forecast.json

var __dirname = 'M:/data';


## Run  the sample
Run 'npm start'

M:\angular-chart\python-chart>npm start
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
