import React from 'react';
import {NavLink} from 'react-router-dom'

const SignedInLink = ()=>{
    return(
        <div className='Sign_in_out_boxes'>
            <li><NavLink to='/'>Sign out</NavLink></li>
            <li><NavLink to='/'>Create New Project</NavLink></li>
            <li><NavLink to='/'>USER AVATAR</NavLink></li>
        </div>
    )
}

export default SignedInLink