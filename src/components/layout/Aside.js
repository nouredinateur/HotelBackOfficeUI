import Button from "./Button";
import { RiPulseLine, RiHotelBedLine, RiTicket2Line, RiTeamLine} from 'react-icons/ri';
import Logo from "./logo.svg"

function Aside() {
  return(
      <aside className="w-2/12 px-4 pb-6 pt-4 h-screen bg-white border-r-2 border-gray">
          <div className="w-full h-full m-4 px-5 py-6">
              <div className="mb-16">
                  <img src={Logo} alt="logo" className="w-full h-16" />
              </div>
              <div>
                <Button title={"Dashboard"} icon={<RiPulseLine />} />
                <Button title={"Rooms"} icon={<RiHotelBedLine />} />
                <Button title={"Customers"} icon={<RiTeamLine />} />
                <Button title={"Reservation"} icon={<RiTicket2Line />} />
              </div>
          </div>
      </aside>
  )
}

export default Aside;