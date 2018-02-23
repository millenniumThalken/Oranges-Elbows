# OrangesAndElbows

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

I use these commands to setup the environment for the Oranges and Elbows website

`npm install -g @angular/cli`

`ng new oranges-and-elbows --routing --style=scss`

`cd oranges-and-elbows`

`npm install --save @angular/material @angular/cdk`

`npm install --save @angular/animations`

## Creating custom module files for all the Material imports

`ng g module material`

then I added all the imports to the Material library, now in the app.module file I just need to import the material.module

When generating components, services, guards, and so on to the app you will need to specify the app module like this:

`ng g c my-component --module=app.module.ts`