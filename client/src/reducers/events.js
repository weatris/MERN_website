export default  (events=[],action)=>{
    switch (action.type){
        case 'get_all':
            return action.payload;
        case 'create':
            return [...events,action.payload];
        case 'update':
            return events.map((event)=>
                    event._id===action.payload._id ? action.payload:event)
        case 'delete':
            return events.filter((event)=>event._id!==action.payload)
        default:
            return events;

    }
}