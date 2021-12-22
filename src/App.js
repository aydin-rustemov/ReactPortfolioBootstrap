
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

//komponentler gelecek
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutMe from './components/AboutMe'
import Services from './components/Services'
import Experience from './components/Experience'
import Contactus from './components/Contactus'
import Footer from './components/Footer'
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <nav className="container-fluid">

      <Navbar />
      <Header/>
      <AboutMe/>
      <Services/>
      <Experience/>
      <Contactus/>
      <Footer />

    </nav>
  );
}

export default App;

{/* <Switch>
  <Route path={"/"} exact component={Header} />
  <Route path={"/about"} component={AboutMe} />
  <Route path={"/services"} component={Services} />
  <Route path={"/experience"} component={Experience} />
  <Route path={"/contact"} component={Contactus} />
</Switch> */}

