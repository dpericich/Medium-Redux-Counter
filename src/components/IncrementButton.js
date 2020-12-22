import React from 'react';
import {connect} from 'react-redux';
import {incrementCount} from '../actions'

const IncrementButton = ({incrementCount}) => {
    return (
        <div className="increment-button" onClick={incrementCount}>
            ( + 1 )
        </div>
    )
}

const mapDispatchToProps = {incrementCount}


export default connect(null, mapDispatchToProps)(IncrementButton);