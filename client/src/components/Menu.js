import '../css/Menu.css';
import React,{useState,useEffect} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addEvent,updateEvent} from "../actions/events";

export const Menu =({curId,setCurId})=>{
    const [eventData,setEventData] = useState({
        name:'',
        desc:''
    });
    const event =
        useSelector((state)=>
            curId?state.events.find((p)=>p._id=== curId) : null);

    const dispatch = useDispatch();

    useEffect(()=>{
        if(event)
            setEventData(event);
    },[event])

    const clear = () => {
      setCurId(null);
      setEventData({name:'', desc:''}
      )}

    const handleSubmit=(event)=>{
        event.preventDefault();
        if(curId)
            dispatch(updateEvent(curId,eventData));
        else
            dispatch(addEvent(eventData));
        clear();
    }

    return(
        <div className='Menu'>
            <h2>{!curId?"Create Event":"Update Event"}</h2>
            <form id="myForm" className="myForm">
                <input className="formField" id='name'
                       type="text"
                       value = {eventData.name}
                       placeholder="event name"
                       onChange={
                            (data)=>
                            {setEventData({...eventData,name:data.target.value})}}/>

                <input className="formField" id='desc'
                       type="text"
                       value = {eventData.desc}
                       placeholder="event description"
                       onChange={(data)=>
                            {setEventData({...eventData,desc:data.target.value})}}/>

                <button className="myButton" onClick={handleSubmit}>submit </button>
            </form>
        </div>
    )

}