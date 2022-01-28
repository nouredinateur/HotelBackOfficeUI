import Card from "./Card"

const List = ({ list }) => {
    return (
        <div className="flex">
            {list.map((item) =>  <Card item={item} /> )}
        </div>
    )
}

export default List