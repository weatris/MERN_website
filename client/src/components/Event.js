import React from "react";
import '../css/Data.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes ,faPencil} from '@fortawesome/free-solid-svg-icons'
import {useDispatch} from "react-redux";
import {deleteEvent} from "../actions/events";


const Event = ({event,setCurId})=>{
    const dispatch = useDispatch();
    return (
        <div key={event._id} className="article">
            <h1 className="help">{event.name}</h1>
            <h2 className="description">{event.desc}</h2>
            <FontAwesomeIcon className='btn edit' icon={faPencil} size='2x'
                onClick={()=>{
                    setCurId(event._id) ;
                }}/>
            <FontAwesomeIcon className='btn delete' icon={faTimes} size='2x'
                onClick={()=>{
                    dispatch(deleteEvent(event._id));
                }}/>
        </div>
    )
}
export  default Event;
