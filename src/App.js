import './App.css';
import Header from './Header';
import LandingPage from './LandingPage'
import Shop from './shop/Shop'
import Login from './Login'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './Register';
import ProductDetail from './shop/ProductDetail';
import Cart from './cart/Cart'
import { ShopContextProvider } from './ShopContext';


function App() {

  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/' exact Component={LandingPage} />
            <Route path='/Shop' exact Component={Shop} />
            <Route path='/Cart' exact Component={Cart} />
            <Route path='/Shop/:id' exact Component={ProductDetail} />
            <Route path='/Register' exact Component={Register} />
            <Route path='/Login' exact Component={Login} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App;
