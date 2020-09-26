import React from 'react';

const ProjectDetails = (props)=>{
    console.log(props)
    return (
        <div>
            <h1>Project Details</h1>
            <h2>{props.match.params.id}</h2>
        </div>
    )
}

export default ProjectDetails