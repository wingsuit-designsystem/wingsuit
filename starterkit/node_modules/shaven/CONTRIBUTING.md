# Contributing

In order to check if your changes did not break anything and is suitable for a
pull request simply run `$ npm run prepublish`.
The script consists of following steps:


## Testing

To run tests on server side simply execute `$ npm test`.
This executes all tests in the mockup DOM environment
[jsdom](https://github.com/tmpvar/jsdom) and in the nodejs environment.
To run the tests in a client side environment simply open
[./test/index.html](./test/index.html) in a browser.


## Building

In order to build the final production-ready files from the source files run
`$ npm run build`.


## Style Guidelines

Checkout `package.json` for the JSHint and Jscs configurations.
