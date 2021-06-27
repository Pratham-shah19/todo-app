import React from 'react'
import './Profile.css';
import {Avatar} from  '@material-ui/core';
import { useStateValue } from './StateProvider';
import DateTime from './Datetime';
import TouchAppIcon from '@material-ui/icons/TouchApp';

function Profile() {
    const [{user},dispatch]  = useStateValue();
    return (
        <div className="profile">
            <div className="profile_username">
                <p >{user?.displayName}</p>
                <Avatar src={user?.photoURL}/>
            </div>
            <div className="profile_date">
                <DateTime/>
            </div>
            <div className="profile_rules">
                <h5>How to use this app?</h5>
                <ol className="rules">
                    <li>1. Add your daily todos in Today's⌚</li>
                    <li>2. After completion just click it once to mark<TouchAppIcon/></li>
                    <li>3. At the end of the day just delete all the todos✍</li>
                    <li>4. Then you can add your todos for next day👍</li>
                </ol>
            </div>
        </div>
    )
}

export default Profile
