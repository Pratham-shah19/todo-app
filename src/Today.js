import React,{useState,useEffect} from 'react'
import { useStateValue } from './StateProvider';
import db from './firebase';
import firebase from 'firebase';
import {FormControl ,Input,InputLabel,Button} from '@material-ui/core';
import Todo from './Todo';
import './Today.css';

function Today() {
  const days = {0:"Sunday",1:"Monday",2:"Tuesday",3:"Wednesday",4:"Thursday",5:"Friday",6:"Saturday"};
  const current = new Date();
  const date = `${current.getDate()}`;
  const [{user}, dispatch] = useStateValue();
  const [todos,setTodos] = useState([]);
  const [input,setInput] = useState('');

  useEffect(() => {
    console.log("i got executed!");
    db.collection("todos").orderBy('timestamp','desc').onSnapshot(snapshot =>
      {
        setTodos(snapshot.docs.map(doc =>{ 
          if(doc.data().username === (user?.displayName)){

            return{ "id":doc.id,
            "todo":doc.data().todo,
            collection:"todos"}
        }
      }))
    
  })}, [user]);
  
  const Addtodo = (event) => {
    event.preventDefault();
    db.collection("todos").add({
      todo:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      username:user?.displayName
    })
    setInput('');
  };
    return (
        <div className="today">
          <div className="date">
              <p><strong>Today's schedule </strong></p>
              <p className="date_highlight">{days[current.getDay()]}   {date}</p>
              
          </div>
            
            
            <form className="add_todos">
                <FormControl>
                    <InputLabel> Write a todo</InputLabel>
                    <Input  value= {input} onChange={event => {setInput(event.target.value)}}/>
                </FormControl>
                <Button disabled = {!input} variant="contained" color="primary" type="submit" onClick={Addtodo}>
                    Add todo
                </Button>
            </form>              
            <ul className="show_todos">
            {
                (todos.map( todo =>{
                    if(todo){
                        return <Todo object ={todo}/>}
                }))
            }              
                            
            </ul>                  
        </div>
    )
}

export default Today
