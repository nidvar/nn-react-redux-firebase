const initial_state = {
    projects:[
        {title:'Trump rules all', content: 'He will win the 2020 election again'},
        {title:'Pokemon are amazing', content: 'Original games are the best'},
        {title:'World Of Warcraft', content: 'Greatest game ever'},
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