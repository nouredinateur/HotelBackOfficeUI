import { getData } from "../custom/useAxios";
import { useState, useEffect } from "react";
import Search from "../custom/useSearch";
import List from "./List";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData("customers")
      .then((res) => setCustomers(res))
      .catch((err) => console.log(err));
  }, [customers]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(searchTerm);
  };

  const searchedCustomers = customers.filter((customer) => {
    return customer.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="flex flex-col justify-center text-black p-8 h-full w-10/12">
      <div className="flex flex-row basis-1/4 w-12/12">
        <Search value={searchTerm} onSearch={handleSearch} />
        <div className="basis-2/4"></div>
      </div>
      <div className="basis-3/4 w-12/12">
        <List className="text-black" list={searchedCustomers} />
      </div>
    </div>
  );
}

export default Customers;
