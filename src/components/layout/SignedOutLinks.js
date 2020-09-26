import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedOutLink = ()=>{
    return(
        <div className='Sign_in_out_boxes'>
            <li><NavLink to='/signup'>Sign up</NavLink></li>
            <li><NavLink to='/signin'>Login</NavLink></li>
            <li><NavLink to='/'>USER AVATAR</NavLink></li>
        </div>
    )
}

export default SignedOutLink