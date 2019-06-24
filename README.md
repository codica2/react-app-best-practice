<h1 align="center">React Redux Sample</h1>
<p align="center">
  <a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/badge/Packages-NPM-%23CB3837.svg?logo=npm&link=https://www.npmjs.com"></a>
  <a href="https://webpack.js.org/" target="_blank"><img src="https://img.shields.io/badge/Bundler-Webpack-%238DD6F9.svg?logo=Webpack"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/View-React-blue.svg?logo=React"></a>
  <a href="https://redux.js.org/" target="_blank"><img src="https://img.shields.io/badge/State-Redux-744cbc.svg?logo=Redux&logoColor=ED2B88"></a>
  <a href="https://react.semantic-ui.com/" target="_blank"><img src="https://img.shields.io/badge/UI%20Framework-Semantic%20UI-%2300b5ad.svg"></a>
  <a href="https://www.styled-components.com/" target="_blank"><img src="https://img.shields.io/badge/%F0%9F%92%85%20Styles-Styled%20Components-%23de9b62.svg"></a>
  <a href="https://github.com/prettier/prettier" target="_blank"><img src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg"></a>
</p>

## Description

React application bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app) for using with `REST API` and [Redux](https://www.npmjs.com/package/redux) for state managing.

Both components and redux-specific code (reducers, actions, action types) splitted by feature-first pattern [Re-Ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be).

## File structure

```
src/
├── state/        => represents redux
├── views/        => all react components
└── utilities/    => global constants and helper functions
```

## Redux

State folder contains usual `store.js` and folder `ducks`, where one 'duck' equals one feature with one reducer. One duck contains `actions.js`, `redurers.js`, `types.js` and optional `utils.js`.

```
ducks/
├── duck/
|   ├── actions.js
|   ├── reducers.js
|   ├── types.js
|   ├── utils.js
|   └── index.js
└── index.js
```

Since `index.js` of each duck have default export as this feature's reducer, index of `ducks` folder represents `root reducer`. So adding a new, changing or deleting existing features in redux being not so painful - all files, related to one feature concentrated in one folder.

> It also prevents merge conflicts in situations, when several people working around different features need to touch same files, as `types`, `actions`, etc.

```js
// ducks/index.js
export { reducer as form } from "redux-form"

export { default as user } from "./user"
export { default as profile } from "./profile"

/* ... */

// store.js
import * as reducers from "./ducks"

export default createStore(
  combineReducers(reducers),
  reduxDevTools,
  applyMiddleware(...middlewares you use)
)
```

> Index of **ducks/** folder = old **root reducer** with _x2 less more code_

### One more thing about reducers

There is a helper function, called `createReducer`, used to create reducers, not using basic _switch-case_ template.

```jsx
const someReducer = createReducer(initialState)({
  [types.YOUR_ACTION_TYPE]: (state, action) => {
    const some_var = "";
    return {
      ...state,
      some_prop: action.payload
    };
  },

  [types.SOME_ANOTHER_TYPE]: (state, { payload: { data } }) => ({
    ...state,
    data,
    loading: false
  }),

  [types.MAY_BE_YOU_WANT_RESET]: (state, action) => ({
    ...initialState
  })
});
```

Its very useful, for example, if you need to scope out part of reducer to use variables with same name in several `case` statements.

> **Tip:** `switch-case` template still can be useful when several types causes same reaction.

### About actions

To handle asynchronous actions we usually using [redux-thunk](https://www.npmjs.com/package/redux-thunk) middleware and _always_ using action creators.

```jsx
const someAction = payload => ({
  type: types.SOME_YOUR_TYPE,
  payload
});

const someFetchAction = payload => (dispatch, getState) => {
  dispatch(setLoading(payload.id));

  fetch(GET, `/api_endpoint?some_parameter=${payload.id}`)
    .then(response => {
      if (getState().yourReducer.currentLoading === payload.id) {
        dispatch(setLoaded(response));
      }
    })
    .catch(error => {
      dispatch(setFail(error));
      console.error(error);
    });
};
```

## React

```
views/
├── routes/       => base router
├── components/   => feature-first components
├── pages/        => layouts, related to routes
├── styled/       => StyledComponents
└── UI/           => reusable components
```

We splitting components to two parts - _Container_ and _Component_.

**`Container`** file concentrates in itself all logic and HOCs of this feature.

**`Component`** itself usually a plain _stateless_ component.

```jsx
// FeatureContainer.js

import Feature from './Feature.jsx'

const withConnect = connect(...)

const withForm = reduxForm({
  ...
})

const enhance = compose(
  withConnect,
  withForm,
  anyOtherListedHOC
)

export default enhance(Feature)

// Feature.jsx

const Feature = ({props you needed}) => (
  /* some jsx code here */
)

export default Feature
```

## License
react-app-best-practice is Copyright © 2015-2019 Codica. It is released under the [MIT License](https://opensource.org/licenses/MIT).

## About Codica

[![Codica logo](https://www.codica.com/assets/images/logo/logo.svg)](https://www.codica.com)

We love open source software! See [our other projects](https://github.com/codica2) or [hire us](https://www.codica.com/) to design, develop, and grow your product.
