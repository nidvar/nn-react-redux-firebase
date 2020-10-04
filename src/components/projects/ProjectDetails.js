import React from 'react';

import {connect} from 'react-redux';
import {firestoreConnect} from 'react-redux-firebase';
import {compose} from 'redux';

const ProjectDetails = (props)=>{
    let x = props.match.params.id
    const z = props.firestore_reducer.data.projects
    if(z!=undefined){
        console.log(z[x].title)
        return (
            <div>
                <h2>{z[x].title}</h2>
                <p>{z[x].content}</p>
            </div>
        )
    }else{
        return (
            <div>
                <h1>Project Details</h1>
                <h2>loading</h2>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps)=>{
    return state
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'projects'}])
)(ProjectDetails)