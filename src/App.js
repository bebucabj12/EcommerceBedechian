import './App.css';
import 'materialize-css'
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import { FontAwesomeIcons } from '@fortawesome/fontawesome-free'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer gretting='Hola, soy un articulo'/>
    </div>
  );
}

export default App;
