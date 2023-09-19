import React, { FC, memo } from 'react';
import { SButton } from '../../assets/styles/app.styles';
interface IButton {
    children: string;
    disabled?: boolean;
    handlerClick: () => void;
}

const Button: FC<IButton> = memo(({ handlerClick, disabled, children }) => (
    <SButton disabled={disabled} onClick={handlerClick}>
        {children}
    </SButton>
));

export default Button;
