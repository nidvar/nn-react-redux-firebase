const initial_state = {
    projects:[
        {title:'Dummy Data', content: 'Dummy Data'},,
    ]
}

const projectReducer = (state = initial_state, action)=>{
    if(action.type ==='CREATE_PROJECT'){
        state = action.payload
        console.log(state)
        return state
    }
    return state
}

export default projectReducer