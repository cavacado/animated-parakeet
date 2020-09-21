This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run audit`

this command uses a dependency called audit-ci, which checks all dependencies of the project whether they
pass a certain security clearance. It has been configured to the strictest setting: high, and will block
the deployment of the application if security levels are not fufilled (This is invoked in gitub actions).

### `npm run cy:open`

this command opens the cypress interactive testing electron application. Here one can run end to end tests locally. It has been configured to visit http://localhost:3000 when run locally. It still hits the service url of the application as stated in .env file.

### `npm run cy:run`

this command runs the integration cypress tests on a headless browser. It is normally invoked only in
the smoke job in the workflow of github actions.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## This project is setup with github actions.
github actions allows automation of tasks such as sanity checks / deploy processes and smoke tests.
This application will go through those steps as mentioned above.

sanity checks:
- this consists of format checks / unit tests / compile checks / audit checks

deploy:
- when run, the application will automatically deploy to `heroku`, and will retry until build succeeds.

smoke tests:
- upon successful steps, the application will then run smoke tests on the deployed instance
- these are high level functionality checks. even if these fail, the application will already be deployed.
- a developer can then re-run all the jobs in order to make the pipeline pass.

## This project is setup with google analytics
google analytics provides a simple and easy way to track users of the application.
this is vital for analysing traffic flows and segregating user groups.

## This project is hosted on heroku:
and the corresponding deployed link is as follows: [here](https://animated-parakeet.herokuapp.com/)
