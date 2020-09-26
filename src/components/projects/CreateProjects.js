import React from 'react';

class CreateProject extends React.Component{
    state={
        title:'',
        content:''
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
                <h1>Create Project</h1>
                <form className='Create_Project' onSubmit={this.handleSubmit}>
                    <input type='text' id='title' placeholder='title' onChange={this.handleChange} /><br />
                    <textarea id='content'  placeholder='content' onChange={this.handleChange} ></textarea><br />
                    <button>Create</button>
                </form>
            </div>
        )
    }
}

export default CreateProject