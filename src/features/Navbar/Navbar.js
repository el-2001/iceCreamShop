import './Navbar.css';
import {Link} from 'react-router-dom';
import cartPicture from '../../Pictures/cart.png';
export function Navbar(){
    return (
        <div className="mainNavbar">
            <ul>
                <Link className='Link' to='/'><p>Home</p></Link>
                <Link className='Link' to='/OrderNow'><p>Order Now</p></Link>
                <Link className='Link' to='/AboutUs'><p>About Us</p></Link>
                <Link className='Link' to='/ReviewOrder'><img width='20px'src={cartPicture}/></Link>
                
            </ul>
        </div>
    )
}