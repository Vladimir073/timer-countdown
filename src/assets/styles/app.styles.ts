import styled, { keyframes } from 'styled-components';
import { Slider } from '../../components/UI/Slider';
import { memo } from 'react';

export const SApp = styled.div`
    text-align: center;
    background-color: #5e5372;
    width: 100%;
    min-height: 100vh;
`;

export const SHeader = styled.header`
    background-color: #282c34;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const SInput = styled.p`
    margin: 0;
    width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: transparent;
    padding: 5px 10px;
    margin: 0 0 20px;
    font-size: 24px;

    & input {
        background: transparent;
        width: 100px;
        padding: 5px 10px;
        border: 1px solid black;
        margin: 0 20px 0;
        font-size: 16px;
    }
`;

export const STitle = memo(styled.h1`
    font-size: 50px;
    font-weight: 700;
`);


export const SButton = styled.button`
    padding: 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    transition: 0.2s ease;
    border: 1px solid transparent;
    &:hover {
        border: 1px solid black;
        border-radius: 5px;
    }
`;

export const SProgress = styled.div`
    position: relative;
    width: 200px;
    height: 50px;
    border: 1px solid black;
    color: white;
`;

export const SClock = styled.h2`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 400px;
    font-size: 25px;
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SLink = styled.a`
    color: #61dafb;
`;
