import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

import { SCAN_DATA } from './constants'

export const QrCodeScanner = () => {
    const [scanned, setScanner] = useState(null);

    const scanHandler = (result) => {
        console.log(result[0].rawValue);

        const prevData = JSON.parse(localStorage.getItem(SCAN_DATA) || '[]');

        localStorage.setItem(
            SCAN_DATA,
            JSON.stringify [...prevData, result[0].rawValue]
        );
    };

    console.log(SCAN_DATA);

    return (
        <div>
            <p>{scanned}</p>
            <Scanner 
                allowMultiple 
                onScan={scanHandler} 
                components={{
                    audio: false,
                    finder: false,
            }} 
            styles={{
                container: { width: 200 }
            }}
            />
        </div>
    );
}