import React from 'react';

class SignIn extends React.Component{
    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <form className='Sign_in'>
                    <input type='email' id='email' placeholder='email' /><br />
                    <input type='password' id='password'  placeholder='password' /><br />
                    <button>Login</button>
                </form>
            </div>
            
        )
    }
}

export default SignIn