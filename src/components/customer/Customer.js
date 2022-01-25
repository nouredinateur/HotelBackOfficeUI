import { getData } from "../custom/useAxios";


const handleInput = (e) => {
    console.log(e.target.value)
}

const handleRequest = async (e) => {
  getData("customers")
   .then((res) => console.log(res))
   .catch((err) => console.log(err))
}


function Customers() {
    return(
    <div className="flex flex-col justify-center  p-8 h-full w-10/12">
        <div className="flex flex-row basis-1/4 w-12/12">
        <div className="basis-2/4 p-8">
            <div className="flex flex-row justify-between">
                <input id="search" onChange={handleInput} placeholder="Search"  type="text" className="border-2 border-cloud shadow rounded-3xl w-3/5 h-14 p-4" />
            </div>
        </div>
        <div className="basis-2/4">
            <div>
                Dark Mode
            </div>
        </div>
        </div>
        <div className="basis-3/4 w-12/12 border-2">
            <button onClick={handleRequest}>
                Test request
            </button>
        </div>
    </div>
    )
}

export default Customers;