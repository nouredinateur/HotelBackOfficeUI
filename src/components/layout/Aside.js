import Button from "./Button";
import { RiPulseLine, RiHotelBedLine, RiTicket2Line, RiTeamLine} from 'react-icons/ri';
import Logo from "./logo.svg"


function Aside() {
  return(
      <aside className="flex flex-col justify-center w-2/12 pb-6 pt-4 h-screen bg-white border-r-2 border-gray">
          <div className="w-full h-full flex flex-col content-center	 py-6">
              <div className="mb-16">
                <img src={Logo} alt="logo" className="w-full h-16" />
              </div>
              <div className="flex flex-col content-center">
                  <Button link={"dashboard"} title={"Dashboard"} icon={<RiPulseLine />} />
                  <Button link={"rooms"} title={"Rooms"} icon={<RiHotelBedLine />} />
                  <Button link={"customers"} title={"Customers"} icon={<RiTeamLine />} />
                  <Button link={"reservation"} title={"Reservation"} icon={<RiTicket2Line />} />
              </div>
          </div>
      </aside>
  )
}

export default Aside;