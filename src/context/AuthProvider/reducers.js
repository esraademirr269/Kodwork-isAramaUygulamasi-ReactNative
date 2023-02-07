
function reducers(state, action){
    switch (action.type) {
        case 'ADD_FAVORİTED':
            const add=[...state.JobsDetailId, action.payload.data]
            return{...state, JobsDetailId: add};
        case 'DELETE_FAVORİTED':
            const mydata=action.payload.item;
            
            const newData=state.JobsDetailId.filter(data=>{
                if(data.id !== mydata.id) return true;
            });
            return {...state,JobsDetailId:newData};

        default:
            return state;
    }
}
export default reducers;