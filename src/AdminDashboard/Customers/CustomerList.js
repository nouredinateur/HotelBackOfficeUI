import { Link } from 'react-router-dom';

const CustomerList = ({ allCustomer }) => {
  return (
    <div className="page-list">
      {allCustomer.map(customer => (
        <div className="page-preview border" key={customer._id} >
          <Link to={`customer/${customer._id}`}>
            <h2 className='borderin'>Customer ID: { customer._id }</h2>
            <h2>Name: { customer.name }</h2>
            <p>Cin: { customer.cin }</p>
            <p>Phone: { customer.phone }</p>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default CustomerList;