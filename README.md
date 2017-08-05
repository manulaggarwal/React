# React-Redux

React-Redux tutorial files.
<p>
Use this project to manipulate files for better understanding of redux in react. This includes the most basic of setup
as provided in the redux guide from the official page http://redux.js.org
This tutorial uses webpack as a build system and babel transpiler for react.

Use it to your advantage and make changes accordingly.
</p>

<h2>Getting Started</h2>

<h3>Pre-requisites</h3>

In order to understand react-redux you need to have basic understanding of the following topics:-
<ul>
  <li> NodeJS with node package manager(npm).
  <li> Javascript (es6 syntax recommended)
  <li> React
  <li> Redux overview (helpful regardless of this tutorial)
  <li> Additionally, knowledge on webpack would be a plus.
  <li> Git
  <li> Basic Command Line scripting either on Command Prompt(Windows) or Terminal(macOS or any Linux distro).
</ul>
Note:- If any of the above topic is unfamiliar with you then just Google for the required topic and get atleast the basic understanding of it.

<h3>Setup</h3>
<p>
  Follow the steps to clone this repository and changing the branch:-
  <ul>
    <li> Create a Folder on your computer where you desire to keep this project.
    <li> Open Command Prompt/Terminal depending on what OS you are using.
    <li> 'cd' to your newly created folder.
    <li> Enter the Following command <code>git clone https://github.com/manulaggarwal/javascript.git</code>
    <li> <code>cd javascript</code>
    <li> <code>npm i</code> <blockquote>This would install the dependencies required to run the project. Check <b>package.json</b> for dependency lists.</blockquote>
    <li> <code>npm start</code>
  </ul>
  Your application would run on your default browser on 8080 default port.
</p>

<h3>Documentation</h3>
<p>This tutorial contains the following structure:-</p>
<ol>
  <li> actions
  <li> reducers
  <li> components
  <li> containers
</ol>

<h4>1. Actions</h4>
<p>
  As the name suggests from 3rd person point of view 'deal with the request'. The concept of actions is same in redux.
  You create an action with the help of action creators(functions that return/create actions). 
  Actions contain the <i>Type of action</i> and <i>Changes associated with action(called 'state')</i>
</p>
  <b>Example:- </b>
  Type of Action:- 'Purchase'
  Changes associated with action:- purchase amount, transaction id
  This is how action would look like in code form:-
  ```js
  let transactionId = 0; 
  export function makePurchase(purchaseAmount) {   //makePurchase here would be the action-creator.
      return {
        type: 'PURCHASE',         
        id: transactionId++,
        amount: purchaseAmount 
      } //returning action with new state.
  }
  ```
  You use Actions to help update the store with new/updated record.
 
<h4>2. Reducers</h4>
  Reducers are where an action goes to update the state and hence the overall store. 
  Consider store as a database or a warehouse where all your data/items are kept.
  Reducers job is to update the store with the new state corresponding to an action.
  Note:- Reducer would always throw a new state rather than updating(mutating) the existing state. This is important as making update to the existing store can break features such as time-travel which comes bundled with redux.
  If no action is matched in reducer then the same state is thrown back.
  <b>Example:-</b>
  ```js
  const purchase = function(state,action) {
    switch(action.type) {
      case 'PURCHASE': return [           //the spread operator will keep the previous records intact and the the new state will be appended to existing state.
                          ...state,
                          {
                            id: action.id,
                            amount: action.amount,
                            transactionComplete: true
                          }
                       ];
      default: return state;        //if no action is matched then same state will be returned.
    }
  } 
  ```
<h4>3. Components</h4>
  Components are your functions/classes that react uses to render the UI. Components mostly should be independent and should only be used to for rendering the UI. Consider this as Presentational layer.
 
<h4>4. Containers</h4>
  Containers act as a wrapper to your component and contains the app logic for the corresponding component. The user interaction events such as click, keypress, scroll, etc. should also be handled by this container.

<h3>More about React-Redux Bindings</h3>

The root component is wrapped inside the Provider component which is imported from 'react-redux' module and store is passed to it. This makes the store available to our app globally. We can get the current state from our store at any point of time in our application.

