import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = (props)=>{
    console.log(props.projects)
    return(
        <div>
            {props.projects.map(a=>{
                return <ProjectSummary title={a.title} content={a.content}/>
            })}
        </div>
    )
}

export default ProjectList