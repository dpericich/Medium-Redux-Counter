import React from 'react';
import {connect} from 'react-redux';
import {resetCount} from '../actions'

const ResetButton = ({resetCount}) => {
    return (
        <div className="reset-button" onClick={resetCount}>
            [ RESET ]
        </div>
    )
}

const mapDispatchToProps = {resetCount}

export default connect(null, mapDispatchToProps)(ResetButton);