import iconHide from '../../icons/icon-hide.png';
import React, { useEffect } from "react";
import '../../index.css';
import getTaskById from '../localStorage/searchTaskById';
import setDataInLocalStorage from '../localStorage/setData';

function AboutTheTask(props) {
    let getDataTask = getTaskById(props.prop);
    let description;

    const currentUrl = new URL(window.location.href);
    currentUrl.pathname = props.prop;
    window.history.replaceState({}, document.title, currentUrl.toString());

    if (getDataTask.desc.length > 0) {
        description = getDataTask.desc;
    } else {
        description = 'This task has no description';
    }

    useEffect(() => {
        const textarea = document.querySelector('#taskDescription');

        const handleInput = () => {
            const dataTask = {
                typeTask: 'edit',
                editText: textarea.value,
                id: window.location.pathname.substring(1)
            };

            setDataInLocalStorage(dataTask);
        };

        textarea.addEventListener('input', handleInput);
        return () => {
            textarea.removeEventListener('input', handleInput);
        };
    }, []);

    return (
        <section className="content AboutTheTask">
            <div className="container__AboutTheTask"> 
                <div className="AboutTheTask__container">
                    <div className="AboutTheTask__container--text">
                        <h1>{getDataTask.nameTask}</h1>    
                        <textarea id='taskDescription' defaultValue={description}></textarea>
                    </div>
                    <div className="AboutTheTask__container--btnHide__container">
                        <button className="AboutTheTask__container--btnHide" title="Закрыть" onClick={() => props.onExit()}>
                            <img src={iconHide} alt="Закрыть"/>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutTheTask;