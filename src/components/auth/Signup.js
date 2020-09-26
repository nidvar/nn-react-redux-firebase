import React from 'react';

class SignUp extends React.Component{
    state={
        email:'',
        password:'',
        first_name:'',
        last_name:''
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
                <h1>Sign Up For a New Account</h1>
                <form className='Sign_in' onSubmit={this.handleSubmit}>
                    <input type='email' id='email' placeholder='email' onChange={this.handleChange} /><br />
                    <input type='password' id='password'  placeholder='password' onChange={this.handleChange} /><br />
                    <input type='text' id='first_name' placeholder='First Name' onChange={this.handleChange} /><br />
                    <input type='test' id='last_name'  placeholder='Last Name' onChange={this.handleChange} /><br />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default SignUp