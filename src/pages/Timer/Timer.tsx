import React, { FC, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { SClock, STitle } from '../../assets/styles/app.styles';
import Button from '../../components/UI/Button';

enum TimerButton {
    Start = 'запустить',
    Pause = 'пауза',
    Continue = 'возобновить',
    Reset = 'сбросить',
}

const Timer: FC = () => {
    const [milliseconds, setMilliSeconds] = useState<number>(0);
    const [seconds, setSeconds] = useState<number>(0);
    const [minuts, setMinuts] = useState<number>(0);
    const [button, setButton] = useState<string>('запустить');

    const intervalRef = useRef<NodeJS.Timer>();

    const handlerReset = useCallback(() => {
        setButton('запустить');
        clearInterval(intervalRef.current);
        setMilliSeconds(0);
        setSeconds(0);
        setMinuts(0);
    }, [button]);

    const handlerStart = useCallback(() => {
        if (button === 'запустить' || button === 'возобновить ') {
            setButton('пауза');
            intervalRef.current = setInterval(() => setMilliSeconds(s => s + 1), 10);
        } else {
            setButton('возобновить ');
            clearInterval(intervalRef.current);
        }
    }, [button]);

    if (milliseconds === 100) {
        setMilliSeconds(0);
        setSeconds(seconds + 1);
    }

    if (seconds === 60) {
        setSeconds(0);
        setMinuts(minuts + 1);
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <STitle>Timer</STitle>
            <SClock>
                <p>
                    {minuts < 10 ? `0${minuts}` : minuts} <br /> minuts
                </p>
                :
                <p>
                    {seconds < 10 ? `0${seconds}` : seconds} <br /> seconds
                </p>
                :
                <p>
                    {milliseconds < 10 ? `0${milliseconds}` : milliseconds} <br /> milliseconds
                </p>
            </SClock>
            <div style={{ display: 'flex', gap: '30px' }}>
                <Button handlerClick={handlerStart}>{button}</Button>
                <Button handlerClick={handlerReset}>{TimerButton.Reset}</Button>
            </div>
        </div>
    );
};

export default React.memo(Timer);
