import React from 'react';

const ProjectSummary = (props)=>{
    return (
        <div>
            <h1>Project Summary</h1>
            {props.title}
            {props.posted_by}
            {props.date}
        </div>
    )
}

export default ProjectSummary