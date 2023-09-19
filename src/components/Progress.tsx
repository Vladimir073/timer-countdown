import React, { FC, useState } from 'react';
import { SProgress } from '../assets/styles/app.styles';

interface IProgress {
    value: number;
}

export const Progress: FC<IProgress> = ({ value }) => {
    return <SProgress>
        <p style={{position: 'absolute', top: '30%', left: '45%', margin: 0}}>{isNaN(value) ? '0%' : `${value}%`}</p>
        <div style={{width: `${value}%`, height: '100%', background: 'black'}}></div>
    </SProgress>;
};
