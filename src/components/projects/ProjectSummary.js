import React from 'react';

const ProjectSummary = (props)=>{
    return (
        <div>
            <h3>{props.title}</h3>
            {props.content}
            {props.date}
        </div>
    )
}

export default ProjectSummary