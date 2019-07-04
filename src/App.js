import './App.css';
import Posts from './components/Posts';
import React, { Component } from 'react'
import Postform from './components/Postform';
import { Provider } from 'react-redux'; 
import store from './store';

//const store = createStore(() => [], {}, applyMiddleware());
//reducer, initialState, middleWares
 
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Postform />
          <hr />
          <Posts />
        
        </div>
      </Provider>
      
    )
  }
}


export default App;
