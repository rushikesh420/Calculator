This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Link:
``Calculator Application:`` https://rushikesh420.github.io/Calculator/

### Exercise:
Create a web app, which logs calculations as they happen and shares those calculations with everyone connected to the website.

For example, user A and user B go to your site at the same time. User A calculates "5 + 5", which equals "10". This is logged below the calculator as "5 + 5 = 10". User B is updated about this calculation right after user A posts it. Now, user B calculates "3 x 4".This calculates to “12” and displays "3 x 4=12" right below the prior calculation. User A sees this update immediately after user B posts it.

Results should remain between sessions. Only show the last 10 calculations descending from most recent to oldest.

### Approach:
Based on the problem statement, I created a React Application which updates the calculation log for all users connected to the website. It updates the logscreen for 10 most recent calculations. These calculation are cleared when the session is terminated. I have used JavaScript, HTML and CSS for styling. Node.js is required for starting the application. Lastly, deployed the React App using github gh-pages. Link to the application is mentioned above. 

For future scope of the application, I can add features such as user login, by this we can keep track of users and display which calculation operation is performed by which user in the log. Additionally, extended scientic caluclations feature can be implemented as a add-on.

### Demo

![demo_capture](https://user-images.githubusercontent.com/13897811/87899490-f9f69700-ca16-11ea-969e-110e6758dfa0.gif)


## Available Scripts

Installation Steps:
In the project directory, you can run:

### `npm install`

Installs all the necessary node modules to run the application.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
