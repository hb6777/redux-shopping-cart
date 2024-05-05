 import './App.css';   
import Header from './components/Header';
import Home from './Home'
import Cart from './cart'
import {Routes, Route} from 'react-router-dom' 

function App() {
  return (
      <div>
          <Header />
          <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/cart" element={<Cart />}></Route>
          </Routes>
      </div>
  );
}

export default App;
