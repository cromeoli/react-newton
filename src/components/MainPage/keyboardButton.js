import React, {useCallback, useState} from "react";
import "../../css/style.css"

function KeyboardButton(props){
    const [isPressed, setIsPressed] = useState(false);
    const timeoutRef = React.useRef(null);

    const handleMouseUp = useCallback(() => {
        setIsPressed(false);
        clearTimeout(timeoutRef.current);
    }, []);

    const handleMouseDown = useCallback(() => {
        setIsPressed(true);
        timeoutRef.current = setTimeout(() => {
            window.location.href = `/docs/${props.name}`;
        }, 1000); // 1000ms = 1s
    }, []);


    return (
        <a onClick={() => props.write(props.operator)}
           onMouseDown={handleMouseDown}
           onMouseUp={handleMouseUp}
           onMouseLeave={handleMouseUp}
           className="keyboardButton lightKeyboardButtons">
            {props.children}
        </a>
    );
}

export default KeyboardButton;