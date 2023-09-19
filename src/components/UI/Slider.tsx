import React, {FC, useState, useRef} from "react"

interface ISlider{
    isDisabledBtn: boolean,
    value: number,
    onChange: (e: any) => any    
}

export const Slider: FC<ISlider> = ({onChange, isDisabledBtn, value}) => {
    return <input type='range' value={value} step={15} min={0} max={3600} onChange={onChange} disabled={isDisabledBtn} />    
}