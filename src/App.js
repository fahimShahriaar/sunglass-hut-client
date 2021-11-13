
import './App.css';
import Home from './Pages/HomePage/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

import LoginPage from './Pages/Login/LoginPage/LoginPage';

import Navbar from './Pages/Share/Navbar/Navbar';
import Footer from './Pages/Share/Footer/Footer';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Products from './Pages/HomePage/Products/Products';
import BuyModal from './Pages/HomePage/BuyModal/BuyModal';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';



function App() {
  return (
    <div className="App" >
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <Route path="/home">
              <Navbar></Navbar>
              <Home></Home>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Navbar></Navbar>
              <BuyModal></BuyModal>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="/products">
              <Navbar></Navbar>
              <Products></Products>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <Navbar></Navbar>
              <LoginPage></LoginPage>
              <Footer></Footer>

            </Route>

            <Route path="/register">
              <Navbar></Navbar>
              <Register></Register>
              <Footer></Footer>

            </Route>
          </Switch>

        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
