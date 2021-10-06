import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'materialize-css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './Context/cartContext';
import Form from './components/Form/Form';

function App() {
  return (
    <CartContext>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ItemListContainer}/>
          <Route exact path='/category/:idCategory' component={ItemListContainer}/>
          <Route exact path='/item/:idProducto' component={ItemDetailContainer}/>        
          <Route exact path='/cart' component={Cart}/>         
          <Route exact path='/cart/finally' component={Form}/>         
        </Switch>
      </Router>
    </CartContext>   
  );
}

export default App;
