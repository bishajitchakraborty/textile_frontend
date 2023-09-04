import logo from './logo.svg';
import Header from "./pages/header/header";
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/footer/footer";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import Design from "./pages/Design_studio/design";
import Merchandiser from "./pages/Merchandiser/merchandiser";


function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route exact path="/"  element={<Home />} />
          <Route  path="/about"  element={<About/>} />
          <Route  path="/contact"  element={<Contact/>} />
          <Route  path="/design"  element={<Design/>} />
          <Route  path="/merchandiser"  element={<Merchandiser/>} />



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
