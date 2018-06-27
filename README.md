# Create-React-App W/ Redux and Connected-React-Router

this is a boiler plate project to make production of apps quicker, this is a common set up i use.

## ---- Redux Setup ----

### --Actions--

To add new action first add action to types.js file and export to index.js file and then create action. Use Axios for API calls.

### --Reducers--

Use src/reducers/index.js to export reducers. to add new reducer create new reducer.js file and import here and add as new key value. This file is the RootReducer

## ----- Router Setup -----

Using connected-react-router inside the src/components/root.js import new component for navigation here. public routes are made using the <Route> component and Private Routes with the <PrivateRoute> component. Private routes only check to see if correct token is present. They don't authenticate token.
if present route will render of not then will be Redirected to "/" route
