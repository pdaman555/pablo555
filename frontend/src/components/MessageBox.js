import React from 'react';
import './MessageBox.css';

function MessageBox({ setModalBox, message }) {
    return (
        <div className="MessageBox">
            <p className='message'>{message}</p>
            <button id='send' onClick={() => setModalBox('none')}>продолжить</button>
        </div>
    );
}

export default MessageBox;