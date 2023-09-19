import React, { FC, useState, useEffect, useRef, useCallback } from 'react';
import { STitle, SClock, SInput } from '../../assets/styles/app.styles';
import Button from '../../components/UI/Button';
import { Slider } from '../../components/UI/Slider';
import { Progress } from '../../components/Progress';

const CountDown: FC = () => {
    const [seconds, setSeconds] = useState<number>(0);
    const [minuts, setMinuts] = useState<number>(0);

    const [newSecond, setNewSeconds] = useState<number>(0);
    const [newMinuts, setNewMinuts] = useState<number>(0);

    const [valueProgress, setValueProgress] = useState(0);

    useEffect(() => {
        setNewSeconds(seconds);
        setNewMinuts(minuts);
    }, [seconds, minuts]);

    useEffect(() => {
        setValueProgress(Number((((newMinuts * 60 + newSecond) / (minuts * 60 + seconds)) * 100).toFixed(1)));
    }, [newMinuts, newSecond]);

    const [isDisabled, setIsDisabled] = useState(false);

    function run() {
        setNewSeconds(seconds => {
            if (seconds === 0) {
                setNewMinuts(minuts => minuts - 1);
                return (seconds = 59);
            } else {
                return seconds - 1;
            }
        });
    }

    const intervalRef = useRef<NodeJS.Timer>();
    const handlerClick = useCallback(() => {
        if (!isDisabled) {
            intervalRef.current = setInterval(run, 1000);
            setIsDisabled(true);
        } else {
            clearInterval(intervalRef.current);
            setIsDisabled(false);
        }
    }, [isDisabled]);

    //Функия остановки и сброса значений
    const handlerReset = useCallback(() => {
        clearInterval(intervalRef.current);
        setIsDisabled(false);
        setNewMinuts(0);
        setNewSeconds(0);
        setMinuts(0);
        setSeconds(0);
        setValueProgress(0);
    }, [intervalRef.current]);

    useEffect(() => {
        if (newSecond === 0 && newMinuts === 0) {
            clearInterval(intervalRef.current);
            setIsDisabled(false);
            setNewSeconds(seconds);
            setNewMinuts(minuts);
        }
    }, [newMinuts, newMinuts]);

    function handleSeconds(e: any) {
        handleThrottle(e);
    }
    const throttleRef = useRef<boolean>();
    function handleThrottle(e: number) {
        if (throttleRef.current) return;
        throttleRef.current = true;
        setTimeout(() => {
            throttleRef.current = false;
            if (e > 60) {
                setMinuts(Math.floor(e / 60));
                setSeconds(Math.floor((e % 60) / 1));
            }
            return e;
        }, 100);
    }

    let valueSlider = 60 * minuts + seconds;

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <STitle>CountDown</STitle>
            <SInput>
                <span>Seconds</span>
                <input
                    type='number'
                    disabled={isDisabled}
                    placeholder='seconds'
                    name='seconds'
                    value={seconds}
                    min={0}
                    max={60}
                    onChange={e => setSeconds(Number(e.target.value))}
                />
            </SInput>
            <SInput>
                <span>Minuts</span>
                <input
                    type='number'
                    disabled={isDisabled}
                    placeholder='minuts'
                    name='minuts'
                    min={0}
                    max={720}
                    value={minuts}
                    onChange={e => setMinuts(Number(e.target.value))}
                />
            </SInput>

            <Slider isDisabledBtn={isDisabled} value={valueSlider} onChange={e => handleSeconds(e.target.value)} />
            <Progress value={valueProgress} />
            <SClock>
                <p>
                    {newMinuts < 10 ? `0${newMinuts}` : newMinuts} <br /> minuts
                </p>{' '}
                :
                <p>
                    {newSecond < 10 ? `0${newSecond}` : newSecond} <br /> seconds
                </p>
            </SClock>
            <div style={{ display: 'flex', gap: '30px' }}>
                <Button handlerClick={handlerClick} disabled={seconds !== 0 && minuts !== 0 ? false : true}>
                    {isDisabled ? 'Пауза' : 'Запустить'}
                </Button>
                <Button handlerClick={handlerReset} disabled={seconds !== 0 && minuts !== 0 ? false : true}>
                    Сбросить
                </Button>
            </div>
        </div>
    );
};

export default React.memo(CountDown);
