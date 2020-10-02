const createProject = (project)=>{
    return (dispatching_stuff, grabbing_state,{getFirebase, getFirestore})=>{


        dispatching_stuff({
            type: 'CREATE_PROJECT',
            payload: project
        })
    }
}

export default createProject