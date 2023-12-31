import React from "react";
import './App.css';
import {GlowCapture,Glow} from "@codaworks/react-glow"
const Test = () => {
    return (
        <GlowCapture>
            <span>This won't glow</span>
            <Glow>
                <span className='glowable-text'>
                    This will glow pink when the mouse is passed over
                </span>
            </Glow>
        </GlowCapture>
    )
}
export default Test;