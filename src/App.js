import './App.css';
import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className='espacio'></div>
      <ItemListContainer greeting= "ItemListContainer" />
    </>
  );
}

export default App;
