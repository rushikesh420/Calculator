import React from 'react';

import ResultScreen from './Result';
import ComputationScreen from './Calculations';

const screen = (props) => (
    <section className="screen">
        <ResultScreen>{props.result}</ResultScreen>
        <ComputationScreen>{props.equation}</ComputationScreen>
        
    </section>
);

export default screen;