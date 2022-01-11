Hndling side effects with the useEffect() Hook

Syntax: useEffect(()=> {...}, [dependencies]);
It accepts two parameters, 1st A function that should be executed AFTER every component evaluation if the specfied dependencies change. Your side effect code goes into this function.
2nd are dependencies of this effect, the function only runs if the dependencies are changed. Specify the dpendencies of your function here.

When the second parameter of dependencies is not added and only the function is passed as an arguement to the useEffect() then the function will run every time the components are evaluated eg at the type of every key stroke in a form.
However, when you pass the dependencies then it will run for the first time when the component is rendered and thereafter will run only if the dependencies are changed and not for every re-render cycle.

We have a cleanup function which runs before the useEffect function as a whole run but NOT before it runs for the first time.

Introducing useReducer() for state management

Sometimes, you have more complex state fo example if got multiple states that are managing the same aspect eg a state that manges the entered email address and the state that checks if the entered email is valid are related to each other, multiple ways of changing it or dependencies to other states.

NOTE: We should avoid updating a state depending on some other state. We can however update our state using the previous version of the same stae, in which case we use a function.

Understanding useReducer
const [state, dispatchFn] = useReducer(reducerFn, initialState, initFn);

state : The latest state snapshot
dispatchFn : A function that can be used to dispatch a new action that triggers an update of the state.
reducerFn : A function that is triggered automatically once an action is dispatched (via dispatchFn()) - it receives the latest state snapshot and should return the new updated state.
initialState : The initial state
initFn : A function to set the initial state programmatically.
