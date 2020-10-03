import React from 'react';
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'

import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

class Dashboard extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        console.log(this.props.firestore_reducer.ordered.projects)
        return(
            <div className='Dashboard_outer'>
                <h2>Dashboard</h2>
                <div className='Dashboard_inner'>
                <div>
                    <ProjectList projects = {this.props.firestore_reducer.ordered.projects}/>
                </div>

                <div>
                    <Notifications />
                </div>
            </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return state
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection: 'projects'}
    ])
)(Dashboard)