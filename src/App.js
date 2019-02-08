import React, { Component } from 'react';
import Main from './components/MainCompenet';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux';
import {ConfiguerStore} from "./Redux/configureStore"

const store = ConfiguerStore()

class App extends Component {

  render() {
    return (
      <Provider  store={store}>
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
