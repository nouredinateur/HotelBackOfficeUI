import { Link } from "react-router-dom";

function Button({ title, icon, link }) {
    return (
        <Link to={ link }>
        <button className="hover:bg-cloud text-black w-60 h-12 px-16 py-3 my-2 mx-auto hover:rounded-3xl flex focus:bg-cloud focus:rounded-3xl antialiased">
            <span className="text-base pt-1 mr-1" >{ icon }</span>
            <span className="text-base">{ title }</span>
        </button>
        </Link>    
    )
}

export default Button;