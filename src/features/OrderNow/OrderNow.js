import './OrderNow.css';
import { useSelector,useDispatch } from 'react-redux';

import { saveOrder,removeOrder } from './OrderNowSlice.js';
import iceCreamIcon from '../../Pictures/iceCreamOrder.png';
import {Link} from 'react-router-dom';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
let flavorSelected = 'Strawberry';

window.onbeforeunload = function() {
    return "Data will be lost if you leave the page, are you sure?";
  };
export function OrderNow(){
    const dispatch = useDispatch();
    const iceCreamFlavors = useSelector(state =>{return state.order.flavors});
    const orderToDisplay = useSelector(state =>{return state.order.savedOrder});
    
    
    const preventRefresh = (e)=>{
        e.preventDefault();
    }
    const changeSelectedFlavor=(e)=>{

     flavorSelected = e.target[e.target.value].innerHTML;
    }
    const addFlavor = ()=>{
        dispatch(saveOrder(flavorSelected));
       
    }
    const removeFlavor = (e)=>{
        
        dispatch(removeOrder(e.target.parentNode.innerText));
    }
    return(
        <div className="mainOrderNow">
            <div className='order-window'>
                <form onSubmit={preventRefresh}>
                    <label>Choose Your Flavor</label><br/>
                    <select onChange={changeSelectedFlavor}>
                        {iceCreamFlavors.map((item,id)=>{
                    
                            return <option value={id} key={id}>{item}</option>
                            
                        })}
                        
                    </select> <br/>
                   
                </form> <br/>
                <Button variant='contained' onClick={addFlavor}>Add</Button>
                <ul className='order'>
                    { orderToDisplay?.map(item=>{
            return <li><img width='40px'src={iceCreamIcon}/>{item}<IconButton onClick={removeFlavor}><DeleteIcon/></IconButton></li>
           })}
                </ul>
               <Link to='/ReviewOrder'><Button color='primary'>Continue</Button></Link>
            </div>
            
        </div>
    )
}