As you go through this project, you might have noticed unfamiliar functions used inside our components/containers. These functions are:-

1. connect() imported from 'react-redux'. This function is used to connect that particular component with the store. If this is not done then that component will fail to recieve the notification from store about state changes. It can be seen that we are passing 2 parameters to this function. 1st is mapStateToProps and 2nd is mapDispatchToProps. and then with the Javascript currying we are binding this function with the desired component.

2. mapStateToProps. As the name suggest it maps the current state as props to the binded component. The advantage we get from this is, it will map only the required properties needed for that component and unrequired properties will be ommitted. mapStateToProps is <b>subscribed</b> to the store changes and gets called whenever there is a state change in the store. The state change in store triggers the re-rendering of that component with the newly updated props. You get the newly updated state as the function parameter.

3. mapDispatchToProps. As the name suggest it maps the events/changes from component to store(reverse flow of mapStateToProps). Actions can be dispatched directly from the component to store. Example:- The components click event can be dispatched to the store which in turn would update the state which then will cause the mapStateToProps to re-render the component with the updated props. You get the dispatch function as its parameter. Use this dispatch function to pass an action to the store.

Note:- The binding done on connect()(component) will give that component dispatch function for action dispatching.

<h3>Understanding Project Flow</h3>

<h4>index.js</h4>
Here the store is created using 'createStore' function from 'redux' module and then it is passed as store parameter in Provider component which makes store available throughout our app. The second parameter passed in createStore function is to enable redux-dev-tools chrome's extension for better debugging.

<h4>./reducers</h4>
This folder contains 2 reducers and 1 index.js which combines both the reducers. This is done using combineReducers() from redux. You can also implement your own combineReducer functionality, just make sure an object type is getting passed.

</h4>./actions</h4>
This folder contains all the pre-defined actions that are used in our application. 

<h4>./components</h4>
This folder has components responsible for UI Layer. 

<h4>./containers</h4>
This folder consists of component wrappers. 

<h4>The Flow</h4>
Let's assume that our app is loaded in our browser and its time that user starts interacting with it. 
So, as you see we have an input field and a 'Add Todo' button. This piece of UI is loaded from './containers/AddTodo'. 
Now type 'Learn Redux' in the field and click 'Add Todo'. On submitting we are dispatching an action using dispatch function(remember we got this dispatch function with the help of connect function from rect-redux). Firstly, we are calling addTodo function i.e the action-creator from './actions' and passing our input value to it. This would inturn give you an action which will then get dispatched to store. 
From here, lets goto our corresponding reducer ./reducers/todos . There our action type gets matched using the switch case and a new and updated state is thrown back.

Now, lets check the VisibleTodoList located in './containers'. As soon as the reducers work is done then components registered with mapStateToProps comes in effect. The VisibleTodoList which acted as wrapper to TodoList component in ./components will get invoked/re-rendered automatically. This component is responsible for displaying the new/updated Todos.

Similarly, if you click on Filter options given in UI, the corresponding component will come into effect and dispatch the action with the selected filter. This filter type gets matched in the ./reducer/visibilityFilter and the state would be updated accordingly and again all the components subscribed to store implicitly using mapStateToProps will be re-rendered.

<h3>Brief Summary</h3>
Consider this:-
<ol>
<li> <App> component as your Home and <Provider>/store as a wholesale retailer.
<li> Your Home consists of various rooms.
<li> You connect your rooms to the wholesale retailer using a bridge/roadway(here we use connect()).
<li> state is your item/product.
<li> Lets say we have a delivery person and a notifier person.
<li> Now imagine you want to buy furniture.
<li> You call the retailer and place the order.
<li> notifier person takes the order and propogates it to the store(This is mapDispatchToProps). The store then updates their inventory.
<li> This update forces the Delivery person(This is mapStateToProps) to take the inventory and inform/deliver You the state/product at your home.
  </ol>  
This is just an imagination you can use to get your head around react-redux working. It is for beginners who face hard time in understanding the flow. I know a better example can be put here but anyways feel free to put/share your imagination for your own understanding.

Let me know if you find any bugs or something that I should include if I'd missed anything.

