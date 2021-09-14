import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'materialize-css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import CartWidget from './components/Cart/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/' component={ItemListContainer}/>
        <Route exact path='/category/:idCategory' component={ItemListContainer}/>
        <Route exact path='/item/:idProducto' component={ItemDetailContainer}/>        
        <Route exact path='/cart' component={CartWidget}/>         
      </Switch>
    </Router>
  );
}

export default App;
