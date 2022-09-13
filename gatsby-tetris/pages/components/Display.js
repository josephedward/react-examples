import React from 'react';
import { StyledDisplay } from './styles/StyledDislay'

const Display = ({ gameOver, text}) => (
    <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>
);

export default Display;