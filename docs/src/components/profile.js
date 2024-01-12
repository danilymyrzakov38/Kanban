import userAvatar from '../icons/user-avatar.png';
import arrowDownShow from '../icons/arrow-down-show.png';
import arrowDownHide from '../icons/arrow-down-hide.png';
import React, { useEffect } from "react";
import '../index.css';
import ProfileInfo from './nav-components/profileInfo';

function Profile() {
    useEffect(() => {
        const profileBtn = document.querySelector('#profileBtn');
        const profileImg = document.querySelector('#profileBtn img');
        const divProfileInfo__container = document.querySelector('.profileInfo__container');
        let profileBtnState = true;

        function handleClick() {
            if (profileBtnState === true) {
                profileBtn.title = 'Закрыть Меню';
                profileImg.src = arrowDownHide;
                profileImg.alt = 'Стрелка вверх';
                divProfileInfo__container.style.display = 'block';
                profileBtnState = false;
            } else {
              profileBtn.title = 'Открыть Меню';
                profileImg.src = arrowDownShow;
                profileImg.alt = 'Стрелка вниз';
                profileBtnState = true;  
                divProfileInfo__container.style.display = 'none';
            }
        };
        profileBtn.addEventListener('click', handleClick);

        return () => {
            profileBtn.removeEventListener('click', handleClick);
        };
    }, []);

    return (
        <div className='profile'>
            <img src={userAvatar} alt="Аватар пользователя" />
            <button id='profileBtn' title='Открыть меню'>
                <img src={arrowDownShow} alt="Стрелка вниз" />
            </button>
            <ProfileInfo />
        </div>
    );
}

export default Profile;