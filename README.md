# VICA Tech Assessment for SWE React Front End Development

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) using their typescript template.

## Setup Instructions

To start, please install relevant node modules by running 'npm install'. Then, in the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Assumptions

This is made with the assumption that minimal error handling is required, and assuming that users enter in the correct input types (eg. no alphabets in year field etc). As such, there are only minimal
error handling features, such as ensuring no empty fields.

It also assumes that there is no need to create a login/authorisation function, as such, the sign-in page is a placeholder page just to allow testing of features for different roles. When you sign in,
the names and roles are pre-assigned accordingly in sessionStorage.

For e.g.:

-   name: 'John Doe', role: 'admin'
-   name: 'Tom', role: 'editor'
-   name: 'Hooka', role: 'member'

### Redux

The redux part is split into store, actions, reducers.

#### Actions

For each action, there is an interface specified under action.ts to indicate what type of action it is, and what type of payload it is expecting.

To avoid typo mistakes, there is also an enum type under actionType.ts in action-types folder. This is to ensure that the actionType does not get any typo mistakes as it is now a declared enum for it.

In actioncreator folder, there are the dispatch action created. This part refers to the action.ts for the interface of each action, and actionType for the enum action name.

#### Reducer

In reducer, there is a root reducer that combines all reducers (bookReducer for books associated actions and userReducer for users associated actions). In each reducer, it specifies the initial state,
and what is being returned for each type of action dispatched.

#### Store

For the store, I used createStore from 'redux' as I am still used to the older redux versions that I used and not yet familiar with configureStore(). I also applied redux-thunk as middleware and used
react-devtools extension to help with debugging of redux action & states.

### Project File Structure

Usually with applications that use redux, I like to split them into a separate folder of Redux for all redux-related files. Within redux, it will be split into action, reducer and store folders. In
this case, since I used a lot of imports for actions, I exported all the imports from 1 file named index.ts under redux for convenience sake.

Then, I create a folder called 'pages' for all the application pages, and a 'components' folder for all the components. Under components there will be a folder for each page, and those not in any
folder are usually shared, such as Navbar and Footer components.

In this case, since there is hardcoded data involved, I created a separate 'data' folder for the hardcoded data.

### Code implementation

For this project, I did the following steps:

-   CRA typescript template
-   Added react router v6, created the different pages
-   Added React-redux with redux-thunk, and redux-devtools
-   Added registerServiceWorker to index.tsx to allow for offline capabilities(cacheing)
-   Set up redux (action,reducer,store) for userReducer
-   Finished user management page (with ag-grid-react for table UI, took a while to implement this as it was a new component based react-table I have never used before, which led to less time for
    other steps)
-   Repeated with bookReducer (I was considering trying another method of creating reducers, by using the new createSlice method of redux toolkit as well. However, time was running short so I stuck
    with the version I am more familiar with for the time being...)
-   Added react-chartjs-2 and chart.js for Analysis Page
-   Finished up book management page last
-   However, was unable to ensure website is completely mobile-responsive due to time constraints

### Scalability

I believe this project would be easily scalable especially since the data tables used (ag-grid-react) is especially made to handle large data sets, and comes with many features. It also has an
enterprise version with more features than the community version if this project grows larger.

#### AG-Grid-React

Currently, this project uses the community version of ag-grid and it incorporated the following features:

-   Sorting by each column (Arrows near the header)
-   Filtering within each column (Hamburger menu on each column header)
-   Pagination (responsive to page size as the number of rows changes as height changes)
-   Shifting columns around (can be dragged around for easier viewing/comparison)
