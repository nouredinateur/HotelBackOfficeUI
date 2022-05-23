import Card from "../rooms/Card";

const List = ({ list }) => {
  return (
    <div className="flex">
      {list.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

export default List;
