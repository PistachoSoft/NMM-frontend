[![Build Status](https://travis-ci.org/PistachoSoft/NMM-frontend.png?branch=develop)](https://travis-ci.org/PistachoSoft/NMM-frontend)

# NMM-Frontend

React browser application for NMM.

## Building the application

Before anything, run

```
npm install
npm run setup
npm start
```

Once this is done, you can open [localhost:8080](http://localhost:8080) file to browse
the application.

The test account is `test:test`.

## Scripts

- `npm run setup`: run this command to install typings.
- `npm start`: run the default dev task.
- `npm run build`: build TypeScript sources and UMD distributable.
- `npm test`: run all tests.
- `npm run test:unit`: run unit tests only.
- `npm run test:coverage`: run coverage tests.

## Coverage

The coverage reports can be found under `test/results/coverage`.

## Sonar

You will need to add the plugin [SonarTsPlugin](https://github.com/Pablissimo/SonarTsPlugin).
