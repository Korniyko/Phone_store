import React from "react";
import "./Button.scss"

const Button = (props) => {
    const { label, onClick,style} = props;

    return (
        <div className="button">
            <button onClick={onClick} >
                {label}
            </button>
        </div>

    );
};

export default Button;
