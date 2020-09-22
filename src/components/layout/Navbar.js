import React from 'react';
import {Link} from 'react-router-dom';

import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = ()=>{
    return (
        <div className='Navbar' >
            <div className='Home_link'>
                <Link to ='/'>Home</Link>
            </div>
            <div className='Sign_in_out_div'>
                <SignedInLinks />
                <SignedOutLinks />
            </div>       
        </div>
    )
}

export default Navbar