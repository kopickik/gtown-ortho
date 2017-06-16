# Angular / REST API Demo

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development
1. Run `npm install` to install project dependencies.
2. Run `bower install` to install client dependencies.
3. Run `grunt serve` to start our express API and kick off the connect web server.

## Testing

Running `grunt test` will run the unit tests with karma. (no tests)

## Structure

The `Customer` model is derived from a [mongoose][http://mongoosejs.com/docs/api.html] Schema. Backend routes are defined in server.js. Angular UI Router routes are defined in app/scripts/app.js.

## Validation

The requirements called for validating user inputs. These should trigger from `_form.html`.
