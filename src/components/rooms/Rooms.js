import { getData } from "../custom/useAxios";
import { useState, useEffect } from "react";
import Search from "../custom/useSearch";
import List from "../rooms/List";
import Add from "../rooms/Add";

function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData("rooms")
      .then((res) => setRooms(res))
      .catch((err) => console.log(err));
  }, [rooms]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const searchedRooms = rooms.filter((room) => {
    return room.number.toString().includes(searchTerm);
  });

  return (
    <div className="flex flex-col justify-center text-black p-8 h-full w-10/12">
      <div className="flex flex-row basis-1/4 w-12/12">
        <Search value={searchTerm} onSearch={handleSearch} />
        <div className="basis-2/4 ">
          <div className="shadow-md rounded-lg pl-4 py-8">
            <Add />
          </div>
        </div>
      </div>
      <div className="basis-3/4 w-12/12">
        <List list={searchedRooms} />
      </div>
    </div>
  );
}

export default Rooms;
