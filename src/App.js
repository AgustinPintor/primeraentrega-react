import './App.css';
import NavBar from './components/navBar/navBar';
import ItemListContainer from './components/navBar/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer greeting={'Bienvenidos'}/>
    </div>
  );
}

export default App;
