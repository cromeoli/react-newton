import React from "react";
import "../../css/style.css"
import clipboard from "../../img/clipboard-idle.svg"
import {Tooltip} from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';

/**
 * ResultBox
 *
 * @component
 *
 * Componente que renderiza una caja de resultado
 * Permite al usuario copiar el resultado al portapapeles al hacer clic en el ícono de portapapeles
 *
 * @param {Object} props - Props pasadas al componente.
 * @param {Number} props.total - El valor numérico del resultado
 * @returns {JSX.Element} El elemento JSX que representa el componente
 */
function ResultBox(props){
    const [open, setOpen] = React.useState(false);
    /**
     * handleTooltipClose
     *
     * Funcion que cierra el tooltip
     */
    const handleTooltipClose = () => {
        setOpen(false);
    };

    /**
     * handleTooltipOpen
     *
     * Funcion que abre el tooltip
     */
    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <section className="resultSection">
            <div className="resultBoxBackground lightResultArea">
                <div className="resultBox">
                    <ClickAwayListener onClickAway={handleTooltipClose}>
                        <Tooltip
                            PopperProps={{
                                disablePortal: true,
                            }}
                            onClose={handleTooltipClose}
                            open={open}
                            disableFocusListener
                            disableHoverListener
                            disableTouchListener
                            title="Copied"
                            placement="right"
                            arrow
                        >
                            <a onClick={handleTooltipOpen} className="copyToClipboard">
                                <img onClick={() => {navigator.clipboard.writeText(props.total)}}
                                     src={clipboard}
                                     className="copyToClipboardImg"/>
                            </a>
                        </Tooltip>
                    </ClickAwayListener>

                    <div className="result">
                        {console.log(props.total)}
                        {props.total.toString()}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ResultBox;