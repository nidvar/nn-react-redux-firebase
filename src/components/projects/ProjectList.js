import React from 'react';
import ProjectSummary from './ProjectSummary';
import {Link} from 'react-router-dom';

const ProjectList = (props)=>{
    return(
        <div>
            {props.projects && props.projects.map(a=>{
                return (
                    <Link to={'/project/' + a.id} key={a.id} >
                        <ProjectSummary  title={a.title} content={a.content}/>
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList