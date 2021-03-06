import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from './components/Cart/Cart';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartContext } from './Context/cartContext';
import { FormContext } from './Context/formContext';
import Form from './components/Form/Form';
import { Footer } from './components/Footer/footer';

function App() {
  return (
    <CartContext>
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path='/' component={ItemListContainer}/>
          <Route exact path='/category/:idCategory' component={ItemListContainer}/>
          <Route exact path='/item/:idProducto' component={ItemDetailContainer}/>
          <Route exact path='/category/item/:idProducto' component={ItemDetailContainer}/>
          <Route exact path='/cart' component={Cart}/>
          <FormContext>
            <Route exact path='/cart/finally' component={Form}/>
          </FormContext>
        </Switch>
      </Router>
      <Footer/>
    </CartContext>
  );
}

export default App;
