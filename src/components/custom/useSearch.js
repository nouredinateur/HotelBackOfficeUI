
const Search = (props) => {
   
    return(
        <div className="basis-2/4 p-8">
            <div className="flex flex-row justify-between">
                <input id="search" value={props.value}  onChange={props.onSearch} placeholder="Search" type="text" className="border-2 border-cloud shadow rounded-3xl w-3/5 h-14 p-4" />
            </div>
        </div>
    )
}

export default Search;