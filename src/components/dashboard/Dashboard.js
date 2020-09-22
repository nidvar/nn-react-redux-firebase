import React from 'react';
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

class Dashboard extends React.Component{
    render(){
        return(
            <div className='Dashboard_outer'>
                <h2>Dashboard</h2>
                <div className='Dashboard_inner'>
                <div>
                    <ProjectList />
                </div>

                <div>
                    <Notifications />
                </div>
                
            </div>
            </div>
            
        )
    }
}

export default Dashboard