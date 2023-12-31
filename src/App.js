import logo from './logo.svg';
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/footer/footer";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Design from "./pages/Design_studio/design";
import Merchandiser from "./pages/Gallery/merchandiser";
import Subcategory from "./pages/Design_studio/Components/subcategory";
import Category from "./pages/Design_studio/Components/category";
import ProductDetails from "./pages/Design_studio/Components/product_details";
import Index from "./pages/Design_studio/Components";
import Sustainability from "./pages/sustainability/sustainability";
import Gallery from "./pages/Gallery/merchandiser";


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route  path="/about"  element={<About/>} />
          <Route  path="/contact"  element={<Contact/>} />
          {/*<Route  path="/design"  element={<Design/>} />*/}
          <Route  path="/gallery"  element={<Gallery/>} />
          <Route exact path="/design"  element={<Category/>} />
          <Route exact path="/design/category"  element={<Subcategory/>} />
          <Route exact path="/design/category/subCategory"  element={<Index/>} />
          <Route exact path="/design/subCategory/product_details"  element={<ProductDetails/>} />
          <Route  path="/sustainability"  element={<Sustainability/>} />



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
