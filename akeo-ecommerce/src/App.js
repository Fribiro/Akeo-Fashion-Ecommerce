import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomepageProducts from './components/Homepage/HomepageProducts';
import Carousel from './components/navigation/carousel';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Carousel />} />
      </Routes>
    </div>
  );
}

export default App;
