import Card from "./Card";

const List = ({ list }) => {
  return (
    <div className="flex">
      {list.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </div>
  );
};

export default List;
