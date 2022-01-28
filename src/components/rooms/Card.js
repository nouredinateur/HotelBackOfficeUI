import { MdBedroomParent } from 'react-icons/md'


const Card = ({ item }) => {
    return(
    <div className="card shadow-lg w-64	 h-34 m-8">
        <div className="card-body p-4">
            <div className="mb-10 mt-8 border border-avoca h-max w-max rounded-lg">
                <h2 class="card-title text-black text-avoca-dark m-1 inline-flex"><MdBedroomParent className='text-lg my-1 mr-1' /> { item.number }</h2> 
            </div>
            <div>
            
            </div>
                { item.isReserved ? <button class="btn btn-danger">Reserved</button> : <button class="btn btn-accent">Available</button> }
        </div>
    </div>
    )
}

export default Card;