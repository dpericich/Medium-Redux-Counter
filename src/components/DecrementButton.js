import React from 'react';
import {connect} from 'react-redux';
import {decrementCount} from '../actions'

const DecrementButton = ({decrementCount}) => {
    return (
        <div className="decrement-button" onClick={decrementCount}>
            ( - 1 )
        </div>
    )
}

const mapDispatchToProps = {decrementCount}

export default connect(null, mapDispatchToProps)(DecrementButton);