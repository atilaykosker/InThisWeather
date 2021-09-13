import {SEARCH_VALUE} from '../constants/SearchValue'

const baseState = {
    searchInputValue: ''
}

const searchValue = (state = baseState, action) => {
    switch(action.type){
        case SEARCH_VALUE.SEARCH_VALUE:
            return {...state , searchInputValue:action.payload}
        default:
            return state
    }
}

export default searchValue