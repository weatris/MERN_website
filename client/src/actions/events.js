import * as api  from "../api/api";

export const getEvents = ()=> async (dispatch)=>{
    try {
        const {data} = await api.fetchEvents();
        dispatch({type:'get_all',payload:data});
    }catch (err){
        console.log(err.message);
    }
}

export const addEvent = (event)=> async (dispatch)=>{
    try {
        const {data} = await api.createEvent(event);
        dispatch({type:'create',payload:data});
    }catch (err){
        console.log(err.message);
    }
}

export const updateEvent=(id,event)=> async (dispatch)=>{
    try{
       const {data} =  await api.updateEvent(id,event);
       dispatch({type:'update',payload:data})
    }
    catch(err){
        console.log(err);
    }
}

export const deleteEvent=(id)=> async (dispatch)=>{
    try{
        await api.deleteEvent(id);
        dispatch({type:'delete',payload:id})
    }
    catch(err){
        console.log(err);
    }
}