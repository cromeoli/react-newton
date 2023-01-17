import React, {useCallback, useState} from "react";
import "../../css/style.css"
import {Link} from "react-router-dom";

function KeyboardButton(props){
    const [isPressed, setIsPressed] = useState(false);
    const [path, setPath] = useState("#");
    const timeoutRef = React.useRef(null);

    const handleMouseUp = useCallback(() => {
        setIsPressed(false);
        clearTimeout(timeoutRef.current);
    }, []);

    const handleMouseDown = useCallback(() => {
        setIsPressed(true);
        timeoutRef.current = setTimeout(() => {
            //window.location.href = `/docs/${props.name}`;
            setPath(`/docs/${props.name}`)
        }, 1000); // 1000ms = 1s
    }, []);


    return (
        <Link onClick={() => props.write(props.operator)}
           onMouseDown={handleMouseDown}
           onMouseUp={handleMouseUp}
           onMouseLeave={handleMouseUp}
              to={path}
           className="keyboardButton lightKeyboardButtons">
            {props.children}
        </Link>
    );
}

export default KeyboardButton;