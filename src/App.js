import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/js/Navbar';
import Home from '../src/components/js/Home';
import Review from '../src/components/js/Review';
import LaptopDetails from '../src/components/js/LaptopDetails';
import AccessoryDetails from '../src/components/js/AccessoryDetails';

import Login from './components/js/Auth/Login';
import Register from './components/js/Auth/Register';
import Dashboard from './components/js/Admin/Dashboard';
import Recommend from './components/js/Recommend';


// import AccessoryDetails from './components/js/AccessoryDetails';
import PostElectronic from './components/js/Admin/PostElectronic';
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
          <Route  path="/login" element={<Login/>}></Route>
          <Route  path="/register" element={<Register/>}></Route>
          <Route  path="/review" element={<Review/>}></Route>
          <Route  path={"/electronics/laptops/:id"}element={<LaptopDetails/>}></Route>
          <Route  path={"/electronics/accessories/:id"} element={<AccessoryDetails/>}></Route>
          <Route  path="/dashboard" element={<Dashboard/>}></Route>
          <Route  path="/dashboard/postelectronic" element={<PostElectronic/>}></Route>
          <Route  path="/recommand" element={<Recommend/>}></Route>

          {/* <Route  path={"/products/laptops/detail/:id"} element ={ <LaptopDetails/>}></Route> */}
        </Routes>
        {/* <Footer/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
