import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react'

import { GENERATE_DATA } from './constants';

import './QrCodeGenerator.css'

export const QrCodeGenerator = () => {
    const [value, setValue] = useState('');
    const [result, SetResult] = useState('');


    

    // console.log(array[0]); // value
    // console.log(array[1]); // fn - встроенная фукнция которая обновляет 

    const onClickHandler = () => {
        const prevData = JSON.parse(localStorage.getItem(GENERATE_DATA) || '[]');

        localStorage.setItem(
            GENERATE_DATA,
            JSON.stringify [...prevData, value]
        );

        SetResult(value);
        setValue('');
    };

    const onChangeHandler = (event) => {
        setValue (event.target.value);
        SetResult('');
    };

    console.log('result: ', result)

    return (
        <div className='container'>
            <input 
                type="text" 
                value={value}
                placeholder='Введите текст...'
                onChange={onChangeHandler} 
                className="input" 
            />
            <button type='button' onClick={onClickHandler} >
                Сгенерировать QR
            </button>

            {result !== '' && (
                <QRCodeSVG value ={result} size={200} />
            )}

        </div>
    )
};