import './App.css';
import React,{useState,useEffect} from 'react';
import {Decor} from "./components/Decor";
import {Menu} from "./components/Menu";
import {EventTable} from "./components/EventTable";
import {useDispatch} from "react-redux";
import {getEvents} from './actions/events';


export const App=() =>{
    const dispatch = useDispatch();
    const [curId,setCurId] = useState(null);
    useEffect(()=>{
        dispatch(getEvents());
    },[dispatch,curId]);

    return (
        <div id='handler'>
            <Decor/>
            <Menu curId = {curId} setCurId={setCurId}/>
            <EventTable setCurId={setCurId}/>
        </div>
    )
}
