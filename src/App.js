import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div className="App">
      <Header></Header>
    <Routes>
      <Route path='/home' element={<Home/>}></Route>
      <Route path='/meals' element={<Meals/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/> }></Route>

    </Routes>
    </div>
  );
}

export default App;
