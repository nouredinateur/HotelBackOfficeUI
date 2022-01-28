import { MdAlternateEmail } from 'react-icons/md';
import { FaHeadphones , FaRegAddressCard } from 'react-icons/fa';

const Card = (props) => {
    return(
        <div class="card shadow-lg w-1/5 h-60 m-8 bg-white">
            <div class="card-body m-max h-max">
            <div className=" border border-avoca h-max w-max rounded-lg">
                <h2 class="card-title text-black text-avoca-dark m-1 inline-flex"> { props.item.name }</h2> 
            </div>
                <div className='mt-2'>
                    <p class="card-text text-black inline-flex p-1"> <MdAlternateEmail className='mr-1 mt-1' />  { props.item.email } </p>
                    <p class="card-text text-black inline-flex p-1"> <FaHeadphones className='mr-1 mt-1' /> { props.item.phone }</p>
                    <p class="card-text text-black inline-flex p-1"> <FaRegAddressCard className='mr-1 mt-1' /> { props.item.address }</p>
                </div>
                <div>
                    <button class="btn btn-outline btn-secondary mt-4">{ props.item.role }</button>
                </div>
            </div>
        </div>
    )
}

export default Card;