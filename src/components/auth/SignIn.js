import React from 'react';

class SignIn extends React.Component{
    state={
        email:'',
        password:''
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state)
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    render(){
        return(
            <div>
                <h1>Sign In</h1>
                <form className='Sign_in' onSubmit={this.handleSubmit}>
                    <input type='email' id='email' placeholder='email' onChange={this.handleChange} /><br />
                    <input type='password' id='password'  placeholder='password' onChange={this.handleChange} /><br />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default SignIn