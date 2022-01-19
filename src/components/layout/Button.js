function Button({ title, icon }) {
    return (
        <button className="hover:bg-cloud  text-black w-60 h-12 px-16 py-3 my-2 hover:rounded-3xl flex focus:bg-cloud focus:rounded-3xl antialiased">
            <span className="text-base pt-1 mr-1" >{ icon }</span>
            <span className="text-base">{ title }</span>
        </button>
    )
}

export default Button;