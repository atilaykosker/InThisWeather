import { SEARCH_VALUE } from '../constants/SearchValue';

const baseState = {
   city: '',
};

const getCity = (state = baseState, action) => {
   switch (action.type) {
      case 'GET_WEATHER_REQUEST':
         return { ...state };
      case 'WEATHER_FETCH_SUCCEEDED':
         return { ...action.city };
      default:
         return state;
   }
};

export default getCity;
