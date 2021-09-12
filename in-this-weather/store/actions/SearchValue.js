import { SEARCH_VALUE } from '../constants/SearchValue';

export const changeValue = (searchInputValue) => ({
   type: SEARCH_VALUE.SEARCH_VALUE,
   payload: searchInputValue
});
