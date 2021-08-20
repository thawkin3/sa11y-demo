# sa11y demo

Demo of Salesforce Accessibility Automation Libraries using React, Jest, and `@sa11y/jest`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and then promptly ejected using `yarn eject`.

## Exploring the demo

The demo app is hosted here: http://tylerhawkins.info/sa11y-demo/build/

You can also view the demo app locally on your machine by running `yarn start`. In the demo app you'll see a few examples of accessible and non-accessible content. These examples include buttons, images, and modals.

You can run the tests locally on your machine by running `yarn test`. If you look at any of the `.test.js` files in the project, you'll see that we call the `.toBeAccessible()` custom Jest matcher on each of the components. If `@sa11y/jest` or `jest-axe` find any a11y violations, they will be displayed in your terminal.

You'll note that static a11y checkers are a bit limited in what they can find. While there are many a11y violations baked into each example, the only one that the tools are finding is the missing `alt` attribute on the `img` element.

## Available scripts

In the project directory, you can run:

- `yarn build`: builds the app for production usage
- `yarn format`: formats the code using Prettier
- `yarn format-watch`: formats the code using Prettier in watch mode
- `yarn start`: starts the app in development mode
- `yarn test`: runs the tests using Jest
- `yarn test-watch`: runs the tests using Jest in watch mode

## Resources

- All sa11y packages: https://github.com/salesforce/sa11y#jest-integration
- Jest sa11y package: https://github.com/salesforce/sa11y/blob/master/packages/jest/README.md
- Create React App: https://github.com/facebook/create-react-app
- jest-axe package: https://www.npmjs.com/package/jest-axe
- Deque University axe 4.3 rules: https://dequeuniversity.com/rules/axe/4.3
