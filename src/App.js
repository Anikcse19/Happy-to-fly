import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Navbar from './components/Header/Navbar';
import Packages from './Pages/Packages/Packages';
import OrderPlace from './Pages/OrderPlace/OrderPlace';
import MyOrders from './Pages/MyOrders/MyOrders';
import Login from './Pages/Login/Login';
import Registration from './Pages/Registration/Registration';
import AuthProvider from './ContextApi/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Addpackage from './Pages/AddPackage/Addpackage';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Navbar></Navbar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route exact path='/home'>
              <Home></Home>
            </Route>
            <Route path='/packages'>
              <Packages></Packages>
            </Route>
            <PrivateRoute path='/orderplace/:id'>
              <OrderPlace></OrderPlace>
            </PrivateRoute>
            <Route path='/myorders'>
              <MyOrders></MyOrders>
            </Route>

            <PrivateRoute path='/manageallorders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/addpackage'>
              <Addpackage></Addpackage>
            </PrivateRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registration'>
              <Registration></Registration>
            </Route>
          </Switch>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
