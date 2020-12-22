import React from 'react';
import {connect} from 'react-redux';

const Display = ({currentCount}) => {
    return(
        <div className="counter">
            <h1 className="counter--title">The Current Count is</h1>
            <div className="counter--count">{currentCount}</div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {currentCount: state.currentCount.currentCount}
}

export default connect(mapStateToProps, null)(Display);