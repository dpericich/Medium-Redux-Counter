import {combineReducers} from 'redux';
import { currentCount } from './CurrentCount';

const rootReducer = combineReducers({
    currentCount: currentCount
})

export default rootReducer