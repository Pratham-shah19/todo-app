import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import Calendar from 'react-calendar';
import db from './firebase';
import { useStateValue } from './StateProvider';
import firebase from 'firebase';
import {FormControl ,Button} from '@material-ui/core';
import Todo from './Todo';

function Sidebar() {
    const [weekly,setWeekly] = useState([]);
    const [{user}, dispatch] = useStateValue();
    const [input,setInput] = useState('');
    useEffect(()=>{
        db.collection("weekly-todos").orderBy("timestamp","desc").onSnapshot(snapshot =>{
            setWeekly(snapshot.docs.map((doc)=>{
                if(doc.data().username === user.displayName ){
                    return ({id:doc.id,
                            todo:doc.data().todo,
                            collection:"weekly-todos"})
                }
            }))
        })
    },[])
    const [value, onChange] = useState(new Date());
    const Addtodo = (event) => {
        event.preventDefault();
        db.collection("weekly-todos").add({
          todo:input,
          timestamp:firebase.firestore.FieldValue.serverTimestamp(),
          username:user?.displayName
        })
        setInput('');
      };
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <img src="https://to-do-cdn.microsoft.com/static-assets/c87265a87f887380a04cf21925a56539b29364b51ae53e089c3ee2b2180148c6/icons/logo.png"/>
                <p>Todo</p>
            </div>
            <div className="sidebar_body">
                <p>Weekly Pinned</p>
                <form className="add_weekly">
                    <FormControl>
                        <input placeholder="Add a pinned todo" value= {input} onChange={event => {setInput(event.target.value)}}/>
                    </FormControl>
                    <Button className="button"disabled = {!input} variant="contained" color="primary" type="submit" onClick={Addtodo}>
                         Add&nbsp;&nbsp;
                    </Button>
                </form>  
                <ul className="week_todos">
                {
                    (weekly.map( todo =>{
                        if(todo){
                            return <Todo object ={todo}/>}
                    }))
                }              
                                
                </ul>
            </div>
            <div className="sidebar_calendar">
                <Calendar
                    onChange={onChange}
                  
                    value={value}
                />
            </div>
        </div>
    )
}

export default Sidebar
