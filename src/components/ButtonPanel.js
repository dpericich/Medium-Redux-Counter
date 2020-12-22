import React from 'react';
import IncrementButton from './IncrementButton';
import DecrementButton from './DecrementButton';
import ResetButton from './ResetButton';

const ButtonPanel = () => {
    return(
        <div className="button-panel">
            <IncrementButton />
            <ResetButton />
            <DecrementButton />
        </div>
    )
}

export default ButtonPanel;