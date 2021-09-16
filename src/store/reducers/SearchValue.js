import {SEARCH_VALUE} from '../constants/SearchValue'

const baseState = {
    city: '',
}

const getCity = (state = baseState, action) => {
    console.log("action",action)
    switch(action.type){
        case 'GET_WEATHER_REQUEST':
            return { ...state}
        default:
            return state
    }
}



export default getCity