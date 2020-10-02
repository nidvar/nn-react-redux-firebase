const createProject = (project)=>{
    return (dispatching_stuff, grabbing_state,{getFirebase, getFirestore})=>{


        const fireStore = getFirestore();
        fireStore.collection('projects').add({
            ...project,
            authorFirstName: 'Hillary',
            authorFirstName: 'Clinton',
            authorId: 12345,
            createdAt: new Date()
        }).then(
            dispatching_stuff({
                type: 'CREATE_PROJECT',
                payload: project
            })
        ).catch(a=>{
            console.log(a)
        })
    }
}

export default createProject