import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/js/Navbar';
import Home from '../src/components/js/Home';
import Footer from '../src/components/js/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
        <div className="App">
         <Navbar/>
       
        <Routes>

          <Route exact path="/" element={<Home/>}></Route>
          {/* <Route  path="/review" element={<Review/>}></Route>
          <Route  path="/recommend" element={<Recommend/>}></Route>

          <Route  path={"/products/laptops/detail/:id"} element ={ <LaptopDetails/>}></Route>
          <Route  path={"/products/accessories/detail/:id"} element ={ <AccessoriesDetails/>}></Route> */}
           
        </Routes>
        {/* <Footer/> */}
        </div>
      </Router>



    
    </>
  );
}

export default App;
