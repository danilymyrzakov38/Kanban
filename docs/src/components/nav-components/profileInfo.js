import message from "../../icons/message.png";
import React from "react";
import '../../index.css';

function ProfileInfo() {
    return (
        <div className='profileInfo__container'>
            <img src={message} alt='Стрелка вверх'/>
            <button>
                <p>Profile</p>
            </button>
            <button>
                <p>Log Out</p>
            </button>
        </div>
    );
}

export default ProfileInfo;