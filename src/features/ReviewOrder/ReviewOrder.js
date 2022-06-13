import './ReviewOrder.css';
import { useSelector} from 'react-redux';
import { useEffect,useState } from 'react';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom';

export function ReviewOrder(){
    const orderToDisplay = useSelector(state =>{return state.order.savedOrder});
    const [total, setTotal] = useState(0);
    useEffect(() =>{
        let number = 0; 
        for(let i=0; i<orderToDisplay.length; i++){
            number+= 5;
        }
        setTotal(total + number);
    },[])
    
    return(
        <div className="mainReviewOrder">
            <div className='payment-window'>
                { orderToDisplay?.map(item=>{
                    return <p>x1 {item}</p>
                })}
                <h2>Total: ${total}</h2>
               <Link className='Link' to='/OrderNow'><Button variant='contained'>Back To Order</Button></Link> 
            </div>
            
        </div>
    )
}