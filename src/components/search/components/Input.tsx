import React, { FC } from "react";

interface Props {
    text:string
    name:string
    value:string
    id:string
    onChange:any
}

const Input:FC<Props> = ({text,name,value,id,onChange}) => {
    return (
        <div>
            <label htmlFor={id}>{text}</label>
            <input onChange={onChange}  type="checkbox" name={name} value={value} id={id} />
        </div>
    )
}

export default Input
