import React, { FC, useCallback, useRef, useState } from 'react';
import { SClock, STitle } from '../../assets/styles/app.styles';
import Button from '../../components/UI/Button';

enum TimerButton {
    Start = 'запустить',
    Pause = 'пауза',
    Continue = 'возобновить',
    Reset = 'сбросить',
}

interface ITimer {
    m: number;
    s: number;
    ml: number;
}

const Timer: FC = () => {
    const [value, setValue] = useState<ITimer>({ m: 0, s: 0, ml: 0 });
    const [button, setButton] = useState<string>(TimerButton.Start);

    const intervalRef = useRef<NodeJS.Timer>();

    const handlerReset = useCallback(() => {
        setButton(TimerButton.Start);
        clearInterval(intervalRef.current);
        setValue({ m: 0, s: 0, ml: 0 });
    }, [button]);

    const handlerStart = useCallback(() => {
        if (button === TimerButton.Start || button === TimerButton.Continue) {
            setButton(TimerButton.Pause);
            intervalRef.current = setInterval(() => setValue(val => ({ ...val, ml: val.ml + 1 })), 10);
        } else {
            setButton(TimerButton.Continue);
            clearInterval(intervalRef.current);
        }
    }, [button]);

    if (value.ml === 100) {
        setValue(val => ({ ...val, s: val.s + 1, ml: 0 }));
    }

    if (value.s === 60) {
        setValue(val => ({ ...val, s: 0, m: val.m + 1 }));
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <STitle>Timer</STitle>
            <SClock>
                <p>
                    {value.m < 10 ? `0${value.m}` : value.m} <br /> minuts
                </p>
                :
                <p>
                    {value.s < 10 ? `0${value.s}` : value.s} <br /> seconds
                </p>
                :
                <p>
                    {value.ml < 10 ? `0${value.ml}` : value.ml} <br /> milliseconds
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
