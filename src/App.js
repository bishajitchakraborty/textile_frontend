import logo from './logo.svg';
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/footer/footer";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Design from "./pages/Design_studio/design";
import Merchandiser from "./pages/Merchandiser/merchandiser";
import Subcategory from "./pages/Design_studio/Components/subcategory";
import Category from "./pages/Design_studio/Components/category";
import ProductDetails from "./pages/Design_studio/Components/product_details";
import Index from "./pages/Design_studio/Components";


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route  path="/about"  element={<About/>} />
          <Route  path="/contact"  element={<Contact/>} />
          {/*<Route  path="/design"  element={<Design/>} />*/}
          <Route  path="/merchandiser"  element={<Merchandiser/>} />
          {/*<Route  path="/design"  element={<Category/>} />*/}
          {/*<Route  path="/design"  element={<Subcategory/>} />*/}
          {/*<Route  path="/design"  element={<ProductDetails/>} />*/}
          <Route  path="/design"  element={<Index/>} />



            {/*<Route exact path={"/login"} >*/}
            {/*    {loggedIn ? <Login/> : <Reservation/>}*/}
            {/*</Route>*/}
            {/*<Route exact path={"/reservation"} >*/}
            {/*    {loggedIn ?  <Login/> : <Reservation/>}*/}
            {/*</Route>*/}

        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
