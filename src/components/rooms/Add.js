import { useState } from "react";
import { postData } from "../custom/useAxios";
const Add = () => {
  const [roomNumber, setRoomNumber] = useState();
  const number = {
    number: roomNumber,
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    setRoomNumber(event.target.value);
    postData("rooms", number);
    console.log("Im here");
  };

  const handleInputChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="room">Room Number</label>
      <input
        className="m-2 border p-2 rounded-md"
        id="room"
        onChange={handleInputChange}
      ></input>
      <button class="btn btn-accent" type="submit">
        ADD
      </button>
    </form>
  );
};

export default Add;
