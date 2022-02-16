import '../css/Data.css';
import React from 'react';
import Event from './Event';
import {useSelector} from "react-redux";

export const EventTable= ({setCurId})=> {
    const events = useSelector((state)=>state.events);
    return(
        !events.length ? <div/>:
                <div id="articles">
                    {events.map((event)=>(
                        <Event event={event} setCurId={setCurId}/>
                    ))}
                </div>
    )

}