import ReservationList from "./ReservationList";
import useFetch from "../../useFetch";
import { Link } from "react-router-dom";


const Home = () => {
  const { error, isPending, data: reservation } = useFetch('http://localhost:4000/reservationDashboard')
// console.log(reservation);
  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      
      { reservation && <ReservationList allReservation={reservation} /> }
    </div>
  );
}
 
export default Home;
