1. What problem does the context API help solve?

Context API is a state management tool that allows developers to have ease of access to top-level state without having to do prop drilling. Prop drilling is the act of passing down props through multiple layers of components. This takes a lot of time to do and it could lead to bugs

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

actions - an object that describes to the reducer what it will do to the state. It can come with a payload, which is the data value that you'll use to manipulate the store.
reducers - Considered as a pure function, meaning it returns the same output. To clarify, this means that the state doesn't manipualte external variables, but instead, returns values that are instantiated and unrelated in memory to existing variables. Contains the state for the app. Takes in actions through a list of cases. If there's a match, it will manipulate the state accordingly.
store - Houses the app-level state that can be connected by components from various locations

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state should be used if the component is solely using it for itself. The changes in that state should not affect others. IE: Highligting a component. Application state, on the other hand, affects any component that is connected to it. IE: Fetched data from a API call passed down as props.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk is a library that allows redux to manipulate the store with asynchronous actions. A thunk is a function returned by a function. This concept allows the function to be saved, modified, and then called later by external code. This changes the action-creators by having the action functions return a function instead of an object. This would normally not permitted by redux, but redux-thunk is a middleware that intercepts the action dispatches and checks to see if a function is returned instead. This allows us to appropriately place the dispatch call in the then and catch methods so it can send actions to the store when the async work is done.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Context API is WAY mmuch more convenient to implement than Redux. I will say, learning Redux and how it all came together made me a better developer. Concepts like immutability, thunks, higher order functions, and pure functions were all part of the knowledge gained by learning Redux. So yeah, Context API.
