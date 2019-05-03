1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

Reduce, map, and filter

Map

1.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are what happens when the user uses the app. They return JS objects depending on the action of the user. The action of a user returns an object.

Reducers are functions that take in actions and state as arguments to take in actions. They then apply logic and return a new object without affecting state.

Store is what manages the state of an app. It is a single location that manages the state tree. Its useful for large scale applications as it allows for easier prop drilling.

1.  What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is global in nature and Component is local. By keeping state in specific spots you can make you can make a less intensive app, but if necessary application state can be used to provide commonly used things repeatedly.

1.  What is middleware?

Middleware is a stop gap between actions and reducers that can add functionality to an action before is reaches the reducer which can be especially useful when creating asynchronous actions.

1.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Thunk allows you to dispatch a multitude of actions from one action creator. It is possible by providing action creators with utilities so they return functions with a direct line to the dispatch method.
 
1.  Which `react-redux` method links up our `components` with our `redux store`?

Provider Component
