import { Button, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import db from './firebase';
import './Todo.css';
import DeleteIcon from '@material-ui/icons/Delete';



function Todo({object}) {
    return (
        <div className="todo">
            <List className="todo_list">
                <ListItem>
                    <ListItemText primary={object.todo} />
                </ListItem> 
                <Button onClick={event =>db.collection(object.collection).doc(object.id).delete()}><DeleteIcon/></Button>
                
            </List>
        </div>
    )
}

export default Todo
