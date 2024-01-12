import React, { useState } from "react";
import setDataInLocalStorage from "../localStorage/setData";
import '../../index.css';

function AddTaskBacklog() {
    // Состояние для отслеживания видимости инпута
    const [isInputVisible, setInputVisible] = useState(false);
    const [typeBtn, setTypeBtn] = useState(true);
    const [isButtonActive, setButtonActive] = useState(false);
    const [inputValue, setInputValue] = useState('');

    // Обработчик изменения значения инпута
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        let inputValueLength = inputValue.length;

        if(inputValueLength > 3) {
            setButtonActive(true);
        } else {
            setButtonActive(false);
        }
    };

    // Обработчик клика по кнопке
    const handleBtnClick = () => {
        setInputVisible(true);
        setTypeBtn(false);
    };    

    const handleSubmitBtnClick = () => {
        const dataTask = {
            typeTask: 'backlog',
            h1: inputValue
        };

        setDataInLocalStorage(dataTask);

        setTypeBtn(true);
        setInputVisible(false);
        setInputValue('');
    };

    return (
        <div>
            {isInputVisible && (
                <div className="task__component__div__container__tasks">
                    {/* Инпут с текущим значением из состояния */}
                    <input
                        type="text"
                        value={inputValue}
                        onInput={handleInputChange}
                        required
                    />
                </div>
            )}
            
            {typeBtn ? (
                <button className="task__component__div__btn" onClick={handleBtnClick}>
                    <div className="task__component__div__btn--content__text">
                        <p>+</p>
                        <p className="task__component__div__btn--content__text--text">Add card</p>
                    </div>
                </button>
                ) : (
                <button className="task__component__div__btn--submit" onClick={handleSubmitBtnClick} disabled={!isButtonActive}>
                    <div className="task__component__div__btn--content__text">
                        <p className="task__component__div__btn--content__text--text">Submit</p>
                    </div>
                </button>
            )} 
        </div>
    );
}

export default AddTaskBacklog;