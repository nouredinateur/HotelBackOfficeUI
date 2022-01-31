import Navbar from './Navbar';
import AdminHome from './AdminDashboard/AdminHome';
import Home from './Home';
import CreateReservation from './Home/Reservation/CreateReservation';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateRoom from './AdminDashboard/Rooms/CreateRoom';
import CreateCustomer from './AdminDashboard/Customers/CreateCustomer';
import RoomDetails from './AdminDashboard/Rooms/RoomDetails';
import CustomerDetails from './AdminDashboard/Customers/CustomerDetails';
import NotFound from './NotFound';
import AllRooms from './AdminDashboard/Rooms/AllRooms';
import AllCustomers from './AdminDashboard/Customers/AllCustomers';
import AllReservation from './AdminDashboard/Reservation/AllReservation';
import ReservationDetails from './AdminDashboard/Reservation/ReservationDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/reservation/:id">
              <CreateReservation />
            </Route>
            <Route exact path="/adminhome">
              <AdminHome />
            </Route>
            <Route path="/adminhome/createroom">
              <CreateRoom />
            </Route>
            <Route path="/adminhome/allrooms">
              <AllRooms />
            </Route>
            <Route path="/adminhome/allcustomers">
              <AllCustomers />
            </Route>
            <Route path="/adminhome/allreservation">
              <AllReservation />
            </Route>
            <Route path="/adminhome/createcustomer">
              <CreateCustomer />
            </Route>
            <Route path="/adminhome/room/:id">
              <RoomDetails />
            </Route>
            <Route path="/adminhome/reservation/:id">
              <ReservationDetails />
            </Route>
            <Route path="/adminhome/customer/:id">
              <CustomerDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
