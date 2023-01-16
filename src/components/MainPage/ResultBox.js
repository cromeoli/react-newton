import React from "react";
import "../../css/style.css"
import clipboard from "../../img/clipboard-idle.svg"
import {Tooltip} from "@mui/material";
import ClickAwayListener from '@mui/material/ClickAwayListener';

function ResultBox(props){
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

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
                            color="#131317"
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