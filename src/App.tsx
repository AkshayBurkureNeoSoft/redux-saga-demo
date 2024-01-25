import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./_redux/store";
import PostComponent from './component/posts';

function App() {
  return (
    <React.StrictMode>
    <Provider store={store}>
      <PostComponent />
    </Provider>
    </React.StrictMode>
  );
}

export default App;
