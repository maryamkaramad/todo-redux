
import './App.css';
import { React } from 'react';
import { store } from '../src/redux/store'
import { Provider } from 'react-redux'
import Home from './componenets/Home';
function App() {
  return (
    <Provider store={store}>
    <div>
      <Home/>
    </div>
     
    
    </Provider> );
}

export default App;
