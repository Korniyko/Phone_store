import React from "react";
import "./Input.scss"


const Input = (props) => {
    const { plus, minus, value, onChange,showInput} = props;
   
    return (
        <div className="input">
            <div onClick={minus}>-</div>
            {showInput && <input type="text" value={value} onChange={onChange} />}
            <div onClick={plus}>+</div>
        </div>

    );
};

export default Input;